import {svg} from './svg.js'
import {formDiv} from './form.js'

document.body.style.height = '100vh'
let mainDiv = document.createElement('div')
document.body.appendChild(mainDiv)
mainDiv.style.display = 'flex'
mainDiv.style.width = '100%'
mainDiv.style.height = '100%'
mainDiv.appendChild(svg)
mainDiv.appendChild(formDiv)
