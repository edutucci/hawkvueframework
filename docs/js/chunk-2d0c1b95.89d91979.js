(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1b95"],{"46eb":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h-page-content",{attrs:{padding:""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"text-h4"},[e._v(" Radio Buttons ")]),o("div",{ref:"rd-boolean"}),o("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Boolean",code:e.rbboolean,script:e.rbbooleanScript,javascript:""}},[o("div",{staticClass:"column"},[o("div",{staticClass:"col"},[e._v("\n            Do you agree to our terms and conditions?\n          ")]),o("div",{staticClass:"col"},[o("h-radio",{attrs:{text:"Yes",value:!0},model:{value:e.typeBoolean,callback:function(t){e.typeBoolean=t},expression:"typeBoolean"}}),o("h-radio",{attrs:{text:"No",value:!1},model:{value:e.typeBoolean,callback:function(t){e.typeBoolean=t},expression:"typeBoolean"}})],1),o("div",{staticClass:"col"},[e._v("\n            I like of: "+e._s(e.typeBoolean)+"\n          ")])])]),o("div",{ref:"rd-string"}),o("comp-code",{staticClass:"h-mt-lg",attrs:{title:"String",code:e.rblist,script:e.rblistScript,javascript:""}},[o("div",{staticClass:"column"},[o("div",{staticClass:"col"},[e._v("\n            What type of movies do you like?\n          ")]),o("div",{staticClass:"col"},[o("h-radio",{attrs:{text:"Comedy",value:"Comedy"},model:{value:e.typeMovie,callback:function(t){e.typeMovie=t},expression:"typeMovie"}}),o("h-radio",{attrs:{text:"Action",value:"Action"},model:{value:e.typeMovie,callback:function(t){e.typeMovie=t},expression:"typeMovie"}}),o("h-radio",{attrs:{text:"Science",value:"Science"},model:{value:e.typeMovie,callback:function(t){e.typeMovie=t},expression:"typeMovie"}}),o("h-radio",{attrs:{text:"Romance",value:"Romance"},model:{value:e.typeMovie,callback:function(t){e.typeMovie=t},expression:"typeMovie"}})],1),o("div",{staticClass:"col"},[e._v("\n            I like of: "+e._s(e.typeMovie)+"\n          ")])])]),o("div",{ref:"rd-numbers"}),o("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Numbers",code:e.rbnumber,script:e.rbnumberScript,javascript:""}},[o("div",{staticClass:"column"},[o("div",{staticClass:"col"},[e._v("\n            Wich number do you hate?\n          ")]),o("div",{staticClass:"col"},[o("h-radio",{attrs:{text:"10",value:10},model:{value:e.typeNumber,callback:function(t){e.typeNumber=t},expression:"typeNumber"}}),o("h-radio",{attrs:{text:"13",value:13},model:{value:e.typeNumber,callback:function(t){e.typeNumber=t},expression:"typeNumber"}}),o("h-radio",{attrs:{text:"15",value:15},model:{value:e.typeNumber,callback:function(t){e.typeNumber=t},expression:"typeNumber"}}),o("h-radio",{attrs:{text:"20",value:20},model:{value:e.typeNumber,callback:function(t){e.typeNumber=t},expression:"typeNumber"}})],1),o("div",{staticClass:"col"},[e._v("\n            I hate number: "+e._s(e.typeNumber)+"\n          ")])])]),o("div",{ref:"rd-checked"}),o("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Option checked",code:e.rbchecked,script:e.rbcheckedScript,javascript:""}},[o("div",{staticClass:"column"},[o("div",{staticClass:"col"},[e._v("\n            Select your gender\n          ")]),o("div",{staticClass:"col"},[o("h-radio",{attrs:{text:"Male",value:"male",checked:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}}),o("h-radio",{attrs:{text:"Female",value:"female"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}}),o("div",[e._v("Your gender is: "+e._s(e.gender))])],1)])]),o("div",{ref:"rd-objects"}),o("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Objects",code:e.rbobjects,script:e.rbobjectsScript,javascript:""}},[o("div",{staticClass:"column"},[o("div",{staticClass:"col"},[e._v("\n            Select yours favorite objects\n          ")]),o("div",{staticClass:"col"},[o("h-radio",{attrs:{text:e.radioObjectsOptions[0].name,value:e.radioObjectsOptions[0]},model:{value:e.radioObjects,callback:function(t){e.radioObjects=t},expression:"radioObjects"}}),o("h-radio",{attrs:{text:e.radioObjectsOptions[1].name,value:e.radioObjectsOptions[1]},model:{value:e.radioObjects,callback:function(t){e.radioObjects=t},expression:"radioObjects"}}),o("h-radio",{attrs:{text:e.radioObjectsOptions[2].name,value:e.radioObjectsOptions[2]},model:{value:e.radioObjects,callback:function(t){e.radioObjects=t},expression:"radioObjects"}}),o("div",[e._v("Your objects: "+e._s(e.radioObjects))])],1)])]),o("tabs-help",{staticClass:"h-mt-md",attrs:{properties:e.helpTopics.properties,events:e.helpTopics.events}})],1),o("div",{staticClass:"col-auto"},[o("list-help",[o("h-list",[o("h-list-header",{attrs:{text:"Usage"}}),o("h-list-item",{on:{click:function(t){return e.goToElement("rd-boolean")}}},[o("h-list-item-content",[o("h-list-item-text",{attrs:{title:"Boolean"}})],1)],1),o("h-list-item",{on:{click:function(t){return e.goToElement("rd-string")}}},[o("h-list-item-content",[o("h-list-item-text",{attrs:{title:"String"}})],1)],1),o("h-list-item",{on:{click:function(t){return e.goToElement("rd-numbers")}}},[o("h-list-item-content",[o("h-list-item-text",{attrs:{title:"Numbers"}})],1)],1),o("h-list-item",{on:{click:function(t){return e.goToElement("rd-checked")}}},[o("h-list-item-content",[o("h-list-item-text",{attrs:{title:"Checked"}})],1)],1),o("h-list-item",{on:{click:function(t){return e.goToElement("rd-objects")}}},[o("h-list-item-content",[o("h-list-item-text",{attrs:{title:"Object"}})],1)],1)],1)],1)],1)])])},n=[],a=o("cc04"),s={properties:[{name:"v-model",type:"String, Array, Boolean, Number, Object.",description:"Model of the component."},{name:"text",type:"String",description:"Sets the text of the radio."},{name:"value",type:"String, Number, Boolean, Object",description:"Sets the model value of the radio."},{name:"checked",type:"Boolean",description:"if true the radio button is checked."}]},l={data:function(){return{helpTopics:{properties:[],events:[]},typeBoolean:!1,typeMovie:"",typeNumber:0,gender:"",radioObjects:"",radioObjectsOptions:[{id:1,name:"html"},{id:2,name:"css"},{id:3,name:"vuejs"}],rbboolean:'\n<div class="column">\n  <div class="col">\n    Do you agree to our terms and conditions?\n  </div>\n  <div class="col">\n    <h-radio v-model="typeBoolean" text="Yes" :value="true"/>\n    <h-radio v-model="typeBoolean" text="No" :value="false"/>\n  </div>\n  <div class="col">\n    I like of: {{ typeBoolean }}\n  </div>\n</div>\n',rbbooleanScript:"\nexport default {\n  data () {\n    return {\n      typeBoolean: false\n    }\n  }\n}\n",rblist:'\n<div class="column">\n  <div class="col">\n    What type of movies do you like?\n  </div>\n  <div class="col">\n    <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>\n    <h-radio v-model="typeMovie" text="Action" value="Action"/>\n    <h-radio v-model="typeMovie" text="Science" value="Science"/>\n    <h-radio v-model="typeMovie" text="Romance" value="Romance"/>\n  </div>\n  <div class="col">\n    I like of: {{ typeMovie }}\n  </div>\n',rblistScript:"\nexport default {\n  data () {\n    return {\n      typeMovie: ''\n    }\n  }\n}\n",rbnumber:'\n<div class="column">\n  <div class="col">\n    Wich number do you hate?\n  </div>\n  <div class="col">\n    <h-radio v-model="typeNumber" text="10" :value="10"/>\n    <h-radio v-model="typeNumber" text="13" :value="13"/>\n    <h-radio v-model="typeNumber" text="15" :value="15"/>\n    <h-radio v-model="typeNumber" text="20" :value="20"/>\n  </div>\n  <div class="col">\n    I hate number: {{ typeNumber }}\n  </div>\n</div>\n',rbnumberScript:"\nexport default {\n  data () {\n    return {\n      typeNumber: 0\n    }\n  }\n}    \n",rbchecked:'\n<div class="column">\n  <div class="col">\n    Select your gender\n  </div>\n  <div class="col">\n    <h-radio v-model="gender" text="Male" value="male" checked/>\n    <h-radio v-model="gender" text="Female" value="female" />\n    <div>Your gender is: {{ gender }}</div>\n  </div>\n</div>\n',rbcheckedScript:"\nexport default {\n  data () {\n    return {\n      gender: ''\n    }\n  }\n}\n",rbobjects:'\n<div class="column">\n  <div class="col">\n    Select yours favorite objects\n  </div>\n  <div class="col">\n    <h-radio v-model="radioObjects" :text="radioObjectsOptions[0].name" :value="radioObjectsOptions[0]"/>\n    <h-radio v-model="radioObjects" :text="radioObjectsOptions[1].name" :value="radioObjectsOptions[1]" />\n    <h-radio v-model="radioObjects" :text="radioObjectsOptions[2].name" :value="radioObjectsOptions[2]" />\n    <div>Your objects: {{ radioObjects }}</div>\n  </div>\n</div>\n',rbobjectsScript:"\nexport default {\n  data () {\n    return {\n      radioObjects: [],\n      radioObjectsOptions: [\n        { id: 1, name: 'html' },\n        { id: 2, name: 'css' },\n        { id: 3, name: 'vuejs' }\n      ]\n    }\n  }\n}\n"}},mounted:function(){this.helpTopics.properties=s.properties},methods:{goToElement:function(e){a["a"].goToElement(this.$refs[e])}}},c=l,r=o("2877"),d=Object(r["a"])(c,i,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c1b95.89d91979.js.map