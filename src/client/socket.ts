// src/socket.ts
import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_SERVER_DOMAIN;
export const socket = io(URL, {
  autoConnect: false, // importante: controlas la conexión manualmente
});

export type AppSocket = typeof socket;
