document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');

  chrome.storage.sync.get(['enabled'], function(result) {
    toggleButton.checked = result.enabled || false;
  });

  toggleButton.addEventListener('change', function() {
    chrome.storage.sync.set({ enabled: toggleButton.checked }, function() {
      // You can add additional functionality here, if needed
    });
  });
});