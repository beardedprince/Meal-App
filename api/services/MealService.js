import dummyData from '../utils/dummydata'
import Meals from '../models/Meals';

const MealsService =  {
  fetchAllMeals() {
    
    const validmeal = dummyData.meals.map((meal)=> {
      const newmeal = new meal();
      newmeal.id = meal.id;
      newmeal.name = meal.name;
      newmeal.size = meal.size;
      newmeal.price = meal.price
    });
    
  },

  addmeal(meals){

  },

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals();
  },

  get(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1];
  }
}