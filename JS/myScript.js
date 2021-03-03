
//Mobile Menu Navigation
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("Mobilenav").classList.toggle("change");
	
}


//To Top function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var mybutton = document.getElementById("myTbtn");
	
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
    
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
}



// Illustration Gallery 
function myFunction(imgs) {

  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}





