
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

// REFACTORED
const inputBtn = document.getElementById("input-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads);
}


tabBtn.addEventListener("click", function() {
    // console.log(tabs[0].url)
    chrome.tabs.query(
        {
            active:true, 
            currentWindow:true
        },
        function(tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        }
    )
    console.log(tabs)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

// FUNCTIONS
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li>" + "<a target='_blank' href='#'>" + myLeads[i] + "</a>" + "</li>"
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 
        // line above is easier to understand

        // alt. way:
        // create element
        // set text element
        // append to unordered list
        // const li = document.createElement("li")
        // li.textContent = myLeads[i] 
        // ulEl.appendChild(li)

        listItems += `
        <li> 
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a> 
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

// EVENT LISTENERS

deleteBtn.addEventListener("dblclick", function () {
    // console.log("double click");
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    // console.log("Button clicked!")
    myLeads.push(inputEl.value) // pushing the text in the input
    console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"));
})
