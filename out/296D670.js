goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7769__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7770__i = 0, G__7770__a = new Array(arguments.length -  0);
while (G__7770__i < G__7770__a.length) {G__7770__a[G__7770__i] = arguments[G__7770__i + 0]; ++G__7770__i;}
  args = new cljs.core.IndexedSeq(G__7770__a,0);
} 
return G__7769__delegate.call(this,args);};
G__7769.cljs$lang$maxFixedArity = 0;
G__7769.cljs$lang$applyTo = (function (arglist__7771){
var args = cljs.core.seq(arglist__7771);
return G__7769__delegate(args);
});
G__7769.cljs$core$IFn$_invoke$arity$variadic = G__7769__delegate;
return G__7769;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7772__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7773__i = 0, G__7773__a = new Array(arguments.length -  0);
while (G__7773__i < G__7773__a.length) {G__7773__a[G__7773__i] = arguments[G__7773__i + 0]; ++G__7773__i;}
  args = new cljs.core.IndexedSeq(G__7773__a,0);
} 
return G__7772__delegate.call(this,args);};
G__7772.cljs$lang$maxFixedArity = 0;
G__7772.cljs$lang$applyTo = (function (arglist__7774){
var args = cljs.core.seq(arglist__7774);
return G__7772__delegate(args);
});
G__7772.cljs$core$IFn$_invoke$arity$variadic = G__7772__delegate;
return G__7772;
})()
;

return null;
});
