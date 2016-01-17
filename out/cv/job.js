// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cv.job');
goog.require('cljs.core');
goog.require('redlobster.io');
goog.require('redlobster.promise');
goog.require('cljs.js');
goog.require('cljs_pdfkit.core');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('clojure.walk');
goog.require('clojure.string');
cv.job.my_walk = (function cv$job$my_walk(s){
if(typeof s === 'string'){
return clojure.string.replace.call(null,s,/[ \n]{3,}/,"  ");
} else {
return s;
}
});
var s_11203 = redlobster.io.slurp.call(null,"static/data.edn");
redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_11203], null),((function (s_11203){
return (function (){
cv.job.data = clojure.walk.postwalk.call(null,cv.job.my_walk,cljs.tools.reader.read_string.call(null,cljs.core.deref.call(null,s_11203)));
});})(s_11203))
);
cv.job.st = cljs.js.empty_state.call(null);
cv.job.jobs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cv.job.my_eval = (function cv$job$my_eval(p__11204){
var map__11208 = p__11204;
var map__11208__$1 = ((((!((map__11208 == null)))?((((map__11208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11208):map__11208);
var source = cljs.core.get.call(null,map__11208__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{return eval(source);
}catch (e11210){var e = e11210;
return null;
}});
cv.job.read_cljs = (function cv$job$read_cljs(s){
var _STAR_data_readers_STAR_11212 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

try{return cljs.tools.reader.read_string.call(null,s);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_11212;
}});
cv.job.add_job = (function cv$job$add_job(s){
var job = [cljs.core.str(cljs.core.gensym.call(null))].join('');
cljs.js.eval.call(null,cv.job.st,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let","let",358118826,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"data","data",1407862150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cv.job.data)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cv.job.read_cljs.call(null,s))))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cv.job.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),((function (job){
return (function (p1__11213_SHARP_){
return cljs.core.swap_BANG_.call(null,cv.job.jobs,cljs.core.assoc,job,cljs_pdfkit.core.pdf.call(null,p1__11213_SHARP_));
});})(job))
);

setTimeout(((function (job){
return (function (){
return cljs.core.swap_BANG_.call(null,cv.job.jobs,cljs.core.dissoc,job);
});})(job))
,(10000));

return job;
});
cv.job.get_job = (function cv$job$get_job(s){
var job = cljs.core.get.call(null,cljs.core.deref.call(null,cv.job.jobs),s);
cljs.core.swap_BANG_.call(null,cv.job.jobs,cljs.core.dissoc,s);

return job;
});

//# sourceMappingURL=job.js.map