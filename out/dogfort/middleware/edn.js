// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.edn');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('redlobster.stream');
goog.require('cljs.reader');
dogfort.middleware.edn.edn_request_QMARK_ = (function dogfort$middleware$edn$edn_request_QMARK_(req){
var temp__4423__auto__ = cljs.core.get_in.call(null,req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"");
if(cljs.core.truth_(temp__4423__auto__)){
var type = temp__4423__auto__;
return !(cljs.core.empty_QMARK_.call(null,cljs.core.re_find.call(null,/^application\/(vnd.+)?edn/,type)));
} else {
return null;
}
});
/**
 * If the request has the edn content-type, it will attempt to read
 *   the body as edn and then assoc it to the request under :edn-params
 *   and merged to :params.
 * 
 *   It may take an opts map to pass to clojure.edn/read-string
 */
dogfort.middleware.edn.wrap_edn_params = (function dogfort$middleware$edn$wrap_edn_params(var_args){
var args6350 = [];
var len__1288__auto___6353 = arguments.length;
var i__1289__auto___6354 = (0);
while(true){
if((i__1289__auto___6354 < len__1288__auto___6353)){
args6350.push((arguments[i__1289__auto___6354]));

var G__6355 = (i__1289__auto___6354 + (1));
i__1289__auto___6354 = G__6355;
continue;
} else {
}
break;
}

var G__6352 = args6350.length;
switch (G__6352) {
case 1:
return dogfort.middleware.edn.wrap_edn_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dogfort.middleware.edn.wrap_edn_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6350.length)].join('')));

}
});

dogfort.middleware.edn.wrap_edn_params.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return dogfort.middleware.edn.wrap_edn_params.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

dogfort.middleware.edn.wrap_edn_params.cljs$core$IFn$_invoke$arity$2 = (function (handler,opts){
return (function (req){
var temp__4423__auto__ = (function (){var and__218__auto__ = dogfort.middleware.edn.edn_request_QMARK_.call(null,req);
if(cljs.core.truth_(and__218__auto__)){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(req);
} else {
return and__218__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var body = temp__4423__auto__;
var s = redlobster.stream.read_stream.call(null,body);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),((function (s,body,temp__4423__auto__){
return (function (){
var edn_params = cljs.reader.read_string.call(null,cljs.core.deref.call(null,s));
return handler.call(null,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"edn-params","edn-params",894273052),edn_params,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(req),edn_params)));
});})(s,body,temp__4423__auto__))
);
} else {
return handler.call(null,req);
}
});
});

dogfort.middleware.edn.wrap_edn_params.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=edn.js.map