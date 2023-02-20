function check(i){


    let f=i%3==0,b=i%5==0
    console.log(f?(b?'fizzBuzz':'fizz'):b? 'buzz':i);

}
check(15)