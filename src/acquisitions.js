import Chart from 'chart.js/auto';

const velO = document.getElementById('velO');
const velF = document.getElementById('velF');
const acel = document.getElementById('acel');
const time = document.getElementById('time');
const respuesta = document.getElementById('solution');
const chartCanva = document.getElementById('acquisitions');
const button = document.getElementById('cal')
let distancia = [];
const ArrayTime = [];

const calcular = async () => {
    const velONumber = parseFloat(velO.value);
    const timeNumber = parseFloat(time.value);
    const acelNumber = parseFloat(acel.value);
    let subFormula1;
    let subformula2;

    
    for(let index = 0; index <= timeNumber; index ++) {
      let indexArr = index;
      ArrayTime.push(indexArr);
    }

    console.log(ArrayTime);
    ArrayTime.map(e => {
      subformula1 = parseFloat(subFormula1 = e * velONumber);
      console.log('formula 1', subFormula1);
      subformula2 = parseFloat(subformula2 = 0.5 * acelNumber * e * e);
      console.log('formula 2', subformula2);
      distancia.push(subFormula1 + subformula2) ;
      
    })

    console.log(distancia);
    
    respuesta.setAttribute('class', 'sol');
    // respuesta.innerHTML = `<h1>La respuesta es: ${distancia.length}</h1>`;
  
    const g = await graph(distancia, ArrayTime);
    
}

button.addEventListener('click', calcular)

const labels = ArrayTime;

 const graph = async (distancia) => {
  const data = distancia;// aqui voy

  new Chart(
    chartCanva,
    {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Distancia recorrida',
            data: data
          }
        ]
      }
    }
  );
};
 