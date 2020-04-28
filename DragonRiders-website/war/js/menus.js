// (c) 2015

'use strict';

window.onload = function(){
	init();
};

function init(){
	var argument = getUrlParameter();
	var idToload = 'home';
	if (argument != "" && isValidPage(argument))
		idToload = argument;

	onClickItemMenu(idToload);

}

function onClickItemMenu(itemID){
		var menu = document.getElementById('menu');
		var itemsmenu = menu.children[0].children;
		for(var i=0; i<itemsmenu.length; i++){

			itemsmenu[i].className = (itemID === itemsmenu[i].id) ? 'menu active' : 'menu';
		}

	$("#mainpage").load('html/'+itemID+'.html', function(){
		updateText(itemID);
	});

}

function updateText(page)
{
	//var page_txt = window.location.pathname.split('/').pop().split('.')[0]; //'index';
	var page_var = window['TEXT_'+page];

	jQuery.each(page_var, function(id, text) {
		var balise = document.getElementById(id);
		if (balise) balise.innerHTML = text;
	});

	mapBalises();
}

function mapBalises() {
	var list_h1 = document.getElementsByTagName('h1');
	for (var i=0; i<list_h1.length; i++){
		list_h1[i].className = "w3-center w3-orange";
	}
}

function getUrlParameter(/*sParam*/) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1));
	return sPageURL;
  /*var sURLVariables = sPageURL.split('&');

  for (var i=0; i<sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
          return sParameterName[1];
      }
  }*/
};

var validpages = ['home', 'initiation', 'freestyle', 'soccer', 'hockey', 'multimedia'];

function isValidPage(iPage){
		return  (validpages.indexOf(iPage) != -1);
}
