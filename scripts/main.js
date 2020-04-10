import { getFlowers } from "./flowers/FlowerDataProvider.js"
import { getRetailers } from "./retailers/RetailerDataProvider.js"
import { getDistributors } from "./distributors/DistributorDataProvider.js"
import { FlowerList } from "./flowers/FlowerList.js"
import { RetailerList } from "./retailers/RetailerList.js"
import { getDistributorNurseries } from "./relationships/DistributorNurseriesDataProvider.js"
import { getNurseryFlowers } from "./relationships/NurseryFlowersDataProvider.js"
import { getNurseries } from "./nurseries/NurseryDataProvider.js"
import { getColors } from "./colors/ColorDataProvider.js"





getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(getDistributorNurseries)
    .then(getNurseries)
    .then(getNurseryFlowers)
    .then(getColors)
    .then(FlowerList)
    .then(RetailerList)