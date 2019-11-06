import Proceso from "./proceso.js";
import Random from "./random.js";

class Fifo{
  constructor(){
      this._inicio;
      this._suma = [];
      this._contadorAtendidos = 0;
      this._ciclosVacios = 0;
      this.iniciarCiclos();
  }
  iniciarCiclos(){
    for(let i = 1; i <= 300; i++){
      if(this._inicio){
        this._inicio.ciclos--;
        if(this._inicio.ciclos == 0){
          let temp = this._inicio;
          this._inicio = temp.siguiente;
          this._contadorAtendidos++;
        }
      }else{
        this._ciclosVacios ++;
      }
      let prob = new Random();
      let r = prob.generarProbabilidad();
      if(r >= 0 && r <=39){
        
        let random = new Random();
        let newProceso = new Proceso(random.generarRandom());
        if(!this._inicio){
          this._inicio = newProceso;
        }else{
          let temp = this._inicio;
          while(temp.siguiente){
            temp = temp.siguiente;
          }
          temp.siguiente = newProceso;
        }
      }
      let temp = this._inicio;
      let j = 0;
      while(temp){
        this._suma[j] = parseInt(temp.ciclos);
        temp = temp.siguiente;
        j++;
      }
      console.log("Procesos activos en ciclo numero: " + i);
      console.log(this._suma)
    }
    console.log("Cantidad de procesos pendientes luego de 300 ciclos: " + this._suma.length);
    console.log("Cantidad de ciclos pendientes: " + this.sumarVec());
    console.log("Cantidad de procesos atendidos en su totalidad: " + this._contadorAtendidos);
    console.log("Ciclos sin procesos: " + (this._ciclosVacios - 1));
  }
  sumarVec(){
    let s = 0;
    for(let i = 0; i < this._suma.length;i++){
      s += this._suma[i];
    }
    return s;
  }
}
let f = new Fifo();