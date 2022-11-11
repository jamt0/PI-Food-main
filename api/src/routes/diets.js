const { Router} = require('express');
const { getDiets } = require('../controllers/diets.js');
const router = Router();


router.get('/', async (req, res) => {
    const response = await getDiets();
    try{
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
      
});


module.exports = router;
