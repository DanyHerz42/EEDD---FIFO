export default class Random{
  generarRandom(){
    return Math.trunc(Math.random() * 10 + 4);
  }
  generarProbabilidad(){
    return Math.trunc(Math.random() * 100);
  }
}