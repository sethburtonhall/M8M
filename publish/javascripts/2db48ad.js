jQuery(document).ready(function(d){function a(b){var c=b.closest("dl").find("dd.active"),a=b.children("a").attr("href")+"Tab",a=a.replace(/^.+#/,"#");c.removeClass("active");b.addClass("active");d(a).closest(".tabs-content").children("li").removeClass("active").hide();d(a).css("display","block").addClass("active")}d("dl.tabs dd a").on("click.fndtn",function(){a(d(this).parent("dd"))});window.location.hash&&(a(d('a[href="'+window.location.hash+'"]').parent("dd")),d.foundation.customForms.appendCustomMarkup());
d(".alert-box").delegate("a.close","click",function(b){b.preventDefault();d(this).closest(".alert-box").fadeOut(function(){d(this).remove()})});d("input, textarea").placeholder();d(this).tooltips();var c=!1;Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)?(d(".nav-bar a.flyout-toggle").on("click.fndtn touchstart.fndtn",function(b){b.preventDefault();b=d(this).siblings(".flyout").first();c===!1&&(d(".nav-bar .flyout").not(b).slideUp(500),b.slideToggle(500,function(){c=!1}));c=!0}),d(".nav-bar>li.has-flyout").addClass("is-touch")):
d(".nav-bar>li.has-flyout").hover(function(){d(this).children(".flyout").show()},function(){d(this).children(".flyout").hide()});d(".button.dropdown > ul").addClass("no-hover");d(".button.dropdown").on("click.fndtn touchstart.fndtn",function(b){b.stopPropagation()});d(".button.dropdown.split span").on("click.fndtn touchstart.fndtn",function(b){b.preventDefault();d(".button.dropdown").not(d(this).parent()).children("ul").removeClass("show-dropdown");d(this).siblings("ul").toggleClass("show-dropdown")});
d(".button.dropdown").not(".split").on("click.fndtn touchstart.fndtn",function(){d(".button.dropdown").not(this).children("ul").removeClass("show-dropdown");d(this).children("ul").toggleClass("show-dropdown")});d("body, html").on("click.fndtn touchstart.fndtn",function(){d(".button.dropdown ul").removeClass("show-dropdown")});var e=d(".button.dropdown:not(.large):not(.small):not(.tiny)").outerHeight()-1,f=d(".button.large.dropdown").outerHeight()-1,g=d(".button.small.dropdown").outerHeight()-1,b=
d(".button.tiny.dropdown").outerHeight()-1;d(".button.dropdown:not(.large):not(.small):not(.tiny) > ul").css("top",e);d(".button.dropdown.large > ul").css("top",f);d(".button.dropdown.small > ul").css("top",g);d(".button.dropdown.tiny > ul").css("top",b);d.foundation.customForms.appendCustomMarkup()});
(function(d){d.fn.fitText=function(a,c){var e=a||1,f=d.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},c);return this.each(function(){var c=d(this),b=function(){c.css("font-size",Math.max(Math.min(c.width()/(e*10),parseFloat(f.maxFontSize)),parseFloat(f.minFontSize)))};b();d(window).on("resize",b)})}})(jQuery);
(function(d){d.fn.fitVids=function(a){var c={customSelector:null},e=document.createElement("div"),f=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];e.className="fit-vids-style";e.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
f.parentNode.insertBefore(e,f);a&&d.extend(c,a);return this.each(function(){var a=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];c.customSelector&&a.push(c.customSelector);d(this).find(a.join(",")).each(function(){var b=d(this);if(!(this.tagName.toLowerCase()=="embed"&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c=(this.tagName.toLowerCase()=="object"?b.attr("height"):b.height())/b.width();
if(!b.attr("id")){var a="fitvid"+Math.floor(Math.random()*999999);b.attr("id",a)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",c*100+"%");b.removeAttr("height").removeAttr("width")}})})}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(d,a,c,e,f){return jQuery.easing[jQuery.easing.def](d,a,c,e,f)},easeInQuad:function(d,a,c,e,f){return e*(a/=f)*a+c},easeOutQuad:function(d,a,c,e,f){return-e*(a/=f)*(a-2)+c},easeInOutQuad:function(d,a,c,e,f){return(a/=f/2)<1?e/2*a*a+c:-e/2*(--a*(a-2)-1)+c},easeInCubic:function(d,a,c,e,f){return e*(a/=f)*a*a+c},easeOutCubic:function(d,a,c,e,f){return e*((a=a/f-1)*a*a+1)+c},easeInOutCubic:function(d,a,c,e,f){return(a/=f/2)<1?e/2*a*a*a+c:e/
2*((a-=2)*a*a+2)+c},easeInQuart:function(d,a,c,e,f){return e*(a/=f)*a*a*a+c},easeOutQuart:function(d,a,c,e,f){return-e*((a=a/f-1)*a*a*a-1)+c},easeInOutQuart:function(d,a,c,e,f){return(a/=f/2)<1?e/2*a*a*a*a+c:-e/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(d,a,c,e,f){return e*(a/=f)*a*a*a*a+c},easeOutQuint:function(d,a,c,e,f){return e*((a=a/f-1)*a*a*a*a+1)+c},easeInOutQuint:function(d,a,c,e,f){return(a/=f/2)<1?e/2*a*a*a*a*a+c:e/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(d,a,c,e,f){return-e*Math.cos(a/
f*(Math.PI/2))+e+c},easeOutSine:function(d,a,c,e,f){return e*Math.sin(a/f*(Math.PI/2))+c},easeInOutSine:function(d,a,c,e,f){return-e/2*(Math.cos(Math.PI*a/f)-1)+c},easeInExpo:function(d,a,c,e,f){return a==0?c:e*Math.pow(2,10*(a/f-1))+c},easeOutExpo:function(d,a,c,e,f){return a==f?c+e:e*(-Math.pow(2,-10*a/f)+1)+c},easeInOutExpo:function(d,a,c,e,f){return a==0?c:a==f?c+e:(a/=f/2)<1?e/2*Math.pow(2,10*(a-1))+c:e/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(d,a,c,e,f){return-e*(Math.sqrt(1-(a/=f)*
a)-1)+c},easeOutCirc:function(d,a,c,e,f){return e*Math.sqrt(1-(a=a/f-1)*a)+c},easeInOutCirc:function(d,a,c,e,f){return(a/=f/2)<1?-e/2*(Math.sqrt(1-a*a)-1)+c:e/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(d,a,c,e,f){var d=1.70158,g=0,b=e;if(a==0)return c;if((a/=f)==1)return c+e;g||(g=f*0.3);b<Math.abs(e)?(b=e,d=g/4):d=g/(2*Math.PI)*Math.asin(e/b);return-(b*Math.pow(2,10*(a-=1))*Math.sin((a*f-d)*2*Math.PI/g))+c},easeOutElastic:function(d,a,c,e,f){var d=1.70158,g=0,b=e;if(a==0)return c;if((a/=
f)==1)return c+e;g||(g=f*0.3);b<Math.abs(e)?(b=e,d=g/4):d=g/(2*Math.PI)*Math.asin(e/b);return b*Math.pow(2,-10*a)*Math.sin((a*f-d)*2*Math.PI/g)+e+c},easeInOutElastic:function(d,a,c,e,f){var d=1.70158,g=0,b=e;if(a==0)return c;if((a/=f/2)==2)return c+e;g||(g=f*0.3*1.5);b<Math.abs(e)?(b=e,d=g/4):d=g/(2*Math.PI)*Math.asin(e/b);return a<1?-0.5*b*Math.pow(2,10*(a-=1))*Math.sin((a*f-d)*2*Math.PI/g)+c:b*Math.pow(2,-10*(a-=1))*Math.sin((a*f-d)*2*Math.PI/g)*0.5+e+c},easeInBack:function(d,a,c,e,f,g){g==void 0&&
(g=1.70158);return e*(a/=f)*a*((g+1)*a-g)+c},easeOutBack:function(d,a,c,e,f,g){g==void 0&&(g=1.70158);return e*((a=a/f-1)*a*((g+1)*a+g)+1)+c},easeInOutBack:function(d,a,c,e,f,g){g==void 0&&(g=1.70158);return(a/=f/2)<1?e/2*a*a*(((g*=1.525)+1)*a-g)+c:e/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+c},easeInBounce:function(d,a,c,e,f){return e-jQuery.easing.easeOutBounce(d,f-a,0,e,f)+c},easeOutBounce:function(d,a,c,e,f){return(a/=f)<1/2.75?e*7.5625*a*a+c:a<2/2.75?e*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?e*
(7.5625*(a-=2.25/2.75)*a+0.9375)+c:e*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(d,a,c,e,f){return a<f/2?jQuery.easing.easeInBounce(d,a*2,0,e,f)*0.5+c:jQuery.easing.easeOutBounce(d,a*2-f,0,e,f)*0.5+e*0.5+c}});
(function(d,a,c,e){var f=c(d),g=c(a),b=c.fancybox=function(){b.open.apply(this,arguments)},C=!1,m=a.createTouch!==e,v=function(b){return c.type(b)==="string"},q=function(h,c){c&&v(h)&&h.indexOf("%")>0&&(h=b.getViewport()[c]/100*parseInt(h,10));return Math.round(h)+"px"};c.extend(b,{version:"2.0.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoResize:!m,autoCenter:!m,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!1,scrolling:"auto",
wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+
(c.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:300,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:300,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"fade",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"fade",prevSpeed:300,
prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}},onCancel:c.noop,beforeLoad:c.noop,afterLoad:c.noop,beforeShow:c.noop,afterShow:c.noop,beforeClose:c.noop,afterClose:c.noop},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(h,a){b.close(!0);
h&&!c.isArray(h)&&(h=h instanceof c?c(h).get():[h]);b.isActive=!0;b.opts=c.extend(!0,{},b.defaults,a);if(c.isPlainObject(a)&&a.keys!==e)b.opts.keys=a.keys?c.extend({},b.defaults.keys,a.keys):!1;b.group=h;b._start(b.opts.index||0)},cancel:function(){if(!(b.coming&&!1===b.trigger("onCancel"))&&(b.coming=null,b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload))b.imgPreload.onload=b.imgPreload.onabort=b.imgPreload.onerror=null},close:function(h){b.cancel();if(b.current&&!1!==
b.trigger("beforeClose"))b.unbindEvents(),!b.isOpen||h&&h[0]===!0?(c(".fancybox-wrap").stop().trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,c(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0).removeClass("fancybox-opened"),b.inner.css("overflow","hidden"),b.transitions[b.current.closeMethod]())},play:function(h){var a=function(){clearTimeout(b.player.timer)},d=function(){a();if(b.current&&b.player.isActive)b.player.timer=setTimeout(b.next,b.current.playSpeed)},e=function(){a();
c("body").unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(b.player.isActive||h&&h[0]===!1)e();else if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,c("body").bind({"afterShow.player onUpdate.player":d,"onCancel.player beforeClose.player":e,"beforeLoad.player":a}),d(),b.trigger("onPlayStart")},next:function(){b.current&&b.jumpto(b.current.index+1)},prev:function(){b.current&&b.jumpto(b.current.index-1)},jumpto:function(h){b.current&&(h=parseInt(h,
10),b.group.length>1&&b.current.loop&&(h>=b.group.length?h=0:h<0&&(h=b.group.length-1)),b.group[h]!==e&&(b.cancel(),b._start(h)))},reposition:function(h,a){var c;b.isOpen&&(c=b._getPosition(a),h&&h.type==="scroll"?(delete c.position,b.wrap.stop(!0,!0).animate(c,200)):b.wrap.css(c))},update:function(h){b.isOpen&&(C||setTimeout(function(){var c=b.current,a=!h||h&&h.type==="orientationchange";if(C&&(C=!1,c)){if(!h||h.type!=="scroll"||a){if(c.autoSize&&c.type!=="iframe")b.inner.height("auto"),c.height=
b.inner.height();(c.autoResize||a)&&b._setDimension();c.canGrow&&c.type!=="iframe"&&b.inner.height("auto")}(c.autoCenter||a)&&b.reposition(h);b.trigger("onUpdate")}},200),C=!0)},toggle:function(){if(b.isOpen)b.current.fitToView=!b.current.fitToView,b.update()},hideLoading:function(){g.unbind("keypress.fb");c("#fancybox-loading").remove()},showLoading:function(){b.hideLoading();g.bind("keypress.fb",function(c){c.keyCode===27&&(c.preventDefault(),b.cancel())});c('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body")},
getViewport:function(){return{x:f.scrollLeft(),y:f.scrollTop(),w:m&&d.innerWidth?d.innerWidth:f.width(),h:m&&d.innerHeight?d.innerHeight:f.height()}},unbindEvents:function(){b.wrap&&b.wrap.unbind(".fb");g.unbind(".fb");f.unbind(".fb")},bindEvents:function(){var a=b.current,d=a.keys;a&&(f.bind("resize.fb orientationchange.fb"+(a.autoCenter&&!a.fixed?" scroll.fb":""),b.update),d&&g.bind("keydown.fb",function(a){var h;h=a.target||a.srcElement;if(!a.ctrlKey&&!a.altKey&&!a.shiftKey&&!a.metaKey&&(!h||!h.type&&
!c(h).is("[contenteditable]")))h=a.keyCode,c.inArray(h,d.close)>-1?(b.close(),a.preventDefault()):c.inArray(h,d.next)>-1?(b.next(),a.preventDefault()):c.inArray(h,d.prev)>-1&&(b.prev(),a.preventDefault())}),c.fn.mousewheel&&a.mouseWheel&&b.group.length>1&&b.wrap.bind("mousewheel.fb",function(a,c){var h=a.target||null;if(c!==0&&(!h||h.clientHeight===0||h.scrollHeight===h.clientHeight&&h.scrollWidth===h.clientWidth))a.preventDefault(),b[c>0?"prev":"next"]()}))},trigger:function(a,d){var e,f=d||b[c.inArray(a,
["onCancel","beforeLoad","afterLoad"])>-1?"coming":"current"];if(f){c.isFunction(f[a])&&(e=f[a].apply(f,Array.prototype.slice.call(arguments,1)));if(e===!1)return!1;f.helpers&&c.each(f.helpers,function(d,e){if(e&&c.isPlainObject(b.helpers[d])&&c.isFunction(b.helpers[d][a]))b.helpers[d][a](e,f)});c.event.trigger(a+".fb")}},isImage:function(b){return v(b)&&b.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)},isSWF:function(b){return v(b)&&b.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e=b.group[a]||
null,f,k,j;if(e&&(e.nodeType||e instanceof c))f=!0,c.metadata&&(d=c(e).metadata());d=c.extend(!0,{},b.opts,{index:a,element:e},c.isPlainObject(e)?e:d);c.each(["href","title","content","type"],function(a,h){d[h]=b.opts[h]||f&&c(e).attr(h)||d[h]||null});if(typeof d.margin==="number")d.margin=[d.margin,d.margin,d.margin,d.margin];d.modal&&c.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});b.coming=d;if(!1===
b.trigger("beforeLoad"))b.coming=null;else{k=d.type;a=d.href||e;if(!k)f&&(k=c(e).data("fancybox-type"),k||(k=(k=e.className.match(/fancybox\.(\w+)/))?k[1]:null)),!k&&v(a)&&(b.isImage(a)?k="image":b.isSWF(a)?k="swf":a.match(/^#/)&&(k="inline")),k||(k=f?"inline":"html"),d.type=k;if(k==="inline"||k==="html"){if(!d.content)d.content=k==="inline"?c(v(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):e;if(!d.content||!d.content.length)k=null}else a||(k=null);if(k==="ajax"&&v(a))j=a.split(/\s+/,2),a=j.shift(),d.selector=
j.shift();d.href=a;d.group=b.group;d.isDom=f;switch(k){case "image":b._loadImage();break;case "ajax":b._loadAjax();break;case "inline":case "iframe":case "swf":case "html":b._afterLoad();break;default:b._error("type")}}},_error:function(a){b.hideLoading();c.extend(b.coming,{type:"html",autoSize:!0,minWidth:0,minHeight:0,padding:15,hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width;b.coming.height=this.height;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;(a.complete===e||!a.complete)&&b.showLoading()},_loadAjax:function(){b.showLoading();b.ajaxLoad=c.ajax(c.extend({},b.coming.ajax,{url:b.coming.href,error:function(a,c){b.coming&&c!=="abort"?b._error("ajax",a):b.hideLoading()},success:function(a,c){if(c==="success")b.coming.content=a,b._afterLoad()}}))},_preloadImages:function(){var a=b.group,d=b.current,
e=a.length,f,k,j,i=Math.min(d.preload,e-1);if(d.preload&&!(a.length<2))for(j=1;j<=i;j+=1)if(f=a[(d.index+j)%e],k=f.href||c(f).attr("href")||f,f.type==="image"||b.isImage(k))(new Image).src=k},_afterLoad:function(){b.hideLoading();!b.coming||!1===b.trigger("afterLoad",b.current)?b.coming=!1:(b.isOpened?(c(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0).removeClass("fancybox-opened"),b.inner.css("overflow","hidden"),b.transitions[b.current.prevMethod]()):(c(".fancybox-wrap").stop().trigger("onReset").remove(),
b.trigger("afterClose")),b.unbindEvents(),b.isOpen=!1,b.current=b.coming,b.wrap=c(b.current.tpl.wrap).addClass("fancybox-"+(m?"mobile":"desktop")+" fancybox-type-"+b.current.type+" fancybox-tmp "+b.current.wrapCSS).appendTo("body"),b.skin=c(".fancybox-skin",b.wrap).css("padding",q(b.current.padding)),b.outer=c(".fancybox-outer",b.wrap),b.inner=c(".fancybox-inner",b.wrap),b._setContent())},_setContent:function(){var a=b.current,d=a.content,e=a.type,f=a.minWidth,k=a.minHeight,j=a.maxWidth,i=a.maxHeight;
switch(e){case "inline":case "ajax":case "html":a.selector?d=c("<div>").html(d).find(a.selector):d instanceof c&&(d.parent().hasClass("fancybox-inner")&&d.parents(".fancybox-wrap").unbind("onReset"),d=d.show().detach(),c(b.wrap).bind("onReset",function(){d.appendTo("body").hide()}));if(a.autoSize){f=c('<div class="fancybox-wrap '+b.current.wrapCSS+' fancybox-tmp"></div>').appendTo("body").css({minWidth:q(f,"w"),minHeight:q(k,"h"),maxWidth:q(j,"w"),maxHeight:q(i,"h")}).append(d);a.width=f.width();
a.height=f.height();f.width(b.current.width);if(f.height()>a.height)f.width(a.width+1),a.width=f.width(),a.height=f.height();d=f.contents().detach();f.remove()}break;case "image":d=a.tpl.image.replace("{href}",a.href);a.aspectRatio=!0;break;case "swf":d=a.tpl.swf.replace(/\{width\}/g,a.width).replace(/\{height\}/g,a.height).replace(/\{href\}/g,a.href);break;case "iframe":d=c(a.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr("scrolling",a.scrolling).attr("src",a.href),a.scrolling=m?"scroll":
"auto"}if(e==="image"||e==="swf")a.autoSize=!1,a.scrolling="visible";e==="iframe"&&a.autoSize?(b.showLoading(),b._setDimension(),b.inner.css("overflow",a.scrolling),d.bind({onCancel:function(){c(this).unbind();b._afterZoomOut()},load:function(){b.hideLoading();try{if(this.contentWindow.document.location)b.current.height=c(this).contents().find("body").height()}catch(a){b.current.autoSize=!1}b[b.isOpen?"_afterZoomIn":"_beforeShow"]()}}).appendTo(b.inner)):(b.inner.append(d),b._beforeShow())},_beforeShow:function(){b.coming=
null;b.trigger("beforeShow");b._setDimension();b.wrap.hide().removeClass("fancybox-tmp");b.bindEvents();b._preloadImages();b.transitions[b.isOpened?b.current.nextMethod:b.current.openMethod]()},_setDimension:function(){var a=b.wrap,d=b.inner,e=b.current,f=b.getViewport(),k=e.margin,j=e.padding*2,i=e.width,g=e.height,s=e.maxWidth+j,r=e.maxHeight+j,G=e.minWidth+j,A=e.minHeight+j,m;f.w-=k[1]+k[3];f.h-=k[0]+k[2];v(i)&&i.indexOf("%")>0&&(i=(f.w-j)*parseFloat(i)/100);v(g)&&g.indexOf("%")>0&&(g=(f.h-j)*
parseFloat(g)/100);k=i/g;i+=j;g+=j;e.fitToView&&(s=Math.min(f.w,s),r=Math.min(f.h,r));e.aspectRatio?(i>s&&(i=s,g=(i-j)/k+j),g>r&&(g=r,i=(g-j)*k+j),i<G&&(i=G,g=(i-j)/k+j),g<A&&(g=A,i=(g-j)*k+j)):(i=Math.max(G,Math.min(i,s)),g=Math.max(A,Math.min(g,r)));i=Math.round(i);g=Math.round(g);c(a.add(d)).width("auto").height("auto");d.width(i-j).height(g-j);a.width(i);m=a.height();if(i>s||m>r)for(;(i>s||m>r)&&i>G&&m>A;)g-=10,e.aspectRatio?(i=Math.round((g-j)*k+j),i<G&&(i=G,g=(i-j)/k+j)):i-=10,d.width(i-j).height(g-
j),a.width(i),m=a.height();e.dim={width:q(i),height:q(m)};e.canGrow=e.autoSize&&g>A&&g<r;e.canShrink=!1;e.canExpand=!1;if(i-j<e.width||g-j<e.height)e.canExpand=!0;else if((i>f.w||m>f.h)&&i>G&&g>A)e.canShrink=!0;b.innerSpace=m-j-d.height()},_getPosition:function(a){var c=b.current,d=b.getViewport(),e=c.margin,f=b.wrap.width()+e[1]+e[3],g=b.wrap.height()+e[0]+e[2],i={position:"absolute",top:e[0]+d.y,left:e[3]+d.x};c.autoCenter&&c.fixed&&!a&&g<=d.h&&f<=d.w&&(i={position:"fixed",top:e[0],left:e[3]});
i.top=q(Math.max(i.top,i.top+(d.h-g)*c.topRatio));i.left=q(Math.max(i.left,i.left+(d.w-f)*0.5));return i},_afterZoomIn:function(){var a=b.current,d=a?a.scrolling:"no";if(a&&(b.isOpen=b.isOpened=!0,b.wrap.addClass("fancybox-opened"),b.inner.css("overflow",d==="yes"?"scroll":d==="no"?"hidden":d),b.trigger("afterShow"),b.update(),(a.closeClick||a.nextClick)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){if(!c(d.target).is("a")&&!c(d.target).parent().is("a"))b[a.closeClick?"close":"next"]()}),
a.closeBtn&&c(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",b.close),a.arrows&&b.group.length>1&&((a.loop||a.index>0)&&c(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&c(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.opts.autoPlay&&!b.player.isActive))b.opts.autoPlay=!1,b.play()},_afterZoomOut:function(){var a=b.current;b.wrap.trigger("onReset").remove();c.extend(b,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,skin:null,
outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.padding,f=c(a.orig),g={},j=50,i=50;!f.length&&a.isDom&&c(d).is(":visible")&&(f=c(d).find("img:first"),f.length||(f=c(d)));f.length?(g=f.offset(),f.is("img")&&(j=f.outerWidth(),i=f.outerHeight())):(a=b.getViewport(),g.top=a.y+(a.h-i)*0.5,g.left=a.x+(a.w-j)*0.5);return g={top:q(g.top-e),left:q(g.left-e),width:q(j+e*2),height:q(i+e*2)}},step:function(a,c){var d=c.prop,e,f;if(d===
"width"||d==="height")e=Math.ceil(a-b.current.padding*2),d==="height"&&(f=(a-c.start)/(c.end-c.start),c.start>c.end&&(f=1-f),e-=b.innerSpace*f),b.inner[d](e)},zoomIn:function(){var a=b.wrap,d=b.current,e=d.openEffect,f=e==="elastic",g=c.extend({},d.dim,b._getPosition(f)),j=c.extend({opacity:1},g);delete j.position;if(f){g=this.getOrigPosition();if(d.openOpacity)g.opacity=0;b.outer.add(b.inner).width("auto").height("auto")}else if(e==="fade")g.opacity=0;a.css(g).show().animate(j,{duration:e==="none"?
0:d.openSpeed,easing:d.openEasing,step:f?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.wrap,c=b.current,d=c.openEffect,e=d==="elastic",f={opacity:0};if(e&&(a.css("position")==="fixed"&&a.css(b._getPosition(!0)),f=this.getOrigPosition(),c.closeOpacity))f.opacity=0;a.animate(f,{duration:d==="none"?0:c.closeSpeed,easing:c.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.wrap,c=b.current,d=c.nextEffect,e=d==="elastic",f=b._getPosition(e),
g={opacity:1};f.opacity=0;if(e)f.top=q(parseInt(f.top,10)-200),g.top="+=200px";a.css(f).show().animate(g,{duration:d==="none"?0:c.nextSpeed,easing:c.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=b.wrap,d=b.current,e=d.prevEffect,f={opacity:0};a.removeClass("fancybox-opened");if(e==="elastic")f.top="+=200px";a.animate(f,{duration:e==="none"?0:d.prevSpeed,easing:d.prevEasing,complete:function(){c(this).trigger("onReset").remove()}})}};b.helpers.overlay={overlay:null,update:function(){var b,
d;this.overlay.width("100%").height("100%");c.browser.msie||m?(b=Math.max(a.documentElement.scrollWidth,a.body.scrollWidth),d=Math.max(a.documentElement.offsetWidth,a.body.offsetWidth),b=b<d?f.width():b):b=g.width();this.overlay.width(b).height(g.height())},beforeShow:function(a){if(!this.overlay)a=c.extend(!0,{},b.defaults.helpers.overlay,a),this.overlay=c('<div id="fancybox-overlay"></div>').css(a.css).appendTo("body"),a.closeClick&&this.overlay.bind("click.fb",b.close),b.current.fixed&&!m?this.overlay.addClass("overlay-fixed"):
(this.update(),this.onUpdate=function(){this.update()}),this.overlay.fadeTo(a.speedIn,a.opacity)},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||0,function(){c(this).remove()});this.overlay=null}};b.helpers.title={beforeShow:function(a){var d;if(d=b.current.title)d=c('<div class="fancybox-title fancybox-title-'+a.type+'-wrap">'+d+"</div>").appendTo("body"),a.type==="float"&&(d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(parseInt(d.css("margin-bottom"),
10))),d.appendTo(a.type==="over"?b.inner:a.type==="outside"?b.wrap:b.skin)}};c.fn.fancybox=function(a){var d=c(this),e=this.selector||"",f,k=function(g){var i=this,k=f,m;if(!g.ctrlKey&&!g.altKey&&!g.shiftKey&&!g.metaKey&&!c(i).is(".fancybox-wrap"))g.preventDefault(),g=a.groupAttr||"data-fancybox-group",m=c(i).attr(g),m||(g="rel",m=i[g]),m&&m!==""&&m!=="nofollow"&&(i=e.length?c(e):d,i=i.filter("["+g+'="'+m+'"]'),k=i.index(this)),a.index=k,b.open(i,a)},a=a||{};f=a.index||0;e?g.undelegate(e,"click.fb-start").delegate(e,
"click.fb-start",k):d.unbind("click.fb-start").bind("click.fb-start",k);return this};c(a).ready(function(){b.defaults.fixed=c.support.fixedPosition||!(c.browser.msie&&c.browser.version<=6)&&!m})})(window,document,jQuery);
(function(d){function a(a){if(a&&a.allowPageScroll===void 0&&(a.swipe!==void 0||a.swipeStatus!==void 0))a.allowPageScroll=v;a||(a={});a=d.extend({},d.fn.swipe.defaults,a);return this.each(function(){var b=d(this),e=b.data(s);e||(e=new c(this,a),b.data(s,e))})}function c(a,c){function A(a){if(n.data(s+"_intouch")!==!0){var a=a.originalEvent,b,d=w?a.touches[0]:a;o=W;w?p=a.touches.length:a.preventDefault();u=0;D=x=null;y=F=t=0;E=1;for(var e=[],f=0;f<=5;f++)e.push({start:{x:0,y:0},end:{x:0,y:0},delta:{x:0,
y:0}});l=e;if(!w||p===c.fingers||c.fingers===K||H()){l[0].start.x=l[0].end.x=d.pageX;l[0].start.y=l[0].end.y=d.pageY;L=(new Date).getTime();if(p==2)l[1].start.x=l[1].end.x=a.touches[1].pageX,l[1].start.y=l[1].end.y=a.touches[1].pageY,F=y=M(l[0].start,l[1].start);if(c.swipeStatus||c.pinchStatus)b=z(a,o)}else I(a),b=!1;if(b===!1)return o=i,z(a,o),b;else N(!0),n.bind(S,R),n.bind(T,U)}}function R(a){a=a.originalEvent;if(!(o===j||o===i)){var d,B=w?a.touches[0]:a;l[0].end.x=w?a.touches[0].pageX:B.pageX;
l[0].end.y=w?a.touches[0].pageY:B.pageY;J=(new Date).getTime();x=X(l[0].start,l[0].end);if(w)p=a.touches.length;o=k;if(p==2)F==0?(l[1].start.x=a.touches[1].pageX,l[1].start.y=a.touches[1].pageY,F=y=M(l[0].start,l[1].start)):(l[1].end.x=a.touches[1].pageX,l[1].end.y=a.touches[1].pageY,y=M(l[0].end,l[1].end),D=E<1?m:C),E=(y/F*1).toFixed(2);if(p===c.fingers||c.fingers===K||!w){var B=a,n=x;if(c.allowPageScroll===v||H())B.preventDefault();else{var r=c.allowPageScroll===q;switch(n){case e:(c.swipeLeft&&
r||!r&&c.allowPageScroll!=h)&&B.preventDefault();break;case f:(c.swipeRight&&r||!r&&c.allowPageScroll!=h)&&B.preventDefault();break;case g:(c.swipeUp&&r||!r&&c.allowPageScroll!=Q)&&B.preventDefault();break;case b:(c.swipeDown&&r||!r&&c.allowPageScroll!=Q)&&B.preventDefault()}}u=Y(l[0].start,l[0].end);t=J-L;if(c.swipeStatus||c.pinchStatus)d=z(a,o);c.triggerOnTouchEnd||(B=!(c.maxTimeThreshold?!(t>=c.maxTimeThreshold):1),(c.threshold!==null?u>=c.threshold:null)===!0?(o=j,d=z(a,o)):B&&(o=i,z(a,o)))}else o=
i,z(a,o);d===!1&&(o=i,z(a,o))}}function U(a){a=a.originalEvent;if(a.touches&&a.touches.length>0)return!0;a.preventDefault();J=(new Date).getTime();F!=0&&(y=M(l[0].end,l[1].end),E=(y/F*1).toFixed(2),D=E<1?m:C);u=Y(l[0].start,l[0].end);x=X(l[0].start,l[0].end);t=J-L;if(c.triggerOnTouchEnd||c.triggerOnTouchEnd===!1&&o===k){o=j;var b=D&&H()||!H(),d=l[0].end.x!==0;if((p===c.fingers||c.fingers===K||!w)&&d&&b)if(b=c.maxTimeThreshold?t>=c.maxTimeThreshold?!1:!0:!0,d=c.threshold!==null?u>=c.threshold:null,
(d===!0||d===null)&&b)z(a,o);else{if(!b||d===!1)o=i,z(a,o)}else o=i,z(a,o)}else o===k&&(o=i,z(a,o));n.unbind(S,R,!1);n.unbind(T,U,!1);N(!1)}function I(){y=F=L=J=p=0;E=1;N(!1)}function z(a,d){var h=void 0;c.swipeStatus&&(h=c.swipeStatus.call(n,a,d,x||null,u||0,t||0,p));c.pinchStatus&&D&&H()&&(h=c.pinchStatus.call(n,a,d,D||null,y||0,t||0,p,E));if(d===i&&c.click&&(p===1||!w)&&(isNaN(u)||u===0))h=c.click.call(n,a,a.target);if(d==j){c.swipe&&(h=c.swipe.call(n,a,x,u,t,p));switch(x){case e:c.swipeLeft&&
(h=c.swipeLeft.call(n,a,x,u,t,p));break;case f:c.swipeRight&&(h=c.swipeRight.call(n,a,x,u,t,p));break;case g:c.swipeUp&&(h=c.swipeUp.call(n,a,x,u,t,p));break;case b:c.swipeDown&&(h=c.swipeDown.call(n,a,x,u,t,p))}switch(D){case C:c.pinchIn&&(h=c.pinchIn.call(n,a,D||null,y||0,t||0,p,E));break;case m:c.pinchOut&&(h=c.pinchOut.call(n,a,D||null,y||0,t||0,p,E))}}(d===i||d===j)&&I(a);return h}function M(a,b){var c=Math.abs(a.x-b.x),d=Math.abs(a.y-b.y);return Math.round(Math.sqrt(c*c+d*d))}function Y(a,b){return Math.round(Math.sqrt(Math.pow(b.x-
a.x,2)+Math.pow(b.y-a.y,2)))}function X(a,c){var d;d=Math.atan2(c.y-a.y,a.x-c.x);d=Math.round(d*180/Math.PI);d<0&&(d=360-Math.abs(d));return d<=45&&d>=0?e:d<=360&&d>=315?e:d>=135&&d<=225?f:d>45&&d<135?b:g}function Z(){n.unbind(O,A);n.unbind(P,I);n.unbind(S,R);n.unbind(T,U);N(!1)}function H(){return c.pinchStatus||c.pinchIn||c.pinchOut}function N(a){n.data(s+"_intouch",a===!0?!0:!1)}var V=w||!c.fallbackToMouseEvents,O=V?"touchstart":"mousedown",S=V?"touchmove":"mousemove",T=V?"touchend":"mouseup",
P="touchcancel",u=0,x=null,t=0,F=0,y=0,E=1,D=0,n=d(a),o="start",p=0,l=null,L=0,J=0;try{n.bind(O,A),n.bind(P,I)}catch($){d.error("events not supported "+O+","+P+" on jQuery.swipe")}this.enable=function(){n.bind(O,A);n.bind(P,I);return n};this.disable=function(){Z();return n};this.destroy=function(){Z();n.data(s,null);return n}}var e="left",f="right",g="up",b="down",C="in",m="out",v="none",q="auto",h="horizontal",Q="vertical",K="all",W="start",k="move",j="end",i="cancel",w="ontouchstart"in window,s=
"TouchSwipe";d.fn.swipe=function(b){var c=d(this),e=c.data(s);if(e&&typeof b==="string")if(e[b])return e[b].apply(this,Array.prototype.slice.call(arguments,1));else d.error("Method "+b+" does not exist on jQuery.swipe");else if(!e&&(typeof b==="object"||!b))return a.apply(this,arguments);return c};d.fn.swipe.defaults={fingers:1,threshold:75,maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,
triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0};d.fn.swipe.phases={PHASE_START:W,PHASE_MOVE:k,PHASE_END:j,PHASE_CANCEL:i};d.fn.swipe.directions={LEFT:e,RIGHT:f,UP:g,DOWN:b,IN:C,OUT:m};d.fn.swipe.pageScroll={NONE:v,HORIZONTAL:h,VERTICAL:Q,AUTO:q};d.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:K}})(jQuery);