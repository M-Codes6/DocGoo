
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

