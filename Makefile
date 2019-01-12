SHELL = /bin/bash

FONTCUSTOM_FLAGS = --config src/font/fontcustom.yml \
	--name=solbit \
	--no-hash \
	--output=build/fonts/ \
	src/font/

LESSFLAGS = --clean-css \
	--glob \
	--no-color \
	--no-ie-compat \
	--no-js \
	--strict-math=on

TSC_COMPILE_FLAGS = --declaration \
	--forceConsistentCasingInFileNames \
	--noImplicitAny \
	--noImplicitReturns \
	--noUnusedParameters \
	--outDir build/ \
	--removeComments \
	--target ES5

UGLIIFYJS_FLAGS= --compress --mangle warnings=false

buildts:
	rm -f build/*.min.js
	tsc $(TSC_COMPILE_FLAGS) src/typescript/solbit.ts --outFile build/solbit.js

font:
	fontcustom compile $(FONTCUSTOM_FLAGS)

setup:
	sudo eopkg install nodejs ruby-devel woff-tools
	sudo npm install -g less less-plugin-clean-css less-plugin-glob typescript uglify-js2
	sudo gem install fontcustom

less:
	lessc $(LESSFLAGS) src/less/solbit.less > build/solbit.css

minify:
	uglifyjs2 $(UGLIIFYJS_FLAGS) build/solbit.js > build/solbit.min.js
	./dosum.sh

ts: buildts minify

.DEFAULT_GOAL := all
.PHONY : all
all: font less ts minify