"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_print_print-rental-units-report_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/rental-units-table.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/rental-units-table.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/*
* rental-units-table
*/
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    rentalUnits: {
      type: Array
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_components_rental_units_table_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/components/rental-units-table.vue */ "./resources/js/views/pages/components/rental-units-table.vue");

/*
 * Print Tenant Contract
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "تقرير الشقق",
    meta: [{
      name: "description"
    }]
  },
  components: {
    AccStatementTablle: _pages_components_rental_units_table_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      name: 'Print Incoming Bonds',
      title: "تقرير الشقق",
      form: {},
      rentalUnits: [],
      settings: {}
    };
  },
  methods: {
    handlePrint: function handlePrint() {
      window.print();
    }
  },
  created: function created() {
    this.form = this.$route.params.form;
    this.rentalUnits = this.$route.params.rentalUnits;
    this.settings = this.$route.params.settings; // console.log(this.form);
  }
});

/***/ }),

/***/ "./resources/js/views/pages/components/rental-units-table.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/pages/components/rental-units-table.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rental_units_table_vue_vue_type_template_id_44e669a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rental-units-table.vue?vue&type=template&id=44e669a6& */ "./resources/js/views/pages/components/rental-units-table.vue?vue&type=template&id=44e669a6&");
/* harmony import */ var _rental_units_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rental-units-table.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/components/rental-units-table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _rental_units_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rental_units_table_vue_vue_type_template_id_44e669a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _rental_units_table_vue_vue_type_template_id_44e669a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/components/rental-units-table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/print/print-rental-units-report.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/pages/print/print-rental-units-report.vue ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_rental_units_report_vue_vue_type_template_id_62a5749f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-rental-units-report.vue?vue&type=template&id=62a5749f& */ "./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=template&id=62a5749f&");
/* harmony import */ var _print_rental_units_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-rental-units-report.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _print_rental_units_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _print_rental_units_report_vue_vue_type_template_id_62a5749f___WEBPACK_IMPORTED_MODULE_0__.render,
  _print_rental_units_report_vue_vue_type_template_id_62a5749f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/print/print-rental-units-report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/components/rental-units-table.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/pages/components/rental-units-table.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rental_units_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./rental-units-table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/rental-units-table.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rental_units_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_rental_units_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-rental-units-report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_rental_units_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/components/rental-units-table.vue?vue&type=template&id=44e669a6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/pages/components/rental-units-table.vue?vue&type=template&id=44e669a6& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rental_units_table_vue_vue_type_template_id_44e669a6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rental_units_table_vue_vue_type_template_id_44e669a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rental_units_table_vue_vue_type_template_id_44e669a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./rental-units-table.vue?vue&type=template&id=44e669a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/rental-units-table.vue?vue&type=template&id=44e669a6&");


/***/ }),

/***/ "./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=template&id=62a5749f&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=template&id=62a5749f& ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_rental_units_report_vue_vue_type_template_id_62a5749f___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_rental_units_report_vue_vue_type_template_id_62a5749f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_rental_units_report_vue_vue_type_template_id_62a5749f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-rental-units-report.vue?vue&type=template&id=62a5749f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=template&id=62a5749f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/rental-units-table.vue?vue&type=template&id=44e669a6&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/components/rental-units-table.vue?vue&type=template&id=44e669a6& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mb-0" }, [
    _vm.rentalUnits.length > 0
      ? _c("div", [
          _c(
            "table",
            { ref: "table1", staticClass: "table table-bordered table-hover" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.rentalUnits, function(rentalUnit) {
                  return _c("tr", { key: rentalUnit.id }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(rentalUnit.rental_unit_no))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(rentalUnit.property.property_name))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(rentalUnit.rental_unit_name))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(parseFloat(rentalUnit.rent_amount).toFixed(2))
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(rentalUnit.rental_unit_desc))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(rentalUnit.special_notes))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(rentalUnit.print_notes))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      rentalUnit.is_rented
                        ? _c("span", [_vm._v("مؤجرة")])
                        : _c("span", [_vm._v("غير مؤجرة")])
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      : _c("div", [
          _c("p", { staticClass: "text-center" }, [
            _vm._v("لا توجد سجلات للعرض.")
          ])
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
          _vm._v("رقم الشقة")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("العقار")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("أسم الشقة")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("الإيجار السنوي")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("وصف الوحدة")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("مواصفات خاصة")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("مواصفات مطبوعة")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("الحالة")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=template&id=62a5749f&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-rental-units-report.vue?vue&type=template&id=62a5749f& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        _c("h1", { staticClass: "text-center" }, [_vm._v("تقرير الشقق")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _vm.form.landlordName == "" || _vm.form.landlordName == null
              ? _c("p", [
                  _vm._v(
                    "\n                    أسم العقار: \n                    " +
                      _vm._s(_vm.form.propertyName) +
                      "\n                "
                  )
                ])
              : _c("p", [
                  _vm._v(
                    "\n                    أسم المالك: \n                    " +
                      _vm._s(_vm.form.landlordName) +
                      "\n                "
                  )
                ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("p", [
              _vm._v("\n                    الحالة: \n                    "),
              _vm.form.status == "all"
                ? _c("span", [_vm._v("الكل")])
                : _vm.form.status == "rented"
                ? _c("span", [_vm._v("مؤجرة")])
                : _c("span", [_vm._v("غير مؤجرة")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("AccStatementTablle", { attrs: { rentalUnits: _vm.rentalUnits } }),
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