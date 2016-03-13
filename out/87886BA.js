goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2130__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2131__i = 0, G__2131__a = new Array(arguments.length -  0);
while (G__2131__i < G__2131__a.length) {G__2131__a[G__2131__i] = arguments[G__2131__i + 0]; ++G__2131__i;}
  args = new cljs.core.IndexedSeq(G__2131__a,0);
} 
return G__2130__delegate.call(this,args);};
G__2130.cljs$lang$maxFixedArity = 0;
G__2130.cljs$lang$applyTo = (function (arglist__2132){
var args = cljs.core.seq(arglist__2132);
return G__2130__delegate(args);
});
G__2130.cljs$core$IFn$_invoke$arity$variadic = G__2130__delegate;
return G__2130;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2133__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2134__i = 0, G__2134__a = new Array(arguments.length -  0);
while (G__2134__i < G__2134__a.length) {G__2134__a[G__2134__i] = arguments[G__2134__i + 0]; ++G__2134__i;}
  args = new cljs.core.IndexedSeq(G__2134__a,0);
} 
return G__2133__delegate.call(this,args);};
G__2133.cljs$lang$maxFixedArity = 0;
G__2133.cljs$lang$applyTo = (function (arglist__2135){
var args = cljs.core.seq(arglist__2135);
return G__2133__delegate(args);
});
G__2133.cljs$core$IFn$_invoke$arity$variadic = G__2133__delegate;
return G__2133;
})()
;

return null;
});
