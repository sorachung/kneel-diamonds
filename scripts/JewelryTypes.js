import { getTypes, setType, getOrderBuilder } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
) 

export const JewelryTypes = () => {
    let html = '<ul class="type__list">'

    // Use .map() for converting objects to <li> elements
    const listItems = types.map(type => {
        if(getOrderBuilder().typeId === type.id) {
            return `<li>
            <input type="radio" name="type" checked="checked value="${type.id}" /> ${type.name}
        </li>`} else {
            return `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.name}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

