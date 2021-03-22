# README

# Project: HTML/CSS - Google Homepage

This is my student solution of the first HTML/CSS project in The Odin Project's [curriculum](http://www.theodinproject.com/courses/web-development-101/lessons/html-css).  
The goal is to recreate an existing webpage's appearance, specifically: the [Google homepage](https://web.archive.org/web/20191130234759/https://www.google.com/).

## Project Post-Mortem

This was my third project really utilizing CSS and my first use of grid. I initially created the page with flexbox and then chose to switch to grid in order to learn / practice it; however, I ended up preferring the grid layout overall.

I opted not to look at Google's source code via the browser's developer tools and to instead try to figure out colors, spacing, etc. This probably added more time - and lots of trial and error - to the project than was necessary, but I learned a lot about padding, margins, decorations, and plenty more.

I did use the source to grab Google's apps icon after being unable to replicate its spacing exactly in Pinta. I opted to use Ionicons for the mobile categories as Google's versions were not easily tracked down.

The final result is not **perfect**, but I think it's quite close.

## Challenges

I spent the most time learning and understanding grid. There are some grid tricks, such as using _minmax()_ with _max-content_ to create responsive columns, or using _auto_ to keep headers and footers at the top and bottom respectively, which seem obvious now but I had no idea existed for much of the project.

Including a mobile view was also more challenging than anticipated, primarily because Google's mobile homepage is significantly different than its desktop version - not just in layout but also content-wise. This led to a lot of elements set to _display: none_ in one view or the other, which feels a bit messy to me.

Some sites that were a spectacular help in learning about grid were [Smashing Magazine](https://www.smashingmagazine.com/category/css-grid), [Alligator.io](https://alligator.io/css/), [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/), and [Codepip's Grid Garden](https://codepip.com/games/grid-garden/).

## Screenshots

![Desktop view screenshot](/screenshots/google-homepage-desktop.png)
![Mobile view screenshot](/screenshots/google-homepage-mobile.png)

## To Do

~~Once I learn JavaScript, I'd like to return to this page and update the "I'm Feeling Lucky" button to match Google's: upon hover, it spins and lands on a random other phrase, e.g. "I'm Feeling Artistic," "I'm Feeling Stellar," "I'm Feeling Playful," etc.~~

_Update 3/22/21_: After spending time learning and practicing JavaScript, I returned to this project to connect the search buttons. The standard desktop button (and form submit on hitting Enter) now sends the search query to Google, performing an actual search. The "I'm Feeling Lucky" button now matches Google's: upon hover, the text scrolls through a series of randomized alternatives before landing on one, which links to a predetermined page. (On Google, this is a Google-specific page, but I've linked to other websites.) I've made this button available as [a standalone code sample on CodePen](https://codepen.io/jwern/pen/VwmNavq).

I'd also like to update the hourglass icon on the mobile view search bar. It's simply a static image file right now, but I'd prefer to use an hourglass icon with CSS background stylings behind it as it will fit the form better.

## Technologies

This Google homepage project was built with HTML and CSS. It uses [normalize.css](https://necolas.github.io/normalize.css/) and [Ionicons](https://ionicons.com/).
