class  Rectangle{
    constructor(height,width){
        this.height=height
        this.width=width
    }
   
   get area(){
        return this.callArea();
    }
    callArea () {
        return this.height*this.width
    }
}
let r=new Rectangle(10,20)
console.log(r.area);
console.log(0.1 + 0.2 === 0.3);