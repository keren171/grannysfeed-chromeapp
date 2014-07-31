var clientId = '696513917405-tatjerfs329qthdg79s2ngscikok4k63.apps.googleusercontent.com';
var apiKey = 'AIzaSyAE29U9mj4Wq_5iW3128Ig0irnqLdzcytE';
var scopes = 'https://www.googleapis.com/auth/drive.readonly';

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
	// var intro = document.getElementById("introSectionId");
	// // intro.style.background = 'url(../img/mich.jpg) no-repeat bottom center scroll';
	// var entry = document.createElement("div");
	// entry.innerText = "blabla";
	// // entry.innerText = galleryarray[0];
	// intro.insertBefore(entry, intro.firstChild)

	// var wholeScreen = document.getElementById("wholeScreenID");
	// wholeScreen.style.background = 'url(../img/mich.jpg) no-repeat bottom center scroll';
	pics = ["mich.jpg", "selfie.jpg", "dropbox.png"];
	setInterval(function() { tick(); }, 2000);

	return false;
}

document.onkeypress = MonitorKeyPress;

function handleClientLoad() {
	var x = document.getElementById("wholeScreenID");

	// gapi.client.setApiKey(apiKey);
	// window.setTimeout(checkAuth,1000);
}







