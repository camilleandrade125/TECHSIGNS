import express from 'express';
import pg from 'pg';
import cors from 'cors';

const app = express();
const { Pool } = pg;

const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "db_techsigns"
});

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { nome_completo, email, cpf, genero, data_nascimento, senha, senha_confirm } = req.body;

  const sql = `INSERT INTO public.register_use(nome_completo, email, cpf, genero, data_nascimento, senha, senha_confirm) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  const values = [nome_completo, email, cpf, genero, data_nascimento, senha, senha_confirm];

  try {
    const result = await db.query(sql, values);
    console.log('Inserção realizada com sucesso:', result.rows);
    res.status(201).send('Dados inseridos com sucesso');
  } catch (error) {
    console.error('Erro ao executar consulta:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Consulta para verificar se o email e a senha correspondem a um usuário registrado
    const result = await db.query('SELECT * FROM register_use WHERE email = $1 AND senha = $2', [email, senha]);
    
    // Se encontrar um usuário com o email e a senha fornecidos
    if (result.rows.length > 0) {
      // Retorna os dados do usuário (opcional)
      const user = result.rows[0];
      res.status(201).json({ success: true, user });
    } else {
      // Se não encontrar um usuário correspondente
      res.status(401).json({ success: false, message: 'Email ou senha incorretos' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001 🔥✅;");
});
