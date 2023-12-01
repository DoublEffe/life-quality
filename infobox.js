import { formDiv } from "./form.js"


const infoBox = (info) => {
  console.log(info)
  let infoDiv = document.createElement('div')
  infoDiv.setAttribute('id', 'info')
  formDiv.appendChild(infoDiv)
  infoDiv.style.width = '500px'
  infoDiv.style.height = '500px'
  let canvas = document.createElement('canvas')
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  new Chart(canvas, {
      type: 'bar',
      data: {
        labels: info.map(y => Math.floor(y.score_out_of_10).toString()+'/10 '+y.name),//nomi scores
        datasets: [{
          backgroundColor: info.map(x => x.color),
          borderRadius: {topRight: 4, bottomRight: 4},

          labels: false,
          data: info.map(x => Math.floor(x.score_out_of_10)), //valori scores
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
            position: 'right',
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
            display: false
            }
          },
          x:{
            display: false,
          }
        }
      }
    });
  infoDiv.appendChild(canvas)
  /*
  let hide = document.createElement('button')
  hide.textContent = 'try naother city'
  infoDiv.appendChild(hide)
  hide.onclick = () => {
    hide.style.display = 'none'
    canvas.style.display = 'none'
  }*/
}

export {infoBox}