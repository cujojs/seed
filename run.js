(function(curl) {

	var config = {
		// baseUrl: '',
		//paths: {
			// Configure paths here
		//},
		packages: [
			// Define application-level packages
			{
				name: 'welcome', location: 'app/welcome'
			},

			// Define a theme package, and configure it to always use the css module loader
			// No need to use AMD 'css!' plugin to load things in this package, it will happen
			// automatigally.
			// WARNING: The moduleLoader config syntax will be changing in an upcoming version
			// of curl.
			{ name: 'theme', location: 'theme', config: { moduleLoader: 'curl/plugin/css' } },

			// Add third-party packages here
			{ name: 'curl', location: 'lib/curl/src/curl' },
			{ name: 'wire', location: 'lib/wire', main: 'wire' },
			{ name: 'cola', location: 'lib/cola', main: 'cola' },
			{ name: 'rest', location: 'lib/rest', main: 'rest' },
			{ name: 'msgs', location: 'lib/msgs', main: 'msgs' },
			{ name: 'when', location: 'lib/when', main: 'when' },
			{ name: 'meld', location: 'lib/meld', main: 'meld' },
			{ name: 'poly', location: 'lib/poly' }
		],
		// Turn off i18n locale sniffing. Change or remove this line if you want
		// to test specific locales or try automatic locale-sniffing.
		locale: false,
		// Polyfill everything ES5-ish
		preloads: ['poly/all']
		// Or, select individual polyfills if you prefer
		//preloads: ['poly/array', 'poly/function', 'poly/json', 'poly/object', 'poly/string', 'poly/xhr']
	};

	curl(config, ['wire!app/main']).then(success, fail);

	// Success! curl.js indicates that your app loaded successfully!
	function success () {
		var msg;
		// When using wire, the success callback is typically not needed since
		// wire will compose and initialize the app from the main spec.
		// However, this callback can be useful for executing startup tasks
		// you don't want inside of a wire spec, such as this:
		msg = 'Looking good! '
			+ 'Did you get a 404 for bundle.js? '
			+ 'Check README.md to find out why!';
		console.log(msg);
	}

	// Oops. curl.js indicates that your app failed to load correctly.
	function fail (ex) {
		var el, msg;
		// There are many ways to handle errors. This is just a simple example.
		// Note: you cannot rely on any specific library or shim to be
		// loaded at this point.  Therefore, you must use standard DOM
		// manipulation and legacy IE equivalents.
		console.log('an error happened during loading :\'(');
		console.log(ex.message);
		if (ex.stack) console.log(ex.stack);
		el = document.getElementById('errout');
		msg = 'An error occurred while loading: '
			+ ex.message
			+ '. See the console for more information.';
		if (el) {
			// inject the error message
			if ('textContent' in el) el.textContent = msg;
			else el.innerText = msg;
			// clear styling that may be hiding the error message
			el.style.display = '';
			document.documentElement.className = '';
		}
		else {
			throw msg;
		}
	}

})(curl);
