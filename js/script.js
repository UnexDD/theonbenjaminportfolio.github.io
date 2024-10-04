// Optional JavaScript for smooth scroll effect
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      // Scroll to the target section
      targetElement.scrollIntoView({
        behavior: 'smooth' // Smooth scroll
      });
    });
  });

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    burger.classList.toggle('toggle');
  });
