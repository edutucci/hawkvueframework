(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6122"],{"96d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h-page-content",{attrs:{padding:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-h4"},[t._v("Layout")]),a("div",{ref:"usage"}),a("comp-code",{staticClass:"h-mt-md",attrs:{title:"Usage",code:t.layout1,page:"template"}}),a("div",{ref:"basicLayout"}),a("comp-code",{staticClass:"h-mt-md",attrs:{title:"Basic Layout",code:t.layout2}},[a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-auto h-pa-sm"},[a("h-image",{staticStyle:{width:"600px",height:"400px"},attrs:{src:"imgsamples/basicLayout.png"}})],1)])]),a("div",{ref:"layoutDrawerLeft"}),a("comp-code",{staticClass:"h-mt-md",attrs:{title:"Layout Drawer Left",code:t.layout3,script:t.layout3Script,javascript:""}},[a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-auto h-pa-sm"},[a("h-image",{staticStyle:{width:"600px",height:"400px"},attrs:{src:"imgsamples/layoutDrawer.png"}})],1)])])],1),a("div",{staticClass:"col-auto"},[a("list-help",[a("h-list",[a("h-list-header",{attrs:{text:"Layout"}}),a("h-list-item",{on:{click:function(e){return t.goToElement("usage")}}},[a("h-list-item-content",[a("h-list-item-text",{attrs:{title:"Usage"}})],1)],1),a("h-list-item",{on:{click:function(e){return t.goToElement("basicLayout")}}},[a("h-list-item-content",[a("h-list-item-text",{attrs:{title:"Basic Layout"}})],1)],1),a("h-list-item",{on:{click:function(e){return t.goToElement("layoutDrawerLeft")}}},[a("h-list-item-content",[a("h-list-item-text",{attrs:{title:"Drawer Left"}})],1)],1)],1)],1)],1)])])},i=[],o=a("cc04"),l={name:"Layout",data:function(){return{layout1:"\n<h-main-body>\n  <template v-slot:header>\n  <template>\n\n  // drawer left\n  <template v-slot:left>\n  <template>\n\n  <router-view/>\n\n  // drawer right\n  <template v-slot:right>\n  <template>\n\n  <template v-slot:footer>\n  <template>\n</h-main-body>\n",layout2:'\n<h-main-body>\n  <template v-slot:header>\n    <h-app-toolbar bg-color="bg-primary">\n      <h-app-toolbar-container>\n        <h-app-toolbar-navigation text-color="text-white"/>\n        <h-app-toolbar-title class="text-white">\n          HawkVueMD Framework 1.0.12-rc.0\n        </h-app-toolbar-title>\n        <h-app-toolbar-action>\n          <h-btn fab size="sm" bg-color="bg-transparent">\n            <h-link url="/" icon="fas fa-home" text-color="text-white"/>\n          </h-btn>\n          <h-btn fab size="sm" bg-color="bg-transparent">\n            <h-link url="https://github.com/edutucci/hawkvuemdframework"\n              icon="fab fa-github" text-color="text-white" new-window/>\n          </h-btn>\n        </h-app-toolbar-action>\n      </h-app-toolbar-container>\n    </h-app-toolbar>\n  </template>\n\n  <h-page-content>\n    <div class="row full-height justify-center align-items-center">\n      <div class="col-auto text-center h-pa-md">\n        <div class="column align-items-center">\n          <h-image avatar src="img/hawk.jpg" size="256px"/>\n          <div class="text-h3">HawkVueMD </div>\n          <div class="text-h3"> Framework</div>\n        </div>\n      </div>\n    </div>\n  </h-page-content>\n\n</h-main-body>\n',layout3:'\n<h-main-body\n  :show-drawer-left="showDrawer"\n  @close-drawer-left="showDrawer = $event"\n>\n  <template v-slot:header>\n    <h-app-toolbar bg-color="bg-primary">\n      <h-app-toolbar-container>\n        <h-app-toolbar-navigation text-color="text-white" @click="showDrawer = !showDrawer"/>\n        <h-app-toolbar-title class="text-white">\n          HawkVueMD Framework 1.0.12-rc.0\n        </h-app-toolbar-title>\n        <h-app-toolbar-action>\n          <h-btn fab size="sm" bg-color="bg-transparent">\n            <h-link url="/" icon="fas fa-home" text-color="text-white"/>\n          </h-btn>\n          <h-btn fab size="sm" bg-color="bg-transparent">\n            <h-link url="https://github.com/edutucci/hawkvuemdframework"\n              icon="fab fa-github" text-color="text-white" new-window/>\n          </h-btn>\n        </h-app-toolbar-action>\n      </h-app-toolbar-container>\n    </h-app-toolbar>\n  </template>\n\n<template v-slot:left>\n  <div class="col-auto text-center h-pa-md">\n    <div class="column align-items-center">\n      <h-image avatar src="img/hawk.jpg" size="64px"/>\n      <div class="">Hawk </div>\n      <div class=""> Framework</div>\n    </div>\n  </div>\n  <div class="col">\n    <h-list>\n      <h-list-item @click="$router.push(\'/home\')">\n        <h-list-item-content>\n          <h-list-item-text title="Home Page" caption="Main page"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item @click="openURL(\'https://github.com/edutucci/hawkvuemdframework\')">\n        <h-list-item-content>\n          <h-list-item-text title="Github" caption="Framework repository"/>\n        </h-list-item-content>\n      </h-list-item>\n    </h-list>\n  </div>\n  <div class="col-auto">\n    <div class="text-center h-pa-md">\n      <h2 class="no-margin">Free Framework</h2>\n      <h2 class="no-margin">Pure CSS</h2>\n    </div>\n  </div>\n\n</template>\n\n<router-view/>\n\n</h-main-body>      \n',layout3Script:"\nexport default {\n  data () {\n    return {\n      showDrawer: false\n    }\n  }\n}\n"}},methods:{goToElement:function(t){o["a"].goToElement(this.$refs[t])}}},s=l,r=a("2877"),c=Object(r["a"])(s,n,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e6122.3b5a733b.js.map