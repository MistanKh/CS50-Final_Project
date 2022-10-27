fetch('https://api.ipify.org?format=json')
	.then(response => response.json())
	.then(ipData => {
		const iptext = ipData.ip;
		const ipaddress = document.getElementById('ipaddress');

		ipaddress.innerHTML = iptext;
	})
	.catch(err => console.error(err));