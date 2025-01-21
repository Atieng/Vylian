 // Comment form submission handler
 const commentForm = document.getElementById('comment-form');
 const commentList = document.getElementById('comment-list');
 
 // Load comments from localStorage if they exist
 window.onload = function() {
   const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
   savedComments.forEach(comment => {
     addCommentToDOM(comment);
   });
 };

 // Add comment to DOM
 function addCommentToDOM(comment) {
   const li = document.createElement('li');
   li.innerHTML = `
     <p><strong>${comment.name}:</strong> ${comment.text}</p>
     <span class="comment-timestamp">Submitted on ${comment.timestamp}</span>
   `;
   commentList.appendChild(li);
 }

 // Handle form submission
 commentForm.addEventListener('submit', function(event) {
   event.preventDefault();

   const userName = document.getElementById('user-name').value;
   const userComment = document.getElementById('user-comment').value;
   
   // Get current date and time
   const timestamp = new Date().toLocaleString();

   // Create a comment object
   const newComment = {
     name: userName,
     text: userComment,
     timestamp: timestamp
   };

   // Add comment to localStorage
   const comments = JSON.parse(localStorage.getItem('comments')) || [];
   comments.push(newComment);
   localStorage.setItem('comments', JSON.stringify(comments));

   // Add the new comment to the DOM
   addCommentToDOM(newComment);

   // Clear the form inputs
   commentForm.reset();
 });