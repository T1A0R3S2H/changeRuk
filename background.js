chrome.tabs.onActivated.addListener(async function(activeInfo) {
    const tab = await chrome.tabs.get(activeInfo.tabId);
  
    chrome.storage.sync.get(['enabled'], function(result) {
      if (result.enabled && tab.url.includes('youtube.com/watch')) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {
            if (!window.resumeScriptExecuted) {
              window.resumeScriptExecuted = true;
              const videoElement = document.querySelector('video');
              if (videoElement) {
                videoElement.play();
              }
            }
          }
        });
      }
    });
  });
  
  chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
      chrome.storage.sync.get(['enabled'], function(result) {
        if (result.enabled) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
              if (!window.resumeScriptExecuted) {
                window.resumeScriptExecuted = true;
                const videoElement = document.querySelector('video');
                if (videoElement) {
                  videoElement.play();
                }
              }
            }
          });
        }
      });
    }
  });
  