
function BackFunction() {
  document.getElementById("myBack");
  window.history.back();
}

function ForwardFunction() {
  document.getElementById("myFoward");
 window.history.forward();
}

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("Mobilenav").classList.toggle("change");
	
}

//Get the button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  var mybutton = document.getElementById("myTbtn");
	

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
    
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
}



//Gallery Tab
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}





