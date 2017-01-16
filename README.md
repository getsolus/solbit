# Solbit

Solbit is the unified component styling and JavaScript for Budgie and Solus brand assets, such as the Budgie and Solus websites, as well as future Solhub.

## Font

The Solbit Icons font is intended to work independently of any separate fonts provided via brand assets, such as from the Budgie or Solus websites / platforms.

## JavaScript

The Solbit JavaScript is intended to work independently of any JavaScript provided via brand assets, such as from the Budgie or Solus websites / platforms.

## Styling

The Solbit Styling is intended to be utilized by the respective styling of the above listed assets and **is not intended to be shipped independently**. Compilation of 
solbit is purely **intended to validate** a lack of LESS errors. Assets inheriting this theming due so via Git submodules and leverage LESS importing to merge it into a single stylesheet.

## Development

### JavaScript

Solbit JavaScript takes advantage of TypeScript to enable faster iteration, type checking, clean implementation of namespacing and modules, etc.

#### Dependencies

To get started on TypeScript development, run `make setup` on Solus. If you're not on Solus, you'll need to:

1. Install nodejs.
2. Globally npm install: closurecompiler typescript

### Styling

Solbit styling takes advantage of LESS for a wide variety of features, such as mixins, variables, and nesting.

#### Dependencies

To get started on LESS development, run `make setup` on Solus. If you're not on Solus, you'll need to:

1. Install nodejs, ruby and ruby-devel (or whatever the equivelant is on your operating system), and woff-tools.
2. Globally npm install: less less-plugin-clean-css less-plugin-glob
3. Gem install fontcustom

### Compile

- All the things: `make`
- Fonts: `make font`
- LESS: `make less`
- TypeScript: `make ts`
 - Minify generated JavaScript: `make minify`

### Styling

I use 4-char wide tabs, not spaces, in everything **except** YAML files, as enforced by YAML's specification.

## Licensing

Apache-2.0