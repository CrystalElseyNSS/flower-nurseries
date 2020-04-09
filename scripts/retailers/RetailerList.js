import { useRetailers } from "./RetailerDataProvider.js"
import { useDistributors } from "../distributors/DistributorDataProvider.js"
import { useFlowers } from "../flowers/FlowerDataProvider.js"
import { useNurseries } from "../nurseries/NurseryDataProvider.js"
import { useDistributorNurseries } from "../relationships/DistributorNurseriesDataProvider.js"
import { useNurseryFlowers } from "../relationships/NurseryFlowersDataProvider.js"
import { Retailer } from "./Retailer.js"


const contentTarget = document.querySelector(".retailerContainer")

const renderRetailers = (retailersToRender) => {
    const distributors = useDistributors()
    const flowers = useFlowers()
    const nurseries = useNurseries()
    const distributorNurseries = useDistributorNurseries()
    const nurseryFlowers = useNurseryFlowers()

    contentTarget.innerHTML = retailersToRender.map(
        (retailer) => {

            // One-to-many: finds the distributor for the current retailer:
            const foundDistributor = distributors.find (distributor => distributor.id === retailer.distributorId)

            // Many-to-many: Gets all the relationship objects between the distributor and its nurseries:
            let nurseriesForThisDistributor = distributorNurseries.filter (distributorNursery => distributorNursery.distributorId === foundDistributor.id)

            // Turns the nursery relationship objects into actual nursery objects: 
            nurseriesForThisDistributor = nurseriesForThisDistributor.map (distributorNursery => nurseries.find (nursery => nursery.id === distributorNursery.nurseryId))

            // Many-to-many: Gets all the relationship objects between the nurseries and the flowers:
            let flowersSoldbyThisNursery = nurseriesForThisDistributor.map (nursery => {
                let flowersForThisNursery = nurseryFlowers.filter (nurseryFlower => nursery.id === nurseryFlower.nurseryId)
                flowersForThisNursery = flowersForThisNursery.map (nurseryFlower => flowers.find (flower => nurseryFlower.flowerId === flower.id ))
                return flowersForThisNursery
            }).flat()
            return Retailer(retailer, foundDistributor, nurseriesForThisDistributor, flowersSoldbyThisNursery)           
        } 
    ).join("")
    
}

export const RetailerList = () => {
    const retailers = useRetailers()
    renderRetailers(retailers)
}