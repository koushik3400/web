var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){
    var ele = document.getElementById("myVdo");
    $scope.play_vdo = function(){
        ele.play();
    }
    $scope.pause_vdo = function(){
        ele.pause();
    }
    $scope.maximize = function(){
        ele.requestFullscreen();
    }
    $scope.mute_ado = function(){
        ele.muted = true;
    }
    $scope.unmute_ado = function(){
        ele.muted = false;
    }
    $scope.speed_ctrl = function(){
        ele.playbackRate = 2;
    }

});