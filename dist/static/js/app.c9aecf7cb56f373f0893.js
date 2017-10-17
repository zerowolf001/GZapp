webpackJsonp([25],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(9);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const login = r => __webpack_require__.e/* require.ensure */(22).then((() => r(__webpack_require__(27))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const home = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(23))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const setServer = r => __webpack_require__.e/* require.ensure */(23).then((() => r(__webpack_require__(36))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bedlist = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(18))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bed = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(15))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const duty = r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(21))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const stat = r => __webpack_require__.e/* require.ensure */(15).then((() => r(__webpack_require__(37))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const news = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(29))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const newspage = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(30))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const examine = r => __webpack_require__.e/* require.ensure */(21).then((() => r(__webpack_require__(22))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const ops = r => __webpack_require__.e/* require.ensure */(14).then((() => r(__webpack_require__(31))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const opsdetail = r => __webpack_require__.e/* require.ensure */(19).then((() => r(__webpack_require__(32))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const profile = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(35))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const im = r => __webpack_require__.e/* require.ensure */(16).then((() => r(__webpack_require__(24))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const im_list = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(25))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const docadv = r => __webpack_require__.e/* require.ensure */(17).then((() => r(__webpack_require__(20))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const advList = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(19))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const io = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(14))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const iodetail = r => __webpack_require__.e/* require.ensure */(20).then((() => r(__webpack_require__(26))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bedSearch = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(16))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bedAdv = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(17))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const medication = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(28))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const csr = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(33))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const faq = r => __webpack_require__.e/* require.ensure */(18).then((() => r(__webpack_require__(34))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/setServer',
    name: 'setServer',
    component: setServer
  }, {
    path: '/bed',
    name: 'bed',
    component: bed
  }, {
    path: '/duty',
    name: 'duty',
    component: duty
  }, {
    path: '/stat',
    name: 'stat',
    component: stat
  }, {
    path: '/news',
    name: 'news',
    component: news
  }, {
    path: '/newspage',
    name: 'newspage',
    component: newspage
  }, {
    path: '/examine',
    name: 'examine',
    component: examine
  }, {
    path: '/ops',
    name: 'ops',
    component: ops
  }, {
    path: '/profile',
    name: profile,
    component: profile
  }, {
    path: '/faq',
    name: faq,
    component: faq
  }, {
    path: '/im',
    name: 'im',
    component: im
  }, {
    path: '/im_list',
    name: 'im_list',
    component: im_list
  }, {
    path: '/docadv',
    name: 'docadv',
    component: docadv
  }, {
    path: '/advList',
    name: 'advList',
    component: advList

  }, {
    path: '/io',
    name: 'io',
    component: io
  }, {
    path: '/bedlist',
    name: 'bedlist',
    component: bedlist
  }, {
    path: '/bedSearch',
    name: 'bedSearch',
    component: bedSearch
  }, {
    path: '/bedAdv',
    name: 'bedAdv',
    component: bedAdv
  }, {
    path: '/medication',
    name: 'medication',
    component: medication
  }, {
    path: '/iodetail',
    name: 'iodetail',
    component: iodetail
  }, {
    path: '/opsdetail',
    name: 'opsdetail',
    component: opsdetail
  }, {
    path: '/csr',
    name: 'csr',
    component: csr
  }]
}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(7)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(8),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */,
/* 5 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app'
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_rem__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_rem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_rem__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": "router-fade",
      "mode": "out-in"
    }
  }, [_c('keep-alive', [(_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e()], 1)], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "router-fade",
      "mode": "out-in"
    }
  }, [(!_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ })
],[6]);
//# sourceMappingURL=app.c9aecf7cb56f373f0893.js.map