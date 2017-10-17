webpackJsonp([4],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("7f8711b1", content, true);

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "im_list"
    }
  }, [_c('head-top', {
    attrs: {
      "head-title": "处理成功",
      "go-back": "true"
    }
  }), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h4', [_vm._v("处理成功!")])])
}]}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(114)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(154),
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
/* harmony export (immutable) */ __webpack_exports__["r"] = bedDetails;


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
/* harmony export (immutable) */ __webpack_exports__["s"] = accountLogin;


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
const dutyList = (date, stationID) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__config_fetch__["a" /* default */])('xihealthcare/scheduling/getNurseSchedule', {});
/* unused harmony export dutyList */


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

/***/ 53:
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

const DEF_CHECKED_COLOR = '#75C791';
const DEF_UNCHEKED_COLOR = '#bfcbd9';

const DEF_CHECKED_LABEL = '是';
const DEF_UNCHECKED_LABEL = '否';

const margin = 3;

const contains = (object, title) => {
  return typeof object === 'object' && object.hasOwnProperty(title);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    sync: {
      type: Boolean,
      default: false
    },
    color: {
      type: [String, Object],
      validator(value) {
        return typeof value === 'object' ? value.checked || value.unchecked : typeof value === 'string';
      }
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator(value) {
        return typeof value === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
      }
    },
    height: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 50
    }
  },
  computed: {
    className() {
      let { toggled, disabled } = this;

      return ['v-switch', { toggled, disabled }];
    },

    ariaChecked() {
      return this.toggled.toString();
    },

    style() {
      let { width, height } = this;
      let distance = width - height + margin;

      return {
        '--h': height + 'px',
        '--w': width + 'px',
        '--d': distance + 'px'
      };
    },

    colorChecked() {
      if (typeof this.color !== 'object') {
        return this.color || DEF_CHECKED_COLOR;
      }

      return contains(this.color, 'checked') ? this.color.checked : DEF_CHECKED_COLOR;
    },

    colorUnchecked() {
      return contains(this.color, 'unchecked') ? this.color.unchecked : DEF_UNCHEKED_COLOR;
    },

    colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },

    labelChecked() {
      return contains(this.labels, 'checked') ? this.labels.checked : DEF_CHECKED_LABEL;
    },

    labelUnchecked() {
      return contains(this.labels, 'unchecked') ? this.labels.unchecked : DEF_UNCHECKED_LABEL;
    },

    coreStyle() {
      return {
        'background-color': this.colorCurrent
      };
    }
  },
  watch: {
    value(value) {
      if (this.sync) {
        this.toggled = value;
      }
    }
  },
  data() {
    return {
      toggled: this.value
    };
  },
  methods: {
    toggle(event) {
      this.toggled = !this.toggled;
      this.$emit('change', { value: this.toggled, srcEvent: event });
    }
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, ".v-switch{display:inline-block;position:relative;vertical-align:middle;user-select:none;font-size:12px;cursor:pointer}.v-switch,.v-switch .v-switch-label{line-height:22px;height:22px}.v-switch .v-switch-input{display:none}.v-switch .v-switch-label{position:absolute;top:0;font-weight:600;color:#fff}.v-switch .v-switch-core{margin:0;display:inline-block;position:relative;outline:0;box-sizing:border-box;transition:border-color .3s,background-color .3s;user-select:none}.v-switch .v-switch-core:before{display:block;position:absolute;overflow:hidden;top:0;left:0;z-index:20;transform:translate(3px,3px);transition:transform .3s;border-radius:100%;background-color:#fff;content:\"\";width:16px;height:16px}.v-switch .v-switch-label.v-right{right:15px}.v-switch .v-switch-label.v-left{left:15px}.v-switch.toggled .v-switch-core:before,.v-switch .v-switch-core.toggled:before{transform:translate(30px,3px)}.v-switch .v-switch-core.disabled{pointer-events:none;cursor:not-allowed;opacity:.6}.v-switch .v-switch-label{line-height:22px;height:22px}.v-switch .v-switch-core{border-radius:999px;width:50px;height:22px}.v-switch.v-switch-core:before{width:16px;height:16px}", "", {"version":3,"sources":["E:/app/GZapp/src/components/switch.vue"],"names":[],"mappings":"AACA,UACE,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,iBAAkB,AAClB,eAAgB,AAChB,cAAgB,CACjB,AACD,oCACE,iBAAkB,AAClB,WAAa,CACd,AACD,0BACE,YAAc,CACf,AACD,0BACE,kBAAmB,AACnB,MAAO,AACP,gBAAiB,AACjB,UAAa,CACd,AACD,yBACE,SAAU,AACV,qBAAsB,AACtB,kBAAmB,AACnB,UAAW,AACX,sBAAuB,AACvB,iDAAmD,AACnD,gBAAkB,CACnB,AACD,gCACE,cAAe,AACf,kBAAmB,AACnB,gBAAiB,AACjB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,6BAA+B,AAC/B,yBAA0B,AAC1B,mBAAoB,AACpB,sBAAuB,AACvB,WAAY,AAKZ,WAAwB,AACxB,WAAyB,CAH1B,AAKD,kCACE,UAAY,CACb,AACD,iCACE,SAAW,CACZ,AAID,gFACM,6BAAgC,CACrC,AACD,kCACI,oBAAqB,AACrB,mBAAoB,AACpB,UAAa,CAChB,AACD,0BACI,iBAAkB,AAClB,WAAa,CAChB,AACD,yBACE,oBAAqB,AACrB,WAAY,AACZ,WAAa,CACd,AACD,+BACE,WAAwB,AACxB,WAAyB,CAC1B","file":"switch.vue","sourcesContent":["\n.v-switch {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  user-select: none;\n  font-size: 12px;\n  cursor: pointer;\n}\n.v-switch .v-switch-label, .v-switch {\n  line-height: 22px;\n  height: 22px;\n}\n.v-switch .v-switch-input {\n  display: none;\n}\n.v-switch .v-switch-label {\n  position: absolute;\n  top: 0;\n  font-weight: 600;\n  color: white;\n}\n.v-switch .v-switch-core {\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  outline: 0;\n  box-sizing: border-box;\n  transition: border-color .3s, background-color .3s;\n  user-select: none;\n}\n.v-switch .v-switch-core:before {\n  display: block;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  transform: translate(3px, 3px);\n  transition: transform .3s;\n  border-radius: 100%;\n  background-color: #fff;\n  content: '';\n  width: 16px;\n  height: 16px;\n}\n.v-switch .v-switch-core:before {\n  width: calc(22px - 6px);\n  height: calc(22px - 6px);\n}\n.v-switch .v-switch-label.v-right {\n  right: 15px;\n}\n.v-switch .v-switch-label.v-left {\n  left: 15px;\n}\n.v-switch.toggled .v-switch-core:before {\n  transform: translate(30px,3px);\n}\n.v-switch .v-switch-core.toggled:before {\n      transform: translate(30px, 3px);\n}\n.v-switch .v-switch-core.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n    opacity: 0.6;\n}\n.v-switch .v-switch-label {\n    line-height: 22px;\n    height: 22px;\n}\n.v-switch .v-switch-core {\n  border-radius: 999px;\n  width: 50px;\n  height: 22px;\n}\n.v-switch.v-switch-core:before {\n  width: calc(22px - 6px);\n  height: calc(22px - 6px);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("571237be", content, true);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.className,
    style: (_vm.style),
    attrs: {
      "role": "checkbox"
    }
  }, [_c('input', {
    staticClass: "v-switch-input",
    attrs: {
      "type": "checkbox"
    },
    on: {
      "change": function($event) {
        $event.stopPropagation();
        _vm.toggle($event)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "v-switch-core",
    style: (_vm.coreStyle),
    attrs: {
      "aria-checked": _vm.ariaChecked
    }
  }), _vm._v(" "), (_vm.labels) ? _c('div', [(_vm.toggled) ? _c('span', {
    staticClass: "v-switch-label v-left"
  }, [_vm._v(_vm._s(_vm.labelChecked))]) : _c('span', {
    staticClass: "v-switch-label v-right"
  }, [_vm._v(_vm._s(_vm.labelUnchecked))])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_getData__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_head__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_switch_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_switch_vue__);
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
      xh: null
    };
  },
  created() {
    this.xh = this.$route.query.id;
    setTimeout(() => {
      this.$router.go(-1);
    }, 2000);
  },
  mounted() {
    this.initData();
  },
  components: {
    headTop: __WEBPACK_IMPORTED_MODULE_1__components_head___default.a,
    ToggleButton: __WEBPACK_IMPORTED_MODULE_2__components_switch_vue___default.a
  },
  computed: {},
  methods: {
    async initData() {
      this.bedDetailData = await __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__service_getData__["j" /* im_list */])(this.xh);
    }
  }
});

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(true);
// imports


// module
exports.push([module.i, "#im_list h4{margin-top:3rem;padding:2rem;font-size:.7rem;color:#404040}", "", {"version":3,"sources":["E:/app/GZapp/src/page/im_list.vue"],"names":[],"mappings":"AACA,YACE,gBAAgB,AAChB,aAAa,AACb,gBAAiB,AACjB,aAAc,CACf","file":"im_list.vue","sourcesContent":["\n#im_list h4{\n  margin-top:3rem;\n  padding:2rem;\n  font-size: .7rem;\n  color:#404040;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=4.d11994375a52a479b8f2.js.map