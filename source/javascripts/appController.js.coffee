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
  $scope.tags = ["25este", "elsteinvorth", "hubasilica"]
  $scope.tag = "25este"
  reload_marquee = ->
    $scope.marquee_messages = [
      {
        id: 1
        text: "3er Aniversario 25este.com - Huba & Silica - Manu Solano - Nochi - Lippa - Prestinary - Santini"
      },
      {
        id: 2
        text: "Posteá a TWITTER ó INSTAGRAM usando el tag #" + $scope.tag
      }
    ]
  $scope.getMagic = -> 
    $scope.reload()
    admin_modal()

  admin_modal = ->
    window.admin_modal()

  $scope.reload = ->
    Scream.get($scope.tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data
      reload_marquee()


  init = (tag)->
    Scream.get(tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data
      $(".marquee").addClass "animation"
      reload_marquee()
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
          # minScale: 0.2
          # maxScale: 1.0
      ).call this

  # Reveal.addEventListener "slidechanged", (event) ->
  #   if Reveal.isLastSlide()
  #     $scope.tag = $scope.tags[Math.floor(Math.random() * $scope.tags.length)]
  #     $(".hack").trigger("submit")

  Reveal.addEventListener "loading", (->
    $scope.tag = $scope.tags[Math.floor(Math.random() * $scope.tags.length)]
    $(".hack").trigger("submit")
    player.stopVideo()
    Reveal.configure 
      autoSlide: 4000
  ), false

  Reveal.addEventListener "video", (->
    player.playVideo()
    Reveal.configure 
      autoSlide: 0
  ), false

  Reveal.addEventListener "Instagram", (->
    Reveal.configure 
      autoSlide: 4500
  ), false

  Reveal.addEventListener "Twitter", (->
    Reveal.configure 
      autoSlide: 8000
  ), false

  Reveal.addEventListener "Scream", (->
    Reveal.configure autoSlide: 8000
  ), false

  init($scope.tag)

