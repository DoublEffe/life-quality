import {regioni} from './data.js'

async function request(url){
  let res = await axios.get(url,{mode:'cors',headers:{'Accept':'application/json'}})
  return res.data.value['0']
}

//DCCV_TAXOCCU1 occupati fascia eta 20-64 https://sdmx.istat.it/SDMXWS/rest/data/150_915/A..Y20-64.ITC3..99.9/?startPeriod=2022
//percentuali non impiegati sopra 15 anni
function unemp_perc(name){
  let s = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tgs00010?format=JSON&time=2022&geo=${regioni[name].code}&unit=PC&isced11=TOTAL&sex=T&age=Y_GE15&lang=en`
  return  request(s)
}

//DCCV_REDNETFAMFONTERED reddito medio annuale famiglie inclusi fitti https://sdmx.istat.it/SDMXWS/rest/data/32_292/..ITC3....1.9.....REDD_MEDIO_FAM./?startPeriod=2021
function reddito_medio(name){
  let s = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nama_10r_2hhinc?format=JSON&sinceTimePeriod=2021&geo=${regioni[name].code}&unit=MIO_EUR&na_item=B5N&direct=BAL&lang=en`
  return request(s)
}

//DCIS_MORTALITA1 aspettativa di vita ad 80 anni https://sdmx.istat.it/SDMXWS/rest/data/26_295/A.Y80.ITC1.9.LIFEXP/?startPeriod=2022
function life_expect(name){
  let s = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_mlifexp?format=JSON&time=2021&geo=${regioni[name].code}&unit=YR&sex=T&age=Y80&lang=en`
  return request(s)
}

//SEP_GIUSTSIC_PEN_DELITTI omicidi volontari consumati https://esploradati.istat.it/SDMXWS/rest/data/73_67/A.ITC1.CRIMEN.INTENHOM.9./?startPeriod=2022
//rate of assault
function omicidi_volontari(name){
  let s = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_cd_acdr2?format=JSON&time=2020&geo=${regioni[name].code}&unit=RT&sex=T&age=TOTAL&icd10=X85-Y09_Y871&lang=en`
  return request(s)
}


async function city_info(name){
    let res = await fetch(`https://api.teleport.org/api/urban_areas/slug:${name}/scores/`)
    let json = await res.json()
    let categories = json.categories
    let summary = json.summary
    let city_score = json.teleport_city_score
    return {categories,summary, city_score}
}


export {city_info, unemp_perc, reddito_medio, life_expect, omicidi_volontari}
