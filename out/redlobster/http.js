// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.http');
goog.require('cljs.core');
goog.require('redlobster.events');
goog.require('redlobster.promise');
goog.require('redlobster.stream');
goog.require('cljs.node');
redlobster.http.http = require("http");
redlobster.http.request = (function redlobster$http$request(var_args){
var args4516 = [];
var len__1288__auto___4519 = arguments.length;
var i__1289__auto___4520 = (0);
while(true){
if((i__1289__auto___4520 < len__1288__auto___4519)){
args4516.push((arguments[i__1289__auto___4520]));

var G__4521 = (i__1289__auto___4520 + (1));
i__1289__auto___4520 = G__4521;
continue;
} else {
}
break;
}

var G__4518 = args4516.length;
switch (G__4518) {
case 2:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4516.length)].join('')));

}
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$2 = (function (options,body){
var promise__4434__auto__ = redlobster.promise.promise.call(null);
var realise__4435__auto__ = ((function (promise__4434__auto__){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__))
;
var realise_error__4437__auto__ = ((function (promise__4434__auto__,realise__4435__auto__){
return (function (promise__4434__auto____$1,value__4436__auto__){
return redlobster.promise.realise_error.call(null,promise__4434__auto____$1,value__4436__auto__);
});})(promise__4434__auto__,realise__4435__auto__))
;
var realise = cljs.core.partial.call(null,realise__4435__auto__,promise__4434__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__4437__auto__,promise__4434__auto__);
var req_4523 = redlobster.http.http.request(cljs.core.clj__GT_js.call(null,options),((function (promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error){
return (function (p1__4514_SHARP_){
return realise.call(null,p1__4514_SHARP_);
});})(promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error))
);
redlobster.events.on.call(null,req_4523,"error",((function (req_4523,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error){
return (function (p1__4515_SHARP_){
return realise_error.call(null,p1__4515_SHARP_);
});})(req_4523,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error))
);

if(cljs.core.truth_(body)){
redlobster.stream.write_stream.call(null,req_4523,body);
} else {
req_4523.end();
}

return promise__4434__auto__;
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$1 = (function (options){
return redlobster.http.request.call(null,options,null);
});

redlobster.http.request.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=http.js.map