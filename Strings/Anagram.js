function anagram(value1,value2){

    while(true){
        if(value1.length!=value2.length) return false
        let ch=value1.charAt(0)
        value1=value1.replace(ch,"")
        value2=value2.replace(ch,"")
        if(value1.length==0 && value2.length==0) return true
    }
  
}

console.log(anagram("listen","silent"));