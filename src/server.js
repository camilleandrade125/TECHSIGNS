import express from 'express';
import todosRoutes from './todos.routes.js';

const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/health",(req,res)=>{
  return res.json(up);
});

app.listen(3000,()=> console.log("server up in 3000"))
