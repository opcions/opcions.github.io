<h1 id="holder">Holder</h1>

<p><img src="http://imsky.github.io/holder/images/header.png" alt="" /></p>

<p>Holder renders image placeholders on the client side using SVG.</p>

<p>Used by <a href="http://getbootstrap.com">Bootstrap</a>, thousands of <a href="https://github.com/search?q=holder.js+in%3Apath&amp;type=Code&amp;ref=searchresults">open source projects</a>, and <a href="https://search.nerdydata.com/search/#!/searchTerm=holder.js/searchPage=1/sort=pop">many</a> <a href="http://libscore.com/#Holder">other</a> sites.</p>

<p><a href="https://travis-ci.org/imsky/holder"><img src="https://travis-ci.org/imsky/holder.svg?branch=master" alt="Build Status" /></a></p>

<p><a href="http://packagequality.com/#?package=holderjs"><img src="http://npm.packagequality.com/badge/holderjs.png" alt="Package Quality" /></a></p>

<h2 id="installing">Installing</h2>

<ul>
<li><a href="http://npmjs.com/">npm</a>: <code>npm install holderjs</code></li>
<li><a href="http://bower.io/">Bower</a>: <code>bower install holderjs</code></li>
<li><a href="http://rawgit.com">RawGit</a>: <a href="https://cdn.rawgit.com/imsky/holder/master/holder.js">https://cdn.rawgit.com/imsky/holder/master/holder.js</a></li>
<li><a href="http://cdnjs.com/">cdnjs</a>: <a href="http://cdnjs.com/libraries/holder">http://cdnjs.com/libraries/holder</a></li>
<li><a href="http://www.jsdelivr.com">jsDelivr</a>: <a href="http://www.jsdelivr.com/#!holder">http://www.jsdelivr.com/#!holder</a></li>
<li><a href="https://rails-assets.org">Rails Assets</a>: <code>gem 'rails-assets-holderjs'</code></li>
<li><a href="http://atmospherejs.com/">Meteor</a>: <code>meteor add imsky:holder</code></li>
<li><a href="https://packagist.org/">Composer</a>: <code>php composer.phar update imsky/holder</code></li>
<li><a href="http://www.nuget.org/">NuGet</a>: <code>Install-Package Holder.js</code></li>
</ul>

<h2 id="usage">Usage</h2>

<p>Include <code>holder.js</code> in your HTML:</p>

<pre><code class="html">&lt;script src="holder.js"&gt;&lt;/script&gt;
</code></pre>

<p>Holder will then process all images with a specific <code>src</code> attribute, like this one:</p>

<pre><code class="html">&lt;img src="holder.js/300x200"&gt;
</code></pre>

<p>The above tag will render as a placeholder 300 pixels wide and 200 pixels tall.</p>

<p>To avoid console 404 errors, you can use <code>data-src</code> instead of <code>src</code>.</p>

<h3 id="programmatic-usage">Programmatic usage</h3>

<p>To programmatically insert a placeholder use the <code>run()</code> API:</p>

<pre><code class="js">var myImage = document.getElementById('myImage');

Holder.run({
  images: myImage
});
</code></pre>

<h2 id="placeholder-options">Placeholder options</h2>

<p>Placeholder options are set through URL properties, e.g. <code>holder.js/300x200?x=y&amp;a=b</code>. Multiple options are separated by the <code>&amp;</code> character.</p>

