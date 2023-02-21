let str="aabbbbbcc"
let m=new Map()
let c;
for(let i=0;i<str.length;i++){

     c=str.charAt(i)
    if(m.has(c)){
       m.set(c,m.get(c)+1)
    }
    else {
     m.set(c,1)
    }

}
console.log(m);