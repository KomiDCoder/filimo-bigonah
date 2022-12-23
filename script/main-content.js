var mainElement = document.getElementById("main");
var mainContent = document.createElement("div");
mainContent.setAttribute("id", "main-content");
var aboutSeries = document.createElement("div");
aboutSeries.setAttribute("id", "about-series");
aboutSeries.innerHTML += "<img src=" + biGonah.videoImage + "/>";
var aboutDescription = document.createElement("div");
aboutDescription.setAttribute("id", "about-description");
aboutDescription.innerHTML +=
  "<div class='story'>" +
  "<h5>" +
  "داستان" +
  " " +
  biGonah.title +
  "</h5>" +
  "<p>" +
  biGonah.story +
  "</p>" +
  "</div>";
aboutDescription.innerHTML +=
  "<div class='about'>" +
  "<h5>" +
  "درباره" +
  " " +
  biGonah.title +
  "</h5>" +
  "<p>" +
  biGonah.about +
  "</p>" +
  "</div>";
aboutSeries.appendChild(aboutDescription);
mainContent.appendChild(aboutSeries);
containerElement.appendChild(mainContent);
