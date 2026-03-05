// nested  call back called call back hell

//nesting 
let age=18
if(age>=18){
  if(age>=60){
    console.log("senior")
  }
  else{
    console.log("junior")
  }
  
}
else{
    console.log("middle")
  }

// nested call back
function getData  (dataId, getNextdata) {
  setTimeout( function(){
    console.log(dataId)
    if(getNextdata){
    getNextdata();
    }
 },2000)
}
// call back hell 
getData(1, ()=>{
  getData(2, ()=>{
    getData(3, ()=>{
      getData(4)
    })
  });
});
