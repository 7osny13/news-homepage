 // Get DOM elements
 const navToggle = document.querySelector('.nav-toggle');
 const navLinks = document.querySelector('.nav-links');
 const overlay = document.querySelector('.overlay');
 const closeNav = document.querySelector('.close-nav');

 // Function to open navigation
 function openNav() {
   navLinks.classList.add('active');
   overlay.classList.add('active');
   navToggle.setAttribute('aria-expanded', 'true');
   navToggle.style.display = 'none';
   document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
 }

 // Function to close navigation
 function closeNavMenu() {
   navLinks.classList.remove('active');
   overlay.classList.remove('active');
   navToggle.setAttribute('aria-expanded', 'false');
   navToggle.style.display = 'block';
   document.body.style.overflow = ''; // Restore scrolling
 }

 // Event listeners
 navToggle.addEventListener('click', openNav);
 closeNav.addEventListener('click', closeNavMenu);
 overlay.addEventListener('click', closeNavMenu);

 // Close menu when pressing Escape key
 document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
     closeNavMenu();
   }
 });