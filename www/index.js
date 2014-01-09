app = {};
app.onSuccess = function(imageURI) {
	console.log("imageURI: " + imageURI);
    var image = document.getElementById('myImage');
    image.src = imageURI;
};

app.onFail = function(message) {
    alert('Failed because: ' + message);
};

app.scattaFoto = function (){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });
};

app.toBase64 = function(){
	console.log("ancora da implementare");
};

app.onDeviceReady = function (){
	console.log("API phonegap pronte");
};
app.start = function(){
	document.addEventListener('deviceready', app.onDeviceReady, false);
};
