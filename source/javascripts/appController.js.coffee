app = angular.module("SocialScreamApp", ["ngResource"])


app.factory "Twitter", ($q, $http) ->
  get: (hashtag) ->
    deferred = $q.defer()
    url = "http://cv-be.dev/twitter_services/#{hashtag}.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success (json) ->
      deferred.resolve(json)
    deferred.promise

@AppCtrl = ($scope, Twitter) ->
  $scope.getMagic = ->
    Twitter.get($scope.hashtag.entry).then (data) ->
      $scope.tweets = data



