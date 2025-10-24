// src/services/eventos.ts
import api from "./api";

export const getNoticias = () => api.get("/noticias");
