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
  times_reloaded = 0
  $scope.tag = "costarica"

  admin_modal = ->
    console.log "modal"
    window.admin_modal()
  
  refresh_marquee = ->
    $scope.marquee_messages = [
      {
        id: 1
        text: "#WALL por 25este.com"
      },
      {
        id: 2
        text: "Posteá a TWITTER ó INSTAGRAM usando el tag #" + $scope.tag
      }
    ]

  reload = ->
    times_reloaded = times_reloaded + 1
    console.log "#{times_reloaded} times reloaded with tag: ##{$scope.tag}" if console
    Scream.get($scope.tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data 
      refresh_marquee()
      console.log "Number of screams: #{$scope.screams.length}"

  init = (tag)->
    Scream.get(tag).then (data) ->
      $scope.screams = {}
      $scope.screams = data
      refresh_marquee()
      $(".marquee").addClass "animation"
      reveal_init()
      

    
 
  $scope.getMagic = -> 
    reload()
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

      ).call this

  Reveal.addEventListener "slidechanged", (event) ->
    reload() if Reveal.isLastSlide()

  init($scope.tag)

