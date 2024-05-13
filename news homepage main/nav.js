console.log("script is running!");

const navOpenButton = document.querySelector("#nav-open-btn");
const navCloseButton = document.querySelector("#nav-close-btn");
const navigationPanelWraper = document.querySelector("nav");
const navigationPanel = document.querySelector("#nav-links");

navigationPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});

navOpenButton.addEventListener("click", openMenu);

navCloseButton.addEventListener("click", closeMenu);

navigationPanelWraper.addEventListener("click", closeMenu);

function openMenu(event) {
  navigationPanelWraper.classList.remove("translate-x-full");
  navigationPanelWraper.classList.add("translate-x-0");
  
  setTimeout(()=> {
    navigationPanelWraper.classList.remove("opacity-0");
  navigationPanelWraper.classList.add("opacity-100");
    navigationPanel.classList.remove("translate-x-full");
  navigationPanel.classList.add("translate-x-0");
  }, 280)

}
function closeMenu(event) {
    navigationPanel.classList.remove("translate-x-0");
    navigationPanel.classList.add("translate-x-full");
    navigationPanelWraper.classList.add("opacity-0");
    navigationPanelWraper.classList.remove("opacity-100");
  setTimeout(()=> {
    navigationPanelWraper.classList.add("translate-x-full");
    navigationPanelWraper.classList.remove("translate-x-0");
  }, 280)
}
