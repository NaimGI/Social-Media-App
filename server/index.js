import express from "express";
import cors from "cors";
import mongoose  from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.js";
import userRouter from "./routes/user.js";
const app =express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://naim:234@cluster0.gecowfn.mongodb.net/Social?retryWrites=true&w=majority";
const PORT=process.env.PORT || 2000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use('/posts', postRoutes); 
app.use('/user', userRouter);  
mongoose.set('strictQuery', false);