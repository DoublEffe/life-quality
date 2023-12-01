
import {regioni, keys} from './data.js'
import { tax_accup, housing_cost, reddito_medio, life_expect, omicidi_volontari } from './prova.js'


async function istat(){
  await tax_accup()
}

let svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
svg.setAttribute('version', '1.1')
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
svg.setAttribute('x', '0px')
svg.setAttribute('y', '0px')
svg.style.width = '560.512px'
svg.style.height = '663.114px'
svg.style.display = 'block'
svg.setAttribute('viewBox', '0 0 560.512 663.114')
svg.setAttribute('xml:space', 'preserve')
let g = document.createElementNS('http://www.w3.org/2000/svg','g')
let defs = document.createElement('defs')
//document.body.appendChild(svg)
svg.appendChild(defs)
svg.appendChild(g)
for (let i=0; i < 20;i++){
  let path = document.createElementNS('http://www.w3.org/2000/svg','path')
  path.setAttribute('fill','#3E5C73')
  path.setAttribute('class','regione')
  path.setAttribute('data-nome-regione',keys[i])
  path.setAttribute('stroke','#3E5C73')
  path.setAttribute('stroke-width','2')
  path.setAttribute('stroke-miterlimit','10')
  path.setAttribute('d',regioni[keys[i]].path)
  path.style.transition = 'all 200ms ease-in-out'
  g.appendChild(path)
  
  path.onclick = () => {
    let paths = document.querySelectorAll('path')
    paths.forEach((path) => {
      path.classList.remove('selected')
      path.style.fill = '#3E5C73'
    })
    path.setAttribute('class', 'selected')
    path.style.fill = 'white'
    console.log(path.dataset.nomeRegione)
    
  }

  tippy(path,{
    onShow(){
      content: path.dataset.nomeRegione,
      istat()
    }
  })
  
}



/*
document.addEventListener('DOMContentLoaded', () => {
  tippy(path,{
    content: path.dataset.nomeRegione,
    onCreate(){
      istat()
    }
  })
})

/*
let paths = document.querySelectorAll('path')
let instance = tippy(paths)
instance.onCreate = () => {
  istat()
}*/

export {svg}