const express = require('express')
const app = express()

var heapdump = require('heapdump');
heapdump.writeSnapshot('/tmp/' + Date.now() + '.heapsnapshot');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Server ready'))
