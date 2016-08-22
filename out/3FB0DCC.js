goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5580__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5581__i = 0, G__5581__a = new Array(arguments.length -  0);
while (G__5581__i < G__5581__a.length) {G__5581__a[G__5581__i] = arguments[G__5581__i + 0]; ++G__5581__i;}
  args = new cljs.core.IndexedSeq(G__5581__a,0);
} 
return G__5580__delegate.call(this,args);};
G__5580.cljs$lang$maxFixedArity = 0;
G__5580.cljs$lang$applyTo = (function (arglist__5582){
var args = cljs.core.seq(arglist__5582);
return G__5580__delegate(args);
});
G__5580.cljs$core$IFn$_invoke$arity$variadic = G__5580__delegate;
return G__5580;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__5583__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5584__i = 0, G__5584__a = new Array(arguments.length -  0);
while (G__5584__i < G__5584__a.length) {G__5584__a[G__5584__i] = arguments[G__5584__i + 0]; ++G__5584__i;}
  args = new cljs.core.IndexedSeq(G__5584__a,0);
} 
return G__5583__delegate.call(this,args);};
G__5583.cljs$lang$maxFixedArity = 0;
G__5583.cljs$lang$applyTo = (function (arglist__5585){
var args = cljs.core.seq(arglist__5585);
return G__5583__delegate(args);
});
G__5583.cljs$core$IFn$_invoke$arity$variadic = G__5583__delegate;
return G__5583;
})()
;

return null;
});
