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
});