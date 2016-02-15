var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.selection',
    'ui.router','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider,  $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({enable:true});
        $stateProvider.state('productsPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/productsPage.html'
                },
                'search@productsPage': {
                    templateUrl: './templates/products/search.html'
                },
                'products@productsPage': {
                    templateUrl: './templates/products/products.html'
                },
                'details@productsPage': {
                    templateUrl: './templates/products/details.html'
                }
            }
        }).state('contentPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/contentPage.html'
                }
            }
        }).state('informationPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/informationPage.html'
                },
                'overview@informationPage': {
                    templateUrl: './templates/pageinfo/OverviewTab.html'
                },
                'general@informationPage': {
                    templateUrl: './templates/pageinfo/GeneralTab.html'
                },
                'hreflang@informationPage': {
                    templateUrl: './templates/pageinfo/HreflangTab.html'
                },
                'social@informationPage': {
                    templateUrl: './templates/pageinfo/SocialTab.html'
                },
                'links@informationPage': {
                    templateUrl: './templates/pageinfo/LinksTab.html'
                },
                'gsc@informationPage': {
                    templateUrl: './templates/pageinfo/GSCTab.html'
                }
            }
        }).state('defaultPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/defaultPage.html'
                }
            }
        }).state('redirectPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/redirectPage.html'
                }
            }
        }).state('linksPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/linksPage.html'
                }
            }
        }).state('gscPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/gscPage.html'
                }
            }
        }).state('keyworkPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/keyworkPage.html'
                }
            }
        }).state('urlPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/urlPage.html'
                }
            }
        }).state('statisticsPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/statisticsPage.html'
                }
            }
        }).state('pdpPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/pdpPage.html'
                }
            }
        }).state('categoryPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/categoryPage.html'
                }
            }
        }).state('competitorsPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/competitorsPage.html'
                }
            }
        }).state('apiSEAPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/apiSEAPage.html'
                }
            }
        }).state('apiSMPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/apiSMPage.html'
                }
            }
        }).state('apiGAPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/apiGAPage.html'
                }
            }
        }).state('exitPage', {
            url: '/',
            views: {
                'mainPage': {
                    templateUrl: './templates/exitPage.html'
                }
            }
        })
    }]);