const { Router} = require('express');
const DietRouter = Router();
const { getDiets } = require('../controllers/getDiet');


DietRouter.get('/', async (req, res) => {
    const diets = await getDiets();
    try{
        res.status(200).send(diets);
    } catch (error) {
        res.status(400).send(error.message);
    }
      
});






module.exports = DietRouter;
