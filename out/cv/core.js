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
goog.require('cljs.pprint');
goog.require('cljs.reader');
cljs.nodejs.enable_util_print_BANG_.call(null);
cv.core.redirect = (function cv$core$redirect(location){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(302),new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",location], null)], null);
});
cv.core.handler = dogfort.middleware.routes.routes.call(null,(function (request__2835__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__2835__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),(function (request__2835__auto____$1){
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,cv.job.jobs));
}));
}),(function (request__2835__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__2835__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jobs"], null),(function (request__2835__auto____$1){
var sb__1204__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_5569_5572 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_5570_5573 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_5569_5572,_STAR_print_fn_STAR_5570_5573,sb__1204__auto__){
return (function (x__1205__auto__){
return sb__1204__auto__.append(x__1205__auto__);
});})(_STAR_print_newline_STAR_5569_5572,_STAR_print_fn_STAR_5570_5573,sb__1204__auto__))
;

try{cljs.pprint.pprint.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cv.job.data)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_5570_5573;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_5569_5572;
}
return [cljs.core.str(sb__1204__auto__)].join('');
}));
}),(function (request__2835__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__2835__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-jobs"], null),(function (request__2835__auto____$1){
var edn = cljs.core.get_in.call(null,request__2835__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"edn","edn",1317840885)], null),cljs.core.get_in.call(null,request__2835__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"edn"], null)));
cv.job.set_jobs_BANG_.call(null,unescape(edn));

return "ok";
}));
}),(function (request__2835__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__2835__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),(function (request__2835__auto____$1){
var req = request__2835__auto____$1;
return cv.core.redirect.call(null,"/index.html");
}));
}),(function (request__2835__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__2835__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-pdf"], null),(function (request__2835__auto____$1){
var edn = cljs.core.get_in.call(null,request__2835__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"edn","edn",1317840885)], null),cljs.core.get_in.call(null,request__2835__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"edn"], null)));
var edn__$1 = unescape(edn);
try{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cv.job.add_job.call(null,edn__$1),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["Content-Disposition","attachment; filename=\"Matthew Molloy CV.pdf\"","Content-Type","application/pdf"], null)], null);
}catch (e5571){var e = e5571;
cljs.core.prn.call(null,"errorz",e);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,e)], null);
}}));
}),(function (request__2835__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__2835__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-pdf2"], null),(function (request__2835__auto____$1){
var sym = cljs.core.get_in.call(null,request__2835__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core.get_in.call(null,request__2835__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"sym"], null)));
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
var len__1288__auto___5575 = arguments.length;
var i__1289__auto___5576 = (0);
while(true){
if((i__1289__auto___5576 < len__1288__auto___5575)){
args__1295__auto__.push((arguments[i__1289__auto___5576]));

var G__5577 = (i__1289__auto___5576 + (1));
i__1289__auto___5576 = G__5577;
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

cv.core.main.cljs$lang$applyTo = (function (seq5574){
return cv.core.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5574));
});
cljs.core._STAR_main_cli_fn_STAR_ = cv.core.main;

//# sourceMappingURL=core.js.map