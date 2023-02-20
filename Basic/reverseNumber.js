let num=123
let rev=0
while(num>0){
    let x=num%10
    rev=rev*10+x
    num=Math.floor(num/=10)
}
console.log(rev);