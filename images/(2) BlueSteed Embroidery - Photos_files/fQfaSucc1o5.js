if (self.CavalryLogger) { CavalryLogger.start_js(["INPuA"]); }

__d("PagesComposerOverlayActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirrorRecursive")({FETCH_PAGES_COMPOSER_DIALOG_DATA:null,OVERLAY_POST_SUCCESS:null,OVERLAY_RESET:null,PAGES_COMPOSER_DIALOG_DATA_LOADED:null},"PagesComposerOverlayActionTypes");e.exports=a}),null);
__d("PagesComposerOverlayActions",["PagesComposerOverlayActionTypes","ReactComposerDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerOverlayActionTypes").OVERLAY_POST_SUCCESS})};c=function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("PagesComposerOverlayActionTypes").OVERLAY_RESET})};d=function(a){b("ReactComposerDispatcher").dispatch({type:b("PagesComposerOverlayActionTypes").FETCH_PAGES_COMPOSER_DIALOG_DATA,composerID:a})};f=function(a){b("ReactComposerDispatcher").dispatch({type:b("PagesComposerOverlayActionTypes").PAGES_COMPOSER_DIALOG_DATA_LOADED,composerID:a})};e.exports={handleOverlayPostSuccess:a,handleOverlayReset:c,handlePagesComposerDialogDataFetch:d,handlePagesComposerDialogDataLoaded:f}}),null);
__d("PagesStoryCreationUtils",["ReactComposerAudienceStore"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("ReactComposerAudienceStore").getStoriesSelected(a);a=b("ReactComposerAudienceStore").getTimelineSelected(a);return c&&!a}e.exports={getIsOnlyStorySelected:a}}),null);
__d("PagesWWWInstagramBusinessPhotoReminderActionType",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({FETCH_INITIAL_PHOTOS:"",FETCH_MORE_PHOTOS:"",SET_SELECTED_PHOTO:"",IS_FETCHING_IG_PHOTOS:""});e.exports=a}),null);
__d("PagesWWWInstagramBusinessPhotoReminderStoreData",["immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("immutable").Record;c={cursor:null,dataLoaded:!1,isFetching:!1,photos:b("immutable").List([]),selectedPhoto:null};d=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getDataLoaded=function(){return this.dataLoaded};c.getCursor=function(){return this.cursor};c.getIsFetching=function(){return this.isFetching};c.getPhotos=function(){return this.photos};c.getSelectedPhoto=function(){return this.selectedPhoto};c.setDataLoaded=function(a){return this.set("dataLoaded",a)};c.setCursor=function(a){return this.set("cursor",a)};c.setInitialPhotos=function(a){return this.set("photos",a)};c.setSelectedPhoto=function(a){return this.set("selectedPhoto",a)};c.mergePhotos=function(a){return this.set("photos",this.getPhotos().concat(a))};return b}(a(babelHelpers["extends"]({},c)));e.exports=d}),null);
__d("PagesWWWInstagramBusinessPhotoReminderStore",["FluxReduceStore","PagesWWWInstagramBusinessPhotoReminderActionType","PagesWWWInstagramBusinessPhotoReminderStoreData","ReactComposerDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("PagesWWWInstagramBusinessPhotoReminderStoreData"))()};d.reduce=function(a,c){__p&&__p();if(c){var d=c.payload?c.payload:{},e=d.cursor;d=d.photos;switch(c.type){case b("PagesWWWInstagramBusinessPhotoReminderActionType").FETCH_INITIAL_PHOTOS:return a.setInitialPhotos(b("immutable").List(d)).setSelectedPhoto(null).setCursor(e).setDataLoaded(!0).set("isFetching",!1);case b("PagesWWWInstagramBusinessPhotoReminderActionType").FETCH_MORE_PHOTOS:return a.mergePhotos(b("immutable").List(d)).setCursor(e).set("isFetching",!1);case b("PagesWWWInstagramBusinessPhotoReminderActionType").SET_SELECTED_PHOTO:d=c.selectedPhoto;return a.setSelectedPhoto(d);case b("PagesWWWInstagramBusinessPhotoReminderActionType").IS_FETCHING_IG_PHOTOS:return a.set("isFetching",c.isFetching);default:return a}}else return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("ReactComposerDispatcher"))}),null);
__d("ReactComposerMediaAttachmentType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CANVAS:"CANVAS",CAROUSEL:"CAROUSEL",SLIDESHOW:"SLIDESHOW",PHOTOS:"PHOTOS",ALBUM:"ALBUM"})}),null);
__d("SlideshowCreationWaterfallLogger",["MarauderLogger"],(function(a,b,c,d,e,f){a={logEvent:function(c,d,a){d=d||{},b("MarauderLogger").log(c,a,d,void 0,void 0,void 0)}};e.exports=a}),null);
__d("ReactComposerSlideshowLoggingStore",["ComposerXSessionIDs","ReactComposerActionTypes","ReactComposerAttachmentActionType","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerDispatcher","ReactComposerMediaUploadActionType","ReactComposerSelectedImagesStore","ReactComposerSlideshowActionType","ReactComposerSlideshowAudioStore","ReactComposerSlideshowStore","ReactComposerStoreBase","SlideshowConstants","SlideshowCreationWaterfallLogger","SlideshowFlowTypes"],(function(a,b,c,d,e,f){__p&&__p();var g=b("SlideshowFlowTypes").SlideshowTabKey;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;c=a.call(this,function(){return{aspectRatioFormat:b("SlideshowConstants").formats.Original,deletedStorylineMoodID:null,durationInMS:1e3,entrypoint:"unknown",module:"composer_slideshow",photoCount:0,selectedMusicCategory:"All Tracks",selectedStorylineMoodID:null,selectedTab:g.SETTINGS_TAB,transitionInMS:b("SlideshowConstants").transitions.None,uploadedStorylineMoodID:null}},function(a){__p&&__p();switch(a.type){case b("ReactComposerSlideshowActionType").HIDE_SLIDESHOW_EDIT_FIELD:d&&d.$ReactComposerSlideshowLoggingStore1(a);break;case b("ReactComposerSlideshowActionType").TOGGLE_SLIDESHOW_DIALOG:d&&d.$ReactComposerSlideshowLoggingStore2(a);break;case b("ReactComposerAttachmentActionType").SELECT_ATTACHMENT:d&&d.$ReactComposerSlideshowLoggingStore3(a);break;case b("ReactComposerActionTypes").POST_SUCCEEDED:d&&d.$ReactComposerSlideshowLoggingStore4(a);break;case b("ReactComposerMediaUploadActionType").PHOTO_UPLOAD_ENQUEUED:d&&d.$ReactComposerSlideshowLoggingStore5(a);break;case b("ReactComposerMediaUploadActionType").PHOTO_UPLOAD_DONE:b("ReactComposerDispatcher").waitFor([b("ReactComposerSelectedImagesStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore6(a);break;case b("ReactComposerSlideshowActionType").IMAGES_SELECT_CONFIRM:b("ReactComposerDispatcher").waitFor([b("ReactComposerSelectedImagesStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore7(a);break;case b("ReactComposerSlideshowActionType").IMAGE_REMOVE:b("ReactComposerDispatcher").waitFor([b("ReactComposerSelectedImagesStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore8(a);break;case b("ReactComposerSlideshowActionType").MUSIC_CATEGORY_SELECT:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowAudioStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore9(a);break;case b("ReactComposerSlideshowActionType").STORYLINE_MOOD_CHANGE:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowAudioStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore10(a);break;case b("ReactComposerSlideshowActionType").STORYLINE_MOOD_DELETE:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowAudioStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore11(a);break;case b("ReactComposerSlideshowActionType").AUDIO_FILE_UPLOAD_STARTED:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowAudioStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore12(a);break;case b("ReactComposerSlideshowActionType").AUDIO_FILE_UPLOAD_ERROR:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowAudioStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore13(a);break;case b("ReactComposerSlideshowActionType").AUDIO_FILE_UPLOAD_SUCCESS:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowAudioStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore14(a);break;case b("ReactComposerSlideshowActionType").DURATION_CHANGE:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore15(a);break;case b("ReactComposerSlideshowActionType").TRANSITION_CHANGE:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore16(a);break;case b("ReactComposerSlideshowActionType").FORMAT_CHANGE:b("ReactComposerDispatcher").waitFor([b("ReactComposerSelectedImagesStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore17(a);break;case b("ReactComposerSlideshowActionType").SELECT_TAB:b("ReactComposerDispatcher").waitFor([b("ReactComposerSlideshowStore").getDispatchToken()]);d&&d.$ReactComposerSlideshowLoggingStore18(a);break;default:break}})||this;d=babelHelpers.assertThisInitialized(c);return c}var d=c.prototype;d.activate=function(){};d.$ReactComposerSlideshowLoggingStore3=function(a){var b=a.id,c=a.composerID;a=a.currentAttachmentID;this.$ReactComposerSlideshowLoggingStore19(c,b)?this.$ReactComposerSlideshowLoggingStore20(c,"intent_slideshow"):this.$ReactComposerSlideshowLoggingStore19(c,a)&&this.$ReactComposerSlideshowLoggingStore20(c,"cancel_slideshow")};d.$ReactComposerSlideshowLoggingStore2=function(a){var b=a.composerID;b=this.getComposerData(b);a.entrypoint!=null&&(b.entrypoint=a.entrypoint);a.shouldShowSlideshowDialog?this.$ReactComposerSlideshowLoggingStore20(a.composerID,"intent_slideshow"):this.$ReactComposerSlideshowLoggingStore20(a.composerID,"cancel_slideshow")};d.$ReactComposerSlideshowLoggingStore1=function(a){this.$ReactComposerSlideshowLoggingStore20(a.composerID,"cancel_slideshow")};d.$ReactComposerSlideshowLoggingStore5=function(a){a=a.composerID;if(!this.$ReactComposerSlideshowLoggingStore21(a))return;this.$ReactComposerSlideshowLoggingStore20(a,"image_upload_started_slideshow")};d.$ReactComposerSlideshowLoggingStore6=function(a){a=a.composerID;var c=this.getComposerData(a);if(!this.$ReactComposerSlideshowLoggingStore21(a))return;var d=b("ReactComposerSelectedImagesStore").getNumberOfImages(a);c.photoCount=d;this.$ReactComposerSlideshowLoggingStore20(a,"image_upload_success_slideshow")};d.$ReactComposerSlideshowLoggingStore7=function(a){a=a.composerID;var c=this.getComposerData(a),d=b("ReactComposerSelectedImagesStore").getNumberOfImages(a);c.photoCount=d;this.$ReactComposerSlideshowLoggingStore20(a,"images_select_confirm_slideshow")};d.$ReactComposerSlideshowLoggingStore8=function(a){a=a.composerID;var c=this.getComposerData(a),d=b("ReactComposerSelectedImagesStore").getNumberOfImages(a);c.photoCount=d;this.$ReactComposerSlideshowLoggingStore20(a,"image_remove_slideshow")};d.$ReactComposerSlideshowLoggingStore9=function(a){var b=a.composerID,c=this.getComposerData(b);c.selectedMusicCategory=a.selectedMusicCategory;this.$ReactComposerSlideshowLoggingStore20(b,"music_category_select_slideshow")};d.$ReactComposerSlideshowLoggingStore10=function(a){a=a.composerID;var c=this.getComposerData(a),d=b("ReactComposerSlideshowAudioStore").getSelectedStorylineMood(a);d==null?(c.selectedStorylineMoodID=null,this.$ReactComposerSlideshowLoggingStore20(a,"storyline_mood_remove_slideshow")):(c.selectedStorylineMoodID=d.moodID,this.$ReactComposerSlideshowLoggingStore20(a,"storyline_mood_select_slideshow"))};d.$ReactComposerSlideshowLoggingStore12=function(a){a=a.composerID;var c=this.getComposerData(a);c.selectedMusicCategory=b("ReactComposerSlideshowAudioStore").getSelectedMusicCategory(a);this.$ReactComposerSlideshowLoggingStore20(a,"audio_upload_start_slideshow")};d.$ReactComposerSlideshowLoggingStore13=function(a){a=a.composerID;this.$ReactComposerSlideshowLoggingStore20(a,"audio_upload_error_slideshow")};d.$ReactComposerSlideshowLoggingStore14=function(a){var b=a.composerID,c=this.getComposerData(b);c.uploadedStorylineMoodID=a.uploadedMood.moodID;this.$ReactComposerSlideshowLoggingStore20(b,"audio_upload_success_slideshow")};d.$ReactComposerSlideshowLoggingStore11=function(a){var b=a.composerID,c=this.getComposerData(b);c.deletedStorylineMoodID=a.selectedStorylineMood.moodID;this.$ReactComposerSlideshowLoggingStore20(b,"storyline_mood_delete_slideshow")};d.$ReactComposerSlideshowLoggingStore16=function(a){a=a.composerID;var c=this.getComposerData(a);c.transitionInMS=b("ReactComposerSlideshowStore").getTransitionInMS(a);this.$ReactComposerSlideshowLoggingStore20(a,"transition_change_slideshow")};d.$ReactComposerSlideshowLoggingStore15=function(a){a=a.composerID;var c=this.getComposerData(a);c.durationInMS=b("ReactComposerSlideshowStore").getDurationInMS(a);this.$ReactComposerSlideshowLoggingStore20(a,"duration_change_slideshow")};d.$ReactComposerSlideshowLoggingStore17=function(a){a=a.composerID;var c=this.getComposerData(a);c.aspectRatioFormat=b("ReactComposerSelectedImagesStore").getFormat(a);this.$ReactComposerSlideshowLoggingStore20(a,"format_change_slideshow")};d.$ReactComposerSlideshowLoggingStore18=function(a){a=a.composerID;var c=this.getComposerData(a);c.selectedTab=b("ReactComposerSlideshowStore").getSelectedTab(a);this.$ReactComposerSlideshowLoggingStore20(a,"tab_change_slideshow")};d.$ReactComposerSlideshowLoggingStore4=function(a){a=a.composerID;this.$ReactComposerSlideshowLoggingStore19(a)&&this.$ReactComposerSlideshowLoggingStore20(a,"post_slideshow")};d.$ReactComposerSlideshowLoggingStore21=function(a){return b("ReactComposerSlideshowStore").shouldShowSlideshowDialog(a)};d.$ReactComposerSlideshowLoggingStore19=function(a){var c=b("ReactComposerAttachmentStore").getSelectedAttachmentID(a);if(!c)return!1;c=c===b("ReactComposerAttachmentType").MEDIA;a=b("ReactComposerSlideshowStore").isSlideshowSelected(a);return c&&a};d.$ReactComposerSlideshowLoggingStore20=function(a,c){var d=this.getComposerData(a);a=b("ComposerXSessionIDs").getSessionID(a);b("SlideshowCreationWaterfallLogger").logEvent(c,{photo_count:d.photoCount,entrypoint:d.entrypoint,selected_music_category:d.selectedMusicCategory,selected_storyline_mood_id:d.selectedStorylineMoodID,uploaded_storyline_mood_id:d.uploadedStorylineMoodID,deleted_storyline_mood_id:d.deletedStorylineMoodID,duration_in_ms:d.durationInMS,transition_in_ms:d.transitionInMS,aspect_ratio_format:d.aspectRatioFormat,selected_tab:d.selectedTab,composer_session_id:a},d.module)};return c}(b("ReactComposerStoreBase"));e.exports=new a()}),null);
__d("ComposerXPages",["Arbiter","CurrentUser","DOM","DOMScroll","Event","PagesComposerActions","PagesComposerOverlayActions","PagesComposerUnpublishedPostsStore","PagesComposerUtils","PagesStoryCreationUtils","PagesWWWInstagramBusinessPhotoReminderActionType","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerDispatcher","ReactComposerEvents","ReactComposerInit","ReactComposerMediaAttachmentType","ReactComposerPostUtilsCore","ReactComposerSlideshowActions","ReactComposerSlideshowLoggingStore","ReactComposerStore","Run","URI","ge","setTimeout","PagesWWWInstagramBusinessPhotoReminderStore"],(function(a,b,c,d,e,f){__p&&__p();var g=b("PagesComposerActions").updatePreviewConfig,h=b("PagesComposerUtils").redirectOnPostSuccess,i=b("PagesStoryCreationUtils").getIsOnlyStorySelected;a={initScrollToComposer:function(a){b("Event").listen(a,"click",function(){this._scrollAndFocus(b("ge")("pagelet_timeline_recent"))}.bind(this))},initScrollToComposerWithUserVoice:function(a,c){b("Event").listen(a,"click",function(){var a=b("ge")(c);b("Arbiter").inform("ComposerXPages/composePostWithActor",{actorID:b("CurrentUser").getID(),callback:function(){b("DOM").find(a,"textarea.input").focus()}});a&&this._scrollAndFocus(a)}.bind(this))},scrollToComposer:function(a){var c=window.location.href;b("URI").getRequestURI().getQueryData().focus_composer||b("URI").getRequestURI().getQueryData().scroll_to_composer?b("Run").onAfterLoad(function(){this._scrollAndFocus(a)}.bind(this)):c.indexOf("focus_composer")!=-1&&this._scrollAndFocus(a)},registerForAutoClose:function(a,c,d,e){__p&&__p();var f=this;b("Arbiter").subscribe("Pages/composeFinished",function(f,i){__p&&__p();if(i.composerID===c){var j=b("PagesComposerUnpublishedPostsStore").getPostActionType(c);f=j==="PREVIEW";if(f)g(c,!1,i.contentID,null,null);else{b("PagesComposerOverlayActions").handleOverlayPostSuccess(c);var k=function(){a&&a.hide(),i.contentID&&b("Arbiter").inform("composer/publish",{content_id:i.contentID,matchData:{content_id:i.contentID},shouldNotReload:d})};d?b("setTimeout")(function(){b("ReactComposerInit").hideComposer(c),k(),b("ReactComposerPostUtilsCore").handlePostSucceeded(c),e!==null&&e!==void 0&&h(e,j)},3e3):k()}}});b("Arbiter").subscribe(b("ReactComposerEvents").COMPOSER_RESET+c,function(b,c){f.registerForAutoClose(a,c.newComposerID)})},shouldHideComposer:function(a){var c=b("PagesComposerUnpublishedPostsStore").getPostActionType(a)==="PREVIEW";return i(a)&&!c},handleStoryCreation:function(a,c){var d=this;b("Arbiter").subscribe(b("ReactComposerEvents").POST_STARTED+c,function(){d.shouldHideComposer(c)&&(b("ReactComposerInit").hideComposer(c),a&&a.hide())});b("Arbiter").subscribe("Pages/createStorySuccess",function(){d.shouldHideComposer(c)&&b("ReactComposerPostUtilsCore").handlePostSucceeded(c)})},attachIGPhoto:function(a,c){b("PagesWWWInstagramBusinessPhotoReminderStore");c={type:b("PagesWWWInstagramBusinessPhotoReminderActionType").SET_SELECTED_PHOTO,selectedPhoto:c,composerID:a};b("ReactComposerDispatcher").dispatch(c);b("ReactComposerAttachmentActions").selectAttachment(a,b("ReactComposerAttachmentType").IG_PHOTO_REMINDER,!0,"IG_PHOTO_REMINDER",b("ReactComposerStore").getSproutSurface(a))},openMediaTab:function(a,c){b("ReactComposerAttachmentActions").selectAttachment(a,"MEDIA",!0),c==="SLIDESHOW"&&(b("ReactComposerSlideshowLoggingStore").activate(),b("ReactComposerSlideshowActions").showSlideshowDialog(a,"composer_url_params"))},openCTATab:function(a){b("ReactComposerAttachmentActions").selectAttachment(a,"CTA")},openLivingRoomTab:function(a){b("ReactComposerAttachmentActions").selectAttachment(a,"LIVING_ROOM")},registerLivingRoomAutoClose:function(a,c){b("Arbiter").subscribe("Pages/livingRoomCreated",function(d,e){e.composerID===c&&(b("ReactComposerInit").hideComposer(c),a&&a.hide())})},_scrollAndFocus:function(a){b("DOMScroll").scrollTo(a,500,!1,0,0,function(){b("DOM").find(a,"textarea.input").focus()})}};e.exports=a}),null);