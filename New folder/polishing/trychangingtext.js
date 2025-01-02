document.getElementById('edit-button').addEventListener('click', function() {
    // Hide the paragraph and button, show the form
    document.getElementById('text-content').style.display = 'none';
    this.style.display = 'none';
    document.getElementById('edit-form').style.display = 'block';
});

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the input value
    const newText = document.getElementById('input-field').value;

    // Replace the paragraph content
    const paragraph = document.getElementById('text-content');
    paragraph.textContent = newText;

    // Show the paragraph and button, hide the form
    paragraph.style.display = 'block';
    document.getElementById('edit-button').style.display = 'inline-block';
    this.style.display = 'none';
});
