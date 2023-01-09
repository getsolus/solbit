# Elements

Solbit defines several reusable elements that may be used freely across a site.

## Buttons

Buttons are interactive elements of a solbit page. They do not require JS, but may be used for JS elements. Buttons may use either the `a` or `button` tag.

``` html
<a href="" class="button">Normal</a>
<button class="button small"> Small </button>
<a href="" class="button hover">Hover</a>
```

There are multiple classes of button:

1. **Normal**  
   This button is the same size as normal text and take up the full line height.
2. **Small**  
   This button is a bit smaller that a Normal button and has smaller text as well.
3. **Hover**  
   Hover buttons have a slight radius and change color when a visitor hovers their cursor over them.

> **NOTE:** Hover may be combined with normal or small buttons.

### Custom Button Types

Solbit users may also leverage the `proto-button` mixin to create custom button elements.


## Code

Sometimes it is useful to render code on your site. You may also choose to rely on something like `highlight.js` to highlight syntax. Solbit supports bare code tags, but may require a `pre` wrapper element if the contained code is HTML.

```
<pre>
    <code> ... </code>
</pre>
<code> ... </code>
```


## Headings

Solbit headings act just like normal headings. However, the sizes have been chosen for readability and consistency.


## Keyboard Bindings

Solbit stylizes `kbd` tags for better legibility. They are otherwise identical in use as they would be for bare HTML.


## Lists

Solbit applies consistent styling to lists. Nothing fancy, but definitely readable.


## Menus

A custom menu element is used in several places by solbit. In general, it is a list of navigation links, but an optional label may be specified.

``` html
<div class="menu">
    <b> Optional Label </b>
    <nav>
        <a> ... </a>
        <a> ... </a>
        <a> ... </a>
    </nav>
</div>
```


## Pagination

Sometimes it is useful to allow pagination for lists of related pages. Solbit tries to make this as easy as possible by using a list of page links and marking the current page with the `button` class.

``` html
<nav class="pages">
    <a href="">1</a>
    <a href="" class="button">2</a>
    <a href="">3</a>
    <a href="">4</a>
    <a href="">5</a>
</nav>
```

## Quotes

Every once in awhile it is useful to have a blockquote style. Solbit keeps this one really simple:

``` html
<blockquote>
    Hello World
</blockquote>
```

## Search

Our search is optional here so that clients without JS won't display a broken search element.

``` html
<button class="search js">
    <b class="icon-search">Search Articles</b>
    <div class="shortcut">
        <kbd>Ctrl</kbd>
        <kbd>K</kbd>
    </div>
</button>
```

1. **Label**  
   We can label the search button with an icon and text
2. **Shortcut**  
   For site-generators like `mkdocs` we might also support a keyboard shortcut to open the search. In this case it is ```ctrl``` + ```k```


## Tables

Solbit doesn't do anything particularly special with tables. It simply provides default styling and tries to help them display better on different devices.


## Video

In Solbit, a video is rendered using the client style-sheet for symplicity, but the width of the video pane is limited by CSS rules.

