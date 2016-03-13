goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2776__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2777__i = 0, G__2777__a = new Array(arguments.length -  0);
while (G__2777__i < G__2777__a.length) {G__2777__a[G__2777__i] = arguments[G__2777__i + 0]; ++G__2777__i;}
  args = new cljs.core.IndexedSeq(G__2777__a,0);
} 
return G__2776__delegate.call(this,args);};
G__2776.cljs$lang$maxFixedArity = 0;
G__2776.cljs$lang$applyTo = (function (arglist__2778){
var args = cljs.core.seq(arglist__2778);
return G__2776__delegate(args);
});
G__2776.cljs$core$IFn$_invoke$arity$variadic = G__2776__delegate;
return G__2776;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2779__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2780__i = 0, G__2780__a = new Array(arguments.length -  0);
while (G__2780__i < G__2780__a.length) {G__2780__a[G__2780__i] = arguments[G__2780__i + 0]; ++G__2780__i;}
  args = new cljs.core.IndexedSeq(G__2780__a,0);
} 
return G__2779__delegate.call(this,args);};
G__2779.cljs$lang$maxFixedArity = 0;
G__2779.cljs$lang$applyTo = (function (arglist__2781){
var args = cljs.core.seq(arglist__2781);
return G__2779__delegate(args);
});
G__2779.cljs$core$IFn$_invoke$arity$variadic = G__2779__delegate;
return G__2779;
})()
;

return null;
});