<ul>
<li><code>theme</code>: The theme to use for the placeholder. Example: <code>holder.js/300x200?theme=sky</code></li>
<li><code>random</code>: Use random theme. Example: <code>holder.js/300x200?random=yes</code></li>
<li><code>bg</code>: Background color. Example: <code>holder.js/300x200?bg=2a2025</code></li>
<li><code>fg</code>: Foreground (text) color. Example: <code>holder.js/300x200?fg=ffffff</code></li>
<li><code>text</code>: Custom text. Example: <code>holder.js/300x200?text=Hello</code></li>
<li><code>size</code>: Custom text size. Defaults to <code>pt</code> units. Example: <code>holder.js/300x200?size=50</code></li>
<li><code>font</code>: Custom text font. Example: <code>holder.js/300x200?font=Helvetica</code></li>
<li><code>align</code>: Custom text alignment (left, right). Example: <code>holder.js/300x200?align=left</code></li>
<li><code>outline</code>: Draw outline and diagonals for placeholder. Example: <code>holder.js/300x200?outline=yes</code></li>
<li><code>lineWrap</code>: Maximum line length to image width ratio. Example: <code>holder.js/300x200?lineWrap=0.5</code></li>
</ul>

<h3 id="themes">Themes</h3>

<p><img src="http://imsky.github.io/holder/images/holder_sky.png" alt="" /><img src="http://imsky.github.io/holder/images/holder_vine.png" alt="" /><img src="http://imsky.github.io/holder/images/holder_lava.png" alt="" /></p>

<p>Holder includes support for themes, to help placeholders blend in with your layout.</p>

<p>There are 6 default themes: <code>sky</code>, <code>vine</code>, <code>lava</code>, <code>gray</code>, <code>industrial</code>, and <code>social</code>.</p>

<h4 id="customizing-themes">Customizing themes</h4>

<p>Themes have 5 properties: <code>foreground</code>, <code>background</code>, <code>size</code>, <code>font</code> and <code>fontweight</code>. The <code>size</code> property specifies the minimum font size for the theme. The <code>fontweight</code> default value is <code>bold</code>. You can create a sample theme like this:</p>

<pre><code class="js">Holder.addTheme("dark", {
  background: "#000",
  foreground: "#aaa",
  size: 11,
  font: "Monaco",
  fontweight: "normal"
});
</code></pre>

<p>If you have a group of placeholders where you'd like to use particular text, you can do so by adding a <code>text</code> property to the theme:</p>

<pre><code class="js">Holder.addTheme("thumbnail", { background: "#fff", text: "Thumbnail" });
</code></pre>

<h4 id="using-custom-themes">Using custom themes</h4>

<p>There are two ways to use custom themes with Holder:</p>

<ul>
<li>Include theme at runtime to render placeholders already using the theme name</li>
<li>Include theme at any point and re-render placeholders that are using the theme name</li>
</ul>

<p>The first approach is the easiest. After you include <code>holder.js</code>, add a <code>script</code> tag that adds the theme you want:</p>

<pre><code class="html">&lt;script src="holder.js"&gt;&lt;/script&gt;
&lt;script&gt;
Holder.addTheme("bright", {
  background: "white", foreground: "gray", size: 12
});
&lt;/script&gt;
</code></pre>

<p>The second approach requires that you call <code>run</code> after you add the theme, like this:</p>

<pre><code class="js">Holder.addTheme("bright", {background: "white", foreground: "gray", size: 12}).run();
</code></pre>

<h4 id="using-custom-themes-and-domain-on-specific-images">Using custom themes and domain on specific images</h4>

<p>You can use Holder in different areas on different images with custom themes:</p>

<pre><code class="html">&lt;img data-src="example.com/100x100?theme=simple" id="new"&gt;
</code></pre>

<pre><code class="js">Holder.run({
  domain: "example.com",
  themes: {
    "simple": {
      background: "#fff",
      foreground: "#000",
      size: 12
    }
  },
  images: "#new"
});
</code></pre>

<h4 id="inserting-an-image-with-custom-theme">Inserting an image with custom theme</h4>

<p>You can add a placeholder programmatically by chaining Holder calls:</p>

<pre><code class="js">Holder.addTheme("new", {
  foreground: "#ccc",
  background: "#000",
  size: 10
}).addImage("holder.js/200x100?theme=new", "body").run();
</code></pre>

