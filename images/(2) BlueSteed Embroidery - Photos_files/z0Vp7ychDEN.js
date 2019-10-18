if (self.CavalryLogger) { CavalryLogger.start_js(["cWgPY"]); }

__d("SaveCollectionDialogs",["fbt","SimpleXUIDialog"],(function(a,b,c,d,e,f,g){"use strict";a={showUnsaveConfirmation:function(a){var c=g._("Unsaving an item will also remove it from any collections you added it to."),d=g._("Unsave");b("SimpleXUIDialog").showConfirm(c,d,a)}};e.exports=a}),null);
__d("SavedForLaterCounterContainer",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.counters=new Map()}var b=a.prototype;b.add=function(a,b){this.counters.set(a,b)};b.increment=function(){this.counters.forEach(function(a){a.increment()})};b.decrement=function(){this.counters.forEach(function(a){a.decrement()})};return a}();e.exports=a}),null);
__d("SavedForLaterDashboardCollectionIcon.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=20;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){if(this.props.src)return b("React").jsx("span",{children:b("React").jsx(b("Image.react"),{src:this.props.src,width:h,height:h,className:"_2mwd"})});else if(this.props.firstLetter.length>0)return b("React").jsx("span",{className:"_2mwe",children:b("React").jsx("span",{className:"_2mwg",children:this.props.firstLetter})});return null};return c}(b("React").Component);e.exports=a}),null);
__d("XSaveListCreateDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/save/list/dialog/",{object_id:{type:"FBID"},mechanism:{type:"String"},surface:{type:"String"},savable_url:{type:"String"}})}),null);
__d("SavedForLaterDashboardAddToCollectionButton.react",["ix","cx","fbt","Image.react","MenuSeparator","PopoverMenu.react","React","ReactXUIMenu","SavedForLaterDashboardCollectionIcon.react","XSaveListCreateDialogController","XSaveListMutationController","XUIButton.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("ReactXUIMenu").Item;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$1(),children:b("React").jsx(b("XUIButton.react"),{className:"_2p-o",image:b("React").jsx(b("Image.react"),{src:g("130011")}),label:i._("Add to Collection")})})};d.$1=function(){var a=this.$2();a.length>0&&a.push(b("React").jsx(b("MenuSeparator"),{},"createListMenuSeparator"));a.push(this.$3());return b("React").jsx(b("ReactXUIMenu"),{children:a})};d.$2=function(){var a=this;return this.props.nonContainingLists.map(function(c){var d=b("XSaveListMutationController").getURIBuilder().setEnum("action","SAVE_IN_EXISTING_LIST").setEnum("mechanism","add_to_list_button").setEnum("surface","save_dashboard").setInt("list_id",c.listId);a.props.savableUrl!=null?d.setString("savable_url",a.props.savableUrl):d.setFBID("object_id",a.props.savableId);d=d.getURI();return b("React").jsx(j,{icon:b("React").jsx(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:c.firstLetter,src:c.imageSource}),href:"#",ajaxify:d,rel:"async-post",onClick:a.handleAddToCollection.bind(a,c.listId),children:c.name},c.listId)})};d.$3=function(){var a=b("XSaveListCreateDialogController").getURIBuilder().setString("surface","save_dashboard").setString("mechanism","add_to_saved_list_button");this.props.savableUrl!=null?a.setString("savable_url",this.props.savableUrl):a.setFBID("object_id",this.props.savableId);a=a.getURI();return b("React").jsx(j,{ajaxify:a,rel:"dialog",children:i._("Create New Collection")},"createListMenuItem")};d.handleAddToCollection=function(a){this.props.addItemToList(a)};return c}(b("React").Component);e.exports=a}),null);
__d("SaveClickFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("save_click");e.exports=a}),null);
__d("SavedForLaterDashboardDataStore",["DataStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="constant_save_dashboard";a={setCollectionID:function(a){b("DataStore").set(g,"collection_id",a)},getCollectionID:function(){var a=null;b("DataStore").get(g,"collection_id")&&(a=b("DataStore").get(g,"collection_id"));return a},setSurface:function(a){b("DataStore").set(g,"surface",a)},getSurface:function(){var a="dashboard";b("DataStore").get(g,"surface")&&(a=b("DataStore").get(g,"surface"));return a}};e.exports=a}),null);
__d("SavedForLaterDashboardClickLogger",["csx","cx","CSS","DOM","DOMQuery","Event","Parent","SaveClickFalcoEvent","SavedForLaterDashboardDataStore","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="_5wci",j="_5wcf",k="_4mvy",l="._16xn",m="_16xn",n="_16xq",o="._16xq",p="._5yjp",q={init:function(a,c,d,e,f){var g=b("SavedForLaterDashboardDataStore").getSurface();e!=null&&(g="saved_list_landing_view");b("tidyEvent")(b("Event").listen(a,"click",function(a){b("SaveClickFalcoEvent").log(function(){return{list_id:e,object_id:c,mechanism:d,surface:g,item_index:f}})}))},initForItemConsumption:function(a){__p&&__p();b("tidyEvent")(b("Event").listen(a,"click",function(c){__p&&__p();c=b("Parent").bySelector(a,p);c&&b("CSS").addClass(c,k);c=b("Parent").byClass(a,i);if(c){c=b("DOMQuery").scry(c,o);if(c.length>0){c=c[0];b("CSS").removeClass(c,n);b("CSS").addClass(c,m)}}c=b("Parent").byClass(a,j);if(c){var d=b("DOMQuery").scry(c,l);if(d.length>0){d=d[0];b("CSS").removeClass(d,m);b("CSS").addClass(d,n)}d=new CustomEvent("saveItemConsumed");c.dispatchEvent(d)}}))},initForSearchedItemConsumption:function(a,c,d,e,f){b("tidyEvent")(b("Event").listen(a,"click",function(a){var g=b("SavedForLaterDashboardDataStore").getSurface();b("SaveClickFalcoEvent").log(function(){return{mechanism:d,surface:g,item_index:c,search_query:e,object_id:f}})}))},initBySelector:function(a,c,d,e,f){a=b("DOMQuery").scry(a,c);a.forEach(function(a){q.init(a,d,e,f)})},initForSearchButton:function(a,c){a=b("DOM").find(a,"button");b("tidyEvent")(b("Event").listen(a,"click",function(a){if(a.isRightClick()||a.isMiddleClick())return;var d=b("SavedForLaterDashboardDataStore").getSurface();b("SavedForLaterDashboardDataStore").setSurface("search_dashboard");b("SaveClickFalcoEvent").log(function(){return{mechanism:c,surface:d}})}))}};e.exports=q}),null);
__d("SavedForLaterDashboardHeader",["AsyncRequest","DataStore","DOM","SavedForLaterCounterContainer","XSaveController"],(function(a,b,c,d,e,f){__p&&__p();var g="SavedForLaterItemCounters",h="SavedForLaterDataStoreNamespace";a=function(){"use strict";__p&&__p();function a(b,c){b=a.getStoredItemCounters();for(var d in c)b.set(d,c[d])}a.getStoredItemCounters=function(){return b("DataStore").get(h,g,new Map())};a.addItemCounter=function(a,c,d){var e=this.getStoredItemCounters();e.has(a)||e.set(a,new(b("SavedForLaterCounterContainer"))());e.get(a).add(d,c)};a.update=function(a,b){var c=this.getStoredItemCounters();c.forEach(function(c,d){i(a,d)&&c.increment(),i(b,d)&&c.decrement()})};a.updateAndReplace=function(c,d){a.update(d.increment,d.decrement),c&&b("DOM").replace(c,d.markup)};a.toggleStatus=function(a){var b=document.getElementById("item-"+a);a=document.getElementById("removed-item-"+a);b&&b.classList.toggle("hidden_elem");a&&a.classList.toggle("hidden_elem")};a.updateAndToggleStatus=function(b,c){a.update(c.increment,c.decrement),a.toggleStatus(b)};a.incrementList=function(a){var b=this.getStoredItemCounters();b.has(a)&&b.get(a).increment()};a.decrementList=function(a){var b=this.getStoredItemCounters();b.has(a)&&b.get(a).decrement()};a.getRemoveItemUriBuilder=function(a,c){return b("XSaveController").getURIBuilder().setInt("object_id",a.object_id).setEnum("action","UNSAVE").setEnum("mechanism",c).setEnum("surface","save_dashboard")};a.removeItem=function(c,d,e,f){e=a.getRemoveItemUriBuilder(e,f);a.updateAndReplace(c,d);new(b("AsyncRequest"))(e.getURI()).setServerDialogCancelHandler(function(e){c&&b("DOM").replace(d.markup,c),a.update(d.decrement,[])}).send()};a.removeItemAndToggleStatus=function(c,d,e){e=a.getRemoveItemUriBuilder(d,e);a.updateAndToggleStatus(d.object_id,c);new(b("AsyncRequest"))(e.getURI()).setServerDialogCancelHandler(function(b){a.toggleStatus(d.object_id),a.update(c.decrement,[])}).send()};return a}();function i(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}e.exports=a}),null);
__d("SavedForLaterDashboardNUX",["cx","DataStore","DOM","Event","Parent","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="saved_for_later_dashboard_nux",i="fb_content";a=function(){"use strict";__p&&__p();function a(a,c,d){this.nuxElement=d;b("tidyEvent")([b("Event").listen(a,"click",this.remove.bind(this)),b("Event").listen(c,"click",this.remove.bind(this))]);a=b("Parent").byClass(d,i);b("DataStore").set(a,h,this)}var c=a.prototype;c.remove=function(){b("DOM").remove(this.nuxElement)};a.dismiss=function(a){a=b("Parent").byClass(a,i);a=b("DataStore").get(a,h);a&&a.remove()};return a}();e.exports=a}),null);
__d("SavedForLaterDashboardHeaderCategoryFilter",["cx","Banzai","LoadingIndicator.react","PageTransitions","React","ReactDOM","SavedForLaterDashboardDataStore","SavedForLaterDashboardNUX","ge","guid"],(function(a,b,c,d,e,f,g){__p&&__p();var h="saved_for_later:click",i="_5x-b",j="saved_loading_indicator",k="save_dashboard",l="dashboard";a={init:function(a){this.bindSelectorBehavior(a)},initLinkSelector:function(a,b){this.bindSelectorBehavior(a,b)},bindSelectorBehavior:function(a,c){__p&&__p();a.subscribe("show",function(){b("SavedForLaterDashboardDataStore").setSurface(l),b("Banzai").post(h,{surface:k,mechanism:"filter_button",event_id:b("guid")()},{delay:0})}),a.subscribe("change",function(a,d){__p&&__p();a=d.item.getValue();var e=b("ge")("saveContentFragment");c.firstChild.textContent=d.item.getLabel();b("SavedForLaterDashboardDataStore").setSurface(l);b("Banzai").post(h,{surface:k,mechanism:"filter_list_button",event_id:b("guid")(),dashboard_section:a},{delay:0});b("SavedForLaterDashboardNUX").dismiss(e);d=b("PageTransitions").getCurrentURI().getUnqualifiedURI();var f=b("PageTransitions").getCurrentURI().getUnqualifiedURI();f.removeQueryData("unlisted_only");f.removeQueryData("dashboard_section");f.removeQueryData("seen_state_filter");a=="NOT_SEEN"?f.addQueryData({seen_state_filter:1}):a=="UNLISTED"?f.addQueryData({unlisted_only:"true"}):f.addQueryData({dashboard_section:a});f.removeQueryData("list_id");b("PageTransitions").rewriteCurrentURI(d,f);b("ReactDOM").render(b("React").jsx("div",{className:i,id:j,children:b("React").jsx(b("LoadingIndicator.react"),{size:"large",color:"white"})}),e)})}};e.exports=a}),null);
__d("SavedForLaterDashboardItemListsManager",["DataStore","SavedForLaterDashboardHeader"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="SavedForLaterListsForItem",h="SavedForLaterDataStoreNamespace";a={getListsForAllItems:function(){return b("DataStore").get(h,g,new Map())},getListsForItem:function(a){return this.getListsForAllItems().get(a)},setListsForItem:function(a,b){var c=this.getListsForAllItems();c.set(a,new Set());b.forEach(function(b){c.get(a).add(b)})},removeFromListsForItem:function(a,c){a=this.getListsForItem(a);a&&(a["delete"](c),b("SavedForLaterDashboardHeader").decrementList(c))},addToListsForItem:function(a,c){a=this.getListsForItem(a);a&&(a.add(c),b("SavedForLaterDashboardHeader").incrementList(c))}};e.exports=a}),null);
__d("SavedForLaterDashboardItemTags.react",["cx","fbt","MenuSeparator","MenuStaticItem","PageTransitions","PopoverMenu.react","React","ReactXUIMenu","SavedForLaterDashboardCollectionIcon.react","URI","XUISubNavigationItemsAndNavigationShortcutsHighlighting","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReactXUIMenu").Item;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return this.props.containingLists.length==0?null:b("React").jsx("span",{className:"_440n _3vo5",children:b("React").jsxs(b("XUIText.react"),{className:"_5znp",children:["\xb7\xa0",this.$1()]})})};d.$1=function(){var a=this.props.containingLists[0];return b("React").jsxs("span",{className:"_3a4y",children:[h._("Saved to"),b("React").jsx("span",{className:"_397o",children:b("React").jsx("a",{href:"#",onClick:this.handleTagClick.bind(null,a),children:a.name})}),this.$2()]})};d.$2=function(){var a=this.props.containingLists.slice(1);return a.length==0?null:b("React").jsx(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$3(),children:b("React").jsx("span",{className:"_397o",children:b("React").jsx("a",{href:"#",children:h._({"*":"+{other collections} more"},[h._param("other collections",a.length,[0])])})})})};d.$3=function(){var a=this.props.containingLists.slice(1),c=this.handleTagClick;a=a.map(function(a){return b("React").jsx(i,{icon:b("React").jsx(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:a.firstLetter,src:a.imageSource}),onClick:c.bind(null,a),children:a.name},a.listId)});a.unshift(b("React").jsx(b("MenuStaticItem"),{children:h._("Also lives in:")},"alsoLivesInMenuItem"),b("React").jsx(b("MenuSeparator"),{},"alsoLivesInMenuSeparator"));return b("React").jsx(b("ReactXUIMenu"),{children:a})};d.handleTagClick=function(a){a=new(b("URI"))(a.uri);b("PageTransitions").go(a,!0);b("XUISubNavigationItemsAndNavigationShortcutsHighlighting").removeHighlightingFromAllItemsExceptForURI(a.toString())};return c}(b("React").Component);e.exports=a}),null);
__d("SavedForLaterDashboardMoreButton.react",["ix","cx","fbt","AsyncRequest","Banzai","CurrentUser","Image.react","MenuSeparator","MenuStaticItem","PopoverMenu.react","React","ReactXUIMenu","SaveCollectionDialogs","SavedForLaterDashboardCollectionIcon.react","XSaveController","XSaveListMutationController","XUIButton.react","fbglyph","guid"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j="saved_for_later:click",k=b("ReactXUIMenu").Item;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.handleOnClickUnsave=function(){var a=d.props.containingLists.length;a===0?d.handleUnsaveItem():b("SaveCollectionDialogs").showUnsaveConfirmation(function(a){a&&d.handleUnsaveItem()})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").jsx(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$1(),children:b("React").jsx(b("XUIButton.react"),{className:"_2p-o",image:b("React").jsx(b("Image.react"),{src:g("128601")}),label:i._("more"),labelIsHidden:!0})})};d.$1=function(){__p&&__p();var a=[];if(this.props.isArchive){a.push(b("React").jsx(k,{href:"#",onClick:this.handleUnarchive.bind(this),children:i._("Unarchive")},"unarchiveMenuItem"));return b("React").jsx(b("ReactXUIMenu"),{children:a})}a.push(this.$2());this.props.containerPermalink!=null&&a.push(this.$3());a.push(b("React").jsx(b("MenuSeparator"),{},"markAsMenuSeparator"));var c=this.$4();c.length>0&&(a.push(b("React").jsx(b("MenuStaticItem"),{children:i._("Remove from:")},"removeFromMenuItem")),a=a.concat(c),a.push(b("React").jsx(b("MenuSeparator"),{},"unsaveMenuSeparator")));a.push(this.$5());return b("React").jsx(b("ReactXUIMenu"),{children:a})};d.$2=function(){var a=i._("Mark as unopened");this.props.unseen&&(a=i._("Mark as opened"));return b("React").jsx(k,{href:"#",onClick:this.handleMarkAs.bind(this),children:a},"markAsMenuItem")};d.$3=function(){var a="";if(this.props.containerType===1)a=i._("View Original Post");else if(this.props.containerType===2)a=b("CurrentUser").isWorkUser()?i._("View in Workplace Chat"):i._("View in Messenger");else return null;return b("React").jsx(k,{href:this.props.containerPermalink,children:a},"viewOriginalSourceMenuItem")};d.$4=function(){var a=this;return this.props.containingLists.map(function(c){var d=b("XSaveListMutationController").getURIBuilder().setFBID("object_id",a.props.savableId).setEnum("action","REMOVE_FROM_LIST").setEnum("mechanism","remove_from_saved_list_button").setEnum("surface","save_dashboard").setInt("list_id",c.listId).getURI();return b("React").jsx(k,{icon:b("React").jsx(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:c.firstLetter,src:c.imageSource}),href:"#",ajaxify:d,rel:"async-post",onClick:a.handleRemoveFromCollection.bind(a,c.listId),children:c.name},c.listId)})};d.$5=function(){return b("React").jsx(k,{href:"#",onClick:this.handleOnClickUnsave,children:i._("Unsave")},"unsaveMenuItem")};d.handleMarkAs=function(a){a="mark_as_unseen_button";this.props.unseen&&(a="mark_as_seen_button");b("Banzai").post(j,{savable_id:this.props.savableId,surface:"save_dashboard",mechanism:a,event_id:b("guid")()},{delay:0});this.props.toggleSeenStatus()};d.handleRemoveFromCollection=function(a){this.props.removeItemFromList(a)};d.handleUnsaveItem=function(){this.props.unsaveItem();var a=b("XSaveController").getURIBuilder().setInt("object_id",this.props.savableId).setEnum("action","UNSAVE").setEnum("mechanism","delete_button").setEnum("surface","save_dashboard").getURI();new(b("AsyncRequest"))(a).setServerDialogCancelHandler(this.props.cancelUnsaveItem).send()};d.handleUnarchive=function(){var a=b("XSaveController").getURIBuilder().setInt("object_id",this.props.savableId).setEnum("action","UNARCHIVE").setEnum("mechanism","unarchive_button").setEnum("surface","save_dashboard").getURI();new(b("AsyncRequest"))(a).send();this.props.unarchiveItem()};return c}(b("React").Component);e.exports=a}),null);
__d("SavedForLaterDashboardItemActionButtonManager.react",["ix","cx","CSS","Image.react","React","ReactDOM","SavedForLaterDashboardAddToCollectionButton.react","SavedForLaterDashboardItemListsManager","SavedForLaterDashboardItemTags.react","SavedForLaterDashboardMoreButton.react","XUICardSection.react","$","fbglyph","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=98..toString();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={belongsToList:d.$1(),unseen:d.props.unseen,removed:!1},d.$3=function(a){d.setState(function(b,c){c=new Map(b.belongsToList);c.set(a,!0);return{belongsToList:c}}),b("SavedForLaterDashboardItemListsManager").addToListsForItem(d.props.savableId,a)},d.$4=function(a){d.setState(function(b,c){c=new Map(b.belongsToList);c.set(a,!1);return{belongsToList:c}}),b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(d.props.savableId,a)},d.$5=function(){d.setState(function(a,b){return{unseen:!a.unseen}})},d.$7=function(){__p&&__p();var a=d.$2(!0);for(var a=a,c=Array.isArray(a),e=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(c){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(d.props.savableId,f.listId)}b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(d.props.savableId,i);d.$10()},d.$6=function(){__p&&__p();var a=d.$2(!0);for(var a=a,c=Array.isArray(a),e=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(c){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;b("SavedForLaterDashboardItemListsManager").addToListsForItem(d.props.savableId,f.listId)}b("SavedForLaterDashboardItemListsManager").addToListsForItem(d.props.savableId,i);d.$10()},d.$8=function(){d.$11()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){__p&&__p();var a=new Map();for(var b=this.props.savedLists,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;a.set(e.listId,!1)}for(var e=this.props.containingLists,d=Array.isArray(e),c=0,e=d?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(d){if(c>=e.length)break;b=e[c++]}else{c=e.next();if(c.done)break;b=c.value}b=b;a.set(b,!0)}return a};d.render=function(){var a=this.$2(!0),c=this.$2(!1),d=b("ge")("saved-seen-indicator-"+this.props.savableId),e=b("ge")("saved-more-button-"+this.props.savableId),f=b("ge")("saved-add-button-"+this.props.savableId),g=b("ge")("saved-item-tags-"+this.props.savableId);return b("React").jsxs(b("XUICardSection.react"),{children:[g!=null?b("ReactDOM").createPortal(b("React").jsx(b("SavedForLaterDashboardItemTags.react"),{containingLists:a}),g):null,f!=null?b("ReactDOM").createPortal(b("React").jsx(b("SavedForLaterDashboardAddToCollectionButton.react"),{nonContainingLists:c,addItemToList:this.$3,savableId:this.props.savableId,savableUrl:this.props.savableUrl}),f):null,e!=null?b("ReactDOM").createPortal(b("React").jsx(b("SavedForLaterDashboardMoreButton.react"),{containingLists:a,removeItemFromList:this.$4,toggleSeenStatus:this.$5,cancelUnsaveItem:this.$6,unsaveItem:this.$7,savableId:this.props.savableId,unseen:this.state.unseen,unarchiveItem:this.$8,isArchive:this.props.isArchive,containerType:this.props.containerType,containerPermalink:this.props.containerPermalink}),e):null,d!=null?b("ReactDOM").createPortal(this.$9(),d):null]})};d.$9=function(){return this.state.unseen?b("React").jsx(b("Image.react"),{className:"_4trz",src:g("115777")}):null};d.$2=function(a){var b=this;return this.props.savedLists.filter(function(c){return a==b.state.belongsToList.get(c.listId)})};d.$10=function(){var a=b("$")("item-"+this.props.savableId),c=b("ge")("removed-item-"+this.props.savableId);this.state.removed?(b("CSS").removeClass(a,"hidden_elem"),c!=null&&b("CSS").addClass(c,"hidden_elem")):(c!=null&&b("CSS").removeClass(c,"hidden_elem"),b("CSS").addClass(a,"hidden_elem"));this.setState(function(a,b){return{removed:!a.removed}})};d.$11=function(){var a=b("$")("item-"+this.props.savableId),c=b("$")("unarchived-item-"+this.props.savableId);this.state.removed?(b("CSS").removeClass(a,"hidden_elem"),b("CSS").addClass(c,"hidden_elem")):(b("CSS").removeClass(c,"hidden_elem"),b("CSS").addClass(a,"hidden_elem"));this.setState(function(a,b){return{removed:!a.removed}})};return c}(b("React").Component);e.exports=a}),null);
__d("SavedForLaterDashboardOptInNUX",["AsyncRequest","DOM"],(function(a,b,c,d,e,f){a=function(a,c){"use strict";a.setDismissHandler(function(){b("DOM").remove(a.getRoot()),a.destroy(),new(b("AsyncRequest"))(c).send()})};e.exports=a}),null);
__d("SavedForLaterDashboardRemoveButton",["cx","Event","Parent","SaveCollectionDialogs","SavedForLaterDashboardHeader","SavedForLaterDashboardItemListsManager","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_5wcf";a=function(a,c,d){"use strict";b("tidyEvent")(b("Event").listen(a,"click",function(e){e=b("Parent").byClass(a,h);if(e){e=b("SavedForLaterDashboardItemListsManager").getListsForItem(d.object_id.toString());e&&(c.decrement=Array.from(e));c.decrement.length>1?b("SaveCollectionDialogs").showUnsaveConfirmation(function(a){a&&b("SavedForLaterDashboardHeader").removeItemAndToggleStatus(c,d,"xout_button")}):b("SavedForLaterDashboardHeader").removeItemAndToggleStatus(c,d,"xout_button")}}))};e.exports=a}),null);
__d("SavedForLaterDashboardSidebarSearch",["Event","XUISubNavigationItemsAndNavigationShortcutsHighlighting"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){b("Event").listen(a,"submit",b("XUISubNavigationItemsAndNavigationShortcutsHighlighting").removeHighlightingFromAllItemsExceptForURI.bind(c))};e.exports=a}),null);
__d("SavedForLaterHeaderCollectionCounter",["fbt","DOM","SavedForLaterDashboardHeader"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="savedForLaterCollectionHeader";a=function(){__p&&__p();function a(a,c,d){this.itemCounterContainer=a,this.listId=c.toString(),this.count=d,b("SavedForLaterDashboardHeader").addItemCounter(this.listId,this,h)}var c=a.prototype;c.getListId=function(){return this.listId};c.increment=function(){this.$1(this.$2()+1)};c.decrement=function(){this.$1(this.$2()-1)};c.$2=function(){return this.count};c.$1=function(a){a<0&&(a=0);var c=g._({"*":"{number} items","_1":"1 item"},[g._plural(a,"number")]);b("DOM").setContent(this.itemCounterContainer,c);this.count=a};return a}();e.exports=a}),null);
__d("SavedForLaterSidebarBadgeAccesory",["CSS","DOM","SavedForLaterDashboardHeader"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="savedForLaterSidebarCounter";a=function(){__p&&__p();function a(a,c,d,e){this.sidebarBadgeAccessory=a,this.maxCount=e,this.listId=c.toString(),this.count=d,b("SavedForLaterDashboardHeader").addItemCounter(this.listId,this,g)}var c=a.prototype;c.getListId=function(){return this.listId};c.increment=function(){this.$1(this.$2()+1)};c.decrement=function(){this.$1(this.$2()-1)};c.$2=function(){return this.count};c.$1=function(a){a<0&&(a=0),a<=0?b("CSS").addClass(this.sidebarBadgeAccessory,"hidden_elem"):b("CSS").removeClass(this.sidebarBadgeAccessory,"hidden_elem"),a<=this.maxCount?b("DOM").setContent(this.sidebarBadgeAccessory,a):b("DOM").setContent(this.sidebarBadgeAccessory,this.maxCount+"+"),this.count=a};return a}();e.exports=a}),null);