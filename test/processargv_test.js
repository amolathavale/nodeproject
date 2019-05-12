const in1 = process.argv[0]
const in2 = process.argv[1]

describe('Input Arguments' , ()=> {
    it('input parameters being tested', ()=> {
        console.log(`param1: ${in1}, param2: ${in2}`)
    })
})