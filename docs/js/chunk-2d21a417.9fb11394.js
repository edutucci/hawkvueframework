(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a417"],{bb78:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("h-page-content",{attrs:{padding:""}},[e("h1",[n._v("SnackBar")]),e("comp-code",{staticClass:"h-mt-md",attrs:{title:"Inside Vue File",code:n.snack,script:n.snackScript,javascript:""}},[e("h-btn",{attrs:{text:"Show SnackBar"},on:{click:n.showSnackBar}})],1),e("comp-code",{staticClass:"h-mt-md",attrs:{title:"In JS File",code:n.snackJSFile,script:n.snackJSFileScript,javascript:""}},[e("h-btn",{attrs:{text:"Show SnackBarInJS"},on:{click:n.showSnackBarInJS}})],1)],1)},o=[],c=e("2b0e");function s(){c["default"].prototype.$SnackBar.create({message:"Download Completed",textcolor:"text-white",bgcolor:"bg-positive"})}var r={showSnack:s},i=r,l={data:function(){return{snack:'\n<h-btn text="Show SnackBar" @click="showSnackBar"/>\n',snackScript:"\nexport default {\n  data () {\n    return {\n    }\n  }\n} \nmethods: {\n  showSnackBar () {\n    this.$SnackBar.create({\n      message: 'Download Completed',\n      textcolor: 'text-white',\n      bgcolor: 'bg-positive'\n    })\n  }\n}\n",snackJSFile:'\n<h-btn text="Show SnackBarInJS" @click="showSnackBarInJS"/>\n',snackJSFileScript:"\n// snackFile.js\n\nimport Vue from 'vue'\n\nfunction showSnack () {\n  Vue.prototype.$SnackBar.create({\n    message: 'Download Completed',\n    textcolor: 'text-white',\n    bgcolor: 'bg-positive'\n  })\n}\n\nlet test = {\n  showSnack: showSnack\n}\n\nexport default test\n\n\n// Vue Component\n\nimport jsSnack from './snackFile'\n\nexport default {\n  data () {\n    return {\n    }\n  }\n} \nmethods: {\n  showSnackBarInJS () {\n    jsSnack.showSnack()\n  }\n}\n"}},mounted:function(){},methods:{showSnackBar:function(){this.$SnackBar.create({message:"Download Completed",textcolor:"text-white",bgcolor:"bg-positive"})},showSnackBarInJS:function(){i.showSnack()}}},S=l,k=e("2877"),h=Object(k["a"])(S,a,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d21a417.9fb11394.js.map