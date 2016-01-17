// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs_pdfkit.core');
goog.require('cljs.core');
goog.require('cljs_pdfkit.optimize_dom');
goog.require('cljs_pdfkit.util');
cljs_pdfkit.core.PDFDocument = require("pdfkit");
cljs_pdfkit.core.handle_tag;
cljs_pdfkit.core.draw_tag;
cljs_pdfkit.core.default_stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null);
cljs_pdfkit.core.print_through = (function cljs_pdfkit$core$print_through(x){
cljs.core.println.call(null,x);

return x;
});
cljs_pdfkit.core.page = (function cljs_pdfkit$core$page(doc,page__$1,pdf_opts){
var vec__4696 = cljs_pdfkit.optimize_dom.add_style.call(null,page__$1);
var page_tag = cljs.core.nth.call(null,vec__4696,(0),null);
var opts = cljs.core.nth.call(null,vec__4696,(1),null);
var children = cljs.core.nthnext.call(null,vec__4696,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397),page_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Symbol(null,"page-tag","page-tag",-403138499,null))))].join('')))})());
var opts__$1 = cljs.core.merge.call(null,opts,cljs.core.select_keys.call(null,pdf_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null)));
var opts__$2 = cljs.core.clj__GT_js.call(null,opts__$1);
doc.addPage(opts__$2);

return cljs_pdfkit.core.handle_tag.call(null,doc,cljs_pdfkit.core.default_stack,cljs_pdfkit.optimize_dom.optimize_dom.call(null,cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,children))));
});
/**
 * Create a pdf with a vector of the form
 * 
 *   [:pdf opts & pages]
 * 
 *   opts takes the form
 *   {:info
 *  {:title "Title of the Document"
 *   :author "Author"
 *   :subject - "Subject"
 *   :keywords - "Keywords"}
 * :layout "landscape"}
 *   
 */
cljs_pdfkit.core.pdf = (function cljs_pdfkit$core$pdf(dom){
var vec__4702 = cljs_pdfkit.optimize_dom.add_style.call(null,dom);
var pdf_tag = cljs.core.nth.call(null,vec__4702,(0),null);
var opts = cljs.core.nth.call(null,vec__4702,(1),null);
var children = cljs.core.nthnext.call(null,vec__4702,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),pdf_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Symbol(null,"pdf-tag","pdf-tag",1229214313,null))))].join('')))})());
var opts__$1 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),cljs_pdfkit.util.capitalize_map),new cljs.core.Keyword(null,"autoFirstPage","autoFirstPage",1771180266),false);
var doc = (new cljs_pdfkit.core.PDFDocument(cljs.core.clj__GT_js.call(null,opts__$1)));
var children__$1 = cljs.core.remove.call(null,cljs.core.seq_QMARK_,cljs.core.tree_seq.call(null,cljs.core.seq_QMARK_,cljs.core.identity,children));
var seq__4703_4707 = cljs.core.seq.call(null,children__$1);
var chunk__4704_4708 = null;
var count__4705_4709 = (0);
var i__4706_4710 = (0);
while(true){
if((i__4706_4710 < count__4705_4709)){
var child_4711 = cljs.core._nth.call(null,chunk__4704_4708,i__4706_4710);
cljs_pdfkit.core.page.call(null,doc,child_4711,opts__$1);

var G__4712 = seq__4703_4707;
var G__4713 = chunk__4704_4708;
var G__4714 = count__4705_4709;
var G__4715 = (i__4706_4710 + (1));
seq__4703_4707 = G__4712;
chunk__4704_4708 = G__4713;
count__4705_4709 = G__4714;
i__4706_4710 = G__4715;
continue;
} else {
var temp__4425__auto___4716 = cljs.core.seq.call(null,seq__4703_4707);
if(temp__4425__auto___4716){
var seq__4703_4717__$1 = temp__4425__auto___4716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4703_4717__$1)){
var c__1033__auto___4718 = cljs.core.chunk_first.call(null,seq__4703_4717__$1);
var G__4719 = cljs.core.chunk_rest.call(null,seq__4703_4717__$1);
var G__4720 = c__1033__auto___4718;
var G__4721 = cljs.core.count.call(null,c__1033__auto___4718);
var G__4722 = (0);
seq__4703_4707 = G__4719;
chunk__4704_4708 = G__4720;
count__4705_4709 = G__4721;
i__4706_4710 = G__4722;
continue;
} else {
var child_4723 = cljs.core.first.call(null,seq__4703_4717__$1);
cljs_pdfkit.core.page.call(null,doc,child_4723,opts__$1);

var G__4724 = cljs.core.next.call(null,seq__4703_4717__$1);
var G__4725 = null;
var G__4726 = (0);
var G__4727 = (0);
seq__4703_4707 = G__4724;
chunk__4704_4708 = G__4725;
count__4705_4709 = G__4726;
i__4706_4710 = G__4727;
continue;
}
} else {
}
}
break;
}

