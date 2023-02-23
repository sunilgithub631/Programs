var user;
var charanret = document.getElementsByClassName('return')[0].innerText
var varunret = document.getElementsByClassName('return')[2].innerText
var sunilret = document.getElementsByClassName('return')[4].innerText
console.log(sunilret);
function login() {
    user = document.getElementById('login').value;
    if (user.length > 1) {
        let body = document.getElementsByTagName('body')[0];
        let t = document.createElement('h3');
        body.append(t);
        t.innerText = 'loggin successfully';
        if (user == 'sunil') {
            document.getElementsByClassName('return')[0].innerText = "-"
            document.getElementsByClassName('return')[1].innerText = "-"
            document.getElementsByClassName('return')[2].innerText = "-"
            document.getElementsByClassName('return')[3].innerText = "-"
            document.getElementsByClassName('return')[4].innerText = sunilret
        } else if (user == 'charan') {
            document.getElementsByClassName('return')[0].innerText = charannet
            document.getElementsByClassName('return')[1].innerText = "-"
            document.getElementsByClassName('return')[2].innerText = "-"
            document.getElementsByClassName('return')[3].innerText = "-"
            document.getElementsByClassName('return')[4].innerText = "-"
        } else if (user == 'varun') {
            document.getElementsByClassName('return')[0].innerText == "-"
            document.getElementsByClassName('return')[1].innerText = "-"
            document.getElementsByClassName('return')[2].innerText = varunnet
            document.getElementsByClassName('return')[3].innerText = "-"
            document.getElementsByClassName('return')[4].innerText = "-"
        } else {
            document.getElementsByClassName('return')[0].innerText = "-"
            document.getElementsByClassName('return')[1].innerText = "-"
            document.getElementsByClassName('return')[2].innerText = "-"
            document.getElementsByClassName('return')[3].innerText = "-"
            document.getElementsByClassName('return')[4].innerText = "-"
        }

    } else {
        let body = document.getElementsByTagName('body')[0];
        let t = document.createElement('h3');
        body.append(t);
        t.innerText = 'Enter your name';
        setTimeout(() => { location.reload() }, 1000)
    }
}

function returnBorrow() {

    if (sunilret == 'return') {
        document.getElementsById('borrow')[4].innerText = " "
    } else if (varunret == 'return') {
        document.getElementsById('borrow')[2].innerText = " "
    }else  if (charanret == 'return') {
        document.getElementsById('borrow')[0].innerText = " "
    }
}