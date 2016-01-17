goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11223__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11224__i = 0, G__11224__a = new Array(arguments.length -  0);
while (G__11224__i < G__11224__a.length) {G__11224__a[G__11224__i] = arguments[G__11224__i + 0]; ++G__11224__i;}
  args = new cljs.core.IndexedSeq(G__11224__a,0);
} 
return G__11223__delegate.call(this,args);};
G__11223.cljs$lang$maxFixedArity = 0;
G__11223.cljs$lang$applyTo = (function (arglist__11225){
var args = cljs.core.seq(arglist__11225);
return G__11223__delegate(args);
});
G__11223.cljs$core$IFn$_invoke$arity$variadic = G__11223__delegate;
return G__11223;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11226__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11227__i = 0, G__11227__a = new Array(arguments.length -  0);
while (G__11227__i < G__11227__a.length) {G__11227__a[G__11227__i] = arguments[G__11227__i + 0]; ++G__11227__i;}
  args = new cljs.core.IndexedSeq(G__11227__a,0);
} 
return G__11226__delegate.call(this,args);};
G__11226.cljs$lang$maxFixedArity = 0;
G__11226.cljs$lang$applyTo = (function (arglist__11228){
var args = cljs.core.seq(arglist__11228);
return G__11226__delegate(args);
});
G__11226.cljs$core$IFn$_invoke$arity$variadic = G__11226__delegate;
return G__11226;
})()
;

return null;
});
