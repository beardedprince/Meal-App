import { Router } from 'express';

import OrderController from '../controller/order.controller';

const OrderRouter = Router();

OrderRouter.post('/', OrderController.postOrder);
OrderRouter.put('/:id', OrderController.modifyOrders);
OrderRouter.get('/', OrderController.fetchAllOrders);

export default OrderRouter;