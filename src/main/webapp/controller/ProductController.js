app.controller('ProductController', ['$scope','uiGridConstants','selectDetailService', ProductCtrl]);


function ProductCtrl($scope, uiGridConstants, selectDetailService) {
	  $scope.gridOptions = { enableRowSelection: true, enableRowHeaderSelection: false };

	  $scope.gridOptions.multiSelect = false;
	  $scope.gridOptions.modifierKeysToMultiSelect = false;
	  $scope.gridOptions.noUnselect = true;

	  function selectProductRow(row) {
		  if (row.entity != undefined) {
			  var selectedRow = row.entity.firstName;
			  selectDetailService.broadcastItem(selectedRow);
		  }
	  }
	  
	  $scope.gridOptions.onRegisterApi = function (gridApi) {
	       $scope.gridApi = gridApi;
	       gridApi.selection.on.rowSelectionChanged($scope, selectProductRow);
	       gridApi.selection.on.rowSelectionChangedBatch($scope, selectProductRow);
	  }

		
	  var productData;
		readTextFile("data/productData.json", function(text){
			productData = JSON.parse(text).products;
			$scope.gridOptions.data = productData;
		});
}