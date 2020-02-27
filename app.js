/*Mqtt part */
const mqtt = require('mqtt');
let client_obj = {
		clientId: 'nodeServer',
		clean: true,
};

const client = mqtt.connect('mqtt://10.42.0.1:1883',client_obj);

client.on('connect',() => {
		client.subscribe('topic',(err) => {
				if(!err) {
						client.publish('topic','hello');
				}
		});
		client.subscribe('outTopic',(err) => {
			if(!err) {
			}
	});
});
client.on('message', (topic,message) => {
	if(topic.toString() == "tempUpdate") {
		addTodata(message.toString());
	}
		
});

/* the temp data part*/
const date_obj = new Date();
let template = {
	temp:"",
	timeStamp:""
};

const currentData = [];
let index = 0;

let addTodata = (str) => {
	let obj = JSON.parse(str);

};




