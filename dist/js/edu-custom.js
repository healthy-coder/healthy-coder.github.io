var eduApp = angular.module('eduApp', ['ui.router']);

eduApp.run(function() {
	alert('init');
})
eduApp.config(function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/views');
	$stateProvider.state('views', {
		url: '/views',
		templateUrl: 'views/item.html'
	})
	.state('views.posItem', {
		url: '/views',
		templateUrl: 'views/posItem.html'
	});
});