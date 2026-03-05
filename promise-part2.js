// promise -> object 
// state3 -> pending, fulfilled, rejected 
// handler 2 -> resolve, reject

let promise= new Promise(function(resolve, reject){
  setTimeout(function(){
  console.log("hey, babli")
  //resolve("success")
  //reject("some error")
  }, 2000)
})
new Promise(function(resolve, reject){
  
})

//promise 
function getData  (dataId, getNextdata) {
  return new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      console.log("i am a promise", dataId)
      //resolve("success")
      //reject("error")
      if(getNextdata){
        getNextdata()
      }
    }, 2000)
  })
}
getData(2)

const getPromise= ()=>{
return new Promise((resolve, reject)=>{
  console.log("i am a new promise")
//  resolve("succes")
  reject("error ")
})
}

let promise1= getPromise();
promise1.then((resolve)=>{
  console.log(resolve)
}).catch((err)=>{
  console.log(err)
})


//promise chain

getData(1).then((res)=>{
  return getData(2)
}).then((res)=>{
 console.log(res)
})