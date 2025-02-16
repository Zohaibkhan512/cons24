    /// Nav bar Toggle ///
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  if (searchInput.classList.contains('active')) {
    searchInput.focus();
  } else {
    searchInput.blur();
  }
});
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Show or hide the menu
  menuToggle.classList.toggle('cross'); // Change to cross icon
});  

   // image Gallery //
  // Select all image containers
const imageContainers = document.querySelectorAll('.image-container1');

// Add click event listeners to each image container
imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        // Toggle the "active" class on the clicked container
        container.classList.toggle('active');
    });
});