<p>The first argument in <code>addImage</code> is the <code>src</code> attribute, and the second is a CSS selector of the parent element.</p>

<h3 id="text">Text</h3>

<p>Holder automatically adds line breaks to text that goes outside of the image boundaries. If the text is so long it goes out of both horizontal and vertical boundaries, the text is moved to the top. If you prefer to control the line breaks, you can add <code>\n</code> to the <code>text</code> property:</p>

<pre><code class="html">&lt;img data-src="holder.js/300x200?text=Add \n line breaks \n anywhere."&gt;
``````

If you would like to disable line wrapping, set the `nowrap` option to `true`:

```html
&lt;img data-src="holder.js/300x200?text=Add \n line breaks \n anywhere.&amp;amp;nowrap=true"&gt;
</code></pre>

<p>Placeholders using a custom font are rendered using canvas by default, due to SVG's constraints on cross-domain resource linking. If you're using only locally available fonts, you can disable this behavior by setting <code>noFontFallback</code> to <code>true</code> in <code>Holder.run</code> options. However, if you need to render a SVG placeholder using an externally loaded font, you have to use the <code>object</code> tag instead of the <code>img</code> tag and add a <code>holderjs</code> class to the appropriate <code>link</code> tags. Here's an example:</p>

<pre><code class="html">&lt;head&gt;
&lt;link href="http://.../font-awesome.css" rel="stylesheet" class="holderjs"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;object data-src="holder.js/300x200?font=FontAwesome"&gt;&lt;/object&gt;
</code></pre>

<p><strong>Important:</strong> When testing locally, font URLs must have a <code>http</code> or <code>https</code> protocol defined.</p>

<p><strong>Important:</strong> Fonts served from locations other than public registries (i.e. Google Fonts, Typekit, etc.) require the correct CORS headers to be set. See <a href="https://www.maxcdn.com/one/tutorial/how-to-use-cdn-with-webfonts/">How to use CDN with Webfonts</a> for more details.</p>

<p><code>&lt;object&gt;</code> placeholders work like <code>&lt;img&gt;</code> placeholders, with the added benefit of their DOM being able to be inspected and modified. As with <code>&lt;img&gt;</code> placeholders, the <code>data-src</code> attribute is more reliable than the <code>data</code> attribute.</p>

<h3 id="fluid-placeholders">Fluid placeholders</h3>

<p><strong>Important:</strong> Percentages are specified with the <code>p</code> character, not with the <code>%</code> character.</p>

<p>Specifying a dimension in percentages creates a fluid placeholder that responds to media queries.</p>

<pre><code class="html">&lt;img data-src="holder.js/100px75?theme=social"&gt;
</code></pre>

<p>By default, the fluid placeholder will show its current size in pixels. To display the original dimensions, i.e. 100%x75, set the <code>textmode</code> flag to <code>literal</code> like so: <code>holder.js/100px75?textmode=literal</code>.</p>

<h3 id="automatically-sized-placeholders">Automatically sized placeholders</h3>

<p>If you'd like to avoid Holder enforcing an image size, use the <code>auto</code> flag like so:</p>

<pre><code class="html">&lt;img data-src="holder.js/200x200?auto=yes"&gt;
</code></pre>

<p>The above will render a placeholder without any embedded CSS for height or width.</p>

<p>To show the current size of an automatically sized placeholder, set the <code>textmode</code> flag to <code>exact</code> like so: <code>holder.js/200x200?auto=yes&amp;textmode=exact</code>.</p>

<h3 id="preventing-updates-on-window-resize">Preventing updates on window resize</h3>

<p>Both fluid placeholders and automatically sized placeholders in exact mode are updated when the window is resized. To set whether or not a particular image is updated on window resize, you can use the <code>setResizeUpdate</code> method like so:</p>

<pre><code class="js">var img = $('#placeholder').get(0);
Holder.setResizeUpdate(img, false);
</code></pre>

<p>The above will pause any render updates on the specified image (which must be a DOM object).</p>

<p>To enable updates again, run the following:</p>

<pre><code class="js">Holder.setResizeUpdate(img, true);
</code></pre>

<p>This will enable updates and immediately render the placeholder.</p>

<h3 id="background-placeholders">Background placeholders</h3>

<p>Holder can render placeholders as background images for elements with the <code>holderjs</code> class, like this:</p>

<pre><code class="css">#sample {background:url(?holder.js/200x200?theme=social) no-repeat}
</code></pre>

<pre><code class="html">&lt;div id="sample" class="holderjs"&gt;&lt;/div&gt;
</code></pre>

<p>The Holder URL in CSS should have a <code>?</code> in front. Like in image placeholders, you can specify the Holder URL in a <code>data-background-src</code> attribute:</p>

<pre><code class="html">&lt;div class="holderjs" data-background-src="?holder.js/300x200"&gt;&lt;/div&gt;
</code></pre>

<p><strong>Important:</strong> Make sure to define a height and/or width for elements with background placeholders. Fluid background placeholders are not yet supported.</p>

<h2 id="runtime-settings">Runtime settings</h2>

<p>Holder provides several options at runtime that affect the process of image generation. These are passed in through <code>Holder.run</code> calls.</p>

<ul>
<li><code>domain</code>: The domain to use for image generation. Default value: <code>holder.js</code>.</li>
<li><code>dataAttr</code>: The HTML attribute used to define a fallback to the native <code>src</code> attribute. Default value: <code>data-src</code>.</li>
<li><code>renderer</code>: The renderer to use. Options available: <code>svg</code>, <code>canvas</code>. Default value: <code>svg</code>.</li>
<li><code>images</code>: The CSS selector used for finding <code>img</code> tags. Default value: <code>img</code>.</li>
<li><code>objects</code>: The CSS selector used for finding <code>object</code> placeholders. Default value: <code>object</code>.</li>
<li><code>bgnodes</code>: The CSS selector used for finding elements that have background palceholders. Default value: <code>body .holderjs</code>.</li>
<li><code>stylenodes</code>: The CSS selector used for finding stylesheets to import into SVG placeholders. Default value: <code>head link.holderjs</code>.</li>
</ul>

<h3 id="using-custom-settings-on-load">Using custom settings on load</h3>

<p>You can prevent Holder from running its default configuration by executing <code>Holder.run</code> with your custom settings right after including <code>holder.js</code>. However, you'll have to execute <code>Holder.run</code> again to render any placeholders that use the default configuration.</p>

<h2 id="using-with-lazyload.js">Using with <a href="https://github.com/tuupola/jquery_lazyload">lazyload.js</a></h2>

<p>Holder is compatible with <code>lazyload.js</code> and works with both fluid and fixed-width images. For best results, run <code>.lazyload({skip_invisible:false})</code>.</p>

<h2 id="using-with-angular.js">Using with Angular.js</h2>

<p>You can use Holder in Angular projects with <a href="https://github.com/joshvillbrandt/ng-holder">ng-holder</a>.</p>

<h2 id="using-with-meteor">Using with Meteor</h2>

<p>Because Meteor includes scripts at the top of the document by default, the DOM may not be fully available when Holder is called. For this reason, place Holder-related code in a "DOM ready" event listener.</p>

<h2 id="browser-support">Browser support</h2>

<ul>
<li>Chrome</li>
<li>Firefox 3+</li>
<li>Safari 4+</li>
<li>Internet Explorer 9+ (with partial support for 6-8)</li>
<li>Opera 12+</li>
<li>Android (with fallback)</li>
</ul>

<h2 id="license">License</h2>

<p>Holder is provided under the <a href="http://opensource.org/licenses/MIT">MIT License</a>.</p>

<h2 id="credits">Credits</h2>

<p>Holder is a project by <a href="http://imsky.co">Ivan Malopinsky</a>.</p>
