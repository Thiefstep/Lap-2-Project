const btn = document.querySelector('btn'); 


document.getElementById("#showList").addEventListener("click", async(e) =>{
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: form.get("title"),
            content: form.get("content"),
            price: form.get("price")
        })
    }

    const result = await fetch("http://localhost:5000/item", options)

    if (result.status === 201){
        window.location.reload();
    }
})

