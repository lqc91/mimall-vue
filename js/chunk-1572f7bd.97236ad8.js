(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1572f7bd"],{"0f1a":function(t,s,i){},"3c7f":function(t,s,i){t.exports=i.p+"img/phone-2.205ffcc5.jpg"},"6e79":function(t,s,i){t.exports=i.p+"img/phone-1.31ea1dcf.jpg"},"77bc":function(t,s,i){t.exports=i.p+"img/item-price.665c8317.jpeg"},"7dc7":function(t,s,i){"use strict";var a=i("0f1a"),e=i.n(a);e.a},"9f26":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav-bar",class:{isFixed:t.isFixed}},[i("div",{staticClass:"container"},[i("div",{staticClass:"pro-title"},[t._v(t._s(t.title))]),i("div",{staticClass:"pro-param"},[i("a",{staticClass:"param-link",attrs:{href:"javascript:;"}},[t._v("概述")]),i("span",{staticClass:"vertical-line"},[t._v("|")]),i("a",{staticClass:"param-link",attrs:{href:"javascript:;"}},[t._v("参数")]),i("span",{staticClass:"vertical-line"},[t._v("|")]),i("a",{staticClass:"param-link",attrs:{href:"javascript:;"}},[t._v("用户评价")]),t._t("buy")],2)])])},e=[],c={name:"nav-bar",props:{title:String},data:function(){return{isFixed:!1}},mounted:function(){window.addEventListener("scroll",this.initHeight)},methods:{initHeight:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>151}},destroyed:function(){window.removeEventListener("scroll",this.initHeight,!1)}},n=c,r=(i("adf3"),i("2877")),o=Object(r["a"])(n,a,e,!1,null,"1465e21b",null);s["a"]=o.exports},adf3:function(t,s,i){"use strict";var a=i("bb7f"),e=i.n(a);e.a},afa2:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail"},[i("product-param",{staticClass:"product-param",attrs:{title:t.product.name}}),i("div",{staticClass:"main"},[i("div",{staticClass:"container"},[i("swiper",{staticClass:"swiper-container",attrs:{options:t.swiperOption}},[t._l(t.slideList,(function(t,s){return i("swiper-slide",{key:s},[i("img",{staticClass:"slide-img",attrs:{src:t,alt:"手机图片"}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2),i("div",{staticClass:"info"},[i("div",{staticClass:"base"},[i("h2",{staticClass:"title"},[t._v(t._s(t.product.name))]),i("p",{staticClass:"subtitle"},[t._v(t._s(t.product.subtitle))]),i("p",{staticClass:"tag"},[t._v("小米自营")]),i("p",{staticClass:"price"},[t._v(t._s(t.product.price)+"元")])]),i("div",{staticClass:"addr"},[t._m(0),t.product.stock?i("p",{staticClass:"stock"},[t._v("有现货")]):i("p",{staticClass:"stock"},[t._v("该地区暂时缺货")])]),i("div",{staticClass:"type"},[i("h3",{staticClass:"title"},[t._v("选择版本")]),i("ul",[i("li",{staticClass:"item",class:{checked:1===t.version},on:{click:function(s){t.version=1}}},[i("span",{staticClass:"name"},[t._v("6GB+64GB 全网通")]),i("span",{staticClass:"price"},[t._v(t._s(t.product.price)+"元")])]),i("li",{staticClass:"item",class:{checked:2===t.version},on:{click:function(s){t.version=2}}},[i("span",{staticClass:"name"},[t._v("4GB+64GB 移动4G")]),i("span",{staticClass:"price"},[t._v(t._s(t.product.price)+"元")])])])]),t._m(1),i("div",{staticClass:"selected"},[i("ul",[i("li",{staticClass:"item"},[i("p",{staticClass:"version"},[t._v(t._s(t.product.name)+" "+t._s(1===t.version?"6GB+64GB 全网通":"4GB+64GB 移动4G")+" 深灰色")]),i("p",{staticClass:"price"},[t._v(t._s(t.product.price)+"元")])])]),i("p",{staticClass:"total-price"},[t._v("总计："+t._s(t.product.price)+"元")])]),i("div",{staticClass:"btn-group"},[i("button",{staticClass:"btn-huge add-cart",on:{click:t.addCart}},[t._v("加入购物车")]),t._m(2)])])],1)]),t._m(3),i("service-bar")],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("p",{staticClass:"default"},[i("i",{staticClass:"icon-loc"}),i("span",[t._v("北京 北京市 朝阳区 安定门街道")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"type"},[i("h3",{staticClass:"title"},[t._v("选择颜色")]),i("ul",[i("li",{staticClass:"item checked"},[i("i",{staticClass:"icon-color"}),i("span",{staticClass:"name"},[t._v("深空灰")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("button",{staticClass:"prefer"},[i("i",{staticClass:"icon-heart"}),i("span",[t._v("喜欢")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip"},[a("div",{staticClass:"container"},[a("h3",{staticClass:"title"},[t._v("价格说明")]),a("img",{attrs:{src:i("77bc"),alt:"价格说明"}})])])}],c=i("9f26"),n=i("984c"),r=i("6fe8"),o={name:"detail",components:{ProductParam:c["a"],ServiceBar:n["a"],swiper:r["swiper"],swiperSlide:r["swiperSlide"]},data:function(){return{productId:this.$route.params.id,version:1,product:{},swiperOption:{autoplay:!0,loop:!0,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-sliver",bulletActiveClass:"swiper-pagination-sliver-active"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},slideList:[i("6e79"),i("3c7f"),i("d4d9"),i("ea33")]}},mounted:function(){this.getProductInfo()},methods:{getProductInfo:function(){var t=this;this.axios.get("/products/".concat(this.productId)).then((function(s){t.product=s}))},addCart:function(){var t=this;this.axios.post("/carts",{productId:this.productId,selected:!0}).then((function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartTotalQuantity:0};t.$store.dispatch("saveCartCount",s.cartTotalQuantity),t.$router.push("/cart")}))}}},l=o,p=(i("7dc7"),i("2877")),d=Object(p["a"])(l,a,e,!1,null,"dc3a38e0",null);s["default"]=d.exports},bb7f:function(t,s,i){},d4d9:function(t,s,i){t.exports=i.p+"img/phone-3.747342e0.jpg"},ea33:function(t,s,i){t.exports=i.p+"img/phone-4.a2589e9b.jpg"}}]);