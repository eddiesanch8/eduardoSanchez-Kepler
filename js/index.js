// Copyright Text for Footer

const today = new Date("2025-05-16T10:30:00");
const thisYear = today.getFullYear();

const webFooter = document.querySelector("footer");
webFooter.className = "bottomFooter";

//  Create a variable named copyright and use it to create a new paragraph (p) element

const copyright = document.createElement("p");
copyright.className = "copyright";
copyright.innerHTML = ` Eduardo Sanchez ${thisYear} \u00A9 `;
webFooter.appendChild(copyright);

// List your technical skills by creating an Array of String values and store it in a variable named skills

const skills = ["CSS", "HTML", "Sales", "Javascript", "Leadership"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

// Handle Message Form Submit
//  Open your index.js file and start at the bottom

const messageForm = document.getElementById("leave_message");

messageForm.addEventListener("submit", (event) => {
  // I have to prevent the form from using its default behavior

  event.preventDefault();

  const nameData = event.target.usersName.value;
  const emailData = event.target.usersEmail.value;
  const messageData = event.target.usersMessage.value;

  console.log(nameData, emailData, messageData);

  // Displaying Messages in a List grabbing element in the next HTML Section

  const messageSection = document.getElementById("messages");

  // Creating new List
  const messageList = messageSection.querySelector("ul");

  // Creating New Message to create list item, then create innerHTML to display message

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${emailData}">${nameData}</a> <span>${messageData} </span>`;

  // Creating a new remove button element
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  //remove button, append message

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset();
});

//  Create a variable named removeButton that makes a new <button> element
// Set the inner text to "remove"
// Set the type attribute to "button"
// Add an event listener to the removeButton element that handles the "click" event
// Inside the callback function, create a variable named entry that finds the button's parent element using DOM Traversal (hint: parentNode property)
// Remove the entry element from the DOM (hint: remove method)
//  Append the removeButton to the newMessage element
// hint: appendChild method
//  Append the newMessage to the messageList element
//  Save and refresh your browser (or just check your browser for changes if using live extension)
