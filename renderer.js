async function save_img() {
    const element = document.getElementById("ticket_background")
    const rect = element.getBoundingClientRect()

    window.globalAPI.capture_area({
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
    })
}

function num_to_full(str){

    const map = {
        '0': '０', '1': '１', '2': '２', '3': '３', '4': '４',
        '5': '５', '6': '６', '7': '７', '8': '８', '9': '９'
    }
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
                const selected_op = pulldown.querySelectorAll(".selected")[0]
                selected_op?.classList.remove("selected")

                option.classList.add("selected")

                selected_el.textContent = option.textContent

                const target = document.querySelector(`.value.${selector_class}`)
                
                const text = option.textContent

                if (target){
                    if (selector_class == "race_grade"){
                        target.textContent = `　${text}`
                    }
                    else{
                        target.textContent = text
                    }
                    
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

const grade_race_toggle = document.getElementById("grade_race_toggle")
const listed_toggle = document.getElementById("listed_race_toggle")

grade_race_toggle.addEventListener("click", ()=>{
    grade_race_toggle.classList.add("active")
    listed_toggle.classList.remove("active")

    const race_edition_input = document.querySelector("div.input.race_edition")
    const race_grade_input = document.querySelector("div.selector.race_grade")

    const racegrade_text = document.querySelector("span.value.race_grade")
    const race_edition_text = document.querySelector("span.value.race_edition")
    
    const grade_selector = document.querySelector("div.selector.race_grade")
    const grade_selected_el = grade_selector.querySelector("div.selected_element")
    
    const edition_input = document.querySelector("div.input.race_edition")
    const edition_selected_el = edition_input.querySelector("span.selected_element")

    racegrade_text.textContent = grade_selected_el.textContent
    race_edition_text.textContent = `第${num_to_full(edition_selected_el.textContent)}回`

    race_edition_input.style.display = "flex"
    race_grade_input.style.display = "block"
})

listed_toggle.addEventListener("click", ()=>{
    listed_toggle.classList.add("active")
    grade_race_toggle.classList.remove("active")

    const race_edition_input = document.querySelector("div.input.race_edition")
    const race_grade_input = document.querySelector("div.selector.race_grade")

    race_edition_input.style.display = "none"
    race_grade_input.style.display = "none"

    const racegrade_text = document.querySelector("span.value.race_grade")
    const race_edition_text = document.querySelector("span.value.race_edition")
    racegrade_text.textContent = "（Ｌ）"
    race_edition_text.textContent = ""
})

const racename_free = document.getElementById("racename_free")
const racename_select = document.getElementById("racename_select")

const raceinfo_console = document.getElementById("raceinfo_console")

racename_free.addEventListener("click", ()=>{
    racename_free.classList.add("active")
    racename_select.classList.remove("active")

    raceinfo_console.style.display = "flex"
})
racename_select.addEventListener("click", ()=>{
    racename_select.classList.add("active")
    racename_free.classList.remove("active")

    raceinfo_console.style.display = "none"
})

const save_but = document.getElementById("save")

save_but.addEventListener("click", ()=>{
    save_img()
})