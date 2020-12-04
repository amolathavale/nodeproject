const dns = require('dns')
const promisify = require('util').promisify

const lookup = promisify(dns.lookup)

dns.lookup("google.com", (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
})

lookup("google.com").then( obj => {
    console.log('address: %j family: IPv%s', obj.address, obj.family);
}).catch(err => console.log('Error occured ' + err))

