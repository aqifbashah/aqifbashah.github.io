let educationListDOM = document.querySelector("#educationList");
let addEducationDOM = document.querySelector("#addEducation");

function toggleEducation() {
  educationListDOM.classList.toggle("hidden");
  educationListDOM.classList.toggle("visible");
}

addEducationDOM.addEventListener("click", toggleEducation);
