var express = require('express');
var router = express.Router();
const model = require('../models/index');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'messages': 'Data kosong',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'messages': err.messages,
      'data': {}
    })
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    const users = await model.users.findAll({
      where: {
        id: req.params.id
      }
    });
    if (users.length !== 0) {
      res.json({
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'messages': 'Data user tidak ditemukan',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'messages': err.messages,
      'data': {}
    })
  }
});

router.post('/', async function(req, res, next) {
  try {
    const { name, email, password } = req.body;
    await model.users.create({ name, email, password }).then(user =>
      res.json({ user, msg: 'Akun berhasil dibuat' })
    );
  } catch (err) {
    res.json({
      'messages': err.messages,
      'data': {}
    })
  }
});

module.exports = router;
