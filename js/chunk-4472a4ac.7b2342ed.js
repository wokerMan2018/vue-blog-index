(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4472a4ac"],{"0290":function(e,t,a){"use strict";var s=a("284a6"),n=a.n(s);n.a},"284a6":function(e,t,a){},"888a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:0!=e.selectMessage.length,expression:"selectMessage.length!=0"}],staticClass:"delete",attrs:{type:"danger",size:"mini"},on:{click:e.selectDelete}},[e._v("删除选中")]),a("section",{staticClass:"wrap scroll"},[a("div",{staticClass:"main_table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.message,stripe:"","max-height":"600","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"id",label:"编号",width:"80"}}),a("el-table-column",{attrs:{label:"用户名","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.user_id?a("span",[e._v("\n              "+e._s(t.row.user.username)+"\n            ")]):a("span",[e._v("\n              (游客) "+e._s(t.row.ykname)+"\n            ")])]}}])}),a("el-table-column",{attrs:{prop:"content",label:"留言内容","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建日期","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleteBtn(t.row)}}},[e._v("删除")])]}}])})],1),e.pageModel.sumCount>10?a("page",{attrs:{pageModel:e.pageModel},on:{selectList:e.selectRoleList}}):e._e()],1)])],1)},n=[],o=(a("612f"),a("14eb")),l={components:{page:o["a"]},data:function(){return{loading:!0,message:[],selectMessage:[],pageModel:{page:1,sumCount:10}}},created:function(){this.getMessage()},methods:{getMessage:function(){var e=this;this.loading=!0,this.$post("/apis/message/read",this.pageModel).then(function(t){1==t.data.status?(e.message=t.data.data,e.pageModel.sumCount=t.data.total):e.$message.error("获取数据失败！"),e.loading=!1})},selectRoleList:function(){this.getMessage()},deleteBtn:function(e){var t=this;this.$confirm("是否删除该留言?","提示",{type:"warning"}).then(function(){t.$post("/apis/message/remove",{id:e.id}).then(function(a){1==a.data.status?(console.log(a.data),t.message.splice(t.message.indexOf(e),1)):t.$message.error(a.data.msg)})}).catch(function(){})},handleSelectionChange:function(e){var t=[];e.forEach(function(e){t.push(e.id)}),this.selectMessage=t},selectDelete:function(){var e=this;this.$confirm("是否删除选中的留言?","提示",{type:"warning"}).then(function(){e.$post("/apis/message/remove",e.selectMessage).then(function(t){1==t.data.status?(e.$message.success(t.data.msg),e.getMessage()):e.$message.error(t.data.msg)})}).catch(function(){})}}},i=l,c=(a("0290"),a("17cc")),r=Object(c["a"])(i,s,n,!1,null,"78795efc",null);t["default"]=r.exports}}]);