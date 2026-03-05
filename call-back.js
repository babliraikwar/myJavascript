setTimeout(()=>{
 console.log("hello")
},2000)
 console.log("one")
 console.log("two")

 //one two hello


//call back

function sum(a,b ){
console.log (a+b)
}
function calculator(a,b){
  sum(a,b)
}
calculator(2,4, sum)


const hello= ()=>{
  console.log("hello")
}
setTimeout(hello, 3000)