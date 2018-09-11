//
//  js ===>  JavaScript(客户端) / node.js(服务端)
//
//
require('./components/todoList/todoList.js')

import {a,b,c} from'./utils/export.js'
console.log(a+b+c);
import obj from './utils/export_default.js'
console.log(obj)

let _exports = require('./utils/exports.js')
let module_exports = require('./utils/module.exports.js')
console.log(_exports);
console.log(module_exports);

let vm = new Vue({
    el:'#app'
})