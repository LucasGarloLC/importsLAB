import { funcionDameUnaCarta, funcionNuevaPartida, funcionPlantarse, funcionQueHubieraPasado } from "./ui";

const dameUnaCarta = document.getElementById("drawcard");
const nuevaPartida = document.getElementById("new-game");
const plantarse = document.getElementById("stand");
const queHubieraPasadoButton = document.getElementById("queHubieraPasado");

if(dameUnaCarta && dameUnaCarta instanceof HTMLElement){
    dameUnaCarta.addEventListener("click", funcionDameUnaCarta)
};

if(plantarse && plantarse instanceof HTMLElement){
    plantarse.addEventListener ("click", funcionPlantarse);
};

if(nuevaPartida && nuevaPartida instanceof HTMLButtonElement){
nuevaPartida.addEventListener("click", funcionNuevaPartida)
};

if(queHubieraPasadoButton && queHubieraPasadoButton instanceof HTMLElement){
    queHubieraPasadoButton.addEventListener("click", funcionQueHubieraPasado)
};