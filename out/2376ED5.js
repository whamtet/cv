goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8493__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8494__i = 0, G__8494__a = new Array(arguments.length -  0);
while (G__8494__i < G__8494__a.length) {G__8494__a[G__8494__i] = arguments[G__8494__i + 0]; ++G__8494__i;}
  args = new cljs.core.IndexedSeq(G__8494__a,0);
} 
return G__8493__delegate.call(this,args);};
G__8493.cljs$lang$maxFixedArity = 0;
G__8493.cljs$lang$applyTo = (function (arglist__8495){
var args = cljs.core.seq(arglist__8495);
return G__8493__delegate(args);
});
G__8493.cljs$core$IFn$_invoke$arity$variadic = G__8493__delegate;
return G__8493;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8496__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8497__i = 0, G__8497__a = new Array(arguments.length -  0);
while (G__8497__i < G__8497__a.length) {G__8497__a[G__8497__i] = arguments[G__8497__i + 0]; ++G__8497__i;}
  args = new cljs.core.IndexedSeq(G__8497__a,0);
} 
return G__8496__delegate.call(this,args);};
G__8496.cljs$lang$maxFixedArity = 0;
G__8496.cljs$lang$applyTo = (function (arglist__8498){
var args = cljs.core.seq(arglist__8498);
return G__8496__delegate(args);
});
G__8496.cljs$core$IFn$_invoke$arity$variadic = G__8496__delegate;
return G__8496;
})()
;

return null;
});
