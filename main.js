async function getApi(resolve, reject) {
  let raw_data = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
  let jsdata = await raw_data.json()
  
  let total = jsdata.data.summary.total;
  console.log(total)
  
  let dis = jsdata.data.summary.discharged;
  let deat = jsdata.data.summary.deaths;
  
  document.getElementById('dis').innerText = dis
  document.getElementById('dea').innerText = deat;
 document.getElementById('tab').innerText = total;
  for(var i = 1; i<36; i++){
  let loc = jsdata.data.regional[i];
  console.log(loc.loc)
 document.getElementById('states').innerHTML += `<tr><td>${loc.loc}</td>
 <td>${loc.confirmedCasesIndian}</td><td>${loc.discharged}</td><td>${loc.deaths}</td></tr>
 `
  }
  console.time()
  
}

getApi()

