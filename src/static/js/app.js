"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
	root: '#app',
	theme: 'md',
	routes: routes,
	view: {
		pushState: false,
	},

});

var mainView = app.views.create('.view-main', {
	url: './index.html'
});
