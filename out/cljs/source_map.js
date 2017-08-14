// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__1464){
var vec__1465 = p__1464;
var i = cljs.core.nth.call(null,vec__1465,(0),null);
var v = cljs.core.nth.call(null,vec__1465,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__1467 = seg;
var gcol = cljs.core.nth.call(null,vec__1467,(0),null);
var source = cljs.core.nth.call(null,vec__1467,(1),null);
var line = cljs.core.nth.call(null,vec__1467,(2),null);
var col = cljs.core.nth.call(null,vec__1467,(3),null);
var name = cljs.core.nth.call(null,vec__1467,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__1470 = seg;
var gcol = cljs.core.nth.call(null,vec__1470,(0),null);
var source = cljs.core.nth.call(null,vec__1470,(1),null);
var line = cljs.core.nth.call(null,vec__1470,(2),null);
var col = cljs.core.nth.call(null,vec__1470,(3),null);
var name = cljs.core.nth.call(null,vec__1470,(4),null);
var vec__1471 = relseg;
var rgcol = cljs.core.nth.call(null,vec__1471,(0),null);
var rsource = cljs.core.nth.call(null,vec__1471,(1),null);
var rline = cljs.core.nth.call(null,vec__1471,(2),null);
var rcol = cljs.core.nth.call(null,vec__1471,(3),null);
var rname = cljs.core.nth.call(null,vec__1471,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__230__auto__ = source;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__230__auto__ = line;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__230__auto__ = col;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__230__auto__ = name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__1474 = segmap;
var map__1474__$1 = ((((!((map__1474 == null)))?((((map__1474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1474):map__1474);
var gcol = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__1474,map__1474__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__1474,map__1474__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__1474,map__1474__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__1474,map__1474__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__1474,map__1474__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__1474,map__1474__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args1476 = [];
var len__1288__auto___1480 = arguments.length;
var i__1289__auto___1481 = (0);
while(true){
if((i__1289__auto___1481 < len__1288__auto___1480)){
args1476.push((arguments[i__1289__auto___1481]));

var G__1482 = (i__1289__auto___1481 + (1));
i__1289__auto___1481 = G__1482;
continue;
} else {
}
break;
}

var G__1478 = args1476.length;
switch (G__1478) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1476.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__1479 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__1484 = cljs.core.next.call(null,segs__$1);
var G__1485 = nrelseg;
var G__1486 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__1484;
relseg__$1 = G__1485;
result__$1 = G__1486;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__1479,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__1479,(1),null);
var G__1487 = (gline + (1));
var G__1488 = cljs.core.next.call(null,lines__$1);
var G__1489 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__1490 = result__$1;
gline = G__1487;
lines__$1 = G__1488;
relseg = G__1489;
result = G__1490;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__1494 = segmap;
var map__1494__$1 = ((((!((map__1494 == null)))?((((map__1494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1494):map__1494);
var gcol = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__1494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__1494,map__1494__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__1494,map__1494__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__1491_SHARP_){
return cljs.core.conj.call(null,p1__1491_SHARP_,d__$1);
});})(map__1494,map__1494__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__1494,map__1494__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args1496 = [];
var len__1288__auto___1500 = arguments.length;
var i__1289__auto___1501 = (0);
while(true){
if((i__1289__auto___1501 < len__1288__auto___1500)){
args1496.push((arguments[i__1289__auto___1501]));

var G__1502 = (i__1289__auto___1501 + (1));
i__1289__auto___1501 = G__1502;
continue;
} else {
}
break;
}

var G__1498 = args1496.length;
switch (G__1498) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1496.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__1499 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__1504 = cljs.core.next.call(null,segs__$1);
var G__1505 = nrelseg;
var G__1506 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__1504;
relseg__$1 = G__1505;
result__$1 = G__1506;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__1499,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__1499,(1),null);
var G__1507 = (gline + (1));
var G__1508 = cljs.core.next.call(null,lines__$1);
var G__1509 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__1510 = result__$1;
gline = G__1507;
lines__$1 = G__1508;
relseg = G__1509;
result = G__1510;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__1517){
var vec__1518 = p__1517;
var _ = cljs.core.nth.call(null,vec__1518,(0),null);
var source = cljs.core.nth.call(null,vec__1518,(1),null);
var line = cljs.core.nth.call(null,vec__1518,(2),null);
var col = cljs.core.nth.call(null,vec__1518,(3),null);
var name = cljs.core.nth.call(null,vec__1518,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__1519){
var vec__1520 = p__1519;
var gcol = cljs.core.nth.call(null,vec__1520,(0),null);
var sidx = cljs.core.nth.call(null,vec__1520,(1),null);
var line = cljs.core.nth.call(null,vec__1520,(2),null);
var col = cljs.core.nth.call(null,vec__1520,(3),null);
var name = cljs.core.nth.call(null,vec__1520,(4),null);
var seg = vec__1520;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__1520,gcol,sidx,line,col,name,seg,relseg){
return (function (p__1521){
var vec__1522 = p__1521;
var _ = cljs.core.nth.call(null,vec__1522,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1522,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__1522,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__1522,(3),null);
var lname = cljs.core.nth.call(null,vec__1522,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__230__auto__ = name;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__1520,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__230__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__1576 = cljs.core.seq.call(null,infos);
var chunk__1577 = null;
var count__1578 = (0);
var i__1579 = (0);
while(true){
if((i__1579 < count__1578)){
var info = cljs.core._nth.call(null,chunk__1577,i__1579);
var segv_1626 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_1627 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_1628 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_1627 > (lc_1628 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__1576,chunk__1577,count__1578,i__1579,segv_1626,gline_1627,lc_1628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_1627 - (lc_1628 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_1626], null));
});})(seq__1576,chunk__1577,count__1578,i__1579,segv_1626,gline_1627,lc_1628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__1576,chunk__1577,count__1578,i__1579,segv_1626,gline_1627,lc_1628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1627], null),cljs.core.conj,segv_1626);
});})(seq__1576,chunk__1577,count__1578,i__1579,segv_1626,gline_1627,lc_1628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__1629 = seq__1576;
var G__1630 = chunk__1577;
var G__1631 = count__1578;
var G__1632 = (i__1579 + (1));
seq__1576 = G__1629;
chunk__1577 = G__1630;
count__1578 = G__1631;
i__1579 = G__1632;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1576);
if(temp__4425__auto__){
var seq__1576__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1576__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__1576__$1);
var G__1633 = cljs.core.chunk_rest.call(null,seq__1576__$1);
var G__1634 = c__1033__auto__;
var G__1635 = cljs.core.count.call(null,c__1033__auto__);
var G__1636 = (0);
seq__1576 = G__1633;
chunk__1577 = G__1634;
count__1578 = G__1635;
i__1579 = G__1636;
continue;
} else {
var info = cljs.core.first.call(null,seq__1576__$1);
var segv_1637 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_1638 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_1639 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_1638 > (lc_1639 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__1576,chunk__1577,count__1578,i__1579,segv_1637,gline_1638,lc_1639,info,seq__1576__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_1638 - (lc_1639 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_1637], null));
});})(seq__1576,chunk__1577,count__1578,i__1579,segv_1637,gline_1638,lc_1639,info,seq__1576__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__1576,chunk__1577,count__1578,i__1579,segv_1637,gline_1638,lc_1639,info,seq__1576__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1638], null),cljs.core.conj,segv_1637);
});})(seq__1576,chunk__1577,count__1578,i__1579,segv_1637,gline_1638,lc_1639,info,seq__1576__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__1640 = cljs.core.next.call(null,seq__1576__$1);
var G__1641 = null;
var G__1642 = (0);
var G__1643 = (0);
seq__1576 = G__1640;
chunk__1577 = G__1641;
count__1578 = G__1642;
i__1579 = G__1643;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__1580_1644 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__1581_1645 = null;
var count__1582_1646 = (0);
var i__1583_1647 = (0);
while(true){
if((i__1583_1647 < count__1582_1646)){
var vec__1584_1648 = cljs.core._nth.call(null,chunk__1581_1645,i__1583_1647);
var source_idx_1649 = cljs.core.nth.call(null,vec__1584_1648,(0),null);
var vec__1585_1650 = cljs.core.nth.call(null,vec__1584_1648,(1),null);
var __1651 = cljs.core.nth.call(null,vec__1585_1650,(0),null);
var lines_1652__$1 = cljs.core.nth.call(null,vec__1585_1650,(1),null);
var seq__1586_1653 = cljs.core.seq.call(null,lines_1652__$1);
var chunk__1587_1654 = null;
var count__1588_1655 = (0);
var i__1589_1656 = (0);
while(true){
if((i__1589_1656 < count__1588_1655)){
var vec__1590_1657 = cljs.core._nth.call(null,chunk__1587_1654,i__1589_1656);
var line_1658 = cljs.core.nth.call(null,vec__1590_1657,(0),null);
var cols_1659 = cljs.core.nth.call(null,vec__1590_1657,(1),null);
var seq__1591_1660 = cljs.core.seq.call(null,cols_1659);
var chunk__1592_1661 = null;
var count__1593_1662 = (0);
var i__1594_1663 = (0);
while(true){
if((i__1594_1663 < count__1593_1662)){
var vec__1595_1664 = cljs.core._nth.call(null,chunk__1592_1661,i__1594_1663);
var col_1665 = cljs.core.nth.call(null,vec__1595_1664,(0),null);
var infos_1666 = cljs.core.nth.call(null,vec__1595_1664,(1),null);
encode_cols.call(null,infos_1666,source_idx_1649,line_1658,col_1665);

var G__1667 = seq__1591_1660;
var G__1668 = chunk__1592_1661;
var G__1669 = count__1593_1662;
var G__1670 = (i__1594_1663 + (1));
seq__1591_1660 = G__1667;
chunk__1592_1661 = G__1668;
count__1593_1662 = G__1669;
i__1594_1663 = G__1670;
continue;
} else {
var temp__4425__auto___1671 = cljs.core.seq.call(null,seq__1591_1660);
if(temp__4425__auto___1671){
var seq__1591_1672__$1 = temp__4425__auto___1671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1591_1672__$1)){
var c__1033__auto___1673 = cljs.core.chunk_first.call(null,seq__1591_1672__$1);
var G__1674 = cljs.core.chunk_rest.call(null,seq__1591_1672__$1);
var G__1675 = c__1033__auto___1673;
var G__1676 = cljs.core.count.call(null,c__1033__auto___1673);
var G__1677 = (0);
seq__1591_1660 = G__1674;
chunk__1592_1661 = G__1675;
count__1593_1662 = G__1676;
i__1594_1663 = G__1677;
continue;
} else {
var vec__1596_1678 = cljs.core.first.call(null,seq__1591_1672__$1);
var col_1679 = cljs.core.nth.call(null,vec__1596_1678,(0),null);
var infos_1680 = cljs.core.nth.call(null,vec__1596_1678,(1),null);
encode_cols.call(null,infos_1680,source_idx_1649,line_1658,col_1679);

var G__1681 = cljs.core.next.call(null,seq__1591_1672__$1);
var G__1682 = null;
var G__1683 = (0);
var G__1684 = (0);
seq__1591_1660 = G__1681;
chunk__1592_1661 = G__1682;
count__1593_1662 = G__1683;
i__1594_1663 = G__1684;
continue;
}
} else {
}
}
break;
}

var G__1685 = seq__1586_1653;
var G__1686 = chunk__1587_1654;
var G__1687 = count__1588_1655;
var G__1688 = (i__1589_1656 + (1));
seq__1586_1653 = G__1685;
chunk__1587_1654 = G__1686;
count__1588_1655 = G__1687;
i__1589_1656 = G__1688;
continue;
} else {
var temp__4425__auto___1689 = cljs.core.seq.call(null,seq__1586_1653);
if(temp__4425__auto___1689){
var seq__1586_1690__$1 = temp__4425__auto___1689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1586_1690__$1)){
var c__1033__auto___1691 = cljs.core.chunk_first.call(null,seq__1586_1690__$1);
var G__1692 = cljs.core.chunk_rest.call(null,seq__1586_1690__$1);
var G__1693 = c__1033__auto___1691;
var G__1694 = cljs.core.count.call(null,c__1033__auto___1691);
var G__1695 = (0);
seq__1586_1653 = G__1692;
chunk__1587_1654 = G__1693;
count__1588_1655 = G__1694;
i__1589_1656 = G__1695;
continue;
} else {
var vec__1597_1696 = cljs.core.first.call(null,seq__1586_1690__$1);
var line_1697 = cljs.core.nth.call(null,vec__1597_1696,(0),null);
var cols_1698 = cljs.core.nth.call(null,vec__1597_1696,(1),null);
var seq__1598_1699 = cljs.core.seq.call(null,cols_1698);
var chunk__1599_1700 = null;
var count__1600_1701 = (0);
var i__1601_1702 = (0);
while(true){
if((i__1601_1702 < count__1600_1701)){
var vec__1602_1703 = cljs.core._nth.call(null,chunk__1599_1700,i__1601_1702);
var col_1704 = cljs.core.nth.call(null,vec__1602_1703,(0),null);
var infos_1705 = cljs.core.nth.call(null,vec__1602_1703,(1),null);
encode_cols.call(null,infos_1705,source_idx_1649,line_1697,col_1704);

var G__1706 = seq__1598_1699;
var G__1707 = chunk__1599_1700;
var G__1708 = count__1600_1701;
var G__1709 = (i__1601_1702 + (1));
seq__1598_1699 = G__1706;
chunk__1599_1700 = G__1707;
count__1600_1701 = G__1708;
i__1601_1702 = G__1709;
continue;
} else {
var temp__4425__auto___1710__$1 = cljs.core.seq.call(null,seq__1598_1699);
if(temp__4425__auto___1710__$1){
var seq__1598_1711__$1 = temp__4425__auto___1710__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1598_1711__$1)){
var c__1033__auto___1712 = cljs.core.chunk_first.call(null,seq__1598_1711__$1);
var G__1713 = cljs.core.chunk_rest.call(null,seq__1598_1711__$1);
var G__1714 = c__1033__auto___1712;
var G__1715 = cljs.core.count.call(null,c__1033__auto___1712);
var G__1716 = (0);
seq__1598_1699 = G__1713;
chunk__1599_1700 = G__1714;
count__1600_1701 = G__1715;
i__1601_1702 = G__1716;
continue;
} else {
var vec__1603_1717 = cljs.core.first.call(null,seq__1598_1711__$1);
var col_1718 = cljs.core.nth.call(null,vec__1603_1717,(0),null);
var infos_1719 = cljs.core.nth.call(null,vec__1603_1717,(1),null);
encode_cols.call(null,infos_1719,source_idx_1649,line_1697,col_1718);

var G__1720 = cljs.core.next.call(null,seq__1598_1711__$1);
var G__1721 = null;
var G__1722 = (0);
var G__1723 = (0);
seq__1598_1699 = G__1720;
chunk__1599_1700 = G__1721;
count__1600_1701 = G__1722;
i__1601_1702 = G__1723;
continue;
}
} else {
}
}
break;
}

var G__1724 = cljs.core.next.call(null,seq__1586_1690__$1);
var G__1725 = null;
var G__1726 = (0);
var G__1727 = (0);
seq__1586_1653 = G__1724;
chunk__1587_1654 = G__1725;
count__1588_1655 = G__1726;
i__1589_1656 = G__1727;
continue;
}
} else {
}
}
break;
}

