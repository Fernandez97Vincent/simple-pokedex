console.log('hi')

// input
const input = document.getElementById('search-input');
const submitBtn = document.getElementById('submit-btn');
const pokeName = document.getElementById('poke-name');
const pokeImg = document.querySelector('.poke-img');
const img = document.createElement('img');

// event listener
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;
    async function getUrl() {
        const response = await fetch(url);
        const data = await response.json();

        img.src = data.back_default;
        pokeImg.appendChild(img)
        console.log(data);

        pokeName.innerText = data.name;

    }
    getUrl();
})

