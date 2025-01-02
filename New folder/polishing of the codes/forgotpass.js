
document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const studentId = document.getElementById('student_id').value;
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    errorMessage.textContent = ''; // Clear any previous error message
    successMessage.textContent = ''; // Clear success message

    try {
        const response = await fetch('send_verification.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ student_id: studentId })
        });

        const result = await response.json();

        if (result.status === 'success') {
            successMessage.textContent = result.message;
        } else {
            errorMessage.textContent = result.message;
        }
    } catch (error) {
        errorMessage.textContent = 'An unexpected error occurred. Please try again.';
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