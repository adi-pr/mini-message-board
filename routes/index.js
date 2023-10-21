var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Ruben",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Cris",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Sign Up Form' })
})

router.post('/new', (req, res) => {
  const messageUser = req.body.messageUser
  const messageText = req.body.messageText

  messages.push({ text: messageText, user: messageUser, added: new Date() })

  res.redirect("/")
})

module.exports = router;
