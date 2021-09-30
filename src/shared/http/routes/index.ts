import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';


const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

routes.get('/', (req, res) => {
    res.send("home page")
});

export default routes; 

