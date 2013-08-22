###
jShamsul.com - Cakefile
###

# ------------------------------------------------------
# -- Load dependencies ---------------------------------
fs              = require "fs"
{ spawn, exec } = require "child_process"

# ------------------------------------------------------
# -- console colors ------------------------------------
red   = "\u001b[31m"
blue  = "\u001b[34m"
green = "\u001b[32m"
reset = "\u001b[0m"

# ------------------------------------------------------
# -- Define directory path -----------------------------
config =
  srcDir: '_coffee'
  outDir: 'js'
  inFiles: ['app']
  outFile: 'js'

outJS = "#{config.outDir}/#{config.outFile}"
strFiles = ("#{config.srcDir}/#{file}.coffee" for file in config.inFiles).join ' '

sass =
  srcDir: '_sass'
  outDir: 'css'
  file: 'js'

# ------------------------------------------------------
# -- time function -------------------------------------
gettime = () ->
  d = new Date()
  curr_hour = d.getHours()
  if curr_hour < 12
    a_p = "AM"
  else
    a_p = "PM"
  curr_hour = 12 if curr_hour is 0
  curr_hour = curr_hour - 12 if curr_hour > 12
  curr_min = d.getMinutes()
  curr_min = curr_min + ""
  curr_min = "0" + curr_min if curr_min.length is 1
  curr_hour + ":" + curr_min + " " + a_p

# ------------------------------------------------------
# -- Deal with the errors ------------------------------
exerr = (err, sout, serr) ->
  process.stdout.write "[#{red}#{gettime()}#{reset}] " + err if err
  process.stdout.write "[#{blue}#{gettime()}#{reset}] " + sout if sout
  process.stdout.write "[#{red}#{gettime()}#{reset}] " + serr if serr

# ------------------------------------------------------
# -- Compile & watch functions -------------------------
compileCoffee = () ->
  exec "coffee -j #{outJS}.js -c #{strFiles}", exerr
  process.stdout.write "[#{blue}#{gettime()}#{reset}] " + green + "compiled" + reset + " #{strFiles}\n"

compileSass = () ->
  exec "sass -t compressed #{sass.srcDir}/#{sass.file}.scss #{sass.outDir}/#{sass.file}.css", exerr
  process.stdout.write "[#{blue}#{gettime()}#{reset}] " + green + "compiled" + reset + " #{sass.srcDir}/#{sass.file}.scss\n"

watchSassFiles = (filename) ->
  unless filename.charAt(0) is "."
    console.log "[#{blue}#{gettime()}#{reset}] " + "#{blue}watching#{reset}: " + "sass/" + filename
    fs.watchFile "sass/" + filename, (curr, prev) ->
      console.log "[#{blue}#{gettime()}#{reset}] " + "#{blue}changed!#{reset}: " + filename
      compileSass()

watchCoffeeFiles = (filename) ->
  unless filename.charAt(0) is "."
    console.log "[#{blue}#{gettime()}#{reset}] " + "#{blue}watching#{reset}: " + "sass/" + filename
    fs.watchFile "coffee/" + filename, (curr, prev) ->
      console.log "[#{blue}#{gettime()}#{reset}] " + "#{blue}changed!#{reset}: " + filename
      compileCoffee()

# ------------------------------------------------------
# -- All the tasks -------------------------------------
task 'build', 'join and compile *.coffee and *.scss files', ->
  compileCoffee()
  compileSass()

task 'build:js', 'join and compile *.coffee', ->
  compileCoffee()

task 'build:css', 'compile *.scss files', ->
  compileSass()

task 'watch', 'watch coffee and sass directory for changes and compile', ->
  coffeeFiles = fs.readdirSync config.srcDir
  watchCoffeeFiles filename for filename in coffeeFiles
  sassFiles = fs.readdirSync sass.srcDir
  watchSassFile filename for filename in sassFiles

task 'watch:js', 'watch coffee directory for changes and compile', ->
  filearray = fs.readdirSync config.srcDir
  watchCoffeeFiles filename for filename in filearray

task 'watch:css', 'watch sass directory for changes and compile', ->
  filearray = fs.readdirSync sass.srcDir
  watchSassFiles filename for filename in filearray

