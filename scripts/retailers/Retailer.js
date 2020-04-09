export const Retailer = (retailer, distributor, nurseries, flowers) => {
    return `
        <section class="retailer">
            <h3>Retailer Name: ${retailer.name}</h3>
            <p>Location: ${retailer.city}, ${retailer.state}</p>
            <p>Distributor: ${distributor.name} in ${distributor.city}, ${distributor.state}</p>
            <p>Distributor's Source Nurseries: ${nurseries.map(nursery => nursery.name).join(", ")}</p>
            <p>Available Flowers: ${flowers.map(flower => flower.commonName).join(", ")}</p> 
    `
}