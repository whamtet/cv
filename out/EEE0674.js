goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7098__i = 0, G__7098__a = new Array(arguments.length -  0);
while (G__7098__i < G__7098__a.length) {G__7098__a[G__7098__i] = arguments[G__7098__i + 0]; ++G__7098__i;}
  args = new cljs.core.IndexedSeq(G__7098__a,0);
} 
return G__7097__delegate.call(this,args);};
G__7097.cljs$lang$maxFixedArity = 0;
G__7097.cljs$lang$applyTo = (function (arglist__7099){
var args = cljs.core.seq(arglist__7099);
return G__7097__delegate(args);
});
G__7097.cljs$core$IFn$_invoke$arity$variadic = G__7097__delegate;
return G__7097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7101__i = 0, G__7101__a = new Array(arguments.length -  0);
while (G__7101__i < G__7101__a.length) {G__7101__a[G__7101__i] = arguments[G__7101__i + 0]; ++G__7101__i;}
  args = new cljs.core.IndexedSeq(G__7101__a,0);
} 
return G__7100__delegate.call(this,args);};
G__7100.cljs$lang$maxFixedArity = 0;
G__7100.cljs$lang$applyTo = (function (arglist__7102){
var args = cljs.core.seq(arglist__7102);
return G__7100__delegate(args);
});
G__7100.cljs$core$IFn$_invoke$arity$variadic = G__7100__delegate;
return G__7100;
})()
;

return null;
});
