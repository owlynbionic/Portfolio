"use strict";

(function() {
	// https://cors-anywhere.herokuapp.com/
	//"http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca"
	var url = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=Vancouver,ca";
	var apiKey = "1ae0956ac3df22d399ee5cacbd6dd6a2"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
	var httpRequest;
	makeRequest(); //2/2 final step, call makeRequest function, then fire up http server

	// create and send an XHR request
	function makeRequest() {
		//open method
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod; //1/2final step. set response method function as what should happen??
		//provide url to method
		httpRequest.open('GET', url + '&appid=' + apiKey);
		//sends url
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		//if readyState is 4, complete, then console log output (json).
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
			// console.log(httpRequest.responseText);
		}
		//handle XHR success
	function updateUISuccess(responseText){
		var response = JSON.parse(httpRequest.responseText);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		//floor() rounds a number downwards towards to nearest integer and returns result
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		// output data
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";

	}

		//handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		// if error, hides data.
		weatherBox.className = "hidden";
	}
	}
})();
