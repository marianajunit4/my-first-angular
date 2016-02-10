app.factory('selectDetailService', function ($rootScope) {
    var ret = {};

    ret.firstName = '';

    ret.broadcastItem = function (msg) {
        this.firstName = msg;
        $rootScope.$broadcast('rowSelected');
    };


    return ret;
});