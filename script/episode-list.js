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
  "<div>" + "<a href='#' class='season'>" + "فصل اول" + "</a>" + "</div>";
containerElement.appendChild(episodeList);
