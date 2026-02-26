//singleone object (constructor)
// literal object

const  mySym= Symbol ("key1")

const myObj={
  name: "babli",
  "fullname" : "raikwar",
  mySym: "mykey123",
  age: 22,
  city: "ahmedabad",
  email: "babliraikwar.in@gmail.com",
  isLoggedIn : false,
  lastLoginDays : ["monday ", "friday"]
}

console.log (myObj.name)
console.log (myObj["fullname"])
console.log (myObj.mySym)
console.log (typeof(myObj.mySym)) // type string

console.log (myObj[mySym])
console.log (typeof(mySym)) // type symbol

Object.freeze(myObj)
myObj.email= "babliraikwar@gmail.com"
console.log (myObj.email) 