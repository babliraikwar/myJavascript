// javascript execution useContext
// code-> global execution context

// 1. global execution context
// 2. memory / variable cation phase // collect variable as a undefined
// 3.  excutionn phase 

function one(){
  console.log("one function")
  function two(){
    console.log("two function")
  }
}
one()
two()