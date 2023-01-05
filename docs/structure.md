# Solbit Structure

## HTML Layout

Our goal here is to use the semantically appropriate HTML tags wherever possible, and this starts from the very beginning. The `html`, `head`, and `body` tags are pretty wrong to mess with, so they are unchanged.

``` html
<html>
    <head> ... </head>
    <body>
        ...
    </body>
</html>
```

### Head Contents

There are tons of different information we might decide to encode inside `head`, so lets focus on what Solbit really needs to work right:

``` html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="path/to/solbit.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100%7CRoboto:300%7CRoboto:400" media="all">
    <noscript>
        <style>.js { display:none; }</style>
    </noscript>
</head>
```

1. **Viewport**  
   In order to make sure our styles scale correctly on all screen sizes, we enforce the default viewport scaling.
2. **CSS**  
   This one is no surprise, we need to include the stylesheet. What *is* a surprise, is that Solbit uses **ZERO** JavaScript.
3. **Roboto**  
   Solus uses Roboto as the font on all of our sites. Solbit is no different.
4. **Noscript**  
   Sure, most people have JS enabled all the time. Maybe they have an ad-blocker that disabled JS from some sources. But we still want our sites to be useful for browser clients with lower capabilities. A site should work without JS and be more powerful with JS. Adding this `noscript` entry makes it easy to hide those JS elements for clients that can't use them.

## Body Layout

Solbit keeps a consistent page layout for all content:

``` html
<body>
    <header> ... </header>

    <!-- Optional Banner -->
    <div class="banner">
        ...
        <!-- Optional Search -->
        <div class="search js"> ... </div>
    </div>

    <main> ... </main>

    <footer> ... </footer>
</body>
```

1. **(Header)[structure/header.md]**  
   Each page starts with a common header which provides a site logo and basic navigation.
2. **(Banner)[structure/banner.md]**  
   Sometimes we want to labe a particular section of our site. This is especially useful when the site is made from multiple Github Pages repositories. And to make search functionality easier, we'll focus on searching in just that section instead of a global search for the site.
3. **(Main)[structure/main.md]**   
   Many sites get this one wrong and it hurts SEO. Solbit makes sure that you have a `main` that declares where the important page content resides.
4. **(Footer)[structure/footer.md]**  
   As with most sites, a Solbit footer is predominantly focused on providing more detailed navigation and any copyright or legal notices.
