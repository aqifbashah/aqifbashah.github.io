let openButtonDOM = document.querySelector("#openMenuMobile");
let closeButtonDOM = document.querySelector("#closeMenuMobile");
let menuMobileListDOM = document.querySelector("#menuMobileList");

function openMenuMobile() {
  openButtonDOM.style.display = "none";
  menuMobileListDOM.style.width = "30%";
  menuMobileListDOM.style.padding = "1rem";
}

function closeMenuMobile() {
  openButtonDOM.style.display = "";
  menuMobileListDOM.style.width = "0";
  menuMobileListDOM.style.padding = "0";
}

openButtonDOM.addEventListener("click", openMenuMobile);
closeButtonDOM.addEventListener("click", closeMenuMobile);
document.addEventListener("mouseup", function (event) {
  if (!menuMobileListDOM.contains(event.target)) {
    closeMenuMobile();
  }
});
