document.addEventListener('DOMContentLoaded', function() {
    const notifBtn = document.getElementById('notif-btn');
    const notifPopup = document.getElementById('notif-popup');

    notifBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notifPopup.classList.toggle('show');
        notifBtn.classList.toggle('clicked');
    });

    document.addEventListener('click', function(e) {
        if (!notifPopup.contains(e.target) && !notifBtn.contains(e.target)) {
            notifPopup.classList.remove('show');
            notifBtn.classList.remove('clicked');
        }
    });

    notifPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Add search functionality
const searchInput = document.querySelector('.search-container input');
const cards = document.querySelectorAll('.card-container');

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();

        // Check if the search term matches either title or description
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    let hasResults = false;

    cards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no results message
    let noResultsMsg = document.querySelector('.no-results-message');
    if (!hasResults && searchTerm !== '') {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.style.textAlign = 'center';
            noResultsMsg.style.marginTop = '20px';
            noResultsMsg.style.color = '#666';
            document.querySelector('.flex-container').appendChild(noResultsMsg);
        }
        noResultsMsg.textContent = 'No organizations found matching your search.';
        noResultsMsg.style.display = 'block';
        noResultsMsg.style.color = '#000000';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
});

// Select modal and its elements
const restrictionModal = document.getElementById("restrictionModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Select all restricted sidebar links
const restrictedLinks = document.querySelectorAll(".newsfeed, .user-restricted, .follow-restricted, .notif-restricted")



// Initially ensure modal is hidden
restrictionModal.classList.remove("show");

// Add click event listener for each restricted link
restrictedLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent navigation to restricted page
    restrictionModal.classList.add("show"); // Show the modal
  });
});

// Close the modal when the close button is clicked
modalCloseBtn.addEventListener("click", () => {
  restrictionModal.classList.remove("show"); // Hide the modal
});

// Close the modal when clicking outside the modal content
restrictionModal.addEventListener("click", (event) => {
  if (event.target === restrictionModal) {
    restrictionModal.classList.remove("show"); // Hide the modal
  }
});

// dark mode
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkmode-toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const notifBtn = document.getElementById('notif-btn');
    const notifPopup = document.getElementById('notif-popup');

    notifBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notifPopup.classList.toggle('show');
        notifBtn.classList.toggle('clicked');
    });

    document.addEventListener('click', function(e) {
        if (!notifPopup.contains(e.target) && !notifBtn.contains(e.target)) {
            notifPopup.classList.remove('show');
            notifBtn.classList.remove('clicked');
        }
    });

    notifPopup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});