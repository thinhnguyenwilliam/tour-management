import express, { Application } from 'express';
import tourRoutes from './routes/tour.routes';

const app: Application = express();

//middleware
app.use(express.json());

// Routes
app.use('/api/tours', tourRoutes);



export default app;
