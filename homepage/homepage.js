document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navmenu');
    const toggleButton = document.getElementById('toggleHeaderBtn');
  
    toggleButton.addEventListener('click', function() {
      if (header.style.display === 'none') {
        header.style.display = 'grid'; // Or 'flex' depending on your header's display
        toggleButton.textContent = 'Hide Header';
      } else {
        header.style.display = 'none';
        toggleButton.textContent = 'Show Header';
      }
    });
  });