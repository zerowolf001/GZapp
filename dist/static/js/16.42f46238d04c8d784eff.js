webpackJsonp([16],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("01965bdf", content, true);

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "im"
    }
  }, [_c('head-top', {
    attrs: {
      "head-title": "需求通知",
      "go-back": "true"
    }
  }), _vm._v(" "), _c('foot-guide')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(115)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(155),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  mounted() {
    //获取用户信息
    //this.getUserInfo();

  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {
    /* ...mapState([
       'userInfo'
     ]),*/
  },
  methods: {
    /*...mapActions([
      'getUserInfo'
    ]),*/
  }
});

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, "#head_top{position:fixed}.title_head .title_text{color:#fff;font-size:1.2em}", "", {"version":3,"sources":["E:/app/GZapp/src/components/head.vue"],"names":[],"mappings":"AACA,UACE,cAAgB,CACjB,AACD,wBACE,WAAY,eAAiB,CAC9B","file":"head.vue","sourcesContent":["\n#head_top {\n  position: fixed;\n}\n.title_head .title_text{\n  color: #fff;font-size: 1.2em;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("2d0f18b1", content, true);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(42),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    attrs: {
      "id": "head_top"
    }
  }, [_vm._t("scanCode"), _vm._v(" "), (_vm.goBack) ? _c('section', {
    staticClass: "head_goback",
    on: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 20 32",
      "width": "100%",
      "height": "100%",
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.1"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#fff",
      "d": "M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": "#fff",
      "d": "M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v("返回")])]) : _vm._e(), _vm._v(" "), (_vm.headTitle) ? _c('section', {
    staticClass: "title_head"
  }, [_c('span', {
    staticClass: "title_text"
  }, [_vm._v(_vm._s(_vm.headTitle))])]) : _vm._e(), _vm._v(" "), _vm._t("logo"), _vm._v(" "), _vm._t("msg")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(47),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    attrs: {
      "id": "foot_guide"
    }
  }, [_c('section', {
    class: _vm.$route.path.indexOf('home') !== -1 ? 'guideActive' : 'guide_item',
    on: {
      "click": function($event) {
        _vm.goTo({
          path: '/home'
        })
      }
    }
  }, [_c('i', {
    staticClass: "icon icon_home"
  }), _vm._v(" "), _c('span', [_vm._v("首页")])]), _vm._v(" "), _c('section', {
    class: _vm.$route.path.indexOf('bedlist') !== -1 ? 'guideActive' : 'guide_item',
    on: {
      "click": function($event) {
        _vm.goTo({
          path: '/bedlist'
        })
      }
    }
  }, [_c('i', {
    staticClass: "icon icon_examine"
  }), _vm._v(" "), _c('span', [_vm._v("病床")])]), _vm._v(" "), _c('section', {
    class: _vm.$route.path.indexOf('im') !== -1 ? 'guideActive' : 'guide_item',
    on: {
      "click": function($event) {
        _vm.goTo({
          path: '/im'
        })
      }
    }
  }, [_c('i', {
    staticClass: "icon icon_msg"
  }), _vm._v(" "), _c('span', [_vm._v("需求")])]), _vm._v(" "), _c('section', {
    class: _vm.$route.path.indexOf('profile') !== -1 ? 'guideActive' : 'guide_item',
    on: {
      "click": function($event) {
        _vm.goTo({
          path: '/profile'
        })
      }
    }
  }, [_c('i', {
    staticClass: "icon icon_user"
  }), _vm._v(" "), _c('span', [_vm._v("个人")])])])
},staticRenderFns: []}

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_head__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footGuide__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footGuide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_footGuide__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



