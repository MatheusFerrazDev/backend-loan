import express from "express";
import userRoutes from "./userRoutes"; // Importando as rotas de usuários

const router = express.Router();

// Definição das rotas
router.use("/users", userRoutes);

export default router;
