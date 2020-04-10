export const Flower = (flower, color) => {
    return `
        <section class="flower">
            <h3>Flower Name: ${flower.commonName}</h3>
            <p>Color: ${color.mainColor}</p>
    `
}