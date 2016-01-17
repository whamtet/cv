// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cv.core');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('dogfort.middleware.defaults');
goog.require('cv.job');
goog.require('redlobster.stream');
goog.require('dogfort.middleware.routes');
goog.require('cljs.nodejs');
goog.require('dogfort.http');
goog.require('cljs.reader');
cljs.nodejs.enable_util_print_BANG_.call(null);
cv.core.redirect = (function cv$core$redirect(location){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(302),new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",location], null)], null);
});
cv.core.handler = dogfort.middleware.routes.routes.call(null,(function (request__6871__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6871__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),(function (request__6871__auto____$1){
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,cv.job.jobs));
}));
}),(function (request__6871__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6871__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),(function (request__6871__auto____$1){
var req = request__6871__auto____$1;
return cv.core.redirect.call(null,"/index.html");
}));
}),(function (request__6871__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6871__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-pdf"], null),(function (request__6871__auto____$1){
var edn = cljs.core.get_in.call(null,request__6871__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"edn","edn",1317840885)], null),cljs.core.get_in.call(null,request__6871__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"edn"], null)));
var edn__$1 = unescape(edn);
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cv.job.add_job.call(null,edn__$1)], null);
}catch (e11216){var e = e11216;
cljs.core.prn.call(null,"errorz",e);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,e)], null);
}}));
}),(function (request__6871__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6871__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-pdf2"], null),(function (request__6871__auto____$1){
var sym = cljs.core.get_in.call(null,request__6871__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core.get_in.call(null,request__6871__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"sym"], null)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cv.job.get_job.call(null,sym),new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884),true], null);
}));
}),dogfort.middleware.routes.not_found);
cv.core.print_through = (function cv$core$print_through(handler){
return (function (req){
cljs.core.prn.call(null,"req",req);

return handler.call(null,req);
});
});
cv.core.main = (function cv$core$main(var_args){
var args__1295__auto__ = [];
var len__1288__auto___11218 = arguments.length;
var i__1289__auto___11219 = (0);
while(true){
if((i__1289__auto___11219 < len__1288__auto___11218)){
args__1295__auto__.push((arguments[i__1289__auto___11219]));

var G__11220 = (i__1289__auto___11219 + (1));
i__1289__auto___11219 = G__11220;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((0) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((0)),(0))):null);
return cv.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__1296__auto__);
});

cv.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"starting");

return dogfort.http.run_http.call(null,dogfort.middleware.defaults.wrap_defaults.call(null,cv.core.handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-file","wrap-file",-1438240540),"static"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(function (){var or__230__auto__ = process.env.PORT;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (5000);
}
})()], null));
});

cv.core.main.cljs$lang$maxFixedArity = (0);

cv.core.main.cljs$lang$applyTo = (function (seq11217){
return cv.core.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11217));
});
cljs.core._STAR_main_cli_fn_STAR_ = cv.core.main;

//# sourceMappingURL=core.js.map