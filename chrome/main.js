// send the url and title to bg_page.js on load and soft history updates
function logHistory() {
  chrome.runtime.sendMessage({ currentUrl: encodeURIComponent(window.location.href), currentTitle: encodeURIComponent(document.title) }, (response) => {
    console.log("Response from service worker:");
  });
}

let pageTitle = document.title;
let currentUrl = window.location.href;
logHistory();

const observer = new MutationObserver((mutations) => {
  if (document.title != pageTitle || window.location.href != currentUrl) {
    logHistory();
    pageTitle = document.title;
    currentUrl = window.location.href;
  }
});

// An SPA (Single Page Application) can update the address bar and render new content 
// without reloading. Our content script won't be reinjected when this happens, 
// so we need to watch for changes to the content.
var container = document.body;
var config = { attributes: true, childList: true, subtree: true, characterData: true };
observer.observe(container, config);
