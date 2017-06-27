//Define an angular module for our app
var app = angular.module('wAGF', []);

app.controller('regController', function ($scope, $window, $http) {
    $scope.AccRegistration = function (reg) {
        if (reg.password == reg.passwordConfirm) {
            fullName = reg.fullName;
            email = reg.email;
            phoneNumber = reg.phoneNumber;
            password = reg.password;

            $http.post("ajax/AccRegistration.php?fullName=" + fullName + "&email=" + email + "&phoneNumber=" + phoneNumber + "&password=" + password).success(function (data) {
                fullName = data;
            })
            .success(function(data){
                 $window.location.href = "http://whatsappgroupsfinder.demoprojects.ithesisart.com/Login.html?ID=1"
            })
            .error(function (data) {
                fullName = data;
                $(".alert").delay(200).addClass("in").fadeOut(4000);
            });
        }
        else { $('#myModal').modal('show'); }
    };
});