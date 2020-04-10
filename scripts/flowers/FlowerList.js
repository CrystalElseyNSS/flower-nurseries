import { useFlowers } from "./FlowerDataProvider.js"
import { Flower } from "./Flower.js"
import { useColors } from "../colors/ColorDataProvider.js"

const contentTarget = document.querySelector(".flowerContainer")

const renderFlowers = (flowersToRender) => {
    const colors = useColors()

    contentTarget.innerHTML = flowersToRender.map(
        (flowerObject) => {
            const flowerColor = colors.find(color => color.id === flowerObject.colorId)
            return Flower(flowerObject, flowerColor)
        }
    ).join("")
}

export const FlowerList = () => {
    const allFlowers = useFlowers()
    renderFlowers(allFlowers)
}