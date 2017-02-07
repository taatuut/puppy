(function () {
  'use strict';

  angular.module('app.root', [
    // inject dependencies
    'app.login',
    'app.messageBoard',
    'app.user',
    'ui.router',
	'ml.google-maps',
	'ml.highcharts',

    // child states
    'app.create',
    'app.detail',
    'app.landing',
    'app.search',
    'app.user'
  ]);
}());