var G__1728 = seq__1580_1644;
var G__1729 = chunk__1581_1645;
var G__1730 = count__1582_1646;
var G__1731 = (i__1583_1647 + (1));
seq__1580_1644 = G__1728;
chunk__1581_1645 = G__1729;
count__1582_1646 = G__1730;
i__1583_1647 = G__1731;
continue;
} else {
var temp__4425__auto___1732 = cljs.core.seq.call(null,seq__1580_1644);
if(temp__4425__auto___1732){
var seq__1580_1733__$1 = temp__4425__auto___1732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1580_1733__$1)){
var c__1033__auto___1734 = cljs.core.chunk_first.call(null,seq__1580_1733__$1);
var G__1735 = cljs.core.chunk_rest.call(null,seq__1580_1733__$1);
var G__1736 = c__1033__auto___1734;
var G__1737 = cljs.core.count.call(null,c__1033__auto___1734);
var G__1738 = (0);
seq__1580_1644 = G__1735;
chunk__1581_1645 = G__1736;
count__1582_1646 = G__1737;
i__1583_1647 = G__1738;
continue;
} else {
var vec__1604_1739 = cljs.core.first.call(null,seq__1580_1733__$1);
var source_idx_1740 = cljs.core.nth.call(null,vec__1604_1739,(0),null);
var vec__1605_1741 = cljs.core.nth.call(null,vec__1604_1739,(1),null);
var __1742 = cljs.core.nth.call(null,vec__1605_1741,(0),null);
var lines_1743__$1 = cljs.core.nth.call(null,vec__1605_1741,(1),null);
var seq__1606_1744 = cljs.core.seq.call(null,lines_1743__$1);
var chunk__1607_1745 = null;
var count__1608_1746 = (0);
var i__1609_1747 = (0);
while(true){
if((i__1609_1747 < count__1608_1746)){
var vec__1610_1748 = cljs.core._nth.call(null,chunk__1607_1745,i__1609_1747);
var line_1749 = cljs.core.nth.call(null,vec__1610_1748,(0),null);
var cols_1750 = cljs.core.nth.call(null,vec__1610_1748,(1),null);
var seq__1611_1751 = cljs.core.seq.call(null,cols_1750);
var chunk__1612_1752 = null;
var count__1613_1753 = (0);
var i__1614_1754 = (0);
while(true){
if((i__1614_1754 < count__1613_1753)){
var vec__1615_1755 = cljs.core._nth.call(null,chunk__1612_1752,i__1614_1754);
var col_1756 = cljs.core.nth.call(null,vec__1615_1755,(0),null);
var infos_1757 = cljs.core.nth.call(null,vec__1615_1755,(1),null);
encode_cols.call(null,infos_1757,source_idx_1740,line_1749,col_1756);

var G__1758 = seq__1611_1751;
var G__1759 = chunk__1612_1752;
var G__1760 = count__1613_1753;
var G__1761 = (i__1614_1754 + (1));
seq__1611_1751 = G__1758;
chunk__1612_1752 = G__1759;
count__1613_1753 = G__1760;
i__1614_1754 = G__1761;
continue;
} else {
var temp__4425__auto___1762__$1 = cljs.core.seq.call(null,seq__1611_1751);
if(temp__4425__auto___1762__$1){
var seq__1611_1763__$1 = temp__4425__auto___1762__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1611_1763__$1)){
var c__1033__auto___1764 = cljs.core.chunk_first.call(null,seq__1611_1763__$1);
var G__1765 = cljs.core.chunk_rest.call(null,seq__1611_1763__$1);
var G__1766 = c__1033__auto___1764;
var G__1767 = cljs.core.count.call(null,c__1033__auto___1764);
var G__1768 = (0);
seq__1611_1751 = G__1765;
chunk__1612_1752 = G__1766;
count__1613_1753 = G__1767;
i__1614_1754 = G__1768;
continue;
} else {
var vec__1616_1769 = cljs.core.first.call(null,seq__1611_1763__$1);
var col_1770 = cljs.core.nth.call(null,vec__1616_1769,(0),null);
var infos_1771 = cljs.core.nth.call(null,vec__1616_1769,(1),null);
encode_cols.call(null,infos_1771,source_idx_1740,line_1749,col_1770);

var G__1772 = cljs.core.next.call(null,seq__1611_1763__$1);
var G__1773 = null;
var G__1774 = (0);
var G__1775 = (0);
seq__1611_1751 = G__1772;
chunk__1612_1752 = G__1773;
count__1613_1753 = G__1774;
i__1614_1754 = G__1775;
continue;
}
} else {
}
}
break;
}

var G__1776 = seq__1606_1744;
var G__1777 = chunk__1607_1745;
var G__1778 = count__1608_1746;
var G__1779 = (i__1609_1747 + (1));
seq__1606_1744 = G__1776;
chunk__1607_1745 = G__1777;
count__1608_1746 = G__1778;
i__1609_1747 = G__1779;
continue;
} else {
var temp__4425__auto___1780__$1 = cljs.core.seq.call(null,seq__1606_1744);
if(temp__4425__auto___1780__$1){
var seq__1606_1781__$1 = temp__4425__auto___1780__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1606_1781__$1)){
var c__1033__auto___1782 = cljs.core.chunk_first.call(null,seq__1606_1781__$1);
var G__1783 = cljs.core.chunk_rest.call(null,seq__1606_1781__$1);
var G__1784 = c__1033__auto___1782;
var G__1785 = cljs.core.count.call(null,c__1033__auto___1782);
var G__1786 = (0);
seq__1606_1744 = G__1783;
chunk__1607_1745 = G__1784;
count__1608_1746 = G__1785;
i__1609_1747 = G__1786;
continue;
} else {
var vec__1617_1787 = cljs.core.first.call(null,seq__1606_1781__$1);
var line_1788 = cljs.core.nth.call(null,vec__1617_1787,(0),null);
var cols_1789 = cljs.core.nth.call(null,vec__1617_1787,(1),null);
var seq__1618_1790 = cljs.core.seq.call(null,cols_1789);
var chunk__1619_1791 = null;
var count__1620_1792 = (0);
var i__1621_1793 = (0);
while(true){
if((i__1621_1793 < count__1620_1792)){
var vec__1622_1794 = cljs.core._nth.call(null,chunk__1619_1791,i__1621_1793);
var col_1795 = cljs.core.nth.call(null,vec__1622_1794,(0),null);
var infos_1796 = cljs.core.nth.call(null,vec__1622_1794,(1),null);
encode_cols.call(null,infos_1796,source_idx_1740,line_1788,col_1795);

var G__1797 = seq__1618_1790;
var G__1798 = chunk__1619_1791;
var G__1799 = count__1620_1792;
var G__1800 = (i__1621_1793 + (1));
seq__1618_1790 = G__1797;
chunk__1619_1791 = G__1798;
count__1620_1792 = G__1799;
i__1621_1793 = G__1800;
continue;
} else {
var temp__4425__auto___1801__$2 = cljs.core.seq.call(null,seq__1618_1790);
if(temp__4425__auto___1801__$2){
var seq__1618_1802__$1 = temp__4425__auto___1801__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1618_1802__$1)){
var c__1033__auto___1803 = cljs.core.chunk_first.call(null,seq__1618_1802__$1);
var G__1804 = cljs.core.chunk_rest.call(null,seq__1618_1802__$1);
var G__1805 = c__1033__auto___1803;
var G__1806 = cljs.core.count.call(null,c__1033__auto___1803);
var G__1807 = (0);
seq__1618_1790 = G__1804;
chunk__1619_1791 = G__1805;
count__1620_1792 = G__1806;
i__1621_1793 = G__1807;
continue;
} else {
var vec__1623_1808 = cljs.core.first.call(null,seq__1618_1802__$1);
var col_1809 = cljs.core.nth.call(null,vec__1623_1808,(0),null);
var infos_1810 = cljs.core.nth.call(null,vec__1623_1808,(1),null);
encode_cols.call(null,infos_1810,source_idx_1740,line_1788,col_1809);

var G__1811 = cljs.core.next.call(null,seq__1618_1802__$1);
var G__1812 = null;
var G__1813 = (0);
var G__1814 = (0);
seq__1618_1790 = G__1811;
chunk__1619_1791 = G__1812;
count__1620_1792 = G__1813;
i__1621_1793 = G__1814;
continue;
}
} else {
}
}
break;
}

