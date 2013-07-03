app = angular.module("CVApp", ["ngResource"])

app.factory "Page", ($q, $http) ->
  all: ->
    deferred = $q.defer()
    url = "http://cv-be.dev/pages.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success (json) ->
      deferred.resolve(json)
    deferred.promise
  get: (id) ->
    deferred = $q.defer()
    url = "http://cv-be.dev/pages/#{id}.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success (json) ->
      deferred.resolve(json)
    deferred.promise    
    
        

@AppCtrl = ($scope, Page) ->
  posts_promise = Page.all()
  posts_promise.then (data) ->
    $scope.posts = data

  post_promise = Page.get(3)
  post_promise.then (data) ->
   $scope.post = data

