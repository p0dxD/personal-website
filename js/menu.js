var menu = document.getElementById("cross-menu");
var about = document.getElementById("go-to-about");
function toggleMenu(){
	// console.log("got something");
	menu.classList.toggle("change");
	
	if( menu.classList.contains("change") ){
		// close the sidebar menu
		openNav();
	} else {
		// open the sidebar menu
		closeNav();
	}
}

menu.addEventListener("click", toggleMenu);
about.addEventListener("click", function(){scrollToTop(1000)});


function openNav(){
	document.getElementById("sidenav").style.width = "250px";
		document.getElementById("cross-menu").style.marginRight = "250px";
		// close();
}

function closeNav(){
	document.getElementById("sidenav").style.width = "0px";
	document.getElementById("cross-menu").style.marginRight = "0px";


}

// function goToAbout(){
// 	window.scrollTo(0,650);
// }


// window.onscroll = function (ev) {
// 	var docHeight = document.body.offsetHeight;

// 	var winheight = window.innerHeight;

// 	var scrollpoint = window.scrollY;

// 	if ((scrollpoint + winheight) >= docHeight) {
// 		console.log("you're at the bottom");
// 	}
// };

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}