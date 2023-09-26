chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;
    document.getElementById("current-url").textContent = currentUrl;
  });
  