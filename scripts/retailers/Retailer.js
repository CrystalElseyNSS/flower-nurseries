export const Retailer = (retailerObject, foundDistributor) => {
    return `
        <section class="retailer">
            <h3>Retailer Name: ${retailerObject.name}</h3>
            <p>Location: ${retailerObject.city}, ${retailerObject.state}</p>
            <p>Distributor: ${foundDistributor.name} in ${foundDistributor.city}, ${foundDistributor.state}</p>
    `
}