const calConstVel = document.getElementById('calConstVel');
const calInitialVel = document.getElementById('calInitialVel');
const calFinalVel = document.getElementById('calFinalVel');
const calAcel = document.getElementById('calAcel');
const calDist = document.getElementById('calDist');
let selection;

const onlyOneSelection = () => {
    if (calConstVel.checked) {
        calInitialVel.disabled = true;
        calFinalVel.disabled = true;
        calDist.disabled = true;
        calAcel.disabled = true;
        selection = 'constVel'
    } else if (calInitialVel.checked) {
        calConstVel.disabled = true;
        calFinalVel.disabled = true;
        calAcel.disabled = true;
        calDist.disabled = true;
        selection = 'initialVel'
    } else if (calFinalVel.checked) {
        calConstVel.disabled = true;
        calInitialVel.disabled = true;
        calAcel.disabled = true;
        calDist.disabled = true;
        selection = 'finalVel'
    } else if (calAcel.checked) {
        calConstVel.disabled = true;
        calInitialVel.disabled = true;
        calFinalVel.disabled = true;
        calDist.disabled = true;
        selection = 'constAcel'
    } else if (calDist.checked) {
        calConstVel.disabled = true;
        calInitialVel.disabled = true;
        calFinalVel.disabled = true;
        calAcel.disabled = true;
        velF.disabled = true;
        selection = 'dist'
    } else {
        calConstVel.disabled = false;
        calInitialVel.disabled = false;
        calFinalVel.disabled = false;
        calAcel.disabled = false;
        calDist.disabled = false;
        acel.disabled = false;
        velF.disabled = false;
        selection = 'nothing'
    }
}

const calSelection = async () => {
    if (calConstVel.checked) {
        console.log('Se activa cálculo de velocidad constante');
    } else if (calInitialVel.checked) {
        console.log('Se activa cálculo de velocidad inicial');
    } else if (calFinalVel.checked) {
        console.log('Se activa cálculo de velocidad final');
    } else if (calAcel.checked) {
        console.log('Se activa cálculo de aceleración constante');
    } else if (calDist.checked) {
        console.log('Se activa cálculo de Distancia recorrida');
    }
}

export { calSelection, onlyOneSelection, selection };