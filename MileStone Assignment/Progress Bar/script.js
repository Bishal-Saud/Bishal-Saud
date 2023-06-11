window.addEventListener("scroll", function() {
    // Get the current scroll position
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
    // Get the total height of the page
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    // Calculate the scroll progress percentage
    const scrollProgress = (scrollTop / scrollHeight) * 100;
  
    // Update the width of the progress bar fill
    document.getElementById("progress-bar-fill").style.width = scrollProgress + "%";
  });
  