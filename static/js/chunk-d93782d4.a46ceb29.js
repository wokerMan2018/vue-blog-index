(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d93782d4"],{"1e94":function(t,e,a){},9821:function(t,e,a){"use strict";var i=a("1e94"),s=a.n(i);s.a},efad:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.articleLoading,expression:"articleLoading"}],staticClass:"wrap scroll"},[a("el-form",{ref:"form",attrs:{"label-width":"70px","label-position":"left"},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("div",{staticClass:"leftbox"},[a("el-form-item",{attrs:{label:"文章标题"}},[a("el-input",{staticClass:"input_title",attrs:{size:"small"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"所属分类"}},[a("el-input",{attrs:{size:"small"},model:{value:t.form.classify,callback:function(e){t.$set(t.form,"classify",e)},expression:"form.classify"}})],1),a("el-form-item",{attrs:{label:"标签"}},[a("el-input",{attrs:{size:"small",placeholder:"多个标签用英文逗号隔开"},model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}})],1)],1),a("el-row",{attrs:{type:"flex"}},[a("el-form-item",{attrs:{label:"创建日期"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",size:"small",placeholder:"选择日期"},model:{value:t.form.created_at,callback:function(e){t.$set(t.form,"created_at",e)},expression:"form.created_at"}})],1),a("el-form-item",{attrs:{label:"浏览量"}},[a("el-input-number",{attrs:{size:"small",precision:0,min:0,controls:!1},model:{value:t.form.clicks,callback:function(e){t.$set(t.form,"clicks",e)},expression:"form.clicks"}})],1),a("el-form-item",{attrs:{label:"点赞量"}},[a("el-input-number",{attrs:{size:"small",precision:0,min:0,controls:!1},model:{value:t.form.like,callback:function(e){t.$set(t.form,"like",e)},expression:"form.like"}})],1)],1)],1),a("div",{staticClass:"rightbox"},[a("el-form-item",{attrs:{label:"文章封面"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/apis/image/upload",name:"image",headers:t.headers,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.blogBanner?a("img",{staticClass:"avatar",attrs:{src:t.blogBanner}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)]),a("mavon-editor",{ref:"md",staticClass:"makedown",on:{imgAdd:t.$imgAdd},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),a("footer",[t.$route.params.id?a("el-button",{attrs:{type:"info",size:"small",loading:t.loading},on:{click:t.editBtn}},[t._v("保存修改")]):a("el-button",{attrs:{type:"primary",size:"small",loading:t.loading},on:{click:t.addBtn}},[t._v("保　存")])],1)])},s=[],l=a("be94"),o=a("bc3a"),r=a.n(o),n=a("2f62"),c={data:function(){return{title:"写博客",blogBanner:"",loading:!1,articleLoading:!1,form:{title:"",desc:"",img:"",content:"",classify:"",tag:"",clicks:"",like:"",deleted_at:!1,created_at:new Date}}},computed:Object(l["a"])({},Object(n["c"])(["token"]),{headers:function(){return{Authorization:this.token,"X-Requested-With":"XMLHttpRequest"}}}),created:function(){this.$route.params.id&&this.getArticle()},watch:{$route:function(t,e){this.blogBanner="",this.form={title:"",desc:"",img:"",content:"",classify:"",tag:"",clicks:"",like:"",deleted_at:!1,created_at:new Date}}},methods:{addBtn:function(){var t=this;this.loading=!0,this.$post("/apis/article/add",this.form).then(function(e){t.$message.success(e.message),t.$router.push("/articlelist")})},getArticle:function(){var t=this;this.articleLoading=!0,this.$post("/apis/article",this.$route.params).then(function(e){console.log(e.data),t.articleLoading=!1,t.form=e.data,t.form.tag=e.data.tag.join(","),t.form.img&&(t.blogBanner=t.$staticUrl+t.form.img)})},editBtn:function(){var t=this;this.loading=!0,this.$post("/apis/article/change",this.form).then(function(e){t.$message.success(e.message),t.$router.push("/articlelist")})},handleAvatarSuccess:function(t,e){this.form.img&&this.handleRemove(),this.blogBanner=URL.createObjectURL(e.raw),this.$message.success("图片上传成功"),this.form.img=t.data.url},handleRemove:function(){var t=this,e={image:this.form.img};this.$post("/apis/image/delete",e).then(function(e){t.$message.success(e.message)})},beforeAvatarUpload:function(t){var e="image/jpeg"==t.type||"image/png",a=t.size/1024/1024<3;return e||this.$message.error("上传图片只能是 JPG和png 格式!"),a||this.$message.error("上传头像图片大小不能超过 3MB!"),e&&a},$imgAdd:function(t,e){var a=this,i=new FormData;i.append("image",e),r()({url:"/apis/image/upload",method:"post",data:i,headers:{Authorization:this.token,"X-Requested-With":"XMLHttpRequest"}}).then(function(i){console.log(111,i,i.data.data.url,e),a.$refs.md.$img2Url(t,a.$staticUrl+i.data.data.url)})},$imgDel:function(t){var e=this;console.log(t,"图片名"),r()({url:"/apis/image/delete",method:"post",data:{image:t},headers:{Authorization:this.token,"X-Requested-With":"XMLHttpRequest"}}).then(function(a){console.log(111,a,a.data.data.url,$file),e.$refs.md.$img2Url(t,e.$staticUrl+a.data.data.url)})}}},m=c,d=(a("9821"),a("2877")),f=Object(d["a"])(m,i,s,!1,null,"5bcef1f0",null);f.options.__file="addArticle.vue";e["default"]=f.exports}}]);