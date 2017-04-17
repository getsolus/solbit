SHELL = /bin/bash

CCJS_FLAGS= --compilation_level=SIMPLE_OPTIMIZATIONS \
	--warning_level=QUIET

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

buildts:
	tsc $(TSC_COMPILE_FLAGS) src/typescript/solbit.ts --outFile build/solbit.js

font:
	fontcustom compile $(FONTCUSTOM_FLAGS)

setup:
	sudo eopkg install nodejs ruby-devel woff-tools
	sudo npm install -g closurecompiler less less-plugin-clean-css less-plugin-glob typescript
	sudo gem install fontcustom

less:
	lessc $(LESSFLAGS) src/less/solbit.less > build/solbit.css

minify:
	ccjs build/solbit.js $(CCJS_FLAGS) > build/solbit.min.js
	./dosum.sh

ts: buildts minify

.DEFAULT_GOAL := all
.PHONY : all
all: font less ts minify