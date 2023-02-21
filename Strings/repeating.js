const longestSubstring=function(str){
    let count=0
    let i=0
    let j=0
    let n=str.length
    let s=new Set()
    while(i<n && j<n){
        let char=str.charAt(j)
        if(!s.has(char)){
            j++
            s.add(char)
            count=Math.max(count,j-i)
        }
        else{
            s.delete(str.charAt(i))
            i++
        }
    }
    return count
}
let result=longestSubstring('ababcdabc')
console.log(result);