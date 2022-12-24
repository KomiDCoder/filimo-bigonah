var episodeList = document.createElement("div");
episodeList.setAttribute("id", "episode-list");
episodeList.innerHTML +=
  "<div class='episode-list-top'>" +
  "<span class='white-color'>" +
  "قسمت‌های بی گناه" +
  "</span>" +
  "<a href='#'>" +
  "مرتب سازی" +
  "<span>" +
  "<b>" +
  "^" +
  "</b>" +
  "</span>" +
  "</a>" +
  "</div>";
episodeList.innerHTML +=
  "<div class='seasons'>" +
  "<a href='#' class='season'>" +
  "فصل اول" +
  "</a>" +
  "</div>";

episodeList.innerHTML +=
  "<div class='episode'>" +
  "<img src =" +
  biGonah.episode.ep1.img +
  "/>" +
  "<div class='episode-description'>" +
  "<h5>" +
  biGonah.episode.ep1.title +
  "</h5>" +
  "<p>" +
  biGonah.episode.ep1.story +
  "</p>" +
  "<div class='rating'>" +
  "<span>" +
  "<img src='thumb-up-fill.svg'/ class='thumb-up'>" +
  biGonah.episode.ep1.rating.percent +
  "%" +
  "</span>" +
  "<span>" +
  "(" +
  biGonah.episode.ep1.rating.total +
  " " +
  "رای" +
  ")" +
  "</span>" +
  "</div>" +
  "</div>" +
  "</div>";

containerElement.appendChild(episodeList);
