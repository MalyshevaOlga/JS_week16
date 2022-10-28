const form = document.querySelector('.form');
const auction = document.querySelector('.auction');
const services = document.querySelectorAll('.inputServices');
const result = document.querySelector('.result');
const years = document.querySelectorAll('.inputYears');
const model = document.querySelector('.model');
const destination = document.querySelectorAll('.destination');

form.onsubmit = (evt) => {
	evt.preventDefault();
	let total;
	const status = auction.value;
    const models = model.value;
	total = +status;
    total = +models;
	console.log(total);

	for (let i = 0; i < services.length; i++) {
		if (services[i].checked) {
			total = total + Number(services[i].value);
		}
	}
    for (let i = 0; i < years.length; i++) {
		if (years[i].checked) {
			total = total + Number(years[i].value);
		}
	}
    for (let i = 0; i < destination.length; i++) {
		if (destination[i].checked) {
			total = total + Number(destination[i].value);
		}
	}
	result.innerHTML = `Стоимость автомобиля ${total}`;
};