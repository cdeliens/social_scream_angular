#Load player api asynchronously.
onYouTubeIframeAPIReady = ->
  player = new YT.Player("player",
    height: "390"
    width: "640"
    videoId: "JW5meKfy3fY"
    events:
      onReady: onPlayerReady
      onStateChange: onPlayerStateChange
  )
onPlayerReady = (evt) ->
  evt.target.playVideo()
onPlayerStateChange = (evt) ->
  if evt.data is YT.PlayerState.PLAYING and not done
    setTimeout stopVideo, 6000
    done = true
stopVideo = ->
  player.stopVideo()
tag = document.createElement("script")
tag.src = "https://www.youtube.com/iframe_api"
firstScriptTag = document.getElementsByTagName("script")[0]
firstScriptTag.parentNode.insertBefore tag, firstScriptTag
done = false
player = undefined