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