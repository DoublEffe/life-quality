import {svg} from './svg.js'
import {formDiv} from './form.js'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCTZDcHPi7b5_CR0XbzU0WuIKI-lRifmh0",
  authDomain: "life-quality-index.firebaseapp.com",
  projectId: "life-quality-index",
  storageBucket: "life-quality-index.appspot.com",
  messagingSenderId: "521246539812",
  appId: "1:521246539812:web:148243fbdbb5ef4677d8b1"
}
initializeApp(firebaseConfig)

 
document.body.style.height = '100vh'
let mainDiv = document.createElement('div')
document.body.appendChild(mainDiv)
mainDiv.style.display = 'flex'
mainDiv.style.width = '100%'
mainDiv.style.height = '100%'
mainDiv.style.justifyContent = 'space-evenly'
mainDiv.appendChild(svg)
mainDiv.appendChild(formDiv)


