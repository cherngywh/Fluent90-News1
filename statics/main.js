/*------------------------------------------------------------------------*/
// VARS
/*------------------------------------------------------------------------*/
// NOTE: Legend of data type naming convention suffixes
//----------------------------------------------------
// "_num" 		: (NUMBER)
// "_obj" 		: (OBJECT)
// "_bool" 		: (BOOLEAN)
// "_str" 		: (STRING)
// "_arr" 		: (ARRAY)
// "_div"		: (DIV)
// "_span"		: (SPAN)
// "_regExp"	: (REGULAR EXPRESSION)
// "(capitals)"	: (CONSTANT)
// "_intv" 		: (SET INTERVAL)
// "_txt" 		: (TEXT FIELD) Div with text
// "_img" 		: (IMAGEHOLDER) Div with image
// "_iseq" 		: (IMAGESEQUENCE) Div with sequence of images that animate
// "_tbox" 		: (TEXT BOX) Colored div with text
// "_frm" 		: (FRAME) Animation Frame
// "_rect" 		: (RECTANGLE) Div with background color
// "_ns" 		: (NINE SPLICE) A 9-splice object
//----------------------------------------------------

var container_div = FT.query("#container");
var border_div = FT.query("#border");
var introRichload_div = FT.query("#introRichload");
var bgImage_img = FT.query("#bgImage");
var frame2_div = FT.query("#frame2");
var frame3_div = FT.query("#frame3");
var frame4_div = FT.query("#frame4");
var frame2Headline_img = FT.query("#frame2headline");
var frame2SubHeadline_img = FT.query("#frame2subHeadline");
var frame4Headline_img = FT.query("#frame4headline");
var frame4SubHeadline_img = FT.query("#frame4subHeadline");
var frame3Image_img = FT.query("#frame3brandImage");
var legal_f2_div = FT.query("#legal_f2");
var legal_f4_div = FT.query("#legal_f4");
var logo_div = FT.query("#logo");
var ctaBtn_div = FT.query("#ctaBtn");

var dynamicURL;
var imagesLoaded = 0;
var richloadsLoaded = 0;

var allImagesLoaded = false;
var allRichloadsLoaded = false;

var TOTAL_IMAGES_TO_LOAD = 8;

var ctaX;
var ctaY;

var headlineX;
var headlineY;

var subheadX;
var subheadY;

myFT.addEventListener("instantads", function(){
	
	frame3Image_img.onload = imageLoaded();
	frame3Image_img.src = myFT.instantAds.F3_brandIMG;
	
	bgImage_img.onload = imageLoaded();
	bgImage_img.src = myFT.instantAds.backgroundIMG;
	
	frame2Headline_img.onload = imageLoaded();
	frame2Headline_img.src = myFT.instantAds.F2_headline;
	
	frame2SubHeadline_img.onload = imageLoaded();
	frame2SubHeadline_img.src = myFT.instantAds.F2_subHeadline;
	
	frame4Headline_img.onload = imageLoaded();
	frame4Headline_img.src = myFT.instantAds.F4_headline;
	
	frame4SubHeadline_img.onload = imageLoaded();
	frame4SubHeadline_img.src = myFT.instantAds.F4_subHeadline;
	
	logo.onload = imageLoaded();
	logo.src = myFT.instantAds.logo;
	
	ctaBtn_div.onload = imageLoaded();
	ctaBtn_div.src = myFT.instantAds.F4_CTA_btn;
});

function imageLoaded(e) {
	imagesLoaded++;
	
	if(imagesLoaded == TOTAL_IMAGES_TO_LOAD) {
		allImagesLoaded = true;
		checkLoads();
	}
}

myFT.addEventListener("richload", function(){
	richloadsLoaded++;
	if(richloadsLoaded == 1) {
		var parent = introRichload_div;
		myFT.insertRichload({
			richload: 'introAnimation',    	// should match the name of the richload as defined in the manifest
			parent: parent,     			// using insertRichload you do not have to insert in to an <ft-richload> element
			width: 300,         			// optional - will inherit the offset parent width if not passed
			height: 250,        			// optional - will inherit the offset parent height if not passed
		});
	} else if(richloadsLoaded == 2) {
		allRichloadsLoaded = true;
	}
	
	checkLoads();
});

function checkLoads() {
	if(allImagesLoaded && allRichloadsLoaded) {
		setupBanner();
	}
}	

function setupBanner() {
	var colors = parseIAText(myFT.instantAds.hex_border_F2bkg_F4bkg_F2legal_F4legal);
	
	border_div.style.borderColor = colors[0];
	frame2_div.style.backgroundColor = colors[1];
	frame4_div.style.backgroundColor = colors[2];
	legal_f2_div.style.color = colors[3];
	legal_f4_div.style.color = colors[4];
	frame3_div.style.backgroundColor = colors[5];
	
	frame2Headline_img.style.top = myFT.instantAds.F2_headline_offsetY;
	frame2SubHeadline_img.style.top = myFT.instantAds.F2_subHeadline_offsetY;
	
	ctaX = myFT.instantAds.F4_CTA_offsetX;
	ctaY = myFT.instantAds.F4_CTA_offsetY;
	
	headlineX = myFT.instantAds.F4_headline_offsetX;
	headlineY = myFT.instantAds.F4_headline_offsetY;
	
	subheadX = myFT.instantAds.F4_subHeadline_offsetX;
	subheadY = myFT.instantAds.F4_subHeadline_offsetY;
	
	legal_f2_div.innerHTML = myFT.instantAds.F2_legalTxt;
	legal_f4_div.innerHTML = myFT.instantAds.F4_legalTxt;
	
	dynamicURL = myFT.instantAds.clickTag_URL;
	
	myFT.applyClickTag(container_div, 1, dynamicURL);
	
	playFrame1();
}

