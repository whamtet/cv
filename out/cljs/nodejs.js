// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7284__i = 0, G__7284__a = new Array(arguments.length -  0);
while (G__7284__i < G__7284__a.length) {G__7284__a[G__7284__i] = arguments[G__7284__i + 0]; ++G__7284__i;}
  args = new cljs.core.IndexedSeq(G__7284__a,0);
} 
return G__7283__delegate.call(this,args);};
G__7283.cljs$lang$maxFixedArity = 0;
G__7283.cljs$lang$applyTo = (function (arglist__7285){
var args = cljs.core.seq(arglist__7285);
return G__7283__delegate(args);
});
G__7283.cljs$core$IFn$_invoke$arity$variadic = G__7283__delegate;
return G__7283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7287__i = 0, G__7287__a = new Array(arguments.length -  0);
while (G__7287__i < G__7287__a.length) {G__7287__a[G__7287__i] = arguments[G__7287__i + 0]; ++G__7287__i;}
  args = new cljs.core.IndexedSeq(G__7287__a,0);
} 
return G__7286__delegate.call(this,args);};
G__7286.cljs$lang$maxFixedArity = 0;
G__7286.cljs$lang$applyTo = (function (arglist__7288){
var args = cljs.core.seq(arglist__7288);
return G__7286__delegate(args);
});
G__7286.cljs$core$IFn$_invoke$arity$variadic = G__7286__delegate;
return G__7286;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map