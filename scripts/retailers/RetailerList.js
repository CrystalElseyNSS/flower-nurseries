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
    const distributorNurseries = useDistributorNurseries()
    const nurseries = useNurseries()
    const nurseryFlowers = useNurseryFlowers()
    const flowers = useFlowers()

    contentTarget.innerHTML = retailersToRender.map(
        (retailer) => {

            // One-to-many: finds the distributor for the current retailer:
            const foundDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)

            // Many-to-many: Gets all the relationship objects between the distributor and its nurseries from the join table:
            const distributorNurseryRelationships = distributorNurseries.filter(distributorNursery => foundDistributor.id === distributorNursery.distributorId)

            // Turns the distributor/nursery relationship objects into nursery objects: 
            const nurseriesForThisDistributor = distributorNurseryRelationships.map(distributorNursery => nurseries.find(nursery => distributorNursery.nurseryId === nursery.id))

            // Renders all of the available flowers from all nurseries for each retailer: 
            const allAvailableFlowers = nurseriesForThisDistributor.map (foundNursery => {
                // Gets all the relationship objects between the nurseries and the flowers from the join table:
                const nurseryFlowerRelationships = nurseryFlowers.filter (nurseryFlower => foundNursery.id === nurseryFlower.nurseryId)
                // Turns the nursery/flower relationship objects into flower objects: 
                const flowersFromThisNursery = nurseryFlowerRelationships.map (nurseryFlower => flowers.find (flower => nurseryFlower.flowerId === flower.id))
                return flowersFromThisNursery
            }).flat()
                    
            // Renders the HTML for each retailer with the inserted arguments:
            return Retailer(retailer, foundDistributor, nurseriesForThisDistributor, allAvailableFlowers)           
        } 
    ).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()
    renderRetailers(retailers)
}