const navbar = document.getElementById("navbar");
const backgroundimage = document.getElementById("background-image");

var alias, portfolio, blog;

window.onload = () => {
	navbar.style.visibility = "hidden";
	alias = (backgroundimage.childNodes[1]);
	portfolio = (backgroundimage.childNodes[5]);
	blog = (backgroundimage.childNodes[7]);
}

window.onscroll = () => {
	var y = document.body.scrollTop;
	console.log(y);
	if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
		navbar.style.visibility = "visible";
		alias.style.visibility = "hidden";
		portfolio.style.visibility = "hidden";
		blog.style.visibility = "hidden";
	}else{
		navbar.style.visibility = "hidden";
		alias.style.visibility = "visible";
		portfolio.style.visibility = "visible";
		blog.style.visibility = "visible";

	}
}

const burgerAnimate = () => {
	const burger = document.querySelectorAll('.hamburger');

	burger.addEventListner('click', () =>{
		burger.classList.toggle('toggle');
	});
}

burgerAnimate();
