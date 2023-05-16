function setCookie(cookieName, cookieValue, daysToExpire, path, domain) {
  // TODO
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  let expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue};${expires};`;
}

function getCookieValue(cookieName) {
  // TODO
  const cArray = document.cookie.split("; ");
  let result = null;
  cArray.forEach((ele) => {
    if (ele.indexOf(cookieName) === 0) {
      result = ele.substring(cookieName.length + 1);
    }
  });
  return result;
}

document.querySelector(".button").onclick = function () {
  console.log("getCookieValue: " + getCookieValue("Foo"));
  console.log("getCookieValue: " + getCookieValue("Goo"));
};

function deleteCookie() {
  // TODO
  document.cookie = "Goo=World; max-age=0;";
  document.cookie = "Foo=Hello; max-age=0;";
  console.log("Cookies deleted");
}
console.log(document.cookie);
