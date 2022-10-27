fetch('https://api.ipify.org?format=json')
	.then(response => response.json())
	.then(jokeData => {
		const jokeText = jokeData.ip;
		const ipaddress = document.getElementById('ipaddress');

		ipaddress.innerHTML = jokeText;
	})
	.catch(err => console.error(err));