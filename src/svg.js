
import {regioni, keys} from './data.js'
import { unemp_perc, reddito_medio, life_expect, omicidi_volontari } from './network.js'







async function istat(name){
  let arr = []
  try{
    let unemp = await unemp_perc(name)
    let redd = await reddito_medio(name)
    let life = await life_expect(name)
    let omici = await omicidi_volontari(name)
    
    arr.push(unemp, redd, life, omici)
    arr = arr.map(x => !x ? 'N.D.' : x)
    return arr
  }catch (e){
    alert('Error', e)
  }
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
  path.style.position = 'relative'

  g.appendChild(path)
  
  path.onclick = async () => {
    let paths = document.querySelectorAll('path')
    paths.forEach((path) => {
      path.classList.remove('selected')
      path.style.fill = '#3E5C73'
    })
    path.setAttribute('id', 'tooltip')
    path.setAttribute('class', 'selected')
    path.style.fill = 'white'
  }
  
  let tooltip = tippy(path)
  tooltip.setProps({
    allowHTML: true,
    async onTrigger(){
      let arr = await istat(path.dataset.nomeRegione)
      tooltip.setContent(`<p><bold>${path.dataset.nomeRegione}</bold></p><p>unemployment rate: ${arr[0]}</p><p>mean wage: ${arr[1]}</p><p>life expectation: ${arr[2]}</p><p>homicide: ${arr[3]}</p>`)
    }
  })
}


export {svg}