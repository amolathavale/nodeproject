module.exports = {
    submit: (fn) => {
        setTimeout(fn, 1);
    },
    log: async (msg) => console.log(msg),
    event: class {
        constructor(a, b){
            console.log(`${a}, ${b}`)
        }
    }
}