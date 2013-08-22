---
layout: blog
title: "Where is the iOS Simulator?"
date: 2013-08-19 00:00:00
category: "dev notes"
tags: iOS, Mobile, "Responsive Web"

---

I don't do much work on Xcode, I have yet done any native iOS app. However one utility of Xcode which I use from time to time is the iOS simulator. I use the Safari in the iOS simulator to test how a website would look like in a mobile form.

I recently had updated Xcode to version 4.6.3 and the iOS Simulator is nowhere to be found. After some Googling, it seems that Apple had packaged the iOS Simulator app into Xcode.

That does not mean that you can't use the iOS Simulator without launching Xcode. All you need to do is find the Xcode.app in your Application folder, instead of click to launch it, control + click it to show the folder menu and choose 'Choose Package Contents', this will open a Finder window with the contents of Xcode app. You will see a folder named 'contents'. The path to your iPhone/iOS simulator is in -

{% highlight html %}
Contents / Application / iPhone Simulator.app
{% endhighlight %}

That however is just an alias, control + click and choose 'Show Original' if you want to know where the actual app is at. 

All other Xcode development utilities are all now bundled inside the Xcode app. What I did is to drag the app out to my Dock for easy access so that I don't have to launch Xcode if I need to use any of these apps.

### Apps inside another app?

In NeXTSTEP and OpenStep, which are what OSX descended from, Application and its related resources including the  application executable can be bundled in a directory and appeared as a single file to use, i.e. Application.app



 
