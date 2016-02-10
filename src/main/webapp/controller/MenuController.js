app.controller('MenuController', ['$scope', MenuCtrl]);

function MenuCtrl($scope) {

    $scope.menuEntries = [
        {Link: 'productsPage', Name: 'Pageinformation'},
        {Link: 'testPage', Name: 'Content'},
        {Link: 'productsPage', Name: 'Default patterns'},
        {Link: 'testPage', Name: 'Redirect Tool'},
        {Link: 'productsPage', Name: 'Internal Links'},
        {Link: 'testPage', Name: 'GSC'},
        {Link: 'productsPage', Name: '- Keyworkds'},
        {Link: 'testPage', Name: '- URLs'},
        {Link: 'productsPage', Name: 'Statistics'},
        {Link: 'testPage', Name: '- No. of PDP'},
        {Link: 'productsPage', Name: '- No. of Category'},
        {Link: 'testPage', Name: 'Competitors'},
        {Link: 'productsPage', Name: 'API SEA'},
        {Link: 'testPage', Name: 'API SM'},
        {Link: 'productsPage', Name: 'API GA'},
        {Link: 'testPage', Name: 'Exit'}
    ];

    $scope.contains = function (actual, expected) {
        var lowerStr = (actual + "").toLowerCase();
        return lowerStr.indexOf(expected.toLowerCase()) > -1;
    }
}