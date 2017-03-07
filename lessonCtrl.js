angular.module('directivePractice').controller('lessonCtrl', function($scope, $window){
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = 'Two-way data binding !'

  $scope.announceDay = function(lesson,day){
    if(!day){
      alert("Not scheduled")
    }
    else alert(lesson + ' is active on ' + day + '.')
  }
})
