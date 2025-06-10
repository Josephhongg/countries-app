const apiUrl = "https://restcountries.com/v3.1/name/";
const searchBox = document.querySelector(".entry-area input");
const searchBtn = document.querySelector("button");
const information = document.querySelector(".information");

const getCountry = async (country) => {
	const response = await fetch(apiUrl + country);
	const data = await response.json();

	console.log(data);

	// if data returns 404 or "Not Found" show alert and reset searchBox. else, populate with country's data
	if (data.status == "404" || data.message == "Not Found") {
		alert("Please enter valid country");
		searchBox.value =  "";
	} else {
		document.querySelector(".information img").src = data[0].flags.png;
		document.querySelector(".information .name").innerHTML = data[0].name.common;
		document.querySelector(".information .capital").innerHTML = data[0].capital;
		document.querySelector(".information .population").innerHTML = "Population: " + data[0].population;

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
