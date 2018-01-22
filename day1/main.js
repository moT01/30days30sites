let navButtons = document.getElementById('nav-btn-wrap2');
let hamburgerButton = document.getElementById('hamburger');
let shown = false;

hamburgerButton.addEventListener('click', function() {
   if(shown) {
     navButtons.style.top = "0px";
     shown = false;   
   } else {
     navButtons.style.top = "50px";
     shown = true;
   }
});
