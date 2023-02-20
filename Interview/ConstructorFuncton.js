function User(name,age){
    this.name=name
    this.age=age
    this.getProfile=function(){
        return ()=>{
            console.log('I-m '+this.name+" "+this.age+" old")
        }
    }
}
let s=new User('sunil',22)
s.getProfile()()