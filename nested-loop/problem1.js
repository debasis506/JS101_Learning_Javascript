 // Print the Calendar date in the below format
for(let m=1;m<=12;m++){
  let da=0
    console.log("month-",m)
    if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
      da+=31;
    }
    else if(m==2){
      da+=29
    }
    else{
      da+=30
    } 
  for(let d=1;d<=da;d++){
    console.log(d,m)
  }
}