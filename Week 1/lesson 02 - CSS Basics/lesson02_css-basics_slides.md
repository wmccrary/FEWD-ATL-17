![GeneralAssemb.ly](../../../../../img/icons/FEWD_Logo.png)

# LESSON 2 - CSS BASICS (aka HTML 2.0)


---


## Lesson 2 Agenda
*	Introduce Learning Objectives
*	Review Lesson 1 - HTML & External Style Sheets
*	Understanding the DOM
*	Building A Simple Web Page
	*	Images
	*	Nav
	*	CSS
	*	Colors
	*	Linking To Other Pages
*	Lab Time


---


## Classroom Culture & Values
*	Be present and involved
*	Be respectful of other people's time
*	Honor your commitments
*	Be patient!
*	Step out of your comfort zone
*	Share your Knowledge


---


## Learning Objectives:

--

### After today, you should be able to...
*	Describe the DOM and draw a simple DOM tree
*	Predict image paths and apply relative paths to ```<img>``` and ```<a>``` tags.
*	Apply and explain CSS "cascade" including: importance, specificity and inheritance.
*	Experiment with CSS Colors and margin/padding


---

## HTML Basics Review

Note:
* *5 minutes*
* **CURRENT TIME:**  6:35pm
* Reference the Cookie Recipe site we built last week
* Name the tags and use the whiteboard to write down what each element is
* Finish with "What Tag Is It" Lab 


--

![DASH Anna Website](../../../../../../img/mansoor/dash-anna.jpg)

Note:
* Let's revisit Anna's website!

--

### Kidding... 

--

![DASH Anna Website](../../../../../../img/mansoor/cookie-recipe.jpg)

Note:
* Let's actually revisit the cookie-recipe website
* Whiteboard:  Help me name off each HTML element used in this site and write it on the board
* Be sure to includ head, meta, title, etc. as well

---

![GeneralAssemb.ly](../../../../../img/icons/exercise_icon_md.png)
### What Tag Is It

Note:
* *20 minutes*
* **CURRENT TIME:**  6:40pm
* Lab exercise
* Alright, now you need to do the same thing on your own with this image...

--

![About Me Deliverable](../../Assignment/solution/images/about_me_deliverable.png)

Note:
* Students are provided a png file of the completed website in the starter code folder. Their task is to write markup by identifying what tags to use and link to an external style sheet.
* Prior to starting the exercise, let students know they will need to Google the `<nav>`, `<hr>` and `<img>` tags (write this on the board). Reassure them that using Google to find information is something you do on a regular basis.
* Also, don't forget the basic structure of a webpage: `<!DOCTYPE >`, `<html>`, `<head>`, and `<body>`, as well as a few others that go in the `<head>` section such as: `<meta>` and `<title>`


---

## Understanding the Document Object Model (DOM)

Note:
* *10 minutes*
* **CURRENT TIME:**  7:00pm

--

### What is the DOM?
*	When a web page is loaded, the browser renders a **Document Object Model (DOM)** of the page in HTML.
*	The DOM model is constructed as a tree of Objects


--

![DOM Model tree Image](../../../../../../img/mansoor/DOM-model2.jpg)

--

At the top we have the **document object**

![DOM Image 1](../../../../../../img/mansoor/dom1.png)

--

Next, we have the **root element** which is always the `<html>` tag

![DOM Image 2](../../../../../../img/mansoor/dom2.png)

--

Then comes the `<head>` and `<body>` elements. Notice they are on the same level -- this makes them siblings

![DOM Image 3](../../../../../../img/mansoor/dom3.png)

--

Also, notice this makes them both the first children of the `<html>` element

![DOM Image 4](../../../../../../img/mansoor/dom4.png)

--

And so on, for all of the subsequent HTML elements in the web page...

--

### Basically...

The DOM is a family tree four your webpage
![Family tree Image](../../../../../../img/mansoor/family-tree.jpg)

--

Where else have you seen a similar structure?
![DOM Model tree Image](../../../../../../img/mansoor/DOM-model2.jpg)

--

