import { getFlowers } from "./flowers/FlowerDataProvider.js"
import { FlowerList } from "./flowers/FlowerList.js"

import { getRetailers } from "./retailers/RetailerDataProvider.js"
import { RetailerList } from "./retailers/RetailerList.js"

getFlowers()
    .then(getRetailers)
    .then(FlowerList)
    .then(RetailerList)