let distributorNurseries = []

export const useDistributorNurseries = () => distributorNurseries.slice()

export const getDistributorNurseries = () => fetch("http://localhost:3000/distributorNurseries")
    .then(response => response.json())
    .then(parsedDistributorNurseries => distributorNurseries = parsedDistributorNurseries)