define({

	message: {
		render: '<p>Welcome to cujo</p>',
		insert: { at: 'dom.first!body' }
	},

	plugins: [
		{ module: 'wire/debug' },
		{ module: 'wire/dom' },
		{ module: 'wire/dom/render' }
	]
});