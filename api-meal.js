
document.getElementById('but-search').addEventListener('click', () =>{
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    inputField.value  = '';
    // console.log(url); 
    fetch(url).then(responce => responce.json()).then(data => showInCard(data.meals));
});

// display in bootstrap card 
const showInCard = foundItems =>{
    const cardContainer = document.getElementById('bootstrap-cards');
    cardContainer.textContent='';
    foundItems.forEach(item =>{
        console.log(item);
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        colDiv.innerHTML =`
            <div class="card">
                <img src="${item.strMealThumb}" height="250px" width="auto" class="card-img-top" alt="${item.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${item.strMeal}</h5>
                    <p class="card-text">${item.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(colDiv);
    });
}
