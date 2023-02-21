let s="abcabalsdkfjhfnds"

let out=""
let  set=new Set()
let d=[]
for(let i=0;i<s.length;i++){
    if(!set.has(s[i])){
        set.add(s[i])

    }else{
       d.push(s[i])
    }
}
console.log(d);