import dummyData from '../utils/dummydata'
import Meals from '../models/meal.model';

const MealsService =  {
  fetchAllMeals() {
    
    const validmeal = dummyData.meals.map((meal)=> {
      const newmeal = new meal();
      newmeal.id = meal.id;
      newmeal.name = meal.name;
      newmeal.size = meal.size;
      newmeal.price = meal.price
    });
    
    return validmeal;
  },

  addmeal(meals){

    const mealLength = dummyData.meals.length;
    const lastID = dummyData.mealLength[mealLength-1].id;
    const newId = lastID + 1;
    meal.id = newId;
    const newmeal = new meal();
    dummyData.meals.push(meal);
    return meal;


  },

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals();
  },

  getMeal(id) {
    // -1 because we have our data in an array which starts at 0
    const meal = dummyData.meals.find(meal => meal.id = id);
    return meal || {};

    
  }
};

export default MealsService;