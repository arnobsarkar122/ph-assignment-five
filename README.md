1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   ans: getElementById(id) returns a single id. getElementsByClassName returns HTMLCollection querySelector returns a first matching element querySelectorAll returns NodeList (array-like)

2. How do you create and insert a new element into the DOM?\
ans: document.createElement("tagName") to create a new element in memory. we can add text, classes, ids, or styles to the element. Finally, appendChild() adds to the end.

3. What is Event Bubbling and how does it work?
ans: When you click on an element, the event first runs on that element, then it automatically goes up (bubbles) to its parent, then the parent’s parent,
 and so on until it reaches the <body> and <html>. I can put one event listener on a parent and handle all its child clicks (this is called Event Delegation).

4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event Delegation is a technique where instead of attaching event listeners to many child elements, you attach one listener to their parent and use event
 bubbling to catch the events. it is useful because for Performance, Dynamic elements, Cleaner code

5. What is the difference between preventDefault() and stopPropagation() methods?
ans: Stops the default browser action for that event. Stops the event bubbling. preventDefault() Stop a form from submitting, stop a link from navigating.
stopPropagation() Stop parent handlers from firing when child is clicked.