var G__1815 = cljs.core.next.call(null,seq__1606_1781__$1);
var G__1816 = null;
var G__1817 = (0);
var G__1818 = (0);
seq__1606_1744 = G__1815;
chunk__1607_1745 = G__1816;
count__1608_1746 = G__1817;
i__1609_1747 = G__1818;
continue;
}
} else {
}
}
break;
}

var G__1819 = cljs.core.next.call(null,seq__1580_1733__$1);
var G__1820 = null;
var G__1821 = (0);
var G__1822 = (0);
seq__1580_1644 = G__1819;
chunk__1581_1645 = G__1820;
count__1582_1646 = G__1821;
i__1583_1647 = G__1822;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__1624 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1523_SHARP_){
return [cljs.core.str(p1__1523_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1524_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__1524_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1525_SHARP_){
return clojure.string.join.call(null,",",p1__1525_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__1624__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__1625 = G__1624;
goog.object.set(G__1625,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__1625;
})():G__1624);
return G__1624__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__1828 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__1828,(0),null);
var col_map = cljs.core.nth.call(null,vec__1828,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__1829 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__1829,(0),null);
var infos = cljs.core.nth.call(null,vec__1829,(1),null);
var G__1833 = cljs.core.next.call(null,col_map_seq);
var G__1834 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__1829,col,infos,vec__1828,line,col_map){
return (function (v,p__1830){
var map__1831 = p__1830;
var map__1831__$1 = ((((!((map__1831 == null)))?((((map__1831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1831):map__1831);
var gline = cljs.core.get.call(null,map__1831__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__1831__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__1829,col,infos,vec__1828,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__1833;
new_cols = G__1834;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__1835 = cljs.core.next.call(null,line_map_seq);
var G__1836 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__1835;
new_lines = G__1836;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__1887_1937 = cljs.core.seq.call(null,reverse_map);
var chunk__1888_1938 = null;
var count__1889_1939 = (0);
var i__1890_1940 = (0);
while(true){
if((i__1890_1940 < count__1889_1939)){
var vec__1891_1941 = cljs.core._nth.call(null,chunk__1888_1938,i__1890_1940);
var line_1942 = cljs.core.nth.call(null,vec__1891_1941,(0),null);
var columns_1943 = cljs.core.nth.call(null,vec__1891_1941,(1),null);
var seq__1892_1944 = cljs.core.seq.call(null,columns_1943);
var chunk__1893_1945 = null;
var count__1894_1946 = (0);
var i__1895_1947 = (0);
while(true){
if((i__1895_1947 < count__1894_1946)){
var vec__1896_1948 = cljs.core._nth.call(null,chunk__1893_1945,i__1895_1947);
var column_1949 = cljs.core.nth.call(null,vec__1896_1948,(0),null);
var column_info_1950 = cljs.core.nth.call(null,vec__1896_1948,(1),null);
var seq__1897_1951 = cljs.core.seq.call(null,column_info_1950);
var chunk__1898_1952 = null;
var count__1899_1953 = (0);
var i__1900_1954 = (0);
while(true){
if((i__1900_1954 < count__1899_1953)){
var map__1901_1955 = cljs.core._nth.call(null,chunk__1898_1952,i__1900_1954);
var map__1901_1956__$1 = ((((!((map__1901_1955 == null)))?((((map__1901_1955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1901_1955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1901_1955):map__1901_1955);
var gline_1957 = cljs.core.get.call(null,map__1901_1956__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1958 = cljs.core.get.call(null,map__1901_1956__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1959 = cljs.core.get.call(null,map__1901_1956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1957], null),cljs.core.fnil.call(null,((function (seq__1897_1951,chunk__1898_1952,count__1899_1953,i__1900_1954,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1901_1955,map__1901_1956__$1,gline_1957,gcol_1958,name_1959,vec__1896_1948,column_1949,column_info_1950,vec__1891_1941,line_1942,columns_1943,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1949], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1942,new cljs.core.Keyword(null,"col","col",-1959363084),column_1949,new cljs.core.Keyword(null,"name","name",1843675177),name_1959], null));
});})(seq__1897_1951,chunk__1898_1952,count__1899_1953,i__1900_1954,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1901_1955,map__1901_1956__$1,gline_1957,gcol_1958,name_1959,vec__1896_1948,column_1949,column_info_1950,vec__1891_1941,line_1942,columns_1943,inverted))
,cljs.core.sorted_map.call(null)));

var G__1960 = seq__1897_1951;
var G__1961 = chunk__1898_1952;
var G__1962 = count__1899_1953;
var G__1963 = (i__1900_1954 + (1));
seq__1897_1951 = G__1960;
chunk__1898_1952 = G__1961;
count__1899_1953 = G__1962;
i__1900_1954 = G__1963;
continue;
} else {
var temp__4425__auto___1964 = cljs.core.seq.call(null,seq__1897_1951);
if(temp__4425__auto___1964){
var seq__1897_1965__$1 = temp__4425__auto___1964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1897_1965__$1)){
var c__1033__auto___1966 = cljs.core.chunk_first.call(null,seq__1897_1965__$1);
var G__1967 = cljs.core.chunk_rest.call(null,seq__1897_1965__$1);
var G__1968 = c__1033__auto___1966;
var G__1969 = cljs.core.count.call(null,c__1033__auto___1966);
var G__1970 = (0);
seq__1897_1951 = G__1967;
chunk__1898_1952 = G__1968;
count__1899_1953 = G__1969;
i__1900_1954 = G__1970;
continue;
} else {
var map__1903_1971 = cljs.core.first.call(null,seq__1897_1965__$1);
var map__1903_1972__$1 = ((((!((map__1903_1971 == null)))?((((map__1903_1971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1903_1971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1903_1971):map__1903_1971);
var gline_1973 = cljs.core.get.call(null,map__1903_1972__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1974 = cljs.core.get.call(null,map__1903_1972__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1975 = cljs.core.get.call(null,map__1903_1972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1973], null),cljs.core.fnil.call(null,((function (seq__1897_1951,chunk__1898_1952,count__1899_1953,i__1900_1954,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1903_1971,map__1903_1972__$1,gline_1973,gcol_1974,name_1975,seq__1897_1965__$1,temp__4425__auto___1964,vec__1896_1948,column_1949,column_info_1950,vec__1891_1941,line_1942,columns_1943,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1949], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1942,new cljs.core.Keyword(null,"col","col",-1959363084),column_1949,new cljs.core.Keyword(null,"name","name",1843675177),name_1975], null));
});})(seq__1897_1951,chunk__1898_1952,count__1899_1953,i__1900_1954,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1903_1971,map__1903_1972__$1,gline_1973,gcol_1974,name_1975,seq__1897_1965__$1,temp__4425__auto___1964,vec__1896_1948,column_1949,column_info_1950,vec__1891_1941,line_1942,columns_1943,inverted))
,cljs.core.sorted_map.call(null)));

var G__1976 = cljs.core.next.call(null,seq__1897_1965__$1);
var G__1977 = null;
var G__1978 = (0);
var G__1979 = (0);
seq__1897_1951 = G__1976;
chunk__1898_1952 = G__1977;
count__1899_1953 = G__1978;
i__1900_1954 = G__1979;
continue;
}
} else {
}
}
break;
}

var G__1980 = seq__1892_1944;
var G__1981 = chunk__1893_1945;
var G__1982 = count__1894_1946;
var G__1983 = (i__1895_1947 + (1));
seq__1892_1944 = G__1980;
chunk__1893_1945 = G__1981;
count__1894_1946 = G__1982;
i__1895_1947 = G__1983;
continue;
} else {
var temp__4425__auto___1984 = cljs.core.seq.call(null,seq__1892_1944);
if(temp__4425__auto___1984){
var seq__1892_1985__$1 = temp__4425__auto___1984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1892_1985__$1)){
var c__1033__auto___1986 = cljs.core.chunk_first.call(null,seq__1892_1985__$1);
var G__1987 = cljs.core.chunk_rest.call(null,seq__1892_1985__$1);
var G__1988 = c__1033__auto___1986;
var G__1989 = cljs.core.count.call(null,c__1033__auto___1986);
var G__1990 = (0);
seq__1892_1944 = G__1987;
chunk__1893_1945 = G__1988;
count__1894_1946 = G__1989;
i__1895_1947 = G__1990;
continue;
} else {
var vec__1905_1991 = cljs.core.first.call(null,seq__1892_1985__$1);
var column_1992 = cljs.core.nth.call(null,vec__1905_1991,(0),null);
var column_info_1993 = cljs.core.nth.call(null,vec__1905_1991,(1),null);
var seq__1906_1994 = cljs.core.seq.call(null,column_info_1993);
var chunk__1907_1995 = null;
var count__1908_1996 = (0);
var i__1909_1997 = (0);
while(true){
if((i__1909_1997 < count__1908_1996)){
var map__1910_1998 = cljs.core._nth.call(null,chunk__1907_1995,i__1909_1997);
var map__1910_1999__$1 = ((((!((map__1910_1998 == null)))?((((map__1910_1998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1910_1998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1910_1998):map__1910_1998);
var gline_2000 = cljs.core.get.call(null,map__1910_1999__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2001 = cljs.core.get.call(null,map__1910_1999__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2002 = cljs.core.get.call(null,map__1910_1999__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2000], null),cljs.core.fnil.call(null,((function (seq__1906_1994,chunk__1907_1995,count__1908_1996,i__1909_1997,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1910_1998,map__1910_1999__$1,gline_2000,gcol_2001,name_2002,vec__1905_1991,column_1992,column_info_1993,seq__1892_1985__$1,temp__4425__auto___1984,vec__1891_1941,line_1942,columns_1943,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1992], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1942,new cljs.core.Keyword(null,"col","col",-1959363084),column_1992,new cljs.core.Keyword(null,"name","name",1843675177),name_2002], null));
});})(seq__1906_1994,chunk__1907_1995,count__1908_1996,i__1909_1997,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1910_1998,map__1910_1999__$1,gline_2000,gcol_2001,name_2002,vec__1905_1991,column_1992,column_info_1993,seq__1892_1985__$1,temp__4425__auto___1984,vec__1891_1941,line_1942,columns_1943,inverted))
,cljs.core.sorted_map.call(null)));

var G__2003 = seq__1906_1994;
var G__2004 = chunk__1907_1995;
var G__2005 = count__1908_1996;
var G__2006 = (i__1909_1997 + (1));
seq__1906_1994 = G__2003;
chunk__1907_1995 = G__2004;
count__1908_1996 = G__2005;
i__1909_1997 = G__2006;
continue;
} else {
var temp__4425__auto___2007__$1 = cljs.core.seq.call(null,seq__1906_1994);
if(temp__4425__auto___2007__$1){
var seq__1906_2008__$1 = temp__4425__auto___2007__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1906_2008__$1)){
var c__1033__auto___2009 = cljs.core.chunk_first.call(null,seq__1906_2008__$1);
var G__2010 = cljs.core.chunk_rest.call(null,seq__1906_2008__$1);
var G__2011 = c__1033__auto___2009;
var G__2012 = cljs.core.count.call(null,c__1033__auto___2009);
var G__2013 = (0);
seq__1906_1994 = G__2010;
chunk__1907_1995 = G__2011;
count__1908_1996 = G__2012;
i__1909_1997 = G__2013;
continue;
} else {
var map__1912_2014 = cljs.core.first.call(null,seq__1906_2008__$1);
var map__1912_2015__$1 = ((((!((map__1912_2014 == null)))?((((map__1912_2014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1912_2014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1912_2014):map__1912_2014);
var gline_2016 = cljs.core.get.call(null,map__1912_2015__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2017 = cljs.core.get.call(null,map__1912_2015__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2018 = cljs.core.get.call(null,map__1912_2015__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2016], null),cljs.core.fnil.call(null,((function (seq__1906_1994,chunk__1907_1995,count__1908_1996,i__1909_1997,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1912_2014,map__1912_2015__$1,gline_2016,gcol_2017,name_2018,seq__1906_2008__$1,temp__4425__auto___2007__$1,vec__1905_1991,column_1992,column_info_1993,seq__1892_1985__$1,temp__4425__auto___1984,vec__1891_1941,line_1942,columns_1943,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1992], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1942,new cljs.core.Keyword(null,"col","col",-1959363084),column_1992,new cljs.core.Keyword(null,"name","name",1843675177),name_2018], null));
});})(seq__1906_1994,chunk__1907_1995,count__1908_1996,i__1909_1997,seq__1892_1944,chunk__1893_1945,count__1894_1946,i__1895_1947,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1912_2014,map__1912_2015__$1,gline_2016,gcol_2017,name_2018,seq__1906_2008__$1,temp__4425__auto___2007__$1,vec__1905_1991,column_1992,column_info_1993,seq__1892_1985__$1,temp__4425__auto___1984,vec__1891_1941,line_1942,columns_1943,inverted))
,cljs.core.sorted_map.call(null)));

var G__2019 = cljs.core.next.call(null,seq__1906_2008__$1);
var G__2020 = null;
var G__2021 = (0);
var G__2022 = (0);
seq__1906_1994 = G__2019;
chunk__1907_1995 = G__2020;
count__1908_1996 = G__2021;
i__1909_1997 = G__2022;
continue;
}
} else {
}
}
break;
}

var G__2023 = cljs.core.next.call(null,seq__1892_1985__$1);
var G__2024 = null;
var G__2025 = (0);
var G__2026 = (0);
seq__1892_1944 = G__2023;
chunk__1893_1945 = G__2024;
count__1894_1946 = G__2025;
i__1895_1947 = G__2026;
continue;
}
} else {
}
}
break;
}

var G__2027 = seq__1887_1937;
var G__2028 = chunk__1888_1938;
var G__2029 = count__1889_1939;
var G__2030 = (i__1890_1940 + (1));
seq__1887_1937 = G__2027;
chunk__1888_1938 = G__2028;
count__1889_1939 = G__2029;
i__1890_1940 = G__2030;
continue;
} else {
var temp__4425__auto___2031 = cljs.core.seq.call(null,seq__1887_1937);
if(temp__4425__auto___2031){
var seq__1887_2032__$1 = temp__4425__auto___2031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1887_2032__$1)){
var c__1033__auto___2033 = cljs.core.chunk_first.call(null,seq__1887_2032__$1);
var G__2034 = cljs.core.chunk_rest.call(null,seq__1887_2032__$1);
var G__2035 = c__1033__auto___2033;
var G__2036 = cljs.core.count.call(null,c__1033__auto___2033);
var G__2037 = (0);
seq__1887_1937 = G__2034;
chunk__1888_1938 = G__2035;
count__1889_1939 = G__2036;
i__1890_1940 = G__2037;
continue;
} else {
var vec__1914_2038 = cljs.core.first.call(null,seq__1887_2032__$1);
var line_2039 = cljs.core.nth.call(null,vec__1914_2038,(0),null);
var columns_2040 = cljs.core.nth.call(null,vec__1914_2038,(1),null);
var seq__1915_2041 = cljs.core.seq.call(null,columns_2040);
var chunk__1916_2042 = null;
var count__1917_2043 = (0);
var i__1918_2044 = (0);
while(true){
if((i__1918_2044 < count__1917_2043)){
var vec__1919_2045 = cljs.core._nth.call(null,chunk__1916_2042,i__1918_2044);
var column_2046 = cljs.core.nth.call(null,vec__1919_2045,(0),null);
var column_info_2047 = cljs.core.nth.call(null,vec__1919_2045,(1),null);
var seq__1920_2048 = cljs.core.seq.call(null,column_info_2047);
var chunk__1921_2049 = null;
var count__1922_2050 = (0);
var i__1923_2051 = (0);
while(true){
if((i__1923_2051 < count__1922_2050)){
var map__1924_2052 = cljs.core._nth.call(null,chunk__1921_2049,i__1923_2051);
var map__1924_2053__$1 = ((((!((map__1924_2052 == null)))?((((map__1924_2052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1924_2052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1924_2052):map__1924_2052);
var gline_2054 = cljs.core.get.call(null,map__1924_2053__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2055 = cljs.core.get.call(null,map__1924_2053__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2056 = cljs.core.get.call(null,map__1924_2053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2054], null),cljs.core.fnil.call(null,((function (seq__1920_2048,chunk__1921_2049,count__1922_2050,i__1923_2051,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1924_2052,map__1924_2053__$1,gline_2054,gcol_2055,name_2056,vec__1919_2045,column_2046,column_info_2047,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_2046], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2039,new cljs.core.Keyword(null,"col","col",-1959363084),column_2046,new cljs.core.Keyword(null,"name","name",1843675177),name_2056], null));
});})(seq__1920_2048,chunk__1921_2049,count__1922_2050,i__1923_2051,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1924_2052,map__1924_2053__$1,gline_2054,gcol_2055,name_2056,vec__1919_2045,column_2046,column_info_2047,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted))
,cljs.core.sorted_map.call(null)));

var G__2057 = seq__1920_2048;
var G__2058 = chunk__1921_2049;
var G__2059 = count__1922_2050;
var G__2060 = (i__1923_2051 + (1));
seq__1920_2048 = G__2057;
chunk__1921_2049 = G__2058;
count__1922_2050 = G__2059;
i__1923_2051 = G__2060;
continue;
} else {
var temp__4425__auto___2061__$1 = cljs.core.seq.call(null,seq__1920_2048);
if(temp__4425__auto___2061__$1){
var seq__1920_2062__$1 = temp__4425__auto___2061__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1920_2062__$1)){
var c__1033__auto___2063 = cljs.core.chunk_first.call(null,seq__1920_2062__$1);
var G__2064 = cljs.core.chunk_rest.call(null,seq__1920_2062__$1);
var G__2065 = c__1033__auto___2063;
var G__2066 = cljs.core.count.call(null,c__1033__auto___2063);
var G__2067 = (0);
seq__1920_2048 = G__2064;
chunk__1921_2049 = G__2065;
count__1922_2050 = G__2066;
i__1923_2051 = G__2067;
continue;
} else {
var map__1926_2068 = cljs.core.first.call(null,seq__1920_2062__$1);
var map__1926_2069__$1 = ((((!((map__1926_2068 == null)))?((((map__1926_2068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1926_2068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1926_2068):map__1926_2068);
var gline_2070 = cljs.core.get.call(null,map__1926_2069__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2071 = cljs.core.get.call(null,map__1926_2069__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2072 = cljs.core.get.call(null,map__1926_2069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2070], null),cljs.core.fnil.call(null,((function (seq__1920_2048,chunk__1921_2049,count__1922_2050,i__1923_2051,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1926_2068,map__1926_2069__$1,gline_2070,gcol_2071,name_2072,seq__1920_2062__$1,temp__4425__auto___2061__$1,vec__1919_2045,column_2046,column_info_2047,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_2046], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2039,new cljs.core.Keyword(null,"col","col",-1959363084),column_2046,new cljs.core.Keyword(null,"name","name",1843675177),name_2072], null));
});})(seq__1920_2048,chunk__1921_2049,count__1922_2050,i__1923_2051,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1926_2068,map__1926_2069__$1,gline_2070,gcol_2071,name_2072,seq__1920_2062__$1,temp__4425__auto___2061__$1,vec__1919_2045,column_2046,column_info_2047,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted))
,cljs.core.sorted_map.call(null)));

var G__2073 = cljs.core.next.call(null,seq__1920_2062__$1);
var G__2074 = null;
var G__2075 = (0);
var G__2076 = (0);
seq__1920_2048 = G__2073;
chunk__1921_2049 = G__2074;
count__1922_2050 = G__2075;
i__1923_2051 = G__2076;
continue;
}
} else {
}
}
break;
}

