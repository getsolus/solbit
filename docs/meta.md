# Meta

For better maintainability, several sets of SASS definitions are broken out into their own file. This has the added benefit of making it much easier to override the defaults.

1. **Colors**  
   Every single color used in Solbit must only be referenced as a variable. This file contains all of those color declorations.
2. **Sizes**  
   Like colors, sizes are only referenced by name. All of the declarations are defined in this file.
3. **Functions**  
   SASS functions allow a developer to reuse code as neccessary. All Solbit functions are defined here.
4. **Mixins**  
   SASS mixins make it possible to easily define multiple CSS rules and to set their values using parameters. The Solbit mixins are used heavily to llow developers to change them in one location and still have that change reflected across the whole codebase.
5. **Fonts**  
   The primary font-face for a Solbit site is defined here.
6. **Resets**  
   Because each browser ships with its own user-stylesheet, resets are used to override the most prolematic default settings to allow for consist display accross browsers.
