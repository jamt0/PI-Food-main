const { Router} = require('express');
const router = Router();
const { login, register } = require('../controllers/auth.js');

router.get('/login', async (req, res) => {
    const response = await login();
    try{
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
      
});

router.get('/register', async (req, res) => {
    const response = await register();
    try{
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
      
});


module.exports = router;