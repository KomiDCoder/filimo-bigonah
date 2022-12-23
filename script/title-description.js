var headerElement = document.getElementById("header");
var logoImg = document.createElement("img");
logoImg.setAttribute("src", biGonah.filimoLogo);
var titleDescriptionContainer = document.createElement("div");
titleDescriptionContainer.setAttribute("id", "title-desc-container");
headerElement.appendChild(logoImg);
headerElement.innerHTML += "<p>" + "|" + "</p>";
var containerElement = document.getElementById("container");
titleDescriptionContainer.style.backgroundImage = "url(" + biGonah.bgImg + ")";
var titleDescription = document.createElement("div");
titleDescription.setAttribute("id", "titleDescription");
titleDescriptionContainer.appendChild(titleDescription);
var titleDescriptionImg = document.createElement("img");
titleDescriptionImg.setAttribute("src", biGonah.poster);
titleDescription.appendChild(titleDescriptionImg);
var descList = document.createElement("div");
descList.setAttribute("id", "desc-list");
descList.style.color = "white";
descList.innerHTML += "<h5>" + "<b>" + biGonah.title + "</b>" + "</h5>";
descList.innerHTML += "<div>" + biGonah.engTitle + "</div>";
descList.innerHTML += "<div>" + biGonah.rating.total + "</div>";
descList.innerHTML += "<div>" + biGonah.rating.percent + "</div>";
descList.innerHTML += "<div>" + "10/" + biGonah.imdb + "</div>";
if (biGonah.adult.value) {
  descList.innerHTML +=
    "<div class='yellow-color'>" + biGonah.adult.text + "</div>";
}
descList.innerHTML += "<div>" + biGonah.releaseDate + "</div>";
descList.innerHTML +=
  "<div>" +
  biGonah.director.job +
  ":" +
  "<a href='#'>" +
  biGonah.director.fullName +
  "</a>" +
  "</div>";
descList.innerHTML +=
  "<div>" +
  "محصول" +
  " " +
  biGonah.production.country +
  "-" +
  biGonah.production.year +
  "</div>";

titleDescription.appendChild(descList);
var watchElement = document.createElement("div");
watchElement.setAttribute("id", "watch-element");
watchElement.innerHTML = "<div class='watch-element-child'>" + "</div>";
titleDescriptionContainer.appendChild(watchElement);
containerElement.appendChild(titleDescriptionContainer);
