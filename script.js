const apiUrl = "https://restcountries.com/v3.1/name/";
const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");
const information = document.querySelector(".information");

const getCountry = async (country) => {
	const response = await fetch(apiUrl + country);
	const data = await response.json();

	console.log(data);

	// if data returns 404 or "Not Found" show alert and reset searchBox. else, populate with country's data
	if (data.status == "404" || data.message == "Not Found") {
		alert("Please enter valid country");
		searchBox.value = "";
	} else {
		const flag = document.createElement("img");
		flag.src = data[0].flags.png;
		information.appendChild(flag);

		const name = document.createElement("h2");
		name.classList.add("name")
		name.innerHTML = data[0].name.common;
		information.appendChild(name)

		const capital = document.createElement("div");
		capital.classList.add("capital");
		capital.innerHTML = data[0].capital;
		information.appendChild(capital)

		const population = document.createElement("div");
		population.classList.add("population");
		population.innerHTML = "Population: " + data[0].population;
		information.appendChild(population)

		// reset the search box
		searchBox.value = "";
		// change the display to block
		information.style.display = "block";
	}
};

// getCountry(country) function is called when searchBtn is clicked
searchBtn.addEventListener("click", () => {
	getCountry(searchBox.value);
});
