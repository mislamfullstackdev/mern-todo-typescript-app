import express, {Application} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import todoRoutes from './routes/todoRoutes';
import dotenv from 'dotenv';


dotenv.config();  // Load environment variables

const app: Application = express();
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// MongoDB Connection using .env
mongoose.
connect(process.env.MONGODB!)
  .then(()=>{
    console.log("mongoose is connected");
    app.listen(port, ()=>{
        console.log("Server running on port: " + port);
    })
})
.catch(console.error);