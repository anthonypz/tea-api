const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const tea = {
  oolong: {
    type: 'black',
    origin: 'unknown',
    waterTemp: 100,
    steepTime: 180,
    caffeinated: true,
    flavor: 'earthy',
  },
  'green tea': {
    type: 'green',
    origin: 'China',
    waterTemp: 100,
    steepTime: 120,
    caffeinated: true,
    flavor: 'minty',
  },
  unknown: {
    type: 'unknown',
    origin: 'unknown',
    waterTemp: 'unknown',
    steepTime: 'unknown',
    caffeinated: 'unknown',
    flavor: 'unknown',
  },
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
  //what is params? what is name?
  const teaName = request.params.name.toLowerCase();
  if (tea[teaName]) {
    response.json(tea[teaName]);
  } else {
    response.json(tea['unknown']);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! Better go catch it!`);
});
