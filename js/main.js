

function handleClick() {
    let lg = document.getElementById('login').value;
    let Ps = document.getElementById('password').value;
    let json =  JSON.stringify({
        "username": lg,
        "password": Ps
    })
    console.log(json)
   

    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:10000/user/login/");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    

    xhr.send(json)
};


