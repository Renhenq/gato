const button = document.getElementById('new-cat')
const container = document.getElementById('cat-container')

let img_gif = 0
var apiUrl

async function newCat(){
    try{
        button.disable = true;

        if (img_gif){
            apiUrl = 'https://api.thecatapi.com/v1/images/search?mime_types=gif'
        } else {
            apiUrl = 'https://api.thecatapi.com/v1/images/search'
        }

        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("erro dentro")
        }

        const data = await response.json();
        const imageUrl = data[0].url;

        const img = document.createElement('img');
        img.src = imageUrl;

        container.appendChild(img)
        img.scrollIntoView({ behavior: 'smooth', block: 'end' });

        img_gif = 1 - img_gif
    } catch(Error){
        console.log("Erro")
    } finally{
        button.disable = false;
    }
}

button.addEventListener('click', newCat);
