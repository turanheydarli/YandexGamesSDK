(()=>{"use strict";var e={},n=function(){function e(){}return e.authenticateUser=function(e,n){return t=this,r=void 0,a=function(){var t,r,o,a,s;return function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(i){switch(i.label){case 0:if(i.trys.push([0,5,,6]),console.log("Authentication requested. Require sign-in:",n),!window.yandexSDK)throw new Error("Yandex SDK is not available on the window object.");return[4,window.yandexSDK];case 1:return[4,(t=i.sent()).getPlayer()];case 2:return r=i.sent(),Boolean(n)&&"lite"===r.getMode()?[4,t.auth.openAuthDialog()]:[3,4];case 3:i.sent(),i.label=4;case 4:return o=""!==r.getUniqueID(),console.log("Player is authorized:",o),a={id:r.getUniqueID(),name:r.getName(),avatarUrlSmall:r.getPhoto("small"),avatarUrlMedium:r.getPhoto("medium"),avatarUrlLarge:r.getPhoto("large"),isAuthorized:o},window.SendResponseToUnity(e,!0,JSON.stringify(a),null),console.log("Authentication success message sent to Unity."),[3,6];case 5:return s=i.sent(),console.error("Error during user authentication:",s.message||s),window.SendResponseToUnity(e,!1,null,s.message||"An unknown error occurred during authentication."),[3,6];case 6:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function s(e){try{u(a.next(e))}catch(e){n(e)}}function i(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,i)}u((a=a.apply(t,r||[])).next())}));var t,r,o,a},e}(),t=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}u((r=r.apply(e,n||[])).next())}))},r=function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},o=function(){function e(){}return e.initialize=function(){return t(this,void 0,void 0,(function(){var n;return r(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,5]),[4,e.loadYandexSDK()];case 1:return t.sent(),[3,5];case 2:return n=t.sent(),console.error("Failed to initialize:",n.message),[4,e.waitForUnityInstance()];case 3:return t.sent(),[4,e.waitForYandexGamesSDKReady()];case 4:return t.sent(),window.unityInstance.SendMessage("YandexGamesSDK","OnSDKInitialized","false|".concat(n.message)),[3,5];case 5:return[2]}}))}))},e.getServerTime=function(e){return t(this,void 0,void 0,(function(){var n,t;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,r.sent().serverTime()];case 2:return n=r.sent(),window.SendResponseToUnity(e,!0,String(n),null),console.log("Server time fetched successfully and sent to Unity."),[3,4];case 3:return t=r.sent(),console.error("Failed to get server time:",t.message||t),window.SendResponseToUnity(e,!1,null,t.message||"Failed to get server time."),[3,4];case 4:return[2]}}))}))},e.getEnvironment=function(e){return t(this,void 0,void 0,(function(){var n,t,o,a;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,window.yandexSDK];case 1:return n=r.sent(),t=n.environment,o=JSON.stringify(t),window.SendResponseToUnity(e,!0,o,null),console.log("Environment data fetched successfully and sent to Unity."),[3,3];case 2:return a=r.sent(),console.error("Failed to get environment:",a.message||a),window.SendResponseToUnity(e,!1,null,a.message||"Failed to get environment."),[3,3];case 3:return[2]}}))}))},e.loadYandexSDK=function(){return t(this,void 0,void 0,(function(){return r(this,(function(n){return[2,new Promise((function(n,t){var r=document.createElement("script");r.src="https://yandex.ru/games/sdk/v2",r.onload=function(){return e.onYandexSDKLoaded().then(n).catch(t)},r.onerror=function(){console.error("Failed to load Yandex SDK script"),e.initializeUnity().then(n).catch(t)},document.head.appendChild(r)}))]}))}))},e.onYandexSDKLoaded=function(){return t(this,void 0,void 0,(function(){var n,t;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,9]),[4,window.YaGames.init()];case 1:return n=r.sent(),window.yandexSDK=n,console.log("Yandex SDK loaded and initialized successfully"),[4,e.initializeUnity()];case 2:return r.sent(),[4,e.waitForUnityInstance()];case 3:case 6:return r.sent(),[4,e.waitForYandexGamesSDKReady()];case 4:return r.sent(),e.sendUnityMessage("OnYSDKLoaded","YSDK loaded successfully"),e.isInitialized=!0,window.unityInstance.SendMessage("YandexGamesSDK","OnSDKInitialized","true"),[3,9];case 5:return t=r.sent(),console.error("Yandex SDK failed to initialize:",t.message),[4,e.waitForUnityInstance()];case 7:return r.sent(),e.sendUnityMessage("OnYSDKLoadFailed",t.message),[4,e.initializeUnity()];case 8:return r.sent(),window.unityInstance.SendMessage("YandexGamesSDK","OnSDKInitialized","false|".concat(t.message)),[3,9];case 9:return[2]}}))}))},e.initializeUnity=function(){return t(this,void 0,void 0,(function(){var n,t,o,a;return r(this,(function(r){return t="".concat(n="Build","/{{{ LOADER_FILENAME }}}"),o={dataUrl:"".concat(n,"/{{{ DATA_FILENAME }}}"),frameworkUrl:"".concat(n,"/{{{ FRAMEWORK_FILENAME }}}"),codeUrl:"".concat(n,"/{{{ CODE_FILENAME }}}"),streamingAssetsUrl:"StreamingAssets",companyName:"{{{ COMPANY_NAME }}}",productName:"{{{ PRODUCT_NAME }}}",productVersion:"{{{ PRODUCT_VERSION }}}"},a=document.querySelector("#unity-canvas"),[2,new Promise((function(n,r){e.loadScript(t,(function(){window.createUnityInstance(a,o,e.updateLoadingProgress).then((function(t){console.log("Unity WebGL instance created successfully"),window.unityInstance=t,window.unityInstance=t,e.unityInitResolve&&(e.unityInitResolve(),e.unityInitResolve=null),n()})).catch((function(e){console.error("Failed to load Unity game:",e),alert("Failed to load Unity game: "+e),r(e)}))}))}))]}))}))},e.loadScript=function(e,n){var t=document.createElement("script");t.src=e,t.onload=n,t.onerror=function(){console.error("Failed to load script:",e),alert("Failed to load Unity loader script.")},document.body.appendChild(t)},e.updateLoadingProgress=function(e){},e.sendUnityMessage=function(e,n){unityInstance?unityInstance.SendMessage("YandexGamesSDK",e,n):console.warn("Unity instance is not initialized.")},e.waitForUnityInstance=function(){return window.unityInstance?Promise.resolve():e.unityInstancePromise},e.waitForYandexGamesSDKReady=function(){return e.yandexGamesSDKReadyPromise},e.OnYandexGamesSDKReady=function(){e.yandexGamesSDKReadyResolve&&(e.yandexGamesSDKReadyResolve(),e.yandexGamesSDKReadyResolve=null)},e.checkForInitialization=function(){return e.isInitialized},e.isInitialized=!1,e.unityInitResolve=null,e.yandexGamesSDKReadyResolve=null,e.unityInstancePromise=new Promise((function(n){e.unityInitResolve=n})),e.yandexGamesSDKReadyPromise=new Promise((function(n){e.yandexGamesSDKReadyResolve=n})),e}(),a=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}u((r=r.apply(e,n||[])).next())}))},s=function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=function(){function e(){}return e.processQueue=function(){return a(this,void 0,void 0,(function(){var n,t;return s(this,(function(r){switch(r.label){case 0:if(e.isProcessing)return[2];e.isProcessing=!0,r.label=1;case 1:if(!(e.queue.length>0))return[3,6];if(!(n=e.queue.shift()))return[3,5];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,n()];case 3:return r.sent(),[3,5];case 4:return t=r.sent(),console.error("Error executing task:",t),[3,5];case 5:return[3,1];case 6:return e.isProcessing=!1,[2]}}))}))},e.savePlayerData=function(n,t,r){var o=this;e.queue.push((function(){return a(o,void 0,void 0,(function(){var e,o;return s(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,5]),console.log("savePlayerData called with:",{requestId:n,key:t,data:r}),[4,window.yandexSDK];case 1:return[4,a.sent().getPlayer()];case 2:return[4,a.sent().setData((o={},o[t]=r,o),!0)];case 3:return a.sent(),console.log("Saving data for ".concat(t,":"),r),window.SendResponseToUnity(n,!0,null,null),[3,5];case 4:return e=a.sent(),console.error("Failed to save player data:",e.message),window.SendResponseToUnity(n,!1,null,e.message),[3,5];case 5:return[2]}}))}))})),e.processQueue()},e.loadPlayerData=function(n,t){var r=this;e.queue.push((function(){return a(r,void 0,void 0,(function(){var e,r,o;return s(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,5]),console.log("loadPlayerData called with:",{requestId:n,key:t}),[4,window.yandexSDK];case 1:return[4,a.sent().getPlayer()];case 2:return[4,a.sent().getData([t])];case 3:return e=a.sent(),console.log("Data Load Result = ",e),e&&e.hasOwnProperty(t)?(r=e[t],console.log("Loaded player data for key ".concat(t,":"),r),window.SendResponseToUnity(n,!0,r,null)):(console.warn("No data found for key: ".concat(t)),window.SendResponseToUnity(n,!1,null,"No data found for the given key")),[3,5];case 4:return o=a.sent(),console.error("Failed to load player data:",o.message),window.SendResponseToUnity(n,!1,null,o.message),[3,5];case 5:return[2]}}))}))})),e.processQueue()},e.queue=[],e.isProcessing=!1,e}(),u=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}u((r=r.apply(e,n||[])).next())}))},c=function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},l=function(){function e(){}return e.submitScore=function(e,n,t){return u(this,arguments,void 0,(function(e,n,t,r){var o,a,s;return void 0===r&&(r=null),c(this,(function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),[4,window.yandexSDK];case 1:return[4,(o=i.sent()).getLeaderboards()];case 2:return a=i.sent(),[4,o.isAvailableMethod("leaderboards.setLeaderboardScore")];case 3:if(!i.sent())throw new Error("setLeaderboardScore method is not available.");return[4,a.setLeaderboardScore(n,t,r)];case 4:return i.sent(),window.SendResponseToUnity(e,!0,null,null),console.log("Score submitted successfully to Unity."),[3,6];case 5:return s=i.sent(),console.error("Error submitting score:",s.message||s),window.SendResponseToUnity(e,!1,null,s.message||"Failed to submit score."),[3,6];case 6:return[2]}}))}))},e.getLeaderboardEntries=function(e,n){return u(this,arguments,void 0,(function(e,n,t,r,o){var a,s,i,u,l;return void 0===t&&(t=5),void 0===r&&(r=5),void 0===o&&(o=!0),c(this,(function(c){switch(c.label){case 0:return c.trys.push([0,5,,6]),[4,window.yandexSDK];case 1:return[4,(a=c.sent()).getLeaderboards()];case 2:return s=c.sent(),[4,a.isAvailableMethod("leaderboards.getLeaderboardEntries")];case 3:if(!c.sent())throw new Error("getLeaderboardEntries method is not available.");return[4,s.getLeaderboardEntries(n,{includeUser:o,quantityTop:t,quantityAround:r})];case 4:return i=c.sent(),u=JSON.stringify(i),window.SendResponseToUnity(e,!0,u,null),console.log("Leaderboard entries fetched successfully and sent to Unity."),[3,6];case 5:return l=c.sent(),console.error("Error fetching leaderboard entries:",l.message||l),window.SendResponseToUnity(e,!1,null,l.message||"Failed to fetch leaderboard entries."),[3,6];case 6:return[2]}}))}))},e.getPlayerEntry=function(e,n){return u(this,void 0,void 0,(function(){var t,r,o,a,s;return c(this,(function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),[4,window.yandexSDK];case 1:return[4,(t=i.sent()).getLeaderboards()];case 2:return r=i.sent(),[4,t.isAvailableMethod("leaderboards.getLeaderboardPlayerEntry")];case 3:if(!i.sent())throw new Error("getLeaderboardPlayerEntry method is not available.");return[4,r.getLeaderboardPlayerEntry(n)];case 4:return o=i.sent(),a=JSON.stringify(o),window.SendResponseToUnity(e,!0,a,null),console.log("Player entry fetched successfully and sent to Unity."),[3,6];case 5:return s=i.sent(),console.error("Error fetching player entry:",s.message||s),window.SendResponseToUnity(e,!1,null,s.message||"Failed to fetch player entry."),[3,6];case 6:return[2]}}))}))},e}(),d=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}u((r=r.apply(e,n||[])).next())}))},y=function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},f=function(){function e(){}return e.setGameplayReady=function(e){return d(this,void 0,void 0,(function(){var n;return y(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,t.sent().features.LoadingAPI.ready()];case 2:return t.sent(),window.SendResponseToUnity(e,!0,null,null),console.log("Gameplay ready sent successfully to Unity."),[3,4];case 3:return n=t.sent(),console.error("Failed to send LoadingAPI ready:",n.message||n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to send LoadingAPI ready."),[3,4];case 4:return[2]}}))}))},e.setGameplayStart=function(e){return d(this,void 0,void 0,(function(){var n;return y(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,t.sent().features.GameplayAPI.start()];case 2:return t.sent(),window.SendResponseToUnity(e,!0,null,null),console.log("Gameplay start sent successfully to Unity."),[3,4];case 3:return n=t.sent(),console.error("Failed to send GameplayAPI start:",n.message||n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to send GameplayAPI start."),[3,4];case 4:return[2]}}))}))},e.setGameplayStop=function(e){return d(this,void 0,void 0,(function(){var n;return y(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,t.sent().features.GameplayAPI.stop()];case 2:return t.sent(),window.SendResponseToUnity(e,!0,null,null),console.log("Gameplay stop sent successfully to Unity."),[3,4];case 3:return n=t.sent(),console.error("Failed to send GameplayAPI stop:",n.message||n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to send GameplayAPI stop."),[3,4];case 4:return[2]}}))}))},e}(),w=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}u((r=r.apply(e,n||[])).next())}))},h=function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},p=function(){function e(){}return e.showInterstitialAd=function(e){return w(this,void 0,void 0,(function(){var n;return h(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,t.sent().adv.showFullscreenAdv({callbacks:{onOpen:function(){console.log("Interstitial ad opened."),window.SendResponseToUnity(e,!0,"AdOpened",null)},onClose:function(n){n?(console.log("Interstitial ad closed."),window.SendResponseToUnity(e,!0,"AdClosed",null)):(console.log("Interstitial ad not shown due to frequency limitation."),window.SendResponseToUnity(e,!1,null,"Interstitial ad not shown due to frequency limitation."))},onError:function(n){console.error("Error while showing interstitial ad:",n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to show interstitial ad.")},onOffline:function(){console.warn("Network connection lost, unable to show interstitial ad."),window.SendResponseToUnity(e,!1,null,"Network connection lost.")}}})];case 2:return t.sent(),[3,4];case 3:return n=t.sent(),console.error("Failed to call interstitial ad:",n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to call interstitial ad."),[3,4];case 4:return[2]}}))}))},e.showRewardedAd=function(e){return w(this,void 0,void 0,(function(){var n;return h(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,t.sent().adv.showRewardedVideo({callbacks:{onOpen:function(){console.log("Rewarded video ad opened."),window.SendResponseToUnity(e,!0,"AdOpened",null)},onRewarded:function(){console.log("Reward granted."),window.SendResponseToUnity(e,!0,"AdGranted",null)},onClose:function(){console.log("Rewarded video ad closed."),window.SendResponseToUnity(e,!0,"AdClosed",null)},onError:function(n){console.error("Error while showing rewarded ad:",n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to show rewarded video ad.")}}})];case 2:return t.sent(),[3,4];case 3:return n=t.sent(),console.error("Failed to call rewarded ad:",n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to call rewarded ad."),[3,4];case 4:return[2]}}))}))},e.showBannerAd=function(e,n){return w(this,void 0,void 0,(function(){var t;return h(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,r.sent().adv.showBannerAdv()];case 2:return r.sent(),console.log("Banner ad shown at position: ".concat(n)),window.SendResponseToUnity(e,!0,"AdShown",null),[3,4];case 3:return t=r.sent(),console.error("Failed to show banner ad:",t),window.SendResponseToUnity(e,!1,null,t.message||"Failed to show banner ad."),[3,4];case 4:return[2]}}))}))},e.hideBannerAd=function(e){return w(this,void 0,void 0,(function(){var n;return h(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,t.sent().adv.hideBannerAdv()];case 2:return t.sent(),console.log("Banner ad hidden."),window.SendResponseToUnity(e,!0,"AdHidden",null),[3,4];case 3:return n=t.sent(),console.error("Failed to hide banner ad:",n),window.SendResponseToUnity(e,!1,null,n.message||"Failed to hide banner ad."),[3,4];case 4:return[2]}}))}))},e}(),v=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function s(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}u((r=r.apply(e,n||[])).next())}))},g=function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},m=function(){function e(){}return e.initializePayments=function(e){return v(this,void 0,void 0,(function(){var n,t;return g(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,window.yandexSDK];case 1:return[4,r.sent().getPayments({signed:!0})];case 2:return n=r.sent(),window.payments=n,window.SendResponseToUnity(e,!0,null,null),console.log("Payments initialized successfully."),[3,4];case 3:return t=r.sent(),console.error("Error initializing payments:",t.message||t),window.SendResponseToUnity(e,!1,null,t.message||"Failed to initialize payments."),[3,4];case 4:return[2]}}))}))},e.purchaseProduct=function(e,n){return v(this,arguments,void 0,(function(e,n,t){var r,o,a;return void 0===t&&(t=null),g(this,(function(s){switch(s.label){case 0:if(s.trys.push([0,2,,3]),!window.payments)throw new Error("Payments not initialized.");return[4,window.payments.purchase({id:n,developerPayload:t})];case 1:return r=s.sent(),o=JSON.stringify(r),window.SendResponseToUnity(e,!0,o,null),console.log("Product purchased successfully."),[3,3];case 2:return a=s.sent(),console.error("Error purchasing product:",a.message||a),window.SendResponseToUnity(e,!1,null,a.message||"Failed to purchase product."),[3,3];case 3:return[2]}}))}))},e.getPurchases=function(e){return v(this,void 0,void 0,(function(){var n,t,r;return g(this,(function(o){switch(o.label){case 0:if(o.trys.push([0,2,,3]),!window.payments)throw new Error("Payments not initialized.");return[4,window.payments.getPurchases()];case 1:return n=o.sent(),t=JSON.stringify(n),window.SendResponseToUnity(e,!0,t,null),console.log("User purchases fetched successfully."),[3,3];case 2:return r=o.sent(),console.error("Error fetching purchases:",r.message||r),window.SendResponseToUnity(e,!1,null,r.message||"Failed to fetch purchases."),[3,3];case 3:return[2]}}))}))},e.consumePurchase=function(e,n){return v(this,void 0,void 0,(function(){var t;return g(this,(function(r){switch(r.label){case 0:if(r.trys.push([0,2,,3]),!window.payments)throw new Error("Payments not initialized.");return[4,window.payments.consumePurchase(n)];case 1:return r.sent(),window.SendResponseToUnity(e,!0,null,null),console.log("Purchase consumed successfully."),[3,3];case 2:return t=r.sent(),console.error("Error consuming purchase:",t.message||t),window.SendResponseToUnity(e,!1,null,t.message||"Failed to consume purchase."),[3,3];case 3:return[2]}}))}))},e.getCatalog=function(e){return v(this,void 0,void 0,(function(){var n,t,r;return g(this,(function(o){switch(o.label){case 0:if(o.trys.push([0,2,,3]),!window.payments)throw new Error("Payments not initialized.");return[4,window.payments.getCatalog()];case 1:return n=o.sent(),t=JSON.stringify(n),window.SendResponseToUnity(e,!0,t,null),console.log("Product catalog fetched successfully.",t),[3,3];case 2:return r=o.sent(),console.error("Error fetching product catalog:",r.message||r),window.SendResponseToUnity(e,!1,null,r.message||"Failed to fetch product catalog."),[3,3];case 3:return[2]}}))}))},e}();window.YandexSDKVersion="1.1.6-beta",window.SendResponseToUnity=function(e,n,t,r){var o={requestId:e,status:n,data:null!=t?t:null,error:null!=r?r:n?null:"Unknown error"},a=JSON.stringify(o);unityInstance.SendMessage("YandexGamesSDK","OnJSResponse",a)},window.YandexSDKExports={AuthenticateUser:n.authenticateUser,SavePlayerData:i.savePlayerData,LoadPlayerData:i.loadPlayerData,CheckForInitialization:o.checkForInitialization,OnYandexGamesSDKReady:o.OnYandexGamesSDKReady,GetServerTime:o.getServerTime,GetEnvironment:o.getEnvironment,SubmitScore:l.submitScore,GetLeaderboardEntries:l.getLeaderboardEntries,GetPlayerEntry:l.getPlayerEntry,SetGameplayReady:f.setGameplayReady,SetGameplayStart:f.setGameplayStart,SetGameplayStop:f.setGameplayStop,HideBannerAd:p.hideBannerAd,ShowBannerAd:p.showBannerAd,ShowInterstitialAd:p.showInterstitialAd,ShowRewardedAd:p.showRewardedAd,InitializePayments:m.initializePayments,PurchaseProduct:m.purchaseProduct,GetPurchases:m.getPurchases,ConsumePurchase:m.consumePurchase,GetCatalog:m.getCatalog},window.addEventListener("load",(function(){o.initialize()}));var b=window;for(var S in e)b[S]=e[S];e.__esModule&&Object.defineProperty(b,"__esModule",{value:!0})})();