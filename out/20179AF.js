goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9189__i = 0, G__9189__a = new Array(arguments.length -  0);
while (G__9189__i < G__9189__a.length) {G__9189__a[G__9189__i] = arguments[G__9189__i + 0]; ++G__9189__i;}
  args = new cljs.core.IndexedSeq(G__9189__a,0);
} 
return G__9188__delegate.call(this,args);};
G__9188.cljs$lang$maxFixedArity = 0;
G__9188.cljs$lang$applyTo = (function (arglist__9190){
var args = cljs.core.seq(arglist__9190);
return G__9188__delegate(args);
});
G__9188.cljs$core$IFn$_invoke$arity$variadic = G__9188__delegate;
return G__9188;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9191__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9192__i = 0, G__9192__a = new Array(arguments.length -  0);
while (G__9192__i < G__9192__a.length) {G__9192__a[G__9192__i] = arguments[G__9192__i + 0]; ++G__9192__i;}
  args = new cljs.core.IndexedSeq(G__9192__a,0);
} 
return G__9191__delegate.call(this,args);};
G__9191.cljs$lang$maxFixedArity = 0;
G__9191.cljs$lang$applyTo = (function (arglist__9193){
var args = cljs.core.seq(arglist__9193);
return G__9191__delegate(args);
});
G__9191.cljs$core$IFn$_invoke$arity$variadic = G__9191__delegate;
return G__9191;
})()
;

return null;
});
