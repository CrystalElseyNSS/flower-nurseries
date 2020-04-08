export const Flower = (flowerObject) => {
    return `
        <section class="flower">
            <h3>Flower Name: ${flowerObject.commonName}</h3>
            <p>Color: ${flowerObject.color}</p>
    `
}