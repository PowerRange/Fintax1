const express = require('express');
const app = new express();
var host = process.env.host || '0.0.0.0';
var port = process.env.port || 4234;

const { exec } = require ('child_process');

exec ('grep Succeeded /var/log/syslog | wc -l', (err, stdout, stderr)
{
	if(err) 
             //some err occurred
	{

		console.error(err)
	} else {
		//the stdout stderr (buffered)
		console.log('stdout: ${stdout}');
		console.log('stderr: ${stderr}');
		
	}
	
});

//configure the request
// var option = {
//	grep Succeeded /var/log/syslog | wc -l,
//	
//}

// Start the request
//request(options, fuction (error, response, body) {
//		if (!error && response.statusCode == 200){
//			app.get ('/', (req, res) => {
//				res.send('test' + body);
//			});
//		}
//})
