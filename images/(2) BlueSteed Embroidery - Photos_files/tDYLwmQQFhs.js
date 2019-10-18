if (self.CavalryLogger) { CavalryLogger.start_js(["6lcY5"]); }

__d("TimelineProfilePictureLoggerEnums",[],(function(a,b,c,d,e,f){e.exports={actions:{ADD_FRAME:"add_frame",EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{CANCEL:"cancel",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",DRAG_AND_DROP:"drag_and_drop",FAIL:"fail",INIT:"init",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",SKIP_CROP:"skip_crop",SUCCESS:"success",UPLOAD_CANCEL:"upload_cancel",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}}}),null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function(a,b,c,d,e,f){__p&&__p();var g={buildRequest:function(a,c){__p&&__p();var d=(b("Form").getAttribute(a,"method")||"GET").toUpperCase();c=c&&b("Parent").byTag(c,"button")||c;var e=c&&b("Parent").byClass(c,"stat_elem")||a;if(b("CSS").hasClass(e,"async_saving"))return null;if(c&&(c.form!==a||c.nodeName!="INPUT"&&c.nodeName!="BUTTON"||c.type!="submit")){var f=b("DOMQuery").scry(a,".enter_submit_target")[0];f&&(c=f)}f=b("Form").serialize(a,c);b("Form").setDisabled(a,!0);c=b("Form").getAttribute(a,"ajaxify")||b("Form").getAttribute(a,"action");var g=!!b("Form").getAttribute(a,"data-cors");b("trackReferrer")(a,c);return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d=="GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null,a,!1)).setHandler(function(c){b("Event").fire(a,"success",{response:c})}).setErrorHandler(function(c){b("Event").fire(a,"error",{response:c})!==!1&&b("AsyncResponse").defaultErrorHandler(c)}).setFinallyHandler(b("Form").setDisabled.bind(null,a,!1))},send:function(a,b){a=g.buildRequest(a,b);a&&a.send();return a}};e.exports=g}),null);
__d("ProfileIntroCardEditMediaFunnelLogger",["Event","FunnelLogger"],(function(a,b,c,d,e,f){__p&&__p();var g="WWW_PROFILE_INTRO_CARD_EDIT_MEDIA_FUNNEL";function a(a){b("Event").listen(a,"click",function(){b("FunnelLogger").endFunnel(g)})}function c(a){b("Event").listen(a,"click",function(){b("FunnelLogger").appendAction(g,"save"),b("FunnelLogger").endFunnel(g)})}function d(a){b("Event").listen(a,"click",function(){b("FunnelLogger").startFunnel(g),b("FunnelLogger").appendAction(g,"intro_card_edit")})}function f(){b("FunnelLogger").addFunnelTag(g,"in_new_editor")}function h(a){b("Event").listen(a,"click",function(){b("FunnelLogger").startFunnel(g),b("FunnelLogger").appendAction(g,"single_edit")})}function i(){b("FunnelLogger").appendAction(g,"see_dialog")}function j(){b("FunnelLogger").appendAction(g,"open_picker")}function k(a){b("Event").listen(a,"click",function(){b("FunnelLogger").appendAction(g,"add_media")})}function l(){b("FunnelLogger").appendAction(g,"add_media")}function m(){b("FunnelLogger").appendAction(g,"remove_media")}function n(){b("FunnelLogger").appendAction(g,"search")}function o(){b("FunnelLogger").appendAction(g,"see_more")}function p(){b("FunnelLogger").appendAction(g,"section_names_loaded")}function q(){b("FunnelLogger").appendAction(g,"section_loaded")}function r(){b("FunnelLogger").appendAction(g,"empty_section_loaded")}function s(){b("FunnelLogger").appendAction(g,"all_sections_loaded")}function t(){b("FunnelLogger").appendAction(g,"upload_start")}function u(){b("FunnelLogger").appendAction(g,"upload_succes")}e.exports={logCancel:a,logSave:c,logSeeDialog:i,logSingleEdit:h,logIntroCardEdit:d,logOpenPicker:j,logAddMedia:k,directlyLogAddMedia:l,directlyLogRemoveMedia:m,logSearch:n,logSeeMore:o,logSectionNamesLoaded:p,logSeeMoreSectionLoaded:q,logAllSectionsInitialLoad:s,logEmptySectionLoaded:r,logUploadStart:t,logUploadSuccess:u,addNewEditorTag:f}}),null);
__d("ProfilePhotoActionLogger",["Banzai"],(function(a,b,c,d,e,f){a={EVENT_SELECT_METHOD:"select_method",EVENT_CAMERA_PERMISSION_PROVIDED:"permission_provided",EVENT_CAMERA_PERMISSION_DENIED:"permission_denied",EVENT_CAMERA_NO_WEBCAM:"permission_denied",EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:"unknown_mediastream_error",EVENT_CAMERA_TAKE_PHOTO:"take_photo",EVENT_CAMERA_RETAKE_PHOTO:"retake_photo",EVENT_CAMERA_UPLOAD_ATTEMPT:"upload_attempt",EVENT_CAMERA_UPLOAD_ERROR:"upload_error",EVENT_CAMERA_UPLOAD_SUCCESS:"upload_success",SOURCE_SUGGESTIONS:"suggestions",SOURCE_TIMELINE:"timeline",SOURCE_NUX:"nux",METHOD_EXISTING:"existing",METHOD_UPLOAD:"upload",METHOD_CAMERA:"camera",log:function(a,c,d){b("Banzai").post("profile_photo_action",{event:a,source:c,method:d})}};e.exports=a}),null);
__d("ProfilePicAccessibility",["csx","cx","CSS","FocusEvent","Parent","Run","ifRequired"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=null,j=[],k=[],l=!1;function m(a){i&&b("CSS").conditionClass(i,"_5-3g",a||l)}function n(a){l=a,m(a)}function o(){i=null,j.map(function(a){return a.unsubscribe()}),j=[],k.map(function(a){return a.remove()}),k=[]}a={init:function(a,c){__p&&__p();if(a.length===0)return;var d=b("Parent").bySelector(a[0],"._5ycb");i=d instanceof HTMLElement?d:null;k=a.map(function(a){return b("FocusEvent").listen(a,m)});c&&(j=[c.subscribe("show",n.bind(null,!0)),c.subscribe("hide",n.bind(null,!1))]);b("ifRequired")("XUISubNavigationLoader",function(a){return a.onLeave(o)},function(){return b("Run").onLeave(o)})}};e.exports=a}),null);
__d("TimelineProfilePicConfig",["fbt"],(function(a,b,c,d,e,f,g){a={loading:"timeline/profile_pic/loading",success:"timeline/profile_pic/success",leavingMessage:g._("Your profile picture is still uploading, are you sure you want to leave?")};e.exports=a}),null);
__d("ProfilePictureFlowLogging",["Arbiter","Banzai","Event","Parent","ProfilePhotoActionLogger","Run","TimelineProfilePicConfig","TimelineProfilePictureLoggerEnums","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g=b("TimelineProfilePicConfig").loading,h=b("TimelineProfilePicConfig").success,i="data-action-type",j,k,l,m;function n(){m&&m.unsubscribe(),m=null}var o={action:b("TimelineProfilePictureLoggerEnums").actions,flow:b("TimelineProfilePictureLoggerEnums").flows,step:b("TimelineProfilePictureLoggerEnums").steps,log:function(a){var c=a||o.step.INIT;b("Banzai").post("profile_pic_action",{action_type:j,flow_type:k,step_type:c});j===o.action.UPLOAD&&c===o.step.INIT&&b("ProfilePhotoActionLogger").log(b("ProfilePhotoActionLogger").EVENT_SELECT_METHOD,l,b("ProfilePhotoActionLogger").METHOD_UPLOAD);k=null;(a==="success"||a==="fail")&&(j=null);return o},setAction:function(a){j=a;return o},setFlowType:function(a){k=a;return o},setSource:function(a){l=a;return o},init:function(a,c){c&&(l=c),m||(m=b("Arbiter").subscribe([g,h],function(a){o.log(a===g?b("TimelineProfilePictureLoggerEnums").steps.LOADING:b("TimelineProfilePictureLoggerEnums").steps.SUCCESS)}),b("Run").onLeave(n)),b("tidyEvent")(b("Event").listen(a,"click",function(a){a=b("Parent").byAttribute(a.getTarget(),i);if(!a)return;o.setAction(a.getAttribute(i)).log()}))},initMenuItems:function(a,b,c){o.init(a.getRoot(),c)}};e.exports=o}),null);
__d("XWorkNewsfeedNuxNextStepController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/newsfeed_nux/next_step/",{})}),null);
__d("ProfilePicCropViewerInit",["Bootloader","CurrentCommunity","ProfilePictureFlowLogging","React","ServerRedirect","XWorkNewsfeedNuxNextStepController"],(function(a,b,c,d,e,f){__p&&__p();var g="profile-picture-crop",h="loading",i=b("ProfilePictureFlowLogging").flow,j,k;function l(){k&&k.close()}function m(a,c,d){__p&&__p();d=d||{};b("Bootloader").loadModules(["SpotlightViewerInit","ZoomProfilePicCropViewer.react","PhotoStore","AsyncRequest","AsyncResponse","XProfilePicCropViewerAsyncController"],function(e,f,i,m,n,o){__p&&__p();l();var p=d.stickerID;j=g+":"+a+":"+c;p&&(j+=":"+p);var q=d.successCallback,r=b("CurrentCommunity").getID()!=="0";!q&&(d.source==="atwork_nux"||d.source==="timeline"||d.source==="atwork_profile_nux")&&r&&(q=function(a){a=b("XWorkNewsfeedNuxNextStepController").getURIBuilder().getURI();new m().setURI(a).setData({current_step_id:1,skipped:!1}).setHandler(function(){b("ServerRedirect").reloadPage()}).send()});if(!d.skipCropping){k=e.render(b("React").jsx(f,{cancelCallback:d.cancelCallback,cropMode:d.cropMode,errorCallback:d.errorCallback,method:d.method,open:!0,photoID:a,profileID:c,setid:j,source:d.source,successCallback:q,uploadRequest:d.uploadRequest,warnOnCancel:d.warnOnCancel}),function(){k=null});if(i.hasBeenCreated(j)||a===h)return;r=o.getURIBuilder().setString("photo_id",a).setInt("profile_id",c).setString("set_id",j).setBool("will_load_more_photos",!0);p&&r.setInt("sticker_id",p);r=r.getURI();var s=j;new m(r).setErrorHandler(function(a){s===j&&l(),n.defaultErrorHandler(a)}).send()}},"ProfilePicCropViewerInit");return!0}a={close:l,getFlowType:function(){return i.ZOOMCROP},useCropViewer:function(){return!0},loading:function(a,b){m(h,a,b)},loadID:m};e.exports=a}),null);
__d("ProfileNavigationItemDropdown",["Event","goURI","setImmediate","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this,d=a.menuElement,e=a.menuInstance,f=a.href;this.$1=[];this.$2=[];b("tidyEvent")(b("Event").listen(d,"click",function(a){c.$1.forEach(function(a){a.call(c)}),b("setImmediate")(function(){a.ctrlKey||a.metaKey?window.open(f,"_blank"):b("goURI")(f)})}));e.subscribe("itemclick",function(a,b){c.$2.forEach(function(a){a.call(c,b.item)})})}var c=a.prototype;c.onTriggerClick=function(a){this.$1.push(a)};c.onMenuItemClick=function(a){this.$2.push(a)};return a}();e.exports=a}),null);
__d("legacy:TimelineCover",["TimelineCover"],(function(a,b,c,d,e,f){a.TimelineCover=b("TimelineCover")}),3);
__d("TimelineCoverPhotoChangePrivacyDialog",["Arbiter","Event"],(function(a,b,c,d,e,f){a={init:function(a,b,c){this._dialog=a,this._tooltipLink=c,this._closeButton=b,this._showDialog=!1,this._tooltip=null},registerDialogShow:function(){this._showDialog=!0,b("Arbiter").subscribe("CoverPhotoEdit",function(a,b){if(!this._showDialog)return;b.state==="open"?(this._dialog&&this._dialog.show(),this._tooltipLink&&(this._tooltip=this._tooltipLink.getAttribute("data-hover"),this._tooltipLink.setAttribute("data-hover",null))):b.state==="closed"&&this.hideDialog()}.bind(this)),b("Event").listen(this._closeButton,"click",this.hideDialog.bind(this))},hideDialog:function(){this._dialog&&this._dialog.hide(),this._tooltipLink&&this._tooltipLink.setAttribute("data-hover",this._tooltip),this._showDialog=!1}};e.exports=a}),null);
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","HTML","Run","TimelineProfilePicConfig","$","ge"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();a.init=function(b,c){a.destroyInstance(),g=new a(b||"fbProfileCover",c||".profilePicThumb")};function a(a,c){this.$1=b("$")(a),this.$2=c,this.$3=[b("Arbiter").subscribe(b("TimelineProfilePicConfig").loading,this.startLoading.bind(this)),b("Arbiter").subscribe(b("TimelineProfilePicConfig").success,this.onUploadSuccess.bind(this))],b("Run").onBeforeUnload(this.onBeforeUnload.bind(this)),b("Run").onLeave(this.destroy.bind(this))}var c=a.prototype;c.$4=function(a){this.$5=a,b("CSS").conditionClass(this.$1,"profilePicLoading",a)};c.destroy=function(){this.$3.forEach(function(a){a.unsubscribe()}),this.$3=[],g=null};c.startLoading=function(a,b){this.$4(!!b.isLoading)};c.onUploadSuccess=function(a,c){__p&&__p();this.$4(!1);if(!c.newPic)return;a=b("Dialog").getCurrent();a&&a.hide();a=c.newPic;b("DOM").replace(b("DOM").find(this.$1,this.$2),typeof a==="string"?b("HTML")(a):a);if(c.profileId&&c.headerPicURL){a=b("ge")("profile_pic_header_"+c.profileId);a&&(a.src=c.headerPicURL)}a=b("ge")("fbProfilePicSelector");a&&b("CSS").removeClass(a,"fbTimelineNullProfilePicSelector")};c.onBeforeUnload=function(){if(g===this&&this.$5)return b("TimelineProfilePicConfig").leavingMessage};a.destroyInstance=function(){g&&g.destroy()};return a}();e.exports=a}),null);
__d("TypeaheadShowResultsOnFocus",["Event","Keys"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._typeahead=a}var c=a.prototype;c.enable=function(){this._typeahead.getCore().resetOnKeyup=!1,this._subscription=this._typeahead.subscribe("bootstrap",function(a,b){this.firstFetch(b,this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._keyUpListener=b("Event").listen(this._typeahead.getCore().getElement(),"keyup",function(a){(b("Event").getKeyCode(a)==b("Keys").BACKSPACE||b("Event").getKeyCode(a)==b("Keys").DELETE)&&this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._focusListener=b("Event").listen(this._typeahead.getCore().getElement(),"focus",function(a){this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};c.disable=function(){this._typeahead.unsubscribe(this._subscription),this._subscription=null,this._keyUpListener.remove(),this._keyUpListener=null,this._focusListener.remove(),this._focusListener=null};c.firstFetch=function(a,b,c){a.bootstrapping||this.respond(b,c)};c.respond=function(a,b){a.getValue()||this.refreshAndShowNeededResults(a,b)};c.refreshAndShowNeededResults=function(a,b){var c=this.getUidsFromData(b);a.setValue("");a=b.buildUids(" ",c);b.respond("",a)};c.getUidsFromData=function(a){a=a.getAllEntries();var b=[];for(var c in a)b.push({uid:a[c].uid,index:a[c].index});b.sort(function(a,b){return a.index-b.index});return b.map(function(a){return a.uid})};return a}();Object.assign(a.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});e.exports=a}),null);
__d("htmlSpecialChars",[],(function(a,b,c,d,e,f){__p&&__p();var g=/&/g,h=/</g,i=/>/g,j=/\"/g,k=/\'/g;function a(a){if(typeof a==="undefined"||a===null||!a.toString)return"";if(a===!1)return"0";else if(a===!0)return"1";return a.toString().replace(g,"&amp;").replace(j,"&quot;").replace(k,"&#039;").replace(h,"&lt;").replace(i,"&gt;")}e.exports=a}),null);