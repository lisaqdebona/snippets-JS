getPage('./hb_secure.html','#login-security-info','#popup-content');
var popup = document.getElementById("popup");
var backdrop = document.getElementById("backdrop");
function getPage(url, from, to) {
  var cached=sessionStorage[url];
  if(!from){from="body";} // default to grabbing body tag
  if(to && to.split){to=document.querySelector(to);} // a string TO turns into an element
  if(!to){to=document.querySelector(from);} // default re-using the source elm as the target elm
  if(cached){return to.innerHTML=cached;} // cache responses for instant re-use re-use

  var XHRt = new XMLHttpRequest; // new ajax
  XHRt.responseType='document';  // ajax2 context and onload() event
  XHRt.onload= function() { sessionStorage[url]=to.innerHTML= XHRt.response.querySelector(from).innerHTML;};
  XHRt.open("GET", url, true);
  XHRt.send();
  return XHRt;
}
function showThirdParty() {
  popup.style.display = 'block';
  backdrop.style.display = 'block';
}
function closeThirdParty() {
  popup.style.display = 'none';
  backdrop.style.display = 'none';
}
var close_popup_ids = ['closePopup','backdrop'];

close_popup_ids.forEach(function (selectorID, k) {
  document.getElementById(selectorID).addEventListener('click', function (event) {
    event.preventDefault();
    closeThirdParty();
  }, false);
});