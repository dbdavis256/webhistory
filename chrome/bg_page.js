// bg_page.js an extension service worker to call fetch, avoiding CORS issues
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  fetch('http://localhost:3000?u=' + message.currentUrl + '&t=' + message.currentTitle);
});
