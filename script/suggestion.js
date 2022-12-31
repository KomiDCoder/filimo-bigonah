var suggestionElement = document.createElement("div");
suggestionElement.setAttribute("id", "suggestion-element");
suggestionElement.innerHTML += "<h5>" + "فیلم‌های پیشنهادی" + "</h5>";
var moviesElement = document.createElement("div");
moviesElement.setAttribute("id", "movies-element");
for (const key in biGonah.suggestion) {
  var imdb;
  if (biGonah.suggestion[key]["imdb"]) {
    imdb =
      "<div class='imdb-rating'>" +
      "<span class='darker-color'>" +
      "IMDB" +
      "</span>" +
      "<span>" +
      biGonah.suggestion[key]["imdb"] +
      "</span>" +
      "</div>";
  } else {
    imdb = "";
  }
  moviesElement.innerHTML +=
    "<div class='movie'>" +
    "<img src=" +
    biGonah.suggestion[key]["img"] +
    "/>" +
    "<div class='movie-data'>" +
    "<div class='movie-rating'>" +
    "<span class='percent'>" +
    "<span class='darker-color'>" +
    "<img src='svgs/thumb-up-white.svg' />" +
    "</span>" +
    biGonah.suggestion[key]["percent"] +
    "%" +
    "</span>" +
    imdb +
    "</div>" +
    "<span>" +
    biGonah.suggestion[key]["genre"] +
    "</span>" +
    "<span class='production'>" +
    biGonah.suggestion[key]["production"] +
    "</span>" +
    "</div>" +
    "<span class='movie-title'>" +
    biGonah.suggestion[key]["name"] +
    "</span>" +
    "</div>";
}
suggestionElement.appendChild(moviesElement);
containerElement.appendChild(suggestionElement);
