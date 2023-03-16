let planetContainer = document.querySelector(".planet-container")

let addPlanetCard = (planet) => {
    let planetCard = document.createElement("li")
    planetCard.className = "planet-card"
    
    let image = document.createElement("img")
    let header = document.createElement("h3")
    let paragraph = document.createElement("p")
    
    image.src = planet.picture
    header.textContent = planet.name
    paragraph.textContent = `${planet.name} is the ${planet.positionFromSun} planet from the Sun. Its year is ${planet.earthDaysInYear} Earth days long.`
    
    planetCard.append(image, header, paragraph)
    
    planetContainer.append(planetCard)
}

planets.forEach(planet => {
    addPlanetCard(planet)
})
