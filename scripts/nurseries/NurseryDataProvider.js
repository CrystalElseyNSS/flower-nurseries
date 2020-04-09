let nurseries = []

export const useNurseries = () => nurseries.slice()

export const getNurseries = () => fetch("http://localhost:3000/nurseries")
    .then(response => response.json())
    .then(parsedNurseries => nurseries = parsedNurseries)