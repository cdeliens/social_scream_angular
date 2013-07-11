$(document).ready ->

  opts =
    lines: 13 # The number of lines to draw
    length: 19 # The length of each line
    width: 5 # The line thickness
    radius: 31 # The radius of the inner circle
    corners: 1 # Corner roundness (0..1)
    rotate: 0 # The rotation offset
    color: "#000" # #rgb or #rrggbb
    speed: 0.9 # Rounds per second
    trail: 34 # Afterglow percentage
    shadow: true # Whether to render a shadow
    hwaccel: false # Whether to use   hardware acceleration
    className: "spinner" # The CSS class to assign to the spinner
    zIndex: 2e9 # The z-index (defaults to 2000000000)
    top: "auto" # Top position relative to parent in px
    left: "auto" # Left position relative to parent in px

  target = document.getElementById("loading")
  spinner = new Spinner(opts).spin(target)
  height = undefined
  height = $("body").height()
  $("#loading").css "margin-top", ((height / 2) + "px")

