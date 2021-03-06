// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */
const createDOMElement = tagName => {
  const newElement = document.createElement(tagName);
  return newElement;
}
/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */
const addPTag = text => {
  const body = document.querySelector('body');
  const pTag = document.createElement('p');
  pTag.innerText = text;
  body.append(pTag);
}
/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */
const addElementWithClass = (tagName, text, className) => {
  const body = document.querySelector('body');
  const newElement = document.createElement(tagName);
  newElement.innerText = text;
  newElement.classList.add(className);
  body.append(newElement);
}
/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
const addElementWithMultipleClasses = (tagName, text, classArray) => {
  const body = document.querySelector('body');
  const newElement = document.createElement(tagName);
  newElement.innerText = text;
  newElement.classList.add(...classArray);
  body.append(newElement);
}
/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

const buildAList = (listType, listClass, numberOfLi) => {
  const list = document.createElement(listType);

  for (let i = 1; i <= numberOfLi; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${i}`;
    list.appendChild(li);
  }

  list.className = listClass;
  document.body.append(list);
};

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */
const findFirstList = () => {
  const list = document.querySelector("ul");
  if (list !== null) {
    return list;
  }
  return document.querySelector("ol");
}

const prependLiToList = (text, liClass) => {
  const list = findFirstList();
  const newLi = document.createElement("li");
  newLi.className = liClass;
  newLi.innerText = text;
  list.prepend(newLi);
}
/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */
const pushToSelectedPosition = (text, className, index) => {
  const list = findFirstList();
  const li = document.createElement("li");
  li.className = className;
  li.innerText = text;
  list.insertBefore(li, list.childNodes[index]);
}
/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */
const deleteSelectedElements = (parent, element) => {
  const parentElement = document.querySelector(parent);
  const children = parentElement.querySelectorAll(element);
  children.forEach(child => parentElement.removeChild(child));
}
