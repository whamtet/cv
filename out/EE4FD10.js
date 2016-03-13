goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4896__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4897__i = 0, G__4897__a = new Array(arguments.length -  0);
while (G__4897__i < G__4897__a.length) {G__4897__a[G__4897__i] = arguments[G__4897__i + 0]; ++G__4897__i;}
  args = new cljs.core.IndexedSeq(G__4897__a,0);
} 
return G__4896__delegate.call(this,args);};
G__4896.cljs$lang$maxFixedArity = 0;
G__4896.cljs$lang$applyTo = (function (arglist__4898){
var args = cljs.core.seq(arglist__4898);
return G__4896__delegate(args);
});
G__4896.cljs$core$IFn$_invoke$arity$variadic = G__4896__delegate;
return G__4896;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4899__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4900__i = 0, G__4900__a = new Array(arguments.length -  0);
while (G__4900__i < G__4900__a.length) {G__4900__a[G__4900__i] = arguments[G__4900__i + 0]; ++G__4900__i;}
  args = new cljs.core.IndexedSeq(G__4900__a,0);
} 
return G__4899__delegate.call(this,args);};
G__4899.cljs$lang$maxFixedArity = 0;
G__4899.cljs$lang$applyTo = (function (arglist__4901){
var args = cljs.core.seq(arglist__4901);
return G__4899__delegate(args);
});
G__4899.cljs$core$IFn$_invoke$arity$variadic = G__4899__delegate;
return G__4899;
})()
;

return null;
});
