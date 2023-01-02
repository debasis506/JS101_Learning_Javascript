// Print the average of even numbers from 1 to 100 (both included)
let a=1;
let b=0;
let count=0
while(a<=100){
  if (a%2==0){
    b+=a
    count+=1
  }
  a++;
  
}
console.log(b)
console.log(count)