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
cv.job.data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var s_8203 = redlobster.io.slurp.call(null,"static/data.edn");
redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_8203], null),((function (s_8203){
return (function (){
return cljs.core.reset_BANG_.call(null,cv.job.data,clojure.walk.postwalk.call(null,cv.job.my_walk,cljs.tools.reader.read_string.call(null,cljs.core.deref.call(null,s_8203))));
});})(s_8203))
);
cv.job.st = cljs.js.empty_state.call(null);
cv.job.jobs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cv.job.set_jobs_BANG_ = (function cv$job$set_jobs_BANG_(new_jobs){
return cljs.core.swap_BANG_.call(null,cv.job.data,cljs.core.assoc,new cljs.core.Keyword(null,"jobs","jobs",-313607120),cv.job.read_cljs.call(null,new_jobs));
});
cv.job.my_eval = (function cv$job$my_eval(p__8204){
var map__8208 = p__8204;
var map__8208__$1 = ((((!((map__8208 == null)))?((((map__8208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8208):map__8208);
var source = cljs.core.get.call(null,map__8208__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{return eval(source);
}catch (e8210){var e = e8210;
return null;
}});
cv.job.read_cljs = (function cv$job$read_cljs(s){
var _STAR_data_readers_STAR_8212 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

try{return cljs.tools.reader.read_string.call(null,s);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_8212;
}});
cv.job.add_job = (function cv$job$add_job(s){
var job = [cljs.core.str(cljs.core.gensym.call(null))].join('');
cljs.js.eval.call(null,cv.job.st,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let","let",358118826,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"data","data",1407862150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,cv.job.data))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cv.job.read_cljs.call(null,s))))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cv.job.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),((function (job){
return (function (p1__8213_SHARP_){
return cljs.core.swap_BANG_.call(null,cv.job.jobs,cljs.core.assoc,job,cljs_pdfkit.core.pdf.call(null,p1__8213_SHARP_));
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