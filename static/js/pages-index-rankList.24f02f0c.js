(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-rankList"],{"00f1":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[t.ios?e("addinios"):t._e(),e("v-uni-view",{staticClass:"header_tab"},[e("v-uni-view",{class:1===t.tabindex?"on tab":" tab",on:{click:function(i){i=t.$handleEvent(i),t.gotab(1)}}},[t._v("人气排行")]),e("v-uni-view",{class:2===t.tabindex?"on tab":" tab",on:{click:function(i){i=t.$handleEvent(i),t.gotab(2)}}},[t._v("点击排行")]),e("v-uni-view",{class:3===t.tabindex?"on tab":" tab",on:{click:function(i){i=t.$handleEvent(i),t.gotab(3)}}},[t._v("订阅排行")])],1),e("v-uni-view",{staticClass:"content_item"},t._l(t.viewList,function(i,a){return e("v-uni-view",{key:a,staticClass:"view_list",on:{click:function(e){e=t.$handleEvent(e),t.godeta(i.id)}}},[e("v-uni-view",{staticClass:"list_img"},[e("v-uni-image",{attrs:{src:t.urlview+i.titleImg}})],1),e("v-uni-view",{staticClass:"list_right"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"list_title "},[e("v-uni-view",{staticClass:"eli text",attrs:{"lazy-load":""}},[t._v(t._s(i.title||"--"))]),e("v-uni-view",{staticClass:"paih",class:"paih"+a},[t._v(t._s(a+1))])],1),e("v-uni-view",{staticClass:"eli2 text"},[t._v(t._s(i.comment||"--"))]),e("v-uni-view",{staticClass:"list_bottom"},[i.labels?e("v-uni-view",{staticClass:"update"},[t._v(t._s(i.labels||"--"))]):t._e(),i.readNum?e("v-uni-view",{staticClass:"numper"},[t._v("观看人数"+t._s(i.readNum))]):e("v-uni-view",{staticClass:"numper"},[t._v("观看人数0")])],1)],1)],1)],1)}),1),e("v-uni-view",[e("uni-load-more",{attrs:{status:t.status,"content-text":t.contentText,color:"#007aff"}})],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"0299":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0b86d018]{height:100vh}.content .header_tab[data-v-0b86d018]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;padding:0 %?50?%;background-color:#fff}.content .header_tab uni-view.tab[data-v-0b86d018]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;color:#bfbfbf;line-height:%?90?%;text-align:center}.content .header_tab uni-view.on[data-v-0b86d018]{color:#f42f47;position:relative}.content .header_tab uni-view.on[data-v-0b86d018]:after{content:"";display:block;width:80%;height:%?6?%;background:#f42f47;position:absolute;left:10%;bottom:0}.content .header_tab uni-view.saixuan[data-v-0b86d018]{display:inline-block;height:%?50?%;line-height:%?50?%;border:%?2?% solid #f42f47;border-radius:%?25?%;font-size:%?24?%;color:#f42f47;padding:0 %?15?%;margin:auto 0}.content .content_item[data-v-0b86d018]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 %?50?% %?20?%}.content .content_item .view_list[data-v-0b86d018]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:100%;margin-top:%?30?%}.content .content_item .view_list .list_img[data-v-0b86d018]{display:inline-block;width:%?210?%;height:%?210?%}.content .content_item .view_list .list_img uni-image[data-v-0b86d018]{width:100%;height:100%}.content .content_item .view_list .list_right[data-v-0b86d018]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:%?20?%;position:relative}.content .content_item .view_list .list_right .list[data-v-0b86d018]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.content .content_item .view_list .list_right .list .list_title[data-v-0b86d018]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;font-size:0;line-height:%?56?%}.content .content_item .view_list .list_right .list .list_title .text[data-v-0b86d018]{font-size:%?32?%;color:#303030;max-width:%?250?%}.content .content_item .view_list .list_right .list .list_title .paih[data-v-0b86d018]{display:inline-block;font-size:%?32?%;color:#fff;font-weight:700;width:%?56?%;height:%?56?%;border-radius:50%;text-align:center;margin-left:auto;background-color:#dcdcdc;line-height:%?56?%}.content .content_item .view_list .list_right .list .list_title .paih0[data-v-0b86d018]{background-color:#ff1a2c}.content .content_item .view_list .list_right .list .list_title .paih1[data-v-0b86d018]{background-color:#f37200}.content .content_item .view_list .list_right .list .list_title .paih2[data-v-0b86d018]{background-color:#ffc600}.content .content_item .view_list .list_right .list .text[data-v-0b86d018]{width:100%;font-size:%?24?%;color:#999;line-height:%?40?%;margin:%?10?% 0}.content .content_item .view_list .list_right .list .list_bottom[data-v-0b86d018]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:100%;position:absolute;left:0;bottom:%?16?%}.content .content_item .view_list .list_right .list .list_bottom .update[data-v-0b86d018]{display:inline-block;margin-right:auto;font-size:%?24?%;color:#ff3737;line-height:%?40?%}.content .content_item .view_list .list_right .list .list_bottom .numper[data-v-0b86d018]{display:inline-block;margin-left:auto;font-size:%?24?%;color:#303030;line-height:%?40?%}.content .btnList[data-v-0b86d018]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;padding:0 %?50?%;margin:%?30?% 0}.content .btnList uni-view[data-v-0b86d018]{display:inline-block;padding:0 %?20?%;border:%?2?% solid #f42f47;font-size:%?26?%;color:#333;line-height:%?60?%;margin:0 auto;border-radius:%?10?%}.content .btnList uni-view.on[data-v-0b86d018]{background:#f42f47;color:#fff}',""])},"0ab5":function(t,i,e){"use strict";var a=e("7f41"),n=e.n(a);n.a},"0cd6":function(t,i,e){var a=e("0299");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("c3fa7dc6",a,!0,{sourceMap:!1,shadowMode:!1})},"392a":function(t,i,e){"use strict";e.r(i);var a=e("9e43"),n=e("6b92");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("0ab5");var s=e("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"1715b294",null);i["default"]=d.exports},"3a64":function(t,i,e){"use strict";var a=e("0cd6"),n=e.n(a);n.a},"621f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-load-more[data-v-1715b294]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-1715b294]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-1715b294]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-1715b294]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-1715b294]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-1715b294 1.56s ease infinite;animation:load-data-v-1715b294 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:nth-child(4){top:11px;left:0}.load1[data-v-1715b294],.load2[data-v-1715b294],.load3[data-v-1715b294]{height:24px;width:24px}.load2[data-v-1715b294]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-1715b294]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-1715b294]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-1715b294]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-1715b294]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-1715b294]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-1715b294]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-1715b294]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-1715b294]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-1715b294]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-1715b294]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-1715b294]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-1715b294]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-1715b294]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-1715b294{0%{opacity:1}to{opacity:.2}}",""])},"6b92":function(t,i,e){"use strict";e.r(i);var a=e("a6cf"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"7f41":function(t,i,e){var a=e("621f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("43f1849f",a,!0,{sourceMap:!1,shadowMode:!1})},"9e43":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"9eed":function(t,i,e){"use strict";e.r(i);var a=e("f8e8"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},a6cf:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};i.default=a},c75c:function(t,i,e){"use strict";e.r(i);var a=e("00f1"),n=e("9eed");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("3a64");var s=e("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"0b86d018",null);i["default"]=d.exports},ebcb:function(t,i,e){"use strict";function a(t){var i="book/hot",e="POST",a={page:t.pageitem,pageSize:t.sizeitem};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}else uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function n(t){var i="book/top",e="POST",a={page:t.pageitem,pageSize:t.sizeitem};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.pages<t.sizeitem?t.status="null":t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}else uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function o(t){var i="book/guess",e="POST",a={page:t.pageitem,pageSize:t.sizeitem};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.pages<t.sizeitem?t.status="null":t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}else uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function s(t){var i="book/detail",e="POST",a={id:t.bookid,sort:t.pai};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){t.detail=i.data.data;var e=[];for(var a in i.data.data.list){var n=i.data.data.list[a].createTime;n=n.split(" ")[0],e.push(n)}t.pages<t.sizeitem?t.status="null":t.status="more",t.creTime=e,uni.setStorage({key:"list",data:t.detail.list}),t.imgUrl=i.data.dfsfileaccessprefix}},function(t){})}function d(t){var i="booksection/read",e="POST",a={sectionid:t.readId};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){t.image=i.data.data;var e=[];for(var a in t.image){var n=!0;e.push(n)}t.imgarr=e,t.urlImage=i.data.dfsfileaccessprefix,t.imgshow=!0,i.data.data.length>3?(t.numactive=!0,t.status="more",uni.hideNavigationBarLoading()):(t.numactive=!1,t.status="null",uni.hideNavigationBarLoading())}},function(t){})}function l(t){var i="booksection/read",e="POST",a={sectionid:t.readId};t.$http.httpRequest(i,a,e).then(function(i){0==i.data.code&&(t.image.push(i.data.data),i.data.data.length>3?(t.numactive=!0,t.status="more",uni.hideNavigationBarLoading()):(t.numactive=!1,t.status="null",uni.hideNavigationBarLoading()))},function(t){})}function r(t){var i="book/share",e="POST",a={bid:t.bookid,u:t.uid};t.$http.httpRequest(i,a,e).then(function(t){t.data.code},function(t){})}function u(t){var i="subscription/mySubscriptions",e="POST",a={type:t.stype};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}},function(t){})}function c(t){var i="book/subscription",e="POST",a={bookid:t.bookid};t.$http.httpRequest(i,a,e).then(function(t){0==t.data.code&&uni.showToast({icon:"none",title:"订阅成功",duration:1500})},function(t){})}function f(t){var i="book/subscription/top",e="POST",a={page:t.page,pageSize:t.pageSize};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}},function(t){})}Object.defineProperty(i,"__esModule",{value:!0}),i.hot=a,i.top=n,i.guess=o,i.details=s,i.read=d,i.readadd=l,i.share=r,i.mySubscriptions=u,i.subscript=c,i.subscription=f,e("28a5")},f8e8:function(t,i,e){"use strict";var a=e("e54b"),n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("392a")),s=a(e("ebcb")),d={data:function(){return{tabindex:1,viewList:[],pageitem:1,sizeitem:10,urlitem:"",type:"",status:"more",onmore:!1,page:1,pageSize:10,pages:"",ontopmore:!1,stype:"",urlview:"",statusTypes:[{value:"more",text:"加载前"},{value:"loading",text:"加载中"},{value:"noMore",text:"没有更多"}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},components:{uniLoadMore:o.default},methods:{gotab:function(t){this.tabindex=t,console.log(t),1===this.tabindex?(console.log(123),this.viewList=[],this.pageitem=1,s.hot(this)):2===this.tabindex?(console.log(456),this.pageitem=1,this.viewList=[],s.top(this)):3===this.tabindex&&(console.log(789),this.pageitem=1,this.viewList=[],s.subscription(this))},godeta:function(t){uni.navigateTo({url:"/pages/index/cartoonDetails?id="+t}),uni.setStorageSync("mhid",t)},saixuan:function(){}},onReachBottom:function(){this.status="loading",uni.showNavigationBarLoading(),this.pageitem<this.pages?(this.pageitem++,1==this.tabindex?s.hot(this):2==this.tabindex?s.top(this):3==this.tabindex&&s.subscription(this)):(this.status="null",uni.hideNavigationBarLoading(),uni.showToast({icon:"none",title:"没有更多数据了",duration:1500}))},onPullDownRefresh:function(){this.viewList=[],this.pageitem=1,1==this.tabindex?s.hot(this):2==this.tabindex?s.top(this):3==this.tabindex&&s.subscription(this)},onLoad:function(t){s.hot(this)},mounted:function(){}};i.default=d}}]);