chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  fetch('http://localhost:3000?u=' + message.currentUrl);
});
