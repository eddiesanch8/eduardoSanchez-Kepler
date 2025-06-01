// Copyright Text for Footer

const today = new Date("2025-05-16T10:30:00");
const thisYear = today.getFullYear();

const webFooter = document.querySelector("footer");
webFooter.className = "bottomFooter";

//Creating Copyright

const copyright = document.createElement("p");
copyright.className = "copyright";
copyright.innerHTML = ` Eduardo Sanchez ${thisYear} \u00A9 `;
webFooter.appendChild(copyright);

//List of technical skills that need to pop up

const skills = ["CSS", "HTML", "Sales", "Javascript", "Leadership"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

// Handling Messages

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
  newMessage.target = "_blank";
  newMessage.href = ` ${emailData}`;

  // Creating a new remove button element
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  //Remove button, append message that user has created

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset();
});

// Fetch API Assignment

const gitRequest = fetch(`https://api.github.com/users/eddiesanch8/repos`)
  // Parse data into JSCON, then manipulate data with DOM to include into HTML
  .then((result) => result.json())
  .then((data) => {
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    //iterate over the JSON() data using ForEach instead of [] notation
    data.forEach((repository) => {
      //setting up DOM for UL, introducing anchors
      const project = document.createElement("li");
      const projectLink = document.createElement("a");

      // creating links that you can click on for repos
      projectLink.textContent = repository.name;
      projectLink.href = repository.html_url;
      //creating a new tab for clicks
      projectLink.target = "_blank";

      // adding link to project
      project.appendChild(projectLink);

      // adding repos to the project list li
      projectList.appendChild(project);
    });

    console.log(data);
  })
  // Error Catch
  .catch((error) => {
    console.error("Uh-oh, error:", error);
  });
