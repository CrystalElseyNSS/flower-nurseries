import { useDistributors } from "./DistributorDataProvider.js"
import { Distributor } from "./Distributor.js"

const contentTarget = document.querySelector(".distributorContainer")

const renderDistributors = (distributorsToRender) => {
    contentTarget.innerHTML = distributorsToRender.map(
        (distributorObject) => {
            return Distributor(distributorObject)
        }
    ).join("")
}

export const DistributorList = () => {
    const allDistributors = useDistributors()
    renderDistributors(allDistributors)
}