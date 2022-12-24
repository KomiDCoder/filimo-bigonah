var headerElement = document.createElement("div");
var rightNav = document.createElement("div");
var leftNav = document.createElement("div");
headerElement.setAttribute("id", "header");
rightNav.setAttribute("id", "right-nav");
leftNav.setAttribute("id", "left-nav");
var logoImg = document.createElement("img");
logoImg.setAttribute("src", biGonah.filimoLogo);
logoImg.setAttribute("class", "logo");
rightNav.appendChild(logoImg);
rightNav.innerHTML += "<p>" + "|" + "</p>";
rightNav.innerHTML +=
  "<a href='#' class='filimotour filimo-hover-button-animation'>" +
  "<img src='filimotour.svg'/>" +
  "فیلیموتور" +
  "</a>";

headerElement.appendChild(rightNav);
leftNav.innerHTML +=
  "<a href='#' class='subscription'>" + "خرید اشتراک فیلیمو" + "</a>";
leftNav.innerHTML += "<a href='#' class='enter-filimo'>" + "ورود" + "</a>";
headerElement.appendChild(leftNav);
document.body.appendChild(headerElement);
