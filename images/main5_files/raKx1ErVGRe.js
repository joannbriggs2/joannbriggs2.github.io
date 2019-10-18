if (self.CavalryLogger) { CavalryLogger.start_js(["ffgOj"]); }

__d("GeodesicStyleXDefaultTheme",[],(function(a,b,c,d,e,f){e.exports={"geodesic-base-unit":"4","geodesic-type-font-family":"Roboto, Arial, sans-serif","geodesic-type-sizes-app-name-font-size":"24","geodesic-type-sizes-app-name-line-height":"1.166","geodesic-type-sizes-data-font-size":"32","geodesic-type-sizes-data-line-height":"1.2498","geodesic-type-sizes-header1-font-size":"20","geodesic-type-sizes-header1-line-height":"1.2","geodesic-type-sizes-header2-font-size":"18","geodesic-type-sizes-header2-line-height":"1.333","geodesic-type-sizes-header3-font-size":"16","geodesic-type-sizes-header3-line-height":"1.25","geodesic-type-sizes-header4-font-size":"14","geodesic-type-sizes-header4-line-height":"1.428","geodesic-type-sizes-value-font-size":"14","geodesic-type-sizes-value-line-height":"1.428","geodesic-type-sizes-value-description-font-size":"12","geodesic-type-sizes-value-description-line-height":"1.333"}}),null);
__d("InstreamVideoAdBreak",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a.instreamPlacement,this.$2=a.index,this.$3=a.timeOffsetInMs,this.$4=a.adBreakDurationInMs,this.$5=a.isAdBreakAutoInserted,this.$6=a.naturalnessScore,this.$7=a.midSpeechScore}var b=a.prototype;b.getInstreamPlacement=function(){return this.$1};b.getIndex=function(){return this.$2};b.getTimeOffsetInMs=function(){return this.$3};b.getAdBreakDurationInMs=function(){return this.$4};b.getIsAdBreakAutoInserted=function(){return this.$5};b.getNaturalnessScore=function(){return this.$6};b.getMidSpeechScore=function(){return this.$7};return a}();e.exports=a}),null);
__d("FDSCancelButton.react",["fbt","FDSButton.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("FDSButton.react"),babelHelpers["extends"]({},this.props,{label:g._("Cancel"),layerAction:"cancel"}))};return c}(b("React").PureComponent);a.defaultProps=b("FDSButton.react").defaultProps;e.exports=b("makeFDSStandardComponent")("FDSCancelButton",a)}),null);
__d("FDSBaseRadioInput.react",["cssVar","cx","FDSPrivateBaseBinaryInputLayout.react","FDSPrivateBinaryInputSelectors","FDSPrivateDisabledFocusContext","FDSPrivateDisabledMessageWrapper.react","FDSPrivateInputHooks","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("FDSPrivateBinaryInputSelectors").getBinaryInputStyles,j=b("FDSPrivateInputHooks").useActiveManagement,k=b("FDSPrivateInputHooks").useFocusManagement,l=b("React").useContext;function a(a){__p&&__p();var c=a.checked,d=a.isDisabled,e=a.size;e=e===void 0?"large":e;a=babelHelpers.objectWithoutPropertiesLoose(a,["checked","isDisabled","size"]);var f=k(),g=f.isFocused,h=f.onBlur;f=f.onFocus;var i=j(),o=i.isActive,p=i.onMouseDown;i=i.onMouseUp;var q=l(b("FDSPrivateDisabledFocusContext"));e=e==="large";o={isActive:o,isChecked:c,isDisabled:d,isFocused:g,isLarge:e};e=m(o);o=n(o);return b("React").jsx(b("FDSPrivateDisabledMessageWrapper.react"),{disabledMessage:a.disabledMessage,isDisabled:d,children:b("React").jsx(b("FDSPrivateBaseBinaryInputLayout.react"),{input:b("React").jsx("input",{"aria-describedby":a.describedBy,checked:c,className:d?"_8l8l":"",disabled:d,id:a.htmlForInputId,name:a.name,onBlur:h,onChange:a.onChange,onFocus:f,onMouseDown:p,onMouseUp:i,tabIndex:q?-1:void 0,type:"radio",value:a.value}),children:b("React").jsx("div",{className:"_88m2"+(c?" _88m3":"")+(g?" _88m4":""),style:e,children:b("React").jsx("span",{className:"_88m6",style:o})})})})}function m(a){var c=a.isActive,d=a.isChecked,e=a.isDisabled,f=a.isFocused;a=a.isLarge;var g=l(b("FDSPrivateThemeContext.react"));c=i({isActive:c,isDisabled:e,isFocused:f,isLarge:a,atoms:g});f=c.border;a=babelHelpers.objectWithoutPropertiesLoose(c,["border"]);c=b("FDSPrivateThemeUtils").isClassic(g)&&d&&!e?g.inputs.focused.border:f;return babelHelpers["extends"]({},a,{border:c,borderRadius:"50%"})}function n(a){var c=a.isDisabled;a=a.isLarge;var d=l(b("FDSPrivateThemeContext.react")),e=b("FDSPrivateThemeUtils").isGeo(d);a=a?d.inputs.size.large:d.inputs.size.medium;var f=e?d.binaryControls.checked.active.backgroundColor:"#3578E5";e=e?d.binaryControls.checked.disabled.backgroundColor:"#BEC3C9";d=c?e:f;return{backgroundColor:d,height:a/2,width:a/2}}e.exports=a}),null);
__d("FDSBaseSwitch.react",["cx","FDSPrivateBaseBinaryInputLayout.react","FDSPrivateInputHooks","FDSPrivateThemeContext.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FDSPrivateInputHooks").useFocusManagement,i=b("FDSPrivateInputHooks").useHoverManagement,j=b("React").useCallback,k=b("React").useContext;function a(a){__p&&__p();var c=a["data-testid"],d=a.describedBy,e=a.htmlForTargetId,f=a.isDisabled,g=f===void 0?!1:f;f=a.labelledBy;var k=a.onChange,l=a.size;l=l===void 0?"medium":l;var o=a.value;a=a.fdsOverride_disableAnimation;var p=h(),q=p.isFocused,r=p.onBlur;p=p.onFocus;var s=i(),t=s.isHovering,u=s.onMouseEnter;s=s.onMouseLeave;var v=l==="large",w=j(function(a){g!==!0&&k(a.target.checked,a)},[k,g]);q={isFocused:q,isHovering:t,isDisabled:g,isChecked:o,isLarge:v};v=n(q);q=m(q);return b("React").jsx(b("FDSPrivateBaseBinaryInputLayout.react"),{input:b("React").jsx("input",{"aria-describedby":d,"aria-labelledby":f,checked:o,"data-testid":c,disabled:g,id:e?e:void 0,onBlur:r,onChange:w,onFocus:p,onMouseEnter:u,onMouseLeave:s,role:"switch",type:"checkbox"}),isDisabled:g,children:b("React").jsxs("div",{className:"_7q1e"+(a===!0?" _79d3":""),children:[b("React").jsx("div",{className:"_79d2"+(o?" _7q1f":"")+(g?" _7q1g":"")+(t?" _7qr0":"")+(l==="large"?" _79d4":""),style:v}),b("React").jsx("span",{className:"_7q1t",style:q})]})})}function l(){var a=k(b("FDSPrivateThemeContext.react"));return{checked:{"default":{backgroundColor:a.binaryControls.checked.normal.backgroundColor,opacity:a.binaryControls.checked.normal.opacity},disabled:{backgroundColor:a.binaryControls.checked.disabled.backgroundColor,opacity:a.binaryControls.checked.disabled.opacity},focused:{backgroundColor:a.binaryControls.checked.active.backgroundColor,opacity:a.binaryControls.checked.active.opacity},hovered:{backgroundColor:a.binaryControls.checked.hover.backgroundColor,opacity:a.binaryControls.checked.hover.opacity}},unchecked:{"default":{border:a.binaryControls.unchecked.normal.border,boxShadow:a.binaryControls.unchecked.normal.boxShadow,backgroundColor:a.binaryControls.unchecked.normal.backgroundColor},disabled:{backgroundColor:a.binaryControls.unchecked.disabled.backgroundColor,border:a.binaryControls.unchecked.disabled.border,boxShadow:a.binaryControls.unchecked.disabled.boxShadow},focused:{backgroundColor:a.binaryControls.unchecked.active.backgroundColor,border:a.binaryControls.unchecked.active.border,boxShadow:a.binaryControls.unchecked.active.boxShadow},hovered:{backgroundColor:a.binaryControls.unchecked.hover.backgroundColor,border:a.binaryControls.unchecked.hover.border,boxShadow:a.binaryControls.unchecked.hover.boxShadow}},borderRadius:a.binaryControls.borderRadius,height:{medium:a.binaryControls.height.medium,large:a.binaryControls.height.large},width:{medium:a.binaryControls.width.medium,large:a.binaryControls.width.large}}}function m(a){__p&&__p();a.isFocused;a.isHovering;var c=a.isDisabled,d=a.isChecked;a=a.isLarge;var e=k(b("FDSPrivateThemeContext.react"));c=c?e.binaryControls.slider.disabled.backgroundColor:void 0;if(d){d=a?e.binaryControls.slider.checked.size.large:e.binaryControls.slider.checked.size.medium;return{backgroundColor:c,height:d,marginLeft:e.binaryControls.slider.checked.marginLeft,width:d}}d=a?e.binaryControls.slider.size.large:e.binaryControls.slider.size.medium;return{backgroundColor:c,height:d,marginLeft:e.binaryControls.slider.margin!=null?e.binaryControls.slider.margin:void 0,width:d}}function n(a){var b=a.isFocused,c=a.isHovering,d=a.isDisabled,e=a.isChecked;a=a.isLarge;var f=l(),g=f.unchecked["default"].backgroundColor,h=f.unchecked["default"].border,i=f.unchecked["default"].boxShadow,j,k=a?f.width.large:f.width.medium;a=a?f.height.large:f.height.medium;e?(g=f.checked["default"].backgroundColor,j=f.checked["default"].opacity,c&&(g=f.checked.hovered.backgroundColor,j=f.checked.hovered.opacity),b&&(i=f.unchecked.focused.boxShadow,h=f.unchecked.focused.border,g=f.checked.focused.backgroundColor,j=f.checked.focused.opacity),d&&(i=f.unchecked.disabled.boxShadow,h=f.unchecked.disabled.border,g=f.checked.disabled.backgroundColor,j=f.checked.disabled.opacity)):(c&&(g=f.unchecked.hovered.backgroundColor,i=f.unchecked.hovered.boxShadow,h=f.unchecked.hovered.border),b&&(g=f.unchecked.focused.backgroundColor,i=f.unchecked.focused.boxShadow,h=f.unchecked.focused.border),d&&(g=f.unchecked.disabled.backgroundColor,i=f.unchecked.disabled.boxShadow,h=f.unchecked.disabled.border));return{borderRadius:f.borderRadius,backgroundColor:g,border:h,boxShadow:i,height:a,opacity:j,width:k,maxWidth:k}}e.exports=b("makeFDSStandardComponent")("FDSBaseSwitch",a)}),null);
__d("GeoStyleXSheet",["GeodesicStyleXDefaultTheme","StyleXSheet"],(function(a,b,c,d,e,f){"use strict";var g=new(b("StyleXSheet"))({rootTheme:b("GeodesicStyleXDefaultTheme")});e.exports={inject:function(){g.inject()}}}),null);
__d("makeGeoComponent",["GeoStyleXSheet","React"],(function(a,b,c,d,e,f){"use strict";b("GeoStyleXSheet")!=null&&b("GeoStyleXSheet").inject();function a(a,b){b.displayName==null&&(b.displayName=a);return b}e.exports=a}),null);
__d("GeoStatusIndicator.react",["makeGeoComponent","react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={root:{borderRadius:"bsh09edm",borderStyle:"lznvzsjn",borderWidth:"g2vjmjsw",boxSizing:"puibpoiz",display:"rxo4gu2c",height:"akrhewu5",width:"b606nk03"},active:{backgroundColor:"dgtisqad",borderColor:"ax4ncmtx"},inactive:{backgroundColor:"mwif8v83",borderColor:"r1dc0stp"},warning:{backgroundColor:"l4fb6k93",borderColor:"h7zb7ann"},error:{backgroundColor:"scokuouk",borderColor:"tm94tbol"},filled:{borderColor:"lmeporvl"},outline:{backgroundColor:"mr4k7n6j"}};function h(a){var b=a.status;a=a.variant;return[g.root,b==="active"&&g.active,b==="inactive"&&g.inactive,b==="warning"&&g.warning,b==="error"&&g.error,a==="filled"&&g.filled,a==="outline"&&g.outline]}function a(a){var c=a["data-testid"],d=a.status;a=a.variant;a=a===void 0?"filled":a;return b("react").jsx("span",{className:b("stylex")(h({status:d,variant:a})),"data-testid":c})}e.exports=b("makeGeoComponent")("GeoStatusIndicator",a)}),null);
__d("FDSSelectorButton.react",["cx","fbt","FDSMediaItem.react","FDSMultiElementLayoutContext","FDSPrivateInputSelectors","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","FDSStatusIndicator.react","FDSText.react","FlexLayout.react","GeoStatusIndicator.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("FDSPrivateInputSelectors").getInputStyle;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=(a.isFocused||a.isMenuShown&&a.isFocusedOnMenuShown)&&!a.isDisabled;return b("React").jsx(b("FDSMultiElementLayoutContext").Consumer,{children:function(d){__p&&__p();var e=d.getLayout;return b("React").jsx(b("FDSPrivateThemeContext.react").Consumer,{children:function(d){__p&&__p();var f=e!=null?e(c):void 0,g=i({isFocused:c,isDisabled:a.isDisabled,size:a.size,hasError:a.hasError,hasWarning:a.hasWarning,isEdited:a.isEdited,atoms:d});d=b("FDSPrivateThemeUtils").isGeo(d);var h;if(a.isEdited&&d){var m=g,n=m.backgroundColor;m=babelHelpers.objectWithoutPropertiesLoose(m,["backgroundColor"]);g=m;h={backgroundColor:n}}return b("React").jsxs("div",{"aria-busy":a.busyIndicator!=null?!0:void 0,"aria-disabled":a.isDisabled,"aria-labelledby":a.labelledBy,className:"_7fc2"+(a.isDisabled?" _7ix_":""),"data-testid":a["data-testid"],onBlur:a.onBlur,onClick:a.isDisabled?null:a.onClick,onFocus:a.onFocus,onKeyDown:a.isDisabled?null:a.onKeyDown,onKeyUp:a.isDisabled?null:a.onKeyUp,onMouseDown:a.isDisabled?null:a.onMouseDown,ref:a.buttonRef,role:"button",style:babelHelpers["extends"]({},g,f),tabIndex:0,children:[b("React").jsx(j,{isGeo:d,media:a.media,ratio:a.ratio,size:a.size,statusIndicator:a.statusIndicator}),b("React").jsx(k,{busyIndicator:a.busyIndicator,isDisabled:a.isDisabled,isGeo:d,label:a.label,placeholder:a.placeholder,style:h}),b("React").jsx(l,{busyIndicator:a.busyIndicator,isDisabled:a.isDisabled})]})}})}})};return c}(b("React").PureComponent);a.defaultProps={isDisabled:!1,isEdited:!1,isFocused:!1,isFocusedOnMenuShown:!0,isMenuShown:!1,hasError:!1,hasWarning:!1,size:"large"};function j(a){var c=a.media,d=a.statusIndicator;return c==null&&d==null?null:b("React").jsxs(b("FlexLayout.react"),{align:"center",className:"_7yuj",children:[d&&b("React").jsx("span",{className:"_3-9a"+(d&&c?" _3-90":""),children:a.statusIndicator}),c&&b("React").jsx(b("FDSMediaItem.react"),{fit:"cover",media:a.media,ratio:a.ratio,size:a.size==="medium"&&!a.isGeo?16:24})]})}function k(a){var c;if(a.busyIndicator!=null)c=h._("Loading...");else{var d;c=(d=a.label)!=null?d:a.placeholder}return b("React").jsx("span",{className:"_7fc8",children:b("React").jsx("span",{style:a.style,children:b("React").jsx(b("FDSText.react"),{color:a.isDisabled?"disabled":"primary",size:a.isGeo?"body":"body2",children:c})})})}function l(a){return a.busyIndicator==null?b("React").jsx("span",{className:"_7fc9"+(a.isDisabled?" _7ixe":"")}):b("React").jsx("span",{className:"_7fca",children:a.busyIndicator})}e.exports=b("makeFDSStandardComponent")("FDSSelectorButton",a)}),null);
__d("FDSSwitch.react",["cx","FDSBaseSwitch.react","FDSPrivateDisabledMessageWrapper.react","FDSText.react","FlexLayout.react","React","cxMargin","makeFDSStandardComponent","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("uniqueID")(),d.$2=b("uniqueID")(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.description,d=a.disabledMessage,e=a.isDisabled,f=a.label,g=a.labelIsHidden,h=a.labelPosition,j=a.onChange,k=a.size;a=a.value;c=b("React").jsx(i,{description:c,descriptionId:this.$2,id:this.$1,isDisabled:e,isPrefix:h==="prefix",label:f,labelIsHidden:g});f="center";g||(f=h==="prefix"?"right":"left");return b("React").jsxs(b("FlexLayout.react"),{align:"center",children:[h==="prefix"?c:null,b("React").jsx(b("FDSPrivateDisabledMessageWrapper.react"),{alignment:f,disabledMessage:d,isDisabled:e,children:b("React").jsx(b("FDSBaseSwitch.react"),{"data-testid":this.props["data-testid"],describedBy:this.props.description!=null?this.$2:void 0,htmlForTargetId:this.$1,isDisabled:e,onChange:j,size:k,value:a})}),h==="suffix"?c:null]})};return c}(b("React").PureComponent);a.defaultProps={isDisabled:!1,labelIsHidden:!1,labelPosition:"prefix",size:"medium"};function h(a){return b("React").jsx("div",{className:(a.isPrefix?"_7f1-":"")+(a.isPrefix?"":" _7f28"),children:b("React").jsx(b("FDSText.react"),{color:"secondary",id:a.id,margin:"_3-8w",size:"body3",children:a.description})})}function i(a){var c=b("React").jsx("label",{className:(a.isPrefix?"_7a90":"")+(a.isPrefix?"":" _7a91")+(a.labelIsHidden?" accessible_elem":""),htmlFor:a.id,children:b("React").jsx(b("FDSText.react"),{color:a.isDisabled?"disabled":"primary",size:"body1",children:a.label})});return a.description!=null?b("React").jsxs(b("FlexLayout.react"),{direction:"vertical",children:[c,b("React").jsx(h,{description:a.description,id:a.descriptionId,isPrefix:a.isPrefix})]}):c}e.exports=b("makeFDSStandardComponent")("FDSSwitch",a)}),null);
__d("StaticSearchSource",["AbstractSearchSource","SearchSourceCallbackManager","TokenizeUtil","killswitch"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){__p&&__p();var g;e===void 0&&(e=!b("killswitch")("STATIC_SEARCH_SOURCE_DEFAULT_QUERY_STRING_EXHAUSTED"));f===void 0&&(f=!0);g=a.call(this)||this;g.$StaticSearchSource2=c;g.$StaticSearchSource3=e;g.$StaticSearchSource4=f;g.$StaticSearchSource1=new(b("SearchSourceCallbackManager"))({parseFn:b("TokenizeUtil").parse,matchFn:b("TokenizeUtil").isQueryMatch,indexFn:d});g.$StaticSearchSource1.addLocalEntries(g.$StaticSearchSource2);return g}var d=c.prototype;d.searchImpl=function(a,b,c){!a?b(this.$StaticSearchSource4?this.$StaticSearchSource2:[],a):(this.$StaticSearchSource3&&this.$StaticSearchSource1.setQueryStringAsExhausted(a),this.$StaticSearchSource1.search(a,b))};d.getSearchableEntries=function(){return this.$StaticSearchSource2};return c}(b("AbstractSearchSource"));e.exports=a}),null);
__d("SUISearchInput.react",["cx","fbt","PositionEnum","React","SUIComponent","SUITextInput.react","SUITheme","SUITooltip.react","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i=1e3;c={hasTooltip:!0,tooltipPosition:"above"};d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isFocused:!1,isToolTip:!1,isIconHovering:!1},d.$SUISearchInput1=b("React").createRef(),d.$SUISearchInput2=function(){d.setState({isFocused:!0,isToolTip:!0}),d.props.onFocus&&d.props.onFocus()},d.$SUISearchInput3=function(){d.setState({isFocused:!1}),d.props.onBlur&&d.props.onBlur()},d.$SUISearchInput4=function(){d.props.onChange(""),d.focusInput()},d.$SUISearchInput5=function(){d.setState({isIconHovering:!0})},d.$SUISearchInput6=function(){d.setState({isIconHovering:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.focusInput=function(){this.$SUISearchInput1.current&&this.$SUISearchInput1.current.focusInput()};d.render=function(){var a="";this.state.isToolTip&&(this.props.tooltip!=null&&this.props.tooltip!==""?a=this.props.tooltip:a=this.props.placeholder);var c=b("SUITheme").get(this).SUISearchInput,d=this.props.value&&this.props.disabled!==!0?b("React").jsxs("button",{className:"_1qqx",onClick:this.$SUISearchInput4,type:"button",children:[b("React").cloneElement(c.cancelIcon,{className:"_1qq-",hover:this.state.isIconHovering,onMouseEnter:this.$SUISearchInput5,onMouseLeave:this.$SUISearchInput6}),b("React").jsx("span",{className:"accessible_elem",children:h._("Clear Entry")})]},"closeButton"):null;c=b("React").jsx(b("SUITextInput.react"),{borderedSides:this.props.borderedSides,className:this.props.inputClassName,"data-testid":this.props["data-testid"],disabled:this.props.disabled,errorMessage:this.props.errorMessage,leftIcon:b("React").cloneElement(c.searchIcon,{focused:this.state.isFocused}),onBlur:this.$SUISearchInput3,onChange:this.props.onChange,onFocus:this.$SUISearchInput2,onKeyDown:this.props.onKeyDown,placeholder:this.props.placeholder,ref:this.$SUISearchInput1,rightIcon:d,value:this.props.value},"textInput");return b("React").jsx("div",{className:b("joinClasses")("_1qqs",this.props.className,this.props.margin),style:babelHelpers["extends"]({width:this.props.width},this.props.style),children:this.props.hasTooltip?b("React").jsx(b("SUITooltip.react"),{position:this.props.tooltipPosition,tooltip:a,tooltipDelay:i,children:c}):c})};return c}(b("SUIComponent"));d.defaultProps=c;d.propTypes={onChange:a.func.isRequired,disabled:a.bool,errorMessage:a.string,inputClassName:a.string,margin:a.string,onKeyDown:a.func,onBlur:a.func,onFocus:a.func,placeholder:a.node,theme:a.instanceOf(b("SUITheme")),tooltip:a.node,tooltipPosition:b("PositionEnum").propType,value:a.string,width:a.oneOfType([a.string,a.number])};e.exports=d}),null);
__d("SUITextArea.react",["cx","AbstractTextField.react","React","SUIBorderUtils","SUIComponent","SUIErrorComponentUtil","SUIInternalDisplay","SUIPlaceholderStyle","SUITheme","TextAreaControl","cancelAnimationFrame","debounce","gkx","joinClasses","requestAnimationFrame","withSUITheme"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h="_i_l";function i(a){return h+"_"+a.id}c=b("AbstractTextField.react").propTypes;d=c.useLabel;f=babelHelpers.objectWithoutPropertiesLoose(c,["useLabel"]);void d;g=b("gkx")("678820")?b("React").Component:b("SUIComponent");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isFocused:!1,hasScrollbar:!1},d.$SUITextArea4=function(a){__p&&__p();if(d.$SUITextArea2!==a){d.$SUITextArea2=a;if(d.$SUITextArea2){a=new(b("TextAreaControl"))(d.$SUITextArea2);a.setAutogrow(d.props.shouldAutoGrow);a.onupdate();d.$SUITextArea1=a}else d.$SUITextArea1=null}},d.$SUITextArea5=function(){d.$SUITextArea1&&d.$SUITextArea1.onupdate()},d.$SUITextArea11=function(a){d.setState({isFocused:!1}),d.props.onBlur!=null&&d.props.onBlur(a)},d.$SUITextArea12=function(a){d.$SUITextArea13();a=a.currentTarget.value;d.props.onChange!=null&&d.props.onChange(a)},d.$SUITextArea14=function(a){d.setState({isFocused:!0}),d.props.onFocus!=null&&d.props.onFocus(a)},d.$SUITextArea13=b("debounce")(function(){d.$SUITextArea7()},200),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$SUITextArea6=function(){b("cancelAnimationFrame")(this.$SUITextArea3),this.$SUITextArea3=b("requestAnimationFrame")(this.$SUITextArea5)};d.componentDidMount=function(){var a=b("SUITheme").get(this);b("SUIPlaceholderStyle").ensureInjectForTheme(a,h,a.SUITextArea.placeholderColor,a.SUITextArea.placeholderColorFocused);this.$SUITextArea7()};d.componentDidUpdate=function(){this.$SUITextArea6()};d.componentWillUnmount=function(){b("cancelAnimationFrame")(this.$SUITextArea3),this.$SUITextArea3=null,this.$SUITextArea1=null};d.$SUITextArea8=function(){return b("SUIErrorComponentUtil").getErrorLevel(this.props)!=="none"?b("SUIErrorComponentUtil").getErrorBorderColor(this.props,b("SUITheme").get(this)):null};d.$SUITextArea9=function(){return this.$SUITextArea8()?b("SUIErrorComponentUtil").getErrorIcon(this.props,b("SUITheme").get(this)):this.props.rightIcon};d.$SUITextArea10=function(){var a=b("SUITheme").get(this).SUITextArea;return this.props.disabled===!0?a.disabled:a.enabled};d.$SUITextArea7=function(){this.$SUITextArea9()&&this.$SUITextArea2&&this.setState({hasScrollbar:this.$SUITextArea2.clientHeight<this.$SUITextArea2.scrollHeight})};d.focusInput=function(){this.$SUITextArea2&&this.$SUITextArea2.focus()};d.moveInputCursorToEnd=function(){this.$SUITextArea2&&this.$SUITextArea2.setSelectionRange(this.$SUITextArea2.value.length,this.$SUITextArea2.value.length)};d.blurInput=function(){this.$SUITextArea2&&this.$SUITextArea2.blur()};d.select=function(){this.$SUITextArea2&&this.$SUITextArea2.select()};d.render=function(){__p&&__p();var a=this.props,c=a.className,d=a.display;a.errorMessage;a.errorTooltipPosition;var e=a.leftIcon,f=a.margin;a.onChange;var g=a.roundedCorners,h=a.rows,j=a.style;a.warningMessage;var k=a.width,l=a.disabled;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","display","errorMessage","errorTooltipPosition","leftIcon","margin","onChange","roundedCorners","rows","style","warningMessage","width","disabled"]);var m=b("SUITheme").get(this),n=m.SUITextArea;g=b("SUIBorderUtils").getBorderRadiusStyles(g,n.borderRadius);var o=n.padding!=null?{padding:n.padding}:{},p=this.$SUITextArea10(),q=this.$SUITextArea9(),r=l!==!0&&this.state.isFocused?n.focusedBorderColor:null;m=(r=(r=r)!=null?r:b("SUIErrorComponentUtil").getErrorBorderColor(this.props,m))!=null?r:p.borderColor;return b("React").jsxs("label",{className:b("joinClasses")("_i_l"+(e?" _i_n":"")+(!!q&&this.state.hasScrollbar?" _6anw":"")+(!!q&&!this.state.hasScrollbar?" _i_o":""),b("SUIInternalDisplay").get(d),c,f),style:babelHelpers["extends"]({width:k},j),children:[b("React").jsx(b("AbstractTextField.react"),babelHelpers["extends"]({},a,{disabled:l,onBlur:this.$SUITextArea11,onChange:this.$SUITextArea12,onFocus:this.$SUITextArea14,style:babelHelpers["extends"]({},g,o,p,n.typeStyle,{borderColor:m,color:p.color,lineHeight:"16px",maxHeight:(r=this.props.maxHeight)!=null?r:"none",resize:this.props.resize}),useLabel:!1,children:b("React").jsx("textarea",{className:b("joinClasses")("_i_m",i(b("SUITheme").get(this))),ref:this.$SUITextArea4,rows:h,tabIndex:this.props.tabIndex})})),e!=null?b("React").cloneElement(e,{className:b("joinClasses")("_i_p",e.props.className)}):null,q!=null?b("React").cloneElement(q,babelHelpers["extends"]({},b("SUIErrorComponentUtil").getErrorTooltipProps(this.props),{className:b("joinClasses")("_i_q"+(this.state.hasScrollbar?" _6anx":""),q.props.className)})):null]})};return c}(g);c.propTypes=babelHelpers["extends"]({},f,b("SUIErrorComponentUtil").propTypes,{display:b("SUIInternalDisplay").propType.isRequired,leftIcon:a.element,margin:a.string,maxHeight:a.number,onClick:a.func,rightIcon:a.element,roundedCorners:b("SUIBorderUtils").RoundedCornersPropType.isRequired,shouldAutoGrow:a.bool,theme:a.instanceOf(b("SUITheme"))});c.defaultProps=babelHelpers["extends"]({},b("AbstractTextField.react").defaultProps,b("SUIErrorComponentUtil").defaultProps,{display:"inline",resize:"vertical",roundedCorners:b("SUIBorderUtils").ALL_CORNERS,shouldAutoGrow:!1});e.exports=b("withSUITheme")(c)}),null);
__d("CommercialBreakExposureLogger",["DateConsts","MarauderLogger","QE","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g){this.$1=a,this.$2=c,this.$3=d,this.$4=e,this.$5=f,this.$6=g,this.$7=new(b("SubscriptionsHandler"))(),d&&e&&this.$7.addSubscriptions(this.$1.addListener("updateStatus",this.$8.bind(this)))}var c=a.prototype;c.$8=function(){__p&&__p();var a=this.$1.getCurrentTimePosition()*b("DateConsts").MS_PER_SEC;for(var c=0;c<this.$3.length;c++){var d=this.$3[c].getTimeOffsetInMs()||0;if(a<=d&&a+this.$6>d){this.$7.release();b("QE").logExposure(this.$4);if(!this.$5){d={ad_break_index:this.$3[c].getIndex(),commercial_break_no_ad_reason:"control_group",host_video_id:this.$1.getVideoID(),instream_video_ad_type:this.$2?"vod":"nonlive"};b("MarauderLogger").log("commercial_break_start_show_nothing","commercial_break",d)}return}}};return a}();e.exports=a}),null);
__d("isNullOrZero",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||a===0}e.exports=a}),null);
__d("FBPaymentsCountdownTimer.react",["DateConsts","React","formatDate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DateConsts").MS_PER_SEC;a="i:s";var h=g;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={remainingTimeInMs:c.getRemainingTimeInMs()},c.updateRemainingTimeInMs=function(){var a=c.getRemainingTimeInMs();c.setState({remainingTimeInMs:a});a<=0&&(c.$1&&clearInterval(c.$1),c.props.onTimerCompleted&&c.props.onTimerCompleted())},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.updateRemainingTimeInMs(),this.$1=setInterval(this.updateRemainingTimeInMs,h)};d.componentWillUnmount=function(){this.$1&&clearInterval(this.$1)};d.getRemainingTimeInMs=function(){return Math.max(this.props.endTime-Date.now(),0)};d.formatTime=function(a,c){a=a/g;return b("formatDate")(a,c,{skipPatternLocalization:!0,utc:!0})};d.render=function(){return b("React").jsx("span",{children:this.formatTime(this.state.remainingTimeInMs,this.props.dateTimeFormat)})};return c}(b("React").PureComponent);c.defaultProps={dateTimeFormat:a};e.exports=c}),null);
__d("ImageStyles",["LayoutStyles"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("LayoutStyles"),{backgroundColor:!0,borderBottomLeftRadius:!0,borderBottomRightRadius:!0,borderColor:!0,borderRadius:!0,borderTopLeftRadius:!0,borderTopRightRadius:!0,borderWidth:!0,height:!0,opacity:!0,overflow:!0,width:!0});e.exports=a}),null);
__d("Image",["cx","CssBackgroundImage.react","Image.react","ImageStyles","React","getValidatedStyle","joinClasses","pluckClassNames"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={cover:"cover",contain:"contain",stretch:"fill",center:"none"},i={cover:"cover",contain:"contain",stretch:"100% 100%",center:"auto"},j=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.source,d=a.style,e=a.resizeMode;a=babelHelpers.objectWithoutPropertiesLoose(a,["source","style","resizeMode"]);d=b("pluckClassNames")(d);var f=d.classNames;d=d.styles;d=b("getValidatedStyle")(d,b("ImageStyles"));var g=e&&i[e]||"cover";e=e&&h[e]||"cover";var j=c.scale!=null?Math.max(c.scale,1):1;return b("React").jsxs("div",babelHelpers["extends"]({className:b("joinClasses").apply(void 0,["_b5a"].concat(f)),src:c,style:d},a,{children:[b("React").jsx(b("CssBackgroundImage.react"),{className:b("joinClasses")("_b5a _6jm9"),imageURI:c.uri,backgroundPosition:"center center",style:{backgroundSize:g,transform:"scale("+j+", "+j+")"}}),b("React").jsx(b("Image.react"),{className:b("joinClasses")("_b5a _6jma"),src:c,style:{transform:"scale("+j+", "+j+")",objectFit:e}})]}))};return a}(b("React").PureComponent);j.defaultProps={resizeMode:"cover"};function a(a){var c=a.source,d=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["source","style"]);if(typeof c==="object"&&c.uri&&c.sprited===void 0)return b("React").jsx(j,babelHelpers["extends"]({source:c,style:d},a));d=b("pluckClassNames")(d);var e=d.classNames;d=d.styles;d=b("getValidatedStyle")(d,b("ImageStyles"));return b("React").jsx(b("Image.react"),babelHelpers["extends"]({className:b("joinClasses").apply(void 0,["_b5a"].concat(e)),src:c,style:d},a))}e.exports=a}),null);
__d("TextSearchUtil",["TokenizeUtil"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={isMatch:function(a,b){return!b?!1:this._getNonMatchingTokens(a,b).length>1},getTokens:function(a,b){__p&&__p();b=b.trim();var c=this._getNonMatchingTokens(a,b);a=a.replace(/\s+/g," ");b=b.replace(/\s+/g," ");var d=[];c.forEach(function(a,e){d.push(a),e!==c.length-1&&d.push(b)});var e=[],f=0;d.forEach(function(b,c){if(!b)return;c=c%2===1;b=b.length;var d=a.substr(f,b);e.push({text:d,isHighlighted:c});f+=b});return e},_getNonMatchingTokens:function(a,c){a=b("TokenizeUtil").flatten(a);c=b("TokenizeUtil").flatten(c);return c?a.split(c):[a]}};e.exports=a}),null);
__d("CompositeSearchSource",["Promise","AbstractSearchSource","killswitch","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c){var d;d=a.call(this)||this;d.$CompositeSearchSource1=b;d.$CompositeSearchSource2=(b=c)!=null?b:Object.freeze({});return d}var d=c.prototype;d.bootstrapImpl=function(a){var c=this.$CompositeSearchSource1.map(function(a){return new(b("Promise"))(function(b){return a.bootstrap(b)})});b("promiseDone")(b("Promise").all(c),a)};d.getBootstrappedEntries=function(a){var c=this,d=this.$CompositeSearchSource1.map(function(a){return new(b("Promise"))(function(b){(!a.getBootstrappedEntries||!a.getBootstrappedEntries(b))&&b([])})});return b("Promise").all(d).then(function(b){a(c.$CompositeSearchSource3(b))})};d.searchImpl=function(a,c,d){__p&&__p();var e=this,f=this.sourceInfo(a),g=f.map(function(a){return[]}),h=f.map(function(a){return void 0}),i=function(){};f.forEach(function(b,c){var e=b.source,f=b.substituteQueryString,j=b.entryMapper;b=b.substituteOptions;e.search(f===void 0?a:f,function(b,a,d){g[c]=j?b.map(j):b,h[c]=d,i()},b||d)});i=function(){var f=e.$CompositeSearchSource3(g),i=e.$CompositeSearchSource4(h);if(d&&d.skipCallbackOnEmptyResults&&f.length==0&&i!="COMPLETE")return;if(!b("killswitch")("COMPOSITE_SEARCH_SOURCE_TOP_DOWN")&&!e.$CompositeSearchSource5(g,h))return;c(f,a,i)};i()};d.$CompositeSearchSource5=function(a,b){if(this.$CompositeSearchSource2.allowClownyReflow===!0)return!0;b=b.findIndex(function(a){return a==="ACTIVE"});if(b!==-1)for(var b=b+1;b<a.length;b++)if(a[b].length>0)return!1;return!0};d.sourceInfo=function(a){return this.$CompositeSearchSource1.map(function(a){return{source:a}})};d.$CompositeSearchSource3=function(a){var b=[],c=new Set();a.forEach(function(a){a.forEach(function(a){var d=a.getUniqueID();c.has(d)||(c.add(d),b.push(a))})});return b};d.$CompositeSearchSource4=function(a){__p&&__p();for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;if(d==="ACTIVE")return"ACTIVE";else if(d!=="COMPLETE")return void 0}return"COMPLETE"};return c}(b("AbstractSearchSource"));e.exports=a}),null);