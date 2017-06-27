angular.module('wAGF', [])
    .controller('loginController', ['$scope', '$window', '$http', function($scope, $window, $http) {        
            this.postForm = function() {
                var encodedString = 'username=' +
                    encodeURIComponent(this.log.email) +
                    '&password=' +
                    encodeURIComponent(this.log.password);
 
                $http({
                    method: 'POST',
                    url: 'ajax/Login.php',
                    data: encodedString,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                
                .success(function(data) {
                        //console.log(data);
                        if ( data[0].id != null) {
                          var successId = data[0].id;
                          $window.location.href = "http://whatsappgroupsfinder.demoprojects.ithesisart.com/A_DashboardCreate.html?ID="+ successId 
                        } else {
                             $(".alert-danger").delay(200).addClass("in").fadeOut(12000);
                        }
                })            
            }
    }]);


    $(document).ready(function() {
    var qd = {};
    location.search.substr(1).split("&").forEach(function(item) {(item.split("=")[0] in qd) ? qd[item.split("=")[0]].push(item.split("=")[1]) : qd[item.split("=")[0]] = [item.split("=")[1]]})

    var myParam =  0;

    if(qd.ID != null)
     {myParam = qd.ID[0];}

    if(myParam == "1")
    {
        $(".alert-success").delay(200).addClass("in").fadeOut(12000);
    }
});