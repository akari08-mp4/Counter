let count = 0;

function add() {
  count += 1
  document.getElementById("count").textContent = count
  console.log(count)
}

function subtract() {
  count -= 1
  document.getElementById("count").textContent = count
  console.log(count)
}

function reset() {
  count = 0
  document.getElementById("count").textContent = count
}