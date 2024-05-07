console.log("script is running!");
const testEmail = "anooprajo0@gmail.com";
const form = document.querySelector("#bottom-section");
const inputcontainer = document.querySelector("#input-container");
const input = inputcontainer.lastElementChild;

form.addEventListener("submit", send);

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function send(event) {
  event.preventDefault();

  if (validateEmail(input.value)) {
    // console.log('valid email');
    document.location.replace(insertParam("email", input.value));
  } else {
    inputcontainer.classList.add("error");
    // console.log('invalid email');
  }

  setTimeout((e) => inputcontainer.classList.remove("error"), 1000);
}

function insertParam(k, v) {
  let key = encodeURIComponent(k);
  let value = encodeURIComponent(v);

  const urlArr = document.location.href.split("/");

  urlArr.forEach((elm, index) => {
    if (elm.includes("index.html")) {
      urlArr[index] = elm.replace("index", "succes");
    }
  });

  const url = new URL(urlArr.join("/"));

  const params = [key, value].join("=");
  url.search = params;
  return url.href;
}
