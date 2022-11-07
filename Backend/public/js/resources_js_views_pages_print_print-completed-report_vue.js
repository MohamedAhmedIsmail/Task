(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_print_print-completed-report_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/report-completed-table.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/report-completed-table.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);


/*
* tenants-table
*/
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    rentPayments: {
      type: Array
    },
    totalRentPayments: {
      type: Number
    },
    taxRentPayments: {
      type: Array
    },
    totalTaxRentPayments: {
      type: Number
    },
    totalTaxValue: {
      type: Number
    },
    landlordVoucherReceipts: {
      type: Array
    },
    totalLandlordVoucherReceipts: {
      type: Number
    },
    landlordVoucherPayments: {
      type: Array
    },
    totalLandlordVoucherPayments: {
      type: Number
    }
  },
  computed: {
    hasResult: function hasResult() {
      return this.rentPayments.length != 0 || this.taxRentPayments.length != 0 || this.landlordVoucherReceipts.length != 0 || this.landlordVoucherPayments.length != 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-completed-report.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-completed-report.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_components_report_completed_table_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/components/report-completed-table.vue */ "./resources/js/views/pages/components/report-completed-table.vue");


/*
 * print-completed-report
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "تقرير شامل",
    meta: [{
      name: "description"
    }]
  },
  components: {
    CompletedTablle: _pages_components_report_completed_table_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      name: 'Print Completed Report',
      title: "تقرير شامل",
      form: {},
      settings: {},
      options: [],
      rentPayments: [],
      totalRentPayments: 0,
      taxRentPayments: [],
      totalTaxRentPayments: 0,
      totalTaxValue: 0,
      landlordVoucherReceipts: [],
      totalLandlordVoucherReceipts: 0,
      landlordVoucherPayments: [],
      totalLandlordVoucherPayments: 0,
      selectedOptionsAr: [],
      selectedOptionsArStatment: ''
    };
  },
  methods: {
    handlePrint: function handlePrint() {
      window.print();
    }
  },
  created: function created() {
    this.form = this.$route.params.form;
    this.settings = this.$route.params.settings;
    this.options = this.$route.params.options;
    this.rentPayments = this.$route.params.rentPayments;
    this.totalRentPayments = this.$route.params.totalRentPayments;
    this.taxRentPayments = this.$route.params.taxRentPayments;
    this.totalTaxRentPayments = this.$route.params.totalTaxRentPayments;
    this.totalTaxValue = this.$route.params.totalTaxValue;
    this.landlordVoucherReceipts = this.$route.params.landlordVoucherReceipts;
    this.totalLandlordVoucherReceipts = this.$route.params.totalLandlordVoucherReceipts;
    this.landlordVoucherPayments = this.$route.params.landlordVoucherPayments;
    this.totalLandlordVoucherPayments = this.$route.params.totalLandlordVoucherPayments;
    var that = this;
    var selectedOptions = that.form.selectedOptions;

    var _loop = function _loop(index) {
      var element = selectedOptions[index];

      var arTxt = that._.filter(that.options, function (el) {
        return el.value == element;
      });

      that.selectedOptionsAr.push(arTxt[0].text);

      if (index === selectedOptions.length - 1) {
        that.selectedOptionsArStatment += arTxt[0].text;
      } else {
        that.selectedOptionsArStatment += arTxt[0].text + ' و ';
      }
    };

    for (var index = 0; index < selectedOptions.length; index++) {
      _loop(index);
    } // console.log(that.selectedOptionsArStatment)
    // console.log(that.selectedOptionsAr);

  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a number');
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./resources/js/views/pages/components/report-completed-table.vue":
/*!************************************************************************!*\
  !*** ./resources/js/views/pages/components/report-completed-table.vue ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _report_completed_table_vue_vue_type_template_id_64f69692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-completed-table.vue?vue&type=template&id=64f69692& */ "./resources/js/views/pages/components/report-completed-table.vue?vue&type=template&id=64f69692&");
/* harmony import */ var _report_completed_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-completed-table.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/components/report-completed-table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _report_completed_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_completed_table_vue_vue_type_template_id_64f69692___WEBPACK_IMPORTED_MODULE_0__.render,
  _report_completed_table_vue_vue_type_template_id_64f69692___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/components/report-completed-table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/print/print-completed-report.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/pages/print/print-completed-report.vue ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_completed_report_vue_vue_type_template_id_47397de2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-completed-report.vue?vue&type=template&id=47397de2& */ "./resources/js/views/pages/print/print-completed-report.vue?vue&type=template&id=47397de2&");
/* harmony import */ var _print_completed_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-completed-report.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/print/print-completed-report.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _print_completed_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _print_completed_report_vue_vue_type_template_id_47397de2___WEBPACK_IMPORTED_MODULE_0__.render,
  _print_completed_report_vue_vue_type_template_id_47397de2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/print/print-completed-report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/components/report-completed-table.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/pages/components/report-completed-table.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_completed_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report-completed-table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/report-completed-table.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_completed_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/print/print-completed-report.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-completed-report.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_completed_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-completed-report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-completed-report.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_completed_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/components/report-completed-table.vue?vue&type=template&id=64f69692&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/pages/components/report-completed-table.vue?vue&type=template&id=64f69692& ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_completed_table_vue_vue_type_template_id_64f69692___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_completed_table_vue_vue_type_template_id_64f69692___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_completed_table_vue_vue_type_template_id_64f69692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report-completed-table.vue?vue&type=template&id=64f69692& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/report-completed-table.vue?vue&type=template&id=64f69692&");


