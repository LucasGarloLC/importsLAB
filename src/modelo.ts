interface Partida {
    puntuacion: number,
    hePerdido: boolean,
    estado: ObjetoPartida,
};

export const partida: Partida = {
    puntuacion: 0,
    hePerdido: false,
    estado: "MENOR_DE_SIETE_Y_MEDIO",
};

export type ObjetoPartida =
    "MENOR_DE_SIETE_Y_MEDIO"
    "IGUAL_A_SIETE_Y_MEDIO"
    "MAYOR_DE_SIETE_Y_MEDIO"
;