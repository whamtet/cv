// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.http');
goog.require('cljs.core');
goog.require('redlobster.events');
goog.require('redlobster.promise');
goog.require('redlobster.stream');
goog.require('cljs.node');
redlobster.http.http = require("http");
redlobster.http.request = (function redlobster$http$request(var_args){
var args4499 = [];
var len__1288__auto___4502 = arguments.length;
var i__1289__auto___4503 = (0);
while(true){
if((i__1289__auto___4503 < len__1288__auto___4502)){
args4499.push((arguments[i__1289__auto___4503]));

var G__4504 = (i__1289__auto___4503 + (1));
i__1289__auto___4503 = G__4504;
continue;
} else {
}
break;
}

var G__4501 = args4499.length;
switch (G__4501) {
case 2:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4499.length)].join('')));

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
var req_4506 = redlobster.http.http.request(cljs.core.clj__GT_js.call(null,options),((function (promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error){
return (function (p1__4497_SHARP_){
return realise.call(null,p1__4497_SHARP_);
});})(promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error))
);
redlobster.events.on.call(null,req_4506,"error",((function (req_4506,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error){
return (function (p1__4498_SHARP_){
return realise_error.call(null,p1__4498_SHARP_);
});})(req_4506,promise__4434__auto__,realise__4435__auto__,realise_error__4437__auto__,realise,realise_error))
);

if(cljs.core.truth_(body)){
redlobster.stream.write_stream.call(null,req_4506,body);
} else {
req_4506.end();
}

return promise__4434__auto__;
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$1 = (function (options){
return redlobster.http.request.call(null,options,null);
});

redlobster.http.request.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=http.js.map