(function () {
	"use strict;"
	var KEY = 'hogehoge';
	window.addEventListener('DOMContentLoaded', function() {
		var elm = document.getElementById('origin');
		var txt = document.createTextNode(window.location.origin);
		elm.appendChild(txt);
		if (window.navigator.mozApps) {
			var install = document.getElementById('install');
			install.setAttribute('style', 'display:inline;');
			install.addEventListener('click', function(evt) {
				var manifest = window.location.origin + '/my-first-firefox-webapp/manifest.webapp';
				window.navigator.mozApps.install(manifest);
				return false;
			});
		}
		var input = document.getElementById('text-input');
		var value = window.localStorage.getItem(KEY);
		if (value !== null) {
			input.value = value;
		}
		var write = document.getElementById('write-text');
		write.addEventListener('click', function(evt) {
			value = input.value;
			window.localStorage.setItem(KEY, value);
		});
	});
}).call(this);
