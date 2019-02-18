import { Router } from 'express';
import MealController from '../controller/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteSingleMeal);
router.put('/:id', MealsController.updateMeal);

// other routes to be added


export default router;
