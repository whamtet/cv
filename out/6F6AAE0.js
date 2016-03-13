goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5258__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5259__i = 0, G__5259__a = new Array(arguments.length -  0);
while (G__5259__i < G__5259__a.length) {G__5259__a[G__5259__i] = arguments[G__5259__i + 0]; ++G__5259__i;}
  args = new cljs.core.IndexedSeq(G__5259__a,0);
} 
return G__5258__delegate.call(this,args);};
G__5258.cljs$lang$maxFixedArity = 0;
G__5258.cljs$lang$applyTo = (function (arglist__5260){
var args = cljs.core.seq(arglist__5260);
return G__5258__delegate(args);
});
G__5258.cljs$core$IFn$_invoke$arity$variadic = G__5258__delegate;
return G__5258;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__5261__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5262__i = 0, G__5262__a = new Array(arguments.length -  0);
while (G__5262__i < G__5262__a.length) {G__5262__a[G__5262__i] = arguments[G__5262__i + 0]; ++G__5262__i;}
  args = new cljs.core.IndexedSeq(G__5262__a,0);
} 
return G__5261__delegate.call(this,args);};
G__5261.cljs$lang$maxFixedArity = 0;
G__5261.cljs$lang$applyTo = (function (arglist__5263){
var args = cljs.core.seq(arglist__5263);
return G__5261__delegate(args);
});
G__5261.cljs$core$IFn$_invoke$arity$variadic = G__5261__delegate;
return G__5261;
})()
;

return null;
});
