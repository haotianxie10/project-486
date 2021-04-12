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
    B2B.innerHTML = 'Human breath'
    B3B.innerHTML = 'No garbage sorting'
    B4B.innerHTML = 'chemistry experiment'
    window.localStorage.setItem('airP', '1')
    B1B.onclick = Aright
  } else if (airP === '2') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q2.The main cause of air pollution'
    B1B.innerHTML = 'Industry, transportation, and forest fires.'
    B2B.innerHTML = 'Human breath'
    B3B.innerHTML = 'No garbage sorting'
    B4B.innerHTML = 'chemistry experiment'
    B1B.onclick = Aright
  } else if (airP === '3') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q3.The main cause of air pollution'
    B1B.innerHTML = 'Industry, transportation, and forest fires.'
    B2B.innerHTML = 'Human breath'
    B3B.innerHTML = 'No garbage sorting'
    B4B.innerHTML = 'chemistry experiment'
    B1B.onclick = Aright
  } else if (airP === '4') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q4.The main cause of air pollution'
    B1B.innerHTML = 'Industry, transportation, and forest fires.'
    B2B.innerHTML = 'Human breath'
    B3B.innerHTML = 'No garbage sorting'
    B4B.innerHTML = 'chemistry experiment'
    B1B.onclick = Aright
  } else if (airP === '5') {
    B1N.className = 'B1'
    B2N.className = 'B2'
    B3N.className = 'B3'
    B4N.className = 'B4'
    // quesiton part
    pT.innerHTML = 'Air pollution'
    pQ.innerHTML = 'Q5.The main cause of air pollution'
    B1B.innerHTML = 'Industry, transportation, and forest fires.'
    B2B.innerHTML = 'Human breath'
    B3B.innerHTML = 'No garbage sorting'
    B4B.innerHTML = 'chemistry experiment'
    B1B.onclick = Finished
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
