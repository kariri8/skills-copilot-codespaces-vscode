function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '=',
      show: '='
    },
    controller: function($scope) {
      $scope.show = false;
      $scope.toggle = function() {
        $scope.show = !$scope.show;
      };
    }
  };
}