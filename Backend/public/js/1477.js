(self.webpackChunk=self.webpackChunk||[]).push([[1477],{1530:function(t,n,e){"use strict";var r=e(8710).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},7007:function(t,n,e){"use strict";e(4916);var r=e(1320),a=e(2261),i=e(7293),s=e(5112),o=e(8880),c=s("species"),l=RegExp.prototype;t.exports=function(t,n,e,v){var u=s(t),d=!i((function(){var n={};return n[u]=function(){return 7},7!=""[t](n)})),_=d&&!i((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[c]=function(){return e},e.flags="",e[u]=/./[u]),e.exec=function(){return n=!0,null},e[u](""),!n}));if(!d||!_||e){var p=/./[u],f=n(u,""[t],(function(t,n,e,r,i){var s=n.exec;return s===a||s===l.exec?d&&!i?{done:!0,value:p.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}));r(String.prototype,t,f[0]),r(l,u,f[1])}v&&o(l[u],"sham",!0)}},647:function(t,n,e){var r=e(7908),a=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,n,e,c,l,v){var u=e+t.length,d=c.length,_=o;return void 0!==l&&(l=r(l),_=s),i.call(v,_,(function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(u);case"<":s=l[i.slice(1,-1)];break;default:var o=+i;if(0===o)return r;if(o>d){var v=a(o/10);return 0===v?r:v<=d?void 0===c[v-1]?i.charAt(1):c[v-1]+i.charAt(1):r}s=c[o-1]}return void 0===s?"":s}))}},7651:function(t,n,e){var r=e(4326),a=e(2261);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,n)}},2261:function(t,n,e){"use strict";var r,a,i=e(1340),s=e(7066),o=e(2999),c=e(2309),l=e(30),v=e(9909).get,u=e(9441),d=e(8173),_=RegExp.prototype.exec,p=c("native-string-replace",String.prototype.replace),f=_,m=(r=/a/,a=/b*/g,_.call(r,"a"),_.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),g=o.UNSUPPORTED_Y||o.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(m||x||g||u||d)&&(f=function(t){var n,e,r,a,o,c,u,d=this,h=v(d),y=i(t),C=h.raw;if(C)return C.lastIndex=d.lastIndex,n=f.call(C,y),d.lastIndex=C.lastIndex,n;var b=h.groups,w=g&&d.sticky,P=s.call(d),E=d.source,$=0,I=y;if(w&&(-1===(P=P.replace("y","")).indexOf("g")&&(P+="g"),I=y.slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==y.charAt(d.lastIndex-1))&&(E="(?: "+E+")",I=" "+I,$++),e=new RegExp("^(?:"+E+")",P)),x&&(e=new RegExp("^"+E+"$(?!\\s)",P)),m&&(r=d.lastIndex),a=_.call(w?e:d,I),w?a?(a.input=a.input.slice($),a[0]=a[0].slice($),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:m&&a&&(d.lastIndex=d.global?a.index+a[0].length:r),x&&a&&a.length>1&&p.call(a[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a&&b)for(a.groups=c=l(null),o=0;o<b.length;o++)c[(u=b[o])[0]]=a[u[1]];return a}),t.exports=f},7066:function(t,n,e){"use strict";var r=e(9670);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},2999:function(t,n,e){var r=e(7293),a=e(7854).RegExp;n.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},9441:function(t,n,e){var r=e(7293),a=e(7854).RegExp;t.exports=r((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},8173:function(t,n,e){var r=e(7293),a=e(7854).RegExp;t.exports=r((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},8415:function(t,n,e){"use strict";var r=e(9958),a=e(1340),i=e(4488);t.exports=function(t){var n=a(i(this)),e="",s=r(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(n+=n))1&s&&(e+=n);return e}},7042:function(t,n,e){"use strict";var r=e(2109),a=e(111),i=e(3157),s=e(1400),o=e(7466),c=e(5656),l=e(6135),v=e(5112),u=e(1194)("slice"),d=v("species"),_=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!u},{slice:function(t,n){var e,r,v,u=c(this),f=o(u.length),m=s(t,f),g=s(void 0===n?f:n,f);if(i(u)&&("function"!=typeof(e=u.constructor)||e!==Array&&!i(e.prototype)?a(e)&&null===(e=e[d])&&(e=void 0):e=void 0,e===Array||void 0===e))return _.call(u,m,g);for(r=new(void 0===e?Array:e)(p(g-m,0)),v=0;m<g;m++,v++)m in u&&l(r,v,u[m]);return r.length=v,r}})},4916:function(t,n,e){"use strict";var r=e(2109),a=e(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},2481:function(t,n,e){e(2109)({target:"String",proto:!0},{repeat:e(8415)})},5306:function(t,n,e){"use strict";var r=e(7007),a=e(7293),i=e(9670),s=e(9958),o=e(7466),c=e(1340),l=e(4488),v=e(1530),u=e(647),d=e(7651),_=e(5112)("replace"),p=Math.max,f=Math.min,m="$0"==="a".replace(/./,"$0"),g=!!/./[_]&&""===/./[_]("a","$0");r("replace",(function(t,n,e){var r=g?"$":"$0";return[function(t,e){var r=l(this),a=null==t?void 0:t[_];return void 0!==a?a.call(t,r,e):n.call(c(r),t,e)},function(t,a){var l=i(this),_=c(t);if("string"==typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var m=e(n,l,_,a);if(m.done)return m.value}var g="function"==typeof a;g||(a=c(a));var x=l.global;if(x){var h=l.unicode;l.lastIndex=0}for(var y=[];;){var C=d(l,_);if(null===C)break;if(y.push(C),!x)break;""===c(C[0])&&(l.lastIndex=v(_,o(l.lastIndex),h))}for(var b,w="",P=0,E=0;E<y.length;E++){C=y[E];for(var $=c(C[0]),I=p(f(s(C.index),_.length),0),R=[],A=1;A<C.length;A++)R.push(void 0===(b=C[A])?b:String(b));var k=C.groups;if(g){var z=[$].concat(R,I,_);void 0!==k&&z.push(k);var F=c(a.apply(void 0,z))}else F=u($,_,I,R,k,a);I>=P&&(w+=_.slice(P,I)+F,P=I+$.length)}return w+_.slice(P)}]}),!!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!m||g)},8149:function(t,n,e){"use strict";var r=e(1519),a=e.n(r)()((function(t){return t[1]}));a.push([t.id,".tenant_contract p[data-v-78667567]{font-size:34px;font-weight:700}.note_rounded[data-v-78667567],.thin_border[data-v-78667567]{border:1px solid #000}.note_rounded[data-v-78667567]{border-radius:30px;height:150px}.font_size_30 p[data-v-78667567]{font-size:30px}p.custome_font_size_1[data-v-78667567]{font-size:23px}p.custome_font_size_2[data-v-78667567]{direction:ltr;font-size:20px}",""]),n.Z=a},1477:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});e(4916),e(5306),e(2222),e(2481),e(7042);var r=["","ألف","مليون","مليار","ترليون","كوادرليون","كوينتليون","سكستليون"],a=["","آلاف","ملايين","مليارات"],i=["","واحد","اثنان","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة","عشرة"],s=["","واحدة","اثنتان","ثلاث","أربع","خمس","ست","سبع","ثمان","تسع","عشر"],o={page:{title:"سند إيجار",meta:[{name:"description"}]},data:function(){return{name:"Print Tenant Contract",title:"سند إيجار",rentPayment:{},settings:{},rentalEntitlement:""}},methods:{handlePrint:function(){window.print()},tafqit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.Feminine,o=n.Comma,c=n.SplitHund,l=n.Miah,v=n.Billions,u=n.TextToFollow,d=n.AG,_=n.Subject,p=n.Legal;if(0==t)return"صفر";var f,m,g,x,h,y,C,b="",w=!1,P="on",E=d===P,$=" و",I="ًا",R="أحد",A="إحدى",k=E?"تي":"تا",z=E?"تين":"تان",F=E?"ي":"ا",O=E?"ين":"ان",S=E?"اثني":"اثنا",T=E?"اثنتي":"اثنتا",M=E?"اثنين":"اثنان",j=E?"اثنتين":"اثنتان",N=E?"ين":"ون",U=Array.isArray(_)&&4===_.length;u=u===P,U&&(u=!0),t=""+(t+="").replace(/[٠-٩]/g,(function(t){return"٠١٢٣٤٥٦٧٨٩".indexOf(t)})),l=l===P?"مئة":"مائة",h=[].concat(i),(y=[].concat(i))[0]=s[10],y[1]=R,y[2]=S,h[2]=M;for(var Z=(t="0".repeat(2*t.length%3)+t).length,B=Z;B>0;B-=3)f=+t.substr(Z-B,3),w=!+t.substr(Z-B+3),f&&(m=r[g=B/3-1],x=g<4?a[g]:r[g]+"ات",v&&3===g&&(m="بليون",x="بلايين"),b+=K(),w||(b+=(o===P?"،":"")+$));var q="";if(U){var D=w?" ":"";f=+(f+"").slice(-2),q=D+_[0],f>10?q=D+_[3]:f>2?q=D+_[2]:f>0&&(q=_[f-1]+" "+h[C])}return b+q;function K(){var t=~~(f/100),n=(C=f%100)%10,r=~~(C/10),a="",o="";e!==P||m||(h=[].concat(s),(y=[].concat(s))[0]=i[10],y[1]=A,y[2]=T,h[2]=j,C>19&&(h[1]=A)),t&&(a=t>2?s[t]+(c===P?" ":"")+l:1===t?l:l.slice(0,-1)+(m&&!C||u?k:z)),C>19?o=h[n]+(n?$:"")+(2===r?"عشر":s[r])+N:C>10?o=y[C-10]+" "+y[0]:(C>2||!C||!U)&&(o=h[C]);var v=a+(t&&C?$:"")+o;if(m){var d=(t?a+(p===P&&C<3?" "+m:"")+$:"")+m;C>2?v+=" "+(C>10?m+(w&&u?"":I):x):C?v=1===C?d:d+(w&&u?F:O):v+=" "+m}return v}}},created:function(){this.rentPayment=this.$route.params.rentPayment,this.settings=this.$route.params.settings}},c=o,l=e(3379),v=e.n(l),u=e(8149),d={insert:"head",singleton:!1},_=(v()(u.Z,d),u.Z.locals,(0,e(1900).Z)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tenant_contract"},[e("div",{staticClass:"print-nav"},[e("a",{staticClass:"left btn btn-outline-primary",on:{click:function(n){return t.$router.back()}}},[e("i",{staticClass:"mdi mdi-backspace"})]),t._v(" "),e("a",{staticClass:"right btn btn-outline-primary",on:{click:t.handlePrint}},[e("i",{staticClass:"mdi mdi-printer"})])]),t._v(" "),e("div",{staticClass:"container"},[e("br"),t._v(" "),e("b-img",{attrs:{src:t.settings.contract_header,fluid:"",alt:"Responsive image"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h1",{staticClass:"text-center font-weight-bold",staticStyle:{"font-size":"40px"}},[t._v("(( سند قبض ايجار سكنى املاك خاصة ))")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row font_size_30"},[e("div",{staticClass:"col-md-4"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"col-md-4 text-center"},[e("p",[t._v(t._s(t.rentPayment.payment_number))])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("p",[t._v("\n                    التاريخ:\n                    "+t._s(t.rentPayment.date_hijri)+" هـ \n                ")]),t._v(" "),e("p",[t._v("\n                    الموافق:\n                    "+t._s(t.rentPayment.date_gregory)+" م \n                ")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("p",[t._v("\n                    استلمنا من السيد : \n                    "+t._s(t.rentPayment.tenant.tenant_name)+"\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-4 text-right"},[e("p",[t._v(" "+t._s(t.rentPayment.tenant.tenant_code)+" ")])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("p",[t._v("\n                   مبلغ : \n                    "+t._s(parseFloat(t.rentPayment.rent_amount).toFixed(2))+"\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-9"},[e("p",[t._v(" "+t._s(t.tafqit(parseFloat(t.rentPayment.rent_amount).toFixed(0)))+" ريال فقط  ")])])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("p",[t._v("\n                    وذلك إيجار \n                    "+t._s(t.rentPayment.tenant.latest_contract.rental_unit.rental_unit_name)+"\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("p",[t._v("\n                    الواقعة في \n                    "+t._s(t.rentPayment.tenant.latest_contract.rental_unit.property.property_name)+"\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("p",[t._v("\n                    بحي\n                    "+t._s(t.rentPayment.tenant.latest_contract.rental_unit.property.district_name)+"\n                ")])])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",[t._v("\n                    للفترة من : \n                    "+t._s(t.rentPayment.date_from)+"\n                ")])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("p",[t._v(" \n                    للفترة الـى : \n                    "+t._s(t.rentPayment.date_to)+"\n               ")])])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n            "+t._s(t.rentPayment.tenant.notes_for_receipt)+"\n        ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v(t._s(t.rentPayment.amount_note_statment))]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n            الكهرباء : \n            "+t._s(t.rentPayment.tenant.start_electricity_meter)+"\n        ")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"thin_border"},[e("p",{staticClass:"text-center"},[t._v("قيمة الإيجار")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",{staticClass:"pl-1 text-right"},[t._v(t._s(parseFloat(t.rentPayment.tenant.latest_contract.rental_unit.rent_amount).toFixed(2)))])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",{staticClass:"pl-1 text-right"},[t._v(t._s(parseFloat(t.rentPayment.tenant.latest_contract.rental_unit.rent_amount_monthly).toFixed(2)))])]),t._v(" "),t._m(2)])])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t._m(3)],1)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("p",[t._v("المستلم")])]),t._v(" "),e("div",{staticClass:"col-md-9"},[e("p",[t._v("الاسم :")]),t._v(" "),e("p",[t._v("التوقيع :")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-md-6"},[e("p",[t._v("السنوي")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-md-6"},[e("p",[t._v("الشهرى")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"note_rounded px-1 py-1"},[e("p",{staticClass:"custome_font_size_1"},[t._v("تحذير / عند تسليم اي مبالغ مالية للحارس او المندوب ولم تستلم سند رسمي خلال 24 ساعة يجب الاتصال بالمكتب والا فلن نكون مسؤلين بعد ذلك")])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"note_rounded px-1 py-1"},[e("p",{staticClass:"custome_font_size_2"},[t._v("\n                        Warning : if you give money to building guard or\n                        delegate and you don't get a receipt within 24 hours.\n                        you must contact the office, if you don't contact the\n                        office we will not be responsible for anything. \n                    ")])])])])}],!1,null,"78667567",null).exports)}}]);