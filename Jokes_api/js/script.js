let response = fetch("https://api.chucknorris.io/jokes/random")
response.then((responsePromise1)=>{
    return responsePromise1.json();
}).then((responsePromise2)=>{
    let joke = responsePromise2.value;
    console.log(joke)
    let jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = joke;
})


