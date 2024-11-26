import express from "express";
import cors from "cors";
import pool from "./db.js";
import karteRoutes from "./routes/karte.js";
import zutatenRoutes from "./routes/zutaten.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/karte", karteRoutes);
app.use("/api/zutaten", karteRoutes);

app.listen(PORT, () => {
    console.log("Server läuft auf http://localhost:${PORT}");
});