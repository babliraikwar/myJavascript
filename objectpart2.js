const myObj ={
  name: "babli",
  age:22,
  greeting : function (){
    console.log (`hello miss ${this.name} `)
  }
}

console.log(myObj.greeting())

//const tinderUser= {}
const tinderUser= new Object ();
 console.log (tinderUser) //{} 

 tinderUser.id="1221nm"
 tinderUser.name="babli"
 tinderUser.isloggedIn= false

 const regularUser= {
  email: "abc@gmail.com",
  fullName: {userfullName :{firstName: "daya", lastName:"raikwar"}}
 }
//console.log(regularUser.fullName)
console.log(regularUser.fullName.userfullName.firstName)

const obj={1:"a", 2:"b", 3:"c"}
const obj1={4:"e", 5: "d"}

const obj3= (obj, obj1)
console.log(obj3)

const obj4= Object.assign( {}, obj, obj1)
console.log(obj4)

const obj5 ={...obj, ...obj1}
console.log(obj5)

const newobj={
  user:[
    {
      id : 1,
      email:"babliraikwar@gmail.com"
    }
  ]
}

//console.log(newobj.user[1].email)
