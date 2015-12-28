(ns my-cljs.compile)

(require 'cljs.build.api)

(defn -main [& [ns]]
  (cljs.build.api/watch
   "src"
   {:main (symbol ns)
    :output-to "../main.js"
    :output-dir "../out"
    :source-map "../main.js.map"
    :optimizations :simple
    }))
