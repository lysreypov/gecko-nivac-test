$.fn.clearAnim=function(e){$(this).removeClass("animate"),gsap.killTweensOf($(this)),void 0===e?gsap.set($(this),{clearProps:"all"}):gsap.set($(this),{clearProps:e})},$.fn.pulse=function(e){void 0===e&&(e={}),void 0===e.delay&&(e.delay=.4),void 0===e.alpha&&(e.alpha=.5),$(this).get(0)&&!$(this).data("pulseAnimation")&&($(this).data("pulseAnimation",!0),gsap.to($(this),{alpha:e.alpha,yoyo:!0,repeat:e.repeat||-1,ease:Power1.easeOut,delay:e.delay,onComplete:function(){$(this.target).data("pulseAnimation",!1)}}))},$((function(){moduleStart.init()}));var moduleStart={init:function(){moduleStart.preloadImg(),moduleStart.calculateScreen(),moduleStart.setFirstPage()},preloadImg:function(){preloadImages("general"),preloadImages("login-page")},calculateScreen:function(){responsive()},setFirstPage:function(){_goto("login-page")}},animationDuration=500;function _goto(e){loadPage("templates/".concat(e,".html"),"js/pages/".concat(e,".js"))}function loadPage(e,a,t){header.fadeOut(animationDuration),$("#content").fadeOut(animationDuration,(function(){$(this).empty().load(e,(function(){$.getScript(a,(function(){$("#content").fadeIn(animationDuration)})),inArrayNavMod(),"function"==typeof t&&t()}))}))}function inArrayNavMod(){var e=$(".page").attr("id");["correct-pwd-page","game-page"].includes(e)?header.hide():header.fadeIn(animationDuration)}function preloadImages(e){switch(e){case"general":$.preloadImages("assets/images/general/arrow-button.png","assets/images/general/drag-icon.png","assets/images/general/hermes-bat.png","assets/images/general/hermes-logo.png");break;case"game-page":$.preloadImages("assets/images/pages/game-page/keys.png","assets/images/pages/game-page/labyrinth.png","assets/images/pages/game-page/player.png")}}function responsive(){function e(){var e,a=window.innerWidth,t=window.innerHeight;(a>t||a>768)&&a/t>=1.5?e=t/1080*100:(a>t||a>768)&&a/t<1.5?e=t/1080*100*.7:a<=768&&(e=a/1080*100),document.querySelector("html").style.fontSize=e+"%"}e(),$(window).resize((function(){e()}))}function rgbToHex(e,a,t){return"#"+e.toString(16).padStart(2,"0")+a.toString(16).padStart(2,"0")+t.toString(16).padStart(2,"0")}function offKey(){$(document).off("keydown")}function offSwipe(e){$.fn.swipe&&e.swipe("destroy")}$.preloadImages=function(){for(var e=0;e<arguments.length;e++)$("<img />").attr("src",arguments[e])};var header=$("#header"),password="";