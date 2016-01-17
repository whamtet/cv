goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8149__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8150__i = 0, G__8150__a = new Array(arguments.length -  0);
while (G__8150__i < G__8150__a.length) {G__8150__a[G__8150__i] = arguments[G__8150__i + 0]; ++G__8150__i;}
  args = new cljs.core.IndexedSeq(G__8150__a,0);
} 
return G__8149__delegate.call(this,args);};
G__8149.cljs$lang$maxFixedArity = 0;
G__8149.cljs$lang$applyTo = (function (arglist__8151){
var args = cljs.core.seq(arglist__8151);
return G__8149__delegate(args);
});
G__8149.cljs$core$IFn$_invoke$arity$variadic = G__8149__delegate;
return G__8149;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8152__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8153__i = 0, G__8153__a = new Array(arguments.length -  0);
while (G__8153__i < G__8153__a.length) {G__8153__a[G__8153__i] = arguments[G__8153__i + 0]; ++G__8153__i;}
  args = new cljs.core.IndexedSeq(G__8153__a,0);
} 
return G__8152__delegate.call(this,args);};
G__8152.cljs$lang$maxFixedArity = 0;
G__8152.cljs$lang$applyTo = (function (arglist__8154){
var args = cljs.core.seq(arglist__8154);
return G__8152__delegate(args);
});
G__8152.cljs$core$IFn$_invoke$arity$variadic = G__8152__delegate;
return G__8152;
})()
;

return null;
});
