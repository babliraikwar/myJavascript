// for of loop 

const myarr=[1, 2, 3, 4, 5]
for(const val of myarr){
  //console.log(val)
}

//string
const greeting="hello js"
for(const greet of greeting){
 // console.log(greet)
}


//map
//const map =new map()
// map.set('IN',"india")
// map.set('USA',"united state of america")
// map.set('Fr',"france")
// map.set('IN',"india")

// for (conts [key, value] of map){
//   //console.log(`value of key: ${key} and value: ${value}`)
// }



// for in loop
const myObj={
  'course1':"js",
  'course2':"web developer",
  'course3':"java"
}
   //for (const [key,value] of myObj){
   // console.log(`value of key: ${key} and value: ${value}`) //not iterable}

   for (const key in myObj){
     // console.log(`value of key: ${key} `) 
      //console.log(`value of key: ${myObj[key]} `) 

   }

      for (const val in myarr){
       // console.log(val)
      }



//for Each in js

const coding=["js", "python", "java", "react"]
coding.forEach(function (val){
  //console.log(val)
})


// for Each in arrow function 
coding.forEach( (val)=>{
  //console.log(val)
})


coding.forEach( (val, index, arr)=>{
  //console.log(val, index, arr)
})

//for Each with object 
const mycoding=[
  {
    langName: "java Script",
    fileName:"js"

  },
  {
    langName: "c++",
    fileName:"cpp"

  },
  {
    langName: "python",
    fileName:"py"

  }
]

mycoding.forEach((item)=>{
  //console.log(`${item.langName}: ${item.fileName}`)
})

// we can ot store foreach in a variable
// const value=mycoding.forEach((item)=>{
//   return (`${item.langName}: ${item.fileName}`)
// })

// console.log(value)// undefind


