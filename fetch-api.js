
fetch('https://api.github.com/users/babliraikwar').then((response)=>{
return response.json()
 }).then((response)=>{
  console.log(" followers: ",response.followers)
 })
 .catch((error)=>{
 console.log(error)
 })