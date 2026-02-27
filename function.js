function printhello (){
  //console.log("hello, miss babli")
}
printhello()


// parameter function
function parameterfun (a,b){
  let sum =a+b
 // console.log(sum)
}
parameterfun(3,5)



// return function
function parameterfun1 (a,b){
  return a+b;
}
  const result= parameterfun1(3,5)
  //console.log(result)



  function loginUserMessage(userName){
    if(userName===undefined){
      return `please enter a username`
    }
    // if(!userName){
    //   console.log("please enter a user name")
    // }
    return `${userName} just logged in`
  }
 // console.log(loginUserMessage("babli"))


 function calculateCartPrice (...num){
  return num
 }
//console.log( calculateCartPrice(100, 200, 300, 4000))



//object with function
const myObj={
  userName:"babli",
  course:"js developer"
}
function handleobject(anyObject){
 // console.log(`username is  ${anyObject.userName} and course name is ${anyObject.course}`)
}
handleobject(myObj)
handleobject({
  userName:"maya",
  course:"js"
})


//array with Function
const myArr=[100, 200, 300, 400, 500]
function returnSecondValue (getArr){
  return getArr[1]
}
console.log(returnSecondValue(myArr))