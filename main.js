const tempoObjetivo3 = new Date("2023-12-30T00:00:00");Add commentMore actions
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
@@ -34,25 +34,25 @@ function calculaTempo(tempoObjetivo) {
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0,0,0,0];
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];   
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
