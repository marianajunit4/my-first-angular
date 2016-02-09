app.controller('PageController', [ '$scope', PageCtrl ]);

function PageCtrl($scope) {

	var _init = function() {
		$scope.currentView = 'testPage';
	};

	_init();

	$scope.setView = function(view) {
		$scope.currentView = view;
	};

}