(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-217f35d6"],{"366e":function(e,t,a){"use strict";a("bbeb")},"731b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"centermap"},[a("div",{staticClass:"maptitle"},[a("div",{staticClass:"zuo"}),a("span",{staticClass:"titletext"},[e._v(e._s(e.maptitle))]),a("div",{staticClass:"you"})]),a("div",{staticClass:"mapwrap"},[a("dv-border-box-13",["china"!==e.code&&-1==e.userCode?a("div",{staticClass:"quanguo",on:{click:function(t){return e.getData(-1)}}},[e._v(" 中国 ")]):e._e(),a("Echart",{ref:"CenterMap",attrs:{id:"CenterMap",options:e.options}})],1)],1)])},n=[],o=(a("d81d"),a("b0c0"),a("99af"),a("fb6a"),{"中国":{adcode:"100000",level:"country",name:"中华人民共和国"},"新疆维吾尔自治区":{adcode:"650000",level:"province",name:"新疆维吾尔自治区"},"湖北省":{adcode:"420000",level:"province",name:"湖北省"},"辽宁省":{adcode:"210000",level:"province",name:"辽宁省"},"广东省":{adcode:"440000",level:"province",name:"广东省"},"内蒙古自治区":{adcode:"150000",level:"province",name:"内蒙古自治区"},"黑龙江省":{adcode:"230000",level:"province",name:"黑龙江省"},"河南省":{adcode:"410000",level:"province",name:"河南省"},"山东省":{adcode:"370000",level:"province",name:"山东省"},"陕西省":{adcode:"610000",level:"province",name:"陕西省"},"贵州省":{adcode:"520000",level:"province",name:"贵州省"},"上海市":{adcode:"310000",level:"province",name:"上海市"},"重庆市":{adcode:"500000",level:"province",name:"重庆市"},"西藏自治区":{adcode:"540000",level:"province",name:"西藏自治区"},"安徽省":{adcode:"340000",level:"province",name:"安徽省"},"福建省":{adcode:"350000",level:"province",name:"福建省"},"湖南省":{adcode:"430000",level:"province",name:"湖南省"},"海南省":{adcode:"460000",level:"province",name:"海南省"},"江苏省":{adcode:"320000",level:"province",name:"江苏省"},"青海省":{adcode:"630000",level:"province",name:"青海省"},"广西壮族自治区":{adcode:"450000",level:"province",name:"广西壮族自治区"},"宁夏回族自治区":{adcode:"640000",level:"province",name:"宁夏回族自治区"},"浙江省":{adcode:"330000",level:"province",name:"浙江省"},"河北省":{adcode:"130000",level:"province",name:"河北省"},"香港特别行政区":{adcode:"810000",level:"province",name:"香港特别行政区"},"台湾省":{adcode:"710000",level:"province",name:"台湾省"},"澳门特别行政区":{adcode:"820000",level:"province",name:"澳门特别行政区"},"甘肃省":{adcode:"620000",level:"province",name:"甘肃省"},"四川省":{adcode:"510000",level:"province",name:"四川省"},"天津市":{adcode:"120000",level:"province",name:"天津市"},"江西省":{adcode:"360000",level:"province",name:"江西省"},"云南省":{adcode:"530000",level:"province",name:"云南省"},"山西省":{adcode:"140000",level:"province",name:"山西省"},"北京市":{adcode:"110000",level:"province",name:"北京市"},"吉林省":{adcode:"220000",level:"province",name:"吉林省"}}),c=a("e100"),i=a("93bb"),l={data:function(){return{maptitle:"设备分布图",options:{},code:"china",userCode:-1,echartBindClick:!1}},created:function(){},mounted:function(){this.getData()},methods:{getData:function(e){var t=this;Object(c["a"])("big8",{regionCode:e}).then((function(a){console.log("设备分布",a),a.success?(e||(t.userCode=a.data.regionCode),t.getGeojson(a.data.regionCode,a.data.dataList),t.mapclick()):t.$Message.warning(a.msg)}))},getGeojson:function(e,t){var a=this;-1==e&&(e="china"),this.code=e,Object(i["b"])("./map-geojson/"+e+".json").then((function(r){var n={},o=r.features;o.map((function(e){n[e.properties.name]=e.properties.centroid||e.properties.center}));var c=[];t.map((function(e){if(n[e.name]){a.getColor(e.value);c.push({name:e.name,value:n[e.name].concat(e.value)})}}));var i=echarts.getMap(e);i||echarts.registerMap(e,r),a.init(e,t,c)}))},getColor:function(e){return e>0&&e<9?"#035cf5":e>10&&e<49?"#3375e4":e>50&&e<199?"#6797ef":e>200&&e<499?"#96b5ef":e>500&&e<9999?"#bacae8":e>1e3?"#3FF4FF":""},init:function(e,t,a){var r=45,n=1.05;"china"==e&&(r=140,n=1.42);var o={backgroundColor:"rgba(0,0,0,0)",tooltip:{show:!1},legend:{show:!1},visualMap:{left:20,bottom:20,pieces:[{gte:1e3,label:"1000个以上"},{gte:600,lte:999,label:"600-999个"},{gte:200,lte:599,label:"200-599个"},{gte:50,lte:199,label:"49-199个"},{gte:10,lte:49,label:"10-49个"},{lte:9,label:"1-9个"}],inRange:{color:["#c3d7df","#5cb3cc","#8abcd1","#66a9c9","#2f90b9","#1781b5"]},textStyle:{color:"#fff"}},geo:{map:e,roam:!1,selectedMode:!1,zoom:n,top:r,aspectScale:.78,tooltip:{show:!1},label:{show:!1},itemStyle:{areaColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)"},emphasis:{disabled:!0}},series:[{name:"MAP",type:"map",mapType:e,aspectScale:.78,data:t,selectedMode:!1,zoom:n,geoIndex:1,top:r,tooltip:{show:!0,formatter:function(e){return e.data?e.name+"："+e.data["value"]:e.name},backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},label:{show:!1,color:"#000",formatter:function(e){return void 0!==e.data?e.name.slice(0,2):""},rich:{},emphasis:{show:!1}},itemStyle:{borderColor:"rgba(147, 235, 248, .8)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, .3)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10,emphasis:{areaColor:"#389BB7",borderWidth:1}}},{data:a,type:"effectScatter",coordinateSystem:"geo",symbolSize:function(e){return 4},legendHoverLink:!0,showEffectOn:"render",rippleEffect:{scale:6,color:"rgba(255,255,255, 1)",brushType:"fill"},tooltip:{show:!0,formatter:function(e){return e.data?e.name+"："+e.data["value"][2]:e.name},backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},label:{formatter:function(e){return e.name.slice(0,2)},fontSize:11,offset:[0,2],position:"bottom",textBorderColor:"#fff",textShadowColor:"#000",textShadowBlur:10,textBorderWidth:0,color:"#FFF",show:!0},itemStyle:{color:"rgba(255,255,255,1)",borderColor:"rgba(2255,255,255,2)",borderWidth:4,shadowColor:"#000",shadowBlur:10}}]};this.options=o},message:function(e){this.$Message({text:e,type:"warning"})},mapclick:function(){var e=this;this.echartBindClick||-1!==this.userCode||(this.$refs.CenterMap.chart.on("click",(function(t){var a=o[t.name];a?e.getData(a.adcode):e.message("暂无下级地市!")})),this.echartBindClick=!0)}}},s=l,d=(a("366e"),a("2877")),u=Object(d["a"])(s,r,n,!1,null,"82d17d84",null);t["default"]=u.exports},"93bb":function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return v}));a("5530");var r=a("1da1"),n=(a("96cf"),a("d3b7"),a("99af"),a("bc3a")),o=a.n(n),c={ENC:!1,baseUrl:"http://locolhost:8888",code:401},i=c,l=(a("a18c"),i.baseUrl);o.a.CancelToken;o.a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e.headers.common["Content-Type"]="application/json;charset=utf-8",e.headers.common["token"]=t,e}),(function(e){return console.log(e),Promise.reject(e)})),o.a.interceptors.response.use((function(e){return 200!==e.status?Promise.reject(e):(e.data.code,i.code,e.data)}),(function(e){var t={success:!1,msg:"未知异常，请联系管理员！"};return Promise.reject(t)}));var s={headers:{enc:i.ENC}},d=function(e){return e},u=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=d(a),e.next=4,o.a.get("".concat(l).concat(t),{params:a,headers:s.headers},s);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get(t,{params:a});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=d(a),e.next=4,o.a.post("".concat(l).concat(t),a,s);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}()},bbeb:function(e,t,a){},e100:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("93bb"),n={big1:"/bigscreen/countUserNum",big2:"/bigscreen/countDeviceNum",big3:"/bigscreen/sbtx",big4:"/bigscreen/alarmNum",big5:"/bigscreen/ssyj",big6:"/bigscreen/installationPlan",big7:"/bigscreen/ranking",big8:"/bigscreen/centermap"},o=function(e,t){return r["a"](n[e],t)}}}]);