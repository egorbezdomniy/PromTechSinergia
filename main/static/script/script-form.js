document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden-form');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-form');
        } else {
          entry.target.classList.remove('show-form');
        }
      });
    });
  
    hiddenElements.forEach((el) => observer.observe(el));
  });