webpackJsonp([10],{"5RZZ":function(n,e){},Oeff:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("vhXa"),u=t("umQX"),l=t.n(u),m=t("c18a"),a=t.n(m),o=t("s+jy"),i=t.n(o),s=t("fxE/"),c=t.n(s),p={data:function(){return{code1:l.a,code2:a.a,code3:i.a,code4:c.a,num1:1,num2:1,num3:5,num4:1,num5:1,num6:1,num7:1,num8:1}},methods:{handleChange:function(n){console.log(n)}},components:{CardBox:r.a}},d={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("card-box",{attrs:{title:"基础用法"}},[t("template",{slot:"content"},[t("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},on:{change:n.handleChange},model:{value:n.num1,callback:function(e){n.num1=e},expression:"num1"}}),n._v(" "),t("el-input-number",{attrs:{disabled:""},model:{value:n.num2,callback:function(e){n.num2=e},expression:"num2"}})],1),n._v(" "),t("template",{slot:"code"},[n._v(n._s(n.code1))])],2),n._v(" "),t("card-box",{attrs:{title:"设置增减步数"}},[t("template",{slot:"content"},[t("el-input-number",{attrs:{step:2},model:{value:n.num3,callback:function(e){n.num3=e},expression:"num3"}})],1),n._v(" "),t("template",{slot:"code"},[n._v(n._s(n.code2))])],2),n._v(" "),t("card-box",{attrs:{title:"尺寸"}},[t("template",{slot:"content"},[t("el-input-number",{model:{value:n.num4,callback:function(e){n.num4=e},expression:"num4"}}),n._v(" "),t("el-input-number",{attrs:{size:"medium"},model:{value:n.num5,callback:function(e){n.num5=e},expression:"num5"}}),n._v(" "),t("el-input-number",{attrs:{size:"small"},model:{value:n.num6,callback:function(e){n.num6=e},expression:"num6"}}),n._v(" "),t("el-input-number",{attrs:{size:"mini"},model:{value:n.num7,callback:function(e){n.num7=e},expression:"num7"}})],1),n._v(" "),t("template",{slot:"code"},[n._v(n._s(n.code3))])],2),n._v(" "),t("card-box",{attrs:{title:"按钮位置"}},[t("template",{slot:"content"},[t("el-input-number",{attrs:{"controls-position":"right",min:1,max:10,label:"描述文字"},on:{change:n.handleChange},model:{value:n.num8,callback:function(e){n.num8=e},expression:"num8"}})],1),n._v(" "),t("template",{slot:"code"},[n._v(n._s(n.code4))])],2)],1)},staticRenderFns:[]};var b=t("Z0/y")(p,d,!1,function(n){t("5RZZ")},"data-v-d79c56d6",null);e.default=b.exports},c18a:function(n,e){n.exports='```\r\n<template>\r\n  <el-input-number v-model="num3" :step="2"></el-input-number>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      num3: 5\r\n    };\r\n  }\r\n}\r\n<\/script>\r\n```'},"fxE/":function(n,e){n.exports='```\r\n<template>\r\n  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      num8: 1\r\n    };\r\n  },\r\n  methods: {\r\n    handleChange(value){\r\n      console.log(value);\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n```'},"s+jy":function(n,e){n.exports='```\r\n<template>\r\n  <el-input-number v-model="num4"></el-input-number>\r\n  <el-input-number v-model="num5" size="medium"></el-input-number>\r\n  <el-input-number v-model="num6" size="small"></el-input-number>\r\n  <el-input-number v-model="num7" size="mini"></el-input-number>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      num4: 1,\r\n      num5: 1,\r\n      num6: 1,\r\n      num7: 1\r\n    };\r\n  }\r\n}\r\n<\/script>\r\n```'},umQX:function(n,e){n.exports='```\r\n<template>\r\n  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>\r\n  <el-input-number v-model="num2" disabled></el-input-number>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      num1: 1,\r\n      num2: 1\r\n    };\r\n  },\r\n  methods: {\r\n    handleChange(value){\r\n      console.log(value);\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n```'}});
//# sourceMappingURL=10.d85e6d6a01af8cdfeef1.js.map