let distributors = []

export const useDistributors = () => distributors.slice()

export const getDistributors = () => fetch("http://localhost:3000/distributors")
    .then(response => response.json())
    .then(parsedDistributors => distributors = parsedDistributors)