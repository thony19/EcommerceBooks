const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74c1161c73mshf9a6264a3248025p11c2c6jsn74ce24a4277a',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};

fetch('https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));