var express = require('express');
var router = express.Router();
const UserController =  require('../controllers/UserController')
/* GET users listing. */
router.get('/', UserController.index);
router.get('/ver/:id', UserController.findById)
router.get('/search', UserController.search)

router.get('/cadastro', UserController.create)
router.post('/cadastro', UserController.store)

router.get('/criacao', UserController.bulkCreate)

router.get('/editar/:id', UserController.edit)
router.put('/editar/:id', UserController.update)

router.delete('/deletar/:id', UserController.destroy)






module.exports = router;
