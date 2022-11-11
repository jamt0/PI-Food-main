const { Router} = require('express');
const authRouter = require('./auth.js');
const dietsRouter = require('./diets.js');
const recipesRouter = require('./recipes.js');

const router = Router();

router.use('/recipes', recipesRouter);
router.use('/diets', dietsRouter);
router.use('/auth', authRouter);

module.exports = router;