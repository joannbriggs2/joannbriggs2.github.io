if (self.CavalryLogger) { CavalryLogger.start_js(["7qO0s"]); }

__d("UFI2CommentsCountTooltipContentQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"feedbackTargetID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c={kind:"LinkedField",alias:null,name:"top_level_comments",storageKey:null,args:null,concreteType:"TopLevelCommentsConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"total_count",args:null,storageKey:null}]},d=[{kind:"Literal",name:"first",value:19},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_friend"]}],e={kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2CommentsCountTooltipContentQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"commenters",storageKey:'commenters(first:19,orderby:["is_viewer","is_viewer_friend"])',args:d,concreteType:"CommentersConnection",plural:!1,selections:[e,{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"CommentersEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[f]}]}]}]}]},operation:{kind:"Operation",name:"UFI2CommentsCountTooltipContentQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"commenters",storageKey:'commenters(first:19,orderby:["is_viewer","is_viewer_friend"])',args:d,concreteType:"CommentersConnection",plural:!1,selections:[e,{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"CommentersEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},f,g]}]}]},g]}]},params:{operationKind:"query",name:"UFI2CommentsCountTooltipContentQuery",id:"1905577896176772",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2ReactionsCountTooltipContentQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"feedbackTargetID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c=[{kind:"Literal",name:"first",value:19},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_friend","importance"]}],d={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2ReactionsCountTooltipContentQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"reactors",storageKey:'reactors(first:19,orderby:["is_viewer","is_viewer_friend","importance"])',args:c,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[d]}]}]}]},operation:{kind:"Operation",name:"UFI2ReactionsCountTooltipContentQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"reactors",storageKey:'reactors(first:19,orderby:["is_viewer","is_viewer_friend","importance"])',args:c,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d,e]}]},e]}]},params:{operationKind:"query",name:"UFI2ReactionsCountTooltipContentQuery",id:"1579110358832101",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2SharesCountTooltipContentQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"feedbackTargetID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c={kind:"LinkedField",alias:null,name:"reshares",storageKey:null,args:null,concreteType:"ResharesOfContentConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null}]},d={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2SharesCountTooltipContentQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"legacy_resharers",storageKey:null,args:null,concreteType:null,plural:!0,selections:[d]}]}]},operation:{kind:"Operation",name:"UFI2SharesCountTooltipContentQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"legacy_resharers",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d,e]},e]}]},params:{operationKind:"query",name:"UFI2SharesCountTooltipContentQuery",id:"2006404236105040",text:null,metadata:{}}}}();e.exports=a}),null);
__d("withReflowOnMountOrUpdate",["Arbiter","React","queryThenMutateDOM","withDisplayName"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();return function(c){__p&&__p();babelHelpers.inheritsLoose(d,c);function d(){return c.apply(this,arguments)||this}var e=d.prototype;e.componentDidMount=function(){b("queryThenMutateDOM")(void 0,function(){return b("Arbiter").inform("reflow")})};e.componentDidUpdate=function(){b("queryThenMutateDOM")(void 0,function(){return b("Arbiter").inform("reflow")})};e.render=function(){return b("React").jsx(a,babelHelpers["extends"]({},this.props))};return d}(b("React").Component)}e.exports=b("withDisplayName")(a)}),null);
__d("UFI2TooltipNamesList.react",["fbt","List.react","NumberFormat","React","qex","withReflowOnMountOrUpdate"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c,d=a.names,e=a.totalCount;a=babelHelpers.objectWithoutPropertiesLoose(a,["names","totalCount"]);c=((c=b("qex")._("1113951"))!=null?c:!1)&&((c=b("qex")._("1115760"))!=null?c:!1);return b("React").jsxs(b("List.react"),babelHelpers["extends"]({},a,{border:"none",spacing:"none",children:[d.map(function(a,c){return b("React").jsx("li",{children:a},c)}),e>d.length&&b("React").jsx("li",{children:c?g._("and more\u2026"):g._("and {reactionCount} more\u2026",[g._param("reactionCount",b("NumberFormat").formatInteger(e-d.length))])},"and more")]}))}e.exports=b("withReflowOnMountOrUpdate")(a)}),null);
__d("withRefetchOnVisible",["React","RelayModern"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("RelayModern").fetchQuery;function a(a,c){__p&&__p();return function(d){__p&&__p();babelHelpers.inheritsLoose(e,d);function e(){return d.apply(this,arguments)||this}var f=e.prototype;f.$2=function(){var a=this.props,b=a.environment;a=a.queryVariables;g(b,c,a)};f.componentDidMount=function(){var a=this;this.$1=this.props.addVisibilityChangeListener(function(b){b&&a.$2()})};f.componentWillUnmount=function(){this.$1!=null&&(this.$1.remove(),this.$1=null)};f.render=function(){var c=this.props;c.addVisibilityChangeListener;c=babelHelpers.objectWithoutPropertiesLoose(c,["addVisibilityChangeListener"]);return b("React").jsx(a,babelHelpers["extends"]({},c))};return e}(b("React").Component)}e.exports=a}),null);
__d("UFI2CommentsCountTooltipContent.react",["fbt","React","RelayModern","UFI2TooltipNamesList.react","withRefetchOnVisible","UFI2CommentsCountTooltipContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();b("RelayModern").graphql;var h=b("RelayModern").QueryRenderer,i=function(){return b("UFI2CommentsCountTooltipContentQuery.graphql")};function j(a){__p&&__p();var c,d=a.error;a=a.props;if(d)return null;if(a==null)return g._("Loading\u2026");d=a.feedback;a=(a=d==null?void 0:(a=d.commenters)==null?void 0:a.count)!=null?a:0;c=((c=d==null?void 0:(c=d.commenters)==null?void 0:c.edges)!=null?c:[]).map(function(a){return(a=a.node)==null?void 0:a.name}).filter(Boolean);if(c.length===0)return g._("No visible comments");d=(d=d==null?void 0:(d=d.top_level_comments)==null?void 0:d.total_count)!=null?d:0;d=d>50?d:a;return b("React").jsx(b("UFI2TooltipNamesList.react"),{"data-testid":"UFI2CommentsCountTooltipContent/content",names:c,totalCount:d})}function a(a){var c=a.environment;a=a.queryVariables;return b("React").jsx(h,{environment:c,fetchPolicy:"store-and-network",query:i,render:j,variables:a})}e.exports=b("withRefetchOnVisible")(a,i)}),null);
__d("UFI2ReactionsCountTooltipContent.react",["fbt","React","RelayModern","UFI2TooltipNamesList.react","withRefetchOnVisible","UFI2ReactionsCountTooltipContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var i=function(){return b("UFI2ReactionsCountTooltipContentQuery.graphql")};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){__p&&__p();var c=a.error;a=a.props;if(c)return null;c=d.props.reactionCount;if(!a)return g._("Loading\u2026");a=((a=(a=a.feedback)==null?void 0:(a=a.reactors)==null?void 0:a.nodes)!=null?a:[]).map(function(a){return a.name}).filter(Boolean);return b("React").jsx(b("UFI2TooltipNamesList.react"),{"data-testid":"UFI2ReactionsCountTooltipContent/content",names:a,totalCount:c})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.environment;a=a.queryVariables;return b("React").jsx(h,{environment:c,fetchPolicy:"store-and-network",query:i,render:this.$1,variables:a})};return c}(b("React").Component);e.exports=b("withRefetchOnVisible")(a,i)}),null);
__d("UFI2SharesCountTooltipContent.react",["fbt","OnVisible.react","React","RelayModern","SubscriptionsHandler","UFI2TooltipNamesList.react","clearTimeout","setTimeoutAcrossTransitions","UFI2SharesCountTooltipContentQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var i=500,j=function(){return b("UFI2SharesCountTooltipContentQuery.graphql")};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={renderContent:!1},d.$1=new(b("SubscriptionsHandler"))(),d.$3=function(){d.state.renderContent===!1&&(d.$1.release(),d.$1.engage())},d.$4=function(){d.state.renderContent===!1&&d.$2()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(){var a=this,c=b("setTimeoutAcrossTransitions")(function(){a.setState({renderContent:!0})},i);this.$1.addSubscriptions({remove:function(){b("clearTimeout")(c)}})};d.componentDidMount=function(){this.$2()};d.componentWillUnmount=function(){this.$1.release()};d.$5=function(a){__p&&__p();var c=a.error;a=a.props;if(c)return null;if(!a)return g._("Loading\u2026");c=(c=(c=a.feedback)==null?void 0:(c=c.reshares)==null?void 0:c.count)!=null?c:0;a=((a=(a=a.feedback)==null?void 0:a.legacy_resharers)!=null?a:[]).map(function(a){return a==null?void 0:a.name}).filter(Boolean);return a.length===0&&c===0?g._("There are no public shares."):b("React").jsx(b("UFI2TooltipNamesList.react"),{"data-testid":"UFI2SharesCountTooltipContent/content",names:a,totalCount:c})};d.render=function(){var a=this.props,c=a.environment;a=a.queryVariables;return b("React").jsx(b("OnVisible.react"),{onHidden:this.$3,onVisible:this.$4,children:this.state.renderContent===!0?b("React").jsx(h,{environment:c,fetchPolicy:"store-and-network",query:j,render:this.$5,variables:a}):b("React").jsx(b("React").Fragment,{children:g._("Loading\u2026")})})};return c}(b("React").PureComponent);e.exports=a}),null);