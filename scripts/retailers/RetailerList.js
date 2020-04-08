import { useRetailers } from "./RetailerDataProvider.js"
import { Retailer } from "./Retailer.js"

const contentTarget = document.querySelector(".retailerContainer")

const renderRetailers = (retailersToRender) => {
    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            return Retailer(retailerObject)
        }
    ).join("")
}

export const RetailerList = () => {
    const allRetailers = useRetailers()
    renderRetailers(allRetailers)
}