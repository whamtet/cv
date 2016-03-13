goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7600__i = 0, G__7600__a = new Array(arguments.length -  0);
while (G__7600__i < G__7600__a.length) {G__7600__a[G__7600__i] = arguments[G__7600__i + 0]; ++G__7600__i;}
  args = new cljs.core.IndexedSeq(G__7600__a,0);
} 
return G__7599__delegate.call(this,args);};
G__7599.cljs$lang$maxFixedArity = 0;
G__7599.cljs$lang$applyTo = (function (arglist__7601){
var args = cljs.core.seq(arglist__7601);
return G__7599__delegate(args);
});
G__7599.cljs$core$IFn$_invoke$arity$variadic = G__7599__delegate;
return G__7599;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7603__i = 0, G__7603__a = new Array(arguments.length -  0);
while (G__7603__i < G__7603__a.length) {G__7603__a[G__7603__i] = arguments[G__7603__i + 0]; ++G__7603__i;}
  args = new cljs.core.IndexedSeq(G__7603__a,0);
} 
return G__7602__delegate.call(this,args);};
G__7602.cljs$lang$maxFixedArity = 0;
G__7602.cljs$lang$applyTo = (function (arglist__7604){
var args = cljs.core.seq(arglist__7604);
return G__7602__delegate(args);
});
G__7602.cljs$core$IFn$_invoke$arity$variadic = G__7602__delegate;
return G__7602;
})()
;

return null;
});
