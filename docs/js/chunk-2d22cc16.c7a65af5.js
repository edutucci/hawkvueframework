(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cc16"],{f51b:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h-page-content",{attrs:{padding:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-h4"},[t._v("Rating")]),e("div",{ref:"rt-normalpoint"}),e("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Normal Point",code:t.ex1,script:t.ex1Script,javascript:""}},[e("h-rating",{attrs:{showmessages:""},model:{value:t.rating1,callback:function(s){t.rating1=s},expression:"rating1"}})],1),e("div",{ref:"rt-halfpoint"}),e("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Half Point",code:t.ex2,script:t.ex2Script,javascript:""}},[e("h-rating",{attrs:{showmessages:"",halfpoints:""},model:{value:t.rating2,callback:function(s){t.rating2=s},expression:"rating2"}})],1),e("div",{ref:"rt-custommessages"}),e("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Custom Messages",code:t.ex3,script:t.ex3Script,javascript:""}},[e("h-rating",{attrs:{messages:["1 star","2 stars","3 stars","4 stars","5 stars"],halfpoints:"",showmessages:""},model:{value:t.rating2,callback:function(s){t.rating2=s},expression:"rating2"}})],1),e("tabs-help",{staticClass:"h-mt-md",attrs:{properties:t.helpTopics.properties,events:t.helpTopics.events}})],1),e("div",{staticClass:"col-auto"},[e("list-help",[e("h-list",[e("h-list-header",{attrs:{text:"Styles"}}),e("h-list-item",{on:{click:function(s){return t.goToElement("rt-normalpoint")}}},[e("h-list-item-content",[e("h-list-item-text",{attrs:{title:"Normal Point"}})],1)],1),e("h-list-item",{on:{click:function(s){return t.goToElement("rt-halfpoint")}}},[e("h-list-item-content",[e("h-list-item-text",{attrs:{title:"Half Point"}})],1)],1),e("h-list-item",{on:{click:function(s){return t.goToElement("rt-custommessages")}}},[e("h-list-item-content",[e("h-list-item-text",{attrs:{title:"Custom Messages"}})],1)],1)],1)],1)],1)])])},a=[],i=e("cc04"),r={properties:[{name:"v-model",type:"Number",description:"Model of the component. Sets the number of stars to fill with a color."},{name:"showmessages",type:"Boolean",description:"Show messages below of stars."},{name:"halfpoints",type:"Boolean",description:"If true stars will be filled in half star."},{name:"messages",type:"Array",description:'Array messages for each star. Example: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]'}],events:[]},o={data:function(){return{helpTopics:{properties:[],events:[]},rating1:3,rating2:3.5,ex1:'\n<div>\n  <h-rating v-model="rating1" showmessages/>\n</div>\n',ex1Script:"\nexport default {\n  data () {\n    return {\n      rating1: 3\n    }\n  }\n}\n",ex2:'\n<div>\n  <h-rating v-model="rating2" showmessages halfpoints/>\n</div>\n',ex2Script:"\nexport default {\n  data () {\n    return {\n      rating2: 3.5\n    }\n  }\n}\n",ex3:"\n<h-rating\n  :messages=\"['1 star', '2 stars', '3 stars', '4 stars', '5 stars']\"\n  v-model=\"rating2\"\n  halfpoints\n  showmessages\n/>\n",ex3Script:"\nexport default {\n  data () {\n    return {\n      rating2: 3.5\n    }\n  }\n}\n"}},mounted:function(){this.helpTopics.properties=r.properties,this.helpTopics.events=r.events},methods:{goToElement:function(t){i["a"].goToElement(this.$refs[t])}}},l=o,c=e("2877"),p=Object(c["a"])(l,n,a,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d22cc16.c7a65af5.js.map