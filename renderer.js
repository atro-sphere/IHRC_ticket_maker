async function save_img() {
    const element = document.getElementById("ticket_background")
    const rect = element.getBoundingClientRect()

    console.log(rect)

    window.globalAPI.capture_area({
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
    })
}


const ticket = document.getElementById("ticket_container")

const operation_date_container = document.getElementById("operation_date")

const operation_year_container = operation_date_container.querySelector("span#year")
const operation_year = operation_year_container.querySelector("span.year")


const selectors = document.getElementsByClassName("selector")

for (const selector of selectors){
    const pulldown = selector.querySelector(".pulldown") ?? null

    if (pulldown){
        const selected_el = selector.querySelectorAll(".selected_element")[0]

        const selected_op = pulldown.querySelectorAll(".selected")[0]

        selected_el.textContent = selected_op.textContent

        console.log(pulldown)
        selected_el.addEventListener("click", ()=>{
            pulldown.style.display = "block"
        })

        const options = pulldown.querySelectorAll(".option")

        for (const option of options){
            option.addEventListener("click", ()=>{
                selected_op.classList.remove("selected")

                option.classList.add("selected")

                selected_el.textContent = option.textContent

                pulldown.style.display = "none"
            })
        }
    }  
}

const inputs = document.getElementsByClassName("input")

for (const input of inputs){
    const selected_el = input.querySelectorAll(".selected_element")[0]

    const input_el = input.querySelector("input")

    selected_el.addEventListener("click", ()=>{
        selected_el.style.display = "none"
        input_el.style.display = "block"
    })

    input_el.addEventListener("keydown", (event)=>{
        if (event.key === "Enter"){
            const value = Number(input_el.value)

            if (isNaN(value)){
                console.error(`Invalid input: ${input_el.value}`)
            }
            else{
                if (1954 > value){
                    console.log(`Value ${value} is before the foundation of JRA.`)
                }
                selected_el.textContent = value
                operation_year.textContent = value
                selected_el.style.display = "block"

                input_el.style.display = "none"
            }
        }
    })
}

const save_but = document.getElementById("save")

save_but.addEventListener("click", ()=>{
    save_img()
})