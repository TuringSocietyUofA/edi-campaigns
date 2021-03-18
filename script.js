function showWorkLife() {
  document.getElementById("work_life").style.display = "block";
  document.getElementById("imposter_syndrome").style.display = "none";
  document.body.style.backgroundColor = "#fff8ef";
  document.getElementById("button-imposter-syndrome").style.textDecoration = "none";
  document.getElementById("button-work-life").style.textDecoration = "underline";
}

function showImposterSyndrome() {
  document.getElementById("work_life").style.display = "none";
  document.getElementById("imposter_syndrome").style.display = "block";
  document.body.style.backgroundColor = "#45755473";
  document.getElementById("button-imposter-syndrome").style.textDecoration = "underline";
  document.getElementById("button-work-life").style.textDecoration = "none";
}

function selectStoryWorkLife(e) {
  let id = e.target.id;
  document.getElementById("spotlight").style.display = "block";
  document.getElementById("spotlight-story").src = "./images/work_life/diversity_uofa_" + id + ".png";
}

function closeSpotlight(e) {
  if (e.target.id == "spotlight-story-container") {
    document.getElementById("spotlight").style.display = "none";
  }
}

function selectStoryImposterSyndrome(e) {
  let id = e.target.id;
  document.getElementById("spotlight").style.display = "block";
  document.getElementById("spotlight-story").src = "./images/imposter_syndrome/imposter_sydrome_" + id + ".png";
}