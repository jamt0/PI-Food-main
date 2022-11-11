const { Router} = require('express');
const router = Router();
const { } = require('../controllers/recipes.js');

router.get('/', async (req, res) => {
    const response = await getRecipes();
    try{
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
      
});

module.exports = router;