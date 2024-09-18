
const allBtn = document.getElementsByTagName("button");

for (const btn of allBtn) {
  btn.style.padding = "10px";
  btn.style.borderRadius = "5px";
  btn.style.border = "1px solid lightgray";
  btn.style.marginLeft = "10px";
  btn.style.cursor = "pointer";
}
const center = document.querySelector("body");
center.style.textAlign = "center";

//comment
const commentContainer = document.getElementById("comment-container");

commentContainer.style.textAlign = "left";
