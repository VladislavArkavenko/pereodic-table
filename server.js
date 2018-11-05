let express = require('express');
let server = express();
let port = 3000 || 8080;

server.use(express.static(__dirname + '/public'));

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
