// JavaScript to show match updates section when Matches link is clicked
document.getElementById('matches-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('match-updates').style.display = 'block';
  });
  
  // JavaScript to show shop advertisement when Shop link is clicked
  document.getElementById('shop-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('shop-advert').style.display = 'block';
  });
  
  // Welcoming notification functionality
  document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    const notification = document.getElementById('welcome-notification');
    notification.style.display = 'block';
    setTimeout(function() {
      notification.style.display = 'none';
    }, 5000); // Hide notification after 5 seconds
  });

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const comment = document.getElementById('user-comment').value;
    if (comment) {
        const commentList = document.getElementById('comment-list');
        const newComment = document.createElement('li');
        newComment.textContent = comment;
        commentList.appendChild(newComment);
        
        document.getElementById('user-comment').value = ''; // Clear the textarea
    }
});


  