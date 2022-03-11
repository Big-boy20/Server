

function handleClick() {
    let lg = document.getElementById('login').value;
    let PS = document.getElementById('password').value;
    let json =  JSON.stringify({
        "username": lg,
        "password": PS
    })
    console.log(json)
   

    let xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:10000/user/login", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    

    xhr.send(json)
};


