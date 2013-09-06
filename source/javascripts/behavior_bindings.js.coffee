@admin_modal = ->
  $("#admin").modal('toggle')
  $('#admin').on 'shown.bs.modal', ->
    $("input[type='text']").focus()
  
enterFullscreen = ->
  element = document.body
  
  # Check which implementation is available
  requestMethod = element.requestFullScreen or element.webkitRequestFullscreen or element.webkitRequestFullScreen or element.mozRequestFullScreen or element.msRequestFullScreen
  requestMethod.apply element  if requestMethod

$ ->
  key 'ctrl+a', ->
    admin_modal()

  $control = $(".control")
  $control.mouseenter ->
    $(@).removeClass("hide")
  $control.mouseleave ->
    $(@).addClass("hide")

  $control.find('.settings').on "click", ->
    admin_modal()

  $control.find('.fullscreen').on "click", ->
    enterFullscreen()
  

