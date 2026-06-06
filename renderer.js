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

function num_to_full(str){
    console.log(str)

    const map = {
        '0': '０', '1': '１', '2': '２', '3': '３', '4': '４',
        '5': '５', '6': '６', '7': '７', '8': '８', '9': '９'
    }

    console.log(map[str], [...str].filter(i => map[i] ?? i).join(""))

    return [...str].map(i => map[i] ?? i).join("")
}


const ticket = document.getElementById("ticket_container")

const operation_date_container = document.getElementById("operation_date")

const opyear_container = operation_date_container.querySelector("span.opyear")
const opyear = opyear_container.querySelector("span.opyear")

const opnum_container = operation_date_container.querySelector("span.opnum")
const opnum = opnum_container.querySelector("span.opnum")

const opday_container = operation_date_container.querySelector("span.opday")
const opday = opday_container.querySelector("span.opday")

const selectors = document.getElementsByClassName("selector")

for (const selector of selectors){
    const pulldown = selector.querySelector(".pulldown") ?? null

    const selector_class = [...selector.classList].filter(cl => cl !== "selector")

    if (pulldown){
        const selected_el = selector.querySelectorAll(".selected_element")[0]

        const selected_op = pulldown.querySelectorAll(".selected")[0]

        selected_el.textContent = selected_op?.textContent ?? ""

        selected_el.addEventListener("click", ()=>{
            pulldown.style.display = "block"
        })

        const options = pulldown.querySelectorAll(".option")

        for (const option of options){
            option.addEventListener("click", ()=>{
                selected_op?.classList.remove("selected")

                option.classList.add("selected")

                selected_el.textContent = option.textContent

                const target = document.querySelector(`.value.${selector_class}`)
                
                if (target){
                    target.textContent = option.textContent
                }

                pulldown.style.display = "none"
            })
        }
    }  
}

const inputs = document.getElementsByClassName("input")

for (const input of inputs){
    const selected_el = input.querySelectorAll(".selected_element")[0]

    const input_el = input.querySelector("input")

    const input_classlist = [...input.classList].filter(cl => cl !== "input")
    const input_class = input_classlist[0]

    selected_el.addEventListener("click", ()=>{
        selected_el.style.display = "none"
        input_el.style.display = "block"
    })

    input_el.addEventListener("keydown", (event)=>{
        if (event.key === "Enter"){
            let value = input_el.value

            const target = document.querySelector(`.value.${input_class}`)

            if (input_class === "race_edition"){
                value = `第${num_to_full(String(value))}回`
            }
            
            target.textContent = value
            selected_el.textContent = input_el.value

            input_el.style.display = "none"
            selected_el.style.display = "block"
            }
        
    })
}

const save_but = document.getElementById("save")

save_but.addEventListener("click", ()=>{
    save_img()
})