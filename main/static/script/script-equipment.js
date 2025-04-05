document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden-equipment');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-equipment');
        } else {
          entry.target.classList.remove('show-equipment');
        }
      });
    });
  
    hiddenElements.forEach((el) => observer.observe(el));
  });