const course=["js", "css", "html", "web Dev"]
const fruits=["banana", "papaya", "mango"]

//console.log(course, fruits)
const newarr= course.concat(fruits)
console.log(newarr)
//console.log(...course, ...fruits)

const nestedarr =[1,2,3 ,[5,6,7],8,[9,[10,11], 12], 13]
const allitem= nestedarr.flat(Infinity)
console.log(allitem)

//console.log(course.isArray("tailwind"))
//console.log(course.from("tailwind"))
//console.log(course.from({name: "tailwind"}))

let score1=100
let score2= 200
let score3=300

//console.log(fruits.of(score1, score2, score3))