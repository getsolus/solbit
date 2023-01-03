# Main

This is going to be where all of the page-specific content is held.

``` html
<main>
    <!-- Optional Table of Contents -->
    <div class="toc"> ... </div>
    
    <div class="content"> ... </div>
    
    <!-- Optional Navigation Sidebar-->
    <div class="sidebar"> ... </div>
</main>
```


## Table of Contents

When a page contains a longer section of text, the Table of Contents may be used to easily navigate through the document. On mobile, this element will be hidden. It consists of an optional label and a nav group with links to headings on the current page.

``` html
<div class="toc">
    <h1> Table of Contents </h1>
    <nav>
        <a><h1> ... </h1></a>

        <a><h1> ... </h1></a>
        <a><h2> ... </h2></a>
        <a><h2> ... </h2></a>
        <a><h2> ... </h2></a>
    </nav>
</div>
```


## Content

This is the "meat and potatoes". Every page will have a `content` section that contains the primary information it holds.

``` html
<div class="content">
    <h1> Centered Page Title </h1>
    <h1> Normal H1 </h1>

    <p> ... </p>
    <img> ... </img>
    <p> ... </p>

    <h2> ... </h2>    

    <video> ... </video>
</div>
```

Solbit provides special rendering for the following elements inside of the `content` section:

1. **(Headings)[../elements.md]**  
   Each heading has an identical bottom margin. H1-H3 have an additional top margin to provide better visual spacing. Lastly, the first H1 will be centered as the page title.
2. **Paragraphs**  
   A paragraph may contain whatever text needed nd has a bottom-margin to allow for better readability.
3. **Images**  
   Each image is allowed to take up the full width of the content div, but is never forced to do so.
4. **(Videos)[../elements.md]**  
   Solbit allows you to embed videos easily in the content section. They provide the same styling regardless of where they are used on a side.


## Sidebar  

While the Table of Contents is focused on navigating the current page, the `sidebar` is used to navigate to other related content. Unlike the `toc`, this element will still be displayed on mobile, but will be presented after the `content` section.

``` html
<div class="sidebar"> ... </div>
```

The HTML inside of the sidebar is likely to be very site-specific. Solbit just provides a skeleton. The rest is up to the developer.
