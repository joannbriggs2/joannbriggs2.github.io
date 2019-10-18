if (self.CavalryLogger) { CavalryLogger.start_js(["ZeHMe"]); }

__d("dangerouslyBypassDispatchError",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];setTimeout(function(){a.apply(null,c)},0)}e.exports=a}),null);
__d("ReactDispatcher_DEPRECATED",["Dispatcher_DEPRECATED","ReactDOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){var d=this;b("ReactDOM").unstable_batchedUpdates(function(){a.prototype.dispatch.call(d,c)})};return c}(b("Dispatcher_DEPRECATED"));e.exports=a}),null);
__d("UFICommentActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANGE_REACTION:"comment_change_reaction",CHANGE_REACTION_FAILURE:"comment_change_reaction_failure",CHANGE_REACTION_SUCCESS:"comment_change_reaction_success",CHANGE_VISIBILITY:"comment_change_visibility",CHANGE_VOTE:"comment_change_vote",CHANGE_VOTE_FAILURE:"comment_change_vote_failure",CHANGE_VOTE_SUCCESS:"comment_change_vote_success",EDIT:"comment_edit",EMBED:"embed",DELETE_COMMENT_AND_REMOVE_COMMENTER:"comment_delete_and_commenter_remove",DELETE_COMMENT_WITH_FEEDBACK:"comment_delete_with_feedback",MANAGE_CONSTITUENT_BADGE:"comment_manage_constituent_badge",MOUNTED:"comment_mounted",MUTE_MEMBER:"commenter_muted",REMOVE:"comment_remove",REMOVE_AND_BLOCK:"comment_remove_and_block",REMOVE_PREVIEW:"comment_remove_preview",TOGGLE_INLINE_BAN:"comment_toggle_inline_ban",TOGGLE_INLINE_STREAM_BAN:"comment_toggle_inline_stream_ban",TOGGLE_INLINE_SUSPENSION:"comment_toggle_inline_suspension",TOGGLE_LIKE:"comment_toggle_like",TOGGLE_MARK_AS_SPAM:"comment_toggle_mark_as_spam",TOGGLE_KEEP_SPAM:"comment_toggle_keep_spam",TOGGLE_APPEAL_SPAM:"comment_toggle_appeal_spam",TOGGLE_SECURE_ACCOUNT:"comment_toggle_secure_account",TOGGLE_TEXT_DELIGHTS:"comment_toggle_text_delights",TRANSLATE:"comment_translate",TRANSLATE_ARRAY:"comment_translate_array",UNMOUNTED:"comment_unmounted",UPDATE_VOTE_COUNT_AND_STATE:"comment_update_vote_count_and_state",CHANGE_PIN_BY_AUTHOR:"comment_change_author_pin"})}),null);
__d("UFIDispatcherBase",["invariant","ReactDispatcher_DEPRECATED","UFICommentActionType","dangerouslyBypassDispatchError"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b){return Object.values(b).indexOf(a)>=0}function i(a,b,c){a[b]||g(0,2123,a.type,b,c)}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){var d=this;i(c,"instanceID","contextArgs.instanceid");i(c,"ftentidentifier","contextArgs.ftentidentifier");h(c.type,b("UFICommentActionType"))&&i(c,"fbid","comment.fbid");try{a.prototype.dispatch.call(this,c)}catch(e){b("dangerouslyBypassDispatchError")(function(){return a.prototype.dispatch.call(d,c)})}};return c}(b("ReactDispatcher_DEPRECATED"));e.exports=new a()}),null);
__d("UFIKeyValueStore",["FluxReduceStore","abstractMethod"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{}};d.getValueFor=function(a){return this.getState()[a]||null};d.getStateKey=function(a){return a.instanceID};d.getStateValue=function(a){return b("abstractMethod")("UFIKeyValueStore","getStateValue")};d.reduce=function(a,b){var c=this.getStateKey(b);b=this.getStateValue(b);if(b!==null){var d;return babelHelpers["extends"]({},a,(d={},d[c]=b,d))}return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("UFIComposerIsTypingStore",["UFIDispatcherBase","UFIKeyValueStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getStateKey=function(a){return a.ftentidentifier};c.getStateValue=function(a){switch(a.type){case"add_comment_submit_edit":return!1;case"add_comment_submit_new":return!1;case"add_comment_change_content":a=a.text.trim().length;return a>0}return null};return b}(b("UFIKeyValueStore"));e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("NotificationInterpolator",["cx","Badge.react","React","TextWithEmoticons.react","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=null;((c=c.entity)!=null?(c=c.work_foreign_entity_info)!=null?c.type:c:c)==="FOREIGN"&&(d=b("React").jsx(b("Badge.react"),{type:"work_non_coworker"}));typeof a==="string"&&(a=b("React").jsx(b("TextWithEmoticons.react"),{text:a}));return b("React").jsxs("span",{className:b("joinClasses")("fwb","_6btd"),children:[a,d]})}e.exports=a}),null);
__d("FluxMixinLegacyInstrumentation",["FluxContainerInstrumentation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.constructor.displayName||a.constructor.name||"FluxMixinLegacy(unknown)"}var h={_callCalculateState:function(){var a=b("FluxContainerInstrumentation").onCalculateStateStart(g(this)),c=this._FluxMixinLegacyInstrumentationCalculateStateCaller.apply(this,arguments);a&&a();return c},UNSAFE_componentWillMount:function(){this.constructor._FluxMixinLegacyInstrumentationOnInitCalled||(b("FluxContainerInstrumentation").onInit(this.constructor),this.constructor._FluxMixinLegacyInstrumentationOnInitCalled=!0)},_FluxMixinLegacyInstrumentationEmittedChangeStores:null,_getCurrentDispatchForInstrumentation:function(){return b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch()},_onInitialStateForInstrumentation:function(){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(this,g(this))},_onReceivePropsForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(this,g(this),a)},_addStoreEmitForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(this._FluxMixinLegacyInstrumentationEmittedChangeStores=this._FluxMixinLegacyInstrumentationEmittedChangeStores||[],b("FluxContainerInstrumentation").addStoreDependencies(this._FluxMixinLegacyInstrumentationEmittedChangeStores,a))},_collectStoreEmitsForInstrumentation:function(){var a=this._FluxMixinLegacyInstrumentationEmittedChangeStores;this._FluxMixinLegacyInstrumentationEmittedChangeStores=null;return a},_logStoreEmitsForInstrumentation:function(a,c){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(this,g(this),a||[],c)},componentDidUpdate:function(a,c){b("FluxContainerInstrumentation").onDidUpdate(this,g(this),a,this.props,c,this.state)}};function a(a){b("FluxContainerInstrumentation").hasInstrumentation()&&(a.mixins=a.mixins||[],a.mixins.push(h),a._FluxMixinLegacyInstrumentationCalculateStateCaller=a._callCalculateState,delete a._callCalculateState);return a}e.exports={addInstrumentation:a}}),null);
__d("PureStoreBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(){return this.constructor.calculateState()},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState()},UNSAFE_componentWillMount:function(){__p&&__p();var a=this;this.constructor.calculateState||g(0,2396);this._recalculateStateID=null;var d=function(){if(a.isMounted()){var b=a._collectStoreEmitsForInstrumentation?a._collectStoreEmitsForInstrumentation():null,c=a._callCalculateState();a.setState(a._logStoreEmitsForInstrumentation!=null?function(){b!=null&&a._logStoreEmitsForInstrumentation&&a._logStoreEmitsForInstrumentation(b);return c}:c)}a._recalculateStateID=null};this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){a._recalculateStateID===null&&(a._recalculateStateID=b("setImmediate")(d))},this._addStoreEmitForInstrumentation)},componentWillUnmount:function(){this._mixin.release(),this._mixin=null}})};e.exports=a}),null);
__d("isCanvasAppURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="apps"}e.exports=a}),null);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="developers"}e.exports=a}),null);
__d("filterSet",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){__p&&__p();var c=new Set();for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;b(f)&&c.add(f)}return c}e.exports=a}),null);
__d("differenceSets",["filterSet"],(function(a,b,c,d,e,f){"use strict";function a(a){for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];return b("filterSet")(a,function(a){return!d.some(function(b){return b.has(a)})})}e.exports=a}),null);
__d("setByPath",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,b,c){__p&&__p();a=a;for(var d=0;d<b.length;d++){var e=b[d];if(d===b.length-1){a[e]=c;return}!Object.prototype.hasOwnProperty.call(a,e)?a[e]={}:a[e]==null?a[e]={}:Array.isArray(a[e])||Object.prototype.toString.call(a[e])==="[object Object]"||g(0,1041,a[e]);a=a[e]}}e.exports=a}),null);