function appController($scope) {
  $scope.options = [
    {background: "bg1", link: "#", text: "Link 1", effect: "fade"},
    {background: "bg2", link: "#", text: "Link 2", effect: "fade"},
    {background: "bg1", link: "#", text: "Link 3", effect: "fade"},
    {background: "bg2", link: "#", text: "Link 4", effect: "fade"}];
  
  $scope.active_background = $scope.options[0].background;

  $scope.changeBg = function(background){
    $scope.active_background = background;
  }

};