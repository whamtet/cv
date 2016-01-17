(ns cv.job
  (:require
   [cljs.js :as cljs]
   [cljs.tools.reader :refer [read-string] :as r]
   [cljs-pdfkit.core :as cljs-pdfkit]
   [redlobster.io :refer [slurp]]
   [redlobster.promise]
   [clojure.walk :as walk]
   [clojure.string :as string]
   [cljs.tagged-literals :as tags]
   )
  (:require-macros
   [redlobster.macros :refer [let-realised]]
   ))

(defn my-walk [s]
  (if (string? s)
    (string/replace s #"[ \n]{3,}" "  ")
    s))

(let-realised [s (slurp "static/data.edn")]
              (def data (walk/postwalk my-walk (read-string @s))))

(def st (cljs/empty-state))
(def jobs (atom {}))

(defn my-eval [{:keys [source]}]
  (try
    (js/eval source)
    (catch :default e)))

(defn read-cljs [s]
  (binding [r/*data-readers* tags/*cljs-data-readers*]
    (read-string s)))

(defn add-job [s]
  (let [
        job (str (gensym))
        ]
    (cljs/eval
     st
     `(~'let [~'data ~data] ~(read-cljs s))
     {:eval my-eval
      :ns 'cljs.core
      }
     #(swap! jobs assoc job (cljs-pdfkit/pdf %)))
    (js/setTimeout #(swap! jobs dissoc job) 10000)
    job))

(defn get-job [s]
  (let [
        job (get @jobs s)
        ]
    (swap! jobs dissoc s)
    job))
