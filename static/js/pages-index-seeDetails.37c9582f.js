(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-seeDetails"],{"0ab5":function(t,i,e){"use strict";var a=e("7f41"),n=e.n(a);n.a},"1fe5":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.activeRead,expression:"!activeRead"}],staticClass:"header"},[e("v-uni-view",{staticClass:"back",on:{click:function(i){i=t.$handleEvent(i),t.back(i)}}},[e("v-uni-image",{attrs:{src:"../../static/image/common_back_icon.png",mode:""}})],1),e("v-uni-view",{staticClass:"text"},[t._v(t._s(t.title))])],1),t.ios?e("addinios"):t._e(),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{class:t.activeRead?"img_ico on":"img_ico",attrs:{"scroll-y":"true"},on:{touchstart:function(i){i=t.$handleEvent(i),t.touchstart(i)},touchend:function(i){i=t.$handleEvent(i),t.touchend(i)}}},[t.imgshow?e("v-uni-view",{class:!t.numactive&&t.user.gold<50&&0==t.user.isVip?"img on":"img",attrs:{id:"img"}},[t._l(t.image,function(i,a){return e("v-uni-image",{key:a,attrs:{"lazy-load":"",src:t.urlImage+i,mode:"widthFix"}})}),!t.numactive&&t.user.gold<50&&0==t.user.isVip?e("v-uni-view",{class:t.numactive?"img_item":"img_item on"},[e("v-uni-view",{staticClass:"txtext"},[t._v("您的金币可用余额不足哟~")]),e("v-uni-view",{staticClass:"btext"},[t._v("请充值后继续阅读吧")]),e("v-uni-view",{staticClass:"text_btn",on:{touchstart:function(i){i=t.$handleEvent(i),t.gopaty()}}},[t._v("立即充值（限时优惠中）")])],1):t._e(),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.numactive,expression:"numactive"}]},[e("uni-load-more",{attrs:{status:t.status,"content-text":t.contentText,color:"#007aff"}})],1)],2):t._e(),!t.activeRead&!t.numactive&&t.user.gold<50&&0==t.user.isVip?e("v-uni-view",{staticClass:"btn_item"},[e("v-uni-view",{staticClass:"name",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.goback1(i)}}},[e("v-uni-image",{attrs:{"lazy-load":"",src:"../../static/image/yd_fhsy_icon.png",mode:""}}),e("v-uni-view",[t._v("返回首页")])],1),e("v-uni-view",{staticClass:"name",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.dingyue()}}},[e("v-uni-image",{attrs:{"lazy-load":"true",src:"../../static/image/yd_ydy_icon.png",mode:""}}),e("v-uni-view",{staticClass:"dingy"},[t._v("订阅")])],1),e("v-uni-view",{staticClass:"name",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.gopaty()}}},[e("v-uni-image",{attrs:{"lazy-load":"",src:"../../static/image/yd_zj_icon.png",mode:""}}),e("v-uni-view",[t._v("充值（剩余："+t._s(t.user.gold)+"）")])],1)],1):t._e()],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.activeRead&!t.numactive,expression:"!activeRead&!numactive"}],staticClass:"btn_list"},[e("v-uni-view",{staticClass:"text left",on:{click:function(i){i=t.$handleEvent(i),t.geton(i)}}},[t._v("上一话")]),e("v-uni-view",{staticClass:"menu",on:{click:function(i){i=t.$handleEvent(i),t.goback(i)}}},[t._v("返回目录")]),e("v-uni-view",{staticClass:"text right",on:{click:function(i){i=t.$handleEvent(i),t.getdown(i)}}},[t._v("下一话")])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.activeRead&t.image.length>3,expression:"!activeRead&image.length > 3"}],staticClass:"btn_list"},[e("v-uni-view",{staticClass:"text left",on:{click:function(i){i=t.$handleEvent(i),t.geton(i)}}},[t._v("上一话")]),e("v-uni-view",{staticClass:"name",on:{click:function(i){i=t.$handleEvent(i),t.readin()}}},[e("v-uni-image",{attrs:{"lazy-load":"true",src:"../../static/image/yd_zj_icon.png",mode:""}}),e("v-uni-view",[t._v("章节")])],1),e("v-uni-view",{staticClass:"name",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.goback1(i)}}},[e("v-uni-image",{attrs:{"lazy-load":"",src:"../../static/image/yd_fhsy_icon.png",mode:""}}),e("v-uni-view",[t._v("返回首页")])],1),e("v-uni-view",{staticClass:"name on"},[e("v-uni-image",{attrs:{"lazy-load":"",src:"../../static/image/yd_dy_icon.png",mode:""}}),e("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.gomySub(i)}}},[t._v("订阅")])],1),e("v-uni-view",{staticClass:"text right",on:{click:function(i){i=t.$handleEvent(i),t.getdown(i)}}},[t._v("下一话")])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.activeRead&t.showlist,expression:"!activeRead&showlist"}],staticClass:"pop",on:{click:function(i){i=t.$handleEvent(i),t.boxhidden(i)}}},[e("v-uni-view",{staticClass:"section"},[e("v-uni-view",{staticClass:"section_header"},[e("v-uni-view",{staticClass:"text"},[t._v("章节连载")]),0==t.detail.bookStatus?e("v-uni-view",{staticClass:"text_ico on"},[t._v("（连载中）")]):e("v-uni-view",{staticClass:"text_ico "},[t._v("（已完结）")]),e("v-uni-view",{staticClass:"text_right"},[e("v-uni-view",{on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.zheng(i)}}},[t._v("正序")]),t._v("|"),e("v-uni-view",{on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.dao(i)}}},[t._v("倒序")])],1)],1),e("v-uni-view",{staticClass:"section_list"},t._l(t.detail.list,function(i,a){return e("v-uni-view",{key:a,staticClass:"sec_item",on:{click:function(e){e=t.$handleEvent(e),t.goread(i.id)}}},[e("v-uni-view",{staticClass:"title"},[t._v("第"+t._s(i.section)+"话")]),e("v-uni-view",{staticClass:"time"},[t._v(t._s(t.creTime[a]))]),i.isFree?e("v-uni-view",{staticClass:"buy"},[e("v-uni-view"),t._v("免费")],1):t._e(),!i.isFree&!i.isBuy?e("v-uni-view",{staticClass:"buy"},[e("v-uni-view"),t._v(t._s(i.needToPay)+"金币")],1):t._e(),!i.isFree&i.isBuy?e("v-uni-view",{staticClass:"buy on"},[t._v("已购买")]):t._e()],1)}),1)],1)],1)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"392a":function(t,i,e){"use strict";e.r(i);var a=e("9e43"),n=e("6b92");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("0ab5");var s=e("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"1715b294",null);i["default"]=d.exports},"4aac":function(t,i,e){"use strict";e.r(i);var a=e("51b3"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"51b3":function(t,i,e){"use strict";var a=e("e54b"),n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("392a")),s=a(e("ebcb")),d=a(e("4da5")),c={data:function(){return{showlist:!1,urlImage:"",image:"",top:"",sectionList:[],arrList:"",section:"",maxsection:"",imgshow:!1,bookid:"",uid:"",pai:"",detail:"",loading:!0,user:"",imgarr:"",activeRead:!1,activ:!1,topscroll:"",scrollT:"",pageY:"",startY:"",title:"",statusBarHeight:"",topheight:"",navigationBarHeight:"",titleBarHeight:"",status:"more",numactive:!1,statusTypes:[{value:"more",text:"加载前"},{value:"loading",text:"加载中"},{value:"noMore",text:"没有更多"}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},components:{uniLoadMore:o.default},mounted:function(){},onShow:function(){d.userinfo(this),this.bookid=uni.getStorageSync("mhid");var t=uni.getStorageSync("user");t.id&&(this.uid=t.id,s.details(this));try{var i=uni.getSystemInfoSync();this.topheight=i.statusBarHeight+30,this.navigationBarHeight=i.navigationBarHeight,this.titleBarHeight=i.titleBarHeight}catch(e){}},computed:{halfWidth:function(){return uni.upx2px(375)+"px"}},onLoad:function(t){var i=this;t&&(this.readId=t.id,this.section=t.section,s.read(this),this.title="第"+t.section+"话"),this.user=uni.getStorageSync("user"),uni.getStorage({key:"list",success:function(t){for(var e in i.arrList=t.data,console.log(i.arrList),i.arrList)i.maxsection=i.arrList[i.arrList.length-1].section,console.log(i.maxsection)}})},onReachBottom:function(){if(this.numactive)for(var t in console.log(123456789),this.status="loading",uni.showNavigationBarLoading(),this.section++,this.title="第"+this.section+"话",this.arrList)this.arrList[t].section==this.section&&(this.readId=this.arrList[t].id,s.readadd(this))},methods:{back:function(){uni.navigateBack({delta:1})},touchstart:function(t){var i=t.touches[0]||t.changedTouches[0];this.startY=i.pageY},touchend:function(t){var i=t.touches[0]||t.changedTouches[0];this.pageY=i.pageY,this.startY<this.pageY?this.activeRead=!0:this.startY>this.pageY?this.activeRead=!0:this.activeRead=!1},tap:function(){this.activeRead=!1},gomySub:function(){s.subscript(this)},gopaty:function(){console.log(123456),uni.navigateTo({url:"/pages/userindex/recharge"})},goback1:function(){uni.switchTab({url:"/pages/index/index"})},dingyue:function(){s.subscript(this)},goback:function(){uni.navigateBack({delta:1})},zheng:function(){this.pai="ASC",s.details(this)},dao:function(){this.pai="DESC",s.details(this)},readin:function(){this.showlist=!this.showlist},boxhidden:function(){this.showlist=!this.showlist},goread:function(t){for(var i in this.readId=t,s.read(this),this.arrList)this.arrList[i].id==t&&(this.title="第"+this.arrList[i].section+"话")},geton:function(){d.userinfo(this);var t=uni.getStorageSync("user");if(t.id&&(this.uid=t.id,s.details(this)),!(this.section<2))for(var i in this.section=this.section-1,this.title="第"+this.section+"话",this.arrList)this.arrList[i].section==this.section&&(this.readId=this.arrList[i].id,this.imgshow=!1,s.read(this))},getdown:function(){d.userinfo(this);var t=uni.getStorageSync("user");if(t.id&&(this.uid=t.id,s.details(this)),this.section!=this.maxsection)for(var i in this.section++,this.title="第"+this.section+"话",this.arrList)this.arrList[i].section==this.section&&(this.readId=this.arrList[i].id,this.imgshow=!1,s.read(this))}}};i.default=c},"5d32":function(t,i,e){"use strict";e.r(i);var a=e("1fe5"),n=e("4aac");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("c963");var s=e("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"5eddb674",null);i["default"]=d.exports},"621f":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-load-more[data-v-1715b294]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-1715b294]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-1715b294]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-1715b294]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-1715b294]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-1715b294 1.56s ease infinite;animation:load-data-v-1715b294 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-1715b294]:nth-child(4){top:11px;left:0}.load1[data-v-1715b294],.load2[data-v-1715b294],.load3[data-v-1715b294]{height:24px;width:24px}.load2[data-v-1715b294]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-1715b294]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-1715b294]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-1715b294]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-1715b294]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-1715b294]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-1715b294]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-1715b294]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-1715b294]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-1715b294]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-1715b294]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-1715b294]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-1715b294]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-1715b294]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-1715b294{0%{opacity:1}to{opacity:.2}}",""])},"6b92":function(t,i,e){"use strict";e.r(i);var a=e("a6cf"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"7f41":function(t,i,e){var a=e("621f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("43f1849f",a,!0,{sourceMap:!1,shadowMode:!1})},"9e43":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},a6cf:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};i.default=a},b041:function(t,i){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},c963:function(t,i,e){"use strict";var a=e("d303"),n=e.n(a);n.a},d303:function(t,i,e){var a=e("e394");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("1a4b55ca",a,!0,{sourceMap:!1,shadowMode:!1})},e394:function(t,i,e){var a=e("b041");i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.topheight[data-v-5eddb674]{position:fixed;top:%?100?%;left:%?100?%;color:#007aff;font-size:%?36?%;line-height:%?100?%}.header[data-v-5eddb674]{background:#f42f47;padding:%?64?% %?6?% %?14?%;position:fixed;z-index:10;width:100%}.header .back[data-v-5eddb674]{position:absolute;left:%?28?%;top:%?50?%}.header .back uni-image[data-v-5eddb674]{width:%?20?%;height:%?36?%}.header .text[data-v-5eddb674]{font-weight:700;color:#fff;font-size:%?32?%;text-align:center;line-height:%?60?%}.content[data-v-5eddb674]{height:calc(100vh - %?88?%)}.content .img_ico[data-v-5eddb674]{overflow-y:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100vh}.content .img_ico.on #img[data-v-5eddb674]{height:auto;background-color:#fff}.content .scrolltop[data-v-5eddb674]{position:fixed;top:%?100?%;width:%?100?%;height:%?100?%;left:0;z-index:500;color:#007aff;font-size:%?30?%}.content .img[data-v-5eddb674]{height:calc(100% - %?128?%);overflow:auto}.content .img uni-image[data-v-5eddb674]{width:100%}.content .img.on[data-v-5eddb674]{height:calc(100% - %?286?%)}.content .btn_list[data-v-5eddb674]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;height:%?128?%;background:#f42f47;position:fixed;width:100%;bottom:0}.content .btn_list .menu[data-v-5eddb674]{background:#f42f47;display:inline-block;margin:0 auto;color:#fff;line-height:64px;font-size:%?32?%}.content .btn_list .text[data-v-5eddb674]{display:inline-block;margin-left:%?50?%;font-size:%?32?%;color:#fff;line-height:%?128?%;width:60px}.content .btn_list .text.right[data-v-5eddb674]{display:inline-block;margin-right:%?50?%;margin-left:0}.content .btn_list .name[data-v-5eddb674]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.content .btn_list .name uni-image[data-v-5eddb674]{display:inline-block;margin-left:calc(50% - 10px);width:%?48?%;height:%?48?%;margin-top:%?30?%}.content .btn_list .name uni-view[data-v-5eddb674]{display:inline-block;width:100%;text-align:center;font-size:%?20?%;color:#fff;line-height:%?40?%}.content .btn_list .name.on uni-image[data-v-5eddb674]{width:%?48?%;height:%?48?%}.content .imgcard[data-v-5eddb674]{position:relative;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0}.content .btn_item[data-v-5eddb674]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;height:%?128?%;background:#f42f47;position:fixed;width:100%;bottom:%?128?%;z-index:1100}.content .btn_item .name[data-v-5eddb674]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;width:33.33%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.content .btn_item .name uni-image[data-v-5eddb674]{display:inline-block;margin:0 auto;width:%?48?%;height:%?48?%;margin-top:%?30?%}.content .btn_item .name uni-view[data-v-5eddb674]{display:inline-block;width:100%;text-align:center;font-size:%?20?%;color:#fff;line-height:%?40?%}.content .btn_item .name .dingy[data-v-5eddb674]{color:#ffa0ac}.content .btn_item .name.on uni-image[data-v-5eddb674]{width:%?48?%;height:%?48?%;margin-left:0}.content .pop[data-v-5eddb674]{position:fixed;top:0;left:0;right:0;bottom:%?128?%;z-index:1000;background:rgba(0,0,0,.9)}.content .pop .section[data-v-5eddb674]{position:absolute;left:0;bottom:0;width:calc(100% - %?100?%);background-color:#fff;padding:%?50?%;max-height:%?700?%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.content .pop .section .section_header[data-v-5eddb674]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;margin-bottom:%?30?%}.content .pop .section .section_header .text[data-v-5eddb674]{display:inline-block;font-size:%?36?%;color:#303030;line-height:%?60?%}.content .pop .section .section_header .text_ico[data-v-5eddb674]{display:inline-block;margin-right:auto;font-size:%?24?%;color:#4cd964;line-height:%?60?%}.content .pop .section .section_header .text_ico.on[data-v-5eddb674]{color:#f42f47}.content .pop .section .section_header .text_right[data-v-5eddb674]{display:inline-block;font-size:%?28?%;color:#303030;line-height:%?60?%}.content .pop .section .section_header .text_right uni-view[data-v-5eddb674]{display:inline-block}.content .pop .section .section_header .text_right uni-view[data-v-5eddb674]:first-child{padding-right:%?10?%}.content .pop .section .section_header .text_right uni-view[data-v-5eddb674]:nth-child(2){padding-left:%?10?%}.content .pop .section .section_list[data-v-5eddb674]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.content .pop .section .section_list .sec_item[data-v-5eddb674]{display:inline-block;width:%?160?%;border:%?4?% solid #bbb;border-radius:%?10?%;margin-bottom:%?30?%;margin-right:%?30?%;padding:%?15?%}.content .pop .section .section_list .sec_item .title[data-v-5eddb674]{font-size:%?28?%;color:#303030;line-height:%?46?%;text-align:center}.content .pop .section .section_list .sec_item .time[data-v-5eddb674]{font-size:%?22?%;color:#999;line-height:%?46?%;text-align:center}.content .pop .section .section_list .sec_item .buy[data-v-5eddb674]{font-size:%?24?%;color:#303030;line-height:%?46?%;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .pop .section .section_list .sec_item .buy uni-view[data-v-5eddb674]{display:inline-block;width:%?46?%;height:%?46?%;background:url('+a(e("f972"))+") no-repeat 50%;background-size:%?30?% %?30?%;margin-left:%?20?%}.content .pop .section .section_list .sec_item[data-v-5eddb674]:nth-child(3n){margin-right:0}.content .img_item[data-v-5eddb674]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.content .img_item .txtext[data-v-5eddb674]{width:100%;text-align:center;font-size:%?36?%;color:#f42f47;padding:%?30?% 0}.content .img_item .btext[data-v-5eddb674]{width:100%;font-size:%?28?%;color:#333;line-height:%?40?%;margin:%?20?% 0;text-align:center}.content .img_item .text_btn[data-v-5eddb674]{width:%?630?%;line-height:%?80?%;margin:0 auto;text-align:center;background:#f42f47;border-radius:%?10?%;font-size:%?28?%;color:#fff}.content .img_item.on[data-v-5eddb674]{padding-bottom:%?400?%;padding-top:%?400?%}",""])},ebcb:function(t,i,e){"use strict";function a(t){var i="book/hot",e="POST",a={page:t.pageitem,pageSize:t.sizeitem};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}else uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function n(t){var i="book/top",e="POST",a={page:t.pageitem,pageSize:t.sizeitem};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.pages<t.sizeitem?t.status="null":t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}else uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function o(t){var i="book/guess",e="POST",a={page:t.pageitem,pageSize:t.sizeitem};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.pages<t.sizeitem?t.status="null":t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}else uni.showToast({icon:"none",title:i.data.msg,duration:1500})},function(t){})}function s(t){var i="book/detail",e="POST",a={id:t.bookid,sort:t.pai};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){t.detail=i.data.data;var e=[];for(var a in i.data.data.list){var n=i.data.data.list[a].createTime;n=n.split(" ")[0],e.push(n)}t.pages<t.sizeitem?t.status="null":t.status="more",t.creTime=e,uni.setStorage({key:"list",data:t.detail.list}),t.imgUrl=i.data.dfsfileaccessprefix}},function(t){})}function d(t){var i="booksection/read",e="POST",a={sectionid:t.readId};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){t.image=i.data.data;var e=[];for(var a in t.image){var n=!0;e.push(n)}t.imgarr=e,t.urlImage=i.data.dfsfileaccessprefix,t.imgshow=!0,i.data.data.length>3?(t.numactive=!0,t.status="more",uni.hideNavigationBarLoading()):(t.numactive=!1,t.status="null",uni.hideNavigationBarLoading())}},function(t){})}function c(t){var i="booksection/read",e="POST",a={sectionid:t.readId};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in console.log("123456",i.data.data),i.data.data)t.image.push(i.data.data[e]);i.data.data.length>3?(t.numactive=!0,t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh(),alert(t.numactive)):(t.numactive=!1,t.status="null",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh())}},function(t){})}function l(t){var i="book/share",e="POST",a={bid:t.bookid,u:t.uid};t.$http.httpRequest(i,a,e).then(function(t){t.data.code},function(t){})}function r(t){var i="subscription/mySubscriptions",e="POST",a={type:t.stype};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}},function(t){})}function u(t){var i="book/subscription",e="POST",a={bookid:t.bookid};t.$http.httpRequest(i,a,e).then(function(t){0==t.data.code&&uni.showToast({icon:"none",title:"订阅成功",duration:1500})},function(t){})}function v(t){var i="book/subscription/top",e="POST",a={page:t.page,pageSize:t.pageSize};t.$http.httpRequest(i,a,e).then(function(i){if(0==i.data.code){for(var e in t.urlview=i.data.dfsfileaccessprefix,i.data.data.list)t.viewList.push(i.data.data.list[e]);t.pages=i.data.data.pages,t.status="more",uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}},function(t){})}Object.defineProperty(i,"__esModule",{value:!0}),i.hot=a,i.top=n,i.guess=o,i.details=s,i.read=d,i.readadd=c,i.share=l,i.mySubscriptions=r,i.subscript=u,i.subscription=v,e("28a5")},f972:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA5LTIyVDAwOjIwOjAyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOS0yMlQwMDoyMjo0NCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOS0yMlQwMDoyMjo0NCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5ZDI3MmViZS1kMGQ5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"}}]);