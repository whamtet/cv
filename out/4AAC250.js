goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10887__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10888__i = 0, G__10888__a = new Array(arguments.length -  0);
while (G__10888__i < G__10888__a.length) {G__10888__a[G__10888__i] = arguments[G__10888__i + 0]; ++G__10888__i;}
  args = new cljs.core.IndexedSeq(G__10888__a,0);
} 
return G__10887__delegate.call(this,args);};
G__10887.cljs$lang$maxFixedArity = 0;
G__10887.cljs$lang$applyTo = (function (arglist__10889){
var args = cljs.core.seq(arglist__10889);
return G__10887__delegate(args);
});
G__10887.cljs$core$IFn$_invoke$arity$variadic = G__10887__delegate;
return G__10887;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10890__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10891__i = 0, G__10891__a = new Array(arguments.length -  0);
while (G__10891__i < G__10891__a.length) {G__10891__a[G__10891__i] = arguments[G__10891__i + 0]; ++G__10891__i;}
  args = new cljs.core.IndexedSeq(G__10891__a,0);
} 
return G__10890__delegate.call(this,args);};
G__10890.cljs$lang$maxFixedArity = 0;
G__10890.cljs$lang$applyTo = (function (arglist__10892){
var args = cljs.core.seq(arglist__10892);
return G__10890__delegate(args);
});
G__10890.cljs$core$IFn$_invoke$arity$variadic = G__10890__delegate;
return G__10890;
})()
;

return null;
});
