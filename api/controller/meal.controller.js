import MealService from '../services/MealService';


const MealController = {

    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },


    addAMeal(req, res) {
        
       const newMeal = req.body;
       const createdMeal = MealService.addMeal(newMeal);
       return res.json({
            status: 'success',
            data: createdMeal
        }).status(201);
    },



    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal = MealService.getAMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal
        }).status(200);
    },

    updateMeal(req, res){
        const mealBody = req.body;
        const mealId = req.params.id;
        const editMeal = MealServices.updateMeal(mealBody, mealId);
        return res.json({
            status: 'Success',
            data: editMeal
        }).status(201);
    },

    
    deleteSingleMeal (req, res) {
        const id = req.params.id;
        const toDel = MealService.delAMeal(id);
        return res.json({
            status: 'success',
            data: toDel
        }).status(200);
    }
    
};

export default MealController