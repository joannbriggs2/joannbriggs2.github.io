if (self.CavalryLogger) { CavalryLogger.start_js(["vClMG"]); }

__d("AdsPlayable.react",["cx","ix","CenteredContainer.react","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","FDSText.react","Image.react","Link.react","React","SUIBusinessTheme"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").jsx(b("Image.react"),{className:"_51o6",src:this.props.iconImage!=null&&this.props.iconImage!==""?this.props.iconImage:h("27500")});this.props.onPlayClick&&(a=b("React").jsx(b("Link.react"),{className:"_51o7",onClick:this.props.onPlayClick,children:a}));var c=b("React").jsx(b("CenteredContainer.react"),{vertical:!0,children:a});this.props.iconText!=null&&this.props.iconText!==""&&(c=b("React").jsxs(b("CenteredContainer.react"),{vertical:!0,children:[a,b("React").jsx(b("FDSText.react"),{display:"block",size:"body1",children:this.props.iconText})]}));return b("React").jsxs(b("FBOverlayContainer.react"),babelHelpers["extends"]({},this.props,{children:[b("React").jsx(b("FBOverlayBase.react"),{children:this.props.children}),b("React").jsx(b("FBOverlayElement.react"),{children:c})]}))};return c}(b("React").Component);c.propTypes={iconImage:a.object,iconText:a.string,onPlayClick:a.func};e.exports=c}),null);
__d("XAdsVideoPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/x/video_player/",{video_id:{type:"String",required:!0},video_container_id:{type:"String",required:!0},width:{type:"Int",required:!0},height:{type:"Int",required:!0},show_controls:{type:"Bool",defaultValue:!1},forcehd:{type:"Bool",defaultValue:!1},show_captions_default:{type:"Bool",defaultValue:!1},force_flash:{type:"Bool",defaultValue:!1},allow_fullscreen:{type:"Bool",defaultValue:!1},start_muted:{type:"Bool",defaultValue:!1},video_player_logger_source:{type:"String",required:!0}})}),null);
__d("AdsVideoPlayer.react",["cx","fbt","AdsPlayable.react","AsyncRequest","CenteredContainer.react","FBLogger","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","FDSSpinner.react","Link.react","React","UserAgent","XAdsVideoPlayerController","guid","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i=1e3;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.playVideo=function(){if(d.props.disableVideoPlay)return;if(!d.isVideoLoaded())return;d.state.playerAPI&&(d.state.playerAPI.play("user_initiated"),d.setState({playing:!0}))};d.closePlayer=function(){d.pause(),d.seek(0),d.setState({playing:!1}),d.props.onPlayerClosed&&d.props.onPlayerClosed()};d.onMouseEnter=function(){d.state.playerAPI&&d.props.playOnHover&&(d.state.playerAPI.play("hover"),d.setState({playing:!0}))};d.onMouseLeave=function(){d.state.playerAPI&&d.props.playOnHover&&(d.state.playerAPI.pause("hover"),d.state.playerAPI&&d.state.playerAPI.abortLoading(),d.setState({playing:!1}))};d.state={implementationUnavailable:!1,playing:!1,playerAPI:null};d.$1=null;d.$2="ads_video_"+b("guid")();return d}var d=c.prototype;d.componentDidMount=function(){this.$3(this.props)};d.UNSAFE_componentWillReceiveProps=function(a){var b=a.videoID,c=a.playerWidth,d=a.playerHeight,e=a.rotation,f=a.timePositionInMs;b!==this.props.videoID||c!==this.props.playerWidth||d!==this.props.playerHeight?(this.closePlayer(),this.setState({playerAPI:null}),this.$3(a)):f!=null&&this.props.timePositionInMs!==f&&this.state.playerAPI&&this.state.playerAPI.seek(f/i);e!=null&&e!==this.props.rotation&&(this.state.playerAPI&&this.state.playerAPI.setRotation(e))};d.componentDidUpdate=function(a){this.props.autoPlay&&(!a.autoPlay||this.props.autoPlayStart!==a.autoPlayStart||this.props.autoPlayStop!==a.autoPlayStop)&&this.autoPlayVideo(),!this.props.autoPlay&&a.autoPlay&&this.pause("autoplay_initiated")};d.componentWillUnmount=function(){this.pause(),this.seek(0),this.state.playerAPI&&this.state.playerAPI.abortLoading(),this.state.playerAPI&&this.state.playerAPI.detachRootNode()};d.$3=function(a){this.props.loadVideoPlayer?this.props.loadVideoPlayer(this.$2,this,a):this.$4(a)};d.$4=function(a){var c=a.videoID,d=a.playerWidth;a=a.playerHeight;c=b("XAdsVideoPlayerController").getURIBuilder().setString("video_id",c).setString("video_container_id",this.$2).setInt("width",d).setInt("height",a).setBool("show_controls",this.props.showControls).setBool("forcehd",this.props.forceHD).setBool("show_captions_default",this.props.showCaptionsByDefault).setBool("force_flash",this.props.forceFlash).setBool("allow_fullscreen",this.props.showFullscreenButton).setBool("start_muted",this.props.muted).setString("video_player_logger_source",this.props.videoPlayerLoggerSource).getURI();this.request=new(b("AsyncRequest"))().setMethod("GET").setRelativeTo(this).setURI(c).setReadOnly(!0).setAllowCrossPageTransition(!0).send()};d.isImplementationUnavailable=function(){this.state.playerAPI&&this.setState({implementationUnavailable:this.state.playerAPI.isImplementationUnavailable()});return this.state.implementationUnavailable};d.autoPlayVideo=function(){var a=this;if(!this.state.playerAPI)return;(this.props.autoPlayStart||this.props.autoPlayStart===0)&&(this.state.playerAPI.seek(this.props.autoPlayStart/i),clearTimeout(this.$1));this.state.playerAPI.play("autoplay_initiated");this.setState({playing:!0});this.props.autoPlayStop&&(this.$1=setTimeout(function(){a.state.playerAPI&&a.state.playerAPI.pause("autoplay_initiated")},this.props.autoPlayStop-(this.props.autoPlayStart||0)))};d.getCurrentTimePosition=function(){return this.state.playerAPI?this.state.playerAPI.getCurrentTimePosition():null};d.isVideoLoaded=function(){var a=!!this.state.playerAPI;a||b("FBLogger")("ads").warn("Video hasn't loaded yet");return this.state.playerAPI&&this.state.playerAPI.isState("fallback")?!1:a};d.seek=function(a){if(!this.isVideoLoaded())return;this.state.playerAPI&&this.state.playerAPI.seek(a/i)};d.pause=function(a){a===void 0&&(a="user_initiated");if(!this.isVideoLoaded())return;this.state.playerAPI&&this.state.playerAPI.pause(a)};d.unmute=function(){if(!this.isVideoLoaded())return;this.state.playerAPI&&this.state.playerAPI.unmute()};d.mute=function(){if(!this.isVideoLoaded())return;this.state.playerAPI&&this.state.playerAPI.mute()};d.setVolume=function(a){if(!this.isVideoLoaded())return;var b=this.state.playerAPI;b&&(b.unmute(),b.setVolume(a))};d.render=function(){__p&&__p();var a=!1,c=this.props.alwaysShowBackground,d=this.props.hideAllOverlays,e=!this.state.playerAPI&&!this.props.hideAllOverlays;this.state.playing?a=!!this.state.playerAPI:this.state.playerAPI&&this.state.playerAPI.isState("fallback")&&(a=!0);var f=null;this.props.autoPlay?f=b("React").jsx("div",{className:!c&&(a||e)?"invisible_elem":null,style:{height:this.props.playerHeight,width:this.props.playerWidth},children:this.props.children}):f=e&&c||d?b("React").jsx("div",{style:{height:this.props.playerHeight,width:this.props.playerWidth},children:this.props.children}):b("React").jsx(b("AdsPlayable.react"),{className:a||e?"invisible_elem":null,iconImage:this.props.iconImage,iconText:this.props.iconText,onPlayClick:this.playVideo,children:this.props.children});c=null;this.props.showControls&&!this.props.hideCloseButton&&(c=b("React").jsx(b("FBOverlayElement.react"),{horizontal:"left",vertical:"top",children:b("React").jsx(b("Link.react"),{className:"_3-9a _2phz _4-xh"+(a?"":" hidden_elem"),onClick:this.closePlayer,children:h._("Close video player")})}));var g;e&&(g=b("React").jsx(b("FBOverlayElement.react"),{children:b("React").jsx(b("CenteredContainer.react"),{horizontal:!0,vertical:!0,children:b("React").jsx(b("FDSSpinner.react"),{})})}));d=b("UserAgent").isBrowser("IE");return b("React").jsxs(b("FBOverlayContainer.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4-xg"),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,children:[b("React").jsx(b("FBOverlayElement.react"),{children:b("React").jsx("div",{className:a||d?null:"invisible_elem",id:this.$2})}),g,b("React").jsx(b("FBOverlayBase.react"),{children:f}),c]}))};d.onVideoLoaded=function(){__p&&__p();var a=this;this.props.onVideoLoaded&&this.props.onVideoLoaded();if(!this.state.playerAPI)return;this.props.onUpdateMetadata&&this.state.playerAPI.addListener("updateMetadata",this.props.onUpdateMetadata);this.props.onBeginPlayback&&this.state.playerAPI.addListener("beginPlayback",this.props.onBeginPlayback);if(this.props.loop||this.props.onFinishPlayback){var b=function(){a.props.loop&&(a.state.playerAPI&&a.state.playerAPI.seek(0),a.state.playerAPI&&a.state.playerAPI.play("loop_initiated"),a.setState({playing:!0})),a.props.onFinishPlayback&&a.props.onFinishPlayback()};this.state.playerAPI.addListener("finishPlayback",b)}this.props.onPausePlayback&&this.state.playerAPI.addListener("pausePlayback",this.props.onPausePlayback);this.props.onSeekEnd&&this.state.playerAPI.addListener("seekEnd",this.props.onSeekEnd);this.props.playOnHover&&this.state.playerAPI.abortLoading();this.props.autoPlay&&this.autoPlayVideo()};d.destroyPlayer=function(){var a=this.state.playerAPI;a&&a.destroy()};d.getPlaybackDuration=function(){return!this.state.playerAPI?null:this.state.playerAPI.getPlaybackDuration()};d.getPlayerApi=function(){return this.state.playerAPI};return c}(b("React").Component);c.propTypes={alwaysShowBackground:a.bool,autoPlay:a.bool,autoPlayStart:a.number,autoPlayStop:a.number,disableVideoPlay:a.bool,forceFlash:a.bool,forceHD:a.bool,hideAllOverlays:a.bool,hideCloseButton:a.bool,iconImage:a.object,iconText:a.string,loadVideoPlayer:a.func,loop:a.bool,muted:a.bool,playOnHover:a.bool,playerHeight:a.number.isRequired,playerWidth:a.number.isRequired,rotation:a.number,showCaptionsByDefault:a.bool,showControls:a.bool,showFullscreenButton:a.bool,timePositionInMs:a.number,videoID:a.string.isRequired,videoPlayerLoggerSource:a.string,onBeginPlayback:a.func,onFinishPlayback:a.func,onPausePlayback:a.func,onPlayerClosed:a.func,onSeekEnd:a.func,onUpdateMetadata:a.func,onVideoLoaded:a.func};c.defaultProps={alwaysShowBackground:!1,showControls:!0,showCaptionsByDefault:!0,hideCloseButton:!1,forceFlash:!1,videoPlayerLoggerSource:"inline",hideAllOverlays:!1,muted:!1,playOnHover:!1,showFullscreenButton:!0};c.invokeVideoLoaded=function(a,b){a.setState({implementationUnavailable:b.isImplementationUnavailable()}),b.isState("loading")?a.stateChangeListener=b.addListener("stateChange",function(){if(!b.isState("loading")){if(a.state&&a.state.playerAPI)return;a.setState({playerAPI:b},a.onVideoLoaded);a.stateChangeListener&&a.stateChangeListener.remove()}}):a.setState({playerAPI:b},a.onVideoLoaded)};e.exports=c}),null);
__d("AdsPlusBox.react",["cx","CenteredContainer.react","Link.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("Link.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_58_r"),children:b("React").jsxs(b("CenteredContainer.react"),{className:"_4pm_",vertical:!0,children:[b("React").jsx("div",{className:"_58_s"}),this.props.children]})}))};return c}(b("React").Component);e.exports=a}),null);
__d("AdsProgressBox.react",["cx","fbt","BUIAdoptionCloseButton.react","BUIProgressBar.react","React","joinClasses","keyMirror"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=b("keyMirror")({Uploading:null,Encoding:null});d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.subtitle!=null?b("React").jsx("div",{className:(this.props.uppercaseSubtitle?"_6kdi":"")+" _2t6d",children:this.props.subtitle}):null,c=this.props.onCancel?b("React").jsx(b("BUIAdoptionCloseButton.react"),{className_DEPRECATED:"rfloat",label:h._("Cancel Upload"),onClick:this.props.onCancel}):null,d=this.props.align==="center"?"_5okx":"";return b("React").jsxs("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d),children:[this.$1(this.props.videoTitle,this.props.processingAction),b("React").jsxs("div",{className:"clearfix",children:[c,b("React").jsx("div",{className:c?"_3-92":"",children:b("React").jsx(b("BUIProgressBar.react"),{flexibleWidth:!0,isBuffering:this.props.striped,padding:!1,percentage:this.props.progressValue})})]}),a]}))};d.$1=function(a,c){if(a==null)return null;a=b("React").jsx("span",{className:"_5pic",children:a});c!=null&&(a=h._({"Uploading":"Uploading {videoTitle}","Encoding":"Encoding {videoTitle}"},[h._enum(c,{Uploading:"Uploading",Encoding:"Encoding"}),h._param("videoTitle",a)]));return b("React").jsx("div",{className:"_3-95 _5pid",children:a})};return c}(b("React").Component);d.PROCESSING_ACTION=c;d.propTypes={align:a.oneOf(["default","center"]),processingAction:a.oneOf(Object.keys(c)),progressValue:a.number.isRequired,striped:a.bool,subtitle:a.string,uppercaseSubtitle:a.bool,videoTitle:a.string,onCancel:a.func};d.defaultProps={align:"default",striped:!1,uppercaseSubtitle:!0};e.exports=d}),null);
__d("AdsSelected.react",["cx","ix","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsxs(b("FBOverlayContainer.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4ie2"+(this.props.isSelected?" _4ie3":"")),children:[b("React").jsx(b("FBOverlayBase.react"),{children:this.props.children}),b("React").jsx(b("FBOverlayElement.react"),{horizontal:"right",vertical:"top",children:b("React").jsx(b("Image.react"),{className:"_4ie4"+(this.props.isSelected?"":" hidden_elem"),src:h("23112")})})]}))};return c}(b("React").Component);c.propTypes={isSelected:a.bool};c.defaultProps={isSelected:!0};e.exports=c}),null);
__d("AdsVideoValidationUtils",["errorCode","fbt","AdsAccountUtils","AdsError","AdsErrorUtils","AdsInstagramFields","AdsInstreamVideoErrorUtils","AdsVideoBuyingStoreUtils","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=new Set([1815287,2016029,1815755,1815754]),j=new Set([1815287,2016029,2016032,1885566,1815754]),k=new Set([1885824]),l=b("AdsInstagramFields").INSTAGRAM_VIDEO_ERROR_KEYS,m=new Set([1815484,1815490,1815483,1815896,1815489,2490086,2490087]),n=new Set([1443208,1443209,1443214,1443205]),o=b("AdsVideoBuyingStoreUtils").COMPLETED_VIEW_ERRORS,p=new Set([2446275]),q=b("AdsVideoBuyingStoreUtils").MRC_VIEW_ERRORS,r=new Set([2490020]),s={getIcebergErrorNotice:function(a){var b=h._("This video is not eligible for the additional video content.");return s._getErrorList("icebergError",s._getErrorDetails(b,a))},getCompletedViewErrorNotice:function(a){var b=h._("This video is not eligible for completed video view buying.");return s._getErrorList("completedViewError",s._getErrorDetails(b,a))},getMrcViewErrorNotice:function(a){var b=h._("This video is not eligible for 2-second continuous video view buying.");return s._getErrorList("mrcViewError",s._getErrorDetails(b,a))},getInstagramErrorNotice:function(a,c){var d;c===b("AdsError").Level.RECOMMEND?d=h._("This video can't be used for Instagram, but you can still select it to run on Facebook."):d=h._("This video can't be used for Instagram ads");var e=[];c===b("AdsError").Level.RECOMMEND?e.push(h._("You can choose another video that will run on both Instagram and Facebook.")):e.push(h._("Choose another video for this ad set."));return s._getErrorList("instagramError",s._getErrorDetails(d,a,e))},getAudienceNetworkInStreamVideoCTVErrorNotice:function(a){var b=h._("This video can't be used for Connected TV ads on Audience Network. To use this video for Connected TV ads, you need to:");return s._getErrorList("audienceNetworkInStreamVideoCTVError",s._getErrorDetails(b,a))},getAudienceNetworkInStreamVideoErrorNotice:function(a){var b=h._("This video can't be used for in-stream ads on Audience Network. To run in-stream on Audience Network, you need to:");return s._getErrorList("audienceNetworkInStreamVideoError",s._getErrorDetails(b,a))},getInstreamVideoErrorNotice:function(a,c){c=b("AdsInstreamVideoErrorUtils").getInstreamVideoErrorTitle(c);a.length===1&&a[0].key===2490087&&(c="");return s._getErrorList("instreamVideoError",s._getErrorDetails(c,a))},getFacebookStoriesErrorNotice:function(a,b){b=h._("This video can't be used for Facebook story ads.");return s._getErrorList("facebookStoriesError",s._getErrorDetails(b,a))},getRewardedVideoErrorNotice:function(a){var b=h._("This video can't be used for rewarded video ads on Audience Network.");return s._getErrorList("rewardedVideoError",s._getErrorDetails(b,a))},getWhatsAppStatusErrorNotice:function(a,b){b=h._("This video can't be used for WhatsApp Status ads.");return s._getErrorList("whatsAppStatusError",s._getErrorDetails(b,a))},getMediaSpecStatusErrorNotice:function(a,b){b="";return s._getErrorList("mediaSpecStatusError",s._getErrorDetails(b,a))},getErrorMessages:function(a,c){__p&&__p();var d=b("AdsErrorUtils").getLevelForErrors(c);c=b("AdsErrorUtils").getAllErrorsAtLevel(c,d);if(c.length===0)return null;var e=[],f=c.filter(function(a){return m.has(a.key)});f.length!==0&&e.push(s.getInstreamVideoErrorNotice(f,d));f=c.filter(function(a){return l.has(a.key)});f.length!==0&&e.push(s.getInstagramErrorNotice(f,d));f=c.filter(function(a){return i.has(a.key)});f.length!==0&&e.push(s.getAudienceNetworkInStreamVideoErrorNotice(f));f=c.filter(function(a){return j.has(a.key)});a=b("AdsAccountUtils").hasCapabilityFromList(a,"ADS_INSTREAM_CONNECTED_TV");f.length!==0&&a&&e.push(s.getAudienceNetworkInStreamVideoCTVErrorNotice(f));a=c.filter(function(a){return k.has(a.key)});a.length!==0&&e.push(s.getRewardedVideoErrorNotice(a));f=c.filter(function(a){return n.has(a.key)});f.length!==0&&e.push(s.getFacebookStoriesErrorNotice(f,d));a=c.filter(function(a){return o.has(a.key)});a.length!==0&&e.push(s.getCompletedViewErrorNotice(a));f=c.filter(function(a){return q.has(a.key)});f.length!==0&&e.push(s.getMrcViewErrorNotice(f));a=c.filter(function(a){return r.has(a.key)});a.length!==0&&e.push(s.getWhatsAppStatusErrorNotice(a,d));f=c.filter(function(a){return p.has(a.key)});f.length!==0&&e.push(s.getMediaSpecStatusErrorNotice(f,d));a=function(a,b){if(a.length===0||a.length===1)return a;var c=[];a.forEach(function(d,e){c.push(d),e<a.length-1&&c.push(b)});return c};return a(e,"\n")},_getErrorDetails:function(a,c,d){a=a?[a,"\n"]:[];c=b("AdsErrorUtils").getRawMessages(c);c.length>1&&(c=c.map(function(a){return h._("{bullet} {error message}",[h._param("bullet","\u2022"),h._param("error message",a)])}));d&&(c=c.concat(d));return a.concat(c)},_getErrorList:function(a,c){return b("React").jsx("ul",{children:c.map(function(a,c){return b("React").jsx("li",{children:a},"error_"+c)})},a)}};e.exports=s}),null);
__d("AdsVideoValidationIcon.react",["AdsError","AdsErrorUtils","AdsValidationIcon.react","AdsValidationIconType","AdsVideoValidationUtils","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("AdsVideoValidationUtils").getErrorMessages(this.props.accountCapabilities,this.props.errors);if(a==null)return null;var c=b("AdsErrorUtils").getLevelForErrors(this.props.errors),d=this.props.iconType;d||(d=c===b("AdsError").Level.RECOMMEND?b("AdsValidationIconType").WARNING:b("AdsValidationIconType").ERROR_IMAGE);return b("React").jsx(b("AdsValidationIcon.react"),{className:this.props.className,isError:c===b("AdsError").Level.WARN,messages:a,type:d})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("GradientBox.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;var h={up:"_344j",left:"_344k",down:"_344l",right:"_344m"},i={white:"_344n",black:"_344o"};c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("joinClasses")(h[this.props.direction],i[this.props.color]);return b("React").jsx("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a)}))};return c}(b("React").Component);c.propTypes={direction:a.oneOf(["up","down","right","left"]),color:a.oneOf(["black","white"])};c.defaultProps={direction:"right",color:"black"};e.exports=c}),null);
__d("AdsVideoItem.react",["cssVar","cx","invariant","AdsError","AdsErrorUtils","AdsTimeUtils","AdsVideoPlayer.react","AdsVideoValidationIcon.react","BackgroundImage.react","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","GradientBox.react","Link.react","React"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;var j={tiny:{width:parseInt("160px",10),height:parseInt("90px",10)},small:{width:parseInt("220px",10),height:parseInt("124px",10)},large:{width:parseInt("280px",10),height:parseInt("158px",10)}};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){if(!a.picture)return;this.refs.videoPlayer&&a.picture!==this.props.picture&&this.refs.videoPlayer.closePlayer()};d.render=function(){__p&&__p();var a=j[this.props.size],c=this.props.onClick,d=b("AdsErrorUtils").getLevelForErrors(this.props.errors),e=b("AdsErrorUtils").getAllErrorsAtLevel(this.props.errors,d),f=this.$1(e,d);!this.props.selectableOnErrors&&e.length>0&&d===b("AdsError").Level.WARN&&(c=null);e=null;this.props.title&&(e=b("React").jsx(b("FBOverlayElement.react"),{vertical:"bottom",children:b("React").jsx("div",{className:"_5cl3"+(this.props.length&&!f?" _5r1m":"")+(this.props.length&&f?" _19ra":""),children:this.props.title})}));d=null;this.props.length&&(d=b("React").jsx(b("FBOverlayElement.react"),{horizontal:"right",vertical:"bottom",children:b("React").jsx("div",{className:"_5r1p"+(f?" _19rb":""),children:b("AdsTimeUtils").secondsToString(Math.floor(this.props.length))})}));e=b("React").jsxs(b("FBOverlayContainer.react"),{children:[b("React").jsx(b("FBOverlayBase.react"),{children:b("React").jsx(b("BackgroundImage.react"),{backgroundSize:"contain",className:"_55v-",height:a.height,src:this.props.picture,width:a.width})}),b("React").jsx(b("FBOverlayElement.react"),{vertical:"bottom",children:b("React").jsx(b("GradientBox.react"),{className:"_5cl2",color:"black",direction:"up"})}),this.$2(),e,this.$3(f),d]});if(this.props.playable){this.props.videoID||i(0,4557);return b("React").jsxs(b("FBOverlayContainer.react"),{children:[b("React").jsx(b("FBOverlayBase.react"),{children:b("React").jsx(b("AdsVideoPlayer.react"),babelHelpers["extends"]({},this.props,{playerHeight:a.height,playerWidth:a.width,ref:"videoPlayer",videoID:this.props.videoID,children:b("React").jsx(b("Link.react"),{"data-testid":"video-box",onClick:c,children:e})}))}),this.$4(f)]})}return b("React").jsx(b("Link.react"),{"data-testid":"video-box",onClick:c,children:e})};d.$2=function(){return!this.props.editVideoButton?null:b("React").jsx(b("FBOverlayElement.react"),{horizontal:"left",vertical:"top",children:b("React").jsx("span",{children:this.props.editVideoButton})})};d.$1=function(a,c){return a.length===0?null:b("React").jsx(b("AdsVideoValidationIcon.react"),{accountCapabilities:this.props.accountCapabilities,className:"_19rc",errors:a})};d.$3=function(a){if(!a)return null;return this.props.playable?null:b("React").jsx(b("FBOverlayElement.react"),{horizontal:"right",vertical:"bottom",children:a})};d.$4=function(a){if(!a)return null;return!this.props.playable?null:b("React").jsx(b("FBOverlayElement.react"),{horizontal:"left",vertical:"top",children:a})};return c}(b("React").PureComponent);c.propTypes={accountCapabilities:a.array,editVideoButton:a.element,errors:a.arrayOf(a.instanceOf(b("AdsError"))).isRequired,height:a.number.isRequired,isSpherical:a.bool.isRequired,length:a.number.isRequired,picture:a.string.isRequired,playable:a.bool.isRequired,selectableOnErrors:a.bool,size:a.oneOf(Object.keys(j)).isRequired,title:a.string,videoID:a.string,width:a.number.isRequired,onClick:a.func};c.defaultProps={errors:[],size:"small",videoID:null,playable:!1,isSpherical:!1};e.exports=c}),null);
__d("AdsVideoUploadProgressView.react",["fbt","AdsProgressBox.react","AdsVideoUploadStatus","CenteredContainer.react","React","WaitTimeArea.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a;switch(this.props.uploadStatus){case b("AdsVideoUploadStatus").UPLOADING:a=this.$1(g._("Uploading video {video title}",[g._param("video title",this.props.title)]),!1);break;case b("AdsVideoUploadStatus").ENCODING:a=this.$1(g._("Processing video {video title}",[g._param("video title",this.props.title)]),!0);break;case b("AdsVideoUploadStatus").STORY_TEMPLATE_GENERATION:a=this.$1(g._("Processing ad. This may take a few minutes."),!0);break;default:a=null}return a};d.$1=function(a,c){return b("React").jsx(b("CenteredContainer.react"),{className:this.props.centerContainerClassName,horizontal:!1,vertical:!0,children:b("React").jsx(b("WaitTimeArea.react"),{name:"AdsVideoUploadProgressView",owner:"ads_advertiser_experience",children:b("React").jsx(b("AdsProgressBox.react"),{className:this.props.progressBoxClassName,progressValue:this.props.uploadProgress,striped:c,subtitle:this.props.subtitle,uppercaseSubtitle:this.props.uppercaseSubtitle,videoTitle:a,onCancel:this.props.onCancel})})})};return c}(b("React").Component);a.defaultProps={uppercaseSubtitle:!0};e.exports=a}),null);
__d("AdsVideoPanel.react",["cx","fbt","AdsLoadState_LEGACY","AdsPlusBox.react","AdsSelected.react","AdsVideoItem.react","AdsVideoUploadProgressView.react","AdsVideoUploadStatus","AdsVideoUploadUtil","AdsVideoUtils","CenteredContainer.react","FDSSpinner.react","FileInput.react","React","emptyFunction","immutable"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=new Map();d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$4=function(a){return a.status!==b("AdsVideoUploadStatus").UPLOADING&&a.status!==b("AdsVideoUploadStatus").ENCODING?null:b("React").jsx("div",{className:"_414a _5c2p",children:b("React").jsx(b("AdsVideoUploadProgressView.react"),{centerContainerClassName:"_ji0",progressBoxClassName:"_ji1",title:a.title,uploadProgress:b("AdsVideoUploadUtil").normalizeProgress(a.progress),uploadStatus:a.status,onCancel:function(){return d.props.onUploadCancel&&d.props.onUploadCancel(a.uploaderKey)}})},a.uploaderKey)},d.$5=function(a){d.props.onVideoFileChange&&d.props.onVideoFileChange(a.target.files)},d.$3=function(a,c){if(a.loadState===b("AdsLoadState_LEGACY").LOADING)return b("React").jsx(b("CenteredContainer.react"),{className:"_4hde",vertical:!0,children:b("React").jsx(b("FDSSpinner.react"),{})},c);if(!a||!a.preferredThumbnail)return null;c=d.props.selectedVideoIDs.includes(a.id);var e=h._("Video ({video ID})",[h._param("video ID",a.id)]);a.title!=null&&a.title!==""?e=a.title:a.description!==""&&(e=a.description);var f=d.props.videoErrors.get(a.id)||[];return b("React").jsx(b("AdsSelected.react"),{className:"_414a",isSelected:c,children:b("React").jsx(b("AdsVideoItem.react"),{accountCapabilities:d.props.accountCapabilities,errors:f,height:a.height,isSpherical:a.spherical,length:a.length,picture:a.preferredThumbnail.uri,selectableOnErrors:d.props.selectableOnErrors,size:"small",title:e,width:a.width,onClick:d.props.onVideoClick.bind(null,a.id)})},"video_"+a.id)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=null;this.props.showUploader&&(b("AdsVideoUploadUtil").atLeastOneVideoUploading(this.props.uploadStateMap)?a=this.$1():a=b("React").jsx("div",{className:"_414a _5c2p",children:this.$2()}));return b("React").jsxs("div",{className:"_iux",children:[a,this.props.videoList.map(this.$3)]})};d.$1=function(){return!this.props.uploadStateMap?null:b("React").jsx(b("React").Fragment,{children:this.props.uploadStateMap.valueSeq().map(this.$4)})};d.$2=function(){return b("React").jsx(b("FileInput.react"),{accept:b("AdsVideoUtils").getVideoFileExtensions(),multiple:this.props.enableMultipleUpload,onChange:this.$5,children:b("React").jsx(b("AdsPlusBox.react"),{className:"_1hit",children:h._("Upload Video")})})};return c}(b("React").Component);d.propTypes={accountCapabilities:a.array,enableMultipleUpload:a.bool,selectableOnErrors:a.bool,selectedVideoIDs:a.arrayOf(a.string).isRequired,showUploader:a.bool,uploadStateMap:a.instanceOf(b("immutable").Map),videoErrors:a.instanceOf(Map),videoList:a.array,onUploadCancel:a.func,onVideoClick:a.func,onVideoFileChange:a.func};d.defaultProps={enableMultipleUpload:!1,selectedVideoIDs:[],showUploader:!0,videoList:[],videoErrors:c,onVideoClick:b("emptyFunction")};e.exports=d}),null);