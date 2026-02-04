// memory
/*2 type memory
stack -(primitive data me use)
heap - ( non- primitive data type me use)
*/

// stack
let myname="babliraikwar";
let yourname=myname;
yourname="abcd"
console.log(myname);
console.log(yourname);

//heap
let userOne={
  name:"babli",
  email:"abcd@gmail.com"

}
let userTwo=userOne;
userTwo.email="myemail@gmail.com";

console.log(userOne.email)
console.log(userTwo.email);
