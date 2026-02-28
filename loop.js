// for while do-while loop in js

const myarr=[1, 2, 3, 4,5]

for(let i=0; i<myarr.length; i++){
 // console.log(i)
}

for(let i=0; i<myarr.length; i++){
  //console.log("table of 2:" ,i*2)
}


for(let i=0; i<myarr.length; i++){ 
  for(let j=0; j<myarr.length; j++){
     // console.log("ineer lop" ,myarr[j])

  }
        //console.log("outer loop" ,myarr[i])

}


//while loop

let i=0
while(i<myarr.length){
 // console.log("value of i :", i)
  i++
}



//do while loop

let j=0
do{
  console.log("value of i :", j)
  j++
}while(j<myarr.length)

