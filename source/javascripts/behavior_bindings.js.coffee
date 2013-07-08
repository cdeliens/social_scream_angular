@toogle_admin = ->
  $("#main_block").fadeToggle('fast')
  $("#admin").fadeToggle('fast')
  

$ ->
  key 'ctrl+a', ->
    toogle_admin()
