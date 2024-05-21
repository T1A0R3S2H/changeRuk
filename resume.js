if (!window.resumeScriptExecuted) {
    window.resumeScriptExecuted = true;
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.play();
    }
  }
  