let str="a33b5c7";
let res="";
function che(array){

       let out=""
       let str=""
       let num=0;
       for(let i=array.length;i>=0;i--){
        let input=array.charAt(i);
        if(input>="0" && input<="9"){
            str=input+str;
            num=Number.parseInt(str);
        }else{
            for(let k=0;k<num;k++){
                out=input+out;
                str="";
            }
            
        }
    }
    return out
 }
console.log(che(str));
