app = angular.module("SocialScreamApp", ["ngResource"])

app.factory "Scream", ($q, $http) ->
  get: (hashtag)->
    deferred = $q.defer()
    console.log "Load"
    url = "http://deliens-cvbe.herokuapp.com/screams/#{hashtag}.json?callback=JSON_CALLBACK"
    $http.jsonp(url).success((json) ->
      deferred.resolve(json)
      console.log "reload success"
    ).error (json) ->
      console.error "reload error" if console
    deferred.promise

@AppCtrl = ($scope, Scream) ->
  $scope.tag = "25este"
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

  $scope.getMagic = -> 
    $scope.reload($scope.tag)
    admin_modal()

  admin_modal = ->
    window.admin_modal()

  $scope.reload = (tag)->
    Scream.get(tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data 

  init = (tag)->
    Scream.get(tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data
      $(".marquee").addClass "animation"
      reveal_init()
 
  reveal_init = ->
      (->
        Reveal.initialize
          touch: true
          controls: false
          progress: false
          history: true
          loop: true
          zoom: 10
          width: 1024
          height: 768
          minScale: 0.2
          maxScale: 1.0
      ).call this

  Reveal.addEventListener "slidechanged", (event) ->
    if Reveal.isLastSlide()
      $scope.reload($scope.tag)

  Reveal.addEventListener "video", (->
    Reveal.configure autoSlide: 30000
  ), false

  Reveal.addEventListener "Instagram", (->
    Reveal.configure autoSlide: 4500
  ), false

  Reveal.addEventListener "Twitter", (->
    Reveal.configure autoSlide: 7000
  ), false

  Reveal.addEventListener "Scream", (->
    Reveal.configure autoSlide: 1000
  ), false

  init($scope.tag)

