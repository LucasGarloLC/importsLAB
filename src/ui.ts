export const urlBase: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/"
export const formatoArchivo: string = ".jpg";
export const dameUnaCarta = document.getElementById("drawcard");
export const nuevaPartida = document.getElementById("new-game");
export const plantarse = document.getElementById("stand");
export const queHubieraPasadoButton = document.getElementById("queHubieraPasado");

export const mostrarUOcultarBotones = (id: string, esDeshabilitado: boolean, esMostrado: boolean = true, mostrar: string = "block"): void => {
    const boton = document.getElementById(id)
    if(boton && boton instanceof HTMLButtonElement){
        boton.disabled = esDeshabilitado
        if(esMostrado) {
            boton.style.display = mostrar
        }  
    }
};

export function mostrarImagenNuevaPartida(): void {
    const img = document.getElementById("img1");
    if(img && img instanceof HTMLImageElement){
        img.src = `${urlBase}back${formatoArchivo}`
    } 
};

export const muestraPuntuacion = (mensaje: string = ""): void => {
    const puntuacion = document.getElementById('score');
    if(puntuacion && puntuacion instanceof HTMLElement){
        puntuacion.innerHTML = mensaje;
    }        
};

export const pintarImagenCarta = (imagen: string): void => {
    const img = document.getElementById("img1")
    if(img && img instanceof HTMLImageElement){
        img.src = imagen
    }    
};