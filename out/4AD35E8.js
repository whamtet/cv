goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6592__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6593__i = 0, G__6593__a = new Array(arguments.length -  0);
while (G__6593__i < G__6593__a.length) {G__6593__a[G__6593__i] = arguments[G__6593__i + 0]; ++G__6593__i;}
  args = new cljs.core.IndexedSeq(G__6593__a,0);
} 
return G__6592__delegate.call(this,args);};
G__6592.cljs$lang$maxFixedArity = 0;
G__6592.cljs$lang$applyTo = (function (arglist__6594){
var args = cljs.core.seq(arglist__6594);
return G__6592__delegate(args);
});
G__6592.cljs$core$IFn$_invoke$arity$variadic = G__6592__delegate;
return G__6592;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6595__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6596__i = 0, G__6596__a = new Array(arguments.length -  0);
while (G__6596__i < G__6596__a.length) {G__6596__a[G__6596__i] = arguments[G__6596__i + 0]; ++G__6596__i;}
  args = new cljs.core.IndexedSeq(G__6596__a,0);
} 
return G__6595__delegate.call(this,args);};
G__6595.cljs$lang$maxFixedArity = 0;
G__6595.cljs$lang$applyTo = (function (arglist__6597){
var args = cljs.core.seq(arglist__6597);
return G__6595__delegate(args);
});
G__6595.cljs$core$IFn$_invoke$arity$variadic = G__6595__delegate;
return G__6595;
})()
;

return null;
});
