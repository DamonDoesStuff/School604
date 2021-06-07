let shortbase = 0
let longbase = 0
let height = 0
let answer = 0
let two = 2
document.getElementById('button').addEventListener('click', multiplication)

function multiplication() {
  shortbase = document.getElementById('box1').value
  longbase = document.getElementById('box2').value
  height = document.getElementById('box3').value

  shortbase = parseInt(shortbase)
  longbase = parseInt(longbase)
  height = parseInt(height)
  answer = (shortbase + longbase) / two * height
  alert(answer)
}