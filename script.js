const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("WELCOME");
  await delay(700);
  createText("STARTING THE SERVER...");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about me", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/SØØﾶﾑⱤ";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-angle-right icon");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "all") {
    trueValue(value);

    createCode(
      "projects",
      "My github page with my projects. Follow me there ;)"
    );
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    createText(
      "<a href='https://github.com/4L13N-786' target='_blank'><i class='fab fa-github white'></i> github.com/4L13N-786</a>"
    );
  } else if (value === "about me") {
    trueValue(value);
    createText("Hi, my name is Muhammed ;)");
    createText(
      "Hey, I'm Muhammed. I'm currently studying IT and thoroughly enjoying the world of coding."
    );
  } else if (value === "social -a") {
    trueValue(value);
    createText(
      "<a href='https://github.com/4L13N-786' target='_blank'><i class='fab fa-github white'></i> github.com/4L13N-786</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/in/muhammed-soomar-6916272b7/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/muhammed-soomar</a>"
    );
    createText(
      "<a href='https://www.instagram.com/muhammed_soomar/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/muhammed_soomar</a>"
    );
  } else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social -a?");
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else {
    falseValue(value);
    createErrorText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-angle-right icon");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "success");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-angle-right icon error");
  const message = document.createElement("h2");
  message.setAttribute("class", "error");
  message.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(message);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function createErrorText(text) {
  const p = document.createElement("p");
  p.innerText = text;
  app.appendChild(p);
}

open_terminal();
