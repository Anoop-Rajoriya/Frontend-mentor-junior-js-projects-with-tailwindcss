console.log("script is runnig!");
const emailBox = document.querySelector("#email-box");
const email = decodeURIComponent(
  document.location.search.split("=").filter((str) => str.includes(".com"))
);

emailBox.innerText = email;
