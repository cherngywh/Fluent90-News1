/****** PUBLIC ACCESS ******/
function $(id) { return document.getElementById(id) };
var add = document.addEventListener ? 'addEventListener' : 'attachEvent';
var st = setTimeout;
var ZV = 'Zip Code';
/****** / PUBLIC ACCESS ******/
var banner = (function() {
	'use strict';
	function Banner() {
		var b = $('banner');

		function onEnablerVisible() {
			st(frame1, 300);
		}
		
		function frame1(){
			
			///////////////Animating dust //////////
			st( function(){ d.style.backgroundImage = "url(dust2.jpg)"; console.log("dust2"); }, 0);
			st( function(){ d.style.backgroundImage = "url(dust3.jpg)"; console.log("dust3"); }, 300);
			st( function(){ d.style.backgroundImage = "url(dust1.jpg)"; console.log("dust1"); }, 600);
			st( function(){ d.style.backgroundImage = "url(dust2.jpg)"; console.log("dust2"); }, 900);
			st( function(){ d.style.backgroundImage = "url(dust3.jpg)"; console.log("dust3"); }, 1200);
			st( function(){ d.style.backgroundImage = "url(dust1.jpg)"; console.log("dust1"); }, 1500);
			st( function(){ d.style.backgroundImage = "url(dust2.jpg)"; console.log("dust2"); }, 1800);
			st( function(){ d.style.backgroundImage = "url(dust3.jpg)"; console.log("dust3"); }, 2100);
			st( function(){ d.style.backgroundImage = "url(dust1.jpg)"; console.log("dust1"); }, 2400);
			st( function(){ d.style.backgroundImage = "url(dust2.jpg)"; console.log("dust2"); }, 2700);
			st( function(){ d.style.backgroundImage = "url(dust3.jpg)"; console.log("dust3"); }, 3000);	
			st( function(){ d.style.backgroundImage = "url(dust1.jpg)"; console.log("dust1"); }, 3300);
			st( function(){ d.style.backgroundImage = "url(dust2.jpg)"; console.log("dust2"); }, 3600);
			st( function(){ d.style.backgroundImage = "url(dust3.jpg)"; console.log("dust3"); }, 3900);
			st( function(){ d.style.backgroundImage = "url(dust1.jpg)"; console.log("dust1"); }, 4200);
			st( function(){ d.style.backgroundImage = "url(dust2.jpg)"; console.log("dust2"); }, 4500);
			st( function(){ d.style.backgroundImage = "url(dust3.jpg)"; console.log("dust3"); }, 4800);			
			st( function(){ d.style.backgroundImage = "url(dust1.jpg)"; console.log("dust1"); }, 5100);
			st( function(){ d.style.backgroundImage = "url(dust2.jpg)"; console.log("dust2"); }, 5400);
			st( function(){ d.style.backgroundImage = "url(dust3.jpg)"; console.log("dust3"); }, 5700);			
			st( function(){ d.style.backgroundImage = "url(dust1.jpg)"; console.log("dust1"); }, 6000);
			st( function(){ d.style.backgroundImage = "none"; console.log("none"); }, 6300);				
			
						
/////// --- COPY 1 ---- ///////
			st( function(){$('copy1_complete').className = 'In'} , 500);
			st( function(){ $("copy1_complete").style.width = "16px"}, 700);
			st( function(){ $("copy1_complete").style.width = "24px"}, 800);
			st( function(){ $("copy1_complete").style.width = "34px"}, 1000);
			st( function(){ $("copy1_complete").style.width = "44px"}, 1100);
			st( function(){ $("copy1_complete").style.width = "52px"}, 1200);
			st( function(){ $("copy1_complete").style.width = "60px"}, 1400);
			st( function(){ $("copy1_complete").style.width = "68px"}, 1500);
			st( function(){ $("copy1_complete").style.width = "74px"}, 1700);
			st( function(){ $("copy1_complete").style.width = "82px"}, 1900);
			st( function(){ $("copy1_complete").style.width = "90px"}, 2000);
			st( function(){ $("copy1_complete").style.width = "110px"}, 2500);
			st( function(){ $("copy1_complete").style.width = "120px"}, 2700);
			st( function(){ $("copy1_complete").style.width = "130px"}, 2900);
			st( function(){ $("copy1_complete").style.width = "140px"}, 3000);
/////// --- COPY 2 ---- ///////
			st( function(){$('copy2_complete').className = 'In'} , 3100);
			st( function(){ $("copy2_complete").style.width = "16px"}, 3200);
			st( function(){ $("copy2_complete").style.width = "24px"}, 3300);
			st( function(){ $("copy2_complete").style.width = "32px"}, 3500);
			st( function(){ $("copy2_complete").style.width = "42px"}, 3600);
			st( function(){ $("copy2_complete").style.width = "50px"}, 3800);
			st( function(){ $("copy2_complete").style.width = "60px"}, 3900);
			st( function(){ $("copy2_complete").style.width = "68px"}, 4000);
			st( function(){ $("copy2_complete").style.width = "80px"}, 4100);
			st( function(){ $("copy2_complete").style.width = "110px"}, 4300);
			st( function(){ $("copy2_complete").style.width = "120px"}, 4400);
			st( function(){ $("copy2_complete").style.width = "130px"}, 4500);
			st( function(){ $("copy2_complete").style.width = "140px"}, 4600);
/////// --- COPY 3 ---- ///////
			st( function(){$('copy3_complete').className = 'In'} , 4800);
			st( function(){ $("copy3_complete").style.width = "20px"}, 4900);
			st( function(){ $("copy3_complete").style.width = "32px"}, 5100);
			st( function(){ $("copy3_complete").style.width = "40px"}, 5200);
			st( function(){ $("copy3_complete").style.width = "52px"}, 5300);
			st( function(){ $("copy3_complete").style.width = "64px"}, 5500);
			st( function(){ $("copy3_complete").style.width = "74px"}, 5600);
			st( function(){ $("copy3_complete").style.width = "110px"}, 5800);
			st( function(){ $("copy3_complete").style.width = "120px"}, 5900);
			st( function(){ $("copy3_complete").style.width = "130px"}, 6000);
			st( function(){ $("copy3_complete").style.width = "140px"}, 6100);
			
			st( function(){$('shimmer').className = 'on'} , 6800);
			
		}
		// privileged methods
		this.init = function() {
			onEnablerVisible();
		};
	}
	return new Banner();
})();