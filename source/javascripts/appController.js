function AppController($scope) {
  $scope.options = [
    {background: "bg1", link: "#", text: "Link 1"},
    {background: "bg2", link: "#", text: "Link 2"},
    {background: "bg1", link: "#", text: "Link 3"},
    {background: "bg2", link: "#", text: "Link 4"}];
  
  $scope.active_background = $scope.options[0].background;

  $scope.changeBg = function(background){
    $scope.active_background = background;
  }

};