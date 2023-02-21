const arr=[1,4,2,5,6]
let pair=10

let [a,b]=[]

for(let i=0;i<arr.length-1;i++){
   for(let j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j]==pair) [a,b]=[arr[i],arr[j]]
   }
}
console.log(a,b);