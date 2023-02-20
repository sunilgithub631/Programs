let num=4
let flag=true
if(num<1) console.log('Not Prime');
else{
      for(let i=2;i<=num/2;i++){
           if(num%i==0)
           flag=false
           break
        
      }
}
if(flag) console.log('Prime Number');
else console.log('Not Prime Number');