let colors = []

export const useColors = () => colors.slice()

export const getColors = () => fetch("http://localhost:3000/colors")
    .then(response => response.json())
    .then(parsedColors => colors = parsedColors)