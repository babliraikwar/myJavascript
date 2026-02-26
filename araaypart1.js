const arr =[1, 2, 3, 4, 5];
// array is a object type , resizal, use diffirent data types 

console.log(arr)
console.log(arr[1])
//console.log(include(9))
//console.log(indexOf(6))

arr.push(10)
arr.pop(10)
arr.unshift(10)
arr.shift(10)
console.log(arr)

const arr1=arr.join
/*console.log(arr)
console.log(typeof(arr))  type string

slice not include laat element of range , and not modify in original array */
const newarr=[11, 22,33,44,55];
console.log(`slice array result range (1,3) : ${newarr.slice(1,3)}`)
console.log(`after slice method the result of original array : ${newarr}`)

//splice method include all given range and remove hat part from original array
console.log(`splice array result range (1,3) : ${newarr.splice(1,3)}`)
console.log(`after splice method the result of original array : ${newarr}`)


//nested array 
const nestedarr=[1, 2,3, ["a", "b,", "c"],5]
console.log(nestedarr)
console.log(nestedarr[3])
console.log(nestedarr[3][2])