












module.exports = {
	props: ['items'],
	
	data: function() {
		return {
			
		}
	},

	created: function() {
		this.$emit('get_repos', this.items);
	}
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"repositories\">\n\t<h2>repositories:</h2>\n\t<div class=\"repos-list-container\">\n\t\t<h3>repos:</h3>\n\n\t\t<slot name=\"repos\"></slot>\n\t\n\t</div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3daf199c", module.exports)
  } else {
    hotAPI.update("_v-3daf199c", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}