(function(c,d,a){c=a("#topMenu");c.length>0&&c.css("margin-top",c.height()*-1);if(a("#sidebarButton").length>0)a("#sidebarButton").on("click.fndtn",function(b){b.preventDefault();a("body").toggleClass("active")});if(a("#menuButton").length>0)a("#menuButton").on("click.fndtn",function(b){b.preventDefault();a("body").toggleClass("active-menu")});if(a("#switchPanels").length>0)a("#switchPanels dd").on("click.fndtn",function(b){b.preventDefault();var b=a(this).children("a").attr("href"),c=a(b).index();
a(this).toggleClass("active").siblings().removeClass("active");a(b).parent().css("left",c*-100+"%")});a("#nav li a").on("click.fndtn",function(b){b.preventDefault();b=a(this).attr("href");b=a(b);a("html, body").animate({scrollTop:b.offset().top},300)})})(this,document,jQuery);
