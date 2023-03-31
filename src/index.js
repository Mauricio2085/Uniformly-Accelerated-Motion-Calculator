import {graph} from './acquisitions';
import { calSelection, onlyOneSelection, selection } from './calSelection';

const velO = document.getElementById('velO');
const velF = document.getElementById('velF');
const acel = document.getElementById('acel');
const time = document.getElementById('time');
const respuesta = document.getElementById('solution');
const button = document.getElementById('cal')
let distancia = [];
const ArrayTime = [];

calConstVel.addEventListener('change', onlyOneSelection);
calInitialVel.addEventListener('change', onlyOneSelection);
calFinalVel.addEventListener('change', onlyOneSelection);
calAcel.addEventListener('change', onlyOneSelection);
calDist.addEventListener('change', onlyOneSelection);


const calcular = async () => {
  
    const velONumber = parseFloat(velO.value);
    const velFNumber = parseFloat(velF.value);
    const timeNumber = parseFloat(time.value);
    const acelNumber = parseFloat(acel.value);
    let subFormula1;
    let subformula2;
        
    for(let index = 0; index <= timeNumber; index ++) {
      let indexArr = index;
      ArrayTime.push(indexArr);
    }

    if (selection === 'dist') {
      await calSelection();
      console.log('Entré a calculo de distancia');
      console.log('Array de intervalo de tiempo', ArrayTime);
      ArrayTime.map(e => {
      subformula1 = parseFloat(subFormula1 = velONumber * timeNumber);
      subformula2 = parseFloat(subFormula2 = 0.5 * acelNumber * e * e)
      distancia.push(subformula1 + subformula2);
    })

    console.log('Array aceleración', distancia);
    
    respuesta.setAttribute('class', 'sol');
    // respuesta.innerHTML = `<h1>La respuesta es: ${distancia.length}</h1>`;
  
    const g = await graph(distancia, ArrayTime);

    } else if (selection === 'constAcel') {
      console.log('Entré a calculo de aceleración');
      }
    
}

button.addEventListener('click', calcular)

