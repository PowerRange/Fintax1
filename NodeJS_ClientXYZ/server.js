const express = require('express');
const app = new express();
var host = process.env.host || '0.0.0.0';
var port = process.env.port || 4235;

const { exec } = require ('child_process');

exec ('grep Succeeded /var/log/syslog | wc -l', (err, stdout, stderr)
{
	if(err) 
	{
		console.error(err)
	} else {
		
		console.log('stdout: ${stdout}');
		console.log('stderr: ${stderr}');
		
	}
	
});

//configure the request
var option = {
	url: grep Succeeded /var/log/syslog | wc -l,
	method : 'GET'
	
}

// Start the request
request(options, fuction (error, response, body) {
		if (!error && response.statusCode == 200){
			app.get ('/', (req, res) => {
				res.send('test' + body);
			});
		}
})
