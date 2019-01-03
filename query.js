window.onload = function() {
	document.getElementById("la").onclick = function() {
	document.querySelector(".slider-box").style.left = "-550px";
	}
}

window.onload = function() {
	document.getElementById("ra").onclick = function() {
	document.querySelector(".slider-box").style.left = "550px";
	}
}

/*var i = 0;
var images = [];
var time = 3000;

images[0] = "roasberg.jpg";
images[1] = "roasberg1.jpg";
images[2] = "roasberg2.jpg";
images[3] = "roasberg3.jpg";
images[4] = "roasberg4.jpg";

function changeImg(){
	document.slide.src = images[i];

	if(i <images.length - 1) {
		i++;
	} else {
		i=0;
	}

	setTimeout("changeImg()",time);
}

window.onload = changeImg;*/