"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_print_print-tenant-contract_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/*
 * Print Tenant Contract
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "عقد مستأجر",
    meta: [{
      name: "description"
    }]
  },
  data: function data() {
    return {
      name: 'Print Tenant Contract',
      title: "عقد مستأجر",
      tenant: {},
      settings: {},
      rentalEntitlement: ''
    };
  },
  methods: {
    handlePrint: function handlePrint() {
      window.print();
    }
  },
  created: function created() {
    this.tenant = this.$route.params.contract;
    this.settings = this.$route.params.settings;
    var start_date = this.tenant.date_type === 'gregory' ? this.moment(this.tenant.rent_start_date_gregory, 'YYYY/MM/DD').date() : this.moment(this.tenant.rent_start_date_hijri, 'iYYYY/iM/iD').iDate();
    var dateFormat = this.tenant.date_type == 'gregory' ? "YYYY/MM/DD" : "iYYYY/iM/iD";
    var fullDate = this.tenant.date_type == 'gregory' ? this.tenant.rent_start_date_gregory : this.tenant.rent_start_date_hijri;
    var futureMonth = fullDate;

    if (start_date > 1) {
      futureMonth = this.tenant.date_type == 'gregory' ? this.moment(fullDate).add(1, 'month') : this.moment(fullDate).add(1, 'iMonth');
      futureMonth = futureMonth.startOf('month').locale('en').format(dateFormat);
    }

    this.rentalEntitlement = futureMonth;
  }
});

/***/ }),

/***/ "./resources/js/views/pages/print/print-tenant-contract.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/pages/print/print-tenant-contract.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_tenant_contract_vue_vue_type_template_id_d37e6dce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-tenant-contract.vue?vue&type=template&id=d37e6dce& */ "./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=template&id=d37e6dce&");
/* harmony import */ var _print_tenant_contract_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-tenant-contract.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _print_tenant_contract_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _print_tenant_contract_vue_vue_type_template_id_d37e6dce___WEBPACK_IMPORTED_MODULE_0__.render,
  _print_tenant_contract_vue_vue_type_template_id_d37e6dce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/print/print-tenant-contract.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_tenant_contract_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-tenant-contract.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_print_tenant_contract_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=template&id=d37e6dce&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=template&id=d37e6dce& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_tenant_contract_vue_vue_type_template_id_d37e6dce___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_tenant_contract_vue_vue_type_template_id_d37e6dce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_print_tenant_contract_vue_vue_type_template_id_d37e6dce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./print-tenant-contract.vue?vue&type=template&id=d37e6dce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=template&id=d37e6dce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=template&id=d37e6dce&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/print/print-tenant-contract.vue?vue&type=template&id=d37e6dce& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        _c("h1", { staticClass: "text-center font-weight-bold" }, [
          _vm._v("عقد ايجار مؤقت أملاك خاصة")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("p", [
              _vm._v(
                "الطرف الأول السيد/ " +
                  _vm._s(
                    _vm.tenant.latest_contract.rental_unit.property.landlord
                      .landlord_name
                  )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("p", [
              _vm._v("الطرف الثاني السيد/ " + _vm._s(_vm.tenant.tenant_name))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            الجنسية " +
              _vm._s(_vm.tenant.nationality.name) +
              "\n\n                \n\n            رقم الهوية " +
              _vm._s(_vm.tenant.id_number) +
              "\n\n                \n\n            الجوال " +
              _vm._s(_vm.tenant.phone) +
              "\n\n            "
          ),
          _c("br"),
          _vm._v(
            "\n\n            تاريخ الميلاد " +
              _vm._s(_vm.tenant.dob) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            أجر الطرف الأول علي الطرف الثاني بسعر \n            " +
              _vm._s(
                parseFloat(
                  Number(_vm.tenant.latest_contract.months_duration) *
                    Number(
                      _vm.tenant.latest_contract.rental_unit.rent_amount_monthly
                    )
                ).toFixed(2)
              ) +
              "\n            سنويا وتعادل \n            " +
              _vm._s(
                parseFloat(
                  _vm.tenant.latest_contract.rental_unit.rent_amount_monthly
                ).toFixed(2)
              ) +
              "\n            شهريا \n            شقه رقم \n            " +
              _vm._s(_vm.tenant.latest_contract.rental_unit.rental_unit_no) +
              "\n             في  \n            " +
              _vm._s(
                _vm.tenant.latest_contract.rental_unit.property.property_name
              ) +
              "\n            بحي \n            " +
              _vm._s(
                _vm.tenant.latest_contract.rental_unit.property.district_name
              ) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            بداية استحقاق الايجار \n            " +
              _vm._s(_vm.rentalEntitlement) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("p", { staticClass: "text-center" }, [
          _vm._v(
            "\n            تاريخ الانشاء \n            " +
              _vm._s(
                _vm.tenant.date_type === "gregory"
                  ? _vm.tenant.rent_start_date_gregory
                  : _vm.tenant.rent_start_date_hijri
              ) +
              "\n        "
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n            أن هذا العقد لمدة عام كامل يبدأ من أول يوم في السنة وينتهي بنهاية السنة التي تم توقيع العقه فيها حتي لو \n            لم يكن التوقيع في أول السنة ويجدد تلقائيا ما لم يخبر احد الطرفين الطرف الآخر برغبته في الغاء \n            العقد قبل شهر من انتهاء السنة\n            "
      ),
      _c("br"),
      _vm._v(
        "\n            يقر الطرف الثاني انه استلم العين بحالة سليمة وفي حالة الاخلاء لابد وان تسلم بنفس الحال \n            ولايحق له أجراء أى تعديلات مهما كانت صغيرة الا بعد موافقة الطرف الأول خطيا بذلك \n            "
      ),
      _c("br"),
      _vm._v(
        "\n            يحق للطرف الأول قطع المياه أو الكهرباء في حال تأخر الطرف الثاني عن التسديد\n            "
      ),
      _c("br"),
      _vm._v(
        "\n            لا يحق للطرف الثاني تأجير العين أو التنازل عنه لطرف أخر\n            "
      ),
      _c("br"),
      _vm._v(
        "\n            لا يحق للطرف الثاني نقل جميع أمتعته اذا لم يسدد كامل المبالغ المترتبة علية \n            ويحق للطرف الأول اجراء الحجز التحفظي على الأمتعة الى حين السداد\n            "
      ),
      _c("br"),
      _vm._v(
        "\n            يعتبر هذا العقد لاغيا في حال تأخر الطرف الثاني عن السداد لفترة \n            شهرين ويلتزم الطرف الثاني بدفع المتأخرات كاملة عند تسليم العين\n        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("p", [_vm._v("الطرف الأول")]),
        _vm._v(" "),
        _c("p", [_vm._v("الاسم :")]),
        _vm._v(" "),
        _c("p", [_vm._v("التوقيع :")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("p", [_vm._v("الطرف الثاني")]),
        _vm._v(" "),
        _c("p", [_vm._v("الاسم :")]),
        _vm._v(" "),
        _c("p", [_vm._v("التوقيع :")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);