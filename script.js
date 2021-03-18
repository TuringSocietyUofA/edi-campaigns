function selectStory(e) {
  let id = e.target.id;
  document.getElementById("spotlight").style.display = "block";
  document.getElementById("spotlight-story").src = "./images/work_life/diversity_uofa_" + id + ".png";
}

function closeSpotlight(e) {
  if (e.target.id == "spotlight-story-container") {
    document.getElementById("spotlight").style.display = "none";
  }
}