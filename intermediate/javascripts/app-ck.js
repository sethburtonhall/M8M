jQuery(document).ready(function(e){function t(t){var n=t.closest("dl").find("dd.active"),r=t.children("a").attr("href")+"Tab",r=r.replace(/^.+#/,"#");n.removeClass("active");t.addClass("active");e(r).closest(".tabs-content").children("li").removeClass("active").hide();e(r).css("display","block").addClass("active")}e("dl.tabs dd a").on("click.fndtn",function(){t(e(this).parent("dd"))});window.location.hash&&(t(e('a[href="'+window.location.hash+'"]').parent("dd")),e.foundation.customForms.appendCustomMarkup());e(".alert-box").delegate("a.close","click",function(t){t.preventDefault();e(this).closest(".alert-box").fadeOut(function(){e(this).remove()})});e("input, textarea").placeholder();e(this).tooltips();var n=!1;Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)?(e(".nav-bar a.flyout-toggle").on("click.fndtn touchstart.fndtn",function(t){t.preventDefault();t=e(this).siblings(".flyout").first();n===!1&&(e(".nav-bar .flyout").not(t).slideUp(500),t.slideToggle(500,function(){n=!1}));n=!0}),e(".nav-bar>li.has-flyout").addClass("is-touch")):e(".nav-bar>li.has-flyout").hover(function(){e(this).children(".flyout").show()},function(){e(this).children(".flyout").hide()});e(".button.dropdown > ul").addClass("no-hover");e(".button.dropdown").on("click.fndtn touchstart.fndtn",function(e){e.stopPropagation()});e(".button.dropdown.split span").on("click.fndtn touchstart.fndtn",function(t){t.preventDefault();e(".button.dropdown").not(e(this).parent()).children("ul").removeClass("show-dropdown");e(this).siblings("ul").toggleClass("show-dropdown")});e(".button.dropdown").not(".split").on("click.fndtn touchstart.fndtn",function(){e(".button.dropdown").not(this).children("ul").removeClass("show-dropdown");e(this).children("ul").toggleClass("show-dropdown")});e("body, html").on("click.fndtn touchstart.fndtn",function(){e(".button.dropdown ul").removeClass("show-dropdown")});var r=e(".button.dropdown:not(.large):not(.small):not(.tiny)").outerHeight()-1,i=e(".button.large.dropdown").outerHeight()-1,s=e(".button.small.dropdown").outerHeight()-1,o=e(".button.tiny.dropdown").outerHeight()-1;e(".button.dropdown:not(.large):not(.small):not(.tiny) > ul").css("top",r);e(".button.dropdown.large > ul").css("top",i);e(".button.dropdown.small > ul").css("top",s);e(".button.dropdown.tiny > ul").css("top",o);e.foundation.customForms.appendCustomMarkup()});(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n();e(window).on("resize",n)})}})(jQuery);(function(e){e.fn.fitVids=function(t){var n={customSelector:null},r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];r.className="fit-vids-style";r.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";i.parentNode.insertBefore(r,i);t&&e.extend(n,t);return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];n.customSelector&&t.push(n.customSelector);e(this).find(t.join(",")).each(function(){var t=e(this);if(!(this.tagName.toLowerCase()=="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n=(this.tagName.toLowerCase()=="object"?t.attr("height"):t.height())/t.width();if(!t.attr("id")){var r="fitvid"+Math.floor(Math.random()*999999);t.attr("id",r)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",n*100+"%");t.removeAttr("height").removeAttr("width")}})})}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){return t==0?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var e=1.70158,s=0,o=r;if(t==0)return n;if((t/=i)==1)return n+r;s||(s=i*.3);o<Math.abs(r)?(o=r,e=s/4):e=s/(2*Math.PI)*Math.asin(r/o);return-(o*Math.pow(2,10*(t-=1))*Math.sin((t*i-e)*2*Math.PI/s))+n},easeOutElastic:function(e,t,n,r,i){var e=1.70158,s=0,o=r;if(t==0)return n;if((t/=i)==1)return n+r;s||(s=i*.3);o<Math.abs(r)?(o=r,e=s/4):e=s/(2*Math.PI)*Math.asin(r/o);return o*Math.pow(2,-10*t)*Math.sin((t*i-e)*2*Math.PI/s)+r+n},easeInOutElastic:function(e,t,n,r,i){var e=1.70158,s=0,o=r;if(t==0)return n;if((t/=i/2)==2)return n+r;s||(s=i*.3*1.5);o<Math.abs(r)?(o=r,e=s/4):e=s/(2*Math.PI)*Math.asin(r/o);return t<1?-0.5*o*Math.pow(2,10*(t-=1))*Math.sin((t*i-e)*2*Math.PI/s)+n:o*Math.pow(2,-10*(t-=1))*Math.sin((t*i-e)*2*Math.PI/s)*.5+r+n},easeInBack:function(e,t,n,r,i,s){s==void 0&&(s=1.70158);return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){s==void 0&&(s=1.70158);return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){s==void 0&&(s=1.70158);return(t/=i/2)<1?r/2*t*t*(((s*=1.525)+1)*t-s)+n:r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?r*7.5625*t*t+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return t<i/2?jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n:jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});(function(e,t,n,r){var i=n(e),s=n(t),o=n.fancybox=function(){o.open.apply(this,arguments)},u=!1,a=t.createTouch!==r,f=function(e){return n.type(e)==="string"},l=function(e,t){t&&f(e)&&e.indexOf("%")>0&&(e=o.getViewport()[t]/100*parseInt(e,10));return Math.round(e)+"px"};n.extend(o,{version:"2.0.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoResize:!a,autoCenter:!a,fitToView:!0,aspectRatio:!1,topRatio:.5,fixed:!1,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:300,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:300,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"fade",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"fade",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){o.close(!0);e&&!n.isArray(e)&&(e=e instanceof n?n(e).get():[e]);o.isActive=!0;o.opts=n.extend(!0,{},o.defaults,t);n.isPlainObject(t)&&t.keys!==r&&(o.opts.keys=t.keys?n.extend({},o.defaults.keys,t.keys):!1);o.group=e;o._start(o.opts.index||0)},cancel:function(){(!o.coming||!1!==o.trigger("onCancel"))&&(o.coming=null,o.hideLoading(),o.ajaxLoad&&o.ajaxLoad.abort(),o.ajaxLoad=null,o.imgPreload)&&(o.imgPreload.onload=o.imgPreload.onabort=o.imgPreload.onerror=null)},close:function(e){o.cancel();o.current&&!1!==o.trigger("beforeClose")&&(o.unbindEvents(),!o.isOpen||e&&e[0]===!0?(n(".fancybox-wrap").stop().trigger("onReset").remove(),o._afterZoomOut()):(o.isOpen=o.isOpened=!1,n(".fancybox-item, .fancybox-nav").remove(),o.wrap.stop(!0).removeClass("fancybox-opened"),o.inner.css("overflow","hidden"),o.transitions[o.current.closeMethod]()))},play:function(e){var t=function(){clearTimeout(o.player.timer)},r=function(){t();o.current&&o.player.isActive&&(o.player.timer=setTimeout(o.next,o.current.playSpeed))},i=function(){t();n("body").unbind(".player");o.player.isActive=!1;o.trigger("onPlayEnd")};o.player.isActive||e&&e[0]===!1?i():o.current&&(o.current.loop||o.current.index<o.group.length-1)&&(o.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":r,"onCancel.player beforeClose.player":i,"beforeLoad.player":t}),r(),o.trigger("onPlayStart"))},next:function(){o.current&&o.jumpto(o.current.index+1)},prev:function(){o.current&&o.jumpto(o.current.index-1)},jumpto:function(e){o.current&&(e=parseInt(e,10),o.group.length>1&&o.current.loop&&(e>=o.group.length?e=0:e<0&&(e=o.group.length-1)),o.group[e]!==r&&(o.cancel(),o._start(e)))},reposition:function(e,t){var n;o.isOpen&&(n=o._getPosition(t),e&&e.type==="scroll"?(delete n.position,o.wrap.stop(!0,!0).animate(n,200)):o.wrap.css(n))},update:function(e){o.isOpen&&(u||setTimeout(function(){var t=o.current,n=!e||e&&e.type==="orientationchange";if(u&&(u=!1,t)){if(!e||e.type!=="scroll"||n){t.autoSize&&t.type!=="iframe"&&(o.inner.height("auto"),t.height=o.inner.height());(t.autoResize||n)&&o._setDimension();t.canGrow&&t.type!=="iframe"&&o.inner.height("auto")}(t.autoCenter||n)&&o.reposition(e);o.trigger("onUpdate")}},200),u=!0)},toggle:function(){o.isOpen&&(o.current.fitToView=!o.current.fitToView,o.update())},hideLoading:function(){s.unbind("keypress.fb");n("#fancybox-loading").remove()},showLoading:function(){o.hideLoading();s.bind("keypress.fb",function(e){e.keyCode===27&&(e.preventDefault(),o.cancel())});n('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body")},getViewport:function(){return{x:i.scrollLeft(),y:i.scrollTop(),w:a&&e.innerWidth?e.innerWidth:i.width(),h:a&&e.innerHeight?e.innerHeight:i.height()}},unbindEvents:function(){o.wrap&&o.wrap.unbind(".fb");s.unbind(".fb");i.unbind(".fb")},bindEvents:function(){var e=o.current,t=e.keys;e&&(i.bind("resize.fb orientationchange.fb"+(e.autoCenter&&!e.fixed?" scroll.fb":""),o.update),t&&s.bind("keydown.fb",function(e){var r;r=e.target||e.srcElement;!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&(!r||!r.type&&!n(r).is("[contenteditable]"))&&(r=e.keyCode,n.inArray(r,t.close)>-1?(o.close(),e.preventDefault()):n.inArray(r,t.next)>-1?(o.next(),e.preventDefault()):n.inArray(r,t.prev)>-1&&(o.prev(),e.preventDefault()))}),n.fn.mousewheel&&e.mouseWheel&&o.group.length>1&&o.wrap.bind("mousewheel.fb",function(e,t){var n=e.target||null;t!==0&&(!n||n.clientHeight===0||n.scrollHeight===n.clientHeight&&n.scrollWidth===n.clientWidth)&&(e.preventDefault(),o[t>0?"prev":"next"]())}))},trigger:function(e,t){var r,i=t||o[n.inArray(e,["onCancel","beforeLoad","afterLoad"])>-1?"coming":"current"];if(i){n.isFunction(i[e])&&(r=i[e].apply(i,Array.prototype.slice.call(arguments,1)));if(r===!1)return!1;i.helpers&&n.each(i.helpers,function(t,r){r&&n.isPlainObject(o.helpers[t])&&n.isFunction(o.helpers[t][e])&&o.helpers[t][e](r,i)});n.event.trigger(e+".fb")}},isImage:function(e){return f(e)&&e.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)},isSWF:function(e){return f(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t={},r=o.group[e]||null,i,s,u;r&&(r.nodeType||r instanceof n)&&(i=!0,n.metadata&&(t=n(r).metadata()));t=n.extend(!0,{},o.opts,{index:e,element:r},n.isPlainObject(r)?r:t);n.each(["href","title","content","type"],function(e,s){t[s]=o.opts[s]||i&&n(r).attr(s)||t[s]||null});typeof t.margin=="number"&&(t.margin=[t.margin,t.margin,t.margin,t.margin]);t.modal&&n.extend(!0,t,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});o.coming=t;if(!1===o.trigger("beforeLoad"))o.coming=null;else{s=t.type;e=t.href||r;s||(i&&(s=n(r).data("fancybox-type"),s||(s=(s=r.className.match(/fancybox\.(\w+)/))?s[1]:null)),!s&&f(e)&&(o.isImage(e)?s="image":o.isSWF(e)?s="swf":e.match(/^#/)&&(s="inline")),s||(s=i?"inline":"html"),t.type=s);if(s==="inline"||s==="html"){t.content||(t.content=s==="inline"?n(f(e)?e.replace(/.*(?=#[^\s]+$)/,""):e):r);if(!t.content||!t.content.length)s=null}else e||(s=null);s==="ajax"&&f(e)&&(u=e.split(/\s+/,2),e=u.shift(),t.selector=u.shift());t.href=e;t.group=o.group;t.isDom=i;switch(s){case"image":o._loadImage();break;case"ajax":o._loadAjax();break;case"inline":case"iframe":case"swf":case"html":o._afterLoad();break;default:o._error("type")}}},_error:function(e){o.hideLoading();n.extend(o.coming,{type:"html",autoSize:!0,minWidth:0,minHeight:0,padding:15,hasError:e,content:o.coming.tpl.error});o._afterLoad()},_loadImage:function(){var e=o.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null;o.coming.width=this.width;o.coming.height=this.height;o._afterLoad()};e.onerror=function(){this.onload=this.onerror=null;o._error("image")};e.src=o.coming.href;(e.complete===r||!e.complete)&&o.showLoading()},_loadAjax:function(){o.showLoading();o.ajaxLoad=n.ajax(n.extend({},o.coming.ajax,{url:o.coming.href,error:function(e,t){o.coming&&t!=="abort"?o._error("ajax",e):o.hideLoading()},success:function(e,t){t==="success"&&(o.coming.content=e,o._afterLoad())}}))},_preloadImages:function(){var e=o.group,t=o.current,r=e.length,i,s,u,a=Math.min(t.preload,r-1);if(t.preload&&!(e.length<2))for(u=1;u<=a;u+=1)if(i=e[(t.index+u)%r],s=i.href||n(i).attr("href")||i,i.type==="image"||o.isImage(s))(new Image).src=s},_afterLoad:function(){o.hideLoading();!o.coming||!1===o.trigger("afterLoad",o.current)?o.coming=!1:(o.isOpened?(n(".fancybox-item, .fancybox-nav").remove(),o.wrap.stop(!0).removeClass("fancybox-opened"),o.inner.css("overflow","hidden"),o.transitions[o.current.prevMethod]()):(n(".fancybox-wrap").stop().trigger("onReset").remove(),o.trigger("afterClose")),o.unbindEvents(),o.isOpen=!1,o.current=o.coming,o.wrap=n(o.current.tpl.wrap).addClass("fancybox-"+(a?"mobile":"desktop")+" fancybox-type-"+o.current.type+" fancybox-tmp "+o.current.wrapCSS).appendTo("body"),o.skin=n(".fancybox-skin",o.wrap).css("padding",l(o.current.padding)),o.outer=n(".fancybox-outer",o.wrap),o.inner=n(".fancybox-inner",o.wrap),o._setContent())},_setContent:function(){var e=o.current,t=e.content,r=e.type,i=e.minWidth,s=e.minHeight,u=e.maxWidth,f=e.maxHeight;switch(r){case"inline":case"ajax":case"html":e.selector?t=n("<div>").html(t).find(e.selector):t instanceof n&&(t.parent().hasClass("fancybox-inner")&&t.parents(".fancybox-wrap").unbind("onReset"),t=t.show().detach(),n(o.wrap).bind("onReset",function(){t.appendTo("body").hide()}));if(e.autoSize){i=n('<div class="fancybox-wrap '+o.current.wrapCSS+' fancybox-tmp"></div>').appendTo("body").css({minWidth:l(i,"w"),minHeight:l(s,"h"),maxWidth:l(u,"w"),maxHeight:l(f,"h")}).append(t);e.width=i.width();e.height=i.height();i.width(o.current.width);i.height()>e.height&&(i.width(e.width+1),e.width=i.width(),e.height=i.height());t=i.contents().detach();i.remove()}break;case"image":t=e.tpl.image.replace("{href}",e.href);e.aspectRatio=!0;break;case"swf":t=e.tpl.swf.replace(/\{width\}/g,e.width).replace(/\{height\}/g,e.height).replace(/\{href\}/g,e.href);break;case"iframe":t=n(e.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr("scrolling",e.scrolling).attr("src",e.href),e.scrolling=a?"scroll":"auto"}if(r==="image"||r==="swf")e.autoSize=!1,e.scrolling="visible";r==="iframe"&&e.autoSize?(o.showLoading(),o._setDimension(),o.inner.css("overflow",e.scrolling),t.bind({onCancel:function(){n(this).unbind();o._afterZoomOut()},load:function(){o.hideLoading();try{this.contentWindow.document.location&&(o.current.height=n(this).contents().find("body").height())}catch(e){o.current.autoSize=!1}o[o.isOpen?"_afterZoomIn":"_beforeShow"]()}}).appendTo(o.inner)):(o.inner.append(t),o._beforeShow())},_beforeShow:function(){o.coming=null;o.trigger("beforeShow");o._setDimension();o.wrap.hide().removeClass("fancybox-tmp");o.bindEvents();o._preloadImages();o.transitions[o.isOpened?o.current.nextMethod:o.current.openMethod]()},_setDimension:function(){var e=o.wrap,t=o.inner,r=o.current,i=o.getViewport(),s=r.margin,u=r.padding*2,a=r.width,h=r.height,p=r.maxWidth+u,d=r.maxHeight+u,v=r.minWidth+u,m=r.minHeight+u,g;i.w-=s[1]+s[3];i.h-=s[0]+s[2];f(a)&&a.indexOf("%")>0&&(a=(i.w-u)*parseFloat(a)/100);f(h)&&h.indexOf("%")>0&&(h=(i.h-u)*parseFloat(h)/100);s=a/h;a+=u;h+=u;r.fitToView&&(p=Math.min(i.w,p),d=Math.min(i.h,d));r.aspectRatio?(a>p&&(a=p,h=(a-u)/s+u),h>d&&(h=d,a=(h-u)*s+u),a<v&&(a=v,h=(a-u)/s+u),h<m&&(h=m,a=(h-u)*s+u)):(a=Math.max(v,Math.min(a,p)),h=Math.max(m,Math.min(h,d)));a=Math.round(a);h=Math.round(h);n(e.add(t)).width("auto").height("auto");t.width(a-u).height(h-u);e.width(a);g=e.height();if(a>p||g>d)for(;(a>p||g>d)&&a>v&&g>m;)h-=10,r.aspectRatio?(a=Math.round((h-u)*s+u),a<v&&(a=v,h=(a-u)/s+u)):a-=10,t.width(a-u).height(h-u),e.width(a),g=e.height();r.dim={width:l(a),height:l(g)};r.canGrow=r.autoSize&&h>m&&h<d;r.canShrink=!1;r.canExpand=!1;a-u<r.width||h-u<r.height?r.canExpand=!0:(a>i.w||g>i.h)&&a>v&&h>m&&(r.canShrink=!0);o.innerSpace=g-u-t.height()},_getPosition:function(e){var t=o.current,n=o.getViewport(),r=t.margin,i=o.wrap.width()+r[1]+r[3],s=o.wrap.height()+r[0]+r[2],u={position:"absolute",top:r[0]+n.y,left:r[3]+n.x};t.autoCenter&&t.fixed&&!e&&s<=n.h&&i<=n.w&&(u={position:"fixed",top:r[0],left:r[3]});u.top=l(Math.max(u.top,u.top+(n.h-s)*t.topRatio));u.left=l(Math.max(u.left,u.left+(n.w-i)*.5));return u},_afterZoomIn:function(){var e=o.current,t=e?e.scrolling:"no";e&&(o.isOpen=o.isOpened=!0,o.wrap.addClass("fancybox-opened"),o.inner.css("overflow",t==="yes"?"scroll":t==="no"?"hidden":t),o.trigger("afterShow"),o.update(),(e.closeClick||e.nextClick)&&o.inner.css("cursor","pointer").bind("click.fb",function(t){!n(t.target).is("a")&&!n(t.target).parent().is("a")&&o[e.closeClick?"close":"next"]()}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(o.skin).bind("click.fb",o.close),e.arrows&&o.group.length>1&&((e.loop||e.index>0)&&n(e.tpl.prev).appendTo(o.outer).bind("click.fb",o.prev),(e.loop||e.index<o.group.length-1)&&n(e.tpl.next).appendTo(o.outer).bind("click.fb",o.next)),o.opts.autoPlay&&!o.player.isActive)&&(o.opts.autoPlay=!1,o.play())},_afterZoomOut:function(){var e=o.current;o.wrap.trigger("onReset").remove();n.extend(o,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,skin:null,outer:null,inner:null});o.trigger("afterClose",e)}});o.transitions={getOrigPosition:function(){var e=o.current,t=e.element,r=e.padding,i=n(e.orig),s={},u=50,a=50;!i.length&&e.isDom&&n(t).is(":visible")&&(i=n(t).find("img:first"),i.length||(i=n(t)));i.length?(s=i.offset(),i.is("img")&&(u=i.outerWidth(),a=i.outerHeight())):(e=o.getViewport(),s.top=e.y+(e.h-a)*.5,s.left=e.x+(e.w-u)*.5);return s={top:l(s.top-r),left:l(s.left-r),width:l(u+r*2),height:l(a+r*2)}},step:function(e,t){var n=t.prop,r,i;if(n==="width"||n==="height")r=Math.ceil(e-o.current.padding*2),n==="height"&&(i=(e-t.start)/(t.end-t.start),t.start>t.end&&(i=1-i),r-=o.innerSpace*i),o.inner[n](r)},zoomIn:function(){var e=o.wrap,t=o.current,r=t.openEffect,i=r==="elastic",s=n.extend({},t.dim,o._getPosition(i)),u=n.extend({opacity:1},s);delete u.position;if(i){s=this.getOrigPosition();t.openOpacity&&(s.opacity=0);o.outer.add(o.inner).width("auto").height("auto")}else r==="fade"&&(s.opacity=0);e.css(s).show().animate(u,{duration:r==="none"?0:t.openSpeed,easing:t.openEasing,step:i?this.step:null,complete:o._afterZoomIn})},zoomOut:function(){var e=o.wrap,t=o.current,n=t.openEffect,r=n==="elastic",i={opacity:0};r&&(e.css("position")==="fixed"&&e.css(o._getPosition(!0)),i=this.getOrigPosition(),t.closeOpacity)&&(i.opacity=0);e.animate(i,{duration:n==="none"?0:t.closeSpeed,easing:t.closeEasing,step:r?this.step:null,complete:o._afterZoomOut})},changeIn:function(){var e=o.wrap,t=o.current,n=t.nextEffect,r=n==="elastic",i=o._getPosition(r),s={opacity:1};i.opacity=0;r&&(i.top=l(parseInt(i.top,10)-200),s.top="+=200px");e.css(i).show().animate(s,{duration:n==="none"?0:t.nextSpeed,easing:t.nextEasing,complete:o._afterZoomIn})},changeOut:function(){var e=o.wrap,t=o.current,r=t.prevEffect,i={opacity:0};e.removeClass("fancybox-opened");r==="elastic"&&(i.top="+=200px");e.animate(i,{duration:r==="none"?0:t.prevSpeed,easing:t.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}};o.helpers.overlay={overlay:null,update:function(){var e,r;this.overlay.width("100%").height("100%");n.browser.msie||a?(e=Math.max(t.documentElement.scrollWidth,t.body.scrollWidth),r=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),e=e<r?i.width():e):e=s.width();this.overlay.width(e).height(s.height())},beforeShow:function(e){this.overlay||(e=n.extend(!0,{},o.defaults.helpers.overlay,e),this.overlay=n('<div id="fancybox-overlay"></div>').css(e.css).appendTo("body"),e.closeClick&&this.overlay.bind("click.fb",o.close),o.current.fixed&&!a?this.overlay.addClass("overlay-fixed"):(this.update(),this.onUpdate=function(){this.update()}),this.overlay.fadeTo(e.speedIn,e.opacity))},afterClose:function(e){this.overlay&&this.overlay.fadeOut(e.speedOut||0,function(){n(this).remove()});this.overlay=null}};o.helpers.title={beforeShow:function(e){var t;if(t=o.current.title)t=n('<div class="fancybox-title fancybox-title-'+e.type+'-wrap">'+t+"</div>").appendTo("body"),e.type==="float"&&(t.width(t.width()),t.wrapInner('<span class="child"></span>'),o.current.margin[2]+=Math.abs(parseInt(t.css("margin-bottom"),10))),t.appendTo(e.type==="over"?o.inner:e.type==="outside"?o.wrap:o.skin)}};n.fn.fancybox=function(e){var t=n(this),r=this.selector||"",i,u=function(s){var u=this,a=i,f;!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey&&!n(u).is(".fancybox-wrap")&&(s.preventDefault(),s=e.groupAttr||"data-fancybox-group",f=n(u).attr(s),f||(s="rel",f=u[s]),f&&f!==""&&f!=="nofollow"&&(u=r.length?n(r):t,u=u.filter("["+s+'="'+f+'"]'),a=u.index(this)),e.index=a,o.open(u,e))},e=e||{};i=e.index||0;r?s.undelegate(r,"click.fb-start").delegate(r,"click.fb-start",u):t.unbind("click.fb-start").bind("click.fb-start",u);return this};n(t).ready(function(){o.defaults.fixed=n.support.fixedPosition||!(n.browser.msie&&n.browser.version<=6)&&!a})})(window,document,jQuery);