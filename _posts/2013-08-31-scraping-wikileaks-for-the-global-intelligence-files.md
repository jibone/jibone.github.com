---
layout: blog
title: "Scraping Wikileaks for The Global Intelligence Files"
date: 2013-08-31 00:00:00
category: Labs
tags:
- wikileaks
- web scraping
- stratfor
- Malaysia

---

Wikileaks begin publishing what they call "[The Global Intelligence Files](https://search.wikileaks.org/gifiles/?rl)", which is a collection of over five million e-mails from [Stratfor](http://www.stratfor.com/), a 'global intelligence' firm headquartered in Texas. The emails are from July 2004 to late December 2011.

Stratfor is a company that fronts as and intelligence publisher, but provides confidential intelligence services to large corporations such as Bhopal's Dow Chemical Co., Lockheed Martin, Northrop Grumman, Raytheon and government agencies including US Department of Homeland Security, US Marines and US Defense Intelligence Agency.

According to Wikileaks the emails reveal the inner workings of Stratfor. It shows their web of informers, pay-off structure, payment laundering techniques and other methods. 

From what I've read, which is only the emails in the release batch that says - "US Intelligence Firm Stratfor Eyes Malaysia", it seems that Stratfor gathers all sort of information from various sources, on various matters, but mostly are on the country's stability which includes political issues and the country's oil and gas industry. 

Sources ranges from publicly available publications to confidential informations from their informant. They then analyze them and publish an in-depth report either for their newsletter, their website or for whoever their clients might be.

Wikileaks have started releasing the emails back in early 2012. They release it batch by batch. The recent release had caught my attention. It's the batch of emails marked as "US Inteliigence Firm Startfor Eyes Malaysia". Would love to read what these people in this 'global intelligence' firm has to say about Malaysia.

I created a little script that scrapes Wikileaks to save all these email locally, so I don't have to keep going to the wikileaks website to read them. I compiled all 2235 of the emails in a zip file. The script is on my [Github](http://github.com/jibone/nancy) if you are interested and you can download the compile zip file [here](http://assets.jshamsul.com/downloads/stratfor_malaysia.zip).

![Scraping Wikileaks Global Intelligence Files](http://assets.jshamsul.com/Screen-Shot-2013-09-01-at-2.37.20-PM.png)

###So what is in all the emails?
 
I still have yet to go through all the emails, but from what I had read, nothing much. Bulk of the emails are them sharing news clippings and publications. Marked as OS which probably means 'Open Source', sources that are published and accessible publicly. Its interesting to see which news interest them though.

There are also a [few emails](https://search.wikileaks.org/gifiles/?viewemailid=72394) that start with this formatted header :-

```
SOURCE: ML101 
ATTRIBUTION: Stratfor sources in Kuala Lumpur 
SOURCE DESCRIPTION: Editor, Malaysiakini.com, and confederation partner 
PUBLICATION: as needed 
SOURCE RELIABILITY: B 
ITEM CREDIBILITY: 2 
SPECIAL HANDLING: none 
DISTRIBUTION: analysts 
SOURCE HANDLER: Lena 
```

Seems that one of their sources is the editor of Malaysiakini.com editor. While I am not a journalist, I believe that it's common practice for journalists to exchange info among themselves.  

I don't think there is anything nefarious in this emails. Most probably they are taking account of the source's opinion on certain issues.

Lena Bell seems interesting. It seems that she is most of the source handler.

###Read it yourself

[Here is the zip collection](http://assets.jshamsul.com/downloads/stratfor_malaysia.zip) of "[US Intelligence Firm Stratfor Eyes Malaysia](https://search.wikileaks.org/gifiles/?relid=668#searchresult)" or head on over to Wikileaks to read these and many more internal emails of Stratfor.
