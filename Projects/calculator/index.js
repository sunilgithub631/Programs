(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelectorAll('.btn-clear');
    let equal=document.querySelectorAll('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value+=value;
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value === '') {screen.value='';}
        else {
            let ans=eval(screen.value);
            screen.value=ans;
        }
    })
    clear.addEventListener('click',function(e){
        screen.value="";
    })
})();