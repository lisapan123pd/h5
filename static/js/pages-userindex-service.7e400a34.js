(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userindex-service"],{"1ab5":function(t,e,n){"use strict";var i=n("9ca6"),a=n.n(i);a.a},"45a4":function(t,e,n){"use strict";n.r(e);var i=n("62aa"),a=n("7446");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("1ab5");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"c2b70b20",null);e["default"]=c.exports},"62aa":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[t.ios?n("addinios"):t._e(),n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"t1"},[t._v("如果账户、金币或者VIP服务存在异常")]),n("v-uni-view",{staticClass:"t2"},[t._v("请复制客服小姐姐账号：")]),n("v-uni-view",{staticClass:"qq t2"},[n("v-uni-view",[t._v(t._s(t.user.qq))]),n("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.copyConnect(t.user.pp)}}},[t._v("复制")])],1),n("v-uni-view",{staticClass:"flex",on:{click:function(e){e=t.$handleEvent(e),t.telme(e)}}},[n("v-uni-image",{attrs:{src:"../../static/image/kfxjj_kf_img.png",mode:""}})],1),n("v-uni-view",{staticClass:"t2"},[t._v("点击上面的头像打开QQ")])],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"6da8":function(t,e,n){"use strict";var i=n("e54b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("243e")),s={data:function(){return{user:""}},methods:{telme:function(){window.location.href="mqq://im/chat?chat_type=wpa&uin="+this.user.qq+"&version=1&src_type=web"},copyConnect:function(t){var e=function(e){e.clipboardData.setData("text/plain",t),e.preventDefault()};document.addEventListener("copy",e),document.execCommand("copy"),uni.showToast({title:"复制成功！",duration:2e3})}},mounted:function(){a.userinfo(this)}};e.default=s},7446:function(t,e,n){"use strict";n.r(e);var i=n("6da8"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"9ca6":function(t,e,n){var i=n("adc0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0d6468b4",i,!0,{sourceMap:!1,shadowMode:!1})},adc0:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-c2b70b20]{background:#f0f0f0;height:100vh}.header[data-v-c2b70b20]{padding-top:%?200?%}.header .t1[data-v-c2b70b20]{font-size:%?28?%;color:#373737;line-height:%?60?%;text-align:center}.header .t2[data-v-c2b70b20]{font-size:%?36?%;color:#373737;line-height:%?60?%;text-align:center}.header .qq[data-v-c2b70b20]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:100%}.header .qq uni-view[data-v-c2b70b20]:first-child{display:inline-block;font-size:%?36?%;margin-left:auto;line-height:%?60?%;color:#333}.header .qq uni-view[data-v-c2b70b20]:nth-child(2){display:inline-block;margin-right:auto;font-size:%?36?%;margin-left:%?20?%;line-height:%?60?%;color:#007aff}.header .flex[data-v-c2b70b20]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0}.header .flex uni-image[data-v-c2b70b20]{width:%?320?%;height:%?320?%;display:inline-block;margin:%?80?% auto}',""])}}]);