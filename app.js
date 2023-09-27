
let myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

// function saveLead() {
//     console.log("button clicked");
// }

// REFACTORED
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    console.log("Button clicked!")
    myLeads.push(inputEl.value) // pushing the text in the input
    console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
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
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a> 
        </li>
        `


    }
    ulEl.innerHTML = listItems

}