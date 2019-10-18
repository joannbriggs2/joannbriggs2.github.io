if (self.CavalryLogger) { CavalryLogger.start_js(["PTX6j"]); }

__d("CookieConsentBlacklistedHrefs",[],(function(a,b,c,d,e,f){e.exports={hrefs:["/about/basics","/privacy/explanation","/ads/settings","/help/111814505650678","/help/1561485474074139","/help/568137493302217","/help/769828729705201","/help/cookies","/policies/cookies","/policy/cookies"]}}),null);
__d("XConsentCookieController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cookie/consent/",{})}),null);
__d("DeferredCookie",["requireCond","Cookie","CookieConsent","cr:1109759","SubscriptionList","cr:1083116","XConsentCookieController","cr:1069930","promiseDone","cr:1083117"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();a={shouldAddDefaultListener:!0,defaultHandler:null,sentConsentToServer:!1,callbacks:new(b("SubscriptionList"))(),addToQueue:function(a,c,d,e,f,h,i){if(!b("CookieConsent").isDeferCookies()){f?b("Cookie").setWithoutChecksIfFirstPartyContext(a,c,d,e,i):b("Cookie").setWithoutChecks(a,c,d,e,i);return}if(g.has(a))return;g.set(a,{name:a,value:c,nMilliSecs:d,path:e,firstPartyOnly:f,secure:i});h&&this.addDefaultInteractionListener()},flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing:function(){g.forEach(function(a,c){a.firstPartyOnly?b("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure):b("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure)}),b("CookieConsent").setConsented(),this.callbacks.fireCallbacks(),g=new Map(),this.removeDefaultInteractionListener()},flushAllCookies:function(){this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();if(!this.sentConsentToServer){var a=b("XConsentCookieController").getURIBuilder().getURI();this.sentConsentToServer=!0;b("cr:1069930")!=null?b("promiseDone")(b("cr:1069930")(a.toString(),{data:{},method:"POST"}),null,function(a){b("cr:1083117")&&b("cr:1083117")("Cookie consent has not been set successfully: "+a.errorMsg,"comet_infra")}):b("cr:1083116")!=null&&new(b("cr:1083116"))(a).send()}},removeDefaultInteractionListener:function(){this.shouldAddDefaultListener=!1,this.defaultHandler&&(window.removeEventListener?window.removeEventListener("click",this.defaultHandler,!0):document.detachEvent&&document.detachEvent("onclick",this.defaultHandler),this.defaultHandler=null)},addDefaultInteractionListener:function(a){this.shouldAddDefaultListener&&(this.shouldAddDefaultListener=!1,this.defaultHandler=a!=null?a:this.baseInteractionHandler.bind(this),window.addEventListener?window.addEventListener("click",this.defaultHandler,!0):document.attachEvent&&document.attachEvent("onclick",this.defaultHandler))},registerCallbackOnCookieFlush:function(a){!b("CookieConsent").isDeferCookies()?a():this.callbacks.add(a)},baseInteractionHandler:function(a){var c=a.target;if(!(c instanceof HTMLElement))return;if(a instanceof MouseEvent&&!this.isValidClick(a))return;b("cr:1109759")!=null&&!b("cr:1109759").isBlacklisted(c)&&this.flushAllCookies()},isValidClick:function(a){return a.which===void 0?!0:a.which==1},canEmbedThirdPartyPixel:function(){return b("CookieConsent").isCookiesBlocked()||b("CookieConsent").isDeferCookies()?!1:g.size===0}};e.exports=a}),null);
__d("XRefererFrameController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/common/referer_frame.php",{})}),null);
__d("ControlledReferer",["Bootloader","DeferredCookie","URI","XRefererFrameController","isMessengerDotComURI","isOculusDotComURI","isWorkplaceDotComURI","lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={useFacebookReferer:function(a,c,d){__p&&__p();if(!b("DeferredCookie").canEmbedThirdPartyPixel()){b("Bootloader").loadModules(["BanzaiODS"],function(a){a.bumpEntityKey(2966,"defer_cookies","block_controlled_referer_iframe")},"ControlledReferer");return}var e=!1;function f(){if(e)return;var b=a.contentWindow.location.pathname;if(b!=="/intern/common/referer_frame.php"&&b!=="/common/referer_frame.php")return;e=!0;a.contentWindow.document.body.style.margin=0;c()}var g;b("isMessengerDotComURI")(b("URI").getRequestURI())?g=b("XRefererFrameController").getURIBuilder().getURI().toString():b("isOculusDotComURI")(b("URI").getRequestURI())?g="/common/referer_frame.php":!b("lowerFacebookDomain").isValidDocumentDomain()?g="/intern/common/referer_frame.php":g=b("XRefererFrameController").getURIBuilder().getURI().toString();d==null&&b("isWorkplaceDotComURI")(b("URI").getRequestURI())&&(d="workplace");d&&(g+="?fb_source="+d);a.onload=f;a.src=g},useFacebookRefererHtml:function(a,b,c){g.useFacebookReferer(a,function(){a.contentWindow.document.body.innerHTML=b},c)}};e.exports=g}),null);
__d("TrackingPixel",["Arbiter","ControlledReferer","DeferredCookie","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g={_iframe:void 0,setIFrame:function(a){g._iframe=a},loadWithNoReferrer:function(a){__p&&__p();if(!b("DeferredCookie").canEmbedThirdPartyPixel()){b("FBLogger")("tracking_pixel").mustfix("Attempting to load a TrackingPixel (%s) while cookies are deferred. This is not allowed because tracking pixels sometimes set cookies.",a);return}if(!g._iframe){var c=document.createElement("iframe");c.frameBorder="0";c.width=c.height="1";c.style.position="absolute";c.style.top="-10px";b("ControlledReferer").useFacebookReferer(c,function(){b("Arbiter").inform("TrackingPixel/iframeIsLoaded",null,"persistent")});document.body!=null&&document.body.appendChild(c);g._iframe=c}b("Arbiter").subscribe("TrackingPixel/iframeIsLoaded",function(){if(g._iframe!=void 0){var b=g._iframe.contentWindow;b=new b.Image();b.src=a}})}};e.exports=g}),null);
__d("DraftJsEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAnonymizedDom=function(a){this.$1.anonymized_dom=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExtraParams=function(a){this.$1.extra_params=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.setSelectionState=function(a){this.$1.selection_state=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={anonymized_dom:!0,event:!0,extra_params:!0,script_path:!0,selection_state:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FBEngagementWhiteopsFraudSensorTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setInstanceID=function(a){this.$1.instance_id=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setPostID=function(a){this.$1.post_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTqBotDetectionProductEnum=function(a){this.$1.tq_bot_detection_product_enum=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={instance_id:!0,page_id:!0,post_id:!0,time:!0,tq_bot_detection_product_enum:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("DialogHideOnSuccess",["csx","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("success",this._handle.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};c._handle=function(a,c){b("CSS").matchesSelector(c.getTarget(),"._s")&&this._layer.hide()};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("TidyArbiterMixin",["Arbiter","ArbiterMixin","Run"],(function(a,b,c,d,e,f){a={};Object.assign(a,b("ArbiterMixin"),{_getArbiterInstance:function(){this._arbiter||(this._arbiter=new(b("Arbiter"))(),b("Run").onLeave(function(){delete this._arbiter}.bind(this)));return this._arbiter}});e.exports=a}),null);
__d("TidyArbiter",["TidyArbiterMixin"],(function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("TidyArbiterMixin"));e.exports=a}),null);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f){a={get:function(){return b("SiteData").pr!=null&&b("SiteData").pr>0?b("SiteData").pr:window.devicePixelRatio||1}};e.exports=a}),null);
__d("ProfileTabUtils",["ProfileTabConst"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a===null||a===void 0||a===b("ProfileTabConst").TIMELINE||a===b("ProfileTabConst").WALL}var h={isActivityLogTab:function(a){return a===b("ProfileTabConst").ALL_ACTIVITY||a===b("ProfileTabConst").APPROVAL},isTimelineOverviewTab:function(a){return a===b("ProfileTabConst").TIMELINE_OVERVIEW},isOverviewTab:function(a){return a===b("ProfileTabConst").INFO||a===b("ProfileTabConst").OVERVIEW},isTimelineTab:g,isMapTab:function(a){return a===b("ProfileTabConst").MAP},tabHasFixedAds:function(a){return!0},tabHasScrubber:function(a){return h.isActivityLogTab(a)},tabHasStickyHeader:function(a){return g(a)||h.isTimelineOverviewTab(a)},getIDForCollectionToken:function(a){return"pagelet_timeline_app_collection_"+a},getIDForSectionKey:function(a){return"pagelet_timeline_medley_"+a},isMedleyTab:function(a){return!h.isTimelineTab(a)&&!h.isTimelineOverviewTab(a)},normalizeTabKey:function(a){return h.isTimelineTab(a)?b("ProfileTabConst").TIMELINE:a},getIDForTabKey:function(a){if(h.isTimelineTab(a))return"timeline_tab_content";return h.isTimelineOverviewTab(a)?"timeline_overview":"timeline-medley"},getPageletForTabKey:function(a){if(h.isTimelineTab(a))return"TimelineJumperColumn";return h.isTimelineOverviewTab(a)?"TimelineOverviewColumn":"TimelineMedleyView"}};e.exports=h}),null);
__d("LayerRemoveOnHide",["DOM"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("hide",b("DOM").remove.bind(null,this._layer.getRoot()))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("getEarlyResources",[],(function(a,b,c,d,e,f){"use strict";function a(){return Array.from(document.querySelectorAll("head script[data-bootloader-hash]"))}e.exports=a}),null);
__d("WebDevicePerfInfoLogging",["Banzai","JSScheduler","VisibilityListener","WebDevicePerfInfoData","getEarlyResources"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var b=document.createElement("canvas");b=b.getContext("webgl")||b.getContext("experimental-webgl");if(!b)return;var c=b.getExtension("WEBGL_debug_renderer_info");if(!c)return;var d=b.getParameter(c.UNMASKED_RENDERER_WEBGL);b=b.getParameter(c.UNMASKED_VENDOR_WEBGL);a.gpu_vendor=b;a.gpu_renderer=d}function h(a){__p&&__p();var c=window.performance.getEntriesByType("resource"),d=b("getEarlyResources")(),e={};d.forEach(function(a){a=a.getAttribute("src");a!==null&&a!==void 0&&(e[a]=!0)});var f=0,g=0,h=0,i=0;c.forEach(function(a){if(e[a.name]===!0){var c=b("VisibilityListener").getHiddenTime(a.startTime,a.responseEnd);c=c!=null&&c>0;if(!c){c=a.transferSize===0;var d=a.transferSize<a.encodedBodySize,j=a.responseEnd-a.responseStart;c?(f+=a.encodedBodySize/j,g++):d||(h+=a.transferSize/j,i++)}}});g>0&&(a.cached_speed_sample=f/g,a.cached_file_count=g);i>0&&(a.remote_speed_sample=h/i,a.remote_file_count=i)}function i(){var a={};navigator&&navigator.hardwareConcurrency!==void 0&&(a.cpu_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory!==void 0&&(a.ram=navigator.deviceMemory);b("WebDevicePerfInfoData").needsFullUpdate&&g(a);b("WebDevicePerfInfoData").shouldLogResourcePerf&&h(a);b("Banzai").post("web_device_perf_info_log",a)}a={doLog:function(){(b("WebDevicePerfInfoData").needsFullUpdate||b("WebDevicePerfInfoData").needsPartialUpdate||b("WebDevicePerfInfoData").shouldLogResourcePerf)&&b("JSScheduler").scheduleSpeculativeCallback(i)}};e.exports=a}),null);
__d("FBSiteWhiteOps",["ControlledReferer","FBEngagementWhiteopsFraudSensorTypedLogger","Style","URI","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={appendToWindow:function(a,c,d,e,f){__p&&__p();e===void 0&&(e=null);f===void 0&&(f=null);var g=window.document.body;try{var h="fbsbx-sig-iframe-detection";if(g.getElementsByClassName(h).length!==0)return;var i=window.document.createElement("iframe");b("Style").apply(i,{height:"1px",width:"1px",opacity:"0",position:"relative",zIndex:"-9999999"});i.id="fbsbx-sig-iframe-"+a;i.className=h;i.referrerPolicy="no-referrer";b("ControlledReferer").useFacebookReferer(i,function(){__p&&__p();i.sandbox="allow-scripts allow-same-origin";var g="https://s.update.fbsbx.com/2/843748/utils.html?ti="+a+"&di=facebook.com&bt="+c+"&dt=8437481520966594402012";d&&(g+="&sn="+d);e!=null&&e!==""&&(g+="&c1="+e);f!=null&&f!==""&&(g+="&c3="+f);g=new(b("URI"))(g);var h=i.contentWindow.document,j="fbsbx-sig-iframe-form-"+a,k=g.toString();g=g.getQueryData();if(b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE Mobile")){var l="";for(var m in g)Object.prototype.hasOwnProperty.call(g,m)&&(l+="<input "+('name="'+m+'" ')+'type="hidden" autocomplete="off" '+('value="'+g[m]+'" />'));h.body.innerHTML='<form method="GET" id='+j+">"+l+"</form>";l=h.getElementById(j);l.action=k}else{h.body.innerHTML='<form method="GET" id='+j+"></form>";l=h.getElementById(j);l.action=k;for(var n in g)if(Object.prototype.hasOwnProperty.call(g,n)){k=h.createElement("input");k.name=n;k.value=g[n];k.autocomplete="off";k.type="hidden";l.appendChild(k)}}h.body.innerHTML+='<iframe height="100%" width="100%" onload=\'document.getElementById("'+j+"\").submit()'/>;"});g.appendChild(i)}catch(a){}},log:function(a,c,d){new(b("FBEngagementWhiteopsFraudSensorTypedLogger"))().setInstanceID(a).setTqBotDetectionProductEnum(c).log()}};e.exports=a}),null);
__d("CookieConsentBlacklist",["CookieConsentBlacklistedHrefs","Parent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={isBlacklisted:function(a){__p&&__p();a=a;if(!this.hasCookieBanner())return!0;var c=b("Parent").byAttribute(a,"data-cookiebanner");if(c){c=c.getAttribute("data-cookiebanner");switch(c){case"close_button":return!1;case"banner":return!0}}c=b("Parent").byAttribute(a,"data-nocookies");if(c)return!0;a.tagName.toLowerCase()!=="a"&&(a=b("Parent").byTag(a,"a"));if(a instanceof HTMLAnchorElement&&typeof a.href==="string"){c=a.href;for(var a=0;a<this.blacklistedHrefs.length;a++)if(c.indexOf(this.blacklistedHrefs[a])>-1)return!0}return!1},blacklistedHrefs:b("CookieConsentBlacklistedHrefs").hrefs,hasCookieBanner:function(){var a=document.querySelectorAll('[data-cookiebanner="banner"]');return a.length>0}};e.exports=a}),null);
__d("formatNumber",["fbt","intlNumUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function h(a,c){c=g._({"*":"{number}+"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function i(a,c){c=g._({"*":"\u003C{number}"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function c(a,c,d){return a>c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?i(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);
__d("fbjs/lib/shallowEqual",["shallowEqual"],(function(a,b,c,d,e,f){"use strict";e.exports=b("shallowEqual")}),null);
__d("QuicklingRefreshOverheadUtil",["QuicklingConfig","WebStorage","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h=1e4;a={onQuicklingStart:function(){g=b("performanceAbsoluteNow")()},onQuicklingVersionMatch:function(){g=null},onQuicklingRefreshStart:function(){if(!b("QuicklingConfig").logRefreshOverhead||g===null)return;var a=b("WebStorage").getSessionStorage();if(!a)return;a.setItem("quickling_refresh_overhead",(b("performanceAbsoluteNow")()-g).toString());a.setItem("quickling_refresh_start",Date.now().toString())},getOverhead:function(a){__p&&__p();if(!b("QuicklingConfig").logRefreshOverhead)return null;var c=b("WebStorage").getSessionStorageForRead();if(!c)return null;var d=c.getItem("quickling_refresh_start");if(d==null)return null;if(a-parseInt(d,10)>h)return null;a=c.getItem("quickling_refresh_overhead");return a!=null?parseFloat(a):null}};e.exports=a}),null);
__d("shallowCompare",["fbjs/lib/shallowEqual"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){return!b("fbjs/lib/shallowEqual")(a.props,c)||!b("fbjs/lib/shallowEqual")(a.state,d)}e.exports=a}),null);
__d("ReactComponentWithPureRenderMixin",["shallowCompare"],(function(a,b,c,d,e,f){"use strict";a={shouldComponentUpdate:function(a,c){return b("shallowCompare")(this,a,c)}};e.exports=a}),null);
__d("ClientServiceWorkerMessage",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.sendViaController=function(){if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};return a}();e.exports=a}),null);
__d("ServiceWorkerRegistration",["Promise","BrowserPaymentHandlerConfig","ClientServiceWorkerMessage","EventListener","Run","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=!!navigator.serviceWorker,h={},i=Object.freeze({name:"Facebook Payments",method:"basic-card",capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}}),j=Object.freeze({name:"Facebook Payments",method:self.location.origin,capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}});function k(){var a=navigator.serviceWorker;if(!g||!a)throw new Error("serviceWorker is not supported in this browser");return a}var l={isSupported:function(){return g},registerWorkerIfUnregisteredAfterDD:function(a){b("Run").onAfterLoad(function(){l.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){__p&&__p();var c=this;if(h[a])return h[a];var d=k();h[a]=new(b("Promise"))(function(e,f){c.getWorkerRegistration(a).done(function(c){if(!c){var g=b("EventListener").listen(window,"message",function(a){a.data&&a.data.command&&a.data.command==="ServiceWorkerInstallError"&&f()});b("promiseDone")(b("Promise").resolve(d.register(a,{updateViaCache:"all"})),function(){g.remove(),b("promiseDone")(b("Promise").resolve(d.ready),e)})}else e(c),b("BrowserPaymentHandlerConfig").enabled&&c.paymentManager&&c.paymentManager.instruments&&(c.paymentManager.instruments.set("Facebook",j),c.paymentManager.instruments.set("FacebookBasicCard",i))})});h[a].done(function(){h[a]=null});return h[a]},unregisterControllingWorker:function(){return new(b("Promise"))(function(a,c){c=new(b("ClientServiceWorkerMessage"))("unregister",{},function(){a(!0)});c.sendViaController()})},getWorkerRegistration:function(a){var c=k();return b("Promise").resolve(c.getRegistration(a))},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?b("Promise").resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=l}),null);
__d("pageLoadedViaSWCache",[],(function(a,b,c,d,e,f){function a(){return self.__SW_CACHE__===1}e.exports=a}),null);
__d("filterNulls",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var b=[];for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e!=null&&b.push(e)}return b}e.exports=a}),null);