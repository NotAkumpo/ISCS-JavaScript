var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Event Handling Dictionary' });
});

router.get('/dictionary/:word', async (req, res) => {
  const { word } = req.params;

  try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      res.json(response.data);
  } catch (error) {
  }
});

module.exports = router;
