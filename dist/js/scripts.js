$.fn.clearAnim=function(t){$(this).removeClass("animate"),gsap.killTweensOf($(this)),void 0===t?gsap.set($(this),{clearProps:"all"}):gsap.set($(this),{clearProps:t})},$.fn.pulse=function(t){void 0===t&&(t={}),void 0===t.delay&&(t.delay=.4),void 0===t.alpha&&(t.alpha=.5),$(this).get(0)&&gsap.to($(this),{alpha:t.alpha,yoyo:!0,repeat:void 0===t.repeat?-1:t.repeat%2==0?t.repeat+=1:t.repeat+=2,ease:Power1.easeOut,delay:t.delay})},$((function(){moduleStart.init()}));var moduleStart={init:function(){moduleStart.calculateScreen(),moduleStart.setFirstPage()},calculateScreen:function(){responsive()},setFirstPage:function(){_goto("game-page")}},animationDuration=500;function _goto(t){loadPage("templates/".concat(t,".html"),"js/pages/".concat(t,".js"))}function loadPage(t,e,a){header.fadeOut(animationDuration),$("#content").fadeOut(animationDuration,(function(){$(this).empty().load(t,(function(){$.getScript(e,(function(){$("#content").fadeIn(animationDuration)})),inArrayNavMod(),"function"==typeof a&&a()}))}))}function inArrayNavMod(){var t=$(".page").attr("id");["correct-pwd-page","game-page"].includes(t)?header.hide():header.fadeIn(animationDuration)}function responsive(){function t(){var t,e=window.innerWidth,a=window.innerHeight;(e>a||e>768)&&e/a>=1.5?t=a/1080*100:(e>a||e>768)&&e/a<1.5?t=a/1080*100*.7:e<=768&&(t=e/1080*100),document.querySelector("html").style.fontSize=t+"%"}t(),$(window).resize((function(){t()}))}function rgbToHex(t,e,a){return"#"+t.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")+a.toString(16).padStart(2,"0")}var header=$("#header");