(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[7],{1127:function(t,e,a){t.exports=a(1297)},1128:function(t,e,a){},1297:function(t,e,a){"use strict";a.r(e);var i=a(54),n=a(5),o=a(6),r=a(8),s=a(7),l=a(0),c=a.n(l),d=a(23),m=a.n(d),h=a(3),u=a(4),p=a(9),f=a(1),g=a(79),b=a(15),v=a(70),E=a(42),O=a(12),R=a.n(O),y=a(73);R.a.locale(window.app.config.lang);var w=function(t){Object(r.a)(a,t);var e=Object(s.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).onMouseEnter=function(){i.setState({active:!0})},i.onMouseLeave=function(){i.setState({active:!1})},i.onItemRestore=function(t){t.preventDefault(),i.props.onItemRestore(i.props.item)},i.state={active:!1},i}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.item,e=y.a.getUrl({type:"download_historic_file",filePath:f.ib,objID:t.rev_file_id}),a="".concat(f.ic,"profile/").concat(encodeURIComponent(t.creator_email),"/"),i="".concat(f.ic,"repo/").concat(f.pb,"/history/files/?obj_id=").concat(t.rev_file_id,"&commit_id=").concat(t.commit_id,"&p=").concat(f.ib),n="".concat(f.ic,"repo/text_diff/").concat(f.pb,"/?commit=").concat(t.commit_id,"&p=").concat(f.ib);return c.a.createElement(l.Fragment,null,c.a.createElement("tr",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:this.state.active?"tr-highlight":""},c.a.createElement("td",null,c.a.createElement("time",{datetime:t.time,is:"relative-time",title:R()(t.ctime).format("llll")},R()(t.ctime).fromNow()),0===this.props.index&&Object(f.mb)("(current version)")),c.a.createElement("td",null,c.a.createElement("img",{className:"avatar",src:t.creator_avatar_url,alt:""})," ",c.a.createElement("a",{href:a,target:"_blank",className:"username"},t.creator_name)),c.a.createElement("td",null,u.a.bytesToSize(t.size)),c.a.createElement("td",null,this.state.active&&c.a.createElement(_,{index:this.props.index,downloadUrl:e,viewUrl:i,diffUrl:n,onItemRestore:this.onItemRestore,canDownload:this.props.canDownload,canCompare:this.props.canCompare}))))}}]),a}(c.a.Component),_=function(t){Object(r.a)(a,t);var e=Object(s.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).dropdownToggle=function(){i.setState({dropdownOpen:!i.state.dropdownOpen})},i.state={dropdownOpen:!1},i}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.index,a=t.downloadUrl,i=t.viewUrl,n=(t.diffUrl,t.onItemRestore),o=(t.canCompare,t.canDownload);return c.a.createElement(h.l,{isOpen:this.state.dropdownOpen,toggle:this.dropdownToggle,direction:"down",className:"mx-1 old-history-more-operation"},c.a.createElement(h.o,{tag:"i",className:"fa fa-ellipsis-v",title:Object(f.mb)("More Operations"),"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen}),c.a.createElement(h.n,{className:"drop-list",right:!0},0!==e&&c.a.createElement("a",{href:"#",onClick:n},c.a.createElement(h.m,null,Object(f.mb)("Restore"))),o&&c.a.createElement("a",{href:a},c.a.createElement(h.m,null,Object(f.mb)("Download"))),c.a.createElement("a",{href:i},c.a.createElement(h.m,null,Object(f.mb)("View")))))}}]),a}(c.a.PureComponent),j=w,L=(a(136),a(93),a(106),a(1128),function(t){Object(r.a)(a,t);var e=Object(s.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).listNewHistoryRecords=function(t,e){g.a.listFileHistoryRecords(t,1,e).then((function(t){if(!t.data)throw i.setState({isLoading:!1}),Error("There is an error in server.");i.initNewRecords(t.data)}))},i.listOldHistoryRecords=function(t,e){p.a.listOldFileHistoryRecords(t,e).then((function(t){if(!t.data)throw i.setState({isLoading:!1}),Error("There is an error in server.");i.initOldRecords(t.data)}))},i.onScrollHandler=function(t){var e=t.target.clientHeight,a=t.target.scrollHeight,n=e+t.target.scrollTop+1>=a,o=i.state.hasMore;n&&o&&i.reloadMore()},i.reloadMore=function(){if(!i.state.isReloadingData)if(f.sc){var t=i.state.currentPage+1;i.setState({currentPage:t,isReloadingData:!0}),g.a.listFileHistoryRecords(f.ib,t,f.a).then((function(t){i.updateNewRecords(t.data)}))}else{var e=i.state.nextCommit,a=i.state.filePath,n=i.state.oldFilePath;i.setState({isReloadingData:!0}),n?p.a.listOldFileHistoryRecords(f.pb,n,e).then((function(t){i.updateOldRecords(t.data,n)})):p.a.listOldFileHistoryRecords(f.pb,a,e).then((function(t){i.updateOldRecords(t.data,a)}))}},i.onItemRestore=function(t){var e=t.commit_id,a=t.path;g.a.revertFile(a,e).then((function(t){t.data.success&&(i.setState({isLoading:!0}),i.refershFileList())}))},i.onSearchedClick=function(t){u.a.handleSearchedItemClick(t)},i.state={historyList:[],currentPage:1,hasMore:!1,nextCommit:void 0,filePath:"",oldFilePath:"",isLoading:!0,isReloadingData:!1},i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f.sc?this.listNewHistoryRecords(f.ib,f.a):this.listOldHistoryRecords(f.pb,f.ib)}},{key:"initNewRecords",value:function(t){var e=this;if(t.total_count<5)if(t.data.length){var a=t.data[t.data.length-1].commit_id,i=t.data[t.data.length-1].path,n=t.data[t.data.length-1].old_path;i=n||i,p.a.listOldFileHistoryRecords(f.pb,i,a).then((function(a){if(!a.data)throw e.setState({isLoading:!1}),Error("There is an error in server.");e.setState({historyList:t.data.concat(a.data.data.slice(1,a.data.data.length)),isLoading:!1})}))}else p.a.listOldFileHistoryRecords(f.pb,f.ib).then((function(t){if(!t.data)throw e.setState({isLoading:!1}),Error("There is an error in server.");e.setState({historyList:t.data.data,isLoading:!1})}));else this.setState({historyList:t.data,currentPage:t.page,hasMore:t.total_count>f.a*this.state.currentPage,isLoading:!1})}},{key:"initOldRecords",value:function(t){var e=this;t.data.length?this.setState({historyList:t.data,nextCommit:t.next_start_commit,filePath:t.data[t.data.length-1].path,oldFilePath:t.data[t.data.length-1].rev_renamed_old_path,isLoading:!1}):(this.setState({nextCommit:t.next_start_commit}),this.state.nextCommit?p.a.listOldFileHistoryRecords(f.pb,f.ib,this.state.nextCommit).then((function(t){e.initOldRecords(t.data)})):this.setState({isLoading:!1}))}},{key:"updateNewRecords",value:function(t){this.setState({historyList:[].concat(Object(i.a)(this.state.historyList),Object(i.a)(t.data)),currentPage:t.page,hasMore:t.total_count>f.a*this.state.currentPage,isReloadingData:!1})}},{key:"updateOldRecords",value:function(t,e){var a=this;t.data.length?this.setState({historyList:[].concat(Object(i.a)(this.state.historyList),Object(i.a)(t.data)),nextCommit:t.next_start_commit,filePath:t.data[t.data.length-1].path,oldFilePath:t.data[t.data.length-1].rev_renamed_old_path,isReloadingData:!1}):(this.setState({nextCommit:t.next_start_commit}),this.state.nextCommit&&p.a.listOldFileHistoryRecords(f.pb,e,this.state.nextCommit).then((function(t){a.updateOldRecords(t.data,e)})))}},{key:"refershFileList",value:function(){var t=this;f.sc?g.a.listFileHistoryRecords(f.ib,1,f.a).then((function(e){t.initNewRecords(e.data)})):p.a.listOldFileHistoryRecords(f.pb,f.ib).then((function(e){t.initOldRecords(e.data)}))}},{key:"render",value:function(){var t=this;return c.a.createElement(l.Fragment,null,c.a.createElement("div",{id:"header",className:"old-history-header"},c.a.createElement("div",{className:"logo"},c.a.createElement(v.a,{showCloseSidePanelIcon:!1})),c.a.createElement("div",{className:"toolbar"},c.a.createElement(E.a,{onSearchedClick:this.onSearchedClick}))),c.a.createElement("div",{id:"main",onScroll:this.onScrollHandler},c.a.createElement("div",{className:"old-history-main"},c.a.createElement(l.Fragment,null,c.a.createElement("a",{href:"javascript:window.history.back()",className:"go-back",title:"Back"},c.a.createElement("span",{className:"fas fa-chevron-left"})),c.a.createElement("h2",null,c.a.createElement("span",{className:"file-name"},f.hb)," ",Object(f.mb)("History Versions"))),c.a.createElement(l.Fragment,null,c.a.createElement("table",{className:"commit-list"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{width:"40%"},Object(f.mb)("Time")),c.a.createElement("th",{width:"30%"},Object(f.mb)("Modifier")),c.a.createElement("th",{width:"25%"},Object(f.mb)("Size")),c.a.createElement("th",{width:"5%"}))),!this.state.isLoading&&c.a.createElement("tbody",null,this.state.historyList.map((function(e,a){return c.a.createElement(j,{key:a,item:e,index:a,canDownload:f.n,canCompare:f.l,onItemRestore:t.onItemRestore})})))),(this.state.isReloadingData||this.state.isLoading)&&c.a.createElement(b.a,null),this.state.nextCommit&&!this.state.isLoading&&!this.state.isReloadingData&&c.a.createElement(h.c,{className:"get-more-btn",onClick:this.reloadMore},Object(f.mb)("More"))))))}}]),a}(c.a.Component));m.a.render(c.a.createElement(L,null),document.getElementById("wrapper"))}},[[1127,1,0]]]);
//# sourceMappingURL=fileHistoryOld.chunk.js.map