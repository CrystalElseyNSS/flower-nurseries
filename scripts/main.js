import { getFlowers } from "./flowers/FlowerDataProvider.js"
import { FlowerList } from "./flowers/FlowerList.js"

getFlowers()
    .then(FlowerList)