var G__2077 = seq__1915_2041;
var G__2078 = chunk__1916_2042;
var G__2079 = count__1917_2043;
var G__2080 = (i__1918_2044 + (1));
seq__1915_2041 = G__2077;
chunk__1916_2042 = G__2078;
count__1917_2043 = G__2079;
i__1918_2044 = G__2080;
continue;
} else {
var temp__4425__auto___2081__$1 = cljs.core.seq.call(null,seq__1915_2041);
if(temp__4425__auto___2081__$1){
var seq__1915_2082__$1 = temp__4425__auto___2081__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1915_2082__$1)){
var c__1033__auto___2083 = cljs.core.chunk_first.call(null,seq__1915_2082__$1);
var G__2084 = cljs.core.chunk_rest.call(null,seq__1915_2082__$1);
var G__2085 = c__1033__auto___2083;
var G__2086 = cljs.core.count.call(null,c__1033__auto___2083);
var G__2087 = (0);
seq__1915_2041 = G__2084;
chunk__1916_2042 = G__2085;
count__1917_2043 = G__2086;
i__1918_2044 = G__2087;
continue;
} else {
var vec__1928_2088 = cljs.core.first.call(null,seq__1915_2082__$1);
var column_2089 = cljs.core.nth.call(null,vec__1928_2088,(0),null);
var column_info_2090 = cljs.core.nth.call(null,vec__1928_2088,(1),null);
var seq__1929_2091 = cljs.core.seq.call(null,column_info_2090);
var chunk__1930_2092 = null;
var count__1931_2093 = (0);
var i__1932_2094 = (0);
while(true){
if((i__1932_2094 < count__1931_2093)){
var map__1933_2095 = cljs.core._nth.call(null,chunk__1930_2092,i__1932_2094);
var map__1933_2096__$1 = ((((!((map__1933_2095 == null)))?((((map__1933_2095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1933_2095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1933_2095):map__1933_2095);
var gline_2097 = cljs.core.get.call(null,map__1933_2096__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2098 = cljs.core.get.call(null,map__1933_2096__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2099 = cljs.core.get.call(null,map__1933_2096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2097], null),cljs.core.fnil.call(null,((function (seq__1929_2091,chunk__1930_2092,count__1931_2093,i__1932_2094,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1933_2095,map__1933_2096__$1,gline_2097,gcol_2098,name_2099,vec__1928_2088,column_2089,column_info_2090,seq__1915_2082__$1,temp__4425__auto___2081__$1,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_2089], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2039,new cljs.core.Keyword(null,"col","col",-1959363084),column_2089,new cljs.core.Keyword(null,"name","name",1843675177),name_2099], null));
});})(seq__1929_2091,chunk__1930_2092,count__1931_2093,i__1932_2094,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1933_2095,map__1933_2096__$1,gline_2097,gcol_2098,name_2099,vec__1928_2088,column_2089,column_info_2090,seq__1915_2082__$1,temp__4425__auto___2081__$1,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted))
,cljs.core.sorted_map.call(null)));

var G__2100 = seq__1929_2091;
var G__2101 = chunk__1930_2092;
var G__2102 = count__1931_2093;
var G__2103 = (i__1932_2094 + (1));
seq__1929_2091 = G__2100;
chunk__1930_2092 = G__2101;
count__1931_2093 = G__2102;
i__1932_2094 = G__2103;
continue;
} else {
var temp__4425__auto___2104__$2 = cljs.core.seq.call(null,seq__1929_2091);
if(temp__4425__auto___2104__$2){
var seq__1929_2105__$1 = temp__4425__auto___2104__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1929_2105__$1)){
var c__1033__auto___2106 = cljs.core.chunk_first.call(null,seq__1929_2105__$1);
var G__2107 = cljs.core.chunk_rest.call(null,seq__1929_2105__$1);
var G__2108 = c__1033__auto___2106;
var G__2109 = cljs.core.count.call(null,c__1033__auto___2106);
var G__2110 = (0);
seq__1929_2091 = G__2107;
chunk__1930_2092 = G__2108;
count__1931_2093 = G__2109;
i__1932_2094 = G__2110;
continue;
} else {
var map__1935_2111 = cljs.core.first.call(null,seq__1929_2105__$1);
var map__1935_2112__$1 = ((((!((map__1935_2111 == null)))?((((map__1935_2111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1935_2111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1935_2111):map__1935_2111);
var gline_2113 = cljs.core.get.call(null,map__1935_2112__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_2114 = cljs.core.get.call(null,map__1935_2112__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_2115 = cljs.core.get.call(null,map__1935_2112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2113], null),cljs.core.fnil.call(null,((function (seq__1929_2091,chunk__1930_2092,count__1931_2093,i__1932_2094,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1935_2111,map__1935_2112__$1,gline_2113,gcol_2114,name_2115,seq__1929_2105__$1,temp__4425__auto___2104__$2,vec__1928_2088,column_2089,column_info_2090,seq__1915_2082__$1,temp__4425__auto___2081__$1,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_2089], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_2039,new cljs.core.Keyword(null,"col","col",-1959363084),column_2089,new cljs.core.Keyword(null,"name","name",1843675177),name_2115], null));
});})(seq__1929_2091,chunk__1930_2092,count__1931_2093,i__1932_2094,seq__1915_2041,chunk__1916_2042,count__1917_2043,i__1918_2044,seq__1887_1937,chunk__1888_1938,count__1889_1939,i__1890_1940,map__1935_2111,map__1935_2112__$1,gline_2113,gcol_2114,name_2115,seq__1929_2105__$1,temp__4425__auto___2104__$2,vec__1928_2088,column_2089,column_info_2090,seq__1915_2082__$1,temp__4425__auto___2081__$1,vec__1914_2038,line_2039,columns_2040,seq__1887_2032__$1,temp__4425__auto___2031,inverted))
,cljs.core.sorted_map.call(null)));

var G__2116 = cljs.core.next.call(null,seq__1929_2105__$1);
var G__2117 = null;
var G__2118 = (0);
var G__2119 = (0);
seq__1929_2091 = G__2116;
chunk__1930_2092 = G__2117;
count__1931_2093 = G__2118;
i__1932_2094 = G__2119;
continue;
}
} else {
}
}
break;
}

var G__2120 = cljs.core.next.call(null,seq__1915_2082__$1);
var G__2121 = null;
var G__2122 = (0);
var G__2123 = (0);
seq__1915_2041 = G__2120;
chunk__1916_2042 = G__2121;
count__1917_2043 = G__2122;
i__1918_2044 = G__2123;
continue;
}
} else {
}
}
break;
}

var G__2124 = cljs.core.next.call(null,seq__1887_2032__$1);
var G__2125 = null;
var G__2126 = (0);
var G__2127 = (0);
seq__1887_1937 = G__2124;
chunk__1888_1938 = G__2125;
count__1889_1939 = G__2126;
i__1890_1940 = G__2127;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map