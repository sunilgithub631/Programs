let str="Welcome to this Javascript"

let splitted=str.split(' ')
let final=""
console.log(splitted);
function reverse(data){

       for (let index =data.length-1;index>=0;index--) {
           final+=rev(data[index])
          // console.log(final);
           if(index>0) final+=" "
       }
    return final
}
function rev(data){
    let rv=""
    for (let index = data.length-1;index>=0; index--) {
        rv+=data.charAt(index)
    }
    return rv
}
console.log(reverse(splitted));