function playFrame1() {
	window.setTimeout(function() {
		playFrame2();
	}, parseFloat(myFT.instantAds.F1_duration) * 1000);
}

function playFrame2() {
	window.setTimeout(function() {
		playFrame3();
	}, parseFloat(myFT.instantAds.F2_duration) * 1000);
	
	frame2_div.style.opacity = 1;
	introRichload_div.style.opacity = 0;
	bgImage_img.style.opacity = 1;
	
	var delays = parseIAText(myFT.instantAds.F2_Delays_headline_subhead_legal);
	var speeds = parseIAText(myFT.instantAds.F2_Speeds_headline_subhead_legal);
	
	TweenLite.to(frame2Headline_img, speeds[0], {css:{left:0}, delay:delays[0]});
	TweenLite.to(frame2subHeadline, speeds[1], {css:{left:0}, delay:delays[1]});
	TweenLite.to(legal_f2_div, speeds[2], {css:{opacity:1}, delay:delays[2]});
}

function playFrame3() {
	window.setTimeout(function() {
		playFrame4();
	}, parseFloat(myFT.instantAds.F3_duration) * 1000);
	
	frame3_div.style.opacity = 1;
	frame2_div.style.opacity = 0;
}

function playFrame4() {
	
	var ctaOrigDimensions = [ctaBtn_div.clientWidth, ctaBtn_div.clientHeight];
	var headLineOrigDimensions = [frame4Headline_img.clientWidth, frame4Headline_img.clientHeight];
	var subHeadLineOrigDimensions = [frame4SubHeadline_img.clientWidth, frame4SubHeadline_img.clientHeight];
	
	prepareForPopin(ctaBtn_div, ctaX, ctaY);
	prepareForPopin(frame4Headline_img, headlineX, headlineY);
	prepareForPopin(frame4SubHeadline_img, subheadX, subheadY);
	
	frame4_div.style.opacity = 1;
	frame3_div.style.opacity = 0;
		
	var delays = parseIAText(myFT.instantAds.F4_Delays_logo_headline_subhead_cta_legal);
	var speeds = parseIAText(myFT.instantAds.F4_Speeds_logo_headline_subhead_cta_legal);
	
	TweenLite.to(logo_div, speeds[0], {css:{top:0}, delay:delays[0]});
	
	TweenLite.to(frame4Headline_img, 0, {css:{opacity:1}, overwrite:"none", delay:delays[1]});
	TweenLite.to(frame4Headline_img, speeds[1], {css:{left:headlineX + "px", top:headlineY + "px", width:headLineOrigDimensions[0], height:headLineOrigDimensions[1]}, delay:delays[1]});
	
	TweenLite.to(frame4SubHeadline_img, 0, {css:{opacity:1}, overwrite:"none", delay:delays[2]});
	TweenLite.to(frame4SubHeadline_img, speeds[2], {css:{left:subheadX + "px", top:subheadY + "px", width:subHeadLineOrigDimensions[0], height:subHeadLineOrigDimensions[1]}, delay:delays[2]});
	
	TweenLite.to(ctaBtn_div, 0, {css:{opacity:1}, overwrite:"none", delay:delays[3]});
	TweenLite.to(ctaBtn_div, speeds[3], {css:{left:ctaX + "px", top:ctaY + "px", width:ctaOrigDimensions[0], height:ctaOrigDimensions[1]}, overwrite:"none", ease:Back.easeOut, delay:delays[3]});
	
	TweenLite.to(ctaBtn_div, .1, {css:{left:(ctaX - 6) + "px", top:(ctaY - 1) + "px", width:ctaOrigDimensions[0] * 1.1, height:ctaOrigDimensions[1] * 1.1}, overwrite:"none", delay:parseFloat(delays[3]) + parseFloat(speeds[3]) + .75});
	TweenLite.to(ctaBtn_div, .1, {css:{left:ctaX + "px", top:ctaY + "px", width:ctaOrigDimensions[0], height:ctaOrigDimensions[1]}, overwrite:"none", delay:parseFloat(delays[3]) + parseFloat(speeds[3]) + .85});
	
	TweenLite.to(legal_f4_div, speeds[4], {css:{opacity:1}, delay:delays[4]});
}

function prepareForPopin(elem, x, y) {
	var orgWidth = elem.clientWidth;
	var orgHeight = elem.clientHeight;
	var xCoord = parseFloat(x);
	var yCoord = parseFloat(y);
	
	elem.style.width = (orgWidth * .25) + "px";
	elem.style.height = (orgHeight * .25) + "px";
	
	elem.style.left = xCoord + (orgWidth/2) - (elem.clientWidth/2);
	elem.style.top = yCoord + (orgHeight/2) - (elem.clientHeight/2);
}

function parseIAText(str) {	
	var logoPos_arr = str.split('|');
	return logoPos_arr;
}