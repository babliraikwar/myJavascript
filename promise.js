//promise 1
const promiseOne= new Promise( function(resolve, reject){
  setTimeout(function(){
  console.log(" Async task compelete here")
 resolve()
  },2000)
})

promiseOne.then(function(){
  console.log("promise consume")
})

// promise 2
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("async task 2 ")
    resolve()
  }, 2000)
}).then( function(){
  console.log("async taask 2 resolved")
})

//promise 3

const promiseThree= new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({userName:"babli", email:"abc@gmail.com"})
  },2000)
})

promiseThree.then(function(user){
  console.log(user)
})

//promise 4
const promiseFour= new Promise(function(resolve, reject){
  setTimeout(function(){
    let error=false
    if (!error){
          resolve({userName:"miss babli", email:"abc@gmail.com"})
    }
    else{
      reject('ERROR: something went wrong')
    }
  },2000)
})

promiseFour
.then((user)=>{
  console.log(user)
})
.then((user)=>{
  console.log(user)
})
.catch((err)=>{
  console.log(err)
})
.finally(()=>{
  console.log("finally the promise is either resolved or rejected")
})

//promise 5
const promiseFive= new Promise(function(resolve, reject){
  setTimeout(function(){
    let err=true
    if(!err){
      resolve({courseName:"js", price:2999 })
    }else{
      reject('ERROR: something went wrong....')
    }
  }, 2000)
})

 async function promiseConsume(params) {
   try{
    const resolve= await promiseFive
   console.log(resolve)
  
   }catch(error){
    console.log(error)
   }
 }
 promiseConsume()


 const url='https://api.github.com/users'
 async function getAllUsers(params) {
  try{
     const response = await fetch(url)
    // console.log(response)
     const data= await response.json()
     console.log(data)
  }catch(err){
     console.log(err)
  }
  
 }
 //getAllUsers()

 fetch('https://api.github.com/users/babliraikwar').then((response)=>{
return response.json()
 }).then((response)=>{
  console.log(" followers: ",response.followers)
 })
 .catch((error)=>{
 console.log(error)
 })