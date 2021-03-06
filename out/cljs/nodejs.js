// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6098__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6099__i = 0, G__6099__a = new Array(arguments.length -  0);
while (G__6099__i < G__6099__a.length) {G__6099__a[G__6099__i] = arguments[G__6099__i + 0]; ++G__6099__i;}
  args = new cljs.core.IndexedSeq(G__6099__a,0);
} 
return G__6098__delegate.call(this,args);};
G__6098.cljs$lang$maxFixedArity = 0;
G__6098.cljs$lang$applyTo = (function (arglist__6100){
var args = cljs.core.seq(arglist__6100);
return G__6098__delegate(args);
});
G__6098.cljs$core$IFn$_invoke$arity$variadic = G__6098__delegate;
return G__6098;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6101__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6102__i = 0, G__6102__a = new Array(arguments.length -  0);
while (G__6102__i < G__6102__a.length) {G__6102__a[G__6102__i] = arguments[G__6102__i + 0]; ++G__6102__i;}
  args = new cljs.core.IndexedSeq(G__6102__a,0);
} 
return G__6101__delegate.call(this,args);};
G__6101.cljs$lang$maxFixedArity = 0;
G__6101.cljs$lang$applyTo = (function (arglist__6103){
var args = cljs.core.seq(arglist__6103);
return G__6101__delegate(args);
});
G__6101.cljs$core$IFn$_invoke$arity$variadic = G__6101__delegate;
return G__6101;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map