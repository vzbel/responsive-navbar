const menuButton = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", ()=>{
	const display = primaryNavigation.style.display;
	if(display === "flex"){
		primaryNavigation.style.display = "none";
	}else{
		primaryNavigation.style.display = "flex";
	}
});
