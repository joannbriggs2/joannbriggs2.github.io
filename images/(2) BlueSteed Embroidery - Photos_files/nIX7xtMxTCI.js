if (self.CavalryLogger) { CavalryLogger.start_js(["L7DlL"]); }

__d("LitestandComposer",["csx","Arbiter","Bootloader","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","SubscriptionsHandler","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=600,i={};function j(a,c,d,e){__p&&__p();b("Bootloader").loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(f,g,k,l,m){__p&&__p();if(!m.isReady()){m.addReadyListener(function(){j(a,c,d,e)});return}b("ReactComposerIDGenerator").isComposerID(a)||g.reset(a);if(!m||!c)return;if(i[a]){l.insertAfter(i[a],c);g=i[a].parentNode;g&&g.removeChild(i[a]);delete i[a]}else d===null?l.prependContent(m.getStreamRoot(),c):l.insertAfter(d,c);new f(c).from("opacity",0).to("opacity",1).duration(h).go();k.logCompleted(a);e&&e();b("Arbiter").inform("LitestandComposer/publishCompleted",{story:c})},"LitestandComposer")}var k={},l={initComposer:function(a){__p&&__p();k[a]&&l.destructComposer(a),k[a]=new(b("SubscriptionsHandler"))(),k[a].addSubscriptions(b("Arbiter").subscribe("LitestandComposer/publish",function(c,d){__p&&__p();if(d.composer_id===a){c=b("ge")(a);c=c!==null?b("Parent").bySelector(c,"._l2u"):null;j(a,d.markup,c,function(){var a=d.markup;if(a){var c=a.id;c||(c="random_id_for_litestand_context_"+Math.random(),a.id=c);b("Arbiter").inform("LitestandComposer/attachedToDOM",c)}})}}),b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){c.composer_id===a&&j(a,c.markup,null,function(){c.markup&&(i[a]=c.markup)})}),b("Arbiter").subscribe(b("ReactComposerEvents").COMPOSER_UNMOUNT+a,l.destructComposer.bind(null,a))),b("Run").onLeave(l.destructComposer.bind(null,a))},destructComposer:function(a){var b=k[a];b!=null&&(b.release(),delete k[a])}};e.exports=l}),null);
__d("FeedReactComposerBootloadPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setBootloadDurationMillis=function(a){this.$1.bootload_duration_millis=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={bootload_duration_millis:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("MarketplaceFeedStoryInterceptor",["csx","Arbiter","Bootloader","CSS","DOM","Event","FBLogger","Parent","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();var d=b("DOM").scry(a,"._l52")[0],e=b("DOM").scry(a,"._2lc5")[0];if(d==null||e==null)return!1;d=d.dataset;var f=d.imp,g=d.spi,h=d.fsii;f||h&&b("gkx")("929590")?b("Bootloader").loadModules(["MarketplacePermalinkRender","MarketplaceSnowliftRoute"],function(d,f){b("Arbiter").inform("GroupCommerceProductDetail.OPEN",{for_sale_item_id:h,feedStoryRoot:a});var g=0;c.parentElement!=null&&c.parentElement.childNodes!=null&&(g=Array.prototype.indexOf.call(c.parentElement.childNodes,c));d.renderPermalinkModal(h,e,new f(),g)},"MarketplaceFeedStoryInterceptor"):b("Bootloader").loadModules(["GroupCommerceProductDetail.react"],function(d){b("Arbiter").inform("GroupCommerceProductDetail.OPEN",{for_sale_item_id:h,feedStoryRoot:a}),d.showDialog(g,{},c,a.id)},"MarketplaceFeedStoryInterceptor");return!0}var i=new Map();b("Arbiter").subscribe("pre_page_transition",function(){i.forEach(function(a,b,c){a!=null&&typeof a.remove==="function"&&(b==null?void 0:b.isConnected)!==!0&&(a.remove(),c["delete"](b))})});e.exports={register:function(a){__p&&__p();var c=b("Parent").bySelector(a,"._5pat");if(c==null||i.has(c))return!1;var d=b("Event").listen(c,"click",function(a){__p&&__p();var d=null;if(a.button>=2)return;else a.target instanceof HTMLElement?d=a.target:a.srcElement instanceof HTMLElement&&(d=a.srcElement);if(d==null)return;d=b("Parent").byTag(d,"A");if(d instanceof HTMLAnchorElement){if(b("CSS").matchesSelector(d,"._2rn3"))return;if(b("CSS").matchesSelector(d,"._xcx")||b("CSS").matchesSelector(d,"._4-eo")||b("CSS").matchesSelector(d,"._308z")){d=h(c,d);d?(a.preventDefault(),a.stopPropagation()):b("FBLogger")("marketplace").warn("handleSalePost not handled!")}}});i.set(a,d)}}}),null);
__d("ReactComposerAttachmentType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADVERTISE:"ADVERTISE",STATUS:"STATUS",MEDIA:"MEDIA",ALBUM:"ALBUM",MILESTONE:"MILESTONE",MLE:"MLE",NOTES:"NOTES",IG_PHOTO_REMINDER:"IG_PHOTO_REMINDER",QANDA:"QANDA",PAGES_EXTRA:"PAGES_EXTRA",FILE:"FILE",QUESTION:"QUESTION",VISUAL_POLL:"VISUAL_POLL",LIST:"LIST",TODO_LIST:"TODO_LIST",SELL:"SELL",WORK_HEADER:"WORK_HEADER",WORK_FOOTER:"WORK_FOOTER",SEND_GIFT:"SEND_GIFT",LOCAL_DEV_PLATFORM:"LOCAL_DEV_PLATFORM",LIVE_BROADCAST:"LIVE_BROADCAST",PHOTO_ZOOM_CROP:"PHOTO_ZOOM_CROP",PROFILE_PIC_DESCRIPTION:"PROFILE_PIC_DESCRIPTION",PROFILE_PIC_FRAME:"PROFILE_PIC_FRAME",LIVE_VIDEO:"LIVE_VIDEO",DOC:"DOC",EVENT:"EVENT",GAME:"GAME",CTA:"CTA",QA:"QA",MESSAGE:"MESSAGE",WHATSAPP_MESSAGE:"WHATSAPP_MESSAGE",GET_DIRECTIONS:"GET_DIRECTIONS",CALL:"CALL",SHOP:"SHOP",PLACE_LIST:"PLACE_LIST",QUIZ:"QUIZ",TASK:"TASK",ADD_MENTIONED:"ADD_MENTIONED",AUDIENCE_SELECTOR:"AUDIENCE_SELECTOR",LEARNING_COURSE:"LEARNING_COURSE",LEARNING_THIRD_PARTY_LINK:"LEARNING_THIRD_PARTY_LINK",PAGE_RECOMMENDATION:"PAGE_RECOMMENDATION",GROUP_MEET_UP:"GROUP_MEET_UP",EMPLOYEE_QUESTION_SUGGESTIONS:"EMPLOYEE_QUESTION_SUGGESTIONS",POST_TO_GROUP:"POST_TO_GROUP",MEDIA_EFFECT_SHARE:"MEDIA_EFFECT_SHARE",FIND_PLAYERS:"FIND_PLAYERS",SALES_PROMO:"SALES_PROMO",JOB_SEARCH:"JOB_SEARCH",SHARING_SPACES_SELECTOR:"SHARING_SPACES_SELECTOR",UICE_EXAMPLE_ATTACHMENT:"UICE_EXAMPLE_ATTACHMENT",EVENT_CREATION:"EVENT_CREATION",ASSET_3D:"ASSET_3D",LIVING_ROOM:"LIVING_ROOM",VIDEO_SUGGESTIONS:"VIDEO_SUGGESTIONS",APP_INTEGRATION_AODOCS:"APP_INTEGRATION_AODOCS",APP_INTEGRATION_BOX:"APP_INTEGRATION_BOX",APP_INTEGRATION_CORNERSTONE:"APP_INTEGRATION_CORNERSTONE",APP_INTEGRATION_DROPBOX:"APP_INTEGRATION_DROPBOX",APP_INTEGRATION_EGNYTE:"APP_INTEGRATION_EGNYTE",APP_INTEGRATION_GDRIVE:"APP_INTEGRATION_GDRIVE",APP_INTEGRATION_JIRA:"APP_INTEGRATION_JIRA",APP_INTEGRATION_ONEDRIVE:"APP_INTEGRATION_ONEDRIVE",APP_INTEGRATION_QUIP:"APP_INTEGRATION_QUIP",APP_INTEGRATION_SHAREPOINT:"APP_INTEGRATION_SHAREPOINT",APP_INTEGRATION_TASKS:"APP_INTEGRATION_TASKS",APP_INTEGRATION_TRELLO:"APP_INTEGRATION_TRELLO",INTERN_QA:"INTERN_QA",RECRUITING_CANDIDATE:"RECRUITING_CANDIDATE",VIDEO_EDITOR:"VIDEO_EDITOR",SUPPORT_NOW:"SUPPORT_NOW",VISUAL_POLLS:"VISUAL_POLLS",WORK_FILE:"WORK_FILE",SOTTO_CTA:"SOTTO_CTA"})}),null);
__d("ReactComposerFocusInit",["csx","invariant","DOM","DOMContainer.react","Parent","React","ReactDOM"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a={handler:function(a,c,d,e,f,g,i){var j=b("DOM").create("div"),k=a.parentNode;if(g){g=b("Parent").bySelector(a,"._3u13");g&&(k=g.parentNode.parentNode)}b("ReactDOM").render(b("React").jsx(f,{composerID:c,actorID:d,gks:e,ReactComposerFocusExtraConfigData:i,enableFocusBehavior:!0,children:b("React").jsx(b("DOMContainer.react"),{display:"block",children:a})}),j);k||h(0,3645);k.firstChild?k.replaceChild(j,k.firstChild):k.appendChild(j)},preload:function(){}};e.exports=a}),null);
__d("XReactFeedSproutsComposerXBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/feedx_sprouts/bootload/",{composer_id:{type:"String",required:!0},composer_type:{type:"Enum",required:!0,enumType:1},friend_list_id:{type:"String"},target_id:{type:"String",required:!0}})}),null);
__d("ReactFeedSproutsComposerX",["csx","cx","invariant","Arbiter","AsyncRequest","Bootloader","Button","CSS","DOM","Event","FeedComposerIDStore","FeedReactComposerBootloadPerfTypedLogger","LitestandComposer","React","ReactComposerAttachmentType","ReactComposerEvents","ReactComposerFocusInit","ReactComposerStoryArchiveIntroductionDialogGatedModule","ReactDOM","Run","SubscriptionsHandler","XReactFeedSproutsComposerXBootloadController","$"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("ReactComposerStoryArchiveIntroductionDialogGatedModule").module,k=!0;a=function(){__p&&__p();function a(a){__p&&__p();var c=this;this.$35=function(a){if(!c.$9)return;c.$20&&b("Button").setEnabled(c.$20,c.$18.size!=0&&c.$16.value.length!=0);if(!c.$9.textEligibleForStory)return;a=c.$16.value.match(/\n/g)||[];c.$9.maxTextLengthForStory&&c.$16.value.length>c.$9.maxTextLengthForStory||c.$9.maxLinesForStory&&a.length>=c.$9.maxLinesForStory?(c.$24&&b("CSS").addClass(c.$24,"_3560"),c.$18["delete"]("STORIES")&&(c.$24&&b("CSS").removeClass(c.$24,"_1sfg"),c.$19.add("STORIES"))):(c.$24&&b("CSS").removeClass(c.$24,"_3560"),c.$19["delete"]("STORIES")&&(c.$24&&b("CSS").addClass(c.$24,"_1sfg"),c.$18.add("STORIES")));c.$20&&b("Button").setEnabled(c.$20,c.$18.size!=0&&c.$16.value.length!=0)};this.$28=function(a){if(!c.$9||!c.$9.sharingSpacesDestinationPicker&&!c.$9.oneStepDestinationPicker)return!0;c.$20&&b("Button").setEnabled(c.$20,!1);if(c.$18&&c.$18.has("STORIES")&&c.$21){a={composerID:c.$3,targetID:c.$15,actorID:c.$1,text:c.$16.value,successHandler:c.$27};c.$21.postToStory(a)}return c.$18&&c.$18.has("TIMELINE")?!0:!1};this.$32=function(a){__p&&__p();a=a.getTarget();var d=null;while(a){if(a.nodeType===1&&a.nodeName==="A"){d=a;break}a=a.parentNode}d!==null||i(0,2217);a=b("CSS").hasClass(d,"._5qtn");if(a)return;c.$11.forEach(function(a){return b("CSS").removeClass(a,"_5qtn")});b("CSS").addClass(d,"_5qtn");a=b("DOM").find(c.$10,"._559p");var e=b("DOM").find(c.$10,"._559q");switch(d.getAttribute("data-attachment-type")){case b("ReactComposerAttachmentType").STATUS:b("CSS").hide(e);b("CSS").show(a);break;case b("ReactComposerAttachmentType").MEDIA:case b("ReactComposerAttachmentType").LIVE_VIDEO:b("CSS").show(e);b("CSS").hide(a);break;case b("ReactComposerAttachmentType").ALBUM:c.$9&&c.$9.albumTabUsesSelector&&c.$36();break;case b("ReactComposerAttachmentType").POST_TO_GROUP:b("Bootloader").loadModules(["XReactComposerPostToGroupLoggingODSController","ReactComposerPostToGroupLoggingEvent"],function(a,c){a=a.getURIBuilder().setString("event",c.CLICK_OUTER_TAB).getURI();new(b("AsyncRequest"))(a).send()},"ReactFeedSproutsComposerX");break}};this.$26=function(a){c.$9&&c.$9.lazySproutsExpand||c.$37();if(c.$2||!c.$25)return;c.$21&&c.$21.bootload();c.$17=Date.now();c.$2=!0;a=b("XReactFeedSproutsComposerXBootloadController").getURIBuilder().setString("composer_id",c.$3).setString("target_id",c.$15).setEnum("composer_type",c.$4).setString("friend_list_id",c.$6).getURI();new(b("AsyncRequest"))(a).send()};this.$31=function(){b("CSS").removeClass(c.$10,"_4qr4"),b("CSS").addClass(c.$10,"_4a8c")};this.$30=function(){c.$31(),c.$16.value="",b("CSS").removeClass(c.$10,"_2-q9")};this.$29=function(){c.$14.release()};this.$27=function(){c.$20&&b("Button").setEnabled(c.$20,!0),b("Arbiter").inform(b("ReactComposerEvents").POST_SUCCEEDED+c.$3),c.$30(),c.$18&&c.$18.has("STORIES")&&k&&(j&&(b("ReactDOM").render(b("React").jsx(j,{}),b("DOM").create("div")),k=!1))};this.$22=!1;this.$1=a.actorID;this.$10=a.root;this.$3=a.composerID;this.$15=a.targetID;this.$4=a.composerType;this.$6=a.friendListID;this.$7=a.largeTextThreshold;this.$9=a.gks;this.$21=a.jsModules.postModule;this.$25=a.loadReact;this.$8=!1;this.$2=!1;this.$5=b("DOM").find(this.$10,"form");this.$16=b("DOM").find(this.$10,"._3en1");this.$13=b("DOM").find(this.$10,"._16ve");this.$18=new Set();this.$19=new Set();b("FeedComposerIDStore").set(this.$3);b("LitestandComposer").initComposer(a.composerID);this.$14=new(b("SubscriptionsHandler"))();this.$14.addSubscriptions(b("Event").listen(this.$16,"focus",this.$26),b("Event").listen(this.$10,"click",this.$26),b("Event").listen(this.$5,"success",this.$27),b("Event").listen(this.$5,"submit",this.$28),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$3,function(){new(b("FeedReactComposerBootloadPerfTypedLogger"))().setBootloadDurationMillis(Date.now()-c.$17).log(),c.$29()}),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/selectcomposer/"+this.$3,this.$26),b("Arbiter").subscribe("ReactComposerFocus/reset/"+this.$3,this.$30),b("Arbiter").subscribe("ReactComposerFocus/collapse/"+this.$3,this.$31),b("Arbiter").subscribe(b("ReactComposerEvents").TEXT_PREFILL_BEFORE_BOOTLOAD+this.$3,function(a,b){c.$16.value=b,c.$16.selectionEnd=0}),b("Arbiter").subscribe("ReactFeedSproutsComposerXBody/onDrop",this.$26));this.$11=b("DOM").scry(this.$10,"._4-h7");this.$11.forEach(function(a){return c.$14.addSubscriptions(b("Event").listen(a,"click",c.$32))});this.$12=b("DOM").scry(this.$10,"._m_1");this.$12.forEach(function(a){return c.$14.addSubscriptions(b("Event").listen(a,"click",function(){c.$33(a)}))});var d=b("DOM").scry(this.$10,"._2mo4");d.length===1&&this.$14.addSubscriptions(b("Event").listen(d[0],"click",function(){if(c.$8)return;c.$8=!0;b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+c.$3,function(a,d){b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(a){a.startPreviewUI(d.contextConfig,d.config),c.$8=!1},"ReactFeedSproutsComposerX")});b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(){},"ReactFeedSproutsComposerX")}));this.$9&&(this.$9.sharingSpacesDestinationPicker||this.$9.oneStepDestinationPicker)&&this.$34();d=a.reactComposerFocusExtraConfigData;d&&d.showDialogForP2PAdminsMetadata&&d.showDialogForP2PAdminsMetadata.showDialogForP2PAdmins&&a.jsModules.P2PNewAdminComposerFocus?b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$3,this.$1,this.$9,a.jsModules.P2PNewAdminComposerFocus,!1,a.reactComposerFocusExtraConfigData):a.jsModules&&a.jsModules.composerFocus&&b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$3,this.$1,this.$9,a.jsModules.composerFocus,!1,a.reactComposerFocusExtraConfigData);b("Run").onLeave(this.$29)}var c=a.prototype;c.$36=function(){var a=this,c=b("DOM").find(this.$10,"._559p"),d=b("DOM").find(this.$10,"._559q");b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$3,function(){b("Bootloader").loadModules(["ReactComposerCollectionsActions","ReactComposerLoggingName"],function(b,c){b.showCollectionsSelector(a.$3,c.ALBUM_TAB_SELECTOR)},"ReactFeedSproutsComposerX"),a.$29()});b("CSS").show(d);b("CSS").hide(c)};c.$33=function(a,c){c=a.getAttribute("data-sprout-tagger-id");if(c){var d=b("DOM").find(this.$13,"._16vl");d=b("DOM").find(d,'*[data-sprout-tagger-id="'+c+'"]');b("CSS").addClass(d,"_30lm");this.$13.setAttribute("data-selected-sprout-id",c)}else b("CSS").matchesSelector(a,"._1gr3")&&(this.$9&&this.$9.lazySproutsExpand&&this.$37())};c.$34=function(){__p&&__p();var a=this;this.$23=b("DOM").find(this.$10,"._3h0d");this.$14.addSubscriptions(b("Event").listen(this.$16,"input",this.$35));this.$20=b("DOM").find(this.$10,"._ej1");this.$20&&b("Button").setEnabled(this.$20,!1);var c=b("DOM").scry(this.$10,"._66-n");c.forEach(function(b){return a.$38(b)});this.$23&&this.$14.addSubscriptions(b("Event").listen(this.$23,"click",function(){a.$39()}));this.$9&&this.$9.defaultDestination==="STORIES"?this.$18.add("STORIES"):this.$18.add("TIMELINE")};c.$39=function(a){this.$22=!0};c.$38=function(a){var c=this;a.getAttribute("data-destination")=="STORIES"&&(this.$24=a,this.$9&&!this.$9.textEligibleForStory&&b("CSS").addClass(a,"_3560"));this.$14.addSubscriptions(b("Event").listen(a,"click",function(){c.$40(a)}))};c.$40=function(a,c){if(this.$22){this.$22=!1;return}b("CSS").toggleClass(a,"_1sfg");c=a.dataset.destination;this.$18.has(c)?this.$18["delete"](c):this.$18.add(c);this.$20&&b("Button").setEnabled(this.$20,this.$18.size!=0&&this.$16.value.length!=0)};c.$37=function(){b("CSS").addClass(this.$10,"_4qr4"),b("CSS").removeClass(this.$10,"_4a8c")};return a}();e.exports=a}),null);