/***/ }),

/***/ "./resources/js/views/pages/print/print-completed-report.vue?vue&type=template&id=47397de2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-completed-report.vue?vue&type=template&id=47397de2& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_completed_report_vue_vue_type_template_id_47397de2___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_completed_report_vue_vue_type_template_id_47397de2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_completed_report_vue_vue_type_template_id_47397de2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-completed-report.vue?vue&type=template&id=47397de2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-completed-report.vue?vue&type=template&id=47397de2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/report-completed-table.vue?vue&type=template&id=64f69692&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/report-completed-table.vue?vue&type=template&id=64f69692& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-0" }, [
    _vm.hasResult
      ? _c("div", [
          _c(
            "table",
            { ref: "table1", staticClass: "table table-bordered table-hover" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.rentPayments, function(item) {
                    return _c("tr", { key: item.id }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.date_gregory))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.payment_number))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("سند إيجار")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.id))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.tenant.tenant_name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(parseFloat(item.rent_amount).toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("0")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.amount_note_statment))
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm.rentPayments.length > 0
                    ? _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "text-right font-weight-bold",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("مجموع سندات الإيجار")]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [
                            _vm._v(
                              _vm._s(
                                parseFloat(_vm.totalRentPayments).toFixed(2)
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("td")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.taxRentPayments, function(item) {
                    return _c("tr", { key: item.id }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.date_gregory))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.payment_number))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("سند إيجار ضريبي")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.id))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.tenant.tenant_name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(parseFloat(item.rent_amount).toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(parseFloat(item.tax_value).toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.amount_note_statment))
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm.taxRentPayments.length > 0
                    ? _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "text-right font-weight-bold",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("مجموع سندات الإيجار الضريبية")]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [
                            _vm._v(
                              _vm._s(
                                parseFloat(_vm.totalTaxRentPayments).toFixed(2)
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [
                            _vm._v(
                              _vm._s(parseFloat(_vm.totalTaxValue).toFixed(2))
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.landlordVoucherReceipts, function(item) {
                    return _c("tr", { key: item.id }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.voucher_date_gregory))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.voucher_number))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("سند قبض مالك")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.id))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.landlord.landlord_name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(parseFloat(item.amount).toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("0")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.amount_note_statment))
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm.landlordVoucherReceipts.length > 0
                    ? _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "text-right font-weight-bold",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("مجموع سندات قبض المالك")]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [
                            _vm._v(
                              _vm._s(
                                parseFloat(
                                  _vm.totalLandlordVoucherReceipts
                                ).toFixed(2)
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("td")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.landlordVoucherPayments, function(item) {
                    return _c("tr", { key: item.id }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.voucher_date_gregory))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.voucher_number))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("سند صرف مالك")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.id))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.landlord.landlord_name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(parseFloat(item.amount).toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("0")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.amount_note_statment))
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm.landlordVoucherPayments.length > 0
                    ? _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "text-right font-weight-bold",
                            attrs: { colspan: "5" }
                          },
                          [_vm._v("مجموع سندات صرف المالك")]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [
                            _vm._v(
                              _vm._s(
                                parseFloat(
                                  _vm.totalLandlordVoucherPayments
                                ).toFixed(2)
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center font-weight-bold" },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("td")
                      ])
                    : _vm._e()
                ],
                2
              )
            ]
          )
        ])
      : _c("div", [
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br")
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("تاريخ السند")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("رقم السند")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("نوع السند")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("رقم العميل")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("اسم العميل")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("المبلغ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("الضريبة")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("ملاحظات")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-completed-report.vue?vue&type=template&id=47397de2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-completed-report.vue?vue&type=template&id=47397de2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tenant_contract" }, [
    _c("div", { staticClass: "print-nav" }, [
      _c(
        "a",
        {
          staticClass: "left btn btn-outline-primary",
          on: {
            click: function($event) {
              return _vm.$router.back()
            }
          }
        },
        [_c("i", { staticClass: "mdi mdi-backspace" })]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "right btn btn-outline-primary",
          on: { click: _vm.handlePrint }
        },
        [_c("i", { staticClass: "mdi mdi-printer" })]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("br"),
        _vm._v(" "),
        _c("b-img", {
          attrs: {
            src: _vm.settings.contract_header,
            fluid: "",
            alt: "Responsive image"
          }
        }),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            تقرير شامل: \n            " +
              _vm._s(_vm.selectedOptionsArStatment) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("p", [
                  _vm._v(
                    "\n                            للفترة من: \n                            "
                  ),
                  _c("span", { attrs: { dir: "ltr" } }, [
                    _vm._v(_vm._s(_vm.form.date_start))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("p", [
                  _vm._v(
                    "\n                            الى: \n                            "
                  ),
                  _c("span", { attrs: { dir: "ltr" } }, [
                    _vm._v(_vm._s(_vm.form.date_end))
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("CompletedTablle", {
          attrs: {
            rentPayments: _vm.rentPayments,
            totalRentPayments: _vm.totalRentPayments,
            taxRentPayments: _vm.taxRentPayments,
            totalTaxRentPayments: _vm.totalTaxRentPayments,
            totalTaxValue: _vm.totalTaxValue,
            landlordVoucherReceipts: _vm.landlordVoucherReceipts,
            totalLandlordVoucherReceipts: _vm.totalLandlordVoucherReceipts,
            landlordVoucherPayments: _vm.landlordVoucherPayments,
            totalLandlordVoucherPayments: _vm.totalLandlordVoucherPayments
          }
        }),
        _vm._v(" "),
        _c("br")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);