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



/*$("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });*/