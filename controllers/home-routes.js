const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/journal', (req, res) => {
  res.render('journal');
});

module.exports = router;