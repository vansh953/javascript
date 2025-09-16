//string

const name="vansh"
const age = 18
//console.log('my name is ${name} and my age is ${age}');
console.log(name+" and "+age+" yoyo")
const gaMe = new String('vansh')
console.log(gaMe[0]);
console.log(gaMe.length);
console.log(gaMe.toUpperCase());
console.log(gaMe.charAt(2));
console.log(gaMe.indexOf('s'));
const newString = gaMe.substring(1,3);
console.log(newString)
const newString2 = gaMe.slice(-5,4);
console.log(newString2)
const newString3 = "   vansh   "
console.log(newString3.trim());
console.log(newString3.replace('v','4'));
console.log(newString3.split('a'));





