# Solbit

Solbit is the unified component styling for Solus brand assets, such as Help Center and Solus websites, as well as future Solhub.

## Font

The Solbit Icons font is intended to work independently of any separate fonts provided via brand assets, such as from the  Solus websites / platforms.


## Styling

The Solbit Styling is intended to be utilized by the respective styling of the above listed assets and **is not intended to be shipped independently**. Compilation of 
solbit is purely **intended to validate** a lack of SASS errors. Assets inheriting this theming due so via Git submodules and leverage SASS importing to merge it into a single stylesheet.

## Development

### Dependencies

To get started on development, run `make setup` on Solus.

### Styling

Solbit styling takes advantage of SASS for a wide variety of features, such as mixins, variables, and nesting.

### Compile

- All the things: `make`
- Fonts: `make font`
- SASS: `make sass`

### Styling

I use 4-char wide tabs, not spaces, in everything **except** YAML files, as enforced by YAML's specification.

## Licensing

All source **except** for the Solbit font are licensed under Apache-2.0. Solbit font icons are provided by FontAwesome under [SIL OFL 1.1](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).
