const axios = require("axios");
 const { YOUR_API_KEY } = process.env;
const { Diet } = require('../db');


const getDiets = async function () {
    const dieta = await Diet.findAll()
    if(!dieta.length){
    const apiDiet = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
    console.log({apiDiet: apiDiet.data});
    const infoDiet = apiDiet.data
    const diets = infoDiet.results.map((d) => d.name)

    diets.map((diet) => {
        Diet.findOrCreate({
            where: {
                name: diet

            }
        })
    })
    const allDiets = await Diet.findAll();
    return allDiets
     };

    return {"succes": true}


}

module.exports = {
    getDiets,
}