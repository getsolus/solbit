# Solbit

Unified component styling for Budgie and Solus brand assets, such as the Budgie and Solus websites, as well as future Solhub.

**Note:** This styling is intended to be utilized by the respective styling of the above listed assets and is not intended to be shipped independently. Compilation of 
solbit is purely intended to validate a lack of LESS errors. Assets inheriting this theming due so via Git submodules and leverage LESS importing to merge it into a single stylesheet.

## Development

### Dependencies

To get started on LESS development, run `make setup` on Solus. If you're not on Solus, you'll need to:

1. Install nodejs, ruby and ruby-devel (or whatever the equivelant is on your operating system), and woff-tools.
2. Globally npm install: less less-plugin-clean-css less-plugin-glob
3. Gem install fontcustom

### Compile

- All the things: `make`
- Fonts: `make font`
- LESS: `make solbit`

### Styling

I use 4-char wide tabs, not spaces, in everything **except** YAML files, as enforced by YAML's specification.

## Licensing

Apache-2.0