// Copyright Text for Footer

//  Create a variable named today and assign it a new date object

const today = new Date("2025-05-16T10:30:00");
const thisYear = today.getFullYear();

//  Create a variable named footer and assign it the footer element by using "DOM Selection" to select the <footer> element from the DOM
// hint: querySelector method or similar

const webFooter = document.querySelector("footer");
webFooter.className = "bottomFooter";

//  Create a variable named copyright and use it to create a new paragraph (p) element
// hint: createElement method
//  Set the inner HTML of your copyright element to display your name and the current year
// hint: use the copyright variable and the thisYear variable from earlier
//  Append the copyright element to the footer using "DOM Manipulation"
// hint: appendChild method or similar
//  STRETCH GOAL: Use unicode to also include the copyright symbol ( © ) in your footer content
//  Save and refresh your browser
// You should see the text "Your Name 2024" at the bottom of the page

const copyright = document.createElement("p");
copyright.className = "copyright";
copyright.innerHTML = ` Eduardo Sanchez ${thisYear} \u00A9 `;
webFooter.appendChild(copyright);

// Open your index.js file
// List your technical skills by creating an Array of String values and store it in a variable named skills
// Create a variable named skillsSection and use "DOM Selection" to select the skills section by id
// hint: querySelector or getElementById method
// Create a variable named skillsList and use "DOM Selection" to query the skillsSection (instead of the entire document) to select the <ul> element you created earlier in this assignment
// Create a for loop to iterate over your skills Array
// You should see your list of skills beneath the "Skills" heading

const skills = ["CSS", "HTML", "Sales", "Javascript", "Leadership"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
