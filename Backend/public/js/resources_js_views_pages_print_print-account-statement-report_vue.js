"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_print_print-account-statement-report_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/*
* account-statement-report-table
*/
/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "تقرير كشف حساب",
    meta: [{
      name: "description"
    }]
  },
  data: function data() {
    return {
      name: 'Print Account Statement',
      title: "تقرير كشف حساب",
      vouchers: {}
    };
  },
  methods: {
    handlePrint: function handlePrint() {
      window.print();
    }
  },
  created: function created() {
    this.vouchers = this.$route.params.vouchers;
    console.log(this.generalVoucher);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tenant_contract p[data-v-b8cc7844] {\n    font-size: 34px;\n    font-weight: bold;\n}\n.thin_border[data-v-b8cc7844] {\n    border: 1px solid black;\n}\n.note_rounded[data-v-b8cc7844] {\n    border: 1px solid black;\n    border-radius: 30px;\n    height: 150px;\n}\n.font_size_30 p[data-v-b8cc7844] {\n    font-size: 30px;\n}\np.custome_font_size_1[data-v-b8cc7844] {\n    font-size: 23px;\n}\np.custome_font_size_2[data-v-b8cc7844] {\n    font-size:20px;\n    direction: ltr;\n}\n\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_style_index_0_id_b8cc7844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_style_index_0_id_b8cc7844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_style_index_0_id_b8cc7844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/pages/print/print-account-statement-report.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-account-statement-report.vue ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_account_statement_report_vue_vue_type_template_id_b8cc7844_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true& */ "./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true&");
/* harmony import */ var _print_account_statement_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-account-statement-report.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=script&lang=js&");
/* harmony import */ var _print_account_statement_report_vue_vue_type_style_index_0_id_b8cc7844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css& */ "./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _print_account_statement_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _print_account_statement_report_vue_vue_type_template_id_b8cc7844_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _print_account_statement_report_vue_vue_type_template_id_b8cc7844_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b8cc7844",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/print/print-account-statement-report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-account-statement-report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css& ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_style_index_0_id_b8cc7844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=style&index=0&id=b8cc7844&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_template_id_b8cc7844_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_template_id_b8cc7844_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_account_statement_report_vue_vue_type_template_id_b8cc7844_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-account-statement-report.vue?vue&type=template&id=b8cc7844&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    _c("div", { staticClass: "container" }, [
      _c(
        "h1",
        {
          staticClass: "text-center font-weight-bold",
          staticStyle: { "font-size": "40px" }
        },
        [_vm._v("كشف الحساب")]
      ),
      _vm._v(" "),
      _vm.vouchers["vouchers"][0]
        ? _c("h3", { staticClass: "text-center" }, [
            _vm._v(
              _vm._s(
                _vm.vouchers["vouchers"][0]["account_guide"]["title_arabic"]
              ) +
                " " +
                _vm._s(
                  _vm.vouchers["vouchers"][0]["account_guide"][
                    "account_main_code"
                  ]
                )
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.vouchers["vouchers"][0]
        ? _c("h3", { staticClass: "text-center" }, [
            _vm._v(
              " التاريخ من " +
                _vm._s(_vm.vouchers["vouchers"][0]["date"]) +
                " --  الي" +
                _vm._s(_vm.vouchers["date_end"]) +
                " "
            )
          ])
        : _c("h3", { staticClass: "text-center" }, [
            _vm._v(
              " التاريخ من " +
                _vm._s(_vm.vouchers["date_start"]) +
                " -- الي" +
                _vm._s(_vm.vouchers["date_end"]) +
                " "
            )
          ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card", attrs: { id: "error_area" } }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "table",
                {
                  ref: "table1",
                  staticClass: "table table-bordered table-hover"
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$t("message.date")))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$t("message.accountName")))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$t("message.operationDescription")))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$t("message.notes")))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$t("message.debit")))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$t("message.credit")))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$t("message.balance")))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _c("tr", [
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.vouchers["previousMonth"]))
                        ]),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("message.opening_balance")))
                        ]),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.vouchers["totalOld"]))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.vouchers["vouchers"], function(voucher) {
                        return _c("tr", [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(voucher["date"]))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(voucher["account_guide"]["title_arabic"])
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(
                                voucher["voucher"]["voucher_type"][
                                  "title_arabic"
                                ]
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(voucher["comment"]))
                          ]),
                          _vm._v(" "),
                          voucher["debit"] != ""
                            ? _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(voucher["debit"]))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          voucher["debit"] == ""
                            ? _c("td", { staticClass: "text-center" }, [
                                _vm._v("0")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          voucher["credit"] != ""
                            ? _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(voucher["credit"]))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          voucher["credit"] == ""
                            ? _c("td", { staticClass: "text-center" }, [
                                _vm._v("0")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          voucher["logs"] >= 0 || voucher["logs"] <= 0
                            ? _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(voucher["logs"]))
                              ])
                            : _vm._e()
                        ])
                      }),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("message.total")))
                        ]),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.vouchers["totalDebit"]))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.vouchers["totalCredit"]))
                        ]),
                        _vm._v(" "),
                        _c("td")
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.vouchers["date_end"]))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("message.emptyMovement")))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }),
                        _vm._v(" "),
                        _vm.vouchers["totalDebit"] > _vm.vouchers["totalCredit"]
                          ? _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.vouchers["totalDebit"] -
                                    _vm.vouchers["totalCredit"]
                                )
                              )
                            ])
                          : _c("td", { staticClass: "text-center" }, [
                              _vm._v("0")
                            ]),
                        _vm._v(" "),
                        _vm.vouchers["totalCredit"] > _vm.vouchers["totalDebit"]
                          ? _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.vouchers["totalCredit"] -
                                    _vm.vouchers["totalDebit"]
                                )
                              )
                            ])
                          : _c("td", { staticClass: "text-center" }, [
                              _vm._v("0")
                            ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" })
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.vouchers["date_end"]))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("message.closing_balance")))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.vouchers["total"]))
                        ])
                      ])
                    ],
                    2
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);