// orm is the node Object Relational Mapping module
// simple tutorials at https://github.com/dresende/node-orm2
var orm = require('orm');

// postgresql not yet set up
orm.express("postgresql://username:password@host/database", {
    define: function (db, models, next) {
        models.ContentItem = db.define('ContentItem', {
		    title : { type: "text" },
		    simpleTitle : { type: "text" }
		}, {
		    methods : {
		        getSimpleTitle: function () {
		            // add logic to generate simpleTitle
		            return this.simpleTitle;
		        }
		    }
		});
        next();
    }
});
