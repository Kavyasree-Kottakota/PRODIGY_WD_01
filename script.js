// script.js
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.background = 'linear-gradient(45deg, #0f2027, #2c5364)';
      navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.background = 'linear-gradient(45deg, #1f4037, #99f2c8)';
      navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    }
  
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('#navbar a');
    
    sections.forEach(section => {
      var top = window.scrollY;
      var offset = section.offsetTop - 150;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector('#navbar a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  });
  