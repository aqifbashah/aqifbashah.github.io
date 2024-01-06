let slideIndex = 1;
let slides = document.getElementsByClassName("project-slide");
let dots = document.getElementsByClassName("dot");
let buttons = document.getElementsByClassName("project-btn");
let pDescriptions = document.getElementsByClassName("project-descriptions");
showProject(slideIndex);

function showProject(projectNumber) {
  if (projectNumber > slides.length) {
    projectNumber = 1;
  }
  if (projectNumber < 1) {
    projectNumber = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("dot-active");
    buttons[i].classList.remove("btn-active");
  }

  slides[projectNumber - 1].style.display = "flex";
  dots[projectNumber - 1].classList.add("dot-active");
  buttons[projectNumber - 1].classList.add("btn-active");
}

function currentSlide(n) {
  showProject(n);
}

// function for next projects
// prev projects handled in html plusSlides(-1)
function nextPrev(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("dot-active");
    buttons[i].classList.remove("btn-active");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add("dot-active");
  buttons[slideIndex - 1].classList.add("btn-active");
}

function plusSlides(n) {
  nextPrev((slideIndex += n));
}
