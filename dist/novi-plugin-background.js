module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=o(r),a=n(8),l=o(a),u=novi.react.React,c={name:"novi-plugin-background",title:"Novi Background",description:"Novi Background description",version:"1.0.1",defaults:{querySelector:".novi-background"},ui:{editor:[i.default],settings:u.createElement(l.default,null)}};novi.plugins.register(c)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=t[0],o=!0;switch(n.type!==n.initData.type&&(o=!1),n.type){case d.default.COLOR:o&&n.color!==n.initData.color&&(o=!1),o||(novi.element.setInlineStyle(n.element,"background-color",n.color),n.element.style.backgroundColor=n.color,"none"!==window.getComputedStyle(n.element).backgroundImage&&(novi.element.setInlineStyle(n.element,"background-image","none"),n.element.style.backgroundImage="none"));break;case d.default.GRADIENT:o&&!y.isEqual(n.gradient,n.initData.gradient)&&(o=!1),o||(novi.element.setInlineStyle(n.element,"background-image",n.gradient.original),n.element.style.backgroundImage=n.gradient.original)}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=o(i),l=n(6),u=o(l),c=n(7),s=o(c),f=n(3),d=o(f),p=n(4),g=(o(p),novi.react.React),y=novi.utils.lodash,h={trigger:g.createElement(a.default,null),header:[g.createElement(u.default,null)],body:[g.createElement(s.default,null)],tooltip:"Change Background Color",closeIcon:"submit",title:"Change Background Color",width:324,height:169,onSubmit:r,submitOnBlur:!1};t.default=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),c=o(u),s=n(4),f=o(s),d=n(5),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),g=novi.react.React,y=novi.react.Component,h=novi.ui.colorSwatch,v=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),o=e.element,a=window.getComputedStyle(o,null),l=void 0,u=void 0,s=null;if(l=c.default.COLOR,u=a.backgroundColor,"none"!==a.backgroundImage)if(s=p.parseGradient(a.backgroundImage)){l=c.default.GRADIENT;for(var d=0;d<s.colorStopList.length;d++)s.colorStopList[d].position&&s.colorStopList[d].position.indexOf("px")>-1&&(s.colorStopList[d].position=Math.round(parseInt(s.colorStopList[d].position.replace("px",""))/o.offsetWidth*100)+"%");u=a.backgroundImage,f.default.setGradient(s),f.default.setGradientString(a.backgroundImage),f.default.setColor(null)}else f.default.setGradient(null),f.default.setGradientString(null);else if("rgba(0, 0, 0, 0)"===u)for(var g=o,y=void 0;g&&novi.utils.dom.isElementNode(g);){if(novi.element.hasStaticReference(g)&&(y=window.getComputedStyle(g,null),"rgba(0, 0, 0, 0)"!==y.backgroundColor)){u=y.backgroundColor;break}g=g.parentNode}return f.default.setType(l),l===c.default.COLOR&&(f.default.setColor(u),f.default.setGradient(null),f.default.setGradientString(null)),n.state={color:u},n}return a(t,e),l(t,[{key:"render",value:function(){return g.createElement("div",null,g.createElement(h,{color:this.state.color}))}}]),t}(y);t.default=v},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={COLOR:"color",GRADIENT:"gradient"}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(){function e(){o(this,e),this.type=a.default.COLOR,this.color=null,this.gradient=null,this.gradientString=null}return r(e,[{key:"getColor",value:function(){return this.color}},{key:"setColor",value:function(e){this.color=e}},{key:"getType",value:function(){return this.type}},{key:"setType",value:function(e){this.type=e}},{key:"getGradientString",value:function(){return this.gradientString}},{key:"setGradientString",value:function(e){this.gradientString=e}},{key:"setGradient",value:function(e){this.gradient=e}},{key:"getGradient",value:function(){return this.gradient}}]),e}(),u=new l;t.default=u},function(e,t){"use strict";function n(e){var t=r(),n=/.*gradient\s*\(((?:\([^\)]*\)|[^\)\(]*)*)\)/,o=n.exec(e);return null!==o&&i(t,o[1])}function o(e,t){var n=void 0,o="";for(n=0;n<e.length;n++)"string"==typeof e[n]?o+=e[n]:o+=e[n].source;return new RegExp(o,t)}function r(){var e=/(?:[+-]?\d*\.?\d+)(?:deg|grad|rad|turn)/,t=/to\s+((?:(?:left|right)(?:\s+(?:top|bottom))?)|(?:top|bottom))/,n=/\s*,\s*/,r=/\#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/,i=/\(\s*(?:[0-9]{1,3}\s*,\s*){2}[0-9]{1,3}\s*\)/,a=/\(\s*(?:[0-9]{1,3}\s*,\s*){3}(?:0|0?.[0-9]+)\s*\)/,l=/(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?/,u=/[_A-Za-z-][_A-Za-z0-9-]*/,c=o(["(?:",r,"|","(?:rgb|hsl)",i,"|","(?:rgba|hsla)",a,"|",u,")"],""),s=o([c,"(?:\\s+",l,")?"],""),f=o(["(?:",s,n,")*",s],"");return{gradientSearch:o(["(",o(["(?:(",e,")|",t,")?"],""),")",n,"(",f,")"],"gi"),colorStopSearch:o(["\\s*(",c,")","(?:\\s+","(",l,"))?","(?:",n,"\\s*)?"],"gi")}}function i(e,t){var n=void 0,o=void 0,r=void 0,i=void 0,a=void 0;if(null!==(o=e.gradientSearch.exec(t)))for(n={original:o[0],colorStopList:[]},o[2]&&(n.angle=o[2]),o[3]&&(n.sideCorner=o[3]),n.sideCorner||n.angle?(o[1]&&(n.line=o[1]),a=o[4]):(a=t,n.original=t),r=e.colorStopSearch.exec(a);null!==r;)i={color:r[1]},r[2]&&(i.position=r[2]),n.colorStopList.push(i),r=e.colorStopSearch.exec(a);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.parseGradient=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(4),c=o(u),s=n(3),f=o(s),d=novi.react.React,p=novi.react.Component,g=novi.ui.colorSwatch,y=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),o=c.default.getType();return n.state={value:o===f.default.COLOR?c.default.getColor():c.default.getGradientString()},n}return a(t,e),l(t,[{key:"render",value:function(){return d.createElement("div",{style:{display:"flex"}},d.createElement(g,{color:this.state.value}),d.createElement("span",null,"Change Background Color"))}}]),t}(p);t.default=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(4),c=o(u),s=n(3),f=o(s),d=novi.react.React,p=novi.react.Component,g=novi.ui.toolColor,y=novi.ui.radioGroup,h=novi.ui.toolGradient,v=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),o=c.default.getGradient()||{angle:45,colorStopList:[{color:"#0fa4f7"},{color:"#01edf7"}],original:"linear-gradient(45deg, #0fa4f7, #01edf7)"},a=c.default.getColor()||"#109DF7",l=c.default.getType();return l===f.default.GRADIENT&&novi.editor.setBodyHeight(274),n.state={type:l,gradient:o,color:a,initData:{type:l,gradient:o,color:a},element:e.element},n.renderColorFields=n.renderColorFields.bind(n),n.renderGradientFields=n.renderGradientFields.bind(n),n.onTypeChange=n.onTypeChange.bind(n),n.onGradientChange=n.onGradientChange.bind(n),n.onColorChange=n.onColorChange.bind(n),n.options=[{label:"Color",value:"color"},{label:"Gradient",value:"gradient"}],n.style="\n            .novi-background-wrap{\n                padding: 16px 12px 0;\n                display: flex;\n                flex-direction: column;\n                color: #6E778A;\n                box-sizing: border-box;\n            }\n            .novi-gradient-tool-wrap{\n                -webkit-animation: fadeIn 0.3s forwards;\n                animation: fadeIn 0.3s forwards;\n            }\n            \n            @-webkit-keyframes fadeIn {\n                from {opacity: 0;}\n                to {opacity: 1;}\n            } \n            \n            @keyframes fadeIn {\n            from {opacity: 0;}\n                to {opacity: 1;}\n            }\n            \n            \n        ",n.updateType=!1,n}return a(t,e),l(t,[{key:"componentDidUpdate",value:function(){this.updateType&&(novi.editor.setBodyHeight(this.state.type===f.default.GRADIENT?274:169),this.updateType=!1)}},{key:"renderColorFields",value:function(){return this.state.type===f.default.GRADIENT?null:d.createElement("div",null,d.createElement("p",{className:"novi-label",style:{margin:"20px 0 0 5px"}},"Color:"),d.createElement(g,{direction:"bottom-left",onChange:this.onColorChange,value:this.state.color}))}},{key:"renderGradientFields",value:function(){return this.state.type!==f.default.GRADIENT?null:d.createElement("div",{style:{marginTop:20},className:"novi-gradient-tool-wrap"},d.createElement(h,{value:this.state.gradient,onChange:this.onGradientChange,width:290,height:110}))}},{key:"onGradientChange",value:function(e){c.default.setColor(e.original),c.default.setGradient(e),c.default.setGradientString(e.original),this.setState({gradient:e})}},{key:"render",value:function(){return d.createElement("div",{className:"novi-background-wrap"},d.createElement("style",null,this.style),d.createElement("p",{className:"novi-label",style:{marginTop:0,marginLeft:5}},"Background Fill Type:"),d.createElement(y,{options:this.options,value:this.state.type,onChange:this.onTypeChange}),this.renderColorFields(),this.renderGradientFields())}},{key:"onColorChange",value:function(e){c.default.setColor(e),this.setState({color:e})}},{key:"onTypeChange",value:function(e){this.updateType=!0,this.setState({type:e})}}]),t}(p);t.default=v},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=novi.react.React,l=novi.react.Component,u=novi.ui.input,c=novi.ui.button,s=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.state={settings:e.settings},r.saveSettings=r.saveSettings.bind(r),r.onChange=r.onChange.bind(r),r}return r(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"Background Image Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),a.createElement(u,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(c,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-background",this.state.settings)}}]),t}(l);t.default=s}]);