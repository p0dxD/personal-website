var menu = document.getElementById("cross-menu");
function toggleMenu(){
	console.log("got something");
	menu.classList.toggle("change");
}

menu.addEventListener("click", toggleMenu);
menu.addEventListener("click", openNav);

function openNav(){
	document.getElementById("sidenav").style.width = "250px";
	document.getElementById("cross-menu").style.marginRigth = "250px";

}