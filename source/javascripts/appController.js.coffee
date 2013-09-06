app = angular.module("SocialScreamApp", ["ngResource"])

app.factory "Scream", ($q, $http) ->
  deferred = $q.defer()
  get: (hashtag)->
    url = "http://deliens-cvbe.herokuapp.com/screams/#{hashtag}.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success((json) ->
      deferred.resolve(json)
    ).error (json) ->
      alert "error"
    deferred.promise



@AppCtrl = ($scope, Scream) ->
  times_reloaded = 0
  $scope.tag = "25este"

  admin_modal = ->
    window.admin_modal()
  
  refresh_marquee = ->
    $scope.marquee_messages = [
      {
        id: 1
        text: "#25este WALL"
      },
      {
        id: 2
        text: "Posteá a TWITTER ó INSTAGRAM usando el tag #" + $scope.tag
      }
    ]

  reload = (tag)->
    Scream.get(tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data 

  init = (tag)->
    Scream.get(tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data
      $(".marquee").addClass "animation"
      reveal_init()
 
  $scope.getMagic = -> 
    reload($scope.tag)
    admin_modal()
    
  reveal_init = ->
      (->
        Reveal.initialize
          touch: true
          controls: false
          progress: false
          history: true
          loop: true
          autoSlide: 7000
          zoom: 10
          width: 1024
          height: 768
          minScale: 0.2
          maxScale: 1.0

      ).call this

  Reveal.addEventListener "slidechanged", (event) ->
    if Reveal.isLastSlide()
      init($scope.tag)

  init($scope.tag)

