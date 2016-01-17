goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10550__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10551__i = 0, G__10551__a = new Array(arguments.length -  0);
while (G__10551__i < G__10551__a.length) {G__10551__a[G__10551__i] = arguments[G__10551__i + 0]; ++G__10551__i;}
  args = new cljs.core.IndexedSeq(G__10551__a,0);
} 
return G__10550__delegate.call(this,args);};
G__10550.cljs$lang$maxFixedArity = 0;
G__10550.cljs$lang$applyTo = (function (arglist__10552){
var args = cljs.core.seq(arglist__10552);
return G__10550__delegate(args);
});
G__10550.cljs$core$IFn$_invoke$arity$variadic = G__10550__delegate;
return G__10550;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10553__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10554__i = 0, G__10554__a = new Array(arguments.length -  0);
while (G__10554__i < G__10554__a.length) {G__10554__a[G__10554__i] = arguments[G__10554__i + 0]; ++G__10554__i;}
  args = new cljs.core.IndexedSeq(G__10554__a,0);
} 
return G__10553__delegate.call(this,args);};
G__10553.cljs$lang$maxFixedArity = 0;
G__10553.cljs$lang$applyTo = (function (arglist__10555){
var args = cljs.core.seq(arglist__10555);
return G__10553__delegate(args);
});
G__10553.cljs$core$IFn$_invoke$arity$variadic = G__10553__delegate;
return G__10553;
})()
;

return null;
});
