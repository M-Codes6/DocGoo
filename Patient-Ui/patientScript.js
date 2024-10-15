
  document.getElementById('joinChallengeButton').addEventListener('click', function() {
    window.location.href = ''; //join-challenge.html
  });

  document.getElementById('exploreRecipeButton').addEventListener('click', function() {
    window.location.href = '';
  });

  document.getElementById('checkInButton').addEventListener('click', function() {
    window.location.href = '';
  });

  document.getElementById('symptomButton').addEventListener('click', function() {
    window.location.href = '';
  });

  document.getElementById('writingButton').addEventListener('click', function() {
    window.location.href = '';
  });

  document.getElementById('achievementsButton').addEventListener('click', function() {
    window.location.href = '';
  });



  // For Menu Toggle Bar //

  document.querySelector('.fa-bars').addEventListener('click', function() {
    var menu = document.querySelector('.menu-items');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
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
