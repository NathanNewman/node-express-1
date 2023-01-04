const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  const request = req.body.developers;
  const results = await api(request);
  return res.json(results);
});

async function api(request) {
  const results = [];
  for (d of request) {
    try {
    const result = await axios.get(`https://api.github.com/users/${d}`);
    const user = { 'bio' : result.data.bio , 'name' : result.data.name }
    
    results.push(user);
    } catch (error) {
      console.error(error);
    }
  }
  return results;
}



app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
