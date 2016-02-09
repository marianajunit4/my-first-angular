var app = angular.module('app', [ 'ngTouch', 'ui.grid', 'ui.grid.selection',
		'ui.router' ]);

app.config([ '$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('productsPage', {
				url : '/',
				views : {
					'menu' : {
						templateUrl : './templates/menu.html'
					},
					'productsPage' : {
						templateUrl : './templates/productsPage.html'
					},
					'search@productsPage' : {
						templateUrl : './templates/search.html'
					},
					'products@productsPage' : {
						templateUrl : './templates/products.html'
					},
					'details@productsPage' : {
						templateUrl : './templates/details.html'
					},
					'testPage' : {
						templateUrl : './templates/testPage.html'
					}
				}
			})
		} ]);