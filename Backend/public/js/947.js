"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[947],{40926:function(t,e,a){var n=a(1519),s=a.n(n)()((function(t){return t[1]}));s.push([t.id,".tenant_contract .container[data-v-5623b769]{background:#fff;max-width:80%;min-width:80%}.tenant_contract p[data-v-5623b769]{font-size:20px;font-weight:700}.print-nav a[data-v-5623b769]{display:block;font-size:22px}.print-nav .left[data-v-5623b769],.print-nav .right[data-v-5623b769]{height:50;position:fixed;top:20px;width:50}.print-nav .left[data-v-5623b769]{left:20px}.print-nav .right[data-v-5623b769]{right:20px}@media print{.print-nav[data-v-5623b769]{display:none}}",""]),e.Z=s},63164:function(t,e,a){a.d(e,{Z:function(){return s}});var n={props:{rentalUnits:{type:Array}}},s=(0,a(51900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-0"},[t.rentalUnits.length>0?a("div",[a("table",{ref:"table1",staticClass:"table table-bordered table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.rentalUnits,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-center"},[t._v(t._s(e.rental_unit_no))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.property.property_name))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.rental_unit_name))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(parseFloat(e.rent_amount).toFixed(2)))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.rental_unit_desc))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.special_notes))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.print_notes))]),t._v(" "),a("td",{staticClass:"text-center"},[e.is_rented?a("span",[t._v("مؤجرة")]):a("span",[t._v("غير مؤجرة")])])])})),0)])]):a("div",[a("p",{staticClass:"text-center"},[t._v("لا توجد سجلات للعرض.")])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("رقم الشقة")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("العقار")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("أسم الشقة")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("الإيجار السنوي")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("وصف الوحدة")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("مواصفات خاصة")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("مواصفات مطبوعة")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("الحالة")])])])}],!1,null,null,null).exports},10947:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var n={page:{title:"تقرير الشقق",meta:[{name:"description"}]},components:{AccStatementTablle:a(63164).Z},data:function(){return{name:"Print Incoming Bonds",title:"تقرير الشقق",form:{},rentalUnits:[],settings:{}}},methods:{handlePrint:function(){window.print()}},created:function(){this.form=this.$route.params.form,this.rentalUnits=this.$route.params.rentalUnits,this.settings=this.$route.params.settings}},s=a(93379),r=a.n(s),i=a(40926),c={insert:"head",singleton:!1},l=(r()(i.Z,c),i.Z.locals,(0,a(51900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tenant_contract"},[a("div",{staticClass:"print-nav"},[a("a",{staticClass:"left btn btn-outline-primary",on:{click:function(e){return t.$router.back()}}},[a("i",{staticClass:"mdi mdi-backspace"})]),t._v(" "),a("a",{staticClass:"right btn btn-outline-primary",on:{click:t.handlePrint}},[a("i",{staticClass:"mdi mdi-printer"})])]),t._v(" "),a("div",{staticClass:"container"},[a("br"),t._v(" "),a("b-img",{attrs:{src:t.settings.contract_header,fluid:"",alt:"Responsive image"}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h1",{staticClass:"text-center"},[t._v("تقرير الشقق")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[""==t.form.landlordName||null==t.form.landlordName?a("p",[t._v("\n                    أسم العقار: \n                    "+t._s(t.form.propertyName)+"\n                ")]):a("p",[t._v("\n                    أسم المالك: \n                    "+t._s(t.form.landlordName)+"\n                ")])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("p",[t._v("\n                    الحالة: \n                    "),"all"==t.form.status?a("span",[t._v("الكل")]):"rented"==t.form.status?a("span",[t._v("مؤجرة")]):a("span",[t._v("غير مؤجرة")])])])]),t._v(" "),a("br"),t._v(" "),a("AccStatementTablle",{attrs:{rentalUnits:t.rentalUnits}}),t._v(" "),a("br")],1)])}),[],!1,null,"5623b769",null).exports)}}]);