![Computer folder structure Image](https://faculty1.coloradocollege.edu/~sburns/UnixTutorial/tree.gif)

Note:
* Your computer files/folders
* You can imagine all of the HTML elements on your page are files in a folder on your computers

--

### Why should I care?

--

*	Parent/child relationship of HTML elements
*	CSS specificity and inheritance
*	Major portion of Javascript interaction
*	Readability of HTML Code (indentation)

Note:
* The readability benefits will be noticeable in just a few more lessons
* It becomes much more important when we begin using JS

--

![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
### PULSE CHECK
Let's determine the DOM model for the "About Me" page from earlier...

Note:
* *5 minutes*
* **CURRENT TIME:**  7:10pm
* Let's split into groups and draw the DOM model for the "About Me" page that we added structure to earlier?
* Display the solution code from Sublime text on the screen



---


## Building Websites - Image Tags

Note:
* *15 minutes*
* **CURRENT TIME:**  7:15pm

--

HTML Images are placed using the `<img>` tag:

`<img src="folder/image_name.jpg" alt="alternative text">`

--

The `<img>` tag requires a `src` attribute, which tells the browser where to find the image.

The `alt` attribute is optional, but strongly encouraged for a number of reasons

![Alt text Image](https://blog.quiet.ly/wp-content/uploads/2015/10/Alt-Text-broken-link.jpg)

Note:
* ALT is a piece of text that is displayed if the image is unavailable; as you can see here
* Using `alt` attributes has the added benefit of giving search engines more linguistic context about the image as it is used on your page.

Reasons an image may not load: 
* MAJOR REASON:  Accessibility. The user is using a screen reader because he/she has low vision, which will read the `alt` text aloud or present it through a braille reader.
* There was a connection error or the file wasn't found

--

**CHECK:** How might you write the `src` path to access *logo.png* from *index.html*?

![Folder Structure Same Level](../../../img/mansoor/folder_structure_same.jpg)

Note:
* Whiteboard: write an `<img>` tag with an empty `src` arttribute, and ask the class what they might put there
* Explain this is a RELATIVE image path

--

There are 2 different ways to specify the path to an image...
#### Relative vs Absolute

--

### Relative Path

As long as the image you are pointing to is inside your `webroot`, you can use a relative path:
	
`<img src="logo.png">`

--

What about this example; how might you write the `src` path here?

![Folder Structure](../../../img/unit_1/folder_structure.png)

Note:
* Whiteboard again

--

Since it is in a subfolder in relation to `index.html`, we need to include that subfolder in our path:

`<img src="images/logo.png">`

Note:
* This is still a RELATIVE image path
* Notice how the path changes depending on where the image is with relation to the HTML that is referencing it?

--

Last one -- can anyone figure out the `src` path for this one:

![Parent Folder Structure](../../../../../../img/unit_1/folder_structure_parentDirectory.png)

Note:
* Whiteboard again

--

In this case, the HTML file is in its own subfolder like the image.

When this happens, you need to go up a directory, and then go down into the subfolder containing the image.

`<img src="../images/logo.png">`

Note:
* This is also still a RELATIVE image path

--

To go up a directory, we use `..`

It can also be used repeatedly to go up multiple directories 

For example, `../../..` would go up three directories

--

### Absolute Path
An Absolute path is a full URL that and is required when the file is located on an external domain.

It can also be used in place of relative URLs on your own `webroot`, but its not required

```<img src="http://www.example.com/images/logo.png">```

--

![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
### PULSE CHECK
What are some issues we could run into when using relative vs absolute paths?

Note:
* Whiteboard
* Relative path cons: can break easily, hard to account for in dynamically generated HTML
* Absolute path cons: depending on someone else's server


---

## Building Websites - Image File Formats

There are three main image file formats:
Note:
* *5 minutes*
* **CURRENT TIME:**  7:40pm


--

### .jpeg / .jpg

Note:
* No transparency
* Can be stored at different compression levels with varying amounts of "lossy-ness"
* Typically the best format for photos
* (Try to balance between photo quality and file size.)

--

### .gif

Note:
* Can have basic transparency, typically a `png` is used instead.


--

### .png

Note:
* Supports transparency and semi-transparency
* great for logos, icons, and repeating background tiles
* Almost always preferable to a `gif`, unless semi-transparency is not needed, and the `gif` format is significantly smaller in file size


---



# 15 Minute Break
![Break Time](https://media.giphy.com/media/5Ff4rP8zrUNSo/giphy.gif)

Note:
* **CURRENT TIME:**  7:45pm
* When we come back, we will do a code along for the About Me page


---


![GeneralAssemb.ly](../../../../../../img/icons/code_along.png)
## About Me Styles

Note:
* **CURRENT TIME:**  8:00pm


--

![About Me Deliverable](../../Assignment/solution/images/about_me_deliverable.png)

Note:
* Help finish adding styles to the About Page using external style sheet
* Include a link to the portfolio.html page


---

## Building Websites - CSS

Note:
* **CURRENT TIME:**  8:15pm
* So, we just got finished adding some basic CSS to the About Me page
* We also used several bits of CSS that we have not seen yet; we will go more into it today
* But what is CSS?...

--

### What is CSS?

--

CSS Stands for **Cascading Style Sheets**

![CSS Syntax](../../../img/unit_1/css_syntax.png)

Note:
* Here is the basic CSS rule that we saw previously
* Most of this is review, but let's break it down further...

--

### CSS Rule

Below is a sample CSS **rule** for the `<p>` HTML element.

It consists of the element **selector** -- `p` -- and is followed by a set of **declarations** in a **declaration block**.

```css
p {
	color: red;
	font-weight: bold;
}
```

--

### CSS Selector

The **selector** -- `p` in this case -- specifies what parts of the HTML document should be styled by the declaration.

This selector will style all `<p>` elements.

--

### CSS Declaration Block

Everything between the open curly bracket: **{** and closing curly bracket: **}** is considered the **declaration block**

The declaration block is made up of individual **declarations**

```css
{
	color: red;
	font-weight: bold;
}
```

--

### CSS Declarations

This example has two declarations. Here's the first:

```css
color: red;
```

Note:
* Every declaration is a **property** followed by a **value**, separated by a colon, ending in a semicolon.
* In this declaration, we are setting the `color` **property** to the **value** `red`.

--

![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
## PULSE CHECK
Now, let's look at the second declaration:

```css
font-weight: bold;
```

What style **property** are we specifying here, and what **value** are we setting it to?

Note:
* Whiteboard: Now, let's try writing a new set of styles for another element, like an `h1`.
* Ask the students to help make the `h1` all uppercase (text-transform), increase the size of the letters (font-size), and add 20px of space above it (margin-top)


---


## Where does CSS go?

*	Inline
*	In the `head` (internal or embedded CSS)
*	**In a separate file (external CSS)**

Note:
* **CURRENT TIME:**  8:25pm
* We've discussed Internal vs External before, but not Inline
* we'll go over each in more detail below
* We started out by placing them in the head for convenience and to learn the syntax, but this is not standard


--

### Inline CSS

**Inline CSS** is when the style **declarations** are placed directly in the specific HTML element via the `style` attribute:

```html
<p style="color: red; font-weight: bold;">
```

Note:
* This is generally not encouraged
* **IMPORTANT:** It only affects the specific element where it appears

--

### Internal CSS

**Internal CSS** is when the style **rules** are placed in the `<head>` of the HTML page, inside of the `<style>` HTML element.

```html
<head>
	<style>
		p {
			color: red;
			font-weight: bold;
		}
	</style>
</head>
```

Note:
* This is also generally not encouraged
* Styles placed here will only affect the selected elements on this specific HTML page
* We discussed the pros/cons of this on Monday

--

### External CSS

You link to this file from the `<head>` of your HTML.

Its best practice to put CSS in its own file.

```html
<link rel="stylesheet" href="style.css">
```

style.css:
```css
p {
	color: red;
	font-weight: bold;
}
```
	
Note:
* "The `<link>` tag needs two attributes: `rel="stylesheet"` and an `href` attribute.
* The `href` attribute value works very similarly to linking to an image, or to another page.


--

![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
## PULSE CHECK

Which method should I choose?

Note:
* Discuss as a class
* I have a 2 page website -- what method would I choose to style these 5 elements:
	* All `<h1>` elements on all pages
	* A specific `<a>` link on the home page
	* All `<p>` elements on the home page
	* All `<img>` elements on all pages
	* A specific `<h3>` element on the About page


---


## Building Websites - CSS Specificity and Inheritance

Note:
* **CURRENT TIME:**  8:35pm

--

CSS is called "Cascading" Style Sheets for a reason...

--

This can get pretty crazy, but let's just focus on the basics for now.

Note:
* For more detailed information, I definitely recommend Googling "CSS Inheritance" and CSS "Specificity"

--

### Specificity

In general, "Cascading" means that styles can fall (or cascade) from one style sheet to another

For example, lets say we have the following 2 external stylesheets in our webpage

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="custom.css">
```

Note:
* Yes, you can include more than one external style sheet

--

And then the stylesheets have the following: 

style.css:

```css
h1 {
	color: blue;
}

p {
	text-align: center;
}
```

custom.css:

```css
h2 {
	color: green;
}

p {
	text-align: left;
}
```

Note:
* **Whiteboard:** In this scenario, what will the styles be for the `<h1>`, `<h2>`, and `<p>` tags?
* There is a conflict with the `p` selector; which style will win out and why?

--

As you can see, CSS specifies a priority scheme to determine which style rules apply if more than one rule matches against a particular element

This also comes into play when using a combination of inline, internal, and external styles

--



--

### Importance

You can override all of this by simply including "!important" in your style declaration, like so:

```css
p {
	text-align: center !important;
}
```

Note:
* Be careful not to "!important" all the things, though
* As they say, if everybody is special, then no one is special


--

### Inheritance

This is pretty straightforward -- in CSS, a child HTML element will inherit any applicable styles from its parent HTML element, unless otherwise specified.

```css
body {
	color: blue;
	text-align: center;
}

p {
	color: red;
}
```

Note:
* In this example, we know the `<p>` tag is a child of the `<body>` tag
* Therefore, it will inherit the `text-align` property
* But, due to the rules of specificity, it will overwrite the `color` property of "blue" and make it "red" instead

---

## Building Websites - CSS Colors

Colors can be specified in CSS in a variety of ways:

![Color](../../../img/unit_1/color.png)


--


* Color Keywords
* Hex codes
* rgb / rgba
* hsl / hsla


--


### Color Keywords

These are used less frequently, but are handy for basic colors like `black` and `white`. There are several

See [here](http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx) for more

--


### Hex Codes (RGB)

![Hex Color explanation](.././../../../../img/unit_1/hex_colors.png)

Note:
* "Hex" values are so-called because they use hexadecimal, or base-16, to describe the color values for red, green, and blue. Each of the 3 color values is expressed by two hexadecimal digits, from `00` (no color) to `FF` (full color), and are written in the order red, green, then blue, after an initial `#` sign.
* Hex values can be abbreviated to only 3 digits if each digits is doubled. So `#FFFFFF` (white) can be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`, however, cannot be abbreviated without altering the color.


--


### RGB Color Values

#### `rgb(0,0,0)`
*	The first value is red, the second green, the third blue.
*	Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.


Note:
* FF in base-16 is equivalent to 255 in base-10.
* In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.
* White-space is allowed *inside* the parentheses, so `rgb(255, 0, 0)` will do just as well.

--


### RGBa Colors
*	RGBa works identically to RGB, expect that it takes a 4th value called the "alpha".
*	This is a value between 0 and 1 which will be used to determine a color's opacity on the page,

![RGBA Color](../../../img/unit_1/rgba_color.png)

Note:
* 0 is completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.
* Thus, __rgba(0,0,0,.25)__ is black at 25% opacity and __rgba(255, 255, 255, 0.8)__ is white at 80% opacity.
* The alpha value can be in decimal form but cannot use a percentage. When a decimal is used, the leading zero is optional.

--


### HSL Colors

#### HSL
*	Similar notation to RGB values, but specify colors using hue, saturation, and lightness.
*	Not used very often


#### HSLa
*	As with RGBa, HSLa is exactly like HSL for the first 3 values, but takes a 4th alpha-channel value.

Note:
* **Hue** is expressed as a degree angle measure, with red being at 0, green at 120, and blue at 240. Note that the degree unit is implied, and that the angle wraps around, so 360 also refers to red, and -120 is the same as 240 (blue).
* **Saturation** is expressed as a percentage, with 100% being a fully saturated color, and 0% being a shade of gray (no hue).
* **Lightness** is also expressed as a percentage, 0% being black, and 100% being white. 50% lightness is the "normal" color range: anything above 50% gives a white tint, anything below 50% gives a black shade.
* As an example, red is ```hsl(0, 100%, 50%)```, which is equivalent to ```#FF0000```.
* Note that changing the opacity allows whatever colors are "behind" an element to shine through, which can alter the visible color significantly, especially at lower opacities.


--


![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
## PULSE CHECK

Name that color:

![RGBA Color](../../../img/mansoor/magenta.jpg)


---

## CSS Review
*	A CSS style rule consists of a selector and declarations (each with a property and value) inside a declaration block
*	CSS can be placed inline, internal, or external -- but you will almost always want to do external
*	CSS priority is determined by a combination of inheritance, specificity, and importance -- a great resource can be found [here](http://designshack.net/articles/css/what-the-heck-is-css-specificity/)

Note:
* **CURRENT TIME:**  9:00pm
* We covered a lot, but don't worry. We will continue to build on what we learned here
* And I strongly recommend everyone Google each of these topics in more depth over the weekend.

---


![GeneralAssemb.ly LAB Image](../../../../../../img/icons/exercise_icon_md.png)
## Lab Time
*	Your Portfolio!

Note:
* Time for students to apply what they learned
* Setup lab time by letting students know how to start the exercise and what is expected of them. 
* **Point out:** The portfolio page they will continue building should be personalized and will reflect just a portion of the projects they will build throughout the course. Look at this as a time to set goals and get students excited about what they will be building.
* Personalize this as much as you want; it does not have to look like the images provided


---


## Learning Objectives Review
*	We learned the DOM and can draw a simple DOM tree
*	We can predict image paths and apply relative paths to `<img>` and `<a>` tags.
*	We applied the CSS "cascade" including: importance, specificity and inheritance, and can explain the basic principles
*	We experimented with CSS Colors and margin/padding

Note:
* How do we feel about this so far?


---


## Homework

Complete the Portfolio and About pages according to the specifications outlined in the **FEWD-ATL-17** repo under Week 1/Assignment

Be sure it meets the criteria outlined in the Rubric.md document

Also, follow the instructions at the bottom of the page to create a new repo in your Github account, and submit your work via this method

Note:
* Fill out Exit Survey!!!

