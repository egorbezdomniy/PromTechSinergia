document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden-about');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-about');
        } else {
          entry.target.classList.remove('show-about'); 
        }
      });
    });
  
    hiddenElements.forEach((el) => observer.observe(el));
  });