return doc;
});
cljs_pdfkit.core.make_linear_gradient = (function cljs_pdfkit$core$make_linear_gradient(doc,p__4728){
var map__4738 = p__4728;
var map__4738__$1 = ((((!((map__4738 == null)))?((((map__4738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4738):map__4738);
var vec__4739 = cljs.core.get.call(null,map__4738__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__4739,(0),null);
var y1 = cljs.core.nth.call(null,vec__4739,(1),null);
var x2 = cljs.core.nth.call(null,vec__4739,(2),null);
var y2 = cljs.core.nth.call(null,vec__4739,(3),null);
var stops = cljs.core.get.call(null,map__4738__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.linearGradient(x1,y1,x2,y2);
var seq__4741_4747 = cljs.core.seq.call(null,stops);
var chunk__4742_4748 = null;
var count__4743_4749 = (0);
var i__4744_4750 = (0);
while(true){
if((i__4744_4750 < count__4743_4749)){
var vec__4745_4751 = cljs.core._nth.call(null,chunk__4742_4748,i__4744_4750);
var point_4752 = cljs.core.nth.call(null,vec__4745_4751,(0),null);
var color_4753 = cljs.core.nth.call(null,vec__4745_4751,(1),null);
grad.stop(point_4752,color_4753);

var G__4754 = seq__4741_4747;
var G__4755 = chunk__4742_4748;
var G__4756 = count__4743_4749;
var G__4757 = (i__4744_4750 + (1));
seq__4741_4747 = G__4754;
chunk__4742_4748 = G__4755;
count__4743_4749 = G__4756;
i__4744_4750 = G__4757;
continue;
} else {
var temp__4425__auto___4758 = cljs.core.seq.call(null,seq__4741_4747);
if(temp__4425__auto___4758){
var seq__4741_4759__$1 = temp__4425__auto___4758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4741_4759__$1)){
var c__1033__auto___4760 = cljs.core.chunk_first.call(null,seq__4741_4759__$1);
var G__4761 = cljs.core.chunk_rest.call(null,seq__4741_4759__$1);
var G__4762 = c__1033__auto___4760;
var G__4763 = cljs.core.count.call(null,c__1033__auto___4760);
var G__4764 = (0);
seq__4741_4747 = G__4761;
chunk__4742_4748 = G__4762;
count__4743_4749 = G__4763;
i__4744_4750 = G__4764;
continue;
} else {
var vec__4746_4765 = cljs.core.first.call(null,seq__4741_4759__$1);
var point_4766 = cljs.core.nth.call(null,vec__4746_4765,(0),null);
var color_4767 = cljs.core.nth.call(null,vec__4746_4765,(1),null);
grad.stop(point_4766,color_4767);

var G__4768 = cljs.core.next.call(null,seq__4741_4759__$1);
var G__4769 = null;
var G__4770 = (0);
var G__4771 = (0);
seq__4741_4747 = G__4768;
chunk__4742_4748 = G__4769;
count__4743_4749 = G__4770;
i__4744_4750 = G__4771;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.make_radial_gradient = (function cljs_pdfkit$core$make_radial_gradient(doc,p__4772){
var map__4782 = p__4772;
var map__4782__$1 = ((((!((map__4782 == null)))?((((map__4782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4782):map__4782);
var vec__4783 = cljs.core.get.call(null,map__4782__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__4783,(0),null);
var y1 = cljs.core.nth.call(null,vec__4783,(1),null);
var r1 = cljs.core.nth.call(null,vec__4783,(2),null);
var x2 = cljs.core.nth.call(null,vec__4783,(3),null);
var y2 = cljs.core.nth.call(null,vec__4783,(4),null);
var r2 = cljs.core.nth.call(null,vec__4783,(5),null);
var stops = cljs.core.get.call(null,map__4782__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.radialGradient(x1,y1,r1,x2,y2,r2);
var seq__4785_4791 = cljs.core.seq.call(null,stops);
var chunk__4786_4792 = null;
var count__4787_4793 = (0);
var i__4788_4794 = (0);
while(true){
if((i__4788_4794 < count__4787_4793)){
var vec__4789_4795 = cljs.core._nth.call(null,chunk__4786_4792,i__4788_4794);
var a_4796 = cljs.core.nth.call(null,vec__4789_4795,(0),null);
var color_4797 = cljs.core.nth.call(null,vec__4789_4795,(1),null);
var b_4798 = cljs.core.nth.call(null,vec__4789_4795,(2),null);
grad.stop(a_4796,color_4797,b_4798);

var G__4799 = seq__4785_4791;
var G__4800 = chunk__4786_4792;
var G__4801 = count__4787_4793;
var G__4802 = (i__4788_4794 + (1));
seq__4785_4791 = G__4799;
chunk__4786_4792 = G__4800;
count__4787_4793 = G__4801;
i__4788_4794 = G__4802;
continue;
} else {
var temp__4425__auto___4803 = cljs.core.seq.call(null,seq__4785_4791);
if(temp__4425__auto___4803){
var seq__4785_4804__$1 = temp__4425__auto___4803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4785_4804__$1)){
var c__1033__auto___4805 = cljs.core.chunk_first.call(null,seq__4785_4804__$1);
var G__4806 = cljs.core.chunk_rest.call(null,seq__4785_4804__$1);
var G__4807 = c__1033__auto___4805;
var G__4808 = cljs.core.count.call(null,c__1033__auto___4805);
var G__4809 = (0);
seq__4785_4791 = G__4806;
chunk__4786_4792 = G__4807;
count__4787_4793 = G__4808;
i__4788_4794 = G__4809;
continue;
} else {
var vec__4790_4810 = cljs.core.first.call(null,seq__4785_4804__$1);
var a_4811 = cljs.core.nth.call(null,vec__4790_4810,(0),null);
var color_4812 = cljs.core.nth.call(null,vec__4790_4810,(1),null);
var b_4813 = cljs.core.nth.call(null,vec__4790_4810,(2),null);
grad.stop(a_4811,color_4812,b_4813);

var G__4814 = cljs.core.next.call(null,seq__4785_4804__$1);
var G__4815 = null;
var G__4816 = (0);
var G__4817 = (0);
seq__4785_4791 = G__4814;
chunk__4786_4792 = G__4815;
count__4787_4793 = G__4816;
i__4788_4794 = G__4817;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.apply_state = (function cljs_pdfkit$core$apply_state(doc,opts){
if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)))){
doc.fillColor(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)))){
doc.lineJoin(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)))){
doc.strokeColor(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)))){
doc.strokeOpacity(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)))){
doc.miterLimit(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)))){
doc.lineWidth(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)))){
doc.opacity(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)))){
doc.lineCap(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)))){
return doc.fillOpacity(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)));
} else {
return null;
}
});
cljs_pdfkit.core.apply_stack_frame = (function cljs_pdfkit$core$apply_stack_frame(doc,p__4818,save_QMARK_){
var map__4821 = p__4818;
var map__4821__$1 = ((((!((map__4821 == null)))?((((map__4821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4821):map__4821);
var font = cljs.core.get.call(null,map__4821__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var font_size = cljs.core.get.call(null,map__4821__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
if(cljs.core.truth_(save_QMARK_)){
doc.save();
} else {
doc.restore();
}

if(cljs.core.truth_(font)){
if(typeof font === 'string'){
doc.font(font);
} else {
doc.font(cljs.core.first.call(null,font),cljs.core.second.call(null,font));
}
} else {
}

if(cljs.core.truth_(font_size)){
return doc.fontSize(font_size);
} else {
return null;
}
});
cljs_pdfkit.core.handle_tag = (function cljs_pdfkit$core$handle_tag(doc,stack,p__4823){
var vec__4828 = p__4823;
var tag = cljs.core.nth.call(null,vec__4828,(0),null);
var tag_opts = cljs.core.nth.call(null,vec__4828,(1),null);
var children = cljs.core.nthnext.call(null,vec__4828,(2));
var v = vec__4828;
var map__4829 = tag_opts;
var map__4829__$1 = ((((!((map__4829 == null)))?((((map__4829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4829):map__4829);
var font_size = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var linear_gradient = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047));
var fill_and_stroke = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"fill-and-stroke","fill-and-stroke",1756742695));
var scale = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var fill = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var dash = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"dash","dash",23821356));
var radial_gradient = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259));
var font = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var rotate = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__4829__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var stack_frame = cljs.core.select_keys.call(null,tag_opts,cljs_pdfkit.optimize_dom.root_properties2);
var new_stack = cljs.core.conj.call(null,stack,cljs.core.merge.call(null,cljs.core.peek.call(null,stack),stack_frame));
var save_stack_QMARK_ = (function (){var or__230__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clip","clip",830998499),tag);
if(or__230__auto__){
return or__230__auto__;
} else {
return cljs.core.not_empty.call(null,tag_opts);
}
})();
if(cljs.core.truth_(save_stack_QMARK_)){
cljs_pdfkit.core.apply_stack_frame.call(null,doc,stack_frame,true);
} else {
}

cljs_pdfkit.core.apply_state.call(null,doc,tag_opts);

if(cljs.core.truth_(dash)){
doc.dash(cljs.core.first.call(null,dash),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,dash)));
} else {
}

if(cljs.core.truth_(translate)){
doc.translate(cljs.core.first.call(null,translate),cljs.core.second.call(null,translate));
} else {
}

if(cljs.core.truth_(rotate)){
doc.rotate(cljs.core.first.call(null,rotate),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,rotate)));
} else {
}

if(cljs.core.truth_(scale)){
var vec__4831_4832 = ((typeof scale === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null):scale);
var x_4833 = cljs.core.nth.call(null,vec__4831_4832,(0),null);
var y_4834 = cljs.core.nth.call(null,vec__4831_4832,(1),null);
doc.scale(x_4833,y_4834);
} else {
}

cljs_pdfkit.core.draw_tag.call(null,tag,doc,new_stack,tag_opts,children);

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip","clip",830998499),null,new cljs.core.Keyword(null,"do","do",46310725),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null).call(null,tag))){
} else {
if(cljs.core.truth_(fill_and_stroke)){
doc.fillAndStroke(cljs.core.first.call(null,fill_and_stroke),cljs.core.second.call(null,fill_and_stroke));
} else {
if(cljs.core.truth_(linear_gradient)){
doc.fill(cljs_pdfkit.core.make_linear_gradient.call(null,doc,linear_gradient));
} else {
if(cljs.core.truth_(radial_gradient)){
doc.fill(cljs_pdfkit.core.make_radial_gradient.call(null,doc,radial_gradient));
} else {
if(cljs.core.truth_(fill)){
if(cljs.core.coll_QMARK_.call(null,fill)){
doc.fill.apply(doc,cljs.core.clj__GT_js.call(null,fill));
} else {
doc.fill(fill);
}
} else {
doc.stroke();

}
}
}
}
}

if(cljs.core.truth_(save_stack_QMARK_)){
return cljs_pdfkit.core.apply_stack_frame.call(null,doc,cljs.core.peek.call(null,stack),false);
} else {
return null;
}
});
if(typeof cljs_pdfkit.core.draw_tag !== 'undefined'){
} else {
cljs_pdfkit.core.draw_tag = (function (){var method_table__1143__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1144__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1147__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-pdfkit.core","draw-tag"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1147__auto__,method_table__1143__auto__,prefer_table__1144__auto__,method_cache__1145__auto__,cached_hierarchy__1146__auto__));
})();
}
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"note","note",1426297904),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4835){
var vec__4836 = p__4835;
var x = cljs.core.nth.call(null,vec__4836,(0),null);
var y = cljs.core.nth.call(null,vec__4836,(1),null);
var width = cljs.core.nth.call(null,vec__4836,(2),null);
var height = cljs.core.nth.call(null,vec__4836,(3),null);
var contents = cljs.core.nth.call(null,vec__4836,(4),null);
return doc__4667__auto__.note(x,y,width,height,contents,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"link","link",-1769163468),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4837){
var vec__4838 = p__4837;
var x = cljs.core.nth.call(null,vec__4838,(0),null);
var y = cljs.core.nth.call(null,vec__4838,(1),null);
var width = cljs.core.nth.call(null,vec__4838,(2),null);
var height = cljs.core.nth.call(null,vec__4838,(3),null);
var url = cljs.core.nth.call(null,vec__4838,(4),null);
return doc__4667__auto__.link(x,y,width,height,url,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"highlight","highlight",-800930873),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4839){
var vec__4840 = p__4839;
var x = cljs.core.nth.call(null,vec__4840,(0),null);
var y = cljs.core.nth.call(null,vec__4840,(1),null);
var width = cljs.core.nth.call(null,vec__4840,(2),null);
var height = cljs.core.nth.call(null,vec__4840,(3),null);
return doc__4667__auto__.highlight(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"underline","underline",2018066703),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4841){
var vec__4842 = p__4841;
var x = cljs.core.nth.call(null,vec__4842,(0),null);
var y = cljs.core.nth.call(null,vec__4842,(1),null);
var width = cljs.core.nth.call(null,vec__4842,(2),null);
var height = cljs.core.nth.call(null,vec__4842,(3),null);
return doc__4667__auto__.underline(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"strike","strike",-1173815471),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4843){
var vec__4844 = p__4843;
var x = cljs.core.nth.call(null,vec__4844,(0),null);
var y = cljs.core.nth.call(null,vec__4844,(1),null);
var width = cljs.core.nth.call(null,vec__4844,(2),null);
var height = cljs.core.nth.call(null,vec__4844,(3),null);
return doc__4667__auto__.strike(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"lineAnnotation","lineAnnotation",-1656470988),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4845){
var vec__4846 = p__4845;
var x1 = cljs.core.nth.call(null,vec__4846,(0),null);
var y1 = cljs.core.nth.call(null,vec__4846,(1),null);
var x2 = cljs.core.nth.call(null,vec__4846,(2),null);
var y2 = cljs.core.nth.call(null,vec__4846,(3),null);
return doc__4667__auto__.lineAnnotation(x1,y1,x2,y2,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rectAnnotation","rectAnnotation",-1860365626),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4847){
var vec__4848 = p__4847;
var x = cljs.core.nth.call(null,vec__4848,(0),null);
var y = cljs.core.nth.call(null,vec__4848,(1),null);
var width = cljs.core.nth.call(null,vec__4848,(2),null);
var height = cljs.core.nth.call(null,vec__4848,(3),null);
return doc__4667__auto__.rectAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipseAnnotation","ellipseAnnotation",-578264907),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4849){
var vec__4850 = p__4849;
var x = cljs.core.nth.call(null,vec__4850,(0),null);
var y = cljs.core.nth.call(null,vec__4850,(1),null);
var width = cljs.core.nth.call(null,vec__4850,(2),null);
var height = cljs.core.nth.call(null,vec__4850,(3),null);
return doc__4667__auto__.ellipseAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"textAnnotation","textAnnotation",-1223996839),(function (tag__4666__auto__,doc__4667__auto__,stack__4668__auto__,opts__4669__auto__,p__4851){
var vec__4852 = p__4851;
var x = cljs.core.nth.call(null,vec__4852,(0),null);
var y = cljs.core.nth.call(null,vec__4852,(1),null);
var width = cljs.core.nth.call(null,vec__4852,(2),null);
var height = cljs.core.nth.call(null,vec__4852,(3),null);
var text = cljs.core.nth.call(null,vec__4852,(4),null);
return doc__4667__auto__.textAnnotation(x,y,width,height,text,cljs.core.clj__GT_js.call(null,opts__4669__auto__));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"image","image",-58725096),(function (tag,doc,stack,opts,p__4853){
var vec__4854 = p__4853;
var source = cljs.core.nth.call(null,vec__4854,(0),null);
var x = cljs.core.nth.call(null,vec__4854,(1),null);
var y = cljs.core.nth.call(null,vec__4854,(2),null);
var opts__$1 = cljs.core.nth.call(null,vec__4854,(3),null);
return doc.image(source,x,y,cljs.core.clj__GT_js.call(null,opts__$1));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"text","text",-1790561697),(function (tag,doc,stack,p__4855,p__4856){
var map__4857 = p__4855;
var map__4857__$1 = ((((!((map__4857 == null)))?((((map__4857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4857):map__4857);
var opts = map__4857__$1;
var move_down = cljs.core.get.call(null,map__4857__$1,new cljs.core.Keyword(null,"move-down","move-down",-1149356017));
var vec__4858 = p__4856;
var text = cljs.core.nth.call(null,vec__4858,(0),null);
var x = cljs.core.nth.call(null,vec__4858,(1),null);
var y = cljs.core.nth.call(null,vec__4858,(2),null);
if(cljs.core.truth_(x)){
doc.text(text,x,y,cljs_pdfkit.util.camelize_js.call(null,opts));
} else {
doc.text(text,cljs_pdfkit.util.camelize_js.call(null,opts));
}

if(cljs.core.truth_(move_down)){
return doc.moveDown(move_down);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"clip","clip",830998499),(function (tag,doc,stack,opts,p__4860){
var vec__4861 = p__4860;
var vec__4862 = cljs.core.nth.call(null,vec__4861,(0),null);
var clip_tag = cljs.core.nth.call(null,vec__4862,(0),null);
var clip_opts = cljs.core.nth.call(null,vec__4862,(1),null);
var clip_children = cljs.core.nthnext.call(null,vec__4862,(2));
var children = cljs.core.nthnext.call(null,vec__4861,(1));
cljs_pdfkit.core.draw_tag.call(null,clip_tag,doc,stack,opts,clip_children).clip();

var seq__4863 = cljs.core.seq.call(null,children);
var chunk__4864 = null;
var count__4865 = (0);
var i__4866 = (0);
while(true){
if((i__4866 < count__4865)){
var child = cljs.core._nth.call(null,chunk__4864,i__4866);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4867 = seq__4863;
var G__4868 = chunk__4864;
var G__4869 = count__4865;
var G__4870 = (i__4866 + (1));
seq__4863 = G__4867;
chunk__4864 = G__4868;
count__4865 = G__4869;
i__4866 = G__4870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4863);
if(temp__4425__auto__){
var seq__4863__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4863__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__4863__$1);
var G__4871 = cljs.core.chunk_rest.call(null,seq__4863__$1);
var G__4872 = c__1033__auto__;
var G__4873 = cljs.core.count.call(null,c__1033__auto__);
var G__4874 = (0);
seq__4863 = G__4871;
chunk__4864 = G__4872;
count__4865 = G__4873;
i__4866 = G__4874;
continue;
} else {
var child = cljs.core.first.call(null,seq__4863__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4875 = cljs.core.next.call(null,seq__4863__$1);
var G__4876 = null;
var G__4877 = (0);
var G__4878 = (0);
seq__4863 = G__4875;
chunk__4864 = G__4876;
count__4865 = G__4877;
i__4866 = G__4878;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"do","do",46310725),(function (tag,doc,stack,opts,p__4879){
var vec__4880 = p__4879;
var child = cljs.core.nth.call(null,vec__4880,(0),null);
return eval(child);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (tag,doc,stack,opts,p__4881){
var vec__4882 = p__4881;
var x = cljs.core.nth.call(null,vec__4882,(0),null);
var y = cljs.core.nth.call(null,vec__4882,(1),null);
var width = cljs.core.nth.call(null,vec__4882,(2),null);
var height = cljs.core.nth.call(null,vec__4882,(3),null);
return doc.rect(x,y,width,height);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rounded-rect","rounded-rect",-1655760547),(function (tag,doc,stack,opts,p__4883){
var vec__4884 = p__4883;
var x = cljs.core.nth.call(null,vec__4884,(0),null);
var y = cljs.core.nth.call(null,vec__4884,(1),null);
var width = cljs.core.nth.call(null,vec__4884,(2),null);
var height = cljs.core.nth.call(null,vec__4884,(3),null);
var corner_radius = cljs.core.nth.call(null,vec__4884,(4),null);
return doc.roundedRect(x,y,width,height,corner_radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (tag,doc,stack,opts,p__4885){
var vec__4886 = p__4885;
var x = cljs.core.nth.call(null,vec__4886,(0),null);
var y = cljs.core.nth.call(null,vec__4886,(1),null);
var radius_x = cljs.core.nth.call(null,vec__4886,(2),null);
var radius_y = cljs.core.nth.call(null,vec__4886,(3),null);
return doc.ellipse(x,y,radius_x,(function (){var or__230__auto__ = radius_y;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return radius_x;
}
})());
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (tag,doc,stack,opts,p__4887){
var vec__4888 = p__4887;
var x = cljs.core.nth.call(null,vec__4888,(0),null);
var y = cljs.core.nth.call(null,vec__4888,(1),null);
var radius = cljs.core.nth.call(null,vec__4888,(2),null);
return doc.circle(x,y,radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (tag,doc,stack,opts,points){
return doc.polygon.apply(doc,cljs.core.clj__GT_js.call(null,points));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"path","path",-188191168),(function (tag,doc,stack,opts,p__4889){
var vec__4890 = p__4889;
var path = cljs.core.nth.call(null,vec__4890,(0),null);
return doc.path(path);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"style","style",-496642736),(function (tag,doc,stack,opts,children){
var seq__4891 = cljs.core.seq.call(null,children);
var chunk__4892 = null;
var count__4893 = (0);
var i__4894 = (0);
while(true){
if((i__4894 < count__4893)){
var child = cljs.core._nth.call(null,chunk__4892,i__4894);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4895 = seq__4891;
var G__4896 = chunk__4892;
var G__4897 = count__4893;
var G__4898 = (i__4894 + (1));
seq__4891 = G__4895;
chunk__4892 = G__4896;
count__4893 = G__4897;
i__4894 = G__4898;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4891);
if(temp__4425__auto__){
var seq__4891__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4891__$1)){
var c__1033__auto__ = cljs.core.chunk_first.call(null,seq__4891__$1);
var G__4899 = cljs.core.chunk_rest.call(null,seq__4891__$1);
var G__4900 = c__1033__auto__;
var G__4901 = cljs.core.count.call(null,c__1033__auto__);
var G__4902 = (0);
seq__4891 = G__4899;
chunk__4892 = G__4900;
count__4893 = G__4901;
i__4894 = G__4902;
continue;
} else {
var child = cljs.core.first.call(null,seq__4891__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__4903 = cljs.core.next.call(null,seq__4891__$1);
var G__4904 = null;
var G__4905 = (0);
var G__4906 = (0);
seq__4891 = G__4903;
chunk__4892 = G__4904;
count__4893 = G__4905;
i__4894 = G__4906;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"line","line",212345235),(function (tag,doc,stack,opts,p__4907){
var vec__4908 = p__4907;
var x1 = cljs.core.nth.call(null,vec__4908,(0),null);
var y1 = cljs.core.nth.call(null,vec__4908,(1),null);
var x2 = cljs.core.nth.call(null,vec__4908,(2),null);
var y2 = cljs.core.nth.call(null,vec__4908,(3),null);
doc.moveTo(x1,y1);

return doc.lineTo(x2,y2);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"quadratic-curve","quadratic-curve",1423731804),(function (tag,doc,stack,opts,p__4909){
var vec__4910 = p__4909;
var x1 = cljs.core.nth.call(null,vec__4910,(0),null);
var y1 = cljs.core.nth.call(null,vec__4910,(1),null);
var x2 = cljs.core.nth.call(null,vec__4910,(2),null);
var y2 = cljs.core.nth.call(null,vec__4910,(3),null);
var x3 = cljs.core.nth.call(null,vec__4910,(4),null);
var y3 = cljs.core.nth.call(null,vec__4910,(5),null);
doc.moveTo(x1,y1);

return doc.quadraticCurveTo(x2,y2,x3,y3);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"bezier-curve","bezier-curve",-2032784108),(function (tag,doc,stack,opts,p__4911){
var vec__4912 = p__4911;
var x1 = cljs.core.nth.call(null,vec__4912,(0),null);
var y1 = cljs.core.nth.call(null,vec__4912,(1),null);
var x2 = cljs.core.nth.call(null,vec__4912,(2),null);
var y2 = cljs.core.nth.call(null,vec__4912,(3),null);
var x3 = cljs.core.nth.call(null,vec__4912,(4),null);
var y3 = cljs.core.nth.call(null,vec__4912,(5),null);
var x4 = cljs.core.nth.call(null,vec__4912,(6),null);
var y4 = cljs.core.nth.call(null,vec__4912,(7),null);
doc.moveTo(x1,y1);

return doc.bezierCurveTo(x2,y2,x3,y3,x4,y4);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tag){
throw (new Error([cljs.core.str(tag),cljs.core.str(" tag not supported")].join('')));
}));

//# sourceMappingURL=core.js.map