import { getFlowers } from "./flowers/FlowerDataProvider.js"
import { getRetailers } from "./retailers/RetailerDataProvider.js"
import { getDistributors } from "./distributors/DistributorDataProvider.js"
import { FlowerList } from "./flowers/FlowerList.js"
import { RetailerList } from "./retailers/RetailerList.js"

getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(FlowerList)
    .then(RetailerList)