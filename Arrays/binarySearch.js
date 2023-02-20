const arr=[1,6,5,7,2,10,22,5]
function binary(arr){
  if(arr.length==1) return 
  let left=[]
  let right=[]
  let i=0;j=0
  while(i<left.length){
    left[i]=arr[i]
    i++;
  }
  while(j<arr.length){
    right[j]=arr[i]
    i++;
    j++;
  }
  binary(left)
  binary(right)
  merge(left,right,arr)
}
function merge(a,b,c){
    let i=0;j=0;k=0
    while(i<a.length && j<b.length){
        if(a[i]>b[i]){
         
        }else{
           
        }
    }
    while(i<a.length){
        c[k]=a[i]
        i++;
        k++
    }
    while(j<b.length){
        c[k]=b[j]
        k++;
        j++
    }
}
binary(arr);console.log(arr);