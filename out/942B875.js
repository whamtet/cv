goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2453__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2454__i = 0, G__2454__a = new Array(arguments.length -  0);
while (G__2454__i < G__2454__a.length) {G__2454__a[G__2454__i] = arguments[G__2454__i + 0]; ++G__2454__i;}
  args = new cljs.core.IndexedSeq(G__2454__a,0);
} 
return G__2453__delegate.call(this,args);};
G__2453.cljs$lang$maxFixedArity = 0;
G__2453.cljs$lang$applyTo = (function (arglist__2455){
var args = cljs.core.seq(arglist__2455);
return G__2453__delegate(args);
});
G__2453.cljs$core$IFn$_invoke$arity$variadic = G__2453__delegate;
return G__2453;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2456__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2457__i = 0, G__2457__a = new Array(arguments.length -  0);
while (G__2457__i < G__2457__a.length) {G__2457__a[G__2457__i] = arguments[G__2457__i + 0]; ++G__2457__i;}
  args = new cljs.core.IndexedSeq(G__2457__a,0);
} 
return G__2456__delegate.call(this,args);};
G__2456.cljs$lang$maxFixedArity = 0;
G__2456.cljs$lang$applyTo = (function (arglist__2458){
var args = cljs.core.seq(arglist__2458);
return G__2456__delegate(args);
});
G__2456.cljs$core$IFn$_invoke$arity$variadic = G__2456__delegate;
return G__2456;
})()
;

return null;
});
