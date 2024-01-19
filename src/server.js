import express from 'express';
import todosRoutes from './todos.routes.js';

const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/health",(req,res)=>{
 
  console.log('Recebeu a requisição')

});

app.post("/register",(req,res) => {

  const { email, password, username } = req.body;

  console.log(req.body);

  if( !email  ){

    return res.json({
      error:'Envie um email'
    }).statusCode(404)

  }

});

app.listen(3000,()=> console.log("server up in 3000"))
