if (self.CavalryLogger) { CavalryLogger.start_js(["PKGbB"]); }

__d("generateRTCCallID",["randomInt"],(function(a,b,c,d,e,f){"use strict";function a(){return b("randomInt")(0,4294967294)+1}e.exports=a}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function(a,b,c,d,e,f){__p&&__p();var g={_opts:{allowShrink:!0,strategy:"vector",timeout:100,widthElement:null},init:function(a){Object.assign(g._opts,a),setInterval(g._resizeCheck,g._opts.timeout)},_resizeCheck:function(){__p&&__p();var a=b("getViewportDimensions")(),c=g._getDocumentSize(),d=b("Layer").getTopmostLayer();if(d){d=d.getRoot().firstChild;var e=b("DOMDimensions").getElementDimensions(d);e.height+=b("DOMDimensions").measureElementBox(d,"height",!0,!0,!0);e.width+=b("DOMDimensions").measureElementBox(d,"width",!0,!0,!0);c.height=Math.max(c.height,e.height);c.width=Math.max(c.width,e.width)}d=c.height-a.height;e=c.width-a.width;e<0&&!g._opts.widthElement&&(e=0);e=e>1?e:0;!g._opts.allowShrink&&d<0&&(d=0);if(d||e)try{window.console&&window.console.firebug,window.resizeBy(e,d),e&&window.moveBy(e/-2,0)}catch(a){}},_getDocumentSize:function(){var c=b("DOMDimensions").getDocumentDimensions();g._opts.strategy==="offsetHeight"&&(c.height=document.body.offsetHeight);if(g._opts.widthElement){var d=b("DOMQuery").scry(document.body,g._opts.widthElement)[0];d&&(c.width=b("DOMDimensions").getElementDimensions(d).width)}d=a.Dialog;d&&d.max_bottom&&d.max_bottom>c.height&&(c.height=d.max_bottom);return c},open:function(a,c,d,e){return b("Popup").open(a,d,c,e)}};e.exports=g}),null);
__d("deepFreezeValue",["ImmutableValue"],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(a===null||a===void 0)return;switch(typeof a){case"string":return;case"boolean":return;case"number":return;case"function":return;default:b("ImmutableValue").deepFreezeRootNode(a)}}e.exports=a}),null);
__d("FavIcon",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i;function j(){var a=b("DOM").scry(document.head,"link");a&&a.forEach(function(a){(a.rel.indexOf("icon")!=-1||a.rel.indexOf("shortcut icon")!=-1)&&b("DOM").remove(a)})}a={isToggledResource:function(){return i&&g instanceof HTMLLinkElement&&g.href===i?!0:!1},set:function(a){g&&b("DOM").remove(g),j(),g=b("DOM").create("link",{type:"image/x-icon",rel:"icon",href:a}),b("DOM").appendContent(b("DOM").find(document,"head"),g)},setToggleResources:function(a,b){g=document.querySelector('link[rel*=icon][href*=".ico"]'),g instanceof HTMLLinkElement&&(h=b!=null?b:g.href,i=a)},toggle:function(){if(!g||!i)return;if(g.href===h){this.set(i);return}this.set(h)},toggleSet:function(a){if(!g||!i||!h)return;a=a?i:h;g.href!==a&&this.set(a)}};e.exports=a}),null);
__d("sdk.fbt",[],(function(a,b,c,d,e,f){a={_:function(a){return typeof a==="string"?a:a[0]}};e.exports=a}),null);
__d("SphericalMediaGyroOverlay.react",["cx","CSS","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=800,i=function(a,b,c){b===void 0&&(b=!0);c===void 0&&(c=!1);return{gyroRoot:"_1zvy"+(a?" _2dz7":"")+(b?" _4z8s":"")+(c?" _4z8p":""),gyroOuter:"_4z8q",gyroInner:"_4z8r",gyroMeridian:"_4z8t",gyroEquator:"_4z8u",gyroTextShell:"_4z8v",gyroText:"_4z8w"}};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidUpdate=function(a){var c=this;if(a.isActive&&!this.props.isActive)setTimeout(function(){var a=b("ReactDOM").findDOMNode(c);a instanceof Element&&b("CSS").hide(a)},h);else if(!this.props.isActive){a=b("ReactDOM").findDOMNode(this);a instanceof Element&&b("CSS").hide(a)}};d.componentDidMount=function(){if(!this.props.isActive){var a=b("ReactDOM").findDOMNode(this);a instanceof Element&&b("CSS").hide(a)}};d.render=function(){var a=this.props,c=a.className,d=a.isActive,e=a.isInfinite;a=a.isPaused;d=i(d,e,a);return b("React").jsx("div",{className:b("joinClasses")(c,d.gyroRoot),children:b("React").jsxs("div",{className:d.gyroOuter,children:[b("React").jsxs("div",{className:d.gyroInner,children:[b("React").jsx("div",{className:d.gyroMeridian}),b("React").jsx("div",{className:d.gyroEquator})]}),b("React").jsx("div",{className:d.gyroTextShell,children:b("React").jsx("span",{className:d.gyroText,children:"360"})})]})})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("StrSet",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$2={},this.$1=0,a&&this.addAll(a)}var b=a.prototype;b.add=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=!0,this.$1++);return this};b.addAll=function(a){a.forEach(this.add,this);return this};b.remove=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)&&(delete this.$2[a],this.$1--);return this};b.removeAll=function(a){a.forEach(this.remove,this);return this};b.toArray=function(){return Object.keys(this.$2)};b.toMap=function(a){var b={};Object.keys(this.$2).forEach(function(c){b[c]=typeof a==="function"?a(c):a||!0});return b};b.contains=function(a){return Object.prototype.hasOwnProperty.call(this.$2,a)};b.count=function(){return this.$1};b.clear=function(){this.$2={};this.$1=0;return this};b.clone=function(){return new a(this)};b.forEach=function(a,b){Object.keys(this.$2).forEach(a,b)};b.map=function(a,b){return Object.keys(this.$2).map(a,b)};b.some=function(a,b){return Object.keys(this.$2).some(a,b)};b.every=function(a,b){return Object.keys(this.$2).every(a,b)};b.filter=function(b,c){return new a(Object.keys(this.$2).filter(b,c))};b.union=function(a){return this.clone().addAll(a)};b.intersect=function(a){return this.filter(function(b){return a.contains(b)})};b.difference=function(a){var b=this;return a.filter(function(a){return!b.contains(a)})};b.equals=function(a){__p&&__p();var b=function(a,b){return a===b?0:a<b?-1:1},c=this.toArray();a=a.toArray();if(c.length!==a.length)return!1;var d=c.length;c=c.sort(b);a=a.sort(b);while(d--)if(c[d]!==a[d])return!1;return!0};return a}();e.exports=a}),null);
__d("groupArray",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c={};a.forEach(function(d,e){e=b(d,e,a);c[e]||(c[e]=[]);c[e].push(d)});return c}e.exports=a}),null);
__d("range",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){c=c==null||c===0?a<b?1:-1:c;var d=-1;b=Math.max(Math.ceil((b-a)/c),0);var e=Array(b);a=a;while(b--)e[++d]=a,a+=c;return e}e.exports=a}),null);
__d("Queue",[],(function(a,b,c,d,e,f){__p&&__p();var g={};a=function(){"use strict";__p&&__p();function a(a){this._timeout=null,this._interval=(a==null?void 0:a.interval)||0,this._processor=a==null?void 0:a.processor,this._queue=[],this._stopped=!0}var b=a.prototype;b._dispatch=function(a){__p&&__p();var b=this;a===void 0;if(this._stopped||this._queue.length===0)return;a=this._processor;if(a==null){this._stopped=!0;throw new Error("No processor available")}var c=this._interval;if(c!=null)a.call(this,this._queue.shift()),this._timeout=setTimeout(function(){return b._dispatch()},c);else while(this._queue.length)a.call(this,this._queue.shift())};b.enqueue=function(a){this._processor&&!this._stopped?this._processor(a):this._queue.push(a);return this};b.start=function(a){a&&(this._processor=a);this._stopped=!1;this._dispatch();return this};b.isStarted=function(){return!this._stopped};b.dispatch=function(){this._dispatch(!0)};b.stop=function(a){this._stopped=!0;a&&this._timeout!=null&&clearTimeout(this._timeout);return this};b.merge=function(a,b){if(b){(b=this._queue).unshift.apply(b,a._queue)}else{(b=this._queue).push.apply(b,a._queue)}a._queue=[];this._dispatch();return this};b.getLength=function(){return this._queue.length};a.get=function(b,c){var d;b in g?d=g[b]:d=g[b]=new a(c);return d};a.exists=function(a){return a in g};a.remove=function(a){return delete g[a]};return a}();e.exports=a}),null);
__d("SphericalMediaConstants",[],(function(a,b,c,d,e,f){"use strict";a={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HALF_EQUIRECT_PARTIAL_LIMIT:85,HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",stories:"stories",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};e.exports=a}),null);
__d("SphericalPhotoPartialLimits",["ImmutableRecordWithV4Types"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("ImmutableRecordWithV4Types").Record;var g=a({partialLeftDegrees:null,partialRightDegrees:null,partialTopDegrees:null,partialBottomDegrees:null});e.exports={getPartialLimits:function(a){__p&&__p();var b=Number(a.croppedAreaImageHeightPixels)||0,c=Number(a.croppedAreaImageWidthPixels)||0,d=Number(a.croppedAreaLeftPixels)||0,e=Number(a.croppedAreaTopPixels)||0,f=Number(a.fullPanoHeightPixels)||0;a=Number(a.fullPanoWidthPixels)||0;var h,i,j,k;if(c!==0&&c!==a&&c+d<=a){c=360*c/a;j=180*(1-2*d/a);k=c-j}b!==0&&b!==f&&b+e<=f&&(e!==0&&(h=90*(1-2*e/f)),e+b!==f&&(i=180*(e+b-f/2)/f));return g({partialTopDegrees:h,partialBottomDegrees:i,partialLeftDegrees:j,partialRightDegrees:k})},normalizePhotoRendererViewWithPartialLimits:function(a,b){__p&&__p();var c=b.partialLeftDegrees,d=b.partialRightDegrees,e=b.partialTopDegrees;b=b.partialBottomDegrees;if(c||c===0){c=-1*c;a.yaw<c&&(a.yaw=c)}if(d||d===0){c=d;a.yaw>c&&(a.yaw=c)}d=e||e===0;c=b||b===0;e=e||0;b=-1*(b||0);d&&(a.pitch>e&&(a.pitch=e));c&&(a.pitch<b&&(a.pitch=b));d&&c&&(e<0&&e<b?a.pitch=b:b>0&&e<b&&(a.pitch=e));return a},normalizeViewWithPartialLimits:function(a,b){__p&&__p();var c=b.partialLeftDegrees,d=b.partialRightDegrees,e=b.partialTopDegrees;b=b.partialBottomDegrees;if(c){c=-1*(c-a.fov/2);a.yaw<c&&(a.yaw=c)}if(d){c=d-a.fov/2;a.yaw>c&&(a.yaw=c)}if(e){d=e-a.fov/2;a.pitch>d&&(a.pitch=d)}if(b){c=-1*(b-a.fov/2);a.pitch<c&&(a.pitch=c)}return a},makePartialLimits:g}}),null);
__d("BinaryIndexedTree",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a){return Math.floor(a/2)},i=a.Int32Array||function(a){var b=[];for(var a=a-1;a>=0;--a)b[a]=0;return b};function j(a){var b=1;while(b<a)b*=2;return b}b=function(){__p&&__p();function a(a){this.$1=a.length;this.$2=j(this.$1);this.$3=new i(2*this.$2);var b;for(b=0;b<this.$1;++b)this.$3[this.$2+b]=a[b];for(b=this.$2-1;b>0;--b)this.$3[b]=this.$3[2*b]+this.$3[2*b+1]}a.uniform=function(b,c){var d=[];for(var b=b-1;b>=0;--b)d[b]=c;return new a(d)};a.empty=function(b){return a.uniform(b,0)};var b=a.prototype;b.set=function(a,b){0<=a&&a<this.$1||g(0,5188,a);a=this.$2+a;this.$3[a]=b;a=h(a);for(;a!==0;a=h(a))this.$3[a]=this.$3[2*a]+this.$3[2*a+1]};b.get=function(a){0<=a&&a<this.$1||g(0,5188,a);a=this.$2+a;return this.$3[a]};b.getSize=function(){return this.$1};b.sumUntil=function(a){0<=a&&a<this.$1+1||g(0,5188,a);if(a===0)return 0;a=this.$2+a-1;var b=this.$3[a];for(;a!==1;a=h(a))a%2===1&&(b+=this.$3[a-1]);return b};b.sumTo=function(a){0<=a&&a<this.$1||g(0,5188,a);return this.sumUntil(a+1)};b.sum=function(a,b){a<=b||g(0,5189);return this.sumUntil(b)-this.sumUntil(a)};b.greatestLowerBound=function(a){__p&&__p();if(a<0)return-1;var b=1;if(this.$3[b]<=a)return this.$1;while(b<this.$2){var c=this.$3[2*b];a<c?b=2*b:(b=2*b+1,a-=c)}return b-this.$2};b.greatestStrictLowerBound=function(a){__p&&__p();if(a<=0)return-1;var b=1;if(this.$3[b]<a)return this.$1;while(b<this.$2){var c=this.$3[2*b];a<=c?b=2*b:(b=2*b+1,a-=c)}return b-this.$2};b.leastUpperBound=function(a){return this.greatestStrictLowerBound(a)+1};b.leastStrictUpperBound=function(a){return this.greatestLowerBound(a)+1};return a}();e.exports=b}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){__p&&__p();try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){__p&&__p();var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);
__d("URLSearchParams",[],(function(a,b,c,d,e,f){__p&&__p();var g=/\+/g,h=/[!\'()*]/g,i=/%20/g;function j(a){return encodeURIComponent(a).replace(i,"+").replace(h,function(a){return"%"+a.charCodeAt(0).toString(16)})}function k(a){return decodeURIComponent((a=a)!=null?a:"").replace(g," ")}var l=typeof Symbol==="function"?Symbol.iterator:"@@iterator";a=function(){"use strict";__p&&__p();function a(a){a===void 0&&(a="");a=a;a[0]==="?"&&(a=a.substr(1));this.$1=a.length?a.split("&").map(function(a){a=a.split("=");var b=a[0];a=a[1];return[k(b),k(a)]}):[]}var b=a.prototype;b.append=function(a,b){this.$1.push([a,String(b)])};b["delete"]=function(a){for(var b=0;b<this.$1.length;b++)this.$1[b][0]===a&&(this.$1.splice(b,1),b--)};b.entries=function(){return this.$1[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b.get=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return this.$1[b][1];return null};b.getAll=function(a){var b=[];for(var c=0,d=this.$1.length;c<d;c++)this.$1[c][0]===a&&b.push(this.$1[c][1]);return b};b.has=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return!0;return!1};b.keys=function(){var a=this.$1.map(function(a){var b=a[0];a[1];return b});return a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b.set=function(a,b){var c=!1;for(var d=0;d<this.$1.length;d++)this.$1[d][0]===a&&(c?(this.$1.splice(d,1),d--):(this.$1[d][1]=String(b),c=!0));c||this.$1.push([a,String(b)])};b.toString=function(){return this.$1.map(function(a){var b=a[0];a=a[1];return j(b)+"="+j(a)}).join("&")};b.values=function(){var a=this.$1.map(function(a){a[0];a=a[1];return a});return a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b[l]=function(){return this.entries()};return a}();e.exports=a}),null);