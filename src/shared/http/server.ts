import 'reflect-metadata'; 
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate'
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const PORT = 3333;
const app = express();
 
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
