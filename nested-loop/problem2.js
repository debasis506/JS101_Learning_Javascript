 // Print Prime Numbers from 1 to given limit
let n=13

for(let i=1;i<=n;i++){
  console.log(i)
  let number=i
  let count=0
  for(let j=1;j<=number;j++){
    if(number%j==0){
      count++
    }
  }
  if(count==2){
    console.log("prime number")
  }
  else{
    console.log("not a prime number")
  } 
  }
