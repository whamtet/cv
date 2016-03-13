goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7272__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7273__i = 0, G__7273__a = new Array(arguments.length -  0);
while (G__7273__i < G__7273__a.length) {G__7273__a[G__7273__i] = arguments[G__7273__i + 0]; ++G__7273__i;}
  args = new cljs.core.IndexedSeq(G__7273__a,0);
} 
return G__7272__delegate.call(this,args);};
G__7272.cljs$lang$maxFixedArity = 0;
G__7272.cljs$lang$applyTo = (function (arglist__7274){
var args = cljs.core.seq(arglist__7274);
return G__7272__delegate(args);
});
G__7272.cljs$core$IFn$_invoke$arity$variadic = G__7272__delegate;
return G__7272;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7275__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7276__i = 0, G__7276__a = new Array(arguments.length -  0);
while (G__7276__i < G__7276__a.length) {G__7276__a[G__7276__i] = arguments[G__7276__i + 0]; ++G__7276__i;}
  args = new cljs.core.IndexedSeq(G__7276__a,0);
} 
return G__7275__delegate.call(this,args);};
G__7275.cljs$lang$maxFixedArity = 0;
G__7275.cljs$lang$applyTo = (function (arglist__7277){
var args = cljs.core.seq(arglist__7277);
return G__7275__delegate(args);
});
G__7275.cljs$core$IFn$_invoke$arity$variadic = G__7275__delegate;
return G__7275;
})()
;

return null;
});
