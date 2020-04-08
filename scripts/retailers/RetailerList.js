import { useRetailers } from "./RetailerDataProvider.js"
import { useDistributors } from "../distributors/DistributorDataProvider.js"
import { Retailer } from "./Retailer.js"

const contentTarget = document.querySelector(".retailerContainer")

const renderRetailers = (retailersToRender) => {
    const allDistributors = useDistributors()
    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            const foundDistributor = allDistributors.find (distributor => distributor.id === retailerObject.distributorId)
            return Retailer(retailerObject, foundDistributor)
        }
    ).join("")
}

export const RetailerList = () => {
    const allRetailers = useRetailers()
    renderRetailers(allRetailers)
}