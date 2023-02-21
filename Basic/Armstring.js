let num=153

function arm(n){
    let temp=n;
    let c=0;
    console.log(temp);
    while(n>=1){

      let m = Math.floor(n/=10);
       console.log(m);
        c++
    }
    console.log(c);
    n=temp
    let sum=0
    while(n>0){
        let x=Math.floor(n%10)
        let fact=1
        for(let i=0;i<c;i++){
            fact*=x
        }
        sum+=fact
        n/=10
    }
    return sum
}
let res=arm(num)
if(res==num) console.log('ArmStrong Number');
else console.log('Not Armstrong number');