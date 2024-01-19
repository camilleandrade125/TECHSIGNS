import express, { request, response } from 'express';

const alltodos =[{nome:'Eduardo', status: false}]; // uma lista por enquanto, até colocar um banco
const todosRoutes = express.Router();


//C: create
todosRoutes.post("/todos",(request,response)=>{
   const {name} = request.body;
   alltodos.push({name, status:false});
   return response.status(201).json(alltodos); // o codigo 201 serve para indicar que foi um sucesso e criou um novo recurso
})

//R:read
todosRoutes.get("/todos", (request,response)=>{
   return response.status(200).json(alltodos); // o codigo 200 serve para indicar que foi um sucesso
})

//U:update

//D: delete

export default todosRoutes;
