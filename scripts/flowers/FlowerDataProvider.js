let flowers = []

export const useFlowers = () => flowers.slice()

export const getFlowers = () => fetch("http://localhost:3000/flowers")
    .then(response => response.json())
    .then(parsedFlowers => flowers = parsedFlowers)