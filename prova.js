//DCCV_TAXOCCU1 occupati fascia eta 20-64 
async function tax_accup(){
  let res = await fetch('https://sdmx.istat.it/SDMXWS/rest/data/150_915/A..Y20-64.ITC3..99.9/?startPeriod=2022', {mode:'cors',headers:{'Accept':'application/json','Origin': '*'}})
  console.log(res.headers)
  let jsons = await res.json()
  console.log(jsons.dataSets[0].series['0:0:0:0:0:0:0'].observations['0'][0])
}
//DCCN_CONTIEMATMREV2
async function PM2(){
  let res = await fetch('https://sdmx.istat.it/SDMXWS/rest/data/97_187/A.AE_T.2022M11.Z._T..PM2_5../?startPeriod=2020', {mode:'cors',headers:{'Accept':'application/json'}})
  let json = await res.json()
  console.log(json.dataSets[0].series['0:0:0:0:0:0:0:0:0'].observations['0'][0])
}

//DCCV_ABITSPESA spesa media mensile per abitazione
async function housing_cost(){
  let res = await fetch('https://sdmx.istat.it/SDMXWS/rest/data/33_225/A.99...ITC1.......ABITAZ_SPESA_M/?startPeriod=2022', {mode:'cors',headers:{'Accept':'application/json'}})
  let json = await res.json()
  console.log(json.dataSets[0].series['0:0:0:0:0:0:0:0:0:0:0:0'].observations['0'][0])
}

//DCCV_REDNETFAMFONTERED reddito medio annuale famiglie inclusi fitti
async function reddito_medio(){
  let res = await fetch('https://sdmx.istat.it/SDMXWS/rest/data/32_292/..ITC3....1.9.....REDD_MEDIO_FAM./?startPeriod=2021',  {mode:'cors',headers:{'Accept':'application/json'}})
  let json = await res.json()
  console.log(json.dataSets[0].series['0:0:0:0:0:0:0:0:0:0:0:0:0:0'].observations['0'][0])
}

//DCIS_MORTALITA1 aspettativa di vita ad 80 anni
async function life_expect(){
  let res = await fetch('https://sdmx.istat.it/SDMXWS/rest/data/26_295/A.Y80.ITC1.9.LIFEXP/?startPeriod=2022',  {mode:'cors',headers:{'Accept':'application/json'}})
  let json = await res.json()
  console.log(json.dataSets[0].series['0:0:0:0:0'].observations['0'][0])
}

//SEP_GIUSTSIC_PEN_DELITTI omicidi volontari consumati
async function omicidi_volontari(){
  let res = await fetch('https://sdmx.istat.it/SDMXWS/rest/data/73_67/A.ITC1.CRIMEN.INTENHOM.9./?startPeriod=2022',  {mode:'cors',headers:{'Accept':'application/json'}})
  let json = await res.json()
  console.log(json.dataSets[0].series['0:0:0:0:0:0'].observations['0'][0])
}


async function city_info(name){
  let res = await fetch(`https://api.teleport.org/api/urban_areas/slug:${name}/scores/`)
  let json = await res.json()
  let categories = json.categories
  return categories
}

//tax_accup()
export {city_info, tax_accup, housing_cost, reddito_medio, life_expect, omicidi_volontari}
