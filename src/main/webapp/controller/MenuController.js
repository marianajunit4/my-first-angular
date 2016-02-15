app.controller('MenuController', ['$scope', MenuCtrl]);

function MenuCtrl($scope) {

    $scope.menuEntries = [
        {Link: 'informationPage', Name: 'Pageinformation'},
        {Link: 'contentPage', Name: 'Content'},
        {Link: 'productsPage', Name: 'Products', Line:true},
        {Link: 'defaultPage', Name: 'Default patterns'},
        {Link: 'redirectPage', Name: 'Redirect Tool'},
        {Link: 'linksPage', Name: 'Internal Links'},
        {Link: 'gscPage', Name: 'GSC'},
        {Link: 'keyworkPage', Name: '- Keyworkds'},
        {Link: 'urlPage', Name: '- URLs', Line:true},
        {Link: 'statisticsPage', Name: 'Statistics'},
        {Link: 'pdpPage', Name: '- No. of PDP'},
        {Link: 'categoryPage', Name: '- No. of Category'},
        {Link: 'competitorsPage', Name: 'Competitors'},
        {Link: 'apiSEAPage', Name: 'API SEA'},
        {Link: 'apiSMPage', Name: 'API SM'},
        {Link: 'apiGAPage', Name: 'API GA',Line:true},
        {Link: 'exitPage', Name: 'Exit'}
    ];

    $scope.contains = function (actual, expected) {
        var lowerStr = (actual + "").toLowerCase();
        return lowerStr.indexOf(expected.toLowerCase()) > -1;
    }
}