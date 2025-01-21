// JavaScript code for handling the comments section

// Select the form and the comments list
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Add an event listener to handle form submission
commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page
  
  // Get the user's name and comment
  const userName = document.getElementById('user-name').value.trim();
  const userComment = document.getElementById('user-comment').value.trim();
  
  if (userName && userComment) {
    // Create a new list item for the comment
    const newComment = document.createElement('li');
    
    // Create the HTML content for the comment
    newComment.innerHTML = `
      <p><strong>${userName}:</strong> ${userComment}</p>
      <span class="comment-timestamp">Submitted on ${new Date().toLocaleString()}</span>
    `;
    
    // Add the new comment to the comment list
    commentList.appendChild(newComment);
    
    // Display an alert message
    alert('Information saved');
    
    // Clear the form inputs
    commentForm.reset();
  } else {
    alert('Please fill in both fields before submitting your comment.');
  }
});
