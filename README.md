# The Screenreaderizer

Add this <a href="javascript:(function(){ttm=(new Date).getTime();scrpt=document.createElement('script');scrpt.src='https://vasilisvg.github.io/screenreaderizer/js.js?'+ttm;stl=document.createElement('link');stl.setAttribute('rel','stylesheet');stl.href='https://vasilisvg.github.io/screenreaderizer/css.css?'+ttm;document.body.appendChild(scrpt);document.body.appendChild(stl);})();">screenreaderize</a> bookmarklet to your bookmarks<sup id="a1">[(how)](#f1)</sup>. When you manage to do so you can use it to get an impression of the content that’s been added to your website when it is read out loud by a screen reader. It’s purpose is to make you wonder if your page really needs 450 links and 68 random headings. It doesn't seem to work in Firefox.

## Is it accurate?

No, it isn't. But neither are screen readers and neither is your website. So yes, it is accurate.

## What are the features?

I based the features on some default settings I found on VoiceOver on my Mac, and the default setting of JAWS on my windows laptop. These are probably not the setting that powerusers use, but based on a few observations, I assume that these may reflect the setting used by common users. 

### Page summary, mostly JavaScript

Some screen readers sometimes start with a summary of the page. It will tell you the title of the page, and it may tell you how many links and headlines there are on a page. This is useful. If you know that you need one specific link, and there are 148 links on a page you know you can give up right away. 

### Heading levels, handled by CSS

It will write out *heading level 1* to *heading level 6*. Heading levels are used abundantly. Maybe we should stop and reconsider what exactly needs to be a heading level. 

### Links and buttons, handled by CSS

Screen readers say a link is a link. They also say if a link is a visited link, but unfortunately there is no way to detect this via JavaScript. So there’s quite some content missing if you consider the idea that you may have visited 20 of the 148 links in your search for that one link you need.

A button is pronounced as a button.

### Form elements, mostly JavaScript

This probably needs more work. There are many different types of form elements, and they interact with other elements in incredibly sofisticated ways. Currently labels are connected to inputs, different types of input are shown, but a lot is missing. Legends are ignored, and different input types like *email* are not recognised yet. This probably gets too complicated for my coding skills.

### Lists, handled by CSS

A screen reader will tell you how long a list is. If there are 200 items it will tell you so. This screenreaderizer will stop at 12 because I hand typed the CSS and I thought 12 was enough to get the point. If there are more that 12 items it will tell you there are *n* items.

### Images, mostly JavaScript

If an image has text in an `alt` attribute, that text is spoken, followed by the word *image*. If the `alt` attribute is empty, you only hear the word *image*. If there is no alt attribute, the screenreader will tell you the name of the source of the image. I found an image without an `alt` attribute on a famous Dutch news site. The name of the image was 3778 characters long and it started with these 42 characters: *data:image/png;base64,iVBORw0KGgoAAAANSUhE.*

### Navigation, handled by CSS

Do normal people know what *navigation* means? I doubt it. Do people who can not see understand why every page on the web starts with the word *navigation* followed by a long list of irrelevant links? I don’t even uderstand it myself. Let’s delete all navigations and fix this problem once and for all.

### Groups, mostly JavaScript

There is this mysterious thing called a *Group*, which may or may not be pronounced. I haven't figured out how it works exactly yet. A group is an element which contains other elements. For instance, a paragraph with one link may be pronounced as <q>Group, three items.</q> Yes this is indeed confusing. I think this is a good example where a bit of design can be used, instead of engineering. An engineer says: there are two `textNode`s and one `elementNode` in this paragraph, so that makes three. Every human will think there’s a link in this paragraph. Two different kinds of logic, and here I think human logic is needed.

The previous paragraph will probably have seven items in it. A quote, two code snippets, and four textNodes. 

### Annoying characters, mostly JavaScript

Some charactes look nice, but are anoying when a screen reader sees them. For instance, the vertical line `|` is useful to divide things. But is is spoken out loud as *vertical line*. Which can be annoying. 

There are many more symbols that are pronounced. These could be added.

## Todo

There are many things that can be done.

There are many more things that get pronounced. If you know any, you can add an issue, preferably with a link where I can find the feature. I might try to add it one day. Or better, you can send me a pull request. 

The js.js file is written by me, a n00b. It probably needs smarter code.

<hr>

<b id="f1">How?</b> Here’s an explanation of [how to add a bookmarklet to your browser](https://mreidsma.github.io/bookmarklets/installing.html) [↩](#a1)