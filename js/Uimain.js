var openTab=function (tabId) {
	var tab = document.querySelectorAll(".content");
	for (var i = 0; i<= tab.length - 1; i++) {
		tab[i].style.display="none ";
	}
	document.getElementById(tabId).style.display = "block"
	
}
function showPop(){
    document.getElementById("show").style.visibility="visible";
    document.getElementById("showpop").style.visibility="visible";
}
function hidePop(){
    document.getElementById("show").style.visibility="hidden";
    document.getElementById("showpop").style.visibility="hidden";
}


var slideIndex = 1;
	showImg(slideIndex);
	
	function slideImages(number) {
	  showImg(slideIndex += number);
	}

	function showImg(number) {
	  var elements = document.getElementsByClassName("slides");
	  if (number > elements.length) {
	  	slideIndex = 1
	  }    
	  if (number < 1) {
	  		slideIndex = elements.length
	  	}
	  var x;
	  for (x = 0; x < elements.length; x++) {
	     elements[x].style.display = "none";  
	  }
	  elements[slideIndex-1].style.display = "block"  
}




