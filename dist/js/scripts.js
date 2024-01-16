var jsonDoc;$.fn.clearAnim=function(e){$(this).removeClass("animate"),$(this).get(0)&&(gsap.killTweensOf($(this)),void 0===e?gsap.set($(this),{clearProps:"all"}):gsap.set($(this),{clearProps:e}))},$.fn.pulseTwices=function(e,t){void 0===e&&(e=0),void 0===t&&(t=.6),$(this).get(0)&&gsap.to($(this),{alpha:.3,yoyo:!0,repeat:3,ease:Linear,duration:t,delay:e})},$.fn.pulse=function(e){void 0===e&&(e={}),void 0===e.delay&&(e.delay=.4),void 0===e.alpha&&(e.alpha=.5),$(this).get(0)&&gsap.to($(this),{alpha:e.alpha,yoyo:!0,repeat:void 0===e.repeat?-1:e.repeat%2==0?e.repeat+=1:e.repeat+=2,ease:Power1.easeOut,delay:e.delay})},$.fn.moveUpDown=function(e,t){return void 0===e&&(e=40),void 0===t&&(t=.7),this.each((function(){gsap.to($(this),{y:e,duration:t,repeat:-1,yoyo:!0,ease:"power1.inOut"})}))},$.fn.moveLeftRight=function(e,t,n){return void 0===n&&(n=.7),this.each((function(){gsap.fromTo($(this),{x:e},{x:t,duration:n,yoyo:!0,ease:"power1.inOut"})}))},$.fn.shake=function(e,t){void 0!==e&&null!=e||(e="4");var n=this;gsap.fromTo($(n),.08,{x:"-"+e},{x:e,yoyo:!0,repeat:7,ease:Power1.linear,onComplete:function(){$(n).css("transform","none")}})};var urlData="../../json/",path=window.location.pathname;function loadLocalizableResources(e,t){urlData=e,$.getJSON(urlData).done((function(e){var n;n=e,$("body").trigger("jsonReady"),function(e){$.each(e,(function(e,t){window[t.key]=replaceServiceCharacters(t.data.value)})),"function"==typeof t&&t()}(n),doLocalize()})).fail((function(e,n,o){t()}))}function replaceServiceCharacters(e){return e=replaceAll(e,"[nbsp]","&nbsp;"),e=replaceAll(e,"[","<"),e=replaceAll(e,"]",">"),e=replaceAll(e,"\\n","<br>")}function replaceAll(e,t,n){for(var o=e.indexOf(t);-1!=o;)o=(e=e.replace(t,n)).indexOf(t);return e}function querySt(e){var t=window.location.href;KeysValues=t.split(/[\?&]+/);for(var n=0;n<KeysValues.length;n++){var o=KeysValues[n].split("=");if(o[0]==e)return o[1]}}function doLocalize(){$(("undefined"==typeof containerSelector?"":containerSelector+" ")+"[lcz]").each((function(){$(this).html(window[$(this).attr("lcz")])}))}$((function(){moduleStart.init()}));var chapterStatus=[{isUnlock:!1,isComplete:!1},{isUnlock:!1,isComplete:!1},{isUnlock:!1,isComplete:!1},{isUnlock:!1,isComplete:!1},{isUnlock:!1,isComplete:!1}];function menuControl(){logoutBtn.on("click",(function(){resetGame(),_goto("select-lang-page")}))}function textChapStatusControl(){$(".text-chapter").each((function(e){chapterStatus[e].isUnlock?$(this).removeClass("inactive").addClass("active"):$(this).removeClass("active").addClass("inactive")}))}var cookieLanguage,userLanguage,BCP47LanguageTag,moduleStart={init:function(){moduleStart.preloadImg(),moduleStart.setLang(),moduleStart.setFirstPage(),moduleStart.calculateScreen(),moduleStart.callMenu()},preloadImg:function(){preloadImages("general"),preloadImages("select-lang-page")},setLang:function(){if(GetURLParameter("_lang")?cookieLanguage=GetURLParameter("_lang"):(window.location="?_lang=en-gb",cookieLanguage="en-gb"),"en-gb"===cookieLanguage)userLanguage="English -(UK)",BCP47LanguageTag="en-GB";else cookieLanguage="en-gb",userLanguage="English (UK)",BCP47LanguageTag="en-GB";setCookie("lang",cookieLanguage,365),$("html").attr("lang",BCP47LanguageTag)},calculateScreen:function(){responsive()},setFirstPage:function(){loadLocalizableResources("data/"+getCookie("lang")+"/base.json",(function(){GetURLParameter("_goto")?_goto(GetURLParameter("_goto")):_goto("select-lang-page")}))},callMenu:function(){menuControl()}},animationDuration=500;function loadPage(e,t,n,o){$("#main-container").css("overflow","hidden"),$("#logo, #logout, #nav-title, .tip-con").fadeOut(animationDuration),$("#content").fadeOut(animationDuration,(function(){$(this).empty().load(e,(function(){$("#main-container").attr("class",""),$("#main-container").attr("class",e.slice(10,-5)),loadLocalizableResources("data/".concat(cookieLanguage,"/").concat(n),(function(){$.getScript(t,(function(){$("#content").fadeIn(animationDuration)})),inArrayNavMod()})),"function"==typeof o&&o()}))}))}function _goto(e){loadPage("templates/".concat(e,".html"),"js/pages/".concat(e,".js"),"".concat(e,".json"))}function inArrayNavMod(){var e=$(".page").attr("id");["select-lang-page","result-page"].includes(e)?logoutBtn.hide():logoutBtn.fadeIn(animationDuration),["select-lang-page","welcome-page","main-page","result-page"].includes(e)?navTitle.hide():navTitle.fadeIn(animationDuration),["select-lang-page","welcome-page","result-page"].includes(e)&&logo.fadeIn(animationDuration),["main-page"].includes(e)?mainPageTip.show():mainPageTip.hide(),["main-page"].includes(e)?gameTip.hide():gameTip.show(),["select-lang-page","welcome-page","result-page"].includes(e)?tipCon.hide():tipCon.fadeIn(animationDuration)}function preloadImages(e){switch(e){case"general":$.preloadImages("assets/images/general/arrow-down.svg","assets/images/general/arrow-next.png","assets/images/general/cross-icon.png","assets/images/general/logout-icon.svg","assets/images/general/ysl-logo.png");break;case"chapter-game":$.preloadImages("assets/images/pages/chapter-game/game-bg-desktop.jpg","assets/images/pages/chapter-game/game-bg-mobile.jpg","assets/images/pages/chapter-game/hand.png","assets/images/pages/chapter-game/ysl-bottle-correct-bg-1.jpg","assets/images/pages/chapter-game/ysl-bottle-correct-bg-2.jpg","assets/images/pages/chapter-game/ysl-bottle-correct-left.png","assets/images/pages/chapter-game/ysl-bottle-correct-right.png","assets/images/pages/chapter-game/ysl-bottle-correct-right.png","assets/images/pages/chapter-game/ysl-bottle-left.png","assets/images/pages/chapter-game/ysl-bottle-right.png","assets/images/pages/chapter-game/ysl-drag-icon.png");break;case"main-page":$.preloadImages("assets/images/pages/main-page/main-page-bg-desktop.jpg","assets/images/pages/main-page/main-page-bg-mobile.jpg");break;case"welcome-page":$.preloadImages("assets/images/pages/welcome-page/question-mark-icon.svg");break;case"select-lang-page":$.preloadImages("assets/images/pages/welcome-page/welcome-page-bg-desktop.jpg","assets/images/pages/welcome-page/welcome-page-bg-mobile.jpg")}}function responsive(){function e(){var e,t=window.innerWidth,n=window.innerHeight;(t>n||t>768)&&t/n>=1.5?e=n/1080*100:(t>n||t>768)&&t/n<1.5?e=n/1080*100*.7:t<=768&&(e=t/1080*100),document.querySelector("html").style.fontSize=e+"%"}e(),$(window).resize((function(){e()}))}function setCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var a="expires="+o.toUTCString();document.cookie=e+"="+t+"; "+a}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}function GetURLParameter(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}}function isEmpty(e){return!$.trim(e.html())}function isVertical(){return $(window).height()>$(window).width()}function unlockChap(e){for(var t=0;t<e;t++)chapterStatus[t].isUnlock=!0}function completeChap(e){for(var t=0;t<e;t++)chapterStatus[t].isComplete=!0}function resetGame(){for(var e=0;e<chapterStatus.length;e++)chapterStatus[e].isUnlock=!1;$store["#chapter1-game"].yourAns=[!1,!1],$store["#chapter2-game"].yourAns=[!1,!1],$store["#chapter3-game"].yourAns=[!1,!1],$store["#chapter4-game"].yourAns=[!1,!1],$store["#chapter5-game"].yourAns=[!1,!1]}function resetGameChapters(){$store["#chapter1-game"].question=1,$store["#chapter2-game"].question=3,$store["#chapter3-game"].question=5,$store["#chapter4-game"].question=7,$store["#chapter5-game"].question=9}function Video(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this;n.video="string"==typeof e?$(e).get(0):e.get(0),$(n.video).off(),n.option={pauseOnClose:void 0===t.pauseOnClose||t.pauseOnClose,fullScreen:void 0===t.fullScreen||t.fullScreen,subtitle:void 0!==t.subtitle?t.subtitle:null,preload:void 0===t.preload||t.preload,muted:void 0!==t.muted?t.muted:n.video.muted,loop:void 0!==t.loop?t.loop:n.video.loop,autoplay:void 0!==t.autoplay?t.autoplay:n.video.autoplay,controls:void 0!==t.controls?t.controls:n.video.controls},n.video.muted=n.option.muted,n.video.loop=n.option.loop,n.video.autoplay=n.option.autoplay,n.video.controls=n.option.controls,$(e).attr({preload:n.option.preload}),n.event={onStart:t.onStart||function(){},onPlay:t.onPlay||function(){},onPlaying:t.onPlaying||function(){},onSeek:t.onSeek||function(){},onSeeking:t.onSeeking||function(){},onUpdate:t.onUpdate||function(){},onPause:t.onPause||function(){},onEnd:t.onEnd||function(){},onExitFullScreen:t.onExitFullScreen||function(){}},n.options=function(e,t){n.event[e]&&"function"==typeof t&&(n.event[e]=t)},n.option.subtitle&&(audioOrVideo.readyState>0?(track=document.createElement("track"),track.kind="subtitles",track.label=getCookie("lang"),track.srclang=getCookie("lang"),track.src=n.option.subtitle,track.default="default",track.addEventListener("load",(function(){this.mode="showing",n.video.textTracks[0].mode="showing"})),n.video.appendChild(track)):n.video.addEventListener("loadedmetadata",(function(){track=document.createElement("track"),track.kind="subtitles",track.label=getCookie("lang"),track.srclang=getCookie("lang"),track.src=n.option.subtitle,track.default="default",track.addEventListener("load",(function(){this.mode="showing",n.video.textTracks[0].mode="showing"})),this.appendChild(track)}))),n.openFullscreen=function(){n.video.requestFullscreen?n.video.requestFullscreen():n.video.mozRequestFullScreen?n.video.mozRequestFullScreen():n.video.webkitEnterFullscreen?n.video.webkitEnterFullscreen():n.video.msRequestFullscreen&&n.video.msRequestFullscreen()},n.exitFullscreen=function(){(document.fullscreenElement||document.mozFullScreenElement||n.video.webkitDisplayingFullscreen||document.msFullscreenElement)&&(document.exitFullscreen?document.exitFullscreen():n.video.webkitExitFullscreen?n.video.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen())},n.play=function(){if(/MSIE|Trident/.test(navigator.userAgent))n.video.play(),n.event.onStart(),n.option.fullScreen&&n.openFullscreen();else{var e=n.video.play();void 0!==e?e.then((function(e){n.event.onStart(),n.option.fullScreen&&n.openFullscreen()})).catch((function(e){console.info(e),$(".mute").show(),n.video.play(),n.event.onStart(),n.option.fullScreen&&n.openFullscreen()})):($(".mute").show(),n.video.muted=!0,n.event.onStart(),n.option.fullScreen&&n.openFullscreen())}},n.pause=function(){n.video.pause()},$(window).on("resize",(function(){var e=/MSIE|Trident/.test(navigator.userAgent),t=document.msFullscreenElement;e&&!t&&n.option.pauseOnClose&&(n.video.pause(),n.event.onExitFullScreen())})),$(n.video).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",(function(){!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)&&n.option.pauseOnClose&&(n.video.pause(),n.event.onExitFullScreen())})),$(n.video).on("webkitendfullscreen",(function(){/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)&&n.option.pauseOnClose&&(n.video.pause(),n.event.onExitFullScreen())})),$(n.video).on("play",(function(){n.event.onPlay()})),$(n.video).on("playing",(function(){n.event.onPlaying()})),$(n.video).on("seeking",(function(){n.event.onSeeking()})),$(n.video).on("seeked",(function(){n.event.onSeek()})),$(n.video).on("timeupdate",(function(){n.event.onUpdate()})),$(n.video).on("ended",(function(){n.exitFullscreen(),n.event.onEnd()})),$(n.video).on("pause",(function(){n.event.onPause()}))}function addVideo(e,t,n,o,a,i,r,s,l){var c=$("<div>",{id:n,height:a}).appendTo(e),u=$('<video allow="autoplay" autobuffer="auto" preload '+r+" "+l+s+' height="'+a+'" width="'+o+'" id="videoplay'+i+'">',{}).css({display:"block",margin:"0 auto"}).appendTo(c);$("<source>",{src:t+".mp4",type:"video/mp4"}).appendTo(u),$("<source>",{src:t+".webm",type:"video/webm"}).appendTo(u),$("<source>",{src:t+".ogv",type:"video/ogv"}).appendTo(u),$("<div>",{}).appendTo(c).addClass("videoSubBar")}function openFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function exitFullscreen(e){var t=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||document.msExitFullscreen,n=/iPad|iPhone|iPod/i.test(navigator.userAgent);t?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():n&&e.webkitExitFullscreen()}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}$("#tip-btn").on("click",(function(){$("#popup").show(),$(".content").removeClass("close").addClass("open"),$(this).fadeOut(200),setTimeout((function(){$(".desc").fadeIn(animationDuration)}),600)})),$("#close-btn").on("click",(function(){$(".desc").fadeOut(animationDuration),$(".content").removeClass("open").addClass("close"),setTimeout((function(){$("#popup").hide(),$("#tip-btn").show()}),600)})),$.preloadImages=function(){for(var e=0;e<arguments.length;e++)$("<img />").attr("src",arguments[e])},$.fn.offClick=function(){$(this).css("pointerEvents","none")};var body=$("body"),header=$("#header"),logo=$("#logo"),logoutBtn=$("#logout"),navTitle=$("#nav-title"),footer=$("#footer"),arrowNextCon=$(".arrow-next-con"),arrowNext=$("#arrow-next"),tipCon=$(".tip-con"),mainPageTip=$("#main-page-tip"),gameTip=$("#game-tip"),moduleData={yourScore:0};function initialData(){return{"#select-lang-page":{isComplete:!1,prevPage:"",nextPage:"welcome-page"},"#welcome-page":{isComplete:!1,prevPage:"select-lang-page",nextPage:"main-page"},"#chapter1-game":{isComplete:!1,prevPage:"",nextPage:"main-page",question:1,yourAns:[!1,!1]},"#chapter2-game":{isComplete:!1,prevPage:"",nextPage:"main-page",question:3,yourAns:[!1,!1]},"#chapter3-game":{isComplete:!1,prevPage:"",nextPage:"main-page",question:5,yourAns:[!1,!1]},"#chapter4-game":{isComplete:!1,prevPage:"",nextPage:"main-page",question:7,yourAns:[!1,!1]},"#chapter5-game":{isComplete:!1,prevPage:"",nextPage:"result-page",question:9,yourAns:[!1,!1]}}}var $store=_objectSpread({},initialData());