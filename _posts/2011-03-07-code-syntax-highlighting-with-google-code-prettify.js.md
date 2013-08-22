---
layout: blog
title: "Code syntax highlighting with Google Code Pretify.js"
date: 2011-03-07 00:00:00
category: code
tags:

---

If I were to share codes here, this website needs syntax highlighting. There are a lot of code syntax highlighting plugin for WordPress, but none of it has the look an feel that I want. Until of course when I found this google-code-prettify. It’s a Javascript module and CSS file that allows syntax highlighting of source code snippets in an html page.

The main reason it that the styles could be easily customizable via a CSS file, and that someone already made a Sunburst theme, looks similar to the current theme I am using on my Textmate.

Of course I should have looked for the WordPress plugin first but I didn’t. I ended up embedding it into this theme.

Put this within your head tag -

{% highlight html %}
<link href="prettify.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="prettify.js"></script>
{% endhighlight %}

When you post, wrap your code in the pre or code tag.

{% highlight html %}
<pre class="prettyprint">...</pre>
{% endhighlight %}

I like my tab spacing to be 4 space rather than the default 8 spaces. So open up the prettify.js file and change ‘PR_TAB_WIDTH’ to 4.

{% highlight javascript %}
window['PR_SHOULD_USE_CONTINUATION'] = true;

/** the number of characters between tab columns */
window['PR_TAB_WIDTH'] = 4;
{% endhighlight %}

Add onload=”prettyPrint()” to your document’s body tag, and done. Now it’s all pretty.

{% highlight html %}
<body onload="prettyPrint()">
{% endhighlight %}

You might want to encode your code into an entity-encoded markup. Either use this tool SimpleCode or install a WordPress plugin, WP_CodeShield that encodes everything within the < code > tag into an entity-encoded markup.
