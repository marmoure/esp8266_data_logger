# esp8266_data_logger
 a small app the recives mqtt messages as json format and store them in date stamped files
the files will be json documents

# Mqtt setup
Using mosquitto as local broker 

## Mosquitto on CentOs
install
```
sudo yum -y install mosquitto
```
the Mosquitoo package comes with default config
To Start and Enable using Systemd
```
sudo systemctl enable mosquitto && sudo systemctl start mosquitto
```

## NodeJs app
```
npm i mqtt
```

Connecting 
```javascript
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

```

# Storing data into files


