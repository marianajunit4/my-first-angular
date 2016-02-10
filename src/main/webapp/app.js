var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.selection',
    'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('productsPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/productsPage.html'
                },
                'search@productsPage': {
                    templateUrl: './templates/search.html'
                },
                'products@productsPage': {
                    templateUrl: './templates/products.html'
                },
                'details@productsPage': {
                    templateUrl: './templates/details.html'
                }
            }
        }).state('testPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/testPage.html'
                }
            }
        })
    }]);