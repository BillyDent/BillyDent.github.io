var content;
var contentContainer;
var modal = document.getElementById("projectsModal");
var closeSpans = document.getElementsByClassName("close");

function closeModal() {
  modal.style.display = "none";
  
  contentContainer.appendChild(content);
  contentContainer = null;
  content = null;
}

// Close the modal when the X button is clicked
for (var i = 0; i < closeSpans.length; i ++) {
  let span = closeSpans.item(i);
  span.onclick = function() {
    closeModal();
    console.log("click x");
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log("modal close");
  if (event.target == modal) {
    closeModal();
  }
} 

// Move project content to the modal window when clicked
function onThumbnailClick(target) {
  modal.style.display = "block";
  modal.scrollTop = 0;

  let contentId = target.getAttribute('contentId');
  content = document.getElementById(contentId);
  contentContainer = content.parentElement;

  modal.appendChild(content);
}