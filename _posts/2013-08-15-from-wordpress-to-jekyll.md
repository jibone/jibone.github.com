---
layout: blog
title: "From Wordpress to Jekyll"
date: 2013-08-15 00:00:00
category: Updates
tags: 
- wordpress
- jekyll
- blogging

---

I've decided to switch from a self-hosted Wordpress setup to Jekyll generated static site hosted on Github. I've been a long time user of Wordpress, as a blog-centric content management software I think it's a great product.

[Wordpress](http://wordpress.org) can be installed on most shared hosting setup. As long as you have PHP and MySQL you are all set. Wordpress is the most used open-source software for creating websites. Tried and tested. So why did I change?

[Jekyll](http://jekyllrb.com) is a simple blog-aware static site generator. What it does is it takes a directory of text files written either in Markdown or Textile, render it with Liquid template converters and spits out an entire static website. 

Jekyll splits out HTML files that makes the entire website. As long as you have a web server that serves up HTML files you are set. There is not need for MySQL databases, setting up tables and all that stuff.

There is no 'admin' panel you need to login to update your blog. You write your post in a text file, format it with Markdown (or Textile), run Jekyll command line to generate all the static pages ready to publish.

You can upload this generated file to your server, but there is a much better way. You can commit this files with Git, and push it to your remote Git repo on your server. Even better, you can also use Github. 

Github support Jekyll with their Github pages. Github store and serve your static website. This is what I went for. 

I like the idea of not having any 'backend'. There is no secure admin panel to login in to and I can write my blog post with any text editor, format it with Markdown. When I'm done I just need to `git push` and it's up.

I am just starting to play around with Jekyll, will update on this topic more.


  
