const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./database/connection");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API HomeMed funcionando!");
});

const iniciarServidor = async () => {
    try {

        await pool.query("SELECT NOW()");

        console.log("✅ Banco conectado!");

        app.listen(process.env.PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
        });

    } catch (erro) {

        console.error("❌ Erro ao conectar no banco");

        console.error(erro);

    }
}

iniciarServidor();