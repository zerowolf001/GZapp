webpackJsonp([10],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, ".mt-195{margin-top:1.95rem}.banner img{display:block;width:100%}", "", {"version":3,"sources":["E:/app/GZapp/src/page/news.vue"],"names":[],"mappings":"AACA,QACE,kBAAoB,CACrB,AACD,YACE,cAAe,AACf,UAAY,CACb","file":"news.vue","sourcesContent":["\n.mt-195 {\n  margin-top: 1.95rem;\n}\n.banner img {\n  display: block;\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("dd79ecb8", content, true);

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "news"
    }
  }, [_c('head-top', {
    attrs: {
      "head-title": "信息公告",
      "go-back": "true"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "m-news-item mt-195"
  }, [_vm._m(0), _vm._v(" "), _c('ul', _vm._l((_vm.EXData), function(item) {
    return _c('li', [_c('h4', [_vm._v("[" + _vm._s(item.type) + "]" + _vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))])])
  }))]), _vm._v(" "), _c('foot-guide')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": "http://www.gzsrmyy.com/skin/images/dj_banner.jpg",
      "alt": ""
    }
  })])
}]}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(133)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(174),
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let baseUrl = 'http://192.168.1.104/';

/* harmony default export */ __webpack_exports__["a"] = (async (url = '', data = {}, type = 'POST', method = 'fetch') => {
  type = type.toUpperCase();
  url = baseUrl + url;

  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  if (window.fetch && method == 'fetch') {
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "cors",
      cache: "force-cache"
    };

    if (type == 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      });
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject();
      }

      let sendData = '';
      if (type == 'POST') {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response;
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
});

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_fetch__ = __webpack_require__(43);


/**
 * 获取首页病床列表
 */
const bedList = (StationID, nameOrNo) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/bedList/getPatient?StationID=' + StationID + '&nameOrNo=' + nameOrNo, {});
/* harmony export (immutable) */ __webpack_exports__["f"] = bedList;


/**
 * 获取病床详情
 */
const bedDetails = bedid => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/bedList/getDetail?FeeNo=' + bedid, {});
/* harmony export (immutable) */ __webpack_exports__["t"] = bedDetails;


/**
 * 获取病床医嘱
 * */
const bedAdvDetail = id => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/bedList/getAdviceDetail?feeNo=' + id, {});
/* harmony export (immutable) */ __webpack_exports__["e"] = bedAdvDetail;


/**
 * 获取病床用药详情
 * */
const medication = id => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/bedList/getMedication?feeNo=' + id, {});
/* harmony export (immutable) */ __webpack_exports__["d"] = medication;


/**
 * 检测帐号是否存在
 */
const accountLogin = (dnName, password) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/personal/pdaLogin', { dnName, password }, 'POST');
/* harmony export (immutable) */ __webpack_exports__["u"] = accountLogin;


/** 获取信息公告*/
const news = StationID => {
  let data = {
    limit: '20'
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/notice/getNotice?StationID=' + StationID, data);
};
/* harmony export (immutable) */ __webpack_exports__["q"] = news;


/** 获取信息详情 */
const newspage = id => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/notice/getNoticeDetail?xh=' + id, {});
/* harmony export (immutable) */ __webpack_exports__["p"] = newspage;


/** 获取检查安排 */
const examineData = StationID => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/inspect/getInspect?StationID=' + StationID, {});
/* harmony export (immutable) */ __webpack_exports__["o"] = examineData;


/** 获取出入院 */
const InOut = StationID => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/entryExitHospital/getEntryExit?StationID=' + StationID, {});
/* harmony export (immutable) */ __webpack_exports__["h"] = InOut;


/** 获取出入院详情*/
const ioDetail = id => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/entryExitHospital/getEntryExitDetail?xh=' + id, {});
/* harmony export (immutable) */ __webpack_exports__["g"] = ioDetail;


/** 获取手术安排 */
const opsData = StationID => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/operationList/getOperation?StationID=' + StationID, {});
/* harmony export (immutable) */ __webpack_exports__["n"] = opsData;


/** 获取手术详情 */
const opsDetail = id => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/operationList/getOperationDetail?xh=' + id, {});
/* harmony export (immutable) */ __webpack_exports__["m"] = opsDetail;


/** 获取需求信息 */
const im = () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/demandInfo/demanded?StationID=0397', {});
/* unused harmony export im */


/** 处理需求信息 */
const im_list = xh => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/demandInfo/demandStatusPDA?StationID=0397&xh=' + xh, {}, 'POST');
/* harmony export (immutable) */ __webpack_exports__["j"] = im_list;


/** 医嘱 */
const docadvData = (StationID, nameOrNum, chartNo, startTime, endTime) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/doctorAdvice/getAdvice?StationID=' + StationID + '&nameOrNum=' + nameOrNum + '&chartNo=' + chartNo + '&startTime=' + startTime + '&endTime=' + endTime, {});
/* harmony export (immutable) */ __webpack_exports__["i"] = docadvData;


/** 排班 */
const dutyListYS = (str, stationID) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/scheduling/getDoctorSchedule?date=' + str + '&StationID=' + stationID, {});
/* harmony export (immutable) */ __webpack_exports__["r"] = dutyListYS;

const dutyListHS = (str, stationID) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/scheduling/getNurseSchedule?date=' + str + '&StationID=' + stationID, {});
/* harmony export (immutable) */ __webpack_exports__["s"] = dutyListHS;


/** 个人中心 */
const me = dnName => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/personal/personalStatistic?dnName=' + dnName, {});
/* harmony export (immutable) */ __webpack_exports__["k"] = me;

const user = dnName => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/personal/personalInfo?dnName=' + dnName, {});
/* harmony export (immutable) */ __webpack_exports__["l"] = user;


const faq = () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/problem/getProblemList', {});
/* harmony export (immutable) */ __webpack_exports__["a"] = faq;

const suggest = dnName => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/satisfaction/getFeedBack?dnName=' + dnName, {});
/* harmony export (immutable) */ __webpack_exports__["b"] = suggest;

const mark = dnName => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/satisfaction/getPercent?dnName=' + dnName, {});
/* harmony export (immutable) */ __webpack_exports__["c"] = mark;


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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_head__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footGuide__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footGuide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_footGuide__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_getData__ = __webpack_require__(44);
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





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      EXData: null
    };
  },
  mounted() {
    this.initData();
  },
  components: {
    headTop: __WEBPACK_IMPORTED_MODULE_0__components_head___default.a,
    footGuide: __WEBPACK_IMPORTED_MODULE_1__components_footGuide___default.a
  },
  methods: {
    async initData() {
      let data = await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__service_getData__["q" /* news */])(this.StationID);
      this.EXData = [...data];
    }
  }
});

/***/ })

});
//# sourceMappingURL=10.b5132ef4ca4feee04b92.js.map