var castCrew = document.createElement("div");
castCrew.setAttribute("id", "cast-crew");
var castList = document.createElement("ul");
castList.setAttribute("id", "cast-list");
castCrew.innerHTML += "<h5>" + "بازیگران سریال بی گناه" + "</h5>";
for (const key in biGonah.casts) {
  var castListItem = document.createElement("li");
  castListItem.innerHTML += "<span>" + biGonah.casts[key]["name"] + "</span>";
  castListItem.innerHTML += "<img src=" + biGonah.casts[key]["img"] + " />";
  castList.appendChild(castListItem);
}
var crewList = document.createElement("ul");
crewList.setAttribute("id", "crew-list");
for (var key in biGonah.crews) {
  var crewListItem = document.createElement("li");
  crewListItem.innerHTML +=
    "<p class='crew-title'>" + biGonah.crews[key]["crewTitle"] + "</p>";
  if (typeof biGonah.crews[key]["crewName"] === "object") {
    for (var subkey in biGonah.crews[key]["crewName"]) {
      crewListItem.innerHTML +=
        "<p class='crew-name'>" +
        "<a href='#'>" +
        "<b>" +
        biGonah.crews[key]["crewName"][subkey] +
        "</b>" +
        "</a>" +
        "</p>";
    }
  } else {
    crewListItem.innerHTML +=
      "<p class='crew-name'>" +
      "<a href='#'>" +
      "<b>" +
      biGonah.crews[key]["crewName"] +
      "</b>" +
      "</a>" +
      "</p>";
  }
  crewList.appendChild(crewListItem);
}
castCrew.appendChild(castList);
castCrew.innerHTML += "<h5>" + "سایر عوامل سریال بی گناه" + "</h5>";
castCrew.appendChild(crewList);
containerElement.appendChild(castCrew);
