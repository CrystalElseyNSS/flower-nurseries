export const Distributor = (distributorObject) => {
    return `
        <section class="distributor">
            <h3>Distributor Name: ${distributorObject.name}</h3>
            <p>Location: ${distributorObject.city}, ${distributorObject.state}</p>
    `
}