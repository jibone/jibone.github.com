---
layout: blog
title: "Jejak Kicau web experiment"
date: 2011-07-14 00:00:00
categories: Labs
tags: 
- Jejak Kicau
- Twitter API

---

During the recent Bersih rally in Kuala Lumpur, some over 30,000 Malaysian were at the streets demanding a fair and clean election process. I thought it was the best time to try out a web experiment of mine which I an calling it ‘[Jejak Kicau](http://lab.jshamsul.com/jejak-kicau)‘, the term is in Malay and it translates directly to english as ‘Tweets Track’ or something.

### Introduction

![Jejak Kicau Screenshot](http://jshamsul.com/wp-content/uploads/2011/07/Screen-shot-2011-07-09-at-12.43.29-PM.png)

I these days everyone is armed with mobile phones equipped with cameras. Either we realize it or not we are constantly putting up stuff on the Internet, Twitter, Facebook and so one. These days, the moment something happens the photos are already on the net.

Mainstream news media outlet curate what their publishing. Most of the time they are one sided. Alternative media outlet is also no different, just that they lean more on the other side.

News outlet, both mainstream and the so called alternative media outlet chooses what to show and what not to show. They choose what is news and what is not. While mainstream media demonize the protestors, the alternative media demonize the authority.

Jejak Kicau, as I see it, is un-curated, there is not editors. Tweets and pictures comes in as they are available. I don’t choose what to show and what not to show. As long as the app thinks that it’s related (via looking at the words and hashtag #bersih in this case) it shows them.

It’s raw, not edited, and not processed.

Here are some technical details:-

### Codeigniter Framework

The reason I choose this is more of a personal preference then a technical one. I’ve been doing PHP/MySQL for quite sometime with [Codeigniter](http://codeigniter.com/). It just makes things faster for me. I’ve nothing against Ruby, Python or even Node.js

### Codeigniter Twitter Library

I use [Elliot Haughin’s Twitter Codeigniter Library](http://www.haughin.com/code/twitter/). While write one when there is a perfectly nice working library that reads Twitter API.

Currently Jejak Kicau pulls searched tweets in an interval time. In the future I am planing to use the Twitter Streaming API if possible.

### Google Map Cluster Marker

![Jejak Kicau Screenshot]({{ site.url }}/assets/Screen-shot-2011-07-09-at-12.40.07-PM.png)

I suggest you take a look at [Google Map JavaScript v3 API](http://code.google.com/apis/maps/index.html), it’s super easy. Each tweets with a geo location information gets a marker on the Google Map. Now when there are a lot of tweets in one place, the map gets crowded with markers. Fortunately Google Map API comes with a [Marker Cluster API](http://code.google.com/apis/maps/articles/toomanymarkers.html). It group nearby markers.

### Photos from Twitter

Each tweets coming in there is a function that scrubs it for links to photo uploading websites. Currently it only aware of three, Lockerz.com, yFrog.com and Twitpic.com. This three image sharing service offers ways to get a thumbnail pic from the url.

For photos from Lockerz.com (I think formally it was Plixi):-

{% highlight html %}
http://api.plixi.com/api/tpapi.svc/imagefromurl?url=[the pic url]&size=small
{% endhighlight %}

For photos from yFrog, you can use just add ‘:small’ at the end of the URL:-

{% highlight html %}
http://yfrog.com/ke4xddj:small
{% endhighlight %}

For Twitpic you need to get the twitpic id code from the url and use this url:-

{% highlight html %}
http://twitpic.com/show/thumb/[the twitpic id]
{% endhighlight %}

### Future enhancement

1. To resolved shorten url to it’s full form. Read the title from the header and display that instead of the shorten link like what it is now.

2. Use Twitter Streaming API if possible.

3. Smoother animations when new tweets coming in and photos. The ajax call are rough at the moment.

4. Put the codes up on a public repository.
