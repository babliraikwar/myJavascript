function asyncFun1() {
  return new Promise( (resolve, reject)=>{
 setTimeout (()=>{
  console.log("some data")
  resolve("success")
 }, 4000)
  })
  
}
function asyncFun2() {
  return new Promise( (resolve, reject)=>{
 setTimeout (()=>{
  console.log("some data2")
  resolve("success2")
 }, 4000)
  })
  
}
 asyncFun1(()=>{
  console.log(resolve)
})
.then((res)=>{
  console.log(res)
  let promise= asyncFun2(()=>{
  console.log(resolve)
})
.then((res)=>{
console.log(res)

})
})

