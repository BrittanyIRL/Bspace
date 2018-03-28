---
layout: post
title:  "Jekyll + Github Project Page"
shorttitle: "What you need to deploy"
date:   2016-11-29 14:40:29 -0700
category: code
---
When I was setting this Jekyll site up I found a lot of documentation on how to configure it for use with User and Organization pages but not so much on project pages. The main difference in the set up happens in the _config.yml_ file. 

- Your jekyll project *must* be in the root directory of the project if you are using a github pages _project_ to host your site. Jekyll talks about this, but I found it easy to miss in the combing of directions

- In your config file you need to configure your url and base url like so: 

`baseurl: "/github-project-name"`

`url: "https://github-user-name.github.io"`


- In your dynamic links, use the following as your base url: 
`site.github.url`


In the end, it really isn't that complicated and leaves you thinking "wel that was easy", but sifting through the various ways can be painful. 
 

[When in doubt, consult the docs!](http://jekyllrb.com/docs/home)

