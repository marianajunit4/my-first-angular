app.controller('DetailController', ['$scope', 'uiGridConstants', 'selectDetailService', DetailCtrl]);


function DetailCtrl($scope, uiGridConstants, selectDetailService) {
    $scope.gridOptions = {enableRowSelection: true, enableRowHeaderSelection: false};

    $scope.gridOptions.multiSelect = false;
    $scope.gridOptions.modifierKeysToMultiSelect = false;
    $scope.gridOptions.noUnselect = true;

    $scope.$on('rowSelected', function () {
        readTextFile("data/detailData" + selectDetailService.firstName + ".json", function (textFromFile) {
            $scope.gridOptions.data = [];
            if (!textFromFile) {
                return;
            }

            var productData = JSON.parse(textFromFile).products;
            $scope.gridOptions.data = productData;
        });
    });
}