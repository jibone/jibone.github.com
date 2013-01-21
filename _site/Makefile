CSS   = ./css/jshamsul.css
LESS  = ./_less/jshamsul.less
DATE  =$(shell date +%I:%M%p)
CHECK =\033[32m✔\033[39m

build:
	@lessc -x ${LESS} > ${CSS}
	@echo "[${DATE}] - Compiling LESS...             ${CHECK} Done"

watch:
	@lessc -x ${LESS} > ${CSS}
	watchr -e "watch('_less/.*\.less') { system 'make' }"
