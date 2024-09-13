
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

document.querySelector('.fa-bars').addEventListener('click', function() {
    var menu = document.querySelector('.menu-items');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});