const button = document.getElementById('new-cat')
const container = document.getElementById('cat-container')

const apiUrl = 'https://api.thecatapi.com/v1/images/search'

async function newCat(){
    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("erro dentro")
        }

        const data = await response.json();
        const imageUrl = data[0].url;

        const img = document.createElement('img');
        img.src = imageUrl;

        container.appendChild(img)
    } catch(Error){
        console.log("Erro")
    }
}

button.addEventListener('click', newCat);
