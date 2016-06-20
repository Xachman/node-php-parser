/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs = require('fs');
 
var contents = fs.readFileSync('test/class.php', 'utf8');
console.log(contents);

phpParser = new require('./src/PhpParser.js')(contents);
