![GeneralAssemb.ly](../../../../../img/icons/FEWD_Logo.png)

# LESSON 1 - HTML BASICS

---


## Lesson 1 Agenda

*	Introductions
*	Develop Classroom Culture
*	Outline today's Learning Objectives
*	Review HTML Tags & CSS Selectors
*	Dive into HTML Structure Reading w/ Understanding
*	Learn about External Style Sheets
*	Lab Time


---


## Introductions

--

![Mansoor Bio Image](../../../../../img/mansoor/mansoor-headshot-bw_med.jpg)

My name is Mansoor Siddeeq and I am a Senior Support Engineer at Salesforce.

--

### A little more bit about me...
*	Originally from Indianapolis, IN
*	Moved to ATL in 2013 to become a "Pardashian"
*	Took FEWD5 at GA to brush up on my front end skills
*	Interesting fact:  I was ran over by a merry-go-round when I was little (true story)

--

### And you can find me on...
*	Twitter: &nbsp;&nbsp; @Mr_Siddeeq
*	LinkedIn: &nbsp;&nbsp; /msiddeeq
*	Slack: &nbsp;&nbsp; @mansoorsiddeeq
*	Email: &nbsp;&nbsp; mansoor@msiddeeq.com

--

### What about you?
*	Name
*	What you do now
*	What brought you to GA
*	What do you hope to get out of this class
*	Share an embarassing/interesting story about yourself

---

## Classroom Culture & Values

Note:
* We're all in this together! And we all have our own unique way of learning
* So, we need to come together and come up with some common classroom values we can implement to help get the most out of this journey

--

### Here are a few of My Common Values...
*	Be present and involved
*	Be respectful of other people's time
*	Honor your commitments
*	...

Note:
* These are values that I try hold myself to whenever I seek to do anything
* Also, I find that when I am actively aware of these, I tend to learn MUCH better...

--

### Be present and involved

Note:
* We'll be covering A LOT of information over the next 10 weeks
* In order to not fall behind, you will need to be present both physically and mentally
* Meaning during class, let's focus on the lesson/topic
* Also, in order to help me make sure everybody's on track, I'll need class participation when the time comes

--

### Be respectful of other people's time

Note:
* We'll be hanging out for a minimum of 6 hours a week for the next 10 weeks; that's a lot of time together
* Still, it won't be enough time to dive into EVERYTHING we may be curious about
* To be courteous to others in the class, let's only ask questions that dive deeper when they will be mutually beneficial for the whole class.
* Feel free to ask any general/project/business related questions in our Slack room, or corner me after class and we can setup some time to discuss

--

### Honor your commitments

Note:
* We will have pre-work and homework, as well as a final project
* You will learn MUCH faster and get more out of this class if you complete this work on time
* We can discuss homework policy once the first assignment is sent out

--

