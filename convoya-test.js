// JavaScript to hide the loader after the website content has fully loaded
window.addEventListener("load", function () {
    const loader = document.querySelector(".loading-ring");
    loader.style.display = "none"; // Hide loader once the page is fully loaded
});




// progress bar
// JavaScript to track page load progress and update the width of the progress bar accordingly
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector(".progress-bar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    window.addEventListener("scroll", function () {
        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = progressHeight + "%";
    });

    window.addEventListener("load", function () {
        progressBar.style.width = "100%"; // Set width to 100% when page is fully loaded
        setTimeout(function () {
            document.querySelector(".loading-progress").style.display = "none"; // Hide the progress bar container after a short delay
        }, 200);
    });
});



// dropdown menu

document.addEventListener('DOMContentLoaded', function() {
    // Toggle dropdown menu
    document.querySelector('.dropdown-toggle').addEventListener('click', function() {
      document.querySelector('.dropdown').classList.toggle('show-dropdown');
    });
  
    // Close dropdown menu when clicking outside
    document.addEventListener('click', function(event) {
      const dropdownMenu = document.querySelector('.dropdown-menu');
      const dropdownToggle = document.querySelector('.dropdown-toggle');
      const isClickInsideMenu = dropdownMenu.contains(event.target);
      const isClickInsideToggle = dropdownToggle.contains(event.target);
  
      if (!isClickInsideMenu && !isClickInsideToggle) {
        document.querySelector('.dropdown').classList.remove('show-dropdown');
      }
    });
  });
  
  