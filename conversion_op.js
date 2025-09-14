let score ="100abc"
console.log(typeof (score))
let value = Number(score)
console.log(typeof value)

console.log(value) // NaN

// undefined ____ undefined
// boolean true=1 false=0
/*
let login = 1
let booleanlogin = Boolean(login)
console.log(booleanlogin)
*/
// empty string = 0
//"vansh" not empty string = 1

let login = "vansh"
let booleanlogin = Boolean(login)
console.log(booleanlogin)

//operations
let val = 3
let neval  = -val
console.log(neval)

let str1 = "vansh"
let str2 = " ram"
let str3 = str1+str2
console.log(str3)
console.log(1+1+"2")
console.log("1"+1+2)

let count= 100;
count ++;
console.log(count)
// prefix ++i means already imcrement postfix i++ increment after


// condition 

/*
console.log(2>=1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)
console.log(2>1)
*/

// comapre only similar datatypes
console.log("2"==2)

//datatypes
/*1.) primitive 
null
undefined
Symbol
BigInt
Boolean
String
Number*/
/*
2.) non primitive (reference)
array 
object
function
*/
let id1 = Symbol('12')
let id2 = Symbol('12')
console.log(id1)
console.log(id2)
console.log(id1==id2)

//arrays
const heros = ["shiva","ram","krishna"];  
//object
let my = {
name:"vansh",
age: 18
}
//function
const func = function(){
    console.log("vansh")
}
console.log(heros)
console.log(my)
func();

// memory Stack(primitive) and Heap(non primitive)
// stack not change original value change the copy  (lifo)
// heap follow refernce and change the original value