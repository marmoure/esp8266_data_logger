const mqtt = require('mqtt');


let client_obj = {
		clientId: 'nodeServer',
		clean: true,
};

const client = mqtt.connect('mqtt://localhost:1883',client_obj);


client.on('connect',() => {
		client.subscribe('topic',(err) => {
				if(!err) {
						client.publish('topic','hello');
				}
		});
});
client.on('message', (topic,message) => {
		console.log(message.toString());
		client.end();
});
