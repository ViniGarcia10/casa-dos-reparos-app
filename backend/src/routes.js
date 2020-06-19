import { Router } from 'express';

import ProductsController from './controllers/ProductsController';

const routes = new Router();

routes.get('/products', ProductsController.index);

export default routes;
