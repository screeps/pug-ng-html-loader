/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Williams Medina @willyelm
*/
'use strict'
const util = require('loader-utils')
const pug = require('pug')
const pug_plugin_ng = require('pug-plugin-ng');

module.exports = function (source) {
  this.cacheable && this.cacheable()
  let query = Object.assign(util.getLoaderConfig(this, 'pug-html'), { doctype: 'html', plugins: [] });
  query.plugins.push(pug_plugin_ng);
  query.plugins[0].lex.attrs
  let req = util.getRemainingRequest(this)
  let options = Object.assign({
    filename: this.resourcePath,
    doctype: query.doctype || 'js',
    compileDebug: this.debug || false
  }, query)
  let content = pug.compile(source, options)(query)
  // this.value = content // error: Can't add property value, object is not extensible
  return `module.exports = ${JSON.stringify(content)};`
}
