"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9048],{3164:function(t,s,e){e.d(s,{Z:function(){return n}});var a={props:{rentalUnits:{type:Array}}},n=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mb-0"},[t.rentalUnits.length>0?e("div",[e("table",{ref:"table1",staticClass:"table table-bordered table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.rentalUnits,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"text-center"},[t._v(t._s(s.rental_unit_no))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(s.property.property_name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(s.rental_unit_name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(parseFloat(s.rent_amount).toFixed(2)))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(s.rental_unit_desc))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(s.special_notes))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(s.print_notes))]),t._v(" "),e("td",{staticClass:"text-center"},[s.is_rented?e("span",[t._v("مؤجرة")]):e("span",[t._v("غير مؤجرة")])])])})),0)])]):e("div",[e("p",{staticClass:"text-center"},[t._v("لا توجد سجلات للعرض.")])])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("رقم الشقة")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("العقار")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("أسم الشقة")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("الإيجار السنوي")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("وصف الوحدة")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("مواصفات خاصة")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("مواصفات مطبوعة")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("الحالة")])])])}],!1,null,null,null).exports},9048:function(t,s,e){e.r(s),e.d(s,{default:function(){return n}});var a={page:{title:"تقرير الشقق",meta:[{name:"description"}]},components:{AccStatementTablle:e(3164).Z},data:function(){return{name:"Print Incoming Bonds",title:"تقرير الشقق",form:{},rentalUnits:[],settings:{}}},methods:{handlePrint:function(){window.print()}},created:function(){this.form=this.$route.params.form,this.rentalUnits=this.$route.params.rentalUnits,this.settings=this.$route.params.settings}},n=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tenant_contract"},[e("div",{staticClass:"print-nav"},[e("a",{staticClass:"left btn btn-outline-primary",on:{click:function(s){return t.$router.back()}}},[e("i",{staticClass:"mdi mdi-backspace"})]),t._v(" "),e("a",{staticClass:"right btn btn-outline-primary",on:{click:t.handlePrint}},[e("i",{staticClass:"mdi mdi-printer"})])]),t._v(" "),e("div",{staticClass:"container"},[e("br"),t._v(" "),e("b-img",{attrs:{src:t.settings.contract_header,fluid:"",alt:"Responsive image"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h1",{staticClass:"text-center"},[t._v("تقرير الشقق")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[""==t.form.landlordName||null==t.form.landlordName?e("p",[t._v("\n                    أسم العقار: \n                    "+t._s(t.form.propertyName)+"\n                ")]):e("p",[t._v("\n                    أسم المالك: \n                    "+t._s(t.form.landlordName)+"\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("p",[t._v("\n                    الحالة: \n                    "),"all"==t.form.status?e("span",[t._v("الكل")]):"rented"==t.form.status?e("span",[t._v("مؤجرة")]):e("span",[t._v("غير مؤجرة")])])])]),t._v(" "),e("br"),t._v(" "),e("AccStatementTablle",{attrs:{rentalUnits:t.rentalUnits}}),t._v(" "),e("br")],1)])}),[],!1,null,null,null).exports}}]);