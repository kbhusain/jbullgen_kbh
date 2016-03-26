// JavaScript Document

var app=angular.module('goalsListApp',['ngResource']);

app.controller("menuController", function($scope) { 

  $scope.app = { 
      message: "Goals",
      saveme : "Yes",
      goalType: "Weekly"
  };   


  $scope.showGoalType = function (gtype) {
    $scope.app.goalType = gtype; 
  }
  
  $scope.showWeeklyType = function () {
    $scope.app.goalType = "Weekly"; 
  }
  
  $scope.myback = ""; 

 
    $scope.mygoals = [
          { name: "DGoal1",  gtype: "Daily" }, 
          { name: "DGoal2",  gtype: "Daily" }, 
          { name: "DGoal3",  gtype: "Daily" }, 
          { name: "DGoal4",  gtype: "Daily" }, 
          { name: "WGoal1",  gtype: "Weekly" }, 
          { name: "WGoal2",  gtype: "Weekly" }, 
          { name: "MGoal3",  gtype: "Monthly" }, 
          { name: "MGoal4",  gtype: "Monthly" }, 
      ];
 
  $scope.removeGoal = function(agoal) {
     var index = $scope.mygoals.indexOf(agoal);
     $scope.mygoals.splice(index,1);
  };
  
  $scope.addGoal = function() {
      $scope.mygoals.push( {name: "NewGoal", gtype: $scope.app.goalType} ); 
  };
  
  $scope.saveGoals = function() { 
   // Run through
    var mystr = JSON.stringify($scope.mygoals) ;
    $scope.myback = mystr; 
    alert(mystr);
    localStorageService.set('savedgoals',mystr); 
    alert("After Saving");
  };
  
  $scope.getGoals = function() { 
   // Run through
   alert("Get from Saving");
   $scope.myback = localStorageService.get('savedgoals',mystr);
   $scope.mygoals = JSON.parse($scope.myback);
  };
  
});
