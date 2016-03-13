(ns cv.core
  (:use-macros [dogfort.middleware.routes-macros :only [defroutes GET POST ANY]])
  (:require-macros
   [redlobster.macros :refer [let-realised promise]]
   )
  (:use [dogfort.http :only [run-http]])
  (:require [cljs.nodejs]
            [dogfort.middleware.defaults :as defaults]
            [redlobster.stream :as stream]
            [redlobster.promise :as promise]
            [dogfort.middleware.routes :refer [not-found]]
            cljs.reader
            [cv.job :as job]
            [cljs.pprint :refer [pprint]]
            ))

(cljs.nodejs/enable-util-print!)

(defn redirect [location]
  {:status 302
   :body ""
   :headers {"Location" location}})

(defroutes handler
  (ANY "/test" [] (pr-str @job/jobs))
  (ANY "/jobs" [] (-> @job/data :jobs pprint with-out-str))
  (POST "/update-jobs" [edn]
    (-> edn js/unescape job/set-jobs!)
    "ok")
  (ANY "/" req
       (redirect "/index.html"))
  (ANY "/get-pdf" [edn]
       (let [
             edn (js/unescape edn)
             ]
         (try
           {:status 200 :body (job/add-job edn)}
           (catch :default e
             (prn "errorz" e)
             {:status 500 :body (pr-str e)}))))
  (GET "/get-pdf2" [sym]
       {:status 200
        :body (job/get-job sym)
        :end-stream? true})
  not-found
  )

(defn print-through [handler]
  (fn [req]
    (prn "req" req)
    (handler req)))

(defn main [& args]
  (println "starting")
  (-> handler
      (defaults/wrap-defaults {:wrap-file "static"})
      (run-http {:port (or (.-PORT (.-env js/process)) 5000)})))

(set! *main-cli-fn* main)
