
document.getElementById('isButton').addEventListener('click', function() {
    window.location.href = ''; //inispirational stories.html
  });

  document.getElementById('ewButton').addEventListener('click', function() {
    window.location.href = ''; 
  });

  document.getElementById('ruButton').addEventListener('click', function() {
    window.location.href = ''; 
  });




// For Menu Toggle Bar //

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('bar').addEventListener('click', function() {
      var menu = document.querySelector('.menu-items');
      if (menu) {
          // Toggle between block and none
          menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
      }
  });
});


      // FOR ACTIVE NAV ITEM

document.addEventListener("DOMContentLoaded", function() {
  // Get the current page's filename (e.g., 'dashboard.html')
  const currentPage = window.location.dashboard.html.split("/").pop();

  // Select all navigation links
  const navLinks = document.querySelectorAll("nav .nav-bar a");

  // Loop through nav links and add 'active' class to the matching one
  navLinks.forEach(link => {
      // Get the href attribute of the link
      const linkHref = link.getAttribute("href");
      
      // Check if the href matches the current page
      if (linkHref === currentPage) {
          // Add 'active' class to the link
          link.classList.add("active");
      } else {
          // Remove 'active' class if it doesn't match
          link.classList.remove("active");
      }
  });
});




 // Function to load page content dynamically

function loadPage(page, cssFile) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.querySelector('.content').innerHTML = data;

      // Remove any previously loaded page-specific CSS files
      let existingLinks = document.querySelectorAll('link[data-page-css]');
      existingLinks.forEach(link => link.remove());

      // Dynamically load the CSS file for the new page
      if (cssFile) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssFile;
        link.setAttribute('data-page-css', 'true'); // Mark this CSS as page-specific
        document.head.appendChild(link);
      }
    })
    .catch(error => {
      console.error('Error loading page:', error);
      document.querySelector('.content').innerHTML = '<p>Error loading content. Please try again later.</p>';
    });
}
