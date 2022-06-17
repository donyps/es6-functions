const express = require('express');
const fileSystemActions = require('./fileSystemActions');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('I am here in index');
});

router.get('/files', fileSystemActions);

module.exports = router;
