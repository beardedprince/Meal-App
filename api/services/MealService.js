import dummyData from '../utils/dummydata';
import Meal from '../models/meal.model';


const MealService = {

    fetchAllMeals() {
        const validMeals = dummyData.meals.map((meal) => {
            const newMeal = new Meal();
            newMeal.id = meal.id;
            newMeal.name = meal.name;
            newMeal.size = meal.size;
            newMeal.price = meal.price;
            return newMeal;
        });
        return validMeals;
    },

    addMeal(meal) {
        const mealLength = dummyData.meals.length;
        const lastId = dummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId;
        dummyData.meals.push(meal);
        return meal;
    },

    getAMeal(id) {
        const meal = dummyData.meals.find(meal => meal.id == id);
        return meal || {};
    },

    delAMeal(id){
      const meal = dummyData.meals.find(meal => meal.id == id);
      dummyData.meals.pop(meal);
      return meal;
    },

    updateMeal(meal, id){

        // get the meal id and index
        const mealId = dummyData.meals.find((Ameal) => Ameal.id == id);
        const getMealIndex = dummydata.meals.indexOf(mealId);

        const updateAMeal = new Meal();
        
        updateAMeal.id = id;
        updateAMeal.name = meal.name;
        updateAMeal.size = meal.size;
        updateAMeal.price = meal.price;

        dummyData.meals.splice(getMealIndex, 1, updateAMeal);

        return updateAMeal;
    }
};

export default MealService;