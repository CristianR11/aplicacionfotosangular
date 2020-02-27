const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const www = process.env.WWW || './';

app.use(express.static(__dirname + '/dist/angularp1'));

console.log(`serving ${www}`);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname));
});

const server = http.createServer(app);

server.listen(port, () => console.log(`listening on http://localhost:${port}`));
