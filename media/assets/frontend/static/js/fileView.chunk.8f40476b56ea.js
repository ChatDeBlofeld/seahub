(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[10],{1774:function(e,t,a){a(73),e.exports=a(1775)},1775:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(4),i=a(6),r=a(7),o=a(2),s=a.n(o),l=a(33),u=a.n(l),j=a(210),b=a(169),f=a(310),p=a(388),d=a(389),O=a(390),v=a(391),h=a(0),x=window.app.pageOptions,m=x.fileType,w=x.err,y=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(w)return Object(h.jsx)(j.a,{content:Object(h.jsx)(b.a,{})});var e;switch(m){case"Image":case"XMind":e=Object(h.jsx)(f.a,{tip:Object(h.jsx)(b.a,{})});break;case"SVG":e=Object(h.jsx)(p.a,{});break;case"PDF":e=Object(h.jsx)(d.a,{});break;case"Video":e=Object(h.jsx)(O.a,{});break;case"Audio":e=Object(h.jsx)(v.a,{})}return Object(h.jsx)(j.a,{content:e})}}]),a}(s.a.Component);u.a.render(Object(h.jsx)(y,{}),document.getElementById("wrapper"))},310:function(e,t,a){"use strict";var n,c,i=a(3),r=a(4),o=a(6),s=a(7),l=a(2),u=a.n(l),j=a(5),b=a(1),f=(a(567),a(0)),p=window.app.pageOptions,d=p.repoID,O=p.repoEncrypted,v=p.fileExt,h=p.filePath,x=p.fileName,m=p.thumbnailSizeForOriginal,w=p.previousImage,y=p.nextImage,g=p.rawPath,k=p.xmindImageSrc;w&&(n="".concat(b.vc,"lib/").concat(d,"/file").concat(j.a.encodePath(w))),y&&(c="".concat(b.vc,"lib/").concat(d,"/file").concat(j.a.encodePath(y)));var N=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleLoadFailure=function(){n.setState({loadFailed:!0})},n.state={loadFailed:!1},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",(function(e){w&&37==e.keyCode&&(location.href=n),y&&39==e.keyCode&&(location.href=c)}))}},{key:"render",value:function(){if(this.state.loadFailed)return this.props.tip;var e="";!O&&["tif","tiff","psd"].includes(v)&&(e="".concat(b.vc,"thumbnail/").concat(d,"/").concat(m).concat(j.a.encodePath(h)));var t=k?"".concat(b.vc).concat(k):"";return Object(f.jsxs)("div",{className:"file-view-content flex-1 image-file-view",children:[w&&Object(f.jsx)("a",{href:n,id:"img-prev",title:Object(b.tb)("you can also press \u2190 "),children:Object(f.jsx)("span",{className:"fas fa-chevron-left"})}),y&&Object(f.jsx)("a",{href:c,id:"img-next",title:Object(b.tb)("you can also press \u2192"),children:Object(f.jsx)("span",{className:"fas fa-chevron-right"})}),Object(f.jsx)("img",{src:t||e||g,alt:x,id:"image-view",onError:this.handleLoadFailure})]})}}]),a}(u.a.Component);t.a=N},388:function(e,t,a){"use strict";var n=a(3),c=a(4),i=a(6),r=a(7),o=a(2),s=a.n(o),l=(a(569),a(0)),u=window.app.pageOptions,j=u.fileName,b=u.rawPath,f=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"file-view-content flex-1 svg-file-view",children:Object(l.jsx)("img",{src:b,alt:j,id:"svg-view"})})}}]),a}(s.a.Component);t.a=f},389:function(e,t,a){"use strict";var n=a(3),c=a(4),i=a(6),r=a(7),o=a(2),s=a.n(o),l=a(187),u=(a(363),a(0)),j=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"file-view-content flex-1 pdf-file-view",children:Object(u.jsx)(l.a,{})})}}]),a}(s.a.Component);t.a=j},390:function(e,t,a){"use strict";var n=a(17),c=a(3),i=a(4),r=a(6),o=a(7),s=a(2),l=a.n(s),u=a(307),j=(a(568),a(0)),b=window.app.pageOptions.rawPath,f=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",playbackRates:[.5,1,1.5,2],sources:[{src:b}]};return Object(j.jsx)("div",{className:"file-view-content flex-1 video-file-view",children:Object(j.jsx)(u.a,Object(n.a)({},e))})}}]),a}(l.a.Component);t.a=f},391:function(e,t,a){"use strict";var n=a(17),c=a(3),i=a(4),r=a(6),o=a(7),s=a(2),l=a.n(s),u=a(308),j=(a(570),a(0)),b=window.app.pageOptions.rawPath,f=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e={autoplay:!1,controls:!0,preload:"auto",sources:[{src:b}]};return Object(j.jsx)("div",{className:"file-view-content flex-1 audio-file-view",children:Object(j.jsx)(u.a,Object(n.a)({},e))})}}]),a}(l.a.Component);t.a=f}},[[1774,1,0]]]);
//# sourceMappingURL=fileView.chunk.js.map