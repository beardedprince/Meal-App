import mealServices from '../services/MealService '
const mealController = {

    fetchAllMeals(res, req) {
        const allMeals = mealServices.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },

    addMeals(res,req){
       const newMeal = req.body;
       const createdMeal = mealServices.addMeals(newMeal);
       return res.json({
        status: 'success',
        data: addMeals
    }).status(201);
    },

    getSingleMeal(res,req){
        const singleMeal = req.params.id;
        const gottenMeal = mealServices.getSingleMeal(singleMeal);
        return res.json({
            status: 'success',
            data: getSingleMeal
        }).status(201);

    }

}

export default mealController;