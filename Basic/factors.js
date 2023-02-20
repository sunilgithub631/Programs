let factors=[]
let num=10
for(let i=1;i<=num/2;i++){
    if(num%i==0){
        factors.push(i)
    }
}
console.log(factors);