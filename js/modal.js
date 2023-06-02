var modal = document.getElementById("submitModal");
var span = document.getElementsByClassName("close")[0];

// close the modal when the user clicks on <span> (x), 
span.onclick = function() {
  modal.style.display = "none";
}

// close when the user clicks outside of modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks the button, open the modal, return false to prevent site reload
$("form").on('submit', function(){
    $(modal).show();
    return false;
})