//  import {im} from '../service/getData'
//  import $ from 'webpack-zepto'

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      //        IMlistArr:[], //需求列表数据
    };
  },
  mounted() {
    /* this.initData();
     setInterval(()=>{
       this.initData();
       //console.log('刷新！');
     },5000);*/
  },
  components: {
    headTop: __WEBPACK_IMPORTED_MODULE_0__components_head___default.a,
    footGuide: __WEBPACK_IMPORTED_MODULE_1__components_footGuide___default.a
  },
  methods: {
    /*async initData() {
      //获取数据
      let res = await im(this.StationID);
      this.IMlistArr = [...res];
      for (let i = 0;i < res.length; i++) {
        $('li').attr('id',i);
        let tag = '#' + i;
        if (!$(tag).length) {
          let audio = document.getElementById('bgMusic');
          audio.play();
        }
      }
    },
    reload(){
      window.location.reload();
    },*/
  }
});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, "#im{background-color:#fff}.message{margin-top:1.95rem;width:100%;margin-bottom:2rem}.message ul li{border-bottom:1px solid #ededed;display:flex;text-overflow:ellipsis;position:relative;overflow:hidden}.message ul li>.avatar{display:inline-block;-webkit-transition:opacity .218s ease;transition:opacity .218s ease;filter:alpha(opacity=100);opacity:1;float:left;height:2rem;position:relative;margin:16px;margin-left:24px}.message ul li>.avatar span{width:2rem;height:2rem;font-size:.65rem;display:table-cell;align-items:center;text-align:center;vertical-align:middle;box-shadow:0 0 1px #fff;border-radius:50%;background-color:#47a7f0;color:#fff}.message ul li>.om .om_name{display:flex;margin-top:16px;justify-content:space-between;min-width:min-content}.message ul li>.om .om_name .name{vertical-align:middle;white-space:nowrap;align-items:center;line-height:1rem;font-size:.7rem;color:#404040;flex:0 0 200%;display:flex}.message ul li>.om .om_name .time{display:flex;flex:0 0 auto;justify-content:flex-end;box-sizing:border-box;position:relative;color:#404040;font-size:14px}.message ul li>.om .om_msg{display:flex;justify-content:space-between;min-width:min-content}.message ul li>.om .om_msg .msg_con{flex:0 0 200%;display:flex;vertical-align:middle;white-space:nowrap;align-items:center;color:#737373;font-size:.6rem;line-height:.8rem}.message ul li>.om .om_msg .msg_del{display:flex;flex:0 0 auto;justify-content:flex-end;box-sizing:border-box;position:relative;color:#999;font-size:14px}.message ul li>.om .om_msg .msg_del svg{fill:#666;width:12px;height:22px;margin-right:.2rem}", "", {"version":3,"sources":["E:/app/GZapp/src/page/im.vue"],"names":[],"mappings":"AACA,IACE,qBAAsB,CACvB,AACD,SACE,mBAAmB,AACnB,WAAY,AACZ,kBAAmB,CACpB,AACD,eACE,gCAAiC,AACjC,aAAc,AACd,uBAAwB,AACxB,kBAAmB,AACnB,eAAiB,CAClB,AACD,uBACE,qBAAsB,AACtB,sCAAuC,AACvC,8BAA+B,AAC/B,0BAA2B,AAC3B,UAAW,AACX,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,YAAa,AACb,gBAAkB,CACnB,AACD,4BACE,WAAY,AACZ,YAAY,AACZ,iBAAkB,AAClB,mBAAoB,AACpB,mBAAoB,AACpB,kBAAmB,AACnB,sBAAuB,AACvB,wBAAyB,AACzB,kBAAmB,AACnB,yBAA0B,AAC1B,UAAW,CACZ,AACD,4BACE,aAAc,AACd,gBAAgB,AAChB,8BAA+B,AAC/B,qBAAuB,CACxB,AACD,kCACE,sBAAuB,AACvB,mBAAoB,AACpB,mBAAoB,AACpB,iBAAkB,AAClB,gBAAgB,AAChB,cAAe,AACf,cAAe,AACf,YAAc,CACf,AACD,kCACE,aAAc,AACd,cAAe,AACf,yBAA0B,AAC1B,sBAAuB,AACvB,kBAAmB,AACnB,cAAe,AACf,cAAgB,CACjB,AACD,2BACE,aAAc,AACd,8BAA+B,AAC/B,qBAAuB,CACxB,AACD,oCACE,cAAe,AACf,aAAc,AACd,sBAAuB,AACvB,mBAAoB,AACpB,mBAAoB,AACpB,cAAe,AACf,gBAAgB,AAChB,iBAAmB,CACpB,AACD,oCACE,aAAc,AACd,cAAe,AACf,yBAA0B,AAC1B,sBAAuB,AACvB,kBAAmB,AACnB,WAAY,AACZ,cAAgB,CACjB,AACD,wCACE,UAAW,AACX,WAAW,AACX,YAAY,AACZ,kBAAmB,CACpB","file":"im.vue","sourcesContent":["\n#im {\n  background-color:#fff;\n}\n.message {\n  margin-top:1.95rem;\n  width: 100%;\n  margin-bottom:2rem;\n}\n.message ul li {\n  border-bottom: #ededed solid 1px;\n  display: flex;\n  text-overflow: ellipsis;\n  position: relative;\n  overflow: hidden;\n}\n.message ul li>.avatar {\n  display: inline-block;\n  -webkit-transition: opacity ease .218s;\n  transition: opacity ease .218s;\n  filter: alpha(opacity=100);\n  opacity: 1;\n  float: left;\n  height: 2rem;\n  position: relative;\n  margin: 16px;\n  margin-left: 24px;\n}\n.message ul li>.avatar span {\n  width: 2rem;\n  height:2rem;\n  font-size: .65rem;\n  display: table-cell;\n  align-items: center;\n  text-align: center;\n  vertical-align: middle;\n  box-shadow: 0 0 1px #fff;\n  border-radius: 50%;\n  background-color: #47a7f0;\n  color:#fff;\n}\n.message ul li>.om .om_name {\n  display: flex;\n  margin-top:16px;\n  justify-content: space-between;\n  min-width: min-content;\n}\n.message ul li>.om .om_name .name{\n  vertical-align: middle;\n  white-space: nowrap;\n  align-items: center;\n  line-height: 1rem;\n  font-size:.7rem;\n  color: #404040;\n  flex: 0 0 200%;\n  display: flex;\n}\n.message ul li>.om .om_name .time {\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  position: relative;\n  color: #404040;\n  font-size: 14px;\n}\n.message ul li>.om .om_msg {\n  display: flex;\n  justify-content: space-between;\n  min-width: min-content;\n}\n.message ul li>.om .om_msg .msg_con {\n  flex: 0 0 200%;\n  display: flex;\n  vertical-align: middle;\n  white-space: nowrap;\n  align-items: center;\n  color: #737373;\n  font-size:.6rem;\n  line-height: .8rem;\n}\n.message ul li>.om .om_msg .msg_del {\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  position: relative;\n  color: #999;\n  font-size: 14px;\n}\n.message ul li>.om .om_msg .msg_del svg {\n  fill: #666;\n  width:12px;\n  height:22px;\n  margin-right:.2rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=16.42f46238d04c8d784eff.js.map