export const Retailer = (retailerObject) => {
    return `
        <section class="retailer">
            <h3>Retailer Name: ${retailerObject.name}</h3>
            <p>Location: ${retailerObject.city}, ${retailerObject.state}</p>
    `
}