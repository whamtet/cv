// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.params');
goog.require('cljs.core');
goog.require('dogfort.util.codec');
goog.require('dogfort.util.request');
goog.require('redlobster.stream');
goog.require('redlobster.promise');
dogfort.middleware.params.parse_params = (function dogfort$middleware$params$parse_params(params,encoding){
var params__$1 = dogfort.util.codec.form_decode.call(null,params,encoding);
if(cljs.core.map_QMARK_.call(null,params__$1)){
return params__$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Parse and assoc parameters from the query string with the request.
 */
dogfort.middleware.params.assoc_query_params = (function dogfort$middleware$params$assoc_query_params(request,encoding){
return cljs.core.merge_with.call(null,cljs.core.merge,request,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var query_string = temp__4423__auto__;
var params = dogfort.middleware.params.parse_params.call(null,query_string,encoding);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),params,new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null);
}
})());
});
/**
 * Adds parameters from the query string and the request body to the request
 *   map. See: wrap-params.
 */
dogfort.middleware.params.params_request = (function dogfort$middleware$params$params_request(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6412 = arguments.length;
var i__1289__auto___6413 = (0);
while(true){
if((i__1289__auto___6413 < len__1288__auto___6412)){
args__1295__auto__.push((arguments[i__1289__auto___6413]));

var G__6414 = (i__1289__auto___6413 + (1));
i__1289__auto___6413 = G__6414;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((2) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((2)),(0))):null);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1296__auto__);
});

dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic = (function (handler,request,p__6410){
var vec__6411 = p__6410;
var opts = cljs.core.nth.call(null,vec__6411,(0),null);
var encoding = (function (){var or__230__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
var or__230__auto____$1 = dogfort.util.request.character_encoding.call(null,request);
if(cljs.core.truth_(or__230__auto____$1)){
return or__230__auto____$1;
} else {
return "UTF-8";
}
}
})();
var request__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(request))?request:dogfort.middleware.params.assoc_query_params.call(null,request,encoding));
return handler.call(null,request__$1);
});

dogfort.middleware.params.params_request.cljs$lang$maxFixedArity = (2);

dogfort.middleware.params.params_request.cljs$lang$applyTo = (function (seq6407){
var G__6408 = cljs.core.first.call(null,seq6407);
var seq6407__$1 = cljs.core.next.call(null,seq6407);
var G__6409 = cljs.core.first.call(null,seq6407__$1);
var seq6407__$2 = cljs.core.next.call(null,seq6407__$1);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic(G__6408,G__6409,seq6407__$2);
});
/**
 * Middleware to parse urlencoded parameters from the query string and form
 *   body (if the request is a url-encoded form). Adds the following keys to
 *   the request map:
 * 
 *   :query-params - a map of parameters from the query string
 *   :form-params  - a map of parameters from the body
 *   :params       - a merged map of all types of parameter
 * 
 *   Accepts the following options:
 * 
 *   :encoding - encoding to use for url-decoding. If not specified, uses
 *   the request character encoding, or "UTF-8" if no request
 *   character encoding is set.
 */
dogfort.middleware.params.wrap_params = (function dogfort$middleware$params$wrap_params(var_args){
var args__1295__auto__ = [];
var len__1288__auto___6419 = arguments.length;
var i__1289__auto___6420 = (0);
while(true){
if((i__1289__auto___6420 < len__1288__auto___6419)){
args__1295__auto__.push((arguments[i__1289__auto___6420]));

var G__6421 = (i__1289__auto___6420 + (1));
i__1289__auto___6420 = G__6421;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((1) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((1)),(0))):null);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1296__auto__);
});

dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__6417){
var vec__6418 = p__6417;
var options = cljs.core.nth.call(null,vec__6418,(0),null);
return ((function (vec__6418,options){
return (function (request){
return dogfort.middleware.params.params_request.call(null,handler,request,options);
});
;})(vec__6418,options))
});

dogfort.middleware.params.wrap_params.cljs$lang$maxFixedArity = (1);

dogfort.middleware.params.wrap_params.cljs$lang$applyTo = (function (seq6415){
var G__6416 = cljs.core.first.call(null,seq6415);
var seq6415__$1 = cljs.core.next.call(null,seq6415);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic(G__6416,seq6415__$1);
});

//# sourceMappingURL=params.js.map