const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";

const content2 = document.createElement("div");
content2.textContent = "This is the glorious text-content!";
content2.style.borderStyle = "solid";
content2.style.borderColor = "black";
content2.style.backgroundColor = "pink";

const header2 = document.createElement("h1");
header2.textContent = "I'm in a div";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header);
content2.appendChild(header2);
content2.appendChild(paragraph2);
container.appendChild(content2);