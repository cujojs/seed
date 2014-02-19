define({

	// Load a basic theme. This is just a CSS file, and since a moduleLoader is
	// configured in run.js, curl knows to load this as CSS.
	theme: { module: 'theme/basic.css' },

	// Create a simple view by rendering html, replacing some i18n strings
	// and loading CSS.  Then, insert into the DOM
	message: {
		render: {
			template: { module: 'text!welcome/template.html' },
			replace: { module: 'i18n!welcome/strings' },
			css: { module: 'css!welcome/structure.css' }
		},
		insert: { at: 'dom.first!body' }
	},

	// Wire.js plugins
	$plugins: [
		{ module: 'wire/dom', classes: { init: 'loading' } },
		{ module: 'wire/dom/render' }
	]
});
