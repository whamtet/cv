goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7800__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7801__i = 0, G__7801__a = new Array(arguments.length -  0);
while (G__7801__i < G__7801__a.length) {G__7801__a[G__7801__i] = arguments[G__7801__i + 0]; ++G__7801__i;}
  args = new cljs.core.IndexedSeq(G__7801__a,0);
} 
return G__7800__delegate.call(this,args);};
G__7800.cljs$lang$maxFixedArity = 0;
G__7800.cljs$lang$applyTo = (function (arglist__7802){
var args = cljs.core.seq(arglist__7802);
return G__7800__delegate(args);
});
G__7800.cljs$core$IFn$_invoke$arity$variadic = G__7800__delegate;
return G__7800;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7803__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7804__i = 0, G__7804__a = new Array(arguments.length -  0);
while (G__7804__i < G__7804__a.length) {G__7804__a[G__7804__i] = arguments[G__7804__i + 0]; ++G__7804__i;}
  args = new cljs.core.IndexedSeq(G__7804__a,0);
} 
return G__7803__delegate.call(this,args);};
G__7803.cljs$lang$maxFixedArity = 0;
G__7803.cljs$lang$applyTo = (function (arglist__7805){
var args = cljs.core.seq(arglist__7805);
return G__7803__delegate(args);
});
G__7803.cljs$core$IFn$_invoke$arity$variadic = G__7803__delegate;
return G__7803;
})()
;

return null;
});
