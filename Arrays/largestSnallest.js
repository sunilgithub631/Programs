const arr=[3,6,4,3,9,5,2]
let max=arr[0]
let min=arr[0]
arr.filter(i=>{
    if(i<min) {
        min=i
    }

})

arr.filter(i=>{
    if(i>max) max=i
})
console.log(min);
console.log(max);
var sunil="sunil"
let a=[...sunil]
console.log(a);