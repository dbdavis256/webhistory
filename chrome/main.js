function logHistory() {
  chrome.runtime.sendMessage({ currentUrl: encodeURIComponent(window.location.href) }, (response) => {
    console.log("Response from service worker:");
  });
}

let pageTitle = document.title;
logHistory();

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node instanceof Element && document.title != pageTitle) {
        logHistory();
        pageTitle = document.title;
      }
    }
  }
});

// A SPA (Single Page Application) can
// update the address bar and render new content without reloading. Our content
// script won't be reinjected when this happens, so we need to watch for
// changes to the content.
var container = document.body;
var config = { attributes: true, childList: true, characterData: true };
observer.observe(container, config);
