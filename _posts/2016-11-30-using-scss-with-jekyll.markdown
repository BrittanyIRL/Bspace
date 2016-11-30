---
layout: post
title:  "Using SCSS with Jekyll"
shorttitle: "Getting off the ground"
date:   2016-10-16 14:40:29 -0700
category: code
---

One of the great things about Jekyll is how easy it is to set up sass (or scss) within the project since it's Ruby based. 

Here's a few great articles I've followed:
[comprehensive and to the point - Mark Dotto's blog](http://markdotto.com/2014/09/25/sass-and-jekyll/)
[thorough guide from Dave Poon](http://blog.davepoon.net/2015/01/19/setting-up-sass-with-jekyll/)
[more of a high level philosophy...](http://garthdb.com/writings/i-am-a-jekyll-god/)

These really help ya get up and running. If your pages aren't showing up with their styles, make sure you have your [links set up correct](https://brittanyirl.github.io/code/2016/11/29/jekyll-and-github-project-page.html).

Personally, I have my scss set up to handle my includes (or partials), my general styles, and my overrides (because I'm using materializecss) - everything feeds into my css directory which compiles into the site directory. 

I could honestly play with scss structure all day long, and like that article from garthdb.com I linked you to up there - it's interesting thinking about the ways structuring this well can speed up your site load and channel resources smarter. Since this blog is jekyll based and I'm the sole contributor - it's safe to assume I'll be playing with how this is set up as time goes on. 

Serious thanks to Mark Dotto and Dave Poon's blogs for helping me wrap my head around this whole thing. 
