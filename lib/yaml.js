define(['js!./js-yaml!exports=jsyaml'], function(jsyaml) {

	return {
		load: function(id, require, done) {
			require(['text!' + id], function(text) {
				try {
					done(jsyaml.load(text));
				} catch(e) {
					done.error(e);
				}
			});
		}
	};

});