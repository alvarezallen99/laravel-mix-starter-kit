(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/Main.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/Main.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      drawer: true,
      isAdmin: false,
      userItems: [{
        title: 'Dashboard',
        type: 'header',
        enabled: false,
        url: '/'
      }, {
        title: 'Account Management',
        type: 'header',
        enabled: true,
        url: null
      }, {
        title: 'Change Password',
        type: 'submenu',
        enabled: false,
        url: '/change_password'
      }, {
        title: 'Expense Management',
        type: 'header',
        enabled: true,
        url: null
      }, {
        title: 'Expenses',
        type: 'submenu',
        enabled: false,
        url: '/expenses'
      }],
      items: [{
        title: 'Dashboard',
        type: 'header',
        enabled: false,
        url: '/'
      }, {
        title: 'User Management',
        type: 'header',
        enabled: true,
        url: null
      }, {
        title: 'Roles',
        type: 'submenu',
        enabled: false,
        url: '/roles'
      }, {
        title: 'Users',
        type: 'submenu',
        enabled: false,
        url: '/users'
      }, {
        title: 'Expense Management',
        type: 'header',
        enabled: true,
        url: null
      }, {
        title: 'Expense Categories',
        type: 'submenu',
        enabled: false,
        url: '/expense_categories'
      }, {
        title: 'Expenses',
        type: 'submenu',
        enabled: false,
        url: '/expenses'
      }],
      color: 'primary',
      colors: ['primary', 'blue', 'success', 'red', 'teal'],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  },
  computed: {
    bg: function bg() {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined;
    }
  },
  created: function created() {},
  methods: {
    navigate: function navigate(url) {
      if (url) {
        this.$router.push({
          path: url
        });
        console.clear();
      }
    },
    logout: function logout() {
      var _this = this;

      this.$http.post("".concat(this.url, "/v1/auth/logout")).then(function () {
        _this.Logout();

        _this.$router.push("/login")["catch"](function () {});
      })["catch"](function () {
        _this.Logout();

        _this.$router.push("/login")["catch"](function () {});
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/Main.vue?vue&type=template&id=302c2368&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/Main.vue?vue&type=template&id=302c2368& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "", color: "indigo", dark: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item",
                {
                  staticClass: "ml-1",
                  class: _vm.miniVariant && "px-0",
                  attrs: { "two-line": "" }
                },
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c("v-icon", { attrs: { "x-large": "" } }, [
                        _vm._v("mdi-account-circle")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [_vm._v("Juan Dela Cruze")]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [_vm._v("(Admin)")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list-item",
                {
                  staticStyle: {},
                  attrs: { link: "", dense: "" },
                  on: {
                    click: function($event) {
                      return _vm.navigate("/")
                    }
                  }
                },
                [_c("v-subheader", [_vm._v("Dashboard")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { app: "", dense: "" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "flex-grow-1" }),
          _vm._v(" "),
          _c("v-toolbar-title", { staticClass: "mr-7" }, [
            _c(
              "span",
              { staticStyle: { "font-size": "12px", "font-weight": "bold" } },
              [_vm._v("Welcome to Expense Manager")]
            )
          ]),
          _vm._v(" "),
          _c("v-toolbar-title", [
            _c(
              "span",
              { staticStyle: { "font-size": "12px", "font-weight": "bold" } },
              [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        return _vm.logout()
                      }
                    }
                  },
                  [_vm._v("Log out")]
                )
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/layouts/Main.vue":
/*!*******************************************!*\
  !*** ./resources/js/src/layouts/Main.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_302c2368___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=302c2368& */ "./resources/js/src/layouts/Main.vue?vue&type=template&id=302c2368&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_302c2368___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_302c2368___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/Main.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/src/layouts/Main.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/Main.vue?vue&type=template&id=302c2368&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/Main.vue?vue&type=template&id=302c2368& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_302c2368___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=302c2368& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/Main.vue?vue&type=template&id=302c2368&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_302c2368___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_302c2368___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);