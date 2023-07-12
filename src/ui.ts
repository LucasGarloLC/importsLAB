import { partida } from "./modelo";
import { dameValorCarta, generarNumeroAleatorio, sumarPuntos} from "./motor";

const urlBase: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/"
const formatoArchivo: string = ".jpg";

export function funcionDameUnaCarta(): void {
    const cartaAleatoria: number = dameCarta();
    const valorCarta: number = dameValorCarta(cartaAleatoria);
    const urlCarta: string = obtenerUrlCarta(cartaAleatoria);
    pintarImagenCarta(urlCarta);
    const puntos = sumarPuntos(valorCarta);
    guardarPuntos(puntos);
    muestraPuntuacion(`${partida.puntuacion}`);
    mostrarUOcultarBotones("stand", false, true);
    finalDeLaMano();
};

export function funcionPlantarse(): void {
    const mensajePlantarse: string = mensajeMePlanto(partida.puntuacion);
    muestraPuntuacion(mensajePlantarse);
    deshabilitarBotonesPlantarse();
};

export function funcionQueHubieraPasado(): void {
    mostrarUOcultarBotones("queHubieraPasado", true, true);
    const cartaAleatoria: number = dameCarta();
    const valorCarta: number = dameValorCarta(cartaAleatoria);
    const urlCarta: string = obtenerUrlCarta(cartaAleatoria);
    const mensaje: string = mensajeQueHubieraPasado(partida.puntuacion)
    guardarPuntos(valorCarta);
    pintarImagenCarta(urlCarta)
    muestraPuntuacion(partida.puntuacion.toString());
    muestraPuntuacion(mensaje);
};

export function funcionNuevaPartida():void {
    partida.puntuacion = 0;
    muestraPuntuacion();
    deshabilitarBotonesNuevaPartida();
    mostrarImagenNuevaPartida();
};

function mostrarImagenNuevaPartida(): void {
    const img = document.getElementById("img1");
    if(img && img instanceof HTMLImageElement){
        img.src = `${urlBase}back${formatoArchivo}`
    } 
};

const guardarPuntos = (points: number): void => {
    partida.puntuacion = points;
};

const muestraPuntuacion = (mensaje: string = ""): void => {
    const puntuacion = document.getElementById('score');
    if(puntuacion && puntuacion instanceof HTMLElement){
        puntuacion.innerHTML = mensaje;
    }        
};

const dameCarta = (): number => {
    const numeroAleatorio = generarNumeroAleatorio();
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

const obtenerUrlCarta = (carta: number): string => {
    let urlImagen: string;
    switch (carta) {
        case 1 :
            urlImagen = `${urlBase}copas/1_as-copas${formatoArchivo}`
        break;
        case 2 :
            urlImagen = `${urlBase}copas/2_dos-copas${formatoArchivo}`
        break;
        case 3 :
            urlImagen = `${urlBase}copas/3_tres-copas${formatoArchivo}`
        break;
        case 4 :
            urlImagen = `${urlBase}copas/4_cuatro-copas${formatoArchivo}`
        break;
        case 5 :
            urlImagen = `${urlBase}copas/5_cinco-copas${formatoArchivo}`
        break;
        case 6 :
            urlImagen = `${urlBase}copas/6_seis-copas${formatoArchivo}`
        break;
        case 7 :
            urlImagen = `${urlBase}copas/7_siete-copas${formatoArchivo}`
        break;
        case 10 :
            urlImagen = `${urlBase}copas/10_sota-copas${formatoArchivo}`
        break;
        case 11 :
            urlImagen = `${urlBase}copas/11_caballo-copas${formatoArchivo}`
        break;
        case 12 :
            urlImagen = `${urlBase}copas/12_rey-copas${formatoArchivo}`
        break;
        default:
            urlImagen = `${urlBase}back${formatoArchivo}`
    }
    return urlImagen
};
                        
const pintarImagenCarta = (imagen: string): void => {
    const img = document.getElementById("img1")
    if(img && img instanceof HTMLImageElement){
        img.src = imagen
    }    
};

export const mostrarMensajePartida = (score: number): string => {
    return score > 7.5 ? `GAME OVER ⚰️`: score === 7.5 ? "Has ganado" : `${score}`;
};

const finalDeLaMano = (): void => {
    if (partida.estado === "IGUAL_A_SIETE_Y_MEDIO") {
        hemosGanadoPartida();
    }
    if(partida.estado === "MAYOR_DE_SIETE_Y_MEDIO") {
        hemosPerdidoPartida();
    }
};

const hemosGanadoPartida = () => {
    muestraPuntuacion(`Has ganado.`)
    deshabilitarBotonesPartidaGanada();
};

const hemosPerdidoPartida = () => {
    muestraPuntuacion(`GAME OVER ⚰️`)
    deshabilitarBotonesPartidaPerdida();
};

const mensajeMePlanto = (puntuacion: number): string => {
    let mensaje: string = "";
    if(puntuacion < 4) {
        mensaje = `Has sido muy conservador.`
    }
    if(puntuacion >= 4 && puntuacion <= 5.5) {
        mensaje = `Te ha entrado el canguelo, ¿eh?`
    }
    if (puntuacion >= 6 && puntuacion <= 7) {
        mensaje = `Casi casi.`
    }
    if (puntuacion === 7.5) {
        mensaje = `¡Lo has clavado! ¡Enhorabuena!`
    }
    return mensaje
};

const mensajeQueHubieraPasado = (puntuacion: number): string => {
    let mensaje: string = "";
    if(puntuacion === 7.5) {
        mensaje = `${puntuacion} Habrías ganado el juego.`
    }
    mensaje = puntuacion < 7.5 ? `No habrías ganado, <br> pero ¡te has quedado cerca!`: `Habrías perdido.` 
    return mensaje
};

const mostrarUOcultarBotones = (id: string, esDeshabilitado: boolean, esMostrado: boolean = true, mostrar: string = "block"): void => {
    const boton = document.getElementById(id)
    if(boton && boton instanceof HTMLButtonElement){
        boton.disabled = esDeshabilitado
        if(esMostrado) {
            boton.style.display = mostrar
        }  
    }
};

const deshabilitarBotonesPlantarse = () => {
    mostrarUOcultarBotones("new-game", false, true);
    mostrarUOcultarBotones("stand", true, true, "none");
    mostrarUOcultarBotones("drawcard", true, false);
    mostrarUOcultarBotones("queHubieraPasado", false, true, "block");
};

const deshabilitarBotonesPartidaGanada = () => {
    mostrarUOcultarBotones("new-game", false, true);
    mostrarUOcultarBotones("stand", true, true, "none");
    mostrarUOcultarBotones("drawcard", true, false);
    mostrarUOcultarBotones("queHubieraPasado", true, true, "none");
};

const deshabilitarBotonesPartidaPerdida = () => {
    mostrarUOcultarBotones("new-game", false, true);
    mostrarUOcultarBotones("stand", true, true, "none");
    mostrarUOcultarBotones("drawcard", true, false);
    mostrarUOcultarBotones("queHubieraPasado", true, true, "none");
};

const deshabilitarBotonesNuevaPartida = () => {
    mostrarUOcultarBotones("new-game", true, true, "none");
    mostrarUOcultarBotones("stand", true, true, "none");
    mostrarUOcultarBotones("drawcard", false, true);
    mostrarUOcultarBotones("queHubieraPasado", true, true, "none");
};