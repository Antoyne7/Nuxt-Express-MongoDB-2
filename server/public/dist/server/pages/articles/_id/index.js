exports.ids = [1];
exports.modules = {

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_id/index.vue?vue&type=template&id=86335392&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-btn',{attrs:{"to":"/posts"}},[_vm._v("\n    Back\n  ")]),_vm._v(" "),_c('h1',{staticClass:"text-h1"},[_vm._v("\n    "+_vm._s(_vm.articleInfo.title)+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/_id/index.vue?vue&type=template&id=86335392&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_id/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'Article',

  // eslint-disable-next-line require-await
  async asyncData() {
    return {
      articleInfo: {
        title: ''
      }
    };
  },

  mounted() {
    console.log(this.$route.params);
    this.articleInfo.title = this.$route.params.id;
    console.log(this.articleInfo.title);
  }

});
// CONCATENATED MODULE: ./pages/articles/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var articles_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(118);

// CONCATENATED MODULE: ./pages/articles/_id/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  articles_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "86335392",
  "6e518622"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map