(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3e2665a"],{"0590":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"saveTime"},[t._v(" 实时保存，保存时间 13:52 ")]),a("div",{staticClass:"list"},[a("p",[t._v("今日完成工作")]),a("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("div",{staticClass:"list"},[a("p",[t._v("未完成工作")]),a("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("div",{staticClass:"list"},[a("p",[t._v("需协调工资")]),a("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("div",{staticClass:"list"},[a("p",[t._v("备注")]),a("van-field",{attrs:{rows:"1",autosize:"",type:"textarea",placeholder:"请输入"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("div",{staticClass:"split"}),a("div",{staticClass:"list upload"},[a("p",[t._v(" 图片 "),a("van-icon",{attrs:{name:"photo-o",size:"1.7rem"}})],1),a("van-uploader",{staticStyle:{"margin-left":"10px"},attrs:{"after-read":t.afterRead,multiple:""}}),a("div",{staticClass:"mainDiv",attrs:{id:"columns"}},t._l(t.fileList,(function(e,n){return a("div",{key:n,staticClass:"childDiv child"},[t._v(" "+t._s(e.content)+" "),a("img",{staticStyle:{width:"100%"},attrs:{src:e.content,alt:""}})])})),0)],1),a("div",{staticClass:"list upload"},[a("p",[t._v(" 附件 ")]),a("div",{staticClass:"van-uploader",staticStyle:{"margin-left":"10px"}},[a("div",{staticClass:"van-uploader__wrapper"},[a("div",{staticClass:"van-uploader__upload",staticStyle:{width:"40px",height:"40px"}},[a("van-icon",{attrs:{name:"plus"}}),a("input",{staticClass:"van-uploader__input",attrs:{multiple:"multiple",type:"file"},on:{change:t.afterRead}})],1)])])]),a("bottom"),a("div",{staticStyle:{height:"100px"}}),a("van-number-keyboard",{attrs:{"safe-area-inset-bottom":""}})],1)},i=[];a("4160"),a("a630"),a("c975"),a("5377"),a("3ca3"),a("159b"),a("a4d3"),a("e01a"),a("d28b"),a("277d"),a("d3b7"),a("ddb0"),a("fb6a"),a("0d03"),a("b0c0"),a("25f0");function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function s(t,e){if(t){if("string"===typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}function o(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=s(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(c)throw r}}}}var c=a("1d7a"),l={components:{bottom:c["default"]},data:function(){return{message:"",columns:void 0,flags:!1,position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:"",fileList:[]}},methods:{afterRead:function(t){var e=this;console.log(t,"filesasdsadsadsa"),t.length?t.forEach((function(t){e.fileList.push(t)})):this.fileList.push(t),console.log(this.fileList,"this.fileList"),this.columns=document.querySelectorAll(".child"),console.log(this.columns);var a,n=0,i=o(this.columns);try{for(i.s();!(a=i.n()).done;){var r=a.value;r.style.top=r.offsetHeight*n+"px",r.addEventListener("touchstart",this.down),r.addEventListener("touchmove",this.move),r.addEventListener("touchend",this.end),n++}}catch(s){i.e(s)}finally{i.f()}},onClick:function(t){console.log(t)},down:function(t){var e;t.preventDefault(),this.flags=!0,e=t.touches?t.touches[0]:t,this.position.x=e.clientX,this.position.y=e.clientY,this.dx=t.target.offsetLeft,this.dy=t.target.offsetTop},move:function(t){var e;this.flags&&(e=t.touches?t.touches[0]:t,this.nx=e.clientX-this.position.x,this.ny=e.clientY-this.position.y,this.xPum=this.dx+this.nx,this.yPum=this.dy+this.ny,t.target.style.left=this.xPum+"px",t.target.style.top=this.yPum+"px")},end:function(t){var e=t.target.offsetLeft+t.target.offsetWidth,a=t.target.offsetTop+t.target.offsetHeight;(t.target.offsetLeft<=0||e>=t.target.offsetParent.offsetWidth)&&(t.target.style.left="0px"),(t.target.offsetTop<=0||a>=t.target.offsetParent.offsetHeight)&&(t.target.style.top="0px"),this.dataTransfer(t),this.flags=!1},dataTransfer:function(t){var e=t.target.offsetTop+Math.round(t.target.offsetHeight/2),a=Array.from(this.columns),n=a.indexOf(t.target);for(var i in a)if(e>a[i].offsetTop&&e<a[i].offsetTop+a[i].offsetHeight){console.log(a[n].innerText,"arr[index].innerText");var r=a[n].innerText;a[n].innerText=a[i].innerText,a[i].innerText=r}var s,c=0,l=o(this.columns);try{for(l.s();!(s=l.n()).done;){var f=s.value;f.style.top=f.offsetHeight*c+"px",c++}}catch(u){l.e(u)}finally{l.f()}}}},f=l,u=(a("949a"),a("2877")),d=Object(u["a"])(f,n,i,!1,null,"c1e16b7c",null);e["default"]=d.exports},"1d7a":function(t,e,a){"use strict";var n=a("509c"),i=a("e54d"),r=(a("8b0e"),a("6bde"),a("2877")),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"0ae0c67a",null);e["default"]=s.exports},"25f0":function(t,e,a){"use strict";var n=a("6eeb"),i=a("825a"),r=a("d039"),s=a("ad6d"),o="toString",c=RegExp.prototype,l=c[o],f=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=o;(f||u)&&n(RegExp.prototype,o,(function(){var t=i(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?s.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"277d":function(t,e,a){var n=a("23e7"),i=a("e8b5");n({target:"Array",stat:!0},{isArray:i})},"3ca3":function(t,e,a){"use strict";var n=a("6547").charAt,i=a("69f3"),r=a("7dd0"),s="String Iterator",o=i.set,c=i.getterFor(s);r(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),a=e.string,i=e.index;return i>=a.length?{value:void 0,done:!0}:(t=n(a,i),e.index+=t.length,{value:t,done:!1})}))},"3ded":function(t,e,a){},"4df4":function(t,e,a){"use strict";var n=a("0366"),i=a("7b0b"),r=a("9bdd"),s=a("e95a"),o=a("50c4"),c=a("8418"),l=a("35a1");t.exports=function(t){var e,a,f,u,d,v,p=i(t),h="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,m=void 0!==y,x=l(p),b=0;if(m&&(y=n(y,g>2?arguments[2]:void 0,2)),void 0==x||h==Array&&s(x))for(e=o(p.length),a=new h(e);e>b;b++)v=m?y(p[b],b):p[b],c(a,b,v);else for(u=x.call(p),d=u.next,a=new h;!(f=d.call(u)).done;b++)v=m?r(u,y,[f.value,b],!0):f.value,c(a,b,v);return a.length=b,a}},"509c":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bottom"},[a("div",{staticStyle:{width:"80px"}},[a("van-icon",{attrs:{name:"todo-list-o",size:"1.3rem",color:"#3B87F7"}}),a("p",[t._v("看日志")])],1),a("div",{staticStyle:{width:"80px"}},[a("van-icon",{attrs:{name:"clock-o",size:"1.3rem"}}),a("p",[t._v("统计")])],1),a("div",{staticStyle:{width:"calc(100% - 180px)"}},[a("van-button",{staticStyle:{width:"100%"},attrs:{type:"primary"}},[t._v("提交日志")])],1)])])},i=[]},5377:function(t,e,a){var n=a("83ab"),i=a("9bf2"),r=a("ad6d"),s=a("9f7f").UNSUPPORTED_Y;n&&("g"!=/./g.flags||s)&&i.f(RegExp.prototype,"flags",{configurable:!0,get:r})},"6bde":function(t,e,a){"use strict";a("818e")},"818e":function(t,e,a){},"8b0e":function(t,e,a){"use strict";a("ea4c")},"949a":function(t,e,a){"use strict";a("3ded")},9960:function(t,e){},a630:function(t,e,a){var n=a("23e7"),i=a("4df4"),r=a("1c7e"),s=!r((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:i})},c975:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").indexOf,r=a("a640"),s=a("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),f=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!l||!f},{indexOf:function(t){return c?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,e,a){var n=a("746f");n("iterator")},ddb0:function(t,e,a){var n=a("da84"),i=a("fdbc"),r=a("e260"),s=a("9112"),o=a("b622"),c=o("iterator"),l=o("toStringTag"),f=r.values;for(var u in i){var d=n[u],v=d&&d.prototype;if(v){if(v[c]!==f)try{s(v,c,f)}catch(h){v[c]=f}if(v[l]||s(v,l,u),i[u])for(var p in r)if(v[p]!==r[p])try{s(v,p,r[p])}catch(h){v[p]=r[p]}}}},e54d:function(t,e,a){"use strict";var n=a("9960"),i=a.n(n);e["default"]=i.a},ea4c:function(t,e,a){},fb6a:function(t,e,a){"use strict";var n=a("23e7"),i=a("861d"),r=a("e8b5"),s=a("23cb"),o=a("50c4"),c=a("fc6a"),l=a("8418"),f=a("b622"),u=a("1dde"),d=a("ae40"),v=u("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),h=f("species"),g=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var a,n,f,u=c(this),d=o(u.length),v=s(t,d),p=s(void 0===e?d:e,d);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?i(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return g.call(u,v,p);for(n=new(void 0===a?Array:a)(y(p-v,0)),f=0;v<p;v++,f++)v in u&&l(n,f,u[v]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-c3e2665a.3c086945.js.map