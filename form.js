
import {city_info} from './prova.js'
import { infoBox } from './infobox.js'

let formDiv = document.createElement('div')
let form = document.createElement('form')
let searchDiv = document.createElement('div')
let searchBox = document.createElement('input')
let searchButton = document.createElement('button')
//let infoDiv = document.createElement('div')
//infoDiv.setAttribute('id', 'info')

formDiv.style.display = 'flex'
formDiv.style.flexDirection = 'column'
searchDiv.style.display = 'flex'
formDiv.appendChild(searchDiv)
//formDiv.appendChild(infoDiv)
searchDiv.appendChild(form)
form.setAttribute('id', '#form')
form.appendChild(searchBox)
form.appendChild(searchButton)
searchButton.textContent = 'Search'
searchButton.setAttribute('type', 'submit')
searchBox.setAttribute('name', 'search-bar')
searchBox.onfocus = () => {
  //infoDiv.style.display = 'none'
  let infoDiv = document.getElementById('info')
  infoDiv.remove()
}
form.onsubmit = async (e) => {
  e.preventDefault()
  let formData = new FormData(form)
  let cityName = formData.get('search-bar')
  let info = await city_info(cityName)
  infoBox(info)
  
  
}
export {formDiv}
