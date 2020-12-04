const { submit, event } = require('./1')

module.exports = {
    add : (x, y) => x +y 
}
const log = console.log

submit(() => {console.log('In Submitted block')})
log("Hello World...")
let e = new event(10, 12)

