# Header

The `header` is the first thing that people will see on a site. In Solbit, we try to make a good impression by keeping the header simple, but effective:

``` html
<header>
    <div class="bar">
        <a class="logo">
            <img src="img/logo.jpg">
        </a>

        <div class="menu"> ... </div>

        <button>
            <label class="icon-menu" for="toggle"></label>
        </button>
    </div>

    <input type="checkbox" id="toggle">

    <div class="overlay">
        <div class="menu"> ... </div>
    </div>
</header>
```

## Bar

This is the actual header bar that people will interact with most of the time. It presents a logo for the site and a menu for navigation. But on smaller devices, we want to make that menu toggle-able. Solbit includes a `button` in this bar to serve as the toggle.

``` html
<div class="bar">
    <a class="logo">
        <img src="img/logo.jpg">
    </a>

    <div class="menu"> ... </div>

    <button>
        <label class="icon-menu" for="toggle"></label>
    </button>
</div>
```

### Logo

A logo consists of a single anchor, with an image inside. The anchor should link to the main page of the site. The image should be the site logo with a transparent background. It will be scaled automatically to fit the vertical space of the bar.

``` html
<a class="logo">
    <img src="img/logo.jpg">
</a>
```

### Menu

The header menu is a Solbit menu element. It contains a single navigation section with one or more links. It will be hidden on mobile devices.

``` html
<div class="menu">
    <nav>
        <a> ... </a>
    </nav>
</div>
```

### Button

This button is used to open and close the mobile navigation menu. It is normally hidden on larger devices.

``` html
<button>
    <label class="icon-menu" for="toggle"></label>
</button>
```

## Toggle

Our toggle input is hidden, but critical to making the menu work. Yep, you see that correctly: we are styling a checkbox to make a JS free menu.

``` html
<input type="checkbox" id="toggle">
```

## Overlay

This contains a duplicate of the heder bar navigation menu and is only displayed when the checkbox is toggled on mobile. Clever, but functional.

``` html
<div class="overlay">
    <div class="menu"> ... </div>
</div>
```
