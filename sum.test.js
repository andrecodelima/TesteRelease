const soma = require('./sum')
test('add 2 + 5 to equal 7', ()=>{
    const result = soma(2, 5)
    console.log('Result:' + result)
})