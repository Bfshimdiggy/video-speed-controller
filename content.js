// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "setSpeed") {
      const videos = document.querySelectorAll("video");
      videos.forEach(video => {
        video.playbackRate = request.speed;
      });
      sendResponse({ status: "speed set", speed: request.speed });
    }
  });
  