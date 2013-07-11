app = angular.module("SocialScreamApp", ["ngResource"])


app.factory "Twitter", ($q, $http) ->
  get: (hashtag) ->
    deferred = $q.defer()
    url = "http://cv-be.dev/twitter_services/#{hashtag}.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success (json) ->
      deferred.resolve(json)
    deferred.promise

app.factory "Instagram", ($q, $http) ->
  get: (hashtag) ->
    deferred = $q.defer()
    url = "http://cv-be.dev/instagram_services/#{hashtag}.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success (json) ->
      deferred.resolve(json)
    deferred.promise

app.factory "Scream", ($q, $http) ->
  get: (hashtag)->
    deferred = $q.defer()
    url = "http://deliens-cvbe.herokuapp.com/screams/#{hashtag}.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success (json) ->
      deferred.resolve(json)
    deferred.promise


@AppCtrl = ($scope, Scream) ->
  $scope.tag = "costarica"

  init = (tag)->
    Scream.get(tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data
      reveal_init()
 
  $scope.getMagic = -> 
    init($scope.tag)
    
  window.reveal_init = ->
      (->
        Reveal.initialize
          controls: false
          progress: false
          history: true
          loop: true
          autoSlide: 5000
          zoom: 1
      ).call this

  init($scope.tag)