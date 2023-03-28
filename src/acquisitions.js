import Chart from 'chart.js/auto';
 
 const graph = async (distancia, ArrayTime) => {
  const chartCanva = document.getElementById('acquisitions');
  const labels = ArrayTime;
  const data = distancia;// aqui voy

  new Chart(
    chartCanva,
    {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Distancia recorrida cada segundo',
            data: data
          }
        ]
      }
    }
  );
};

export {graph}; 
 