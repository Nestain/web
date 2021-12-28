const countEl = document.getElementById("count-el")
const saved = document.getElementById("saved")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let savedCount = count + " - "
    saved.textContent += savedCount
    count = 0
    countEl.textContent = count
}