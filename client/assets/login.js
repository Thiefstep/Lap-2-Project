document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const form = new FormData(e.target);
    
    const options = {
        method: "POST",
        headers: {
            'Accept': '',//put in application/json when done
            'Content-Type': '' //Put in application form when done
        },
        body: JSON.stringify({
            username: form.get('username'),
            password: form.get('password')
        })
    }
    
    const response = await fetch('http://localhost:3000/users/login', options);
    const data = await response.json()

    if(response.status == 200){
        localStorage.setItem('toke', data.token);
        window.location.assign('index.html');
    } else{
        alert(data.error)
    }
})
