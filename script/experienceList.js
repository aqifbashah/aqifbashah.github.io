let experienceListDOM = document.querySelector("#experienceList");
let addExperienceDOM = document.querySelector("#addExperience");

function toggleExperience() {
  if (experienceListDOM.style.display === "none") {
    experienceListDOM.style.display = "block";
  } else {
    experienceListDOM.style.display = "none";
  }
}

addExperienceDOM.addEventListener("click", toggleExperience);
