const tabButtons = document.querySelectorAll('.tabs button');
const tabContent = document.querySelector('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const selectedTab = button.getAttribute('data-tab');
    tabContent.textContent = `Content for ${selectedTab}`; // Replace with actual content based on tab
  });
});

// Basic responsiveness using media queries (add more as needed)
const heroImage = document.querySelector('.hero-image img');

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    heroImage.style.display = 'none'; // Hide hero image on smaller screens
  } else {
    heroImage.style.display = 'block'; // Show hero image on larger screens
  }
});

// Initial check for page load
if (window.innerWidth < 768) {
  heroImage.style.display = 'none'; // Hide hero image on smaller screens
} else {
  heroImage.style.display = 'block'; // Show hero image on larger screens
}
