webpackJsonp([23],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("1127a040", content, true);

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "setServer"
  }, [_c('div', {
    staticClass: "login-header width-full"
  }, [_c('div', {
    staticClass: "container width-full header-logo clearfix"
  }, [_c('svg', {
    staticClass: "octicon",
    attrs: {
      "aria-hidden": "true",
      "height": "48",
      "version": "1.1",
      "viewBox": "0 0 16 16",
      "width": "48"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "setContainer"
  }, [_c('div', {
    staticClass: "active-form"
  }, [_c('form', {
    staticClass: "serverForm"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "active-form-body"
  }, [_c('label', {
    attrs: {
      "for": "ip_Address"
    }
  }, [_vm._v("服务器IP")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-block",
    attrs: {
      "type": "number",
      "id": "ip_Address",
      "tabindex": "1"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "port_Server"
    }
  }, [_vm._v("端口")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-block",
    attrs: {
      "type": "number",
      "id": "port_Server",
      "tabindex": "2"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "confirm"
  }, [_c('a', {
    staticClass: "btn btn-primary btn-sub"
  }, [_vm._v("确 定")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-off btn-cancel",
    on: {
      "click": function($event) {
        _vm.$router.go(-1)
      }
    }
  }, [_vm._v("取 消")])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "active-form-header"
  }, [_c('h1', [_vm._v("服务器设置")])])
}]}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(115)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(81),
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  props: ['alertText']
});

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(52),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MessageToast"
  }, [_c('p', {
    staticClass: "tip_text"
  }, [_vm._v(_vm._s(_vm.alertText))])])
},staticRenderFns: []}

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_alertTip__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_alertTip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_alertTip__);
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

//  import headTop from '../components/head'


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  components: {
    //      headTop,
    alertTip: __WEBPACK_IMPORTED_MODULE_0__components_alertTip___default.a
  }
});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, ".setServer{position:relative}.setContainer a{text-decoration:none}", "", {"version":3,"sources":["E:/app/GZapp/src/page/setServer.vue"],"names":[],"mappings":"AACA,WACE,iBAAmB,CACpB,AACD,gBACE,oBAAsB,CACvB","file":"setServer.vue","sourcesContent":["\n.setServer {\n  position: relative;\n}\n.setContainer a {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=23.122a43daef22464d5879.js.map