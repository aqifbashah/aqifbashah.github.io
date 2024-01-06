let btnContainer = document.querySelector("#links");
let btns = btnContainer.getElementsByClassName("link");
let sections = document.querySelectorAll(".section");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("navbar-active");
    if (current.length > 0) {
      current[0].classList.remove("navbar-active");
    }
    this.classList.add("navbar-active");

    // Get the ID of the associated section
    let sectionId = this.textContent.trim().toLowerCase().replace(" ", "");
    let section = document.getElementById(sectionId);

    if (section) {
      section.classList.add("navbar-active");
    }
  });
}

// Function to check if a section is in the viewport
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Calculate the height of the section that needs to be at least 60% visible
  let visibleHeight = el.offsetHeight * 0.6;

  return (
    rect.top >= -visibleHeight && rect.bottom <= windowHeight + visibleHeight
  );
}

// Function to add 'active' class to sections in viewport
function checkSections() {
  sections.forEach((section, index) => {
    if (isElementInViewport(section)) {
      btns[index].classList.add("navbar-active");
    } else {
      btns[index].classList.remove("navbar-active");
    }
  });
}

// Check if sections are active on scroll or load
window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);
