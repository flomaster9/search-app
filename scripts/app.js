var Vue = require('../node_modules/vue/dist/vue.min.js');
var search = require('./modules/search.js');
var searcherComponent = require('./components/searcher.js');
var repositories = require('./components/repositories.js');
var users = require('./components/users.js');
var repos = require('./components/repos.js');

var app = new Vue({
	el: '.app',

	components: {
		searcherComponent: searcherComponent,
		repositories: repositories,
		users: users,
		repos: repos,
	},

	data: {
		search_params: {},
		items: null,
		currentView: null,
		cur_repo: null,
		repos: null,
	},

	methods: {
		setSearchParams: function(param) {
			this.search_params = param; //value, input, language, fields, sorts
			search();
		},
		setRepos: function(repos) {
			this.repos = repos;	
		},
		removeRepos: function() {
			this.repos = null;
		}
	},
	created: function() {
		search = search(this);
	}
})
