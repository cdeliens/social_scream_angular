@admin_modal = ->
  $("#admin").modal('toggle') 

@initialize_parallax = ->
  console.log "parallax"
  $(".slide_container").children().each (index, e) ->
    console.log "parallax + #{index}"
    p = parallax
    p.add($(@).attr('id'), $(@))
    $(document).keydown (e) ->
      p.bar.left()  if e.keyCode is 37


$ ->
  key 'ctrl+a', ->
    admin_modal()


  

