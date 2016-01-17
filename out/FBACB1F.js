goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9874__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9875__i = 0, G__9875__a = new Array(arguments.length -  0);
while (G__9875__i < G__9875__a.length) {G__9875__a[G__9875__i] = arguments[G__9875__i + 0]; ++G__9875__i;}
  args = new cljs.core.IndexedSeq(G__9875__a,0);
} 
return G__9874__delegate.call(this,args);};
G__9874.cljs$lang$maxFixedArity = 0;
G__9874.cljs$lang$applyTo = (function (arglist__9876){
var args = cljs.core.seq(arglist__9876);
return G__9874__delegate(args);
});
G__9874.cljs$core$IFn$_invoke$arity$variadic = G__9874__delegate;
return G__9874;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9877__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9878__i = 0, G__9878__a = new Array(arguments.length -  0);
while (G__9878__i < G__9878__a.length) {G__9878__a[G__9878__i] = arguments[G__9878__i + 0]; ++G__9878__i;}
  args = new cljs.core.IndexedSeq(G__9878__a,0);
} 
return G__9877__delegate.call(this,args);};
G__9877.cljs$lang$maxFixedArity = 0;
G__9877.cljs$lang$applyTo = (function (arglist__9879){
var args = cljs.core.seq(arglist__9879);
return G__9877__delegate(args);
});
G__9877.cljs$core$IFn$_invoke$arity$variadic = G__9877__delegate;
return G__9877;
})()
;

return null;
});
