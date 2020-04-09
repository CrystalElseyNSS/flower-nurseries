let nurseryFlowers = []

export const useNurseryFlowers = () => nurseryFlowers.slice()

export const getNurseryFlowers = () => fetch("http://localhost:3000/nurseryFlowers")
    .then(response => response.json())
    .then(parsedNurseryFlowers => nurseryFlowers = parsedNurseryFlowers)