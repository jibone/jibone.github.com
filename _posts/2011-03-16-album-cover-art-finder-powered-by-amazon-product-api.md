---
layout: blog
title: "Album cover art finder powered by Amazon Product API"
date: 2011-03-16 00:00:00
category: labs
tags:

---

Back at early 2006 I [played around with the Amazon Web](http://blog.jiboneus.com/2006/02/26/project-jaws-music-cd-cover-art-and-more/) Service API for their products, which they change the name to Product Advertising API or something. It is basically an API that lets your access the Amazon product catalog database.

I use iTunes for all of my music. Some music which I ripped from the CD has no album cover art. There is no fun in ‘coverflowing’ through your library with blank album cover art. So back then I created this little website where one could insert artist and album and it query the album cover art for you, together with some details.

The web app stop working when Amazon change their API calls. I am two lazy to make the changes back on my end and the web app just died. Until today that is

![Screenshot]({{ site.url }}/assets/Screen-shot-2011-04-27-at-2.03.56-PM.png)

This time instead of writing my own rest calls and what not, I decided to use [CloudFusion](http://getcloudfusion.com/), which now has become the official Amazon Web Service SDK for PHP.

The official SDK doesn’t have support for Amazon Product Advertising API, you can get that here on this [Github](https://github.com/cloudfusion/cloudfusion).

Try it out: – [http://lab.jshamsul.com/coverartfinder](http://lab.jshamsul.com/coverartfinder)

Redo the UI and added the Sexy Music Album overlays from Komondo Media. Awesome stuff.

I’ll write a tutorial when I have the time.
