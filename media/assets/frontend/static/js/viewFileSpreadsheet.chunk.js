(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[36],{1782:function(e,t,n){n(73),e.exports=n(1783)},1783:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),c=n(6),o=n(7),i=n(2),s=n.n(i),u=n(33),f=n.n(u),b=n(8),d=n(1),h=n(210),j=n(169),O=n(19),l=(n(571),n(0)),p=window.app.pageOptions,g=p.repoID,m=p.filePath,v=p.err,x=p.commitID,w=p.fileType,k=p.fileName,L=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)(h.a,{content:Object(l.jsx)(y,{})})}}]),n}(s.a.Component),y=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).setIframeHeight=function(e){var t=e.currentTarget;t.height=t.contentDocument.body.scrollHeight},r.state={isLoading:!v,errorMsg:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!v){!function t(){b.a.queryOfficeFileConvertStatus(g,x,m,w.toLowerCase()).then((function(n){switch(n.data.status){case"QUEUED":case"PROCESSING":e.setState({isLoading:!0}),setTimeout(t,2e3);break;case"ERROR":e.setState({isLoading:!1,errorMsg:Object(d.tb)("Document convertion failed.")});break;case"DONE":e.setState({isLoading:!1,errorMsg:""})}})).catch((function(t){t.response?e.setState({isLoading:!1,errorMsg:Object(d.tb)("Document convertion failed.")}):e.setState({isLoading:!1,errorMsg:Object(d.tb)("Please check the network.")})}))}()}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.errorMsg;return v?Object(l.jsx)(j.a,{}):t?Object(l.jsx)(O.a,{}):n?Object(l.jsx)(j.a,{errorMsg:n}):Object(l.jsx)("div",{className:"file-view-content flex-1 spreadsheet-file-view",children:Object(l.jsx)("iframe",{id:"spreadsheet-container",title:k,src:"".concat(d.vc,"office-convert/static/").concat(g,"/").concat(x).concat(encodeURIComponent(m),"/index.html"),onLoad:this.setIframeHeight})})}}]),n}(s.a.Component);f.a.render(Object(l.jsx)(L,{}),document.getElementById("wrapper"))},571:function(e,t,n){}},[[1782,1,0]]]);
//# sourceMappingURL=viewFileSpreadsheet.chunk.js.map