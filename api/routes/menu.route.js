import { Router } from 'express';
import MenuController from '../controller/menu.controller';
const router = Router();
router.get('/', MenuController.fetchAllMenus);
router.post('/', MenuController.setupMenu);

module.exports = router ;
