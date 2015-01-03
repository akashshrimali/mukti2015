$(document).ready(function(){
	
	var width=$('.muktivid').outerWidth();
	var height=width*0.5625;
	$('.muktivid').css("height",height);
	
	// nav animation
	
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var is_firefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+



if(is_chrome)
{
			var off1=$('#banner').offset().top + 20;
			var off2=off1+ $('.carousel').outerHeight() + $('#banner').outerHeight();
			var off3=off2+ $('.mktivid').outerHeight()+90;
			var off4=off3+ $('#tlks').outerHeight();
}
	
if(is_firefox)
{
	var off1=$('#banner').offset().top + 20;
	var off2=$('#mktivideo').offset().top + 20;
	var off3=$('#tlks').offset().top + 20;
	var off4=$('#abt').offset().top + 20;
	
}
	
		
			
	var nav=$('#nav,.dropotron');
	var dropt=$('.dropotron li');
	var social=$('.social');
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();

		if(scrollTop >= off1 && scrollTop < off2)
		{
			nav.css('border-color','transparent');
			nav.css('background-color','#474566');
			nav.css('color','#fff');
			dropt.css('color',"#fff");
			social.css('background-color','#48bd82');
		}
		if(scrollTop < off1)
		{
			nav.css('border-color','rgba(230,230,230,0.7)');
			nav.css('background-color','rgba(92, 90, 122, 0.4)');
			nav.css('color','#fff');
			dropt.css('color','#fff')
			social.css('background-color','rgba(250,250,250,0.2)');
		}
		if(scrollTop >= off2 && scrollTop < off3)
		{
			nav.css('border-color','transparent');
			nav.css('background-color','#eaeaea');
			nav.css('color','#000');
			dropt.css('color','#000');
			social.css('background-color','#0a88d6');
		}
		if(scrollTop >= off3 && scrollTop < off4)
		{
			nav.css('border-color','transparent');
			nav.css('background-color','#feb076');
			nav.css('color','#fff');
			dropt.css('color','#fff');
			social.css('background-color','#474566');
		}
		if(scrollTop >= off4)
		{
			nav.css('border-color','transparent');
			nav.css('background-color','#fff');
			nav.css('color','#000');
			dropt.css('color','#000');
			social.css('background-color','#f2576e');
		}		
	});
	
	
	
	
	
	
});