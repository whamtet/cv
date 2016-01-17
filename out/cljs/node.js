// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.node');
goog.require('cljs.core');
cljs.node.log = (function cljs$node$log(var_args){
var args__1295__auto__ = [];
var len__1288__auto___4414 = arguments.length;
var i__1289__auto___4415 = (0);
while(true){
if((i__1289__auto___4415 < len__1288__auto___4414)){
args__1295__auto__.push((arguments[i__1289__auto___4415]));

var G__4416 = (i__1289__auto___4415 + (1));
i__1289__auto___4415 = G__4416;
continue;
} else {
}
break;
}

var argseq__1296__auto__ = ((((0) < args__1295__auto__.length))?(new cljs.core.IndexedSeq(args__1295__auto__.slice((0)),(0))):null);
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(argseq__1296__auto__);
});

cljs.node.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,cljs.core.map.call(null,cljs.core.str,args));
});

cljs.node.log.cljs$lang$maxFixedArity = (0);

cljs.node.log.cljs$lang$applyTo = (function (seq4413){
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4413));
});
cljs.node.on_node_QMARK_ = (function cljs$node$on_node_QMARK_(){
try{return typeof process.versions.node === 'string';
}catch (e4418){if((e4418 instanceof Error)){
var e = e4418;
return false;
} else {
throw e4418;

}
}});

//# sourceMappingURL=node.js.map