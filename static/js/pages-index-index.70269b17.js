(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"02b7":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-scroll-view",[e("v-uni-view",{staticClass:"content"},[t.ios?e("addinios"):t._e(),e("v-uni-view",{staticClass:"swiper_img"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",interval:"3000",circular:"true","indicator-color":"#ffffff","indicator-active-color":"#F42F47",duration:"500"}},t._l(t.bookshelf,function(i,a){return e("v-uni-swiper-item",{key:a,on:{click:function(e){e=t.$handleEvent(e),t.godetails(i.id)}}},[e("v-uni-image",{attrs:{"lazy-load":"",src:t.url+i.bannerImg}})],1)}),1)],1),e("v-uni-view",{staticClass:"view_tab"},t._l(t.tabList,function(i,a){return e("v-uni-view",{key:a,staticClass:"view_list",on:{click:function(e){e=t.$handleEvent(e),t.gopage(i.id,i.url)}}},[e("v-uni-view",{staticClass:"tab_ico"},[e("v-uni-image",{class:"img"+a,attrs:{"lazy-load":"",src:i.img}})],1),e("v-uni-view",{staticClass:"tab_text"},[t._v(t._s(i.text))])],1)}),1),e("v-uni-view",{staticClass:"view_content"},[e("v-uni-view",{staticClass:"content_title"},[e("v-uni-view",{staticClass:"title_img"},[e("v-uni-image",{attrs:{src:"../../static/image/sy_rqzw_icon.png"}})],1),e("v-uni-view",{staticClass:"title_text"},[t._v("人气最旺")]),e("v-uni-text",{on:{click:function(i){i=t.$handleEvent(i),t.gomore(1)}}},[t._v("更多")])],1),e("v-uni-view",{staticClass:"content_item"},t._l(t.itemList,function(i,a){return e("v-uni-view",{key:a,staticClass:"item_list",on:{click:function(e){e=t.$handleEvent(e),t.godetails(i.id)}}},[e("v-uni-view",{staticClass:"item_img"},[e("v-uni-image",{attrs:{"lazy-load":"",src:t.urlitem+i.titleImg}})],1),e("v-uni-view",{staticClass:"item_name eli"},[t._v(t._s(i.title))]),0==i.bookStatus?e("v-uni-view",{staticClass:"item_label on"},[t._v("连载中")]):e("v-uni-view",{staticClass:"item_label"},[t._v("已完结")]),e("v-uni-view",{staticClass:"item_info eli"},[t._v("更新至"+t._s(i.ending)+"章")]),e("v-uni-view",{staticClass:"item_info eli"},[t._v(t._s(i.comment||"--"))])],1)}),1)],1),e("v-uni-view",{staticClass:"view_content"},[e("v-uni-view",{staticClass:"content_title"},[e("v-uni-view",{staticClass:"title_img"},[e("v-uni-image",{attrs:{src:"../../static/image/sy_top10_icon.png"}})],1),e("v-uni-view",{staticClass:"title_text"},[t._v("本周TOP10")]),e("v-uni-text",{on:{click:function(i){i=t.$handleEvent(i),t.gomore(2)}}},[t._v("更多")])],1),e("v-uni-view",{staticClass:"content_item"},t._l(t.viewList,function(i,a){return e("v-uni-view",{key:a,staticClass:"view_list",on:{click:function(e){e=t.$handleEvent(e),t.godetails(i.id)}}},[e("v-uni-view",{staticClass:"list_img"},[e("v-uni-image",{attrs:{"lazy-load":"",src:t.urlview+i.titleImg}}),0==i.bookStatus?e("v-uni-view",{staticClass:"item_label on"},[t._v("连载中")]):e("v-uni-view",{staticClass:"item_label"},[t._v("已完结")])],1),e("v-uni-view",{staticClass:"list_right"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"list_title"},[t._v(t._s(i.title||"--"))]),e("v-uni-view",{staticClass:"eli2 text"},[t._v(t._s(i.comment||"--"))]),e("v-uni-view",{staticClass:"list_bottom"},[e("v-uni-view",{staticClass:"update"},[t._v(t._s(i.labels||"--"))]),i.readNum?e("v-uni-view",{staticClass:"numper"},[t._v(t._s(i.readNum)+"W")]):e("v-uni-view",{staticClass:"numper"},[t._v("观看人数0")])],1)],1)],1)],1)}),1)],1),e("v-uni-view",{staticClass:"view_content mar"},[e("v-uni-view",{staticClass:"content_title"},[e("v-uni-view",{staticClass:"title_img"},[e("v-uni-image",{attrs:{src:"../../static/image/sy_cnxh_icon.png"}})],1),e("v-uni-view",{staticClass:"title_text"},[t._v("猜你喜欢")]),e("v-uni-text",{on:{click:function(i){i=t.$handleEvent(i),t.gomore(3)}}},[t._v("更多")])],1),e("v-uni-view",{staticClass:"like_item"},t._l(t.likeList,function(i,a){return e("v-uni-view",{key:a,staticClass:"like_list",on:{click:function(e){e=t.$handleEvent(e),t.godetails(i.id)}}},[e("v-uni-view",{staticClass:"like_img"},[e("v-uni-image",{attrs:{"lazy-load":"",src:t.urllike+i.bannerImg}}),0==i.bookStatus?e("v-uni-view",{staticClass:"item_label on"},[t._v("连载中")]):e("v-uni-view",{staticClass:"item_label"},[t._v("已完结")]),e("v-uni-view",{staticClass:"text"},[e("v-uni-view",{staticClass:"like_title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"like_text eli"},[t._v(t._s(i.area||"--"))])],1)],1),e("v-uni-view",{staticClass:"readnum"},[e("v-uni-image",{attrs:{src:"../../static/image/seelist.png"}}),t._v(t._s(i.readNum))],1),e("v-uni-view",{staticClass:"text_list"},[t._v(t._s(i.comment))])],1)}),1)],1),e("v-uni-view",{staticClass:"backroof",on:{click:function(i){i=t.$handleEvent(i),t.backroof(i)}}},[t._v("回到顶部")]),e("report")],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"2f83":function(t,i,e){"use strict";function a(t){var i="base/banner",e="POST",a={};t.$http.httpRequest(i,a,e).then(function(i){0==i.data.code&&(t.url=i.data.dfsfileaccessprefix,t.bookshelf=i.data.data)},function(t){})}function n(t){var i="book/hot",e="POST",a={page:t.pageitem,pageSize:t.sizeitem};t.$http.httpRequest(i,a,e).then(function(i){0==i.data.code?(t.itemList=i.data.data.list,t.urlitem=i.data.dfsfileaccessprefix):uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function l(t){var i="book/top",e="POST",a={page:t.pageview,pageSize:t.sizeview};t.$http.httpRequest(i,a,e).then(function(i){0==i.data.code?(t.viewList=i.data.data.list,t.urlview=i.data.dfsfileaccessprefix):uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function s(t){var i="book/guess",e="POST",a={page:t.pagelike,pageSize:t.sizelike};t.$http.httpRequest(i,a,e).then(function(i){0==i.data.code?(t.likeList=i.data.data.list,t.urllike=i.data.dfsfileaccessprefix):uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}Object.defineProperty(i,"__esModule",{value:!0}),i.banner=a,i.hot=n,i.top=l,i.guess=s},"3bfc":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{}},mounted:function(){},methods:{goreport:function(){uni.navigateTo({url:"/pages/download/complaint"})}}};i.default=a},"3c70":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.report[data-v-3e4a8d31]{position:fixed;bottom:%?180?%;right:%?40?%;width:%?100?%;height:%?100?%;border-radius:50%;background-color:#ff8d00;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.report uni-image[data-v-3e4a8d31]{display:inline-block;width:%?40?%;height:%?40?%;margin:auto;padding-top:%?10?%}.report .text[data-v-3e4a8d31]{display:inline-block;width:100%;font-size:%?26?%;line-height:%?40?%;color:#fff;padding-bottom:%?10?%;text-align:center}',""])},"46ff":function(t,i,e){var a=e("c669");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("606dec80",a,!0,{sourceMap:!1,shadowMode:!1})},5390:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"report",on:{click:function(i){i=t.$handleEvent(i),t.goreport(i)}}},[e("v-uni-image",{attrs:{src:"../../static/image/danger.png",mode:""}}),e("v-uni-view",{staticClass:"text"},[t._v("举报")])],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"79d5":function(t,i,e){"use strict";e.r(i);var a=e("cc17"),n=e.n(a);for(var l in a)"default"!==l&&function(t){e.d(i,t,function(){return a[t]})}(l);i["default"]=n.a},"7df7":function(t,i,e){"use strict";var a=e("9e64"),n=e.n(a);n.a},"8c53":function(t,i,e){"use strict";e.r(i);var a=e("02b7"),n=e("79d5");for(var l in n)"default"!==l&&function(t){e.d(i,t,function(){return n[t]})}(l);e("e142");var s=e("2877"),o=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"ef4955e4",null);i["default"]=o.exports},"9e64":function(t,i,e){var a=e("3c70");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("888a3220",a,!0,{sourceMap:!1,shadowMode:!1})},c541:function(t,i,e){"use strict";e.r(i);var a=e("5390"),n=e("f8fe");for(var l in n)"default"!==l&&function(t){e.d(i,t,function(){return n[t]})}(l);e("7df7");var s=e("2877"),o=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"3e4a8d31",null);i["default"]=o.exports},c669:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.logo[data-v-ef4955e4]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.title[data-v-ef4955e4]{font-size:%?36?%;color:#8f8f94}.swiper_img[data-v-ef4955e4]{width:100%;position:relative}.swiper_img .today[data-v-ef4955e4]{position:absolute;top:0;right:0}.swiper[data-v-ef4955e4]{width:100%;height:%?300?%}.swiper uni-image[data-v-ef4955e4]{width:100%;height:100%}.view_tab[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:calc(100% - %?40?%);margin:%?45?% %?20?% %?65?%}.view_tab .view_list[data-v-ef4955e4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.view_tab .view_list .tab_ico[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;height:%?100?%}.view_tab .view_list .tab_ico uni-image[data-v-ef4955e4]{display:inline-block;margin:auto}.view_tab .view_list .tab_ico .img0[data-v-ef4955e4]{width:%?75?%;height:%?84?%}.view_tab .view_list .tab_ico .img1[data-v-ef4955e4]{width:%?75?%;height:%?90?%}.view_tab .view_list .tab_ico .img2[data-v-ef4955e4]{width:%?90?%;height:%?90?%}.view_tab .view_list .tab_ico .img3[data-v-ef4955e4]{width:%?90?%;height:%?90?%}.view_tab .view_list .tab_text[data-v-ef4955e4]{font-size:%?26?%;text-align:center;color:#303030;line-height:%?40?%}.view_content[data-v-ef4955e4]{width:100%}.view_content .content_title[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:calc(100% - %?120?%);padding:0 %?60?%}.view_content .content_title .title_img[data-v-ef4955e4]{display:inline-block}.view_content .content_title uni-image[data-v-ef4955e4]{width:%?36?%;height:%?36?%;margin:%?12?%}.view_content .content_title .title_text[data-v-ef4955e4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;line-height:60epx;color:#303030;font-size:%?36?%;font-weight:700}.view_content .content_title uni-text[data-v-ef4955e4]{display:inline-block;font-size:%?24?%;color:#999;line-height:%?60?%}.view_content .like_item[data-v-ef4955e4]{margin:0 %?50?%}.view_content .like_item .like_list[data-v-ef4955e4]{position:relative;width:100%;margin-top:%?30?%}.view_content .like_item .like_list .like_img[data-v-ef4955e4]{width:100%;height:%?360?%;position:relative}.view_content .like_item .like_list .like_img uni-image[data-v-ef4955e4]{width:100%;height:%?360?%}.view_content .like_item .like_list .readnum[data-v-ef4955e4]{position:absolute;top:0;right:0;padding:0 %?20?%;line-height:%?40?%;margin:%?10?%;font-size:%?28?%;border-radius:%?20?%;color:#fff;background-color:#f42f47;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.view_content .like_item .like_list .readnum uni-image[data-v-ef4955e4]{display:inline-block;width:%?40?%;height:%?40?%;vertical-align:top;margin-right:%?5?%}.view_content .like_item .like_list .text_list[data-v-ef4955e4]{font-size:%?30?%;color:#333;line-height:%?40?%;margin:%?10?% 0;display:-webkit-box;word-break:break-all;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.view_content .like_item .like_list .text[data-v-ef4955e4]{position:absolute;bottom:0;left:0;padding:0 %?50?%;height:%?240?%;width:calc(100% - %?100?%);background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),color-stop(rgba(0,0,0,.7)),to(rgba(0,0,0,.9)));background:-o-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7),rgba(0,0,0,.9));background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7),rgba(0,0,0,.9))}.view_content .like_item .like_list .text .like_title[data-v-ef4955e4]{width:100%;margin-top:%?100?%;line-height:%?50?%;font-size:%?32?%;color:#fff}.view_content .like_item .like_list .text .like_text[data-v-ef4955e4]{width:100%;line-height:%?40?%;font-size:%?24?%;display:inline-block;color:#dadada;height:%?40?%}.view_content.mar .content_title[data-v-ef4955e4]{margin:%?30?% 0 0 0}.content_item[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 %?50?% %?20?%}.content_item .item_list[data-v-ef4955e4]{display:inline-block;width:%?195?%;margin-right:%?32?%;margin-top:%?20?%;position:relative}.content_item .item_list .item_img[data-v-ef4955e4]{display:block}.content_item .item_list .item_img uni-image[data-v-ef4955e4]{width:%?195?%;height:%?260?%}.content_item .item_list .item_name[data-v-ef4955e4]{display:block;padding:0 %?15?%;width:calc(100% - %?30?%);color:#303030;margin-top:%?10?%;font-size:%?28?%;line-height:%?50?%;text-align:left}.content_item .item_list .item_info[data-v-ef4955e4]{padding:0 %?15?%;display:block;width:calc(100% - %?30?%);color:#999;text-align:left;line-height:%?40?%;font-size:%?24?%}.content_item .item_list[data-v-ef4955e4]:nth-child(3n){margin-right:0}.content_item .view_list[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:100%;margin-top:%?30?%}.content_item .view_list .list_img[data-v-ef4955e4]{display:inline-block;width:%?210?%;height:%?210?%;position:relative}.content_item .view_list .list_img uni-image[data-v-ef4955e4]{width:100%;height:100%}.content_item .view_list .list_right[data-v-ef4955e4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:%?20?%;position:relative}.content_item .view_list .list_right .list[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.content_item .view_list .list_right .list .list_title[data-v-ef4955e4]{display:block;font-size:%?32?%;color:#303030;line-height:%?50?%}.content_item .view_list .list_right .list .text[data-v-ef4955e4]{width:100%;font-size:%?24?%;color:#999;line-height:%?40?%;margin:%?10?% 0}.content_item .view_list .list_right .list .list_bottom[data-v-ef4955e4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:100%;position:absolute;left:0;bottom:%?16?%}.content_item .view_list .list_right .list .list_bottom .update[data-v-ef4955e4]{display:inline-block;margin-right:auto;font-size:%?24?%;color:#ff3737;line-height:%?40?%}.content_item .view_list .list_right .list .list_bottom .numper[data-v-ef4955e4]{display:inline-block;margin-left:auto;font-size:%?24?%;color:#303030;line-height:%?40?%}.backroof[data-v-ef4955e4]{font-size:%?28?%;color:#302f2f;line-height:%?32?%;text-align:center;margin:%?60?% 0}.item_label[data-v-ef4955e4]{position:absolute;left:0;top:0;margin:%?-10?%;display:inline-block;font-size:%?24?%;color:#fff;background-color:#f42f47;padding:0 %?15?%;line-height:%?30?%;border-radius:%?5?%}.item_label.on[data-v-ef4955e4]{background-color:#4cd964}',""])},cc17:function(t,i,e){"use strict";var a=e("288e"),n=e("e54b");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=n(e("243e")),s=a(e("c541")),o=n(e("2f83")),c=n(e("8cb8")),r={data:function(){return{scrollTop:0,bookshelf:[],url:"",tabList:[],itemList:[],pageitem:1,sizeitem:6,urlitem:"",viewList:[],pageview:1,sizeview:5,urlview:"",likeList:[],pagelike:1,sizelike:5,urllike:""}},components:{report:s.default},mounted:function(){o.banner(this),o.hot(this),o.top(this),o.guess(this),l.userinfo(this)},onLoad:function(){},onShow:function(){c.getNewInfo(this)},methods:{goDetail:function(){},backroof:function(){uni.pageScrollTo({scrollTop:0,duration:300})},gopage:function(t,i){uni.setStorage({key:"classid",data:t,success:function(){}}),t?(uni.switchTab({url:i}),uni.setStorageSync("indextab",1)):uni.navigateTo({url:i})},gomore:function(t){uni.navigateTo({url:"/pages/index/rankList"})},godetails:function(t){uni.navigateTo({url:"/pages/index/cartoonDetails?id="+t}),uni.setStorageSync("mhid",t)},godeta:function(){uni.navigateTo({url:"/pages/index/seeDetails"})}}};i.default=r},e142:function(t,i,e){"use strict";var a=e("46ff"),n=e.n(a);n.a},f8fe:function(t,i,e){"use strict";e.r(i);var a=e("3bfc"),n=e.n(a);for(var l in a)"default"!==l&&function(t){e.d(i,t,function(){return a[t]})}(l);i["default"]=n.a}}]);