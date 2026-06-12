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

const console_container = document.getElementById("console")

const con_upper = console_container.querySelector("div#console_upper")
const con_lower = console_container.querySelector("div#console_lower")

const op_selected = con_upper.querySelector("div.input.opyear").querySelector("div.selected_element")

const ticket = document.getElementById("ticket_container")

const ti_upper = ticket.querySelector("div#upper")
const ti_lower = ticket.querySelector("div#lower")

const ti_left = ti_upper.querySelector("div#left")
const ti_right = ti_upper.querySelector("div#right")

const opdate_container = ti_left.querySelector("div#operation_date")
const opyear = opdate_container.querySelector("span.value.opyear")
const opnum = opdate_container.querySelector("span.value.opnum")
const opday = opdate_container.querySelector("span.value.opday")

const course = ti_upper.querySelector("span.value.racecourse")

const racenum = ti_upper.querySelector("span.value.racenum")

const race_info_container = ti_upper.querySelector("div#race_info")
const race_edition = race_info_container.querySelector("span.value.race_edition")
const race_grade = race_info_container.querySelector("span.value.race_grade")
const race_name = race_info_container.querySelector("div.value.racename")

const betting_type_container = ti_right.querySelector("div#ticket_type")

const betting_header = betting_type_container.querySelector("div#type_header")
const betting_footer = betting_type_container.querySelector("div#type_footer")
const betting_text = betting_type_container.querySelector("div#type_text")

const betting_detail_container = ti_right.querySelector("div#detail")

const picks_container = betting_detail_container.querySelector("div#picks_container")

const purchased_date = ti_lower.querySelector("div#purchased_date")

const sum_amount = ti_lower.querySelector("div#sum_amount").querySelector("div.num_container")
const sum_money = ti_lower.querySelector("div#sum_money").querySelector("div.num_container")

const map = {
    "race_detail": {
        "opyear": Number,
        "opnum": Number,
        "opday": Number,
        "course": "",
        "race_num": Number
    },
    "betting_type": "",
    "betting_detail": {},
}




function setup_page(){

}