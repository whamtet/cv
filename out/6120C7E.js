goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2340__i = 0, G__2340__a = new Array(arguments.length -  0);
while (G__2340__i < G__2340__a.length) {G__2340__a[G__2340__i] = arguments[G__2340__i + 0]; ++G__2340__i;}
  args = new cljs.core.IndexedSeq(G__2340__a,0);
} 
return G__2339__delegate.call(this,args);};
G__2339.cljs$lang$maxFixedArity = 0;
G__2339.cljs$lang$applyTo = (function (arglist__2341){
var args = cljs.core.seq(arglist__2341);
return G__2339__delegate(args);
});
G__2339.cljs$core$IFn$_invoke$arity$variadic = G__2339__delegate;
return G__2339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2343__i = 0, G__2343__a = new Array(arguments.length -  0);
while (G__2343__i < G__2343__a.length) {G__2343__a[G__2343__i] = arguments[G__2343__i + 0]; ++G__2343__i;}
  args = new cljs.core.IndexedSeq(G__2343__a,0);
} 
return G__2342__delegate.call(this,args);};
G__2342.cljs$lang$maxFixedArity = 0;
G__2342.cljs$lang$applyTo = (function (arglist__2344){
var args = cljs.core.seq(arglist__2344);
return G__2342__delegate(args);
});
G__2342.cljs$core$IFn$_invoke$arity$variadic = G__2342__delegate;
return G__2342;
})()
;

return null;
});
