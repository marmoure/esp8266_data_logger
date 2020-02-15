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
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
```
