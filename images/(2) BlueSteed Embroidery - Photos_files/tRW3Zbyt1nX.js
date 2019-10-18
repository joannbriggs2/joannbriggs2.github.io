if (self.CavalryLogger) { CavalryLogger.start_js(["NgWzr"]); }

__d("FBMoreLink.react",["ix","cx","fbt","FDSLink.react","FDSText.react","Image.react","Link.react","React","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isCollapsed:c.props.isInitiallyCollapsed!=null?c.props.isInitiallyCollapsed:!0},c.onClick=function(){var a=c.$1();c.setState({isCollapsed:!a});c.props.onClick&&c.props.onClick(!a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.$1();if(!this.props.allowToggle&&!a)return b("React").jsx("div",{children:b("React").jsx(b("React").Fragment,{children:this.props.children})});var c=this.props.moreLabel,d=g("117293");a||(c=this.props.lessLabel,d=g("117305"));d=this.props.hideToggleIcon?null:b("React").jsx(b("Image.react"),{className:"_554d",src:d});c=b("React").jsxs(b("React").Fragment,{children:[b("React").jsx("span",{className:this.props.useFDSLink?"":"_554b",children:c}),d]});return b("React").jsxs(b("React").Fragment,{children:[a?null:this.props.children,this.props.useFDSLink===!0?b("React").jsx(b("FDSText.react"),{children:b("React").jsx(b("FDSLink.react"),{onClick:this.onClick,children:c})}):b("React").jsx(b("Link.react"),babelHelpers["extends"]({},this.props,{onClick:this.onClick,children:c}))]})};d.$1=function(){return this.props.isCollapsed!=null?this.props.isCollapsed:this.state.isCollapsed};return c}(b("React").Component);c.propTypes={allowToggle:a.bool,hideToggleIcon:a.bool,moreLabel:a.node,lessLabel:a.node,isInitiallyCollapsed:a.bool,isCollapsed:a.bool,onClick:a.func,useFDSLink:a.bool,children:a.node};c.defaultProps=function(){var a=i._("More"),b=i._("Less");return{allowToggle:!1,moreLabel:a,lessLabel:b}}();e.exports=c}),null);
__d("FBSimpleColorPickerDialogHexInput.react",["AdsGeodesicAdoption","FDSBaseTextInput.react","React","SUITextInput.react","color","cxMargin","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("AdsGeodesicAdoption").AdsGeodesicAdoptionContext;var g=/^#?([A-F0-9]+)$/i,h=3,i=6;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),j=0;j<e;j++)f[j]=arguments[j];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={stringValue:d.props.value.hex()},d.$1=function(){d.setState({stringValue:d.props.value.hex()})},d.$2=function(a){d.setState({stringValue:a},function(){var c=a.match(g);c=c&&c[1];var e=typeof c==="string"&&(c.length===h||c.length===i);e&&d.props.onChange(b("color")("#"+b("nullthrows")(c)))})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.context;return a?b("React").jsx("div",{className:"_3-90",children:b("React").jsx(b("FDSBaseTextInput.react"),{value:this.state.stringValue,onBlur:this.$1,onChange:this.$2})}):b("React").jsx(b("SUITextInput.react"),{theme:this.props.theme,value:this.state.stringValue,onBlur:this.$1,onChange:this.$2})};return c}(b("React").PureComponent);c.contextType=a;e.exports=c}),null);
__d("FBSimpleColorPickerDialog.react",["cx","fbt","ContextualLayerUpdateOnScroll","FBSimpleColorPickerDialogHexInput.react","FDSButton.react","LeftRight.react","React","XUIContextualDialog.react","XUIContextualDialogBody.react","color","color-picker"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={color:null},d.$4=function(){d.props.onChange(d.$1())},d.$2=function(a){d.setState({color:b("color")(a)})},d.$3=function(a){d.setState({color:a})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").jsx(b("XUIContextualDialog.react"),{alignment:this.props.alignment,behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")},contextRef:this.props.contextRef,label:"color-picker",position:this.props.position,shown:this.props.isVisible,onBlur:this.props.onHide,children:b("React").jsxs(b("XUIContextualDialogBody.react"),{children:[b("React").jsx("div",{className:"_6knd",children:b("React").jsx(b("color-picker"),{color:this.$1().hex(),onChange:this.$2})}),b("React").jsxs(b("LeftRight.react"),{children:[b("React").jsx("div",{className:"_6kne",children:b("React").jsx(b("FBSimpleColorPickerDialogHexInput.react"),{theme:this.props.theme,value:this.$1(),onChange:this.$3},this.$1().hex())}),b("React").jsx(b("FDSButton.react"),{label:h._("Confirm"),use:"primary",onClick:this.$4})]})]})})};d.$1=function(){return this.state.color||this.props.color};return c}(b("React").PureComponent);a.defaultProps={position:"below"};e.exports=a}),null);
__d("BUIFormTextInput.react",["invariant","BUIComponent","BUIForm.react","BUITextInput_DEPRECATED.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this,c=this.props,d=c.density;c=babelHelpers.objectWithoutPropertiesLoose(c,["density"]);var e;switch(d){case"breathy":case"svelt":e="xtall";break;case"snug":e="tall";break;case"taut":e="short";break;default:g(0,4054,d)}return b("React").jsx(b("BUITextInput_DEPRECATED.react"),babelHelpers["extends"]({},c,{ref:function(b){a.$BUIFormTextInput1=b},height:e}))};d.focusInput=function(){this.$BUIFormTextInput1&&this.$BUIFormTextInput1.focusInput()};return c}(b("BUIComponent"));a.defaultProps={density:"taut"};a.propTypes=babelHelpers["extends"]({},b("BUITextInput_DEPRECATED.react").propTypes,{density:b("BUIForm.react").propTypes.density});e.exports=a}),null);
__d("XUICheckboxList.react",["cx","InputLabel.react","React","ScrollableArea.react","XUICheckboxInput.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.renderItem=function(a,c){return b("React").jsx(b("InputLabel.react"),babelHelpers["extends"]({className:a.className},a.inputLabelProps,{label:a.label,children:b("React").jsx(b("XUICheckboxInput.react"),{ref:c===0?function(a){return d.$1=a}:void 0,disabled:a.disabled,value:a.value,checked:!!a.checked,onChange:d.$2.bind(babelHelpers.assertThisInitialized(d),a)})}),a.value)},d.$2=function(a,b){a.checked?d.props.onRemove(a):d.props.onAdd(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a="_5uy8 "+(this.props.className||"");return b("React").jsx(b("ScrollableArea.react"),babelHelpers["extends"]({},this.props,{shadow:!1,className:b("joinClasses")(this.props.className,a),children:this.props.items.map(this.renderItem)}))};d.focusInput=function(){this.$1&&this.$1.focusInput()};d.blurInput=function(){this.$1&&this.$1.blurInput()};return c}(b("React").Component);c.propTypes={items:a.array.isRequired,height:a.number,onAdd:a.func.isRequired,onRemove:a.func.isRequired};e.exports=c}),null);
__d("XUIRadioButtonGroup.react",["Focus","React","ReactDOM","RTLKeys","XUIButtonGroup.react"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"XUIRadioButtonGroup",propTypes:{onValueChange:a.func,selectedValue:a.any,selectedUse:a.oneOf(["default","special","confirm"]),selectedDepressed:a.bool},UNSAFE_componentWillMount:function(){this.radioChildComponents=[]},render:function(){var a=this,c=this,d=b("React").Children.toArray(this.props.children).some(function(b){return a.props.selectedValue===b.props.value}),e=b("React").Children.map(this.props.children,function(e,f){var g=a.props.selectedValue===e.props.value,h=g&&"selectedDepressed"in a.props?a.props.selectedDepressed:e.props.depressed,i=g?"0":"-1";!g&&!d&&f===0&&(i="0");i={role:"radio","aria-checked":g?"true":"false",tabIndex:i,onKeyDown:c._onKeyDown};g=babelHelpers["extends"]({onClick:a._getClickHandler(e.props.value,e.props.onClick),use:g&&"selectedUse"in a.props?a.props.selectedUse:e.props.use,depressed:h,ref:function(b){a.radioChildComponents[f]=b}},i);return b("React").cloneElement(e,g)},this),f={role:"radiogroup"};return b("React").jsx(b("XUIButtonGroup.react"),babelHelpers["extends"]({},this.props,f,{children:e}))},_getClickHandler:function(a,b){var c=this.props;return function(){c.onValueChange&&c.onValueChange(a),b&&b.apply(this,arguments)}},_onKeyDown:function(a){__p&&__p();var c=this;switch(Event.getKeyCode(a)){case b("RTLKeys").UP:case b("RTLKeys").getLeft():d(-1);break;case b("RTLKeys").DOWN:case b("RTLKeys").getRight():d(1);break;case b("RTLKeys").SPACE:d(0);break}function d(a){a=e(a);var d=b("React").Children.toArray(c.props.children)[a];c._getClickHandler(d.props.value,d.props.onClick)();d=b("ReactDOM").findDOMNode(c.radioChildComponents[a]);b("Focus").set(d)}function e(a){var d=c.props,e=b("React").Children.toArray(d.children),f=d.selectedValue;d=e.filter(function(a){return a.props.value===f})[0];d=e.indexOf(d);d=d===-1?0:d+a;d<0&&(d=0);d>e.length-1&&(d=e.length-1);return d}}});e.exports=c}),null);
__d("MediaManagerLibertyUtils",["DOM","MediaManagerTypedLogger","URI","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={openCreatorStudio:function(a,c,d){var e=a.getQueryData();new(b("MediaManagerTypedLogger"))().setEvent(c?"liberty_redirection_auto":d===!0?"liberty_redirection_new_entry_point_clicked":"liberty_redirection_clicked").setEventSource("liberty").setSelectedPageIds([e.selected_single_page_id]).setMediaManagerVisitSource(e.reference).addToExtraData("redirect_tab",e.tab).log();if(b("UserAgent").isBrowser("Firefox")||b("UserAgent").isBrowser("IE11"))b("URI").goURIOnWindow(a,window.open("","liberty_creator_studio"),!0);else{c=b("DOM").create("a");c.href=a;c.target="liberty_creator_studio";c.click()}}};e.exports=a}),null);
__d("DraftTreeAdapter",["invariant","generateRandomKey"],(function(a,b,c,d,e,f,g){__p&&__p();var h=function(a,b){a=[].concat(a).reverse();while(a.length){var c=a.pop();b(c);c=c.children;Array.isArray(c)||g(0,2517);a=a.concat([].concat(c.reverse()))}},i=function(a){if(!(a&&a.type))return!1;a=a.type;return a==="unordered-list-item"||a==="ordered-list-item"},j=function(a){Array.isArray(a.children)&&(a.children=a.children.map(function(b){return b.type===a.type?babelHelpers["extends"]({},b,{depth:(a.depth||0)+1}):b}))};a={fromRawTreeStateToRawState:function(a){__p&&__p();var b=a.blocks,c=[];Array.isArray(b)||g(0,2518);if(!Array.isArray(b)||!b.length)return a;h(b,function(a){var b=babelHelpers["extends"]({},a);if(i(a)){b.depth=b.depth||0;j(a);if(a.children!=null&&a.children.length>0)return}delete b.children;c.push(b)});a.blocks=c;return babelHelpers["extends"]({},a,{blocks:c})},fromRawStateToRawTreeState:function(a){__p&&__p();var c=[],d=[];a.blocks.forEach(function(a){__p&&__p();var e=i(a),f=a.depth||0,g=babelHelpers["extends"]({},a,{children:[]});if(!e){c.push(g);return}e=d[0];if(e==null&&f===0)c.push(g);else if(e==null||e.depth<f-1){a={key:b("generateRandomKey")(),text:"",depth:f-1,type:a.type,children:[],entityRanges:[],inlineStyleRanges:[]};d.unshift(a);f===1?c.push(a):e!=null&&e.children.push(a);a.children.push(g)}else if(e.depth===f-1)e.children.push(g);else{while(e!=null&&e.depth>=f)d.shift(),e=d[0];f>0?e.children.push(g):c.push(g)}});return babelHelpers["extends"]({},a,{blocks:c})}};e.exports=a}),null);
__d("DraftTreeInvariants",["warning"],(function(a,b,c,d,e,f){__p&&__p();a={isValidBlock:function(a,c){__p&&__p();var d=a.getKey(),e=a.getParentKey();if(e!=null){e=c.get(e);if(!e.getChildKeys().includes(d)){b("warning")(!0,"Tree is missing parent -> child pointer on %s",d);return!1}}e=a.getChildKeys().map(function(a){return c.get(a)});if(!e.every(function(a){return a.getParentKey()===d})){b("warning")(!0,"Tree is missing child -> parent pointer on %s",d);return!1}e=a.getPrevSiblingKey();if(e!=null){var f=c.get(e);if(f.getNextSiblingKey()!==d){b("warning")(!0,"Tree is missing nextSibling pointer on %s's prevSibling",d);return!1}}f=a.getNextSiblingKey();if(f!=null){var g=c.get(f);if(g.getPrevSiblingKey()!==d){b("warning")(!0,"Tree is missing prevSibling pointer on %s's nextSibling",d);return!1}}if(f!==null&&e!==null&&e===f){b("warning")(!0,"Tree has a two-node cycle at %s",d);return!1}if(a.text!=""&&a.getChildKeys().size>0){b("warning")(!0,"Leaf node %s has children",d);return!1}return!0},isConnectedTree:function(a){__p&&__p();var c=a.toArray().filter(function(a){return a.getParentKey()==null&&a.getPrevSiblingKey()==null});if(c.length!==1){b("warning")(!0,"Tree is not connected. More or less than one first node");return!1}c=c.shift();var d=0;c=c.getKey();var e=[];while(c!=null){var f=a.get(c),g=f.getChildKeys(),h=f.getNextSiblingKey();if(g.size>0){h!=null&&e.unshift(h);h=g.map(function(b){return a.get(b)});g=h.find(function(a){return a.getPrevSiblingKey()==null});if(g==null){b("warning")(!0,"%s has no first child",c);return!1}c=g.getKey()}else f.getNextSiblingKey()!=null?c=f.getNextSiblingKey():c=e.shift();d++}if(d!==a.size){b("warning")(!0,"Tree is not connected. %s nodes were seen instead of %s",d,a.size);return!1}return!0},isValidTree:function(a){var b=this,c=a.toArray();return!c.every(function(c){return b.isValidBlock(c,a)})?!1:this.isConnectedTree(a)}};e.exports=a}),null);
__d("createCharacterList",["CharacterMetadata","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").List;function a(a,c){a=a.map(function(a,d){d=c[d];return b("CharacterMetadata").create({style:a,entity:d})});return g(a)}e.exports=a}),null);
__d("decodeEntityRanges",["UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("UnicodeUtils").substr;function a(a,b){var c=Array(a.length).fill(null);b&&b.forEach(function(b){var d=g(a,0,b.offset).length,e=d+g(a,b.offset,b.length).length;for(var d=d;d<e;d++)c[d]=b.key});return c}e.exports=a}),null);
__d("decodeInlineStyleRanges",["UnicodeUtils","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("immutable").OrderedSet;var g=b("UnicodeUtils").substr,h=c();function a(a,b){var c=Array(a.length).fill(h);b&&b.forEach(function(b){var d=g(a,0,b.offset).length,e=d+g(a,b.offset,b.length).length;while(d<e)c[d]=c[d].add(b.style),d++});return c}e.exports=a}),null);
__d("convertFromRawToDraftState",["invariant","ContentBlock","ContentBlockNode","ContentState","DraftEntity","DraftTreeAdapter","DraftTreeInvariants","SelectionState","createCharacterList","decodeEntityRanges","decodeInlineStyleRanges","generateRandomKey","gkx","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("gkx")("676842"),i=b("immutable").List,j=b("immutable").Map,k=b("immutable").OrderedMap,l=function(a,c){var d=a.key,e=a.type,f=a.data,g=a.text,h=a.depth;g={text:g,depth:h||0,type:e||"unstyled",key:d||b("generateRandomKey")(),data:j(f),characterList:m(a,c)};return g},m=function(a,c){var d=a.text,e=a.entityRanges;a=a.inlineStyleRanges;e=e||[];a=a||[];return b("createCharacterList")(b("decodeInlineStyleRanges")(d,a),b("decodeEntityRanges")(d,e.filter(function(a){return Object.prototype.hasOwnProperty.call(c,a.key)}).map(function(a){return babelHelpers["extends"]({},a,{key:c[a.key]})})))},n=function(a){return babelHelpers["extends"]({},a,{key:a.key||b("generateRandomKey")()})},o=function(a,b,c){b=b.map(function(a){return babelHelpers["extends"]({},a,{parentRef:c})});return a.concat(b.reverse())},p=function(a,c){__p&&__p();return a.map(n).reduce(function(d,e,f){__p&&__p();Array.isArray(e.children)||g(0,5197);var h=e.children.map(n);e=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(e,c),{prevSibling:f===0?null:a[f-1].key,nextSibling:f===a.length-1?null:a[f+1].key,children:i(h.map(function(a){return a.key}))}));d=d.set(e.getKey(),e);f=o([],h,e);while(f.length>0){h=f.pop();e=h.parentRef;var j=e.getChildKeys(),k=j.indexOf(h.key),m=Array.isArray(h.children);if(!m){m||g(0,5197);break}m=h.children.map(n);h=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(h,c),{parent:e.getKey(),children:i(m.map(function(a){return a.key})),prevSibling:k===0?null:j.get(k-1),nextSibling:k===j.size-1?null:j.get(k+1)}));d=d.set(h.getKey(),h);f=o(f,m,h)}return d},k())},q=function(a,c){return k(a.map(function(a){a=new(b("ContentBlock"))(l(a,c));return[a.getKey(),a]}))},r=function(a,c){var d=a.blocks.find(function(a){return Array.isArray(a.children)&&a.children.length>0}),e=h&&!d?b("DraftTreeAdapter").fromRawStateToRawTreeState(a).blocks:a.blocks;if(!h)return q(d?b("DraftTreeAdapter").fromRawTreeStateToRawState(a).blocks:e,c);d=p(e,c);return d},s=function(a){var c=a.entityMap,d={};Object.keys(c).forEach(function(a){var e=c[a],f=e.type,g=e.mutability;e=e.data;d[a]=b("DraftEntity").__create(f,g,e||{})});return d};a=function(a){Array.isArray(a.blocks)||g(0,5199);var c=s(a);a=r(a,c);var d=a.isEmpty()?new(b("SelectionState"))():b("SelectionState").createEmpty(a.first().getKey());return new(b("ContentState"))({blockMap:a,entityMap:c,selectionBefore:d,selectionAfter:d})};e.exports=a}),null);
__d("decodeBlocks",["ComposedInlineStyle","convertFromRawToDraftState","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){a=a.map(function(a){var b=a.type,c=a.inlineStyleRanges;a=babelHelpers.objectWithoutPropertiesLoose(a,["type","inlineStyleRanges"]);return babelHelpers["extends"]({type:g[b]||"unstyled",inlineStyleRanges:(c||[]).map(function(a){return babelHelpers["extends"]({},a,{style:h[a.style]})})},a)});c=b("mapObject")(c,function(a){return{type:a.getType(),mutability:a.getMutability(),data:a.getData()}});return b("convertFromRawToDraftState")({blocks:a,entityMap:c})}var g={};g[0]="unstyled";g[1]="paragraph";g[4]="blockquote";g[3]="ordered-list-item";g[2]="unordered-list-item";g[7]="code-block";g[5]="header-one";g[6]="header-two";g[8]="atomic";g[9]="pullquote";var h={};h[b("ComposedInlineStyle").BOLD]="BOLD";h[b("ComposedInlineStyle").CODE]="CODE";h[b("ComposedInlineStyle").ITALIC]="ITALIC";h[b("ComposedInlineStyle").STRIKETHROUGH]="STRIKETHROUGH";h[b("ComposedInlineStyle").UNDERLINE]="UNDERLINE";e.exports=a}),null);
__d("XCommerceManagerIndexController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/commerce_manager/",{})}),null);
__d("XDeveloperDocumentationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/docs/{?path1}/{?path2}/{?path3}/{?path4}/{?path5}/{?path6}/",{version:{type:"String"},preview:{type:"Exists",defaultValue:!1},revisionid:{type:"Int"},translation:{type:"Exists",defaultValue:!1},path1:{type:"String"},path2:{type:"String"},path3:{type:"String"},path4:{type:"String"},path5:{type:"String"},path6:{type:"String"}})}),null);