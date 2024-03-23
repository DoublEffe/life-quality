import { formDiv } from "./form.js"


const infoBox = (names, values) => {
  let infoDiv = document.createElement('div')
  infoDiv.setAttribute('id', 'info')
  formDiv.appendChild(infoDiv)
  infoDiv.style.width = '300px'
  infoDiv.style.height = '300px'
  let canvas = document.createElement('canvas')
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  new Chart(canvas, {
      type: 'bar',
      data: {
        labels: names.map(y => y),//nomi scores
        datasets: [{
          //backgroundColor: info.map(x => x.color),
          borderRadius: {topRight: 4, bottomRight: 4},

          labels: false,
          data: values.map(x => x.v), //valori scores
          //borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'city scores',
            font: {
              size: 20,
              weight: 800,
            }
          },
          legend: {
            display: false,
          },
        },
        indexAxis: 'y',
        scales: {
          y: {
            position: 'left',
            beginAtZero: true,
            ticks: {
              autoSkip: false,
              padding: 5,
              font: {
                size: 14,
                weight: 600,
              }
            },
            grid: {
              display: false
            },
            border: {
            display: true
            }
          },
          x:{
            display: true,
          }
        }
      }
    });
  infoDiv.appendChild(canvas)
  let legendDiv = document.createElement('div')
  legendDiv.style.border = '5px solid black'
  const labels = ['carbon monoxide', 'condensation droplets', 'hydocarbons', 'nitrogen dioxide', 'particles', 'particles less than 10 micometers', 'particles less than 2.5 micometers', ]
  let p = document.createElement('p')
  p.innerText = 'LEGENDS'
  legendDiv.appendChild(p)
  labels.map((label, i) => {
    let p = document.createElement('p')
    p.innerText = names[i] + ' : ' + label
    legendDiv.appendChild(p)
  })
  infoDiv.appendChild(legendDiv)
}

export {infoBox}