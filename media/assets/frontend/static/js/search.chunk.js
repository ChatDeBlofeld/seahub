(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[17],{1798:function(e,t,a){a(73),e.exports=a(1810)},1810:function(e,t,a){"use strict";a.r(t);var s,n=a(3),i=a(4),r=a(6),l=a(7),c=a(2),o=a.n(c),h=a(33),p=a.n(h),d=a(71),u=a(120),b=a(179),j=a.n(b),m=a(1),f=a(8),O=a(12),g=a.n(O),x=a(5),y=a(0),v=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handlerFileURL=function(e){return e.is_dir?m.vc+"library/"+e.repo_id+"/"+e.repo_name+e.fullpath:m.vc+"lib/"+e.repo_id+"/file"+x.a.encodePath(e.fullpath)},s.handlerParentDirPath=function(e){var t=e.is_dir?e.fullpath.length-e.name.length-1:e.fullpath.length-e.name.length;return e.fullpath.substring(0,t)},s.handlerParentDirURL=function(e){return m.vc+"library/"+e.repo_id+"/"+e.repo_name+s.handlerParentDirPath(e)},s}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.item,t=decodeURI(e.fullpath).substring(1),a=t?x.a.getFolderIconUrl(!1,192):x.a.getDefaultLibIconUrl(!0),s=e.is_dir?a:x.a.getFileIconUrl(e.name,192);return""!==e.thumbnail_url&&(s=e.thumbnail_url),Object(y.jsxs)("li",{className:"search-result-item",children:[Object(y.jsx)("img",{className:t?"item-img":"lib-item-img",src:s,alt:""}),Object(y.jsxs)("div",{className:"item-content",children:[Object(y.jsx)("div",{className:"item-name ellipsis",children:Object(y.jsx)("a",{href:this.handlerFileURL(e),target:"_blank",title:e.name,rel:"noreferrer",children:e.name})}),Object(y.jsx)("div",{className:"item-link ellipsis",children:Object(y.jsxs)("a",{href:this.handlerParentDirURL(e),target:"_blank",rel:"noreferrer",children:[e.repo_name,this.handlerParentDirPath(e)]})}),Object(y.jsx)("div",{className:"item-link ellipsis",children:x.a.bytesToSize(e.size)+" "+g()(1e3*e.last_modified).format("YYYY-MM-DD")}),Object(y.jsx)("div",{className:"item-text ellipsis",dangerouslySetInnerHTML:{__html:e.content_highlight}})]})]})}}]),a}(o.a.Component),S=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.resultItems,a=e.total;return Object(y.jsxs)("div",{className:"search-result-container position-static",children:[Object(y.jsx)("p",{className:"tip",children:a>0?a+" "+(1===a?Object(m.tb)("result"):Object(m.tb)("results")):Object(m.tb)("No result")}),Object(y.jsx)("ul",{className:"search-result-list",children:t.map((function(e,t){return Object(y.jsx)(v,{item:e},t)}))})]})}}]),a}(o.a.Component),T=a(91),_=a.n(T),C=a(30),N=a(47),k=a(45),F=a(70),I=a(43),M=a(9),D=a.n(M),E=a(38),w=a.n(E),z=a(240),R=a(24);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(I.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=L(L({},z.Transition.propTypes),{},{isOpen:D.a.bool,children:D.a.oneOfType([D.a.arrayOf(D.a.node),D.a.node]),tag:R.q,className:D.a.node,navbar:D.a.bool,cssModule:D.a.object,innerRef:D.a.oneOfType([D.a.func,D.a.string,D.a.object])}),q=L(L({},z.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:R.e.Collapse}),H=((s={})[R.d.ENTERING]="collapsing",s[R.d.ENTERED]="collapse show",s[R.d.EXITING]="collapsing",s[R.d.EXITED]="collapse",s);function Y(e){return e.scrollHeight}var K=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(k.a)(a))})),a}Object(F.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:Y(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:Y(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,s=t.isOpen,n=t.className,i=t.navbar,r=t.cssModule,l=t.children,c=(t.innerRef,Object(N.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),h=this.state.height,p=Object(R.o)(c,R.c),d=Object(R.n)(c,R.c);return o.a.createElement(z.Transition,Object(C.a)({},p,{in:s,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var s=function(e){return H[e]||"collapse"}(t),c=Object(R.m)(w()(n,s,i&&"navbar-collapse"),r),p=null===h?null:{height:h};return o.a.createElement(a,Object(C.a)({},d,{style:L(L({},d.style),p),className:c,ref:e.props.innerRef}),l)}))},t}(c.Component);K.propTypes=A,K.defaultProps=q;var U=K,V=a(1831),B=a(1832),G=a(1026),J=a(1024),W=a(463),X={className:D.a.string,id:D.a.oneOfType([D.a.string,D.a.number]).isRequired,label:D.a.node,valid:D.a.bool,invalid:D.a.bool,bsSize:D.a.string,htmlFor:D.a.string,cssModule:D.a.object,onChange:D.a.func,children:D.a.oneOfType([D.a.node,D.a.array,D.a.func]),innerRef:D.a.oneOfType([D.a.object,D.a.string,D.a.func])},Q=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={files:null},a.onChange=a.onChange.bind(Object(k.a)(a)),a}Object(F.a)(t,e);var a=t.prototype;return a.onChange=function(e){var t=e.target,a=this.props.onChange,s=this.getSelectedFiles(t);"function"===typeof a&&a.apply(void 0,arguments),this.setState({files:s})},a.getSelectedFiles=function(e){if(this.props.multiple&&e.files)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var t=e.value.split("\\");return t[t.length-1]}return e.value},a.render=function(){var e=this.props,t=e.className,a=e.label,s=e.valid,n=e.invalid,i=e.cssModule,r=e.children,l=(e.bsSize,e.innerRef),c=e.htmlFor,h=(e.type,e.onChange,e.dataBrowse),p=e.hidden,d=Object(N.a)(e,["className","label","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor","type","onChange","dataBrowse","hidden"]),u=Object(R.m)(w()(t,"custom-file"),i),b=Object(R.m)(w()(n&&"is-invalid",s&&"is-valid"),i),j=c||d.id,m=this.state.files;return o.a.createElement("div",{className:u,hidden:p||!1},o.a.createElement("input",Object(C.a)({type:"file"},d,{ref:l,"aria-invalid":n,className:w()(b,Object(R.m)("custom-file-input",i)),onChange:this.onChange})),o.a.createElement("label",{className:Object(R.m)("custom-file-label",i),htmlFor:j,"data-browse":h},m||a||"Choose file"),r)},t}(o.a.Component);Q.propTypes=X;var Z=Q,$={className:D.a.string,id:D.a.oneOfType([D.a.string,D.a.number]).isRequired,type:D.a.string.isRequired,label:D.a.node,inline:D.a.bool,valid:D.a.bool,invalid:D.a.bool,bsSize:D.a.string,htmlFor:D.a.string,cssModule:D.a.object,children:D.a.oneOfType([D.a.node,D.a.array,D.a.func]),innerRef:D.a.oneOfType([D.a.object,D.a.string,D.a.func])};function ee(e){var t=e.className,a=e.label,s=e.inline,n=e.valid,i=e.invalid,r=e.cssModule,l=e.children,c=e.bsSize,h=e.innerRef,p=e.htmlFor,d=Object(N.a)(e,["className","label","inline","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor"]),u=d.type,b=Object(R.m)(w()(t,"custom-"+u,!!c&&"custom-"+u+"-"+c),r),j=Object(R.m)(w()(i&&"is-invalid",n&&"is-valid"),r),m=p||d.id;if("select"===u){d.type;var f=Object(N.a)(d,["type"]);return o.a.createElement("select",Object(C.a)({},f,{ref:h,className:w()(j,b),"aria-invalid":i}),l)}if("file"===u)return o.a.createElement(Z,e);if("checkbox"!==u&&"radio"!==u&&"switch"!==u)return o.a.createElement("input",Object(C.a)({},d,{ref:h,"aria-invalid":i,className:w()(j,b)}));var O=w()(b,Object(R.m)(w()("custom-control",{"custom-control-inline":s}),r)),g=d.hidden,x=Object(N.a)(d,["hidden"]);return o.a.createElement("div",{className:O,hidden:g||!1},o.a.createElement("input",Object(C.a)({},x,{type:"switch"===u?"checkbox":u,ref:h,"aria-invalid":i,className:w()(j,Object(R.m)("custom-control-input",r))})),o.a.createElement("label",{className:Object(R.m)("custom-control-label",r),htmlFor:m},a),l)}ee.propTypes=$;var te=ee,ae=a(1823),se=a(1824),ne=a(82),ie=a(402),re=window.search.pageOptions,le=re.repo_name,ce=re.search_repo,oe=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).getFileTypesList=function(e){for(var t=[Object(m.tb)("Text"),Object(m.tb)("Document"),Object(m.tb)("Image"),Object(m.tb)("Video"),Object(m.tb)("Audio"),"PDF","Markdown"],a=[],s=0,n=e.length;s<n;s++)e[s]&&a.push(t[s]);return a},s.disabledStartDate=function(e){if(!e)return!1;var t=e.isAfter(g()(),"day"),a=s.props.stateAndValues.time_to;return a&&e.isAfter(a)||t},s.disabledEndDate=function(e){if(!e)return!1;var t=e.isAfter(g()(),"day"),a=s.props.stateAndValues.time_from;return a&&e.isBefore(a)||t},s}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.stateAndValues,a=t.errorDateMsg,s=t.errorSizeMsg;if(t.isShowSearchFilter){var n=t.size_from,i=t.size_to,r=t.time_from,l=t.time_to,o=t.search_repo,h=t.fileTypeItemsStatus,p=this.getFileTypesList(h),d=p.length;return Object(y.jsxs)("div",{className:"search-filters",children:[o&&Object(y.jsxs)("span",{className:"mr-4",children:[Object(m.tb)("Libraries"),": ","all"==o?Object(m.tb)("All"):le]}),d>0&&Object(y.jsxs)("span",{className:"mr-4",children:[Object(m.tb)("File Types"),": ",p.map((function(e,t){return Object(y.jsxs)("span",{children:[e,t!==d-1&&","," "]},t)}))]}),r&&l&&Object(y.jsxs)("span",{className:"mr-4",children:[Object(m.tb)("Last Update"),": ",r.format("YYYY-MM-DD")," ",Object(m.tb)("to")," ",l.format("YYYY-MM-DD")]}),n&&i&&Object(y.jsxs)("span",{className:"mr-4",children:[Object(m.tb)("Size"),": ",n,"MB - ",i,"MB"]})]})}return Object(y.jsx)("div",{className:"advanced-search",children:Object(y.jsxs)(U,{isOpen:t.isCollapseOpen,children:["all"!==ce&&Object(y.jsx)("div",{className:"search-repo search-catalog",children:Object(y.jsxs)(V.a,{children:[Object(y.jsxs)(B.a,{md:"2",lg:"2",children:[Object(m.tb)("Libraries"),": "]}),Object(y.jsx)(B.a,{md:"4",lg:"4",children:Object(y.jsx)(G.a,{check:!0,children:Object(y.jsxs)(J.a,{check:!0,children:[Object(y.jsx)(W.a,{type:"radio",name:"repo",checked:t.isAllRepoCheck,onChange:function(){return e.props.handlerRepo(!0)}}),Object(m.tb)("In all libraries")]})})}),Object(y.jsx)(B.a,{md:"4",lg:"4",children:Object(y.jsx)(G.a,{check:!0,children:Object(y.jsxs)(J.a,{check:!0,children:[Object(y.jsx)(W.a,{type:"radio",name:"repo",checked:!t.isAllRepoCheck,onChange:function(){return e.props.handlerRepo(!1)}}),le]})})})]})}),Object(y.jsxs)("div",{className:"search-file-types search-catalog",children:[Object(y.jsxs)(V.a,{children:[Object(y.jsxs)(B.a,{md:"2",lg:"2",children:[Object(m.tb)("File Types"),": "]}),Object(y.jsx)(B.a,{md:"4",lg:"4",children:Object(y.jsx)(G.a,{check:!0,children:Object(y.jsxs)(J.a,{check:!0,children:[Object(y.jsx)(W.a,{type:"radio",name:"types",checked:!t.isFileTypeCollapseOpen,onChange:this.props.closeFileTypeCollapse}),Object(m.tb)("All file types")]})})}),Object(y.jsx)(B.a,{md:"4",lg:"4",children:Object(y.jsx)(G.a,{check:!0,children:Object(y.jsxs)(J.a,{check:!0,children:[Object(y.jsx)(W.a,{type:"radio",name:"types",checked:t.isFileTypeCollapseOpen,onChange:this.props.openFileTypeCollapse}),Object(m.tb)("Custom file types")]})})})]}),Object(y.jsxs)(V.a,{children:[Object(y.jsx)(B.a,{md:"2",lg:"2"}),Object(y.jsx)(B.a,{md:"10",lg:"10",children:Object(y.jsxs)(U,{isOpen:t.isFileTypeCollapseOpen,children:[Object(y.jsx)(G.a,{className:"search-file-types-form",children:Object(y.jsxs)(c.Fragment,{children:[Object(y.jsx)(te,{type:"checkbox",id:"checkTextFiles",label:Object(m.tb)("Text files"),inline:!0,onChange:function(){return e.props.handlerFileTypes(0)},checked:t.fileTypeItemsStatus[0]}),Object(y.jsx)(te,{type:"checkbox",id:"checkDocuments",label:Object(m.tb)("Documents"),inline:!0,onChange:function(){return e.props.handlerFileTypes(1)},checked:t.fileTypeItemsStatus[1]}),Object(y.jsx)(te,{type:"checkbox",id:"checkImages",label:Object(m.tb)("Images"),inline:!0,onChange:function(){return e.props.handlerFileTypes(2)},checked:t.fileTypeItemsStatus[2]}),Object(y.jsx)(te,{type:"checkbox",id:"checkVideo",label:Object(m.tb)("Video"),inline:!0,onChange:function(){return e.props.handlerFileTypes(3)},checked:t.fileTypeItemsStatus[3]}),Object(y.jsx)(te,{type:"checkbox",id:"checkAudio",label:Object(m.tb)("Audio"),inline:!0,onChange:function(){return e.props.handlerFileTypes(4)},checked:t.fileTypeItemsStatus[4]}),Object(y.jsx)(te,{type:"checkbox",id:"checkPdf",label:"PDF",inline:!0,onChange:function(){return e.props.handlerFileTypes(5)},checked:t.fileTypeItemsStatus[5]}),Object(y.jsx)(te,{type:"checkbox",id:"checkMarkdown",label:"Markdown",inline:!0,onChange:function(){return e.props.handlerFileTypes(6)},checked:t.fileTypeItemsStatus[6]})]})}),Object(y.jsx)("input",{type:"text",className:"form-control search-input",name:"query",autoComplete:"off",placeholder:Object(m.tb)("Input file extensions here, separate with ','"),onChange:this.props.handlerFileTypesInput,value:t.input_fexts,onKeyDown:this.props.handleKeyDown})]})})]})]}),Object(y.jsxs)("div",{className:"search-date search-catalog",children:[Object(y.jsxs)(V.a,{children:[Object(y.jsxs)(B.a,{md:"2",lg:"2",className:"mt-2",children:[Object(m.tb)("Last Update"),": "]}),Object(y.jsxs)(B.a,{md:"4",lg:"4",sm:"4",xs:"5",className:"position-relative",children:[Object(y.jsx)(ie.a,{inputWidth:"100%",disabledDate:this.disabledStartDate,value:t.time_from,onChange:this.props.handleTimeFromInput,showHourAndMinute:!1}),Object(y.jsx)("span",{className:"select-data-icon",children:Object(y.jsx)("i",{className:"fa fa-calendar-alt"})})]}),Object(y.jsx)("div",{className:"mt-2",children:"-"}),Object(y.jsxs)(B.a,{md:"4",lg:"4",sm:"4",xs:"5",className:"position-relative",children:[Object(y.jsx)(ie.a,{inputWidth:"100%",disabledDate:this.disabledEndDate,value:t.time_to,onChange:this.props.handleTimeToInput,showHourAndMinute:!1}),Object(y.jsx)("span",{className:"select-data-icon",children:Object(y.jsx)("i",{className:"fa fa-calendar-alt"})})]})]}),a&&Object(y.jsxs)(V.a,{children:[Object(y.jsx)(B.a,{md:"2",lg:"2"}),Object(y.jsx)(B.a,{md:"8",className:"error mt-2",children:a})]})]}),Object(y.jsx)("div",{className:"search-size search-catalog",children:Object(y.jsxs)(V.a,{children:[Object(y.jsxs)(B.a,{md:"2",lg:"2",className:"mt-2",children:[Object(m.tb)("Size"),": "]}),Object(y.jsxs)(B.a,{md:"4",lg:"4",sm:"4",xs:"5",children:[Object(y.jsx)(G.a,{children:Object(y.jsxs)(ae.a,{children:[Object(y.jsx)(W.a,{type:"tel",name:"size_from",onKeyDown:this.props.handleKeyDown,onChange:this.props.handleSizeFromInput,value:t.size_from}),Object(y.jsx)(se.a,{addonType:"append",children:"MB"})]})}),Object(y.jsxs)(_.a,{query:"(min-width: 768px)",children:[s&&Object(y.jsx)("div",{className:"error mb-4",children:s}),Object(y.jsx)(ne.a,{color:"primary",onClick:this.props.handleSubmit,children:Object(m.tb)("Submit")}),Object(y.jsx)(ne.a,{className:"ml-2",onClick:this.props.handleReset,children:Object(m.tb)("Reset")})]})]}),Object(y.jsx)("div",{className:"mt-2",children:"-"}),Object(y.jsx)(B.a,{md:"4",lg:"4",sm:"4",xs:"5",children:Object(y.jsx)(G.a,{children:Object(y.jsxs)(ae.a,{children:[Object(y.jsx)(W.a,{type:"tel",name:"size_to",onKeyDown:this.props.handleKeyDown,onChange:this.props.handleSizeToInput,value:t.size_to}),Object(y.jsx)(se.a,{addonType:"append",children:"MB"})]})})})]})}),Object(y.jsxs)(_.a,{query:"(max-width: 767.8px)",children:[s&&Object(y.jsx)("div",{className:"error mb-4",children:s}),Object(y.jsx)(ne.a,{color:"primary",onClick:this.props.handleSubmit,children:Object(m.tb)("Submit")}),Object(y.jsx)(ne.a,{className:"ml-2",onClick:this.props.handleReset,children:Object(m.tb)("Reset")})]})]})})}}]),a}(o.a.Component),he=a(10),pe=a(19),de=(a(176),window.search.pageOptions),ue=de.q,be=de.search_repo,je=de.search_ftypes,me=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).handleSearchParams=function(e){var t={q:s.state.q.trim(),page:e},a=s.getFileTypesList();s.state.search_repo&&(t.search_repo=s.state.search_repo),s.state.search_ftypes&&(t.search_ftypes=s.state.search_ftypes),s.state.per_page&&(t.per_page=s.state.per_page),s.state.input_fexts&&(t.input_fexts=s.state.input_fexts);var n=s.state,i=n.time_from,r=n.time_to;return i&&(t.time_from=parseInt(i.valueOf()/1e3)),r&&(t.time_to=parseInt(r.valueOf()/1e3)),s.state.size_from&&(t.size_from=1e3*s.state.size_from*1e3),s.state.size_to&&(t.size_to=1e3*s.state.size_to*1e3),0!==a.length&&(t.ftype=a),t},s.handleSubmit=function(){if(s.compareNumber(s.state.size_from,s.state.size_to))s.setState({errorSizeMsg:Object(m.tb)("Invalid file size range.")});else{if(s.getValueLength(s.state.q.trim())<3)0===s.state.q.trim().length?s.setState({errorMsg:Object(m.tb)("It is required.")}):s.setState({errorMsg:Object(m.tb)("Required at least three letters.")}),s.state.isLoading&&s.setState({isLoading:!1});else{var e=s.handleSearchParams(1);s.getSearchResults(e)}s.state.isCollapseOpen&&s.setState({isCollapseOpen:!1})}},s.compareNumber=function(e,t){return!(!e||!t)&&parseInt(e.replace(/\-/g,""))>=parseInt(t.replace(/\-/g,""))},s.showSearchFilter=function(){s.setState({isShowSearchFilter:!0})},s.hideSearchFilter=function(){s.setState({isShowSearchFilter:!1})},s.handleReset=function(){s.setState({q:ue.trim(),search_repo:be,search_ftypes:je,fileTypeItemsStatus:[!1,!1,!1,!1,!1,!1,!1],input_fexts:"",time_from:null,time_to:null,size_from:"",size_to:"",errorMsg:"",errorDateMsg:"",errorSizeMsg:""})},s.handlePrevious=function(e){e.preventDefault(),s.stateHistory&&s.state.page>1?s.setState(s.stateHistory,(function(){var e=s.handleSearchParams(s.state.page-1);s.getSearchResults(e)})):he.a.danger(Object(m.tb)("Error"),{duration:3})},s.handleNext=function(e){e.preventDefault(),s.stateHistory&&s.state.hasMore?s.setState(s.stateHistory,(function(){var e=s.handleSearchParams(s.state.page+1);s.getSearchResults(e)})):he.a.danger(Object(m.tb)("Error"),{duration:3})},s.toggleCollapse=function(){s.setState({isCollapseOpen:!s.state.isCollapseOpen}),s.hideSearchFilter()},s.openFileTypeCollapse=function(){s.setState({isFileTypeCollapseOpen:!0,search_ftypes:"custom"})},s.closeFileTypeCollapse=function(){s.setState({isFileTypeCollapseOpen:!1,fileTypeItemsStatus:Array(7).fill(!1),search_ftypes:"all",input_fexts:""})},s.handleSearchInput=function(e){s.setState({q:e.target.value}),s.state.errorMsg&&s.setState({errorMsg:""}),s.state.errorSizeMsg&&s.setState({errorSizeMsg:""}),s.state.errorDateMsg&&s.setState({errorDateMsg:""})},s.handleKeyDown=function(e){13===e.keyCode&&(e.preventDefault(),s.handleSubmit())},s.handlerRepo=function(e){e?s.setState({isAllRepoCheck:!0,search_repo:"all"}):s.setState({isAllRepoCheck:!1,search_repo:"all"!==be?be:""})},s.handlerFileTypes=function(e){var t=s.state.fileTypeItemsStatus;t[e]=!s.state.fileTypeItemsStatus[e],s.setState({fileTypeItemsStatus:t})},s.getFileTypesList=function(){for(var e=["Text","Document","Image","Video","Audio","PDF","Markdown"],t=[],a=0,n=s.state.fileTypeItemsStatus.length;a<n;a++)s.state.fileTypeItemsStatus[a]&&t.push(e[a]);return t},s.handlerFileTypesInput=function(e){s.setState({input_fexts:e.target.value.trim()})},s.handleTimeFromInput=function(e){s.setState({time_from:e?e.hours(0).minutes(0).seconds(0):e}),s.state.errorDateMsg&&s.setState({errorDateMsg:""})},s.handleTimeToInput=function(e){s.setState({time_to:e?e.hours(23).minutes(59).seconds(59):e}),s.state.errorDateMsg&&s.setState({errorDateMsg:""})},s.handleSizeFromInput=function(e){s.setState({size_from:e.target.value>=0?e.target.value:0}),s.state.errorSizeMsg&&s.setState({errorSizeMsg:""})},s.handleSizeToInput=function(e){s.setState({size_to:e.target.value>=0?e.target.value:0}),s.state.errorSizeMsg&&s.setState({errorSizeMsg:""})},s.stateHistory=null,s.state={isCollapseOpen:"all"!==be,isFileTypeCollapseOpen:!1,isResultGot:!1,isLoading:!0,isAllRepoCheck:"all"===be,isShowSearchFilter:!1,q:ue.trim(),search_repo:be,search_ftypes:je,fileTypeItemsStatus:[!1,!1,!1,!1,!1,!1,!1],input_fexts:"",time_from:null,time_to:null,size_from:"",size_to:"",hasMore:!1,resultItems:[],page:1,per_page:20,errorMsg:"",errorDateMsg:"",errorSizeMsg:""},s}return Object(i.a)(a,[{key:"getSearchResults",value:function(e){var t=this;this.setState({isLoading:!0,isResultGot:!1});var a=j()(this.state);f.a.searchFiles(e,null).then((function(s){var n=s.data,i=n.results,r=n.has_more,l=n.total;t.setState({isLoading:!1,isResultGot:!0,resultItems:i,hasMore:r,total:l,page:e.page,isShowSearchFilter:!0}),t.stateHistory=a,t.stateHistory.resultItems=i,t.stateHistory.hasMore=r,t.stateHistory.page=e.page})).catch((function(e){t.setState({isLoading:!1}),e.response?he.a.danger(e.response.data.detail||e.response.data.error_msg||Object(m.tb)("Error"),{duration:3}):he.a.danger(Object(m.tb)("Please check the network."),{duration:3})}))}},{key:"getValueLength",value:function(e){for(var t,a=0,s=0,n=e.length;s<n;s++)10===(t=e.charCodeAt(s))?a+=2:t<127?a+=1:t>=128&&t<=2047?a+=2:t>=2048&&t<=65535&&(a+=3);return a}},{key:"componentDidMount",value:function(){this.state.q?this.handleSubmit():this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.state.isCollapseOpen;return Object(y.jsxs)("div",{className:"search-page",children:[Object(y.jsxs)("div",{className:"search-page-container",children:[Object(y.jsxs)("div",{className:"input-icon align-items-center d-flex",children:[Object(y.jsx)("input",{type:"text",className:"form-control search-input",name:"query",autoComplete:"off",value:this.state.q,placeholder:Object(m.tb)("Search Files"),onChange:this.handleSearchInput,onKeyDown:this.handleKeyDown}),Object(y.jsx)("i",{className:"search-icon-right input-icon-addon fas fa-search",onClick:this.handleSubmit}),Object(y.jsx)("i",{className:"fas action-icon fa-angle-double-".concat(e?"up":"down"),onClick:this.toggleCollapse})]}),this.state.errorMsg&&Object(y.jsx)("div",{className:"error",children:this.state.errorMsg}),Object(y.jsx)(oe,{openFileTypeCollapse:this.openFileTypeCollapse,closeFileTypeCollapse:this.closeFileTypeCollapse,handlerFileTypes:this.handlerFileTypes,handlerFileTypesInput:this.handlerFileTypesInput,handleSubmit:this.handleSubmit,handleReset:this.handleReset,handlerRepo:this.handlerRepo,handleKeyDown:this.handleKeyDown,handleTimeFromInput:this.handleTimeFromInput,handleTimeToInput:this.handleTimeToInput,handleSizeFromInput:this.handleSizeFromInput,handleSizeToInput:this.handleSizeToInput,stateAndValues:this.state})]}),this.state.isLoading&&Object(y.jsx)(pe.a,{}),!this.state.isLoading&&this.state.isResultGot&&Object(y.jsx)(S,{resultItems:this.state.resultItems,total:this.state.total}),!this.state.isLoading&&this.state.isResultGot&&Object(y.jsxs)("div",{className:"paginator",children:[1!==this.state.page&&Object(y.jsx)("a",{href:"#",onClick:this.handlePrevious,children:Object(m.tb)("Previous")}),1!==this.state.page&&this.state.hasMore&&Object(y.jsx)("span",{children:" | "}),this.state.hasMore&&Object(y.jsx)("a",{href:"#",onClick:this.handleNext,children:Object(m.tb)("Next")})]})]})}}]),a}(o.a.Component),fe=(a(227),a(155),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onSearchedClick=function(e){var t=e.is_dir?m.vc+"library/"+e.repo_id+"/"+e.repo_name+e.path:m.vc+"lib/"+e.repo_id+"/file"+x.a.encodePath(e.path);window.open("about:blank").location.href=t},s}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"w-100 h-100",children:[Object(y.jsxs)("div",{className:"main-panel-north border-left-show",children:[Object(y.jsx)(u.a,{}),Object(y.jsx)(d.a,{onSearchedClick:this.onSearchedClick})]}),Object(y.jsx)("div",{className:"main-panel-south",children:Object(y.jsx)(me,{})})]})}}]),a}(o.a.Component));p.a.render(Object(y.jsx)(fe,{}),document.getElementById("wrapper"))}},[[1798,1,0]]]);
//# sourceMappingURL=search.chunk.js.map