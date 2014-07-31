

var pics = [];
var picIndex = 0;

function tick() {
	var wholeScreen = document.getElementById("wholeScreenID");
	var pic = pics[picIndex];
	wholeScreen.style.background = 'url(../img/' + pic +') no-repeat bottom center scroll';
	picIndex = (picIndex < pics.length - 1)? picIndex+1 : 0;
}

function MonitorKeyPress()
{
	pics = ["mich.jpg", "selfie.jpg", "dropbox.png"];
	setInterval(function() { tick(); }, 2000);

	return false;
}

document.onkeypress = MonitorKeyPress;

function handleClientLoad() {
	var x = document.getElementById("wholeScreenID");
}







