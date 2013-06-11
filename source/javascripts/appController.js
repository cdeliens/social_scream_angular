var myApp = angular.module('photomatonApp',[]);


function AppController($scope, $http) {
  
  raw_data_to_photo_url = function(data) {
    var i, photos;
    photos = new Array(); 
    i = 0;
    while (i < data.photo.length) {
      photos[i] = {
        original: "http://farm" + data.photo[i].farm + ".staticflickr.com/" + data.photo[i].server + "/" + data.photo[i].id + "_" + data.photo[i].secret + ".jpg",
        thumbnail: "http://farm" + data.photo[i].farm + ".staticflickr.com/" + data.photo[i].server + "/" + data.photo[i].id + "_" + data.photo[i].secret +"_t.jpg",
        small_square: "http://farm" + data.photo[i].farm + ".staticflickr.com/" + data.photo[i].server + "/" + data.photo[i].id + "_" + data.photo[i].secret +"_s.jpg",
        large_square: "http://farm" + data.photo[i].farm + ".staticflickr.com/" + data.photo[i].server + "/" + data.photo[i].id + "_" + data.photo[i].secret +"_q.jpg",
        small: "http://farm" + data.photo[i].farm + ".staticflickr.com/" + data.photo[i].server + "/" + data.photo[i].id + "_" + data.photo[i].secret +"_m.jpg",
        medium: "http://farm" + data.photo[i].farm + ".staticflickr.com/" + data.photo[i].server + "/" + data.photo[i].id + "_" + data.photo[i].secret +"_c.jpg",
        large: "http://farm" + data.photo[i].farm + ".staticflickr.com/" + data.photo[i].server + "/" + data.photo[i].id + "_" + data.photo[i].secret +"_b.jpg"
      };
      i++;
    }
    
    return photos;
  };
    
  jsonFlickrApi = function(data) {
    if (data.photoset){
      var photos = raw_data_to_photo_url(data.photoset)
      var photoset_id = data.photoset.id
      var next_page = parseInt(data.photoset.page) + 1
      var back_page = parseInt(data.photoset.page) + 1
      $scope.photoset = {
        photoset_id: photoset_id,
        photos: photos,
        next_page: next_page

      }
    }
  };

  $scope.options = [
    {background: "bg1", link: "#", text: "Link 1", photoset_id: ""},
    {background: "bg2", link: "#", text: "120 Film", photoset_id: "72157626059565215"},
    {background: "bg3", link: "#", text: "Transitarte", photoset_id: "72157623375166190"},
    {background: "bg2", link: "#", text: "Love Fest", photoset_id: "72157623343824483"}];

  $flicker = {api_key: "f7cfa67c284234e73e1e504dd46a06ab", secret_key: "254af5059eee282b", user_id: "61845898@N00"}
  
  $scope.active_background = $scope.options[0].background;

  $scope.changeBg = function(option){
    $scope.active_background = option.background;
    $scope.getPhotos(option.photoset_id);
  }
  
  $scope.getPhotos = function(photoset_id, page){
    var per_page = 12;
    if (!page) page = 1;
    if(photoset_id == ""){
      $scope.photoset = ""
    }else{
      // Callback jsonFlickrApi function
      $http.jsonp('http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+ $flicker.api_key +'&photoset_id='+ photoset_id +'&per_page='+ per_page +'&page='+ page +'&format=json')   
    }
   
  }
  $scope.nextPage = function (photoset){
    $scope.getPhotos(photoset.photoset_id, photoset.next_page)
  }
  $scope.backPage = function (photoset){
    $scope.getPhotos(photoset.photoset_id, photoset.back_page)
  }


};