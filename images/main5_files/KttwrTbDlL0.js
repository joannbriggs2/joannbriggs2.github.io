if (self.CavalryLogger) { CavalryLogger.start_js(["T+B9G"]); }

__d("DeveloperCommunicationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAggregatedAlertDataID=function(a){this.$1.aggregated_alert_data_id=a;return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setDevAlertGroupCustom=function(a){this.$1.dev_alert_group_custom=a;return this};c.setDevAlertID=function(a){this.$1.dev_alert_id=a;return this};c.setDevAlertSource=function(a){this.$1.dev_alert_source=a;return this};c.setDevNotifMedium=function(a){this.$1.dev_notif_medium=a;return this};c.setDevNotifType=function(a){this.$1.dev_notif_type=a;return this};c.setDocPageDescription=function(a){this.$1.doc_page_description=a;return this};c.setEmailCompletionStatus=function(a){this.$1.email_completion_status=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setJewelCompletionStatus=function(a){this.$1.jewel_completion_status=a;return this};c.setMarkdownPageIds=function(a){this.$1.markdown_page_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setNotifDeliveryID=function(a){this.$1.notif_delivery_id=a;return this};c.setNotifEnvironment=function(a){this.$1.notif_environment=a;return this};c.setNotifID=function(a){this.$1.notif_id=a;return this};c.setObjective=function(a){this.$1.objective=a;return this};c.setRecipientID=function(a){this.$1.recipient_id=a;return this};c.setRef=function(a){this.$1.ref=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setType=function(a){this.$1.type=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={aggregated_alert_data_id:!0,app_id:!0,dev_alert_group_custom:!0,dev_alert_id:!0,dev_alert_source:!0,dev_notif_medium:!0,dev_notif_type:!0,doc_page_description:!0,email_completion_status:!0,event:!0,jewel_completion_status:!0,markdown_page_ids:!0,notif_delivery_id:!0,notif_environment:!0,notif_id:!0,objective:!0,recipient_id:!0,ref:!0,time:!0,type:!0,weight:!0};e.exports=a}),null);
__d("DeveloperCommunicationLogger",["CurrentUser","DeveloperCommunicationTypedLogger"],(function(a,b,c,d,e,f){"use strict";function a(a){a=a?"jewel_list_open":"jewel_list_close";new(b("DeveloperCommunicationTypedLogger"))().setEvent(a).setType("dev_alert").setRecipientID(b("CurrentUser").getID()).log()}e.exports={logJewelToggle:a}}),null);
__d("FBAMetaMegaMenuLogger",["invariant","Bootloader"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){j("MegaMenu_HelpButton_Toggle",{action:a?"open":"close"})}function c(a,b){b?j("HelpTray_Article_Click",{article_id:a,search_term:b}):j("HelpTray_Article_Click",{article_id:a})}function d(a){j("HelpTray_SearchBar_Change",{search_term:a})}function f(a){j("MegaMenu_NotificationBell_Toggle",{action:a?"open":"close"})}function h(a,b){a!==null&&a.match(/(\d+)\:(\d+)/)||g(0,518);a=a.split(":");var c=a[0];a=a[1];j("MegaMenu_Notification_Click",{recepient_id:c,notification_id:a,notifType:b})}function i(a){j("MegaMenu_NotificationBell_Show",{unseen_notification_count:a.toString()})}function j(a,c){b("Bootloader").loadModules(["FBAMetaLoggerWWW"],function(b){b=b.META_LOGGER;b.logEvent(a,c)},"FBAMetaMegaMenuLogger")}e.exports={logHelpTrayToggle:a,logHelpTrayArticleClick:c,logHelpTrayPerformSearch:d,logMegaMenuNotificationBellToggle:f,logMegaMenuNotificationClick:h,logMegaMenuNotificationBellShown:i}}),null);
__d("NotificationJewelListController",["DeveloperCommunicationLogger","FBAMetaMegaMenuLogger","NotificationComponentsBootloader","NotificationListConfig","React","ReactDOM","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationListConfig").numNotificationsPerPage,h=null,i=null,j=null;a=function(){"use strict";__p&&__p();function a(a,b){this.$1=!1,this.$2=!1,this.$3=!1,this.$4=a,this.$5=b}var c=a.prototype;c.open=function(){this.$1=!0,this.$6()};c.pause=function(){this.$2=!0,this.$5.pageType==="ANALYTICS"?b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2):this.$5.pageType==="APP_DASHBOARD"&&b("DeveloperCommunicationLogger").logJewelToggle(this.$2),this.$6()};c.unpause=function(){this.$2=!1,this.$5.pageType==="ANALYTICS"?b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2):this.$5.pageType==="APP_DASHBOARD"&&b("DeveloperCommunicationLogger").logJewelToggle(this.$2),this.$6()};c.setFlyoutOpenState=function(a){this.$3=a,this.$6()};c.$6=function(){var a=this;!h||!i?b("promiseDone")(b("NotificationComponentsBootloader").load(this.$5.isBizsite),function(b){var c=b[0],d=b[1];b=b[2];h=c;i=d;j=b;a.$7()}):this.$7()};c.$7=function(){var a=this;if(!h||!i||!j)return;b("ReactDOM").render(b("React").jsx(j,{children:b("React").jsx(h,{hasEverBeenOpened:this.$1,paused:this.$2,isBucketingDisabled:this.$5.isBucketingDisabled,isNotifsIntl:this.$5.isNotifsIntl,isFlyoutOpened:this.$3,tracking:this.$5.tracking,shortenTimestamp:this.$5.shortenTimestamp,businessID:this.$5.businessID,defaultTab:this.$5.defaultTab,maxHeight:this.$5.maxHeight,useChevron:this.$5.useChevron,chevronType:this.$5.chevronType,numPerPage:g,listRenderer:i,upsell:this.$5.upsell||null,endpoint:this.$5.endpoint,sourceView:this.$5.sourceView,settingsUri:this.$5.settingsUri,onClick:function(c,d){a.$5.pageType==="ANALYTICS"&&b("FBAMetaMegaMenuLogger").logMegaMenuNotificationClick(c,d)}})}),this.$4)};return a}();e.exports=a}),null);
__d("XBrowserPushDisabledController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/disabled/",{})}),null);
__d("XBrowserPushXOutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/xout/",{})}),null);
__d("XServiceWorkerSessionChangeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/service_workers/session/persist/",{})}),null);
__d("BrowserPushSessionChange.react",["fbt","ix","AsyncRequest","BanzaiLogger","Image.react","ImageBlock.react","LayerFadeOnHide","React","ReloadPage","XBrowserPushDisabledController","XBrowserPushXOutController","XServiceWorkerSessionChangeController","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","XUISpinner.react","XUIText.react","cxMargin"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={dialogShown:!0,spin:!1},d.$1=function(a){if(a)return;d.setState({dialogShown:!1});d.$2("session_keep");a=b("XServiceWorkerSessionChangeController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({app_id:d.props.push.appID}).setAllowCrossPageTransition(!0).setHandler(function(a){d.props.onHide()}).send()},d.$3=function(){d.setState({spin:!0});d.$2("session_uninstall");d.$2("xout");var a=b("XBrowserPushXOutController").getURIBuilder().getURI(),c=function(){d.props.push.unregisterPushAndSW(b("XBrowserPushDisabledController"),b("AsyncRequest")).done(function(a){b("ReloadPage").now()})};new(b("AsyncRequest"))().setURI(a).setMethod("POST").setHandler(c).setAllowCrossPageTransition(!0).send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(a){a={event:a,appid:this.props.push.appID,surface:"session_change"};b("BanzaiLogger").log("BrowserPushLoggerConfig",a)};d.componentDidMount=function(){this.$2("session_change_prompt")};d.render=function(){if(!this.state.dialogShown)return null;var a=h("92724");return b("React").jsxs(b("XUIDialog.react"),{shown:!0,behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},onToggle:this.$1,width:445,children:[b("React").jsx(b("XUIDialogTitle.react"),{children:g._("Desktop Notifications Are On")}),b("React").jsx(b("XUIDialogBody.react"),{children:this.state.spin?b("React").jsx(b("XUISpinner.react"),{size:"large"}):b("React").jsxs(b("ImageBlock.react"),{spacing:"medium",children:[b("React").jsx(b("Image.react"),{src:a,alt:g._("Desktop Notifications Are On")}),b("React").jsxs("div",{children:[b("React").jsx("div",{className:"_3-8h",children:b("React").jsx(b("XUIText.react"),{size:"header3",children:g._("When you get a new notification, you'll see it in the corner of your screen.")})}),b("React").jsx("div",{className:"_3-8h",children:b("React").jsx(b("XUIText.react"),{size:"meta1",children:g._("To be sure you get notifications, you'll now stay logged into Facebook on this computer. If you're using a public computer or don't want to stay logged in, click Undo to turn off desktop notifications.")})})]})]})}),b("React").jsxs(b("XUIDialogFooter.react"),{children:[b("React").jsx(b("XUIDialogButton.react"),{action:"button",label:g._("Undo"),onClick:this.$3}),b("React").jsx(b("XUIDialogOkayButton.react"),{use:"confirm",action:"cancel"})]})]},"dialog")};return c}(b("React").Component);c.propTypes={onHide:a.func.isRequired,push:a.object.isRequired};e.exports=c}),null);
__d("NotificationPermissionNotice.react",["cx","fbt","Event","Keys","React","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=[];a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){var a=this;i.push(b("Event").listen(window,"mousedown",this.props.onHide));i.push(b("Event").listen(window,"keydown",function(c){c.keyCode===b("Keys").ESC&&a.props.onHide()}))};d.componentWillUnmount=function(){while(i.length>0){var a=i.pop();a.remove()}};d.renderLayers=function(){var a=this,c=this.props.shortText?h._("Click the lock to give {browser_name} permission to send you desktop notifications.",[h._param("browser_name",this.props.browserName)]):h._("If you change your mind, click the lock to give {browser_name} permission to send you desktop notifications.",[h._param("browser_name",this.props.browserName)]);return b("React").jsx(b("XUIAmbientNUX.react"),{contextRef:function(){return a.refs.noticeAnchor},shown:!0,position:"below",onCloseButtonClick:this.props.onHide,children:c},"nux")};d.render=function(){return b("React").jsxs("span",{children:[b("React").jsx("span",{ref:"noticeAnchor",className:"_1_i1"}),this.renderLayers()]})};return c}(b("React").Component);c.propTypes={onHide:a.func.isRequired,shortText:a.bool,browserName:a.string.isRequired};e.exports=c}),null);
__d("NotificationPermissionRequest.react",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("Spotlight.react"),{shown:!0,onHide:this.props.onHide,children:b("React").jsx("div",{className:"_n3"})},"spotlight")};return c}(b("React").Component);c.propTypes={onHide:a.func};e.exports=c}),null);
__d("JewelBadgeCountRecorder",["invariant","Arbiter","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=Object.create(null);a={onCountUpdated:function(a,c){h[c.jewel]==null&&(h[c.jewel]=[]);a=h[c.jewel];a.push({timestamp:b("performanceNow")(),count:c.count});a.length>1e3&&a.shift()},getCountAtTimestamp:function(a,b){var c=h[a];c!=null||g(0,2483,a,JSON.stringify(h));c.length>0||g(0,2484,a);a=c.find(function(a,d){var e=c[d+1];return d===0&&b<a.timestamp||b>a.timestamp&&(e==null||b<e.timestamp)});a||g(0,2485);return a.count}};b("Arbiter").subscribe("jewel/count-updated",a.onCountUpdated);e.exports=a}),null);
__d("FriendingSurfaceVisitationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppVersion=function(a){this.$1.app_version=a;return this};c.setBadgeCount=function(a){this.$1.badge_count=a;return this};c.setClientTimestamp=function(a){this.$1.client_timestamp=a;return this};c.setIsTab=function(a){this.$1.is_tab=a;return this};c.setRawRefTab=function(a){this.$1.raw_ref_tab=a;return this};c.setRawTab=function(a){this.$1.raw_tab=a;return this};c.setRefPage=function(a){this.$1.ref_page=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTargetProfileID=function(a){this.$1.target_profile_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={app_version:!0,badge_count:!0,client_timestamp:!0,is_tab:!0,raw_ref_tab:!0,raw_tab:!0,ref_page:!0,surface:!0,target_profile_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("normalizedEventTimestamp",["performance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){if(a!=null)if(b("performance")&&b("performance").timing&&b("performance").timing.navigationStart&&a>b("performance").timing.navigationStart)return a-=b("performance").timing.navigationStart;else return a;else if(b("performance").now)return b("performance").now();return null}e.exports=a}),null);
__d("reportData",["Banzai","SessionName","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g={retry:!0};function a(a,c){c===void 0&&(c={});c={ft:c.ft||{},gt:c.gt||{}};var d="-",e="r",f=b("ifRequired")("URI",function(a){return a.getRequestURI(!0,!0).getUnqualifiedURI().toString()},function(){return location.pathname+location.search+location.hash});a=[b("SessionName").getName(),Date.now(),"act",Date.now(),0,d,a,d,d,e,f,c,0,0,0,0];b("Banzai").post("eagle_eye_event",a,g)}e.exports=a}),null);
__d("JewelBase",["csx","invariant","Promise","Arbiter","ArbiterMixin","CrossWindowEventEmitter","CSS","DOM","Event","FriendingSurfaceVisitationTypedLogger","FunnelLogger","HTML","JewelBadgeCountRecorder","JewelCountSideLoader","JewelLogger","Keys","NotificationJewelFunnelLoggingConstants","Run","TabIsolation","TimeSlice","Toggler","TooltipData","firstClickTimestamp","killswitch","mixin","normalizedEventTimestamp","performance","performanceNow","promiseDone","reportData"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("JewelLogger").logJewelCancel,j=b("JewelLogger").logJewelClick,k=b("JewelLogger").logJewelInitialize,l=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,m=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME,n=new(b("CrossWindowEventEmitter"))("JewelBase"),o={};function p(){if(b("performance")==null?void 0:b("performance").getEntriesByName){var a=b("performance").getEntriesByName("first-paint","paint");if(a&&a[0])return b("normalizedEventTimestamp")(a[0].startTime)}return null}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e.name=d.name;e.label=d.label;e.clickCount=0;e.root=c;e.badge=d.badge;e.countNew=0;e.initialCount=d.count||0;e.escHandler=null;e.bootload_module=d.bootload_module;e.bootload_args=d.bootload_args;e.bootload_eager_modules=d.bootload_eager_modules;e.bootload_conf=d.bootload_conf;e.bootloading=null;e.togglerInstance=b("Toggler").getInstance(c).setSticky(!1);e.businessID=d.businessID;e.loggerRef=d.loggerRef;k({jewelName:e.name,badgeInitialCount:e.initialCount,timestamp:p()});b("JewelBadgeCountRecorder").onCountUpdated("jewel/initial-count",{jewel:e.name,count:e.initialCount});e.bootload_conf&&e.bootload_conf.eagerLoadingOnInteraction?e.$JewelBase3():b("Run").onAfterLoad(function(){return e.$JewelBase4()});e.bootload_conf&&e.bootload_conf.eagerLoadingOnInteraction&&e.$JewelBase5();d.keepOpenForSnowlift&&e.togglerInstance.setPrePageTransitionCallback(e.$JewelBase6.bind(babelHelpers.assertThisInitialized(e)));o[e.name]=babelHelpers.assertThisInitialized(e);e.$JewelBase7();c=e.getFlyout();c||h(0,5194);var f=new(b("TabIsolation"))(c);b("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES")?b("Toggler").createInstance(c).setSticky(!1):b("Toggler").createInstance(e.root).setSticky(!1);e.$JewelBase8();b("Toggler").listen("show",e.root,function(a){__p&&__p();var c=this;b("FunnelLogger").appendAction(m,l.OPEN_JEWEL);this.$JewelBase9();this.inform("user-open");this.hasNew()&&this.markSeen();this.reset();b("Arbiter").inform("layer_shown",{type:"Jewel"});f.enable();this.setupEvents();this.$JewelBase10();this.bootload_conf&&this.bootload_conf.eagerLoadingOnInteraction?this.$JewelBase11():b("promiseDone")(this.$JewelBase4().then(function(){return c.inform("opened")}))}.bind(babelHelpers.assertThisInitialized(e)));b("Toggler").listen("hide",e.root,function(a,c){i(),b("FunnelLogger").appendAction(m,l.CLOSE_JEWEL),b("FunnelLogger").endFunnel(m),this.hasNew()&&this.markSeen(),this.reset(),this.inform("closed"),b("Arbiter").inform("layer_hidden",{type:"Jewel"}),f.disable(),this.removeEvents(),this.$JewelBase8()}.bind(babelHelpers.assertThisInitialized(e)));b("Arbiter").subscribe("jewel/count-updated",function(a,b){b.jewel==e.name&&e.update(b)});b("Arbiter").subscribe("jewel/hide",function(a,b){e.hide()});n.addListener("count-updated",function(a){a.jewel==e.name&&e.update(a)});return e}var d=c.prototype;d.getRoot=function(){return this.root};d.hide=function(){this.isOpen()&&b("Toggler").hide(this.root)};d.getFlyout=function(){this.$JewelBase1==null&&(this.$JewelBase1=b("DOM").find(this.root,".__tw"));return this.$JewelBase1};d.hasNew=function(){return b("CSS").hasClass(this.root,"hasNew")};d.isOpen=function(){return b("CSS").hasClass(this.root,"openToggler")};d.reset=function(){b("FunnelLogger").appendAction(m,l.CLEAR_BADGE_COUNT),b("CSS").removeClass(this.root,"hasNew")};d.setContent=function(a){var c=b("DOM").find(this.root,"ul.jewelItemList");b("DOM").setContent(c,b("HTML")(a))};d.update=function(a){a.animation&&this.badge.setAnimation&&this.badge.setAnimation(a.animation);this.countNew=a.count;typeof this.countNew==="number"&&this.countNew<0&&(this.countNew=0);this.badge.setLegacyContent(this.countNew);var c=isNaN(this.countNew)||this.countNew>0;b("CSS").conditionClass(this.root,"hasNew",c);this.updatedOnce=!0;this.inform("updated",a,"state")};d.setupEvents=function(){var a=this;this.escHandler=b("Event").listen(document.documentElement,"keydown",function(c){c.keyCode===b("Keys").ESC&&a.hide()})};d.removeEvents=function(){this.escHandler&&(this.escHandler.remove(),this.escHandler=null)};d.markSeen=function(){var a=this,c=function(){b("Arbiter").inform("jewel/count-updated",{jewel:a.name,count:0},"state"),n.emitRemote("count-updated",{jewel:a.name,count:0}),a.inform("marked-seen")};b("TimeSlice").guard(c,"JewelOpen markSeen",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};d.getButton=function(){this.$JewelBase2==null&&(this.$JewelBase2=b("DOM").find(this.root,"a.jewelButton"));return this.$JewelBase2};d.$JewelBase8=function(){var a=this.getButton();b("TooltipData").set(a,this.label);a.setAttribute("data-tooltip-delay","500")};d.$JewelBase10=function(){b("TooltipData").remove(this.getButton())};d.$JewelBase6=function(a,b){!this.$JewelBase12(b.from)&&!this.$JewelBase12(b.to)&&(this.togglerInstance&&this.togglerInstance.hide())};d.$JewelBase12=function(a){return a&&Object.prototype.hasOwnProperty.call(a.getQueryData(),"theater")};d.$JewelBase9=function(){this.clickCount++;var a=this.getButton(),c=b("performanceNow")();this.clickCount===1&&(c=b("firstClickTimestamp").get(a));c&&(c=b("normalizedEventTimestamp")(c),c&&j({jewelName:this.name,timestamp:c,badgeCurrentCount:b("JewelBadgeCountRecorder").getCountAtTimestamp(this.name,c),badgeInitialCount:this.initialCount,clickCount:this.clickCount}));b("reportData")("jewel_click",{gt:babelHelpers["extends"]({count:this.countNew,initial:this.initialCount,jewel:this.name},this.businessID?{biz_id:this.businessID}:{},this.loggerRef?{ref:this.loggerRef}:{})});this.name==="requests"&&new(b("FriendingSurfaceVisitationTypedLogger"))().setSurface("jewel").setBadgeCount(this.countNew).log()};d.$JewelBase4=function(){var a=this;if(!this.bootload_module)return b("Promise").resolve();this.bootloading||(this.bootloading=new(b("Promise"))(function(b,c){a.bootload_module.load().then(function(c){new c(a,a.bootload_args),b()})["catch"](c)}));return this.bootloading};d.$JewelBase3=function(){var a=this;this.bootload_eager_modules?this.bootload_eager_modules.loadModules(this):b("Run").onAfterLoad(function(){return a.$JewelBase4()})};d.$JewelBase5=function(){this.bootload_eager_modules&&this.bootload_eager_modules.mount(this)};d.$JewelBase11=function(){var a=this;this.bootload_eager_modules?this.bootload_eager_modules.load(this):b("promiseDone")(this.$JewelBase4().then(function(){return a.inform("opened")}))};d.$JewelBase7=function(){if(this.bootloading)return;var a=b("JewelCountSideLoader").getOverwritesForJewel(this);if(!a)return;this.updateCountAndArgs(a.args,a.count)};d.updateCountAndArgs=function(a,c){for(var d in a)a[d]&&(this.bootload_args[d]=a[d]);c&&b("Arbiter").inform("jewel/count-updated",{jewel:this.name,count:c},"state")};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("BlueBarCreateMenuTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEntrypointStyle=function(a){this.$1.entrypoint_style=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setHasUserCreatedPriorToStartDate=function(a){this.$1.has_user_created_prior_to_start_date=a;return this};c.setMenuElement=function(a){this.$1.menu_element=a;return this};c.setMenuStyle=function(a){this.$1.menu_style=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={entrypoint_style:!0,event:!0,has_user_created_prior_to_start_date:!0,menu_element:!0,menu_style:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("BlueBarCreateMenuLogger",["BlueBarCreateMenuTypedLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={initModal:function(a,c,d,e){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log();for(var f=0;f<a.length;f++)a[f]&&(function(){var g=a[f],h=g.name;g=g.element;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("impression").log();g.addEventListener("click",function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log()})})()},initDropdown:function(a,c,d){__p&&__p();a.onShow=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log(),a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){a=a._data.id;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(a).setMenuStyle(c).setEntrypointStyle(d).setEvent("impression").log()}})},a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){var e=a._data.id;a._onclickHandler=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(e).setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log()}}})},logEntrypointImpression:function(a,c){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(a).setEntrypointStyle(c).setEvent("impression").log()}};e.exports=a}),null);