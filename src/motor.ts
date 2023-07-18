import {ObjetoPartida, partida} from "./modelo";

export const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

export const sumarPuntos = (points: number): number => partida.puntuacion + points;

export const dameValorCarta = (carta: number): number => carta > 7.5 ? 0.5 : carta;

export const obtenerEstadoPartida = (): ObjetoPartida => {
    if (partida.puntuacion < 7.5) {
        partida.estado = "MENOR_DE_SIETE_Y_MEDIO";
    }
    if (partida.puntuacion === 7.5) {
        partida.estado = "IGUAL_A_SIETE_Y_MEDIO";
    }
    if (partida.puntuacion > 7.5) {
        partida.estado = "MAYOR_DE_SIETE_Y_MEDIO";
    }
    return partida.estado;
  };