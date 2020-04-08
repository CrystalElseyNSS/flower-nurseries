let retailers = []

export const useRetailers = () => retailers.slice()

export const getRetailers = () => fetch("http://localhost:3000/retailers")
    .then(response => response.json())
    .then(parsedRetailers => retailers = parsedRetailers)