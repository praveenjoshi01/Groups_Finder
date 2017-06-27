angular.module('wAGF', [])
.controller('appDashboardController', ['$scope', '$window', '$http', function($scope, $window, $http) {        
            
        var myParam= "";     
    var qd = {};
    location.search.substr(1).split("&").forEach(function(item) {(item.split("=")[0] in qd) ? qd[item.split("=")[0]].push(item.split("=")[1]) : qd[item.split("=")[0]] = [item.split("=")[1]]})

    if(qd.ID != null)
     {myParam = qd.ID[0];}
     
     
             var encodedString = 'tokenId=' +
                    encodeURIComponent(myParam) ;
            
      //var encodedString = 1493459671 ;     
             $http({
                method : 'POST',
                url : 'ajax/AppDashboard.php',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
            

            
    }]);
