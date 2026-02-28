const num=[1, 2, 3, 4, 5]

const val=num.filter((num)=>num>3)
// console.log(val)


const val1=num.filter((num)=>{
  if(num>3)
    //console.log(num*10)
  return num
})
//console.log(val1)


const books=[
  {
    'title':"book 1",
    'genre':"fiction",
    'publish': 1981,
    'eddition' : 2004
  },
  {
    'title':"book 2",
    'genre':"history",
    'publish': 1980,
    'eddition' : 2003
  },
  {
    'title':"book 3",
    'genre':"fiction",
    'publish': 2000,
    'eddition' : 2020
  },
  {
    'title':"book 4",
    'genre':"history",
    'publish': 1980,
    'eddition' : 2004
  }
]

const result =books.filter((bk)=>(bk.genre==="history"))
//console.log(result)

const result1 =books.filter((bk)=>{
  return(bk.genre==="history" && bk.eddition>=2003)}
   )
//console.log(result1)


//map in js
const mapval=num.map((num)=>num+10)
//console.log(mapval)

//chaninig

const newnum=num.map((num)=>num+1).map((num)=>num*10).filter((num)=>num>20)
//console.log(newnum)


//reduce in js
//accumulator, curret value or initial value
const myresult=num.reduce((acc,currval)=>acc+currval,0)
//console.log(myresult)


const myresult1=num.reduce((acc,currval)=>{
  return acc+currval
},0)
console.log(myresult1)


const shoppingCart=[
  {
    course:"js dev",
    price:1399
  },
  {
    course:"html",
    price:299
  },
  {
    course:"css",
    price:199
  }
]

const totalval= shoppingCart.reduce((acc, item)=>{
  return acc+item.price
},0)

console.log(totalval)