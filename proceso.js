export default class Proceso {
  constructor(ciclos) {
    this._ciclos = ciclos;
    this.siguiente = null;
  }
  get ciclos() {
    return this._ciclos;
  }
  get siguiente() {
    return this._siguiente;
  }
  set ciclos(newCiclos) {
    this._ciclos = newCiclos;
  }
  set siguiente(newSig) {
    this._siguiente = newSig;
  }
}