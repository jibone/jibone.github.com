###
#
# Main JavaScript
#
###

"use strict"

# -- avoid console.log error on IE
unless window.console
  window.console =
    log: ->

# -- init app
$ ->
  $("p, li, h1, h2, h3, h4, h5, h6, a, span").unorphan()

# -- document ready
