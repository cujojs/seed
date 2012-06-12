(function(curl) {

	var config = {
		baseUrl: 'app',
		pluginPath: 'curl/plugin',
		//paths: {
			// Configure paths here
		//},
		packages: [
			// Add your packages here
			{ name: 'curl', location: '../lib/curl/src/curl' },
			{ name: 'wire', location: '../lib/wire', main: 'wire' },
			{ name: 'cola', location: '../lib/cola', main: 'cola' },
			{ name: 'when', location: '../lib/when', main: 'when' },
			{ name: 'aop',  location: '../lib/aop',  main: 'aop' },
			{ name: 'poly', location: '../lib/poly' }
		]//,
		// TODO: Add polyfills
		// Polyfill everything ES5-ish
//		preloads: ['poly/all']
		// Or, select individual polyfills if you prefer
		//preloads: ['poly/array', 'poly/function', 'poly/json', 'poly/object', 'poly/string', 'poly/xhr']
	};

	curl(config, ['wire!main']);

})(curl);