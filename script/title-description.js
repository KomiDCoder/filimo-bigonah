var titleDescriptionContainer = document.createElement("div");
titleDescriptionContainer.setAttribute("id", "title-desc-container");
var containerElement = document.getElementById("container");
titleDescriptionContainer.style.backgroundImage = "url(" + biGonah.bgImg + ")";
var titleDescription = document.createElement("div");
titleDescription.setAttribute("id", "titleDescription");
titleDescriptionContainer.appendChild(titleDescription);
var titleDescriptionImg = document.createElement("img");
titleDescriptionImg.setAttribute("src", biGonah.poster);
titleDescriptionImg.setAttribute("class", "poster");
titleDescription.appendChild(titleDescriptionImg);
var descList = document.createElement("div");
descList.setAttribute("id", "desc-list");
descList.style.color = "white";
descList.innerHTML += "<h5>" + "<b>" + biGonah.title + "</b>" + "</h5>";
descList.innerHTML += "<div class='eng-title'>" + biGonah.engTitle + "</div>";
var titleDescriptionRating = document.createElement("div");
titleDescriptionRating.setAttribute("class", "title-description-rating");
titleDescriptionRating.innerHTML +=
  "<span class='people-rating'>" +
  "<span>" +
  "<img src='thumb-up-white.svg'/>" +
  "</span>" +
  "<span>" +
  "<span>" +
  biGonah.rating.percent +
  "</span>" +
  "<span>" +
  "(" +
  biGonah.rating.total +
  ")" +
  "</span>" +
  "</span>" +
  "</span>";
titleDescriptionRating.innerHTML +=
  "<span class='imdb-rating'>" +
  "<span>" +
  "<img src='imdb-logo.svg'/>" +
  "</span>" +
  "<span class='imdb-rating-text'>" +
  biGonah.imdb +
  " " +
  "/" +
  "10" +
  "</span>" +
  "</span>";
descList.appendChild(titleDescriptionRating);
if (biGonah.adult.value) {
  descList.innerHTML +=
    "<div class='parent-guide yellow-color'>" +
    "<span>" +
    "<img src='parent-guide.svg' />" +
    "</span>" +
    biGonah.adult.text +
    "</div>";
}
descList.innerHTML +=
  "<div>" +
  "<span class='release-date'>" +
  "<img src='calendar.svg' />" +
  biGonah.releaseDate +
  "</span>" +
  "</div>";
descList.innerHTML +=
  "<div class='small-font'>" +
  biGonah.director.job +
  ":" +
  "<a href='#'>" +
  biGonah.director.fullName +
  "</a>" +
  "</div>";
descList.innerHTML +=
  "<div class='small-font'>" +
  "محصول" +
  " " +
  biGonah.production.country +
  " - " +
  biGonah.production.year +
  "</div>";
descList.innerHTML +=
  "<div class='genre'>" +
  "<span>" +
  biGonah.genre.genre1 +
  "</span>" +
  "<span>" +
  biGonah.genre.genre2 +
  "</span>" +
  "<span class='seperation'>" +
  "</span>" +
  "<span>" +
  biGonah.numberOfEpisode +
  "</span>" +
  "</div>";

titleDescription.appendChild(descList);
var watchElement = document.createElement("div");
watchElement.setAttribute("id", "watch-element");
watchElement.innerHTML +=
  "<div id='watch-element-child'>" +
  "<div class='right-part'>" +
  "<span>" +
  "<span>" +
  "+" +
  "</span>" +
  "دنبال میکنم" +
  "</span>" +
  "<span class='like'>" +
  "<img src='thumb-up-white.svg'/>" +
  "</span>" +
  "<span class='like'>" +
  "<img src='thumb-up-white.svg' class='rotate-img' />" +
  "</span>" +
  "</div>" +
  "<div class='left-part'>" +
  "</div>" +
  "</div>";
titleDescriptionContainer.appendChild(watchElement);
containerElement.appendChild(titleDescriptionContainer);
