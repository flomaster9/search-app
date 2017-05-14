var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")













































module.exports = {
	props: ['items'],
	data: function() {
		return {
			repos: [],
			commits: [],
			branches: [],
			cur_repo: null,
		}
	},
	methods: {
		findCurRepo: function(index) {
			this.cur_repo = this.repos[index];
			this.cur_repo.index = index; 
		},

		getRepoCommits: function(self) {
			$.ajax({
			  	url: self.cur_repo.commits_url	//удаляю {/sha}
					.substr(0, self.cur_repo.commits_url.length-6)
			})
		  	.done(function( msg ) {
		    	self.commits = msg;
			});
		},

		getRepoBranches: function(self) {
			$.ajax({
			  	url: self.cur_repo.branches_url	//удаляю {/branch}}
					.substr(0, self.cur_repo.branches_url.length-9)
			})
		  	.done(function( msg ) {
		    	self.branches = msg;
			});
		},

		findRepoItems: function(event, index) {
			this.branches = this.commits = null;
			this.findCurRepo(index);
			this.getRepoCommits(this);
			this.getRepoBranches(this);
		},
		sortCommitsByDate: function(event, reverse) {
			this.commits.sort((a, b) => {
				if (!!reverse)
					return a.commit.author.date < b.commit.author.date ? 1 : -1;
				else
					return a.commit.author.date > b.commit.author.date ? 1 : -1;
			})
		},
		sortCommitsByMsg: function(event, reverse) {
			if (!!reverse) 
				this.commits.sort((a, b) => {
					return a.commit.message.toLowerCase() > b.commit.message.toLowerCase() ? 1 : -1;
				})	
			else
				this.commits.sort((a, b) => {
					return a.commit.message.toLowerCase() < b.commit.message.toLowerCase() ? 1 : -1;
				})
		},
	},
	created: function() {
		this.repos = this.items;
	}
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"repositories\">\n\t<h2>repositories:</h2>\n\t<ul class=\"repos-list\">\n\t\t<h3>repos:</h3>\n\t\t<li class=\"repo-item\" v-for=\"(repo, repo_index) in repos\" @click.self=\"findRepoItems(event, repo_index)\">\n\t\t\t{{repo.name}}\n\t\t\t<div class=\"repo-items-container active\" v-if=\"cur_repo &amp;&amp; (cur_repo.index == repo_index)\">\n\t\t\t\t<div class=\"commits list-container\">\n\t\t\t\t\t<h3>commits:</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<span> Sort by date</span> \n\t\t\t\t\t\t<span class=\"up\" @click.self=\"sortCommitsByDate()\">UP</span> \n\t\t\t\t\t\t<span class=\"down\" @click.self=\"sortCommitsByDate(event, &quot;reverse&quot;)\">DOWN</span> \n\t\t\t\t\t\t<span> | Sort by msg:</span> \n\t\t\t\t\t\t<span class=\"up\" @click.self=\"sortCommitsByMsg()\">UP</span> \n\t\t\t\t\t\t<span class=\"down\" @click.self=\"sortCommitsByMsg(event, &quot;reverse&quot;)\">DOWN</span> \n\t\t\t\t\t</p>\n\t\t\t\t\t<ul class=\"commit-list\">\n\t\t\t\t\t\t<li class=\"commit-item\" v-for=\"item in commits\">\n\t\t\t\t\t\t\t{{item.author.login}} -- {{item.commit.message}} -- {{item.commit.author.date}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"branches list-container\">\n\t\t\t\t\t<h3>branches:</h3>\n\t\t\t\t\t<ul class=\"branches-list\">\n\t\t\t\t\t\t<li class=\"branch-item\" v-for=\"branch in branches\">\n\t\t\t\t\t\t\t{{branch.name}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3daf199c", module.exports)
  } else {
    hotAPI.update("_v-3daf199c", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}