// clean
const clean = document.getElementById('clean')
clean.onclick = function () {
  window.localStorage.clear()
}

// enemy work
const img2 = document.getElementById('Enemy2')
const airP = window.localStorage.getItem('airP')
if (airP === '6') {
  img2.className = 'Enemy22'
}
// question work
const pT = document.getElementById('pT')
const pQ = document.getElementById('pQ')
const B1B = document.getElementById('B1B')
const B2B = document.getElementById('B2B')
const B3B = document.getElementById('B3B')
const B4B = document.getElementById('B4B')
const B1N = document.getElementById('B1N')
const B2N = document.getElementById('B2N')
const B3N = document.getElementById('B3N')
const B4N = document.getElementById('B4N')

const AirP = function () {
  // finish process
  const airP = window.localStorage.getItem('airP')
  // when answear A is right
  const Aright = function () {
    const airP = window.localStorage.getItem('airP')
    pT.innerHTML = 'Congratulations'
    pQ.innerHTML = 'you are right!'
    B1B.innerHTML = 'Next Qustion!'
    B2N.className = 'B2N'
    B3N.className = 'B3N'
    B4N.className = 'B4N'
    window.localStorage.setItem('airP', parseInt(airP) + 1)
    B1B.onclick = AirP
  }
  const Awrong = function () {
    pT.innerHTML = 'Oh no!'
    pQ.innerHTML = 'your answer is wrong'
    B1B.innerHTML = 'try agains!'
    B2N.className = 'B2N'
    B3N.className = 'B3N'
    B4N.className = 'B4N'
    B1B.onclick = AirP
  }
  // when finish a part!
  const Finished = function () {
    const airP = window.localStorage.getItem('airP')
    pT.innerHTML = 'Congratulations'
    pQ.innerHTML = 'You beat the air pollution!'
    B1B.innerHTML = 'back to the map'
    B2N.className = 'B2N'
    B3N.className = 'B3N'
    B4N.className = 'B4N'
    window.localStorage.setItem('airP', parseInt(airP) + 1)
    B1B.onclick = AirP
  }

  if (airP === '1' || airP === null) {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q1.The main cause of air pollution'
    B1B.innerHTML = 'Industry, transportation, and forest fires.'
    B2B.innerHTML = 'transportation'
    B3B.innerHTML = 'forest fires'
    B4B.innerHTML = 'All of the above'
    window.localStorage.setItem('airP', '1')
    B1B.onclick = Awrong
    B2B.onclick = Awrong
    B3B.onclick = Awrong
    B4B.onclick = Aright
  } else if (airP === '2') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q2.The harm caused by air pollution'
    B1B.innerHTML = 'Harm to the human body'
    B2B.innerHTML = 'Harm to industrial and agricultural production.'
    B3B.innerHTML = 'Hazard to weather and climate.'
    B4B.innerHTML = 'All of the above'
    B1B.onclick = Awrong
    B2B.onclick = Awrong
    B3B.onclick = Awrong
    B4B.onclick = Aright
  } else if (airP === '3') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q3.Air pollution prevention and control measures'
    B1B.innerHTML = 'Reform the energy structure and use more pollution-free energy'
    B2B.innerHTML = 'Reduce solid waste discharge'
    B3B.innerHTML = 'garbage sorting'
    B4B.innerHTML = 'All of the above'
    B1B.onclick = Aright
    B2B.onclick = Awrong
    B3B.onclick = Awrong
    B4B.onclick = Awrong
  } else if (airP === '4') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q4.How many levels is AQI divided into?'
    B1B.innerHTML = '4'
    B2B.innerHTML = '5'
    B3B.innerHTML = '6'
    B4B.innerHTML = '7'
    B1B.onclick = Awrong
    B2B.onclick = Awrong
    B3B.onclick = Aright
    B4B.onclick = Awrong
  } else if (airP === '5') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q5.When the AQI index reaches what range, air pollution belongs to the unhealthy level'
    B1B.innerHTML = '51-100'
    B2B.innerHTML = '101-150'
    B3B.innerHTML = '151-200'
    B4B.innerHTML = '201-300'
    B1B.onclick = Awrong
    B2B.onclick = Awrong
    B3B.onclick = Finished
    B4B.onclick = Awrong
  } else if (airP === '6') {
    B1N.className = 'B1N'
    B2N.className = 'B2N'
    B3N.className = 'B3N'
    B4N.className = 'B4N'
    B1B.innerHTML = ''
    B2B.innerHTML = ''
    B3B.innerHTML = ''
    B4B.innerHTML = ''
    pT.innerHTML = ''
    pQ.innerHTML = ''
    img2.className = 'Enemy22'
  }
}
img2.onclick = AirP
