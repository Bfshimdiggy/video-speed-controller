document.getElementById("apply").addEventListener("click", () => {
    const speed = parseFloat(document.getElementById("speed").value);
    if (isNaN(speed)) {
      alert("Please enter a valid number");
      return;
    }
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: setVideoSpeed,
        args: [speed]
      });
    });
  });
  
  function setVideoSpeed(speed) {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
      video.playbackRate = speed;
    });
  }
  