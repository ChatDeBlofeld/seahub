(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[15],{1685:function(e,t,s){s(54),e.exports=s(1700)},1700:function(e,t,s){"use strict";s.r(t);var a=s(6),r=s(7),i=s(9),n=s(8),l=s(2),c=s.n(l),o=s(24),h=s.n(o),p=s(51),d=s(96),j=s(1),u=s(10),b=s(13),m=s.n(b),O=s(5),f=s(0),g=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).handlerFileURL=function(e){return e.is_dir?j.qc+"library/"+e.repo_id+"/"+e.repo_name+e.fullpath:j.qc+"lib/"+e.repo_id+"/file"+O.a.encodePath(e.fullpath)},r.handlerParentDirPath=function(e){var t=e.is_dir?e.fullpath.length-e.name.length-1:e.fullpath.length-e.name.length;return e.fullpath.substring(0,t)},r.handlerParentDirURL=function(e){return j.qc+"library/"+e.repo_id+"/"+e.repo_name+r.handlerParentDirPath(e)},r}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.item,t=decodeURI(e.fullpath).substring(1),s=t?O.a.getFolderIconUrl(!1,192):O.a.getDefaultLibIconUrl(!0),a=e.is_dir?s:O.a.getFileIconUrl(e.name,192);return""!==e.thumbnail_url&&(a=e.thumbnail_url),Object(f.jsxs)("li",{className:"search-result-item",children:[Object(f.jsx)("img",{className:t?"item-img":"lib-item-img",src:a,alt:""}),Object(f.jsxs)("div",{className:"item-content",children:[Object(f.jsx)("div",{className:"item-name ellipsis",children:Object(f.jsx)("a",{href:this.handlerFileURL(e),target:"_blank",title:e.name,rel:"noreferrer",children:e.name})}),Object(f.jsx)("div",{className:"item-link ellipsis",children:Object(f.jsxs)("a",{href:this.handlerParentDirURL(e),target:"_blank",rel:"noreferrer",children:[e.repo_name,this.handlerParentDirPath(e)]})}),Object(f.jsx)("div",{className:"item-link ellipsis",children:O.a.bytesToSize(e.size)+" "+m()(1e3*e.last_modified).format("YYYY-MM-DD")}),Object(f.jsx)("div",{className:"item-text ellipsis",dangerouslySetInnerHTML:{__html:e.content_highlight}})]})]})}}]),s}(c.a.Component),x=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){return Object(a.a)(this,s),t.call(this,e)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props,t=e.resultItems,s=e.total;return Object(f.jsxs)("div",{className:"search-result-container position-static",children:[Object(f.jsx)("p",{className:"tip",children:s>0?s+" "+(1===s?Object(j.qb)("result"):Object(j.qb)("results")):Object(j.qb)("No result")}),Object(f.jsx)("ul",{className:"search-result-list",children:t.map((function(e,t){return Object(f.jsx)(g,{item:e},t)}))})]})}}]),s}(c.a.Component),y=s(74),S=s.n(y),_=s(4),v=s(220),k=window.search.pageOptions,T=k.repo_name,q=k.search_repo,C=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).getFileTypesList=function(e){for(var t=[Object(j.qb)("Text"),Object(j.qb)("Document"),Object(j.qb)("Image"),Object(j.qb)("Video"),Object(j.qb)("Audio"),"PDF","Markdown"],s=[],a=0,r=e.length;a<r;a++)e[a]&&s.push(t[a]);return s},r.disabledStartDate=function(e){if(!e)return!1;var t=e.isAfter(m()(),"day"),s=r.props.stateAndValues.time_to;return s&&e.isAfter(s)||t},r.disabledEndDate=function(e){if(!e)return!1;var t=e.isAfter(m()(),"day"),s=r.props.stateAndValues.time_from;return s&&e.isBefore(s)||t},r}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=this.props.stateAndValues,s=t.errorDateMsg,a=t.errorSizeMsg;if(t.isShowSearchFilter){var r=t.size_from,i=t.size_to,n=t.time_from,c=t.time_to,o=t.search_repo,h=t.fileTypeItemsStatus,p=this.getFileTypesList(h),d=p.length;return Object(f.jsxs)("div",{className:"search-filters",children:[o&&Object(f.jsxs)("span",{className:"mr-4",children:[Object(j.qb)("Libraries"),": ","all"==o?Object(j.qb)("All"):T]}),d>0&&Object(f.jsxs)("span",{className:"mr-4",children:[Object(j.qb)("File Types"),": ",p.map((function(e,t){return Object(f.jsxs)("span",{children:[e,t!==d-1&&","," "]},t)}))]}),n&&c&&Object(f.jsxs)("span",{className:"mr-4",children:[Object(j.qb)("Last Update"),": ",n.format("YYYY-MM-DD")," ",Object(j.qb)("to")," ",c.format("YYYY-MM-DD")]}),r&&i&&Object(f.jsxs)("span",{className:"mr-4",children:[Object(j.qb)("Size"),": ",r,"MB - ",i,"MB"]})]})}return Object(f.jsx)("div",{className:"advanced-search",children:Object(f.jsxs)(_.j,{isOpen:t.isCollapseOpen,children:["all"!==q&&Object(f.jsx)("div",{className:"search-repo search-catalog",children:Object(f.jsxs)(_.G,{children:[Object(f.jsxs)(_.i,{md:"2",lg:"2",children:[Object(j.qb)("Libraries"),": "]}),Object(f.jsx)(_.i,{md:"4",lg:"4",children:Object(f.jsx)(_.q,{check:!0,children:Object(f.jsxs)(_.w,{check:!0,children:[Object(f.jsx)(_.s,{type:"radio",name:"repo",checked:t.isAllRepoCheck,onChange:function(){return e.props.handlerRepo(!0)}}),Object(j.qb)("In all libraries")]})})}),Object(f.jsx)(_.i,{md:"4",lg:"4",children:Object(f.jsx)(_.q,{check:!0,children:Object(f.jsxs)(_.w,{check:!0,children:[Object(f.jsx)(_.s,{type:"radio",name:"repo",checked:!t.isAllRepoCheck,onChange:function(){return e.props.handlerRepo(!1)}}),T]})})})]})}),Object(f.jsxs)("div",{className:"search-file-types search-catalog",children:[Object(f.jsxs)(_.G,{children:[Object(f.jsxs)(_.i,{md:"2",lg:"2",children:[Object(j.qb)("File Types"),": "]}),Object(f.jsx)(_.i,{md:"4",lg:"4",children:Object(f.jsx)(_.q,{check:!0,children:Object(f.jsxs)(_.w,{check:!0,children:[Object(f.jsx)(_.s,{type:"radio",name:"types",checked:!t.isFileTypeCollapseOpen,onChange:this.props.closeFileTypeCollapse}),Object(j.qb)("All file types")]})})}),Object(f.jsx)(_.i,{md:"4",lg:"4",children:Object(f.jsx)(_.q,{check:!0,children:Object(f.jsxs)(_.w,{check:!0,children:[Object(f.jsx)(_.s,{type:"radio",name:"types",checked:t.isFileTypeCollapseOpen,onChange:this.props.openFileTypeCollapse}),Object(j.qb)("Custom file types")]})})})]}),Object(f.jsxs)(_.G,{children:[Object(f.jsx)(_.i,{md:"2",lg:"2"}),Object(f.jsx)(_.i,{md:"10",lg:"10",children:Object(f.jsxs)(_.j,{isOpen:t.isFileTypeCollapseOpen,children:[Object(f.jsx)(_.q,{className:"search-file-types-form",children:Object(f.jsxs)(l.Fragment,{children:[Object(f.jsx)(_.k,{type:"checkbox",id:"checkTextFiles",label:Object(j.qb)("Text files"),inline:!0,onChange:function(){return e.props.handlerFileTypes(0)},checked:t.fileTypeItemsStatus[0]}),Object(f.jsx)(_.k,{type:"checkbox",id:"checkDocuments",label:Object(j.qb)("Documents"),inline:!0,onChange:function(){return e.props.handlerFileTypes(1)},checked:t.fileTypeItemsStatus[1]}),Object(f.jsx)(_.k,{type:"checkbox",id:"checkImages",label:Object(j.qb)("Images"),inline:!0,onChange:function(){return e.props.handlerFileTypes(2)},checked:t.fileTypeItemsStatus[2]}),Object(f.jsx)(_.k,{type:"checkbox",id:"checkVideo",label:Object(j.qb)("Video"),inline:!0,onChange:function(){return e.props.handlerFileTypes(3)},checked:t.fileTypeItemsStatus[3]}),Object(f.jsx)(_.k,{type:"checkbox",id:"checkAudio",label:Object(j.qb)("Audio"),inline:!0,onChange:function(){return e.props.handlerFileTypes(4)},checked:t.fileTypeItemsStatus[4]}),Object(f.jsx)(_.k,{type:"checkbox",id:"checkPdf",label:"PDF",inline:!0,onChange:function(){return e.props.handlerFileTypes(5)},checked:t.fileTypeItemsStatus[5]}),Object(f.jsx)(_.k,{type:"checkbox",id:"checkMarkdown",label:"Markdown",inline:!0,onChange:function(){return e.props.handlerFileTypes(6)},checked:t.fileTypeItemsStatus[6]})]})}),Object(f.jsx)("input",{type:"text",className:"form-control search-input",name:"query",autoComplete:"off",placeholder:Object(j.qb)("Input file extensions here, separate with ','"),onChange:this.props.handlerFileTypesInput,value:t.input_fexts,onKeyDown:this.props.handleKeyDown})]})})]})]}),Object(f.jsxs)("div",{className:"search-date search-catalog",children:[Object(f.jsxs)(_.G,{children:[Object(f.jsxs)(_.i,{md:"2",lg:"2",className:"mt-2",children:[Object(j.qb)("Last Update"),": "]}),Object(f.jsxs)(_.i,{md:"4",lg:"4",sm:"4",xs:"5",className:"position-relative",children:[Object(f.jsx)(v.a,{inputWidth:"100%",disabledDate:this.disabledStartDate,value:t.time_from,onChange:this.props.handleTimeFromInput,showHourAndMinute:!1}),Object(f.jsx)("span",{className:"select-data-icon",children:Object(f.jsx)("i",{className:"fa fa-calendar-alt"})})]}),Object(f.jsx)("div",{className:"mt-2",children:"-"}),Object(f.jsxs)(_.i,{md:"4",lg:"4",sm:"4",xs:"5",className:"position-relative",children:[Object(f.jsx)(v.a,{inputWidth:"100%",disabledDate:this.disabledEndDate,value:t.time_to,onChange:this.props.handleTimeToInput,showHourAndMinute:!1}),Object(f.jsx)("span",{className:"select-data-icon",children:Object(f.jsx)("i",{className:"fa fa-calendar-alt"})})]})]}),s&&Object(f.jsxs)(_.G,{children:[Object(f.jsx)(_.i,{md:"2",lg:"2"}),Object(f.jsx)(_.i,{md:"8",className:"error mt-2",children:s})]})]}),Object(f.jsx)("div",{className:"search-size search-catalog",children:Object(f.jsxs)(_.G,{children:[Object(f.jsxs)(_.i,{md:"2",lg:"2",className:"mt-2",children:[Object(j.qb)("Size"),": "]}),Object(f.jsxs)(_.i,{md:"4",lg:"4",sm:"4",xs:"5",children:[Object(f.jsx)(_.q,{children:Object(f.jsxs)(_.t,{children:[Object(f.jsx)(_.s,{type:"tel",name:"size_from",onKeyDown:this.props.handleKeyDown,onChange:this.props.handleSizeFromInput,value:t.size_from}),Object(f.jsx)(_.u,{addonType:"append",children:"MB"})]})}),Object(f.jsxs)(S.a,{query:"(min-width: 768px)",children:[a&&Object(f.jsx)("div",{className:"error mb-4",children:a}),Object(f.jsx)(_.c,{color:"primary",onClick:this.props.handleSubmit,children:Object(j.qb)("Submit")}),Object(f.jsx)(_.c,{className:"ml-2",onClick:this.props.handleReset,children:Object(j.qb)("Reset")})]})]}),Object(f.jsx)("div",{className:"mt-2",children:"-"}),Object(f.jsx)(_.i,{md:"4",lg:"4",sm:"4",xs:"5",children:Object(f.jsx)(_.q,{children:Object(f.jsxs)(_.t,{children:[Object(f.jsx)(_.s,{type:"tel",name:"size_to",onKeyDown:this.props.handleKeyDown,onChange:this.props.handleSizeToInput,value:t.size_to}),Object(f.jsx)(_.u,{addonType:"append",children:"MB"})]})})})]})}),Object(f.jsxs)(S.a,{query:"(max-width: 767.8px)",children:[a&&Object(f.jsx)("div",{className:"error mb-4",children:a}),Object(f.jsx)(_.c,{color:"primary",onClick:this.props.handleSubmit,children:Object(j.qb)("Submit")}),Object(f.jsx)(_.c,{className:"ml-2",onClick:this.props.handleReset,children:Object(j.qb)("Reset")})]})]})})}}]),s}(c.a.Component),I=s(11),F=s(15),N=(s(145),s(112)),M=window.search.pageOptions,D=M.q,z=M.search_repo,w=M.search_ftypes,R=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).handleSearchParams=function(e){var t={q:r.state.q.trim(),page:e},s=r.getFileTypesList();r.state.search_repo&&(t.search_repo=r.state.search_repo),r.state.search_ftypes&&(t.search_ftypes=r.state.search_ftypes),r.state.per_page&&(t.per_page=r.state.per_page),r.state.input_fexts&&(t.input_fexts=r.state.input_fexts);var a=r.state,i=a.time_from,n=a.time_to;return i&&(t.time_from=parseInt(i.valueOf()/1e3)),n&&(t.time_to=parseInt(n.valueOf()/1e3)),r.state.size_from&&(t.size_from=1e3*r.state.size_from*1e3),r.state.size_to&&(t.size_to=1e3*r.state.size_to*1e3),0!==s.length&&(t.ftype=s),t},r.handleSubmit=function(){if(r.compareNumber(r.state.size_from,r.state.size_to))r.setState({errorSizeMsg:Object(j.qb)("Invalid file size range.")});else{if(r.getValueLength(r.state.q.trim())<3)0===r.state.q.trim().length?r.setState({errorMsg:Object(j.qb)("It is required.")}):r.setState({errorMsg:Object(j.qb)("Required at least three letters.")}),r.state.isLoading&&r.setState({isLoading:!1});else{var e=r.handleSearchParams(1);r.getSearchResults(e)}r.state.isCollapseOpen&&r.setState({isCollapseOpen:!1})}},r.compareNumber=function(e,t){return!(!e||!t)&&parseInt(e.replace(/\-/g,""))>=parseInt(t.replace(/\-/g,""))},r.showSearchFilter=function(){r.setState({isShowSearchFilter:!0})},r.hideSearchFilter=function(){r.setState({isShowSearchFilter:!1})},r.handleReset=function(){r.setState({q:D.trim(),search_repo:z,search_ftypes:w,fileTypeItemsStatus:[!1,!1,!1,!1,!1,!1,!1],input_fexts:"",time_from:null,time_to:null,size_from:"",size_to:"",errorMsg:"",errorDateMsg:"",errorSizeMsg:""})},r.handlePrevious=function(e){e.preventDefault(),r.stateHistory&&r.state.page>1?r.setState(r.stateHistory,(function(){var e=r.handleSearchParams(r.state.page-1);r.getSearchResults(e)})):I.a.danger(Object(j.qb)("Error"),{duration:3})},r.handleNext=function(e){e.preventDefault(),r.stateHistory&&r.state.hasMore?r.setState(r.stateHistory,(function(){var e=r.handleSearchParams(r.state.page+1);r.getSearchResults(e)})):I.a.danger(Object(j.qb)("Error"),{duration:3})},r.toggleCollapse=function(){r.setState({isCollapseOpen:!r.state.isCollapseOpen}),r.hideSearchFilter()},r.openFileTypeCollapse=function(){r.setState({isFileTypeCollapseOpen:!0,search_ftypes:"custom"})},r.closeFileTypeCollapse=function(){r.setState({isFileTypeCollapseOpen:!1,fileTypeItemsStatus:Array(7).fill(!1),search_ftypes:"all",input_fexts:""})},r.handleSearchInput=function(e){r.setState({q:e.target.value}),r.state.errorMsg&&r.setState({errorMsg:""}),r.state.errorSizeMsg&&r.setState({errorSizeMsg:""}),r.state.errorDateMsg&&r.setState({errorDateMsg:""})},r.handleKeyDown=function(e){13===e.keyCode&&(e.preventDefault(),r.handleSubmit())},r.handlerRepo=function(e){e?r.setState({isAllRepoCheck:!0,search_repo:"all"}):r.setState({isAllRepoCheck:!1,search_repo:"all"!==z?z:""})},r.handlerFileTypes=function(e){var t=r.state.fileTypeItemsStatus;t[e]=!r.state.fileTypeItemsStatus[e],r.setState({fileTypeItemsStatus:t})},r.getFileTypesList=function(){for(var e=["Text","Document","Image","Video","Audio","PDF","Markdown"],t=[],s=0,a=r.state.fileTypeItemsStatus.length;s<a;s++)r.state.fileTypeItemsStatus[s]&&t.push(e[s]);return t},r.handlerFileTypesInput=function(e){r.setState({input_fexts:e.target.value.trim()})},r.handleTimeFromInput=function(e){r.setState({time_from:e?e.hours(0).minutes(0).seconds(0):e}),r.state.errorDateMsg&&r.setState({errorDateMsg:""})},r.handleTimeToInput=function(e){r.setState({time_to:e?e.hours(23).minutes(59).seconds(59):e}),r.state.errorDateMsg&&r.setState({errorDateMsg:""})},r.handleSizeFromInput=function(e){r.setState({size_from:e.target.value>=0?e.target.value:0}),r.state.errorSizeMsg&&r.setState({errorSizeMsg:""})},r.handleSizeToInput=function(e){r.setState({size_to:e.target.value>=0?e.target.value:0}),r.state.errorSizeMsg&&r.setState({errorSizeMsg:""})},r.stateHistory=null,r.state={isCollapseOpen:"all"!==z,isFileTypeCollapseOpen:!1,isResultGot:!1,isLoading:!0,isAllRepoCheck:"all"===z,isShowSearchFilter:!1,q:D.trim(),search_repo:z,search_ftypes:w,fileTypeItemsStatus:[!1,!1,!1,!1,!1,!1,!1],input_fexts:"",time_from:null,time_to:null,size_from:"",size_to:"",hasMore:!1,resultItems:[],page:1,per_page:20,errorMsg:"",errorDateMsg:"",errorSizeMsg:""},r}return Object(r.a)(s,[{key:"getSearchResults",value:function(e){var t=this;this.setState({isLoading:!0,isResultGot:!1});var s=N.cloneDeep(this.state);u.a.searchFiles(e,null).then((function(a){var r=a.data,i=r.results,n=r.has_more,l=r.total;t.setState({isLoading:!1,isResultGot:!0,resultItems:i,hasMore:n,total:l,page:e.page,isShowSearchFilter:!0}),t.stateHistory=s,t.stateHistory.resultItems=i,t.stateHistory.hasMore=n,t.stateHistory.page=e.page})).catch((function(e){t.setState({isLoading:!1}),e.response?I.a.danger(e.response.data.detail||e.response.data.error_msg||Object(j.qb)("Error"),{duration:3}):I.a.danger(Object(j.qb)("Please check the network."),{duration:3})}))}},{key:"getValueLength",value:function(e){for(var t,s=0,a=0,r=e.length;a<r;a++)10===(t=e.charCodeAt(a))?s+=2:t<127?s+=1:t>=128&&t<=2047?s+=2:t>=2048&&t<=65535&&(s+=3);return s}},{key:"componentDidMount",value:function(){this.state.q?this.handleSubmit():this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.state.isCollapseOpen;return Object(f.jsxs)("div",{className:"search-page",children:[Object(f.jsxs)("div",{className:"search-page-container",children:[Object(f.jsxs)("div",{className:"input-icon align-items-center d-flex",children:[Object(f.jsx)("input",{type:"text",className:"form-control search-input",name:"query",autoComplete:"off",value:this.state.q,placeholder:Object(j.qb)("Search Files"),onChange:this.handleSearchInput,onKeyDown:this.handleKeyDown}),Object(f.jsx)("i",{className:"search-icon-right input-icon-addon fas fa-search",onClick:this.handleSubmit}),Object(f.jsx)("i",{className:"fas action-icon fa-angle-double-".concat(e?"up":"down"),onClick:this.toggleCollapse})]}),this.state.errorMsg&&Object(f.jsx)("div",{className:"error",children:this.state.errorMsg}),Object(f.jsx)(C,{openFileTypeCollapse:this.openFileTypeCollapse,closeFileTypeCollapse:this.closeFileTypeCollapse,handlerFileTypes:this.handlerFileTypes,handlerFileTypesInput:this.handlerFileTypesInput,handleSubmit:this.handleSubmit,handleReset:this.handleReset,handlerRepo:this.handlerRepo,handleKeyDown:this.handleKeyDown,handleTimeFromInput:this.handleTimeFromInput,handleTimeToInput:this.handleTimeToInput,handleSizeFromInput:this.handleSizeFromInput,handleSizeToInput:this.handleSizeToInput,stateAndValues:this.state})]}),this.state.isLoading&&Object(f.jsx)(F.a,{}),!this.state.isLoading&&this.state.isResultGot&&Object(f.jsx)(x,{resultItems:this.state.resultItems,total:this.state.total}),!this.state.isLoading&&this.state.isResultGot&&Object(f.jsxs)("div",{className:"paginator",children:[1!==this.state.page&&Object(f.jsx)("a",{href:"#",onClick:this.handlePrevious,children:Object(j.qb)("Previous")}),1!==this.state.page&&this.state.hasMore&&Object(f.jsx)("span",{children:" | "}),this.state.hasMore&&Object(f.jsx)("a",{href:"#",onClick:this.handleNext,children:Object(j.qb)("Next")})]})]})}}]),s}(c.a.Component),L=(s(188),s(129),function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).onSearchedClick=function(e){var t=e.is_dir?j.qc+"library/"+e.repo_id+"/"+e.repo_name+e.path:j.qc+"lib/"+e.repo_id+"/file"+O.a.encodePath(e.path);window.open("about:blank").location.href=t},r}return Object(r.a)(s,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"w-100 h-100",children:[Object(f.jsxs)("div",{className:"main-panel-north border-left-show",children:[Object(f.jsx)(d.a,{}),Object(f.jsx)(p.a,{onSearchedClick:this.onSearchedClick})]}),Object(f.jsx)("div",{className:"main-panel-south",children:Object(f.jsx)(R,{})})]})}}]),s}(c.a.Component));h.a.render(Object(f.jsx)(L,{}),document.getElementById("wrapper"))}},[[1685,1,0]]]);
//# sourceMappingURL=search.chunk.js.map