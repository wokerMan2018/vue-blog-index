(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c51a5"],{"3e52":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{staticClass:"wrap scroll"},[a("div",{staticClass:"main_table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.articles,stripe:"","max-height":"600","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),a("el-table-column",{attrs:{prop:"classify",label:"文章分类","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"title",label:"文章标题","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"标签",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.tag,function(e,l){return[a("el-tag",{key:l,attrs:{size:"mini"}},[t._v(t._s(e))])]})]}}])}),a("el-table-column",{attrs:{prop:"clicks",label:"点击量",width:"80"}}),a("el-table-column",{attrs:{prop:"like",label:"点赞量",width:"80"}}),a("el-table-column",{attrs:{prop:"commentCount",label:"评论量",width:"80"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建日期","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"是否下架",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{on:{change:function(a){return t.deleteBtn(e.row.id,e.row.deleted_at)}},model:{value:e.row.deleted_at,callback:function(a){t.$set(e.row,"deleted_at",a)},expression:"scope.row.deleted_at"}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.detail(e.row.id)}}},[t._v("查看")])]}}])})],1),t.pageModel.sumCount>10?a("page",{attrs:{pageModel:t.pageModel},on:{selectList:t.selectRoleList}}):t._e()],1)])])},o=[],s=(a("612f"),a("14eb")),n={data:function(){return{loading:!0,articles:[],pageModel:{page:1,all:1,sumCount:10}}},components:{page:s["a"]},created:function(){this.getArticles()},methods:{getArticles:function(){var t=this;this.loading=!0,this.$post("/apis/article/read",this.pageModel).then(function(e){1==e.data.status?(t.articles=e.data.data,t.pageModel.sumCount=e.data.total,t.articles.forEach(function(t){t.deleted_at&&(t.deleted_at=!0)})):t.$message.error("获取数据失败！"),t.loading=!1})},selectRoleList:function(){this.getArticles()},detail:function(t){this.$router.push("/admin/article/edit/".concat(t))},deleteBtn:function(t,e){var a=this;1==e?this.$post("/apis/article/remove",{id:t}).then(function(e){console.log(e.data,"remove"),1==e.data.status?a.$message.success("文章".concat(t,"下架操作成功")):a.$Message.error(e.data.msg)}):this.$post("/apis/article/restored",{id:t}).then(function(e){console.log(e.data,"restored"),1==e.data.status?a.$message.success("文章".concat(t,"恢复成功")):a.$Message.error(e.data.msg)})}}},i=n,r=a("17cc"),c=Object(r["a"])(i,l,o,!1,null,"36cda0bc",null);e["default"]=c.exports}}]);