let navButtons = document.getElementById('nav-btn-wrap2');
let hamburgerButton = document.getElementById('hamburger');
let shown = false;

hamburgerButton.addEventListener('click', function() {
	console.log('click');
   if(shown) {
     console.log('s');
     navButtons.style.top = "0px";
     shown = false;   
   } else {
     console.log('us');
     navButtons.style.top = "50px";
     shown = true;
   }
});
