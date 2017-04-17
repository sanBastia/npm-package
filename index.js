const san = require('san-money')

const dollar = "USD. "
const rupiah = "Rp. "
const singDollar = "SGD. "
const num = 100000
const str = "2000"



console.log("Number in U.S Dollar : ",san.money(num, dollar))
console.log("Number in Rupiah",san.money(num, rupiah))
console.log("Number in Singapore Dollar",san.money(num, singDollar))

console.log("String in U.S Dollar :",san.money(str, dollar))
console.log("String in U.S Dollar :",san.money(str, rupiah))
console.log("String in U.S Dollar :",san.money(str, singDollar))
