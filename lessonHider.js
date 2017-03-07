angular.module('directivePractice').directive("lessonHider", function(){
  return{
    templateUrl: "lessonHider.html",
    restrict: 'E',
    scope:{
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonSrv) {
      $scope.getSchedule = lessonSrv.getSchedule

      $scope.done = false
    },
    link: function(scope,elem,attrs){
      scope.getSchedule().then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay){
          if(scheduleDay.lesson === scope.lesson){
            scope.lessonDay = scheduleDay.weekday;
            elem.css('text-decoration','line-through')
            scope.done = true
            // scope.toggleSchedule = false;
              return;
          }
          else if (scheduleDay.lesson !== scope.lesson){
            // elem.find("button").css('display','none')
          }
        })

        scope.toggleSchedule = function(){
          scope.done = !scope.done
          scope.done
          ?
            elem.css('text-decoration', 'line-through')
          :
            elem.css('text-decoration', 'none')
        }
      })
    }
  }

})
