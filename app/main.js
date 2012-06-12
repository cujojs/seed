define({

	theme: { module: 'css!theme.css' },

	message: {
		render: {
			template: { module: 'text!welcome/template.html' },
			replace: { module: 'i18n!welcome/strings' },
			css: { module: 'css!welcome/structure.css' }
		},
		insert: { at: 'dom.first!body' }
	},

	plugins: [
		{ module: 'wire/dom', classes: { init: 'loading' } },
		{ module: 'wire/dom/render' }
	]
});