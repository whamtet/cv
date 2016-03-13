goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6252__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6253__i = 0, G__6253__a = new Array(arguments.length -  0);
while (G__6253__i < G__6253__a.length) {G__6253__a[G__6253__i] = arguments[G__6253__i + 0]; ++G__6253__i;}
  args = new cljs.core.IndexedSeq(G__6253__a,0);
} 
return G__6252__delegate.call(this,args);};
G__6252.cljs$lang$maxFixedArity = 0;
G__6252.cljs$lang$applyTo = (function (arglist__6254){
var args = cljs.core.seq(arglist__6254);
return G__6252__delegate(args);
});
G__6252.cljs$core$IFn$_invoke$arity$variadic = G__6252__delegate;
return G__6252;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6255__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6256__i = 0, G__6256__a = new Array(arguments.length -  0);
while (G__6256__i < G__6256__a.length) {G__6256__a[G__6256__i] = arguments[G__6256__i + 0]; ++G__6256__i;}
  args = new cljs.core.IndexedSeq(G__6256__a,0);
} 
return G__6255__delegate.call(this,args);};
G__6255.cljs$lang$maxFixedArity = 0;
G__6255.cljs$lang$applyTo = (function (arglist__6257){
var args = cljs.core.seq(arglist__6257);
return G__6255__delegate(args);
});
G__6255.cljs$core$IFn$_invoke$arity$variadic = G__6255__delegate;
return G__6255;
})()
;

return null;
});
