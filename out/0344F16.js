goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8837__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8838__i = 0, G__8838__a = new Array(arguments.length -  0);
while (G__8838__i < G__8838__a.length) {G__8838__a[G__8838__i] = arguments[G__8838__i + 0]; ++G__8838__i;}
  args = new cljs.core.IndexedSeq(G__8838__a,0);
} 
return G__8837__delegate.call(this,args);};
G__8837.cljs$lang$maxFixedArity = 0;
G__8837.cljs$lang$applyTo = (function (arglist__8839){
var args = cljs.core.seq(arglist__8839);
return G__8837__delegate(args);
});
G__8837.cljs$core$IFn$_invoke$arity$variadic = G__8837__delegate;
return G__8837;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8840__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8841__i = 0, G__8841__a = new Array(arguments.length -  0);
while (G__8841__i < G__8841__a.length) {G__8841__a[G__8841__i] = arguments[G__8841__i + 0]; ++G__8841__i;}
  args = new cljs.core.IndexedSeq(G__8841__a,0);
} 
return G__8840__delegate.call(this,args);};
G__8840.cljs$lang$maxFixedArity = 0;
G__8840.cljs$lang$applyTo = (function (arglist__8842){
var args = cljs.core.seq(arglist__8842);
return G__8840__delegate(args);
});
G__8840.cljs$core$IFn$_invoke$arity$variadic = G__8840__delegate;
return G__8840;
})()
;

return null;
});
