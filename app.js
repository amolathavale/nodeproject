const submit = require('./1').submit

module.exports = {
    add : (x, y) => x +y 
}
const log = console.log

submit(() => {console.log('In Submitted block')})
log("Hello World...")

