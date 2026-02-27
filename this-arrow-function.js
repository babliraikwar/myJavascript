//this -->current content, keyword
//console.log(this)    {}

// this in obj
const user={
  userName:"babli",
  course:"js developer",
  welcomeMsg:function(){
    console.log(`${user.userName} , welcome our course`)
    // console.log(this)
  }
}
// console.log(user.welcomeMsg)
// console.log(user.welcomeMsg())



// this in function
function chai(){
let user="babli"
// console.log(this)
//console.log(this.user)  undefined

}
chai()

//this in arrow function
const thisinArrowFun=()=>{
  let user= "babli"
  // console.log(this)  //{}
  // console.log(this.user)  // undefind

}
thisinArrowFun()


//Arrow Function

 const arrowFun=()=>{
 // console.log("hello")
}
arrowFun()

const sum= (a,b)=>(a+b)
  console.log(sum(2,4))