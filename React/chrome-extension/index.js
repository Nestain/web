const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.querySelector("#input-el")
const tabBtn = document.querySelector("#tab-btn")
const ulEl = document.querySelector("#ul-el")
let beginningLeads = []

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if (leadsFromLocalStorage) {
    beginningLeads = leadsFromLocalStorage
    render(beginningLeads)
}

saveBtn.addEventListener("click", function() {
    beginningLeads.push(inputEl.value)
    localStorage.setItem("leads", JSON.stringify(beginningleads))
    inputEl.value = ""
    render(beginningLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        beginningLeads.push(tabs[0].url)
        localStorage.setItem("leads", JSON.stringify(beginningLeads))
        render(beginningLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    beginningLeads = []
    render(beginningLeads)
})

function render(leads) {
    let listItems = ""
    for( let i = 0; i < leads.length; i++ ) {
        listItems += `
            <li>
                <a href='${leads[i]}' target="_blank">${leads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}