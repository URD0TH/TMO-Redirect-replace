// ==UserScript==
// @name TMO-Redirect-replace
// @namespace https://github.com/URD0TH/TMO-Redirect-replace
// @version 2.6.3.2.6
// @description Quiero Ver Mi MANGA!!!!
// @author IRhoAias y URD0TH
// @updateURL https://github.com/URD0TH/TMO-Redirect-replace/raw/main/Multi-script.meta.js
// @downloadURL https://github.com/URD0TH/TMO-Redirect-replace/raw/main/Multi-script.user.js
// @namespace     https://github.com/URD0TH
// @supportURL    https://github.com/URD0TH/TMO-Redirect-replace/issues
// @connect *
// @grant GM.getResourceUrl
// @grant GM_xmlhttpRequest
// @grant GM_getResourceURL
// @license MIT
// @match https://*.almtechnews.com/*
// @match https://*.animalcanine.com/*
// @match https://*.animation2you.com/*
// @match https://*.animationforyou.com/*
// @match https://*.anitoc.com/*
// @match https://*.cook2love.com/*
// @match https://*.cookerready.com/*
// @match https://*.cooker2love.com/*
// @match https://*.dariusmotor.com/*
// @match https://*.mygamesinfo.com/*
// @match https://*.enginepassion.com/*
// @match https://*.fanaticmanga.com/*
// @match https://*.gamesnk.com/*
// @match https://*.infogames2you.com/*
// @match https://*.infopetworld.com/*
// @match https://*.mangalong.com/*
// @match https://*.mistermanga.com/*
// @match https://*.motornk.com/*
// @match https://*.otakuworldgames.com/*
// @match https://*.recipesnk.com/*
// @match https://*.worldmangas.com/*
// @match https://*.wtechnews.com/*
// @match https://*.motorbakery.com/*
// @match https://*.mygamesinfo.com/*
// @match https://*.recipesist.com/*
// @match https://*.animalsside.com/*
// @match https://*.recetasdelupita.com/*
// @match https://*.cocinaconlupita.com/*
// ==/UserScript==
 
if (window.top !== window.self) //Corre en 2do plano, SOLAMENTWE si tienes el navegador en 1er plano,
	return;
var currentURL = location.href;
 
if (currentURL.match("cook2love.com/news")) {
	location.href = location.href.replace("cook2love.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("cooker2love.com/news")) {
	location.href = location.href.replace("cooker2love.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("infopetworld.com/news")) {
	location.href = location.href.replace("infopetworld.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("almtechnews.com/news")) {
	location.href = location.href.replace("almtechnews.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("animation2you.com/news")) {
	location.href = location.href.replace("animation2you.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("infogames2you.com/news")) {
	location.href = location.href.replace("infogames2you.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("mygamesinfo.com/news")) {
	location.href = location.href.replace("mygamesinfo.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("wtechnews.com/news")) {
	location.href = location.href.replace("wtechnews.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("animationforyou.com/news")) {
	location.href = location.href.replace("animationforyou.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("animalcanine.com/news")) {
	location.href = location.href.replace("animalcanine.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("gamesnk.com/news")) {
	location.href = location.href.replace("gamesnk.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("otakuworldgames.com/news")) {
	location.href = location.href.replace("otakuworldgames.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("enginepassion.com/news")) {
	location.href = location.href.replace("enginepassion.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("mangalong.com/news")) {
	location.href = location.href.replace("mangalong.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("recipesnk.com/news")) {
	location.href = location.href.replace("recipesnk.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("cookerready.com/news")) {
	location.href = location.href.replace("cookerready.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("mistermanga.com/news")) {
	location.href = location.href.replace("mistermanga.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("worldmangas.com/news")) {
	location.href = location.href.replace("worldmangas.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("fanaticmanga.com/news")) {
	location.href = location.href.replace("fanaticmanga.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("motornk.com/news")) {
	location.href = location.href.replace("motornk.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("anitoc.com/news")) {
	location.href = location.href.replace("anitoc.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("dariusmotor.com/news")) {
	location.href = location.href.replace("dariusmotor.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("motorbakery.com/news")) {
	location.href = location.href.replace("motorbakery.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("mygamesinfo.com/news")) {
	location.href = location.href.replace("mygamesinfo.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("recipesist.com/news")) {
	location.href = location.href.replace("recipesist.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("animalsside.com/news")) {
	location.href = location.href.replace("animalsside.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("recetasdelupita.com/news")) {
	location.href = location.href.replace("recetasdelupita.com/news", "lectortmo.com/viewer");
};
if (currentURL.match("cocinaconlupita.com/news")) {
	location.href = location.href.replace("cocinaconlupita.com/news", "lectortmo.com/viewer");
};
// end of script