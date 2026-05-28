// Highlight active nav link
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
});
