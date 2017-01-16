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

font:
	fontcustom compile $(FONTCUSTOM_FLAGS)

setup:
	sudo eopkg install nodejs ruby-devel woff-tools
	sudo npm install -g less less-plugin-clean-css less-plugin-glob
	sudo gem install fontcustom

solbit:
	lessc $(LESSFLAGS) src/less/solbit.less > build/solbit.css

.DEFAULT_GOAL := all
.PHONY : all
all: font solbit