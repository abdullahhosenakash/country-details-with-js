const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        /* const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const h5 = document.createElement('h5');
        h5.innerText = country.capital;
        div.appendChild(h5);
        const h6 = document.createElement('h6');
        h6.innerText = country.population;
        div.appendChild(h6); */

        div.innerHTML = `
            <h2>${country.name}</h2>
            <h4>Capital: ${country.capital}</h4>
            <h5>Population: ${country.population}</h5>
            <img src="${country.flag}" class="country-flag">
        `;
        document.getElementById('countries').appendChild(div);
    })

}
loadCountries();
