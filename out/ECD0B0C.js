goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7433__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7434__i = 0, G__7434__a = new Array(arguments.length -  0);
while (G__7434__i < G__7434__a.length) {G__7434__a[G__7434__i] = arguments[G__7434__i + 0]; ++G__7434__i;}
  args = new cljs.core.IndexedSeq(G__7434__a,0);
} 
return G__7433__delegate.call(this,args);};
G__7433.cljs$lang$maxFixedArity = 0;
G__7433.cljs$lang$applyTo = (function (arglist__7435){
var args = cljs.core.seq(arglist__7435);
return G__7433__delegate(args);
});
G__7433.cljs$core$IFn$_invoke$arity$variadic = G__7433__delegate;
return G__7433;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7436__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7437__i = 0, G__7437__a = new Array(arguments.length -  0);
while (G__7437__i < G__7437__a.length) {G__7437__a[G__7437__i] = arguments[G__7437__i + 0]; ++G__7437__i;}
  args = new cljs.core.IndexedSeq(G__7437__a,0);
} 
return G__7436__delegate.call(this,args);};
G__7436.cljs$lang$maxFixedArity = 0;
G__7436.cljs$lang$applyTo = (function (arglist__7438){
var args = cljs.core.seq(arglist__7438);
return G__7436__delegate(args);
});
G__7436.cljs$core$IFn$_invoke$arity$variadic = G__7436__delegate;
return G__7436;
})()
;

return null;
});
