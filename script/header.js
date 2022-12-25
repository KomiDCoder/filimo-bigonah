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
rightNav.innerHTML += "<p>" + "</p>";
rightNav.innerHTML +=
  "<a href='#' class='filimotour filimo-hover-button-animation'>" +
  "<img src='filimotour.svg'/>" +
  "فیلیموتور" +
  "</a>";
var filimoSchool = document.createElement("a");
var filimoLogo = document.createElement("img");
filimoLogo.setAttribute("src", "../icon--white.svg");
filimoSchool.setAttribute("href", "#");
filimoSchool.setAttribute(
  "class",
  "filimo-school filimo-hover-button-animation"
);
filimoSchool.appendChild(filimoLogo);
filimoSchool.innerHTML += "فیلیمومدرسه";
rightNav.appendChild(filimoSchool);
var searchBtn = document.createElement("a");
var searchLogo = document.createElement("img");
searchLogo.setAttribute("src", "../search-icon.svg");
searchBtn.setAttribute("href", "#");
searchBtn.setAttribute("class", "search-btn filimo-hover-button-animation");
searchBtn.appendChild(searchLogo);
searchBtn.innerHTML += "جستجو";
rightNav.appendChild(searchBtn);
headerElement.appendChild(rightNav);
var subscription = document.createElement("a");
subscription.setAttribute("href", "#");
subscription.setAttribute("class", "subscription");
var subscriptionImg = document.createElement("img");
subscriptionImg.setAttribute("src", "video-play.svg");
subscription.appendChild(subscriptionImg);
subscription.innerHTML += "خرید اشتراک فیلیمو";
leftNav.appendChild(subscription);
leftNav.innerHTML += "<a href='#' class='enter-filimo'>" + "ورود" + "</a>";
headerElement.appendChild(leftNav);
document.body.appendChild(headerElement);
