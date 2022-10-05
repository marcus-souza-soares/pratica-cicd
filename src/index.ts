import express, { json, Request, Response } from "express";
import prisma from "./database.js";

const app = express();
app.use(json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Funfou");
});

export default app;
