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

const selectors = document.getElementsByClassName("selector")

for (const selector in selectors){
    const options = selector.getElementsByClassName("option")

    selector.addEventListener("click", ()=>{
        
    })
}

const save_but = document.getElementById("save")

save_but.addEventListener("click", ()=>{
    save_img()
})