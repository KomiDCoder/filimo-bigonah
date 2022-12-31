var episodeTitle = document.createElement("div");
episodeTitle.setAttribute("id", "episode-title");

var episodeList = document.createElement("div");
episodeList.setAttribute("id", "episode-list");
episodeTitle.innerHTML +=
  "<div class='episode-list-top'>" +
  "<span class='white-color'>" +
  "قسمت‌های‌بی گناه" +
  "</span>" +
  "<a id='order'>" +
  "<span>" +
  "مرتب سازی" +
  "<b>" +
  "<img src='svgs/triangle.svg' id='btn-triangle' />" +
  "</b>" +
  "</span>" +
  "</a>" +
  "</div>";
episodeTitle.innerHTML +=
  "<div class='seasons'>" +
  "<a href='#' class='season'>" +
  "فصل اول" +
  "</a>" +
  "</div>";
for (const key in biGonah.episode) {
  episodeList.innerHTML +=
    "<div class='episode'>" +
    "<div class='episode-time'>" +
    "<span>" +
    biGonah.episode[key]["time"] +
    "</span>" +
    "</div>" +
    "<img src =" +
    biGonah.episode[key]["img"] +
    "/>" +
    "<div class='episode-description'>" +
    "<h5>" +
    biGonah.episode[key]["title"] +
    "</h5>" +
    "<p>" +
    biGonah.episode[key]["story"] +
    "</p>" +
    "<div class='ep-desc-last-line'> " +
    "<div class='rating'>" +
    "<span>" +
    "<img src='svgs/thumb-up-fill.svg'/ class='thumb-up'>" +
    biGonah.episode[key]["rating"]["percent"] +
    "%" +
    "</span>" +
    "<span>" +
    "(" +
    biGonah.episode[key]["rating"]["total"] +
    " " +
    "رای" +
    ")" +
    "</span>" +
    "</div>" +
    "<div class='ep-btn-list'>" +
    "<span class='three-dots'>" +
    ". . ." +
    "</span>" +
    "<div class='like-dislike'>" +
    "<span>" +
    "<img src='svgs/thumb-up-white.svg'/>" +
    "</span>" +
    "<span class='rotate'>" +
    "<img src='svgs/thumb-up-white.svg' />" +
    "</span>" +
    "</div>" +
    "<span class='watch'>" +
    "<img src='svgs/play-arrow.svg' class='play-arrow' />" +
    "ورود و تماشا" +
    "</span>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
}
containerElement.appendChild(episodeTitle);
containerElement.appendChild(episodeList);
var orderBtn = document.getElementById("order");
var btnTriangle = document.getElementById("btn-triangle");
function setOrder(event) {
  btnTriangle.classList.toggle("active");
  var epList = document.getElementById("episode-list");
  if (btnTriangle.classList == "active") {
    epList.style.flexDirection = "column-reverse";
  } else {
    epList.style.flexDirection = "column";
  }
}
function removeOrderList(event) {
  if (event.target.parentNode.id !== "order") {
    btnTriangle.classList.remove("active");
  }
}
document.addEventListener("click", removeOrderList);
orderBtn.addEventListener("click", setOrder);
