window.addEventListener('focus', function() {
    chrome.storage.sync.get(['enabled'], function(result) {
      if (result.enabled) {
        const videoElement = document.querySelector('video');
        if (videoElement) {
          videoElement.play();
        }
      }
    });
  });
  
  window.addEventListener('blur', function() {
    chrome.storage.sync.get(['enabled'], function(result) {
      if (result.enabled) {
        const videoElement = document.querySelector('video');
        if (videoElement) {
          videoElement.pause();
        }
      }
    });
  });
  