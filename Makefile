SHELL = /bin/bash

FONTCUSTOM_FLAGS = --config font/fontcustom.yml \
	--name=solbit \
	--no-hash \
	--output=build/fonts/ \
	font/

SASSFLAGS = --style nested -M


setup:
	sudo eopkg install fontcustom sassc

compile:
	fontcustom compile $(FONTCUSTOM_FLAGS)
	sassc $(SASSFLAGS) sass/solbit.sass > build/solbit.css
	gzip -kf build/solbit.css

.DEFAULT_GOAL := all

.PHONY: all

all: compile
