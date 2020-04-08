import { useFlowers } from "./FlowerDataProvider.js"
import { Flower } from "./Flower.js"

const contentTarget = document.querySelector(".flowerContainer")

const renderFlowers = (flowersToRender) => {
    contentTarget.innerHTML = flowersToRender.map(
        (flowerObject) => {
            return Flower(flowerObject)
        }
    ).join("")
}

export const FlowerList = () => {
    const allFlowers = useFlowers()
    renderFlowers(allFlowers)
}