![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
## PULSE CHECK 
What about you? What are some common values you think should be included?

Note:
* Engage the class
* Give the students 1 minute to jot down some ideas, and then spend 5 minutes discussing them
* We will compromise, and pick the 2 most voted on values to add to my initial 3

---

## Learning Objectives:

--

### Today, we will...
*	Review HTML/CSS syntax
*	Apply basic HTML tags to a web page/experiment with content structure
*	Create and Link an external stylesheet

Note:
* Remember these learning objectives as we move throughout the class
* By then end of this lesson, you should be comfortable with explaining them and what they mean
* Also, as we go forward, I want to keep in mind how what we learn in each lesson points back to these lesson objectives, and how it fits in the bigger picture with your Final Project

---


# HTML Tags & CSS Selectors Review

Note:
* I did want to take this time to point out that today may be a bit slow for some, but I want to make sure we take a few minutes to set a proper baseline before moving on

---

## HTML Basics
*	HTML stands for **Hypertext Markup Language**
*	It gives your content **structure**
*	HTML is written using **tags** wrapped in angle brackets "< >"

---

## BRIEF HISTORY OF HTML

![HTML History](../../../../../img/unit_1/Timeline_of_web_technologies.jpg)

Note:
* HTML has been around for about 25 years now
* Original HTML was designed to do little more than display text/images and link to other documents
* image retrieved from http://www.onbile.com/info/wp-content/uploads/2013/09/Timeline-of-web-technologies-639x168.jpg on October 1, 2013.

---

## HTML vs HTML5
*	HTML5 is the current version of HTML
*	We use the Doctype element to tell the browser to render the webpage using HTML5 standards

```html
<!DOCTYPE html>
```

---


![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
## PULSE CHECK 
![Content No HTML Image](../../../../../../img/mansoor/content-no-html.jpg)
![Content With HTML Image](../../../../../../img/mansoor/content-html.jpg)

Note:
* Engage the class
* This is the exact same content, but its being displayed differently
* What are some differences you notice between the 2 images?
* What do you think was done to them to make them display so differently?


---

## Basic HTML Syntax

--

### HTML elements and tags

![HTML Syntax](../../../../../../img/unit_1/tags.png)

Note:
* Notice this HTML element consists of an open HTML tag, some content to be displayed in the browser, and a closing HTML tag
* Not all HTML elements have both a start and end tag
* As we go along, you'll notice the HTML tags describe the content

--

### HTML tag attributes

![HTML Syntax](../../../../../img/unit_1/tags_attributes.png)

Note:
* Here, we see an HTML tag's attribute
* HTML attributes are additional values that configure the HTML elements or adjust their behavior in various ways to meet the criteria the users want.

---

## Basic CSS Syntax

--

### CSS selector and properties

![CSS Syntax](../../../../../../img/unit_1/css_syntax.png)

Note:
* CSS RULE consists of a SELECTOR and a DECLARATION BLOCK
* Within the declaration black, you have an individual DECLARATION which is made up of the property of the selector you want to change, and the value you want to change it to

---

![DASH Anna Website](../../../../../../img/mansoor/dash-anna.jpg)

Note:
* But, we've seen all of this before, right? We worked with all of these while building Anna's website in DASH
* We used HTML tags and attributes, as well as CSS element selectors when completing this project

---

# Adding Structure
### Basic HTML Content Tags

--

### Heading Elements

```html
<h1>Largest Heading</h1>
<h2> . . . </h2>
<h3> . . . </h3>
<h4> . . . </h4>
<h5> . . . </h5>
<h6>Smallest Heading</h6>
```

Note:
* CHECK:  What sort of content do you think would be appropriate for an H1 tag? What about H2?
* Heading Elements are section headings. H! is the highest section level and H6 is the lowest.
* These should be used to mark headings according to their relative importance, with h1 being the most important.

--

### Text Elements

```html
<p>This is a paragraph</p>
<code>This is some computer code</code>
```

Note:
* CHECK:  When would it be appropriate to use the CODE tag?
* The P tag is used to mark a block of text; typically used for paragraph content.
* The CODE tag represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.

--

### Unordered List
```html
<ul>
	<li>List item</li>
	<li>List item</li>
</ul>
```

Note:
* CHECK:  What sort of content do you think would be appropriate for an H1 tag? What about H2?

--

### List items
```html
<li>List item</li>
<li>List item</li>
<li>List item</li>
```

Note:
* This is exactly what the title says it is -- an item in a list
* We saw these in use in the UL tag example on the previous slide

--

### Hyperlinks
```html
<a href="Link">Link Text</a>
```

Note:
* CHECK:  What's different about the A tag?
* The A tag defines a hyperlink, which is used to link from one page to another.
* The most important attribute of the A element is the href attribute, which indicates the link's destination

---


### Great Resources

*	Mozilla Developer Network
*	W3Schools
*	CSSTricks

---


# Code Along 1 - HTML Structure


--

![GeneralAssemb.ly](../../../../../img/icons/code_along.png)
## General Assembly Press Release - HTML

Note:
* How might you describe the piece of text reading "General Assembly offers Classes and Workshops Worldwide"?
* What is this? (while pointing to content on the screen)

---


# External CSS

--

![DASH Anna Website](../../../../../../img/mansoor/dash-anna.jpg)

--


![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
## PULSE CHECK 
When we added CSS to Anna's webpage in DASH, where did we place the styles?


--

![Internal CSS Anna Website](../../../../../../img/mansoor/internal-css-anna.jpg)

---

## Internal CSS

Internal CSS consists of any styles placed inside the ```<style></style>``` section of your webpage

---

## External CSS

By contrast, styles that are placed in a separate .css file and linked to the HTML page are considered External CSS


---


![Pulse Check Image](https://d30y9cdsu7xlg0.cloudfront.net/png/27272-200.png)
## Pulse Check
If you are tasked with developing a major web application with multiple pages, can you think of some pros/cons to using Internal vs External CSS?

Note:
* Whiteboard - pros/cons of internal vs external CSS

---


# Code Along 2 - External CSS


--

![GeneralAssemb.ly](../../../../../img/icons/code_along.png)
## General Assembly Press Release - CSS

Note:
* Things to be aware of while coding:
* Style specific elements to avoid inherited CSS. For instance, change the font-family of the h1 instead of making a change to the body, which would be inherited.
* Avoid the temptation to discuss CSS Reset/Normalize or Boilerplate at this stage.
* Keep color simple. We've included some notes about colors and fonts in the slides. If you don't have time to explain in detail, you can ask students to read the notes for homework.

---

![GeneralAssemb.ly](../../../../../img/icons/exercise_icon_md.png)
## Cookie Recipe

---


## Learning Objectives Review
*	We Reviewed basic HTML/CSS syntax and how it relates to Anna's DASH website
*	We Applied basic HTML tags to a web page (GA Press Release/Cookie Recipe) to give it's content structure
*	We Created and Linked an external stylesheet to our HTML

Note:
* How do we feel about this so far?


---


## Next Class - CSS Basics

Note:
* We will build on the basic CSS syntax we discussed this class, and go into more detail about inheritance/specificity
* We will also delve deeper into other types of HTML elements, like images, navs, etc.


---

## Homework

--

*	Create a resume website (Use the same basic content/layout structure from the GA Press Release activity -- no need for anything fancy)
*	Watch a video on the Internet about the Internet - https://www.youtube.com/watch?v=Dxcc6ycZ73M
*	Read about CSS Colors
*	Don't worry about submitting the resume website to me just yet, but make sure you work on it.
