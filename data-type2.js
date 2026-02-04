// data type 2
/*
primitive data type --call by value(copy)
String 
Number
Boolean
null
undefined
Symbol
BigInt


non- primitive data ( call by Reference)/ Reference type
Array
Object
function
*/

const score=100;
const scoreValue=100.545;
const isLoggedIn=false;
const outsideTem= null
let name;

const id=Symbol('42');
const anotherId = Symbol('42');

const Bignumber=435436546587676n

const heros =["shakiman", "naagraj", "doga"]; //array

let myobj={
  name:"babli",
  age : 22,
  city:"ahmedabad"
}// object


 const myfunction= function(){
  console.log("hello");
 }// function

 console.log(typeof name);
// null k datatype  objet hota hai
// function k function object
// symbol k symbol hota h