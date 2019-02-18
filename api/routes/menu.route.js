import { Router } from 'express';
import MenuController from '../controller/menu.controller';
const menusRouter = Router();
menusRouter.get('/', MenuController.fetchAllMenus);
menusRouter.post('/', MenuController.setupMenu);
