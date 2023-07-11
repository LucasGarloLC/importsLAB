import {funcionDameUnaCarta, funcionPlantarse, funcionNuevaPartida, funcionQueHubieraPasado} from "./motor";
import {dameUnaCarta, nuevaPartida, plantarse, queHubieraPasadoButton} from "./ui";

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