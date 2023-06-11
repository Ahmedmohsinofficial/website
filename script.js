// Get the necessary elements
const container = document.querySelector('.container');
const pages = document.querySelectorAll('.page');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
// Add more link elements as needed



// Set the initial page index
let currentPageIndex = 0;

// Function to update the active page
const updateActivePage = () => {
  pages.forEach((page, index) => {
    if (index === currentPageIndex) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
};



// Function to scroll to a specific page
const scrollToPage = (pageIndex) => {
  pages[pageIndex].scrollIntoView({ behavior: 'smooth', inline: 'start' });
};

// Event listeners for the links
homeLink.addEventListener('click', () => {
  goToPage(0); // Go to page 1
});

aboutLink.addEventListener('click', () => {
  goToPage(1); // Go to page 2
});

// Add more event listeners for other links as needed

// Function to navigate to a specific page
const goToPage = (pageIndex) => {
  currentPageIndex = pageIndex;
  updateActivePage();
  scrollToPage(pageIndex); // Scroll to the selected page
};

// Function to update the visibility of content based on the current page index
const updateContentVisibility = () => {
  pages.forEach((page, index) => {
    if (index === currentPageIndex) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
};
