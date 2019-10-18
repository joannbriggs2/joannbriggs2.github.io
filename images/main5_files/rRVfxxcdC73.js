if (self.CavalryLogger) { CavalryLogger.start_js(["e\/6qW"]); }

__d("AdsInterfacesRouteUpdateParamsDataActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"ADS_INTERFACES_ROUTE-UPDATE_PARAMS"}}),null);
__d("AdsVideoUploadConsts",[],(function(a,b,c,d,e,f){"use strict";a="video_upload_0";e.exports={DEFAULT_UPLOADER_KEY:a}}),null);
__d("ArgumentError",["ManagedError"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c){return a.call(this,b,c)||this}return b}(b("ManagedError"));e.exports=a}),null);
__d("flattenObject",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){var b={};for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(null===d||void 0===d)continue;else typeof d==="string"?b[c]=d:b[c]=JSON.stringify(d)}return b};e.exports=a}),null);
__d("sdk.URI",["QueryString","URIBase"],(function(a,b,c,d,e,f){__p&&__p();var g=/\.facebook\.com$/,h={serialize:function(a){return a?b("QueryString").encode(a):""},deserialize:function(a){return a?b("QueryString").decode(a):{}}};a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){return a.call(this,b,h)||this}var d=c.prototype;d.isFacebookURI=function(){return g.test(this.getDomain())};d.valueOf=function(){return this.toString()};c.isValidURI=function(a){return b("URIBase").isValid(a,h)};return c}(b("URIBase"));e.exports=a}),null);
__d("ApiClientUtils",["ArgumentError","Assert","Log","flattenObject","sdk.URI","sprintf"],(function(a,b,c,d,e,f){__p&&__p();var g={get:!0,post:!0,"delete":!0,put:!0};function a(a){__p&&__p();var c=a.shift();b("Assert").isString(c,"Invalid path");!/^https?/.test(c)&&c.charAt(0)!=="/"&&(c="/"+c);var d={};try{c=new(b("sdk.URI"))(c)}catch(a){throw new(b("ArgumentError"))(a.message,a)}a.forEach(function(a){return d[typeof a]=a});a=(d.string||"get").toLowerCase();b("Assert").isTrue(Object.prototype.hasOwnProperty.call(g,a),b("sprintf")("Invalid method passed to ApiClient: %s",a));var e=d["function"];e||b("Log").warn("No callback passed to the ApiClient");d.object&&c.addQueryData(b("flattenObject")(d.object));var f=c.getQueryData();f.method=a;return{uri:c,callback:e,params:f}}e.exports={parseCallDataFromArgs:a}}),null);
__d("sdk.safelyParseResponse",["errorCode","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();c=function(a,b,c){return h};function a(a,d){d===void 0&&(d=null);try{return a===null?h:JSON.parse(b("nullthrows")(a))}catch(b){return c(b,a,d)}}var h={error:{code:1,error_subcode:1357046,message:"Received Invalid JSON reply.",type:"http"}};a.ERROR=h;a.setErrorHandler=function(a){c=a};e.exports=a}),null);
__d("ApiBatcher",["invariant","ApiClientUtils","QueryString","sdk.safelyParseResponse","whitelistObjectKeys"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=50,i=105440539523;a=function(){__p&&__p();function a(a,b){this.$1=[],this.$2=[],this.$4=null,this.executeRequest=a,this.$3=b}var c=a.prototype;c.scheduleBatchCall=function(){var b=this;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];var f=a.prepareBatchParams(d),g=f.body,i=f.callback,j=f.method,k=f.relative_url,l={method:j,relative_url:k};g&&(l.body=g);this.$1.push(l);this.$2.push(i);this.$1.length==h?(this.$4&&clearTimeout(this.$4),this.$5()):this.$4||(this.$4=setTimeout(function(){b.$5()},0))};a.prepareBatchParams=function(a,c){__p&&__p();c===void 0&&(c=[]);a=b("ApiClientUtils").parseCallDataFromArgs(a);var d=a.uri,e=a.callback;a=a.params.method;var f,g=d.removeQueryData("method").toString();if(a.toLowerCase()=="post"){var h=d.getQueryData();f=b("QueryString").encode(h);h=b("whitelistObjectKeys")(h,c);g=d.setQueryData(h).toString()}return{body:f,callback:e,method:a,relative_url:g}};c.$5=function(){__p&&__p();this.$1.length>0||g(0,4698);this.$1.length===this.$2.length||g(0,4699);var a=this.$1,c=this.$2;this.$1=[];this.$2=[];this.$4=null;if(a.length===1){var d=a[0],e=c[0],f=d.body?b("QueryString").decode(d.body):null;this.executeRequest(d.relative_url,d.method,f,e);return}this.executeRequest("/","POST",{batch:a,include_headers:!1,batch_app_id:this.$3||i},function(a){Array.isArray(a)?a.forEach(function(a,d){c[d](b("sdk.safelyParseResponse")(a&&a.body))}):c.forEach(function(a){return a({error:{message:"Fatal: batch call failed."}})})})};return a}();e.exports=a}),null);
__d("RequestConstants",["errorCode"],(function(a,b,c,d,e,f,g){a={code:1,error_subcode:1357045,message:"unknown error (empty response)",type:"http",status:0};e.exports={PARSE_ERROR_TEMPLATE:a}}),null);
__d("CORSRequest",["Log","QueryString","RequestConstants","sdk.safelyParseResponse","wrapFunction"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){__p&&__p();if(!self.XMLHttpRequest)return null;var d=new XMLHttpRequest(),e=function(){};if("withCredentials"in d)d.open(a,c,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded");else if(self.XDomainRequest){d=new XDomainRequest();try{d.open(a,c),d.onprogress=d.ontimeout=e}catch(a){return null}}else return null;var f={send:function(a){d.send(a)}},g=b("wrapFunction")(function(){g=e,"onload"in f&&f.onload(d)},"entry","XMLHttpRequest:load"),h=b("wrapFunction")(function(){h=e,"onerror"in f&&f.onerror(d)},"entry","XMLHttpRequest:error");d.onload=function(){g()};d.onerror=function(){h()};d.onreadystatechange=function(){d.readyState==4&&(d.status==200?g():h())};return f}function a(a,c,d,e){__p&&__p();if(a.includes("/../")||a.includes("/..\\")||a.includes("\\../")||a.includes("\\..\\")){b("Log").error("CORSRequest.execute(): path traversal is not allowed.");return!1}d.suppress_http_code=1;d=b("QueryString").encode(d);c!="post"&&(a=b("QueryString").appendToUrl(a,d),d="");c=g(c,a);if(!c)return!1;c.onload=function(c){e(b("sdk.safelyParseResponse")(c.responseText,a))};c.onerror=function(c){c.responseText?e(b("sdk.safelyParseResponse")(c.responseText,a)):e({error:babelHelpers["extends"]({},b("RequestConstants").PARSE_ERROR_TEMPLATE,{status:c.status})})};c.send(d);return!0}c={execute:a};e.exports=c}),null);
__d("ChunkedRequest",["Log","QueryString","RequestConstants","sdk.safelyParseResponse","wrapFunction"],(function(a,b,c,d,e,f){__p&&__p();var g="{}",h=function(){"use strict";__p&&__p();function a(a){a===void 0&&(a="\r\n"),this.offset=0,this.delimiter="\r\n",this.delimiter=a}var b=a.prototype;b.parse=function(a,b){__p&&__p();b===void 0&&(b=!1);var c=[],d=a.substring(this.offset),e=0,f=d.indexOf(this.delimiter,e);f===0&&(e=this.delimiter.length,f=d.indexOf(this.delimiter,e));while(f>-1){var g=d.substring(e,f);g&&c.push(g);e=f+this.delimiter.length;f=d.indexOf(this.delimiter,e)}this.offset+=e;if(b&&d&&f===-1){g=a.substring(this.offset);c.push(g)}return c};return a}();function i(a,c){__p&&__p();if(!self.XMLHttpRequest)return null;var d=new XMLHttpRequest();if(!("withCredentials"in d))return null;d.open(a,c,!0);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");var e=new h(),f={send:function(a){d.send(a)}},i=b("wrapFunction")(function(a,b){if(f.onchunk){a=e.parse(a);a.forEach(function(a){return f.onchunk(a,b)});b&&f.onchunk(g,b)}},"entry","XMLHttpRequest:onchunk"),j=b("wrapFunction")(function(){f.onerror&&f.onerror(d)},"entry","XMLHttpRequest:error");d.onerror=j;d.onreadystatechange=function(){d.readyState==4?d.status===200?i(d.responseText,!0):j():d.readyState==3&&i(d.responseText,!1)};return f}function a(a,c,d,e){__p&&__p();if(a.includes("/../")||a.includes("/..\\")||a.includes("\\../")||a.includes("\\..\\")){b("Log").error("ChunkedRequest.execute(): path traversal is not allowed.");return!1}d.suppress_http_code=1;d=b("QueryString").encode(d);c!="post"&&(a=b("QueryString").appendToUrl(a,d),d="");c=i(c,a);if(!c)return!1;c.onchunk=function(a,c){e(b("sdk.safelyParseResponse")(a),c)};c.onerror=function(a){a.responseText?e(b("sdk.safelyParseResponse")(a.responseText)):e({error:babelHelpers["extends"]({},b("RequestConstants").PARSE_ERROR_TEMPLATE,{status:a.status})})};c.send(d);return!0}c={execute:a};e.exports=c}),null);
__d("DOMWrapper",[],(function(a,b,c,d,e,f){"use strict";var g,h;a={setRoot:function(a){g=a},getRoot:function(){return g||document.body},setWindow:function(a){h=a},getWindow:function(){return h||self}};e.exports=a}),null);
__d("GlobalCallback",["DOMWrapper","dotAccess","guid","wrapFunction"],(function(a,b,c,d,e,f){__p&&__p();var g,h;a={setPrefix:function(a){g=b("dotAccess")(b("DOMWrapper").getWindow(),a,!0),h=a},create:function(a,c){g||this.setPrefix("__globalCallbacks");var d=b("guid")();g[d]=b("wrapFunction")(a,"entry",(a=c)!=null?a:"GlobalCallback");return h+"."+d},remove:function(a){a=a.substring(h.length+1);delete g[a]}};e.exports=a}),null);
__d("JSONPRequest",["DOMWrapper","GlobalCallback","Log","QueryString"],(function(a,b,c,d,e,f){__p&&__p();var g=2e3,h=!1;function a(a,c,d,e){__p&&__p();if(a.includes("/../")||a.includes("/..\\")||a.includes("\\../")||a.includes("\\..\\")){b("Log").error("JSONPRequest.execute(): path traversal is not allowed.");return!1}var f=document.createElement("script"),i=function(a){i=function(){},b("GlobalCallback").remove(d.callback),e(a),f.parentNode.removeChild(f)};d.callback=b("GlobalCallback").create(i);d.method||(d.method=c);a=b("QueryString").appendToUrl(a,d);if(!h&&a.length>g){b("GlobalCallback").remove(d.callback);return!1}f.onerror=function(){i({error:{type:"http",message:"unknown error"}})};var j=function(){setTimeout(function(){i({error:{type:"http",message:"unknown error"}})},0)};f.addEventListener?f.addEventListener("load",j,!1):f.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&j()};f.src=a;b("DOMWrapper").getRoot().appendChild(f);return!0}function c(){h=!0}d={execute:a,ignoreMaxQuerystringLength:c,MAX_QUERYSTRING_LENGTH:g};e.exports=d}),null);
__d("ObservableMixin",[],(function(a,b,c,d,e,f){__p&&__p();function a(){this.__observableEvents={}}a.prototype={inform:function(a){__p&&__p();var b=Array.prototype.slice.call(arguments,1),c=Array.prototype.slice.call(this.getSubscribers(a));for(var d=0;d<c.length;d++){if(c[d]===null)continue;try{c[d].apply(this,b)}catch(a){window.setTimeout(function(){throw a},0)}}return this},getSubscribers:function(a){return this.__observableEvents[a]||(this.__observableEvents[a]=[])},clearSubscribers:function(a){a&&(this.__observableEvents[a]=[]);return this},subscribe:function(a,b){a=this.getSubscribers(a);a.push(b);return this},unsubscribe:function(a,b){a=this.getSubscribers(a);for(var c=0;c<a.length;c++)if(a[c]===b){a.splice(c,1);break}return this}};e.exports=a}),null);
__d("UrlMap",["invariant","UrlMapConfig"],(function(a,b,c,d,e,f,g){a={resolve:function(a){var c="https";if(a in b("UrlMapConfig"))return c+"://"+b("UrlMapConfig")[a];a in b("UrlMapConfig")||g(0,2511,a);return""}};e.exports=a}),null);
__d("ApiClient",["ApiBatcher","ApiClientUtils","Assert","ChunkedRequest","CORSRequest","JSONPRequest","Log","ObservableMixin","QueryString","UrlMap","flattenObject"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j=[],k=b("JSONPRequest").MAX_QUERYSTRING_LENGTH,l={fql_query:!0,fql_multiquery:!0,friends_get:!0,notifications_get:!0,stream_get:!0,users_getinfo:!0},m=["cors","jsonp"],n=0,o=[],p=0,q=0,r,s=b("Log");function t(a,c,d,e){__p&&__p();var f=p!==0&&n>=p;if(f){o.push(function(){return t(a,c,d,e)});w.inform("request.queued",a,c,d);return}n++;var h=babelHelpers["extends"]({},i,d);h.pretty=h.pretty||0;h=b("flattenObject")(h);f={jsonp:b("JSONPRequest"),cors:b("CORSRequest"),chunked:b("ChunkedRequest")};var k={},l=h.access_token||g;l&&(k.access_token=l);c!=="get"&&j.forEach(function(a){k[a]=h[a]});l=Object.keys(k);l.length>0&&(a=b("QueryString").appendToUrl(a,k),delete h.access_token);l=m;for(var q=0;q<l.length;q++){var r=f[l[q]],s=Object.assign({},h);if(r.execute(a,c,s,e))return}e({error:{type:"no-transport",message:"Could not find a usable transport for request"}})}function u(a,b,c,d,e,f,g,h){__p&&__p();if(d.transport&&d.transport==="chunked"&&h===!1){a(g,!1);return}g&&g.error&&w.inform("request.error",b,c,d,g,Date.now()-e,f);w.inform("request.complete",b,c,d,g,Date.now()-e,f);n--;a&&a(g);h=o.length>0&&n<p;if(h){b=o.shift();b()}}function v(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var e=b("ApiClientUtils").parseCallDataFromArgs(c),f=e.uri,g=e.callback,h=e.params,i=h.method;x(f,i)&&(i="post");var j=f.getProtocol()&&f.getDomain()?f.setQueryData({}).toString():b("UrlMap").resolve("graph")+f.getPath(),k=q++;w.inform("request.prepare",j,h,k);t(j,i=="get"?"get":"post",h,u.bind(null,g,f.getPath(),i,h,Date.now(),k))}function a(){var a;r||(r=new(b("ApiBatcher"))(v,h));(a=r).scheduleBatchCall.apply(a,arguments)}function c(a,c){__p&&__p();b("Assert").isObject(a);b("Assert").isString(a.method,"method missing");c||s.warn("No callback passed to the ApiClient");var d=a.method.toLowerCase().replace(".","_");a.format="json-strings";a.api_key=h;d=d in l?"api_read":"api";d=b("UrlMap").resolve(d)+"/restserver.php";var e=q++;c=u.bind(null,c,"/restserver.php","get",a,Date.now(),e);t(d,"get",a,c)}function d(a){return b("ApiBatcher").prepareBatchParams(a,j)}var w=Object.assign(new(b("ObservableMixin"))(),{setAccessToken:function(a){g&&a&&g!==a&&s.error("You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."),g=a},setAccessTokenForClientID:function(a,b){g&&h&&h!==b?s.error("Not overriding access token since it was not initialized by your application."):g=a},getClientID:function(){return h},getAccessToken:function(){return g},setClientID:function(a){h&&h!==a&&s.warn("Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."),h=a},setDefaultParams:function(a){i=a},setDefaultTransports:function(a){m=a},setLogger:function(a){s=a},setMaxConcurrentRequests:function(a){p=a},setKeptQueryParams:function(a){j=a},getCurrentlyExecutingRequestCount:function(){return n},getQueuedRequestCount:function(){return o.length},rest:c,graph:v,scheduleBatchCall:a,prepareBatchParams:d});function x(a,b){return a.toString().length>k&&b==="get"}e.exports=w}),null);
__d("ads-lib-connect_DEPRECATED",["ApiClient","ArbiterMixin","URI","flattenObject","mixin"],(function(a,b,c,d,e,f){__p&&__p();d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.events={NEW_NETWORK_DATA_AVAILABLE:"newNetworkDataAvailable"},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.api=function(a){var c={};Array.prototype.slice.call(arguments,1).forEach(function(a){c[typeof a]=a});var d=c.string,e=c.object,f=c["function"],g=Date.now(),i=function(b){var c=Date.now();h({path:a,method:d,params:e,response:b,start:g,end:c,baseURL:window.location.href});f&&f(b)},j=[a,d,e,i].filter(function(a){return!!a});b("ApiClient").graph.apply(b("ApiClient"),j)};d.url=function(a,c,d){a&&a.substring(0,1)!="/"&&(a="/"+a);c=c||{};c.access_token=d;c=b("flattenObject")(c);return new(b("URI"))(window.location.href).setPath(a).setSubdomain("graph").setQueryData(c).toString()};return c}(b("mixin")(b("ArbiterMixin")));var g=new d();function h(a){g.inform(g.events.NEW_NETWORK_DATA_AVAILABLE,a,"event")}function a(a){return!a||a.error||a.error_msg}function c(a){return!a?{}:{msg:a.error_msg||a.error&&(a.error.error_user_msg||a.error.message)||a.error,code:a.error_code||a.error&&a.error.code,type:a.error_type||a.error&&a.error.type,subcode:a.error_subcode||a.error&&a.error.error_subcode}}f.FB=g;f.getErrorMessage=c;f.isError=a}),null);
__d("AHGLogUtils",["AdsInterfacesLogEvents","AdsInterfacesLogger","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsInterfacesLogEvents").EventCategory,h="IntelligentComponent",i={_log:function(a,c){b("AdsInterfacesLogger").log({eventCategory:g.USER_ACTION,eventName:a,data:c})},logInitStore:function(a){var b;i._log("ahg_init_store",(b={},b.sitevar_value=a,b.ahg_log_source=h,b))},logAYMTTipsLoaded:function(a){var b;i._log("ahg_messages_loaded",(b={},b.ahg_loaded_messages=a,b.ahg_log_source=h,b))},logLinkClick:function(a,b,c,d){var e;i._log("ahg_link_click",(e={},e.component_name=a,e.to_uri=b,e.subobject_category=c,e.subobject_type=d,e.ahg_log_source=h,e))},logHelpTrayLinkClick:function(a,b){var c;i._log("ahg_help_tray_link_click",(c={},c.component_name=a,c.cms_id=b,c.ahg_log_source=h,c))},logMessageClick:function(a,b,c,d,e,f){var g;i._log("ahg_message_click",(g={},g.component_name=a,g.message_id=b,g.ahg_placement=d,g.subobject_category=e,g.subobject_type=f,g.ahg_fbjoiner_key=c,g.ahg_log_source=h,g))},logXOut:function(a,b,c,d){var e;i._log("ahg_x_out",(e={},e.message_format=a,e.component_name=b,e.message_id=c,e.ahg_fbjoiner_key=d,e.ahg_log_source=h,e))},logImpression:function(a,b,c,d,e,f,g,j,k,l,m){var n;i._log("ahg_impression",(n={},n.ahg_ad_object_id=a,n.message_format=b,n.component_name=c,n.message_id=d,n.ahg_placement=f,n.ahg_message_group=g,n.ahg_message_type=j,n.ahg_message_type_id=k,n.ahg_fbjoiner_key=e,n.ahg_score=l,n.ahg_experiments=m,n.ahg_log_source=h,n))},logMountContainer:function(a,b,c,d){var e;i._log("ahg_mount_container",(e={},e.message_format=a,e.component_name=b,e.message_id=c,e.card_category=d,e.ahg_log_source=h,e))},logUnmountContainer:function(a,b,c,d,e){var f;i._log("ahg_unmount_container",(f={},f.message_format=a,f.component_name=b,f.message_id=c,f.ahg_invisible_reason=d,f.ahg_log_source=h,f.ahg_message_group=e,f))},logCloseMessage:function(a,b,c,d){var e;i._log("ahg_close_message",(e={},e.message_format=a,e.message_id=b,e.ahg_placement=c,e.ahg_message_group=d,e.ahg_log_source=h,e))},logCompleteTour:function(a,b){var c;i._log("ahg_complete_tour",(c={},c.component_name=a,c.message_id=b,c.ahg_log_source=h,c))},logTourStep:function(a,b,c){var d;i._log("ahg_tour_step",(d={},d.component_name=a,d.message_id=b,d.ahg_tour_step=c,d.ahg_log_source=h,d))},logResetCap:function(a,b){var c;i._log("ahg_reset_cap",(c={},c.ahg_placement=a,c.ahg_available_cap=b,c.ahg_log_source=h,c))},logEligibleMessages:function(a,b){a.forEach(function(a){var c;i._log("ahg_message_eligible",(c={},c.message_id=a.getID(),c.ahg_score=a.getScore(),c.recommend_message=b,c.ahg_log_source=h,c))})}};e.exports=i}),null);
__d("memoizeWithArgsLFUCache",["LFUCache","MemoizationInstrumentation"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d){var e,f=d||a.name||"unknown";d=function(){e||(e=new(b("LFUCache"))());var d=b("MemoizationInstrumentation").onFunctionCall("memoizeWithArgsLFUCache",f),g=c.apply(void 0,arguments),h=!0;e.has(g)||(h=!1,e.set(g,a.apply(void 0,arguments)));var i=e.get(g);d&&d(h);return i};return d}e.exports=a}),null);
__d("adsMemoizeWithArgs",["memoizeWithArgsLFUCache"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){return b("memoizeWithArgsLFUCache")(a,c,d)}e.exports=a}),null);
__d("pickDeep",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b,c){var d={},e=b;Object.keys(e).forEach(function(b){var f=e[b];h(f)&&(!c||c(f))?d[b]=g(h(a[b])?a[b]:{},f,c):d[b]=a[b]});return d}function h(a){return Object.prototype.toString.call(a)==="[object Object]"}e.exports=g}),null);
__d("AdsPluginSet",["invariant","adsMemoizeWithArgs","areEqual","immutable","pickDeep"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,c,d){__p&&__p();var f=this;this.getByMixed=b("adsMemoizeWithArgs")(function(a){return f.$2.$1().find(function(b){return b.key===a})},function(a){return String(a)},e.id);this.get=b("adsMemoizeWithArgs")(function(a){return f.$2.filter(function(b){return b.key===a}).getOne()},function(a){return String(a)},e.id);this.$1=a;this.$2=c||this;this.$3=d}var c=a.prototype;c["default"]=function(b){return new a(this.$1,this.$2,b)};c.filter=function(a){return this.$4(this.getList().filter(a))};c.keys=function(a){var b=new Set(a);return this.filter(function(a){return b.has(a.key)}).$5(a)};c.withShape=function(a){var c=h(a),d=function(d){return b("areEqual")(a,b("pickDeep")(d,c))};return this.filter(d)};c.sort=function(a){return this.$4(this.getList().sort(a))};c.$5=function(a){__p&&__p();var b=new Map(a.map(function(a,b){return[a,b]}));a=function(a,c){__p&&__p();a=a&&a.key;c=c&&c.key;a=b.get(a)||0;c=b.get(c)||0;var d=a!=null,e=c!=null;if(d&&e)return a-c;else if(d)return-1;else if(e)return 1;else return 0};return this.sort(a)};c.getList=function(){var a=this,b=this.$1();return b.size===0&&this.$3?this.$2.$1().filter(function(b){return b.key===a.$3}):b};c.getArray=function(){return this.getList().toArray()};c.getMap=function(){return b("immutable").Map(this.getArray().map(function(a){return[a.key,a]}))};c.getNonEmptyArray=function(){return this.assertNotEmpty().getArray()};c.getNonEmptyList=function(){return this.assertNotEmpty().getList()};c.getNonEmptySet=function(){return this.assertNotEmpty().getSet()};c.getOne=function(){return this.assertOne().getList().get(0)};c.getSet=function(){return this.getList().toSet()};c.collect=function(a){return this.getList().reduce(function(b,c){c=a(c);return c?b.concat(c):b},b("immutable").List())};c.assertNotEmpty=function(){this.getList().size!==0||g(0,4777);return this};c.assertOne=function(){this.getList().size<=1||g(0,4778);this.getList().size===1||g(0,4779);return this};c.$4=function(b){return b===this.getList()?this:new a(function(){return b},this.$2,this.$3)};return a}();function h(a){var b={};Object.keys(a).forEach(function(c){var d=a[c];!d?b[c]=null:Object.prototype.toString.call(d)==="[object Object]"?b[c]=h(d):b[c]=null});return b}e.exports=a}),null);
__d("adsPluginsFactory",["AdsPluginSet","immutable","memoize"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=b("memoize")(function(){var d=a();d.forEach(c);return b("immutable").List(d)});return new(b("AdsPluginSet"))(d)}e.exports=a}),null);
__d("AdsVideoUploadStoreState",["AdsVideoUploadConsts","AdsVideoUploadStatus","immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({__internalUploader:null,encodingTime:null,errorMessage:null,entryPoint:null,newlyUploadedVideoErrors:null,progress:0,recentUploadedVideoID_DO_NOT_USE:null,status:b("AdsVideoUploadStatus").NONE,title:"",uploaderKey:b("AdsVideoUploadConsts").DEFAULT_UPLOADER_KEY,uploadTime:null,videoBackgroundUploadInfo:null,videoUploadPACInfo:null,videoUploadDLOInfo:null,fileHandle:null,uploadedUrl:null,isOriginallySphericalVideo:null,nonSphericalSiblingVideoID:null,sphericalSiblingVideoID:null,isSphericalToggleEnabled:!1});c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("AdsVideoUploadUtil",["invariant","AdsGraphAPI","AdsVideoUploadConsts","AdsVideoUploadStatus","AdsVideoUploadStoreState","URI","ads-lib-connect_DEPRECATED","immutable","memoizeWithArgsCapped"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ads-lib-connect_DEPRECATED").FB;c=20;function a(a,b,c){return String(a)+String(b)+String(c)}var i={generateUploaderKey:function(a){return"video_upload_"+a},generateCustomUploaderKey:function(a,b){return b+"_"+a},getVideoTitle:function(a){a=a.name;var b=a.lastIndexOf("\\");b===-1&&(b=a.lastIndexOf("/"));return b===-1?a:a.substring(b+1)},getPostEndpoint:function(a,c,d){var e="/v"+b("AdsGraphAPI").getVersion();e=new(b("URI"))(h.url(e+"/act_"+c+"/advideos",d?{title:d}:null,a));e.getSubdomain()==="graph"||g(0,3032,e.getSubdomain());e.setSubdomain("graph-video");return e.toString()},atLeastOneVideoUploading:function(a){return!!a&&a.some(function(a){return a.status===b("AdsVideoUploadStatus").UPLOADING||a.status===b("AdsVideoUploadStatus").ENCODING})},getDLOVideoUploadingForLanguage:function(a,b){return a.find(function(a){return a.videoUploadDLOInfo&&a.videoUploadDLOInfo.language===b})},getFirstErrorMessage:function(a){a=a&&a.find(function(a){return!!a.errorMessage});return a&&a.errorMessage},normalizeProgress:function(a){return a>=0&&a<=1?Math.round(a*100):a},generateFileMap:function(a,b,c){var d=new Map();c.forEach(function(c,e){d.set(i.generateCustomUploaderKey(a+e,b),c)});return d},isBulkVideoUploadComplete:function(a,c){a=a.filter(function(a,b){return c.has(b)});return a.size===c.size&&a.every(function(a,c){return b("AdsVideoUploadStatus").ERROR===a.status||null!=a.recentUploadedVideoID_DO_NOT_USE})},calculateBulkVideoUploadProgress:function(a,b){if(b.size===0)return 0;a=a.reduce(function(a,c,d){return b.has(d)?a+c.progress:a},0);return a/b.size},wrapLegacyUploadInfoAsImmMap:b("memoizeWithArgsCapped")(function(a,c,d){var e;return b("immutable").Map((e={},e[b("AdsVideoUploadConsts").DEFAULT_UPLOADER_KEY]=new(b("AdsVideoUploadStoreState"))({title:a||"",progress:c||0,status:d||b("AdsVideoUploadStatus").NONE}),e))},a,c)};e.exports=i}),null);
__d("AdsSelectorNameUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){if(a&&b)try{Object.defineProperty(a,"name",{value:b})}catch(a){}return a}function a(a,b){Object.keys(a).forEach(function(c){typeof a[c]==="function"&&a[c].getStores&&g(a[c],b+"."+c)})}e.exports={nameSelector:g,nameSelectorsInObject:a}}),null);
__d("makeStringifier",[],(function(a,b,c,d,e,f){__p&&__p();var g=2,h="ZdIw9v+v9/4lbv6A",i=h+"-1",j=h+"-2",k=h+"-3",l=h+"-4",m=h+"-5",n=6;function a(a){__p&&__p();var b=n,c=new WeakMap();function d(a,e){__p&&__p();switch(a){case void 0:return i;case null:return j;case NaN:return k;case Infinity:return l;case-Infinity:return m;default:switch(typeof a){case"boolean":case"string":case"number":return a;case"object":if(Array.isArray(a)&&e>0){var f=e-1;return a.map(function(a){return d(a,f)})}else{e=c.get(a);e||(e=b++,c.set(a,e));return h+"-"+e}default:return h+"-"+b++}}}function e(b){return JSON.stringify(d(a(b),g))}return e}e.exports=a}),null);
__d("adsCreateSelector",["AdsSelectorDebug","AdsSelectorInstrumentation","AdsSelectorNameUtils","AdsSelectorUtils","FBLogger","LRUKeyedExpiringCache","adsCacheSelector","gkx","ifRequired","makeStringifier","shallowArrayEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b,c){return a&&c(a[0],b)?a:[b]}function h(a,b,c){}function i(a,b,c,d,e){}function j(a,b,c){}function k(a,b){}function l(a,b){}function m(a,b){var c;return b?function(b){c||(c=a(b));return c}:a}function a(a,c){return a===c||Array.isArray(a)&&Array.isArray(c)&&b("shallowArrayEqual")(a,c)}function c(a,c){return a===c||Array.isArray(a)&&Array.isArray(c)&&b("shallowArrayEqual")(a,c)||b("ifRequired")("immutable",function(b){return b.Iterable.isIterable(a)&&b.Iterable.isIterable(c)&&b.is(a,c)},function(){return!1})}var n=b("gkx")("1134244")?c:a;function o(a){return a?function(b,c){return b===c||a(b,c)}:n}function p(a){return typeof a.getStores==="function"?a:null}function q(a,c,d,e,f,g,h){__p&&__p();b("AdsSelectorNameUtils").nameSelector(a,f+"-selectFn");var i={cacheHit:!0};a=a.bind(void 0,i);var j=b("adsCacheSelector")(a,d,e,h,f);a=Object.assign(function(a){i.cacheHit=!0;var c=b("AdsSelectorInstrumentation").onSelectorCall();a=j(a);c&&c({name:f,cacheHit:i.cacheHit});return a},{getStores:m(d,e),equal:g,isGetStoresStatic:e,rawSelectFn:c});b("AdsSelectorNameUtils").nameSelector(a,f);return a}function r(a,c,d,e,f){var h=null;return q(function(b,d){b.cacheHit=!1;b=c.apply(void 0,a.map(function(a){return a(d)}));h=g(h,b,e);return h[0]},c,function(d){return b("AdsSelectorUtils").getStores([].concat(a,[c]),d)},a.every(function(a){return a.isGetStoresStatic})&&c.isGetStoresStatic,d,e,f)}function s(a,c,d,e,f){if(b("gkx")("1105204")){a=a.set(c,{lastInputsForProps:d,lastResultForProps:e});a&&b("FBLogger")("ads").mustfix("Tried to cache selector (%s) results too many times. This happens when props change frequently or are always a different value.",f)}}function t(a,c,d,e,f){__p&&__p();var m=null,n=null,o=new(b("LRUKeyedExpiringCache"))(b("gkx")("1086990")&&f!=null?f:function(a){return a}),p=function(f,p){__p&&__p();var q=[];q.length=a.length;var r=!1;for(var t=0;t<a.length;t++)q[t]=a[t](p),(!n||n[t]!==q[t])&&(r=!0);t=o.get(p);if(b("gkx")("1105204"))if(t==null)k(p,o);else{var u=t.lastInputsForProps;t=t.lastResultForProps;if(b("shallowArrayEqual")(u,q)){l(p,o);n=u;m=[t];return m[0]}i(p,o,a,u,q)}if(!r&&n!=null&&m!=null){j(a,n,q);s(o,p,n,m[0],d);return m[0]}h(a,n,q);f.cacheHit=!1;t=c.apply(void 0,q);m=g(m,t,e);n=q;s(o,p,n,m[0],d);return m[0]};return q(p,c,function(c){return b("AdsSelectorUtils").getStores(a,c)},a.every(function(a){return a!=null&&a.isGetStoresStatic}),d,e,f)}function u(a,b,c,d){var e=null,f=[];return q(function(b){b.cacheHit=!1;b=a();e=g(e,b,c);return e[0]},a,function(){return f},!0,b,c,d)}function d(a,c,d){__p&&__p();var e;d===void 0&&(d={});e=(e=(e=d.name)!=null?e:c.name)!=null?e:"unnamedSelector";var f=d.hashProps;f=f?b("makeStringifier")(f):void 0;d=o(d.equal);var g=p(c);g?g=r(a,g,e,d,f):a.length?g=t(a,c,e,d,f):g=u(c,e,d,f);b("AdsSelectorNameUtils").nameSelector(g,e+"-wrappedSelector");return g}e.exports=d}),null);
__d("AdsFluxHooks",["invariant","AdsFluxCurrentContainer","FluxContainerInstrumentation","FluxContainerSubscriptions","Laminar","React","adsCreateSelector","shallowEqual","useSubscriptionValue"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("Laminar").laminarContainer,i=b("React").useCallback,j=b("React").useEffect,k=b("React").useMemo,l=b("React").useRef,m="adsFluxContainer(unknown)",n=new Error();function o(a,c,d){__p&&__p();var e=l(null),f=b("AdsFluxCurrentContainer").getCurrentContainer(),g=f!=null?f:m;f=i(function(){if(b("AdsFluxCurrentContainer").getCurrentContainer()==null)throw n;var d=b("FluxContainerInstrumentation").onCalculateStateStart(g),e=a(c);d&&d();return e},[a,c,g]);var h=i(function(c){__p&&__p();var f=a.getStores(d),h=new(b("FluxContainerSubscriptions"))(g,b("FluxContainerInstrumentation").hasInstrumentation()?function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(e.current==null&&(e.current=[]),b("FluxContainerInstrumentation").addStoreDependencies(e.current,a))}:null);h.setStores(f);f=function(){var a=b("FluxContainerInstrumentation").updateTracking;if(a!=null){var d=e.current!=null?e.current:[];e.current=null;a.storeEmitChange(null,g,d,a.getCurrentDispatch())}c()};h.addListener(f);return function(){return h.reset()}},[g,a,d]);j(function(){b("FluxContainerInstrumentation").hasInstrumentation()&&b("FluxContainerInstrumentation").updateTracking!=null&&b("FluxContainerInstrumentation").updateTracking.initialState(null,g)},[g]);return b("useSubscriptionValue")({getCurrentValue:f,subscribe:h})}function a(a,b,c){c=babelHelpers["extends"]({},c,{isFluxContainer:!0});a=h(a,b,c);return a}function c(a,c,d){var f=k(function(){var c=null;return b("adsCreateSelector")([a],function(a){(c==null||!b("shallowEqual")(c,a))&&(c=a);return c},{name:e.id})},[a]);return o(f,c,d)}e.exports={adsFluxContainer:a,useAdsSelector:o,useSelectorShallowEqual:c}}),null);
__d("adsCreateStoreSelector",["AdsSelectorNameUtils","adsCacheSelector","distinctArray","makeStringifier"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a,c,d){__p&&__p();d===void 0&&(d={});var e=d.name||c.name||"unnamedStoreSelector",f=Array.isArray(a),g=f?b("distinctArray")(a):[];a=f?function(){return g}:a;d=d.hashProps?b("makeStringifier")(d.hashProps):void 0;d=b("adsCacheSelector")(c,a,f,d,e);d.getStores=a;d.isGetStoresStatic=f;d.rawSelectFn=c;b("AdsSelectorNameUtils").nameSelector(d,e);return d};e.exports=a}),null);