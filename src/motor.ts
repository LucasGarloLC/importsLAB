import {partida} from "./modelo";

export const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

export const sumarPuntos = (points: number): number => partida.puntuacion + points;

export const dameValorCarta = (carta: number): number => carta > 7.5 ? 0.5 : carta