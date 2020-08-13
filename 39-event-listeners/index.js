// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
const clickTheButton = () => {
  const divBTN = document.querySelector("div.click")

  divBTN.addEventListener("click", () => {
    console.log("divBTN clicked");
  });
}

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const a = document.querySelector(".mouseover a");

const hoverOver =  () => {
  a.addEventListener("mouseover", () => {
   console.log("Mouseover anchor");
  });
}
/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
const handleLeave = () => {
  a.addEventListener("mouseout", () => {
    console.log("Mouseout of anchor tag");
  });
}
/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
const input = document.querySelector(".input input");

const focusOnMe = () => {
  input.addEventListener("focus", () => {
    console.log("Focus on input");
  });
}
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
const clickElsewhere = () => {
  input.addEventListener("blur", () => {
    console.log("Blur");
  });
}
/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
const pressAKey = () => {
  input.addEventListener("keydown", () => {
    console.log("Key pressed");
  });
}
/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const releaseAKey = () => {
  input.addEventListener("keyup", () => {
    console.log("Key released");
  });
}
/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const inputToUpperCase = () => {
  input.addEventListener("keyup", () => {
    input.value = input.value.toUpperCase();
  });
}
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
const handleSelectChange = () => {
  const select = document.querySelector("#items");
  select.addEventListener("change", () => {
    console.log(select.value);
  });
}
/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const submitFormHandler = () => {
  const form = document.querySelector("form");
  const formInputs = document.querySelectorAll("form input");

  form.addEventListener("submit", event => {
    event.preventDefault();
    let result = {};
    formInputs.forEach(input => {
      result[input.name] = input.value;
    });

    console.log(result);
  });
}
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
const handleScroll = () => {
  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
  });
}
