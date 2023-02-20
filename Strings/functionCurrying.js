function x(a){
    return function y(b){
        return function z(c){
            return a*b*c
        }
    }
}
let value=x(2)(3)(4)
console.log(value);


function createBase(x){
    return function (n){
     console.log( x+n)
    }
}
let v=createBase(10)
v(10)