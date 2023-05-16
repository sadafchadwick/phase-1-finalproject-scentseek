const perfumeCollection = document.querySelector("#perfume-collection")
fetch("http://localhost:3000/perfumes")
  .then((resp) => resp.json())
  .then((perfumes) => {
    renderPerfumes(perfumes) 
  })
  
  function renderPerfumes(perfumes) {
    perfumes.forEach(renderPerfume)
  }
  
  function renderPerfume(perfume) {
    const perfumeCard = document.createElement("div")
    perfumeCard.className = "card"
    const img = document.createElement("img")
    img.src = perfume.image
    img.className = "perfume-image"
    const p = document.createElement("p")
    p.textContent = perfume.brand
    p.className = "perfume-brand"
    const h2 = document.createElement("h2")
    h2.textContent = perfume.name
    h2.className = "perfume-name"
    const button = document.createElement("button")
    button.className = "add-btn"
    button.textContent = "Add to bag - " + perfume.price
  
    perfumeCard.append(img)
    perfumeCard.append(p)
    perfumeCard.append(h2)
    perfumeCard.append(button)
    perfumeCollection.appendChild(perfumeCard)
  }
const form = document.querySelector('#form')
function searchScent(e) {
    e.preventDefault();
    console.log("hello")
}
form.addEventListener('submit', searchScent)


/*const btn = document.querySelector('button')
function addToCart(add) {
    console.log ("Item has been added to your cart!")
}

btn.addEventListener('click', addToCart)

const hover = document.querySelector(//hover over image)
function hoverImg(add) {
    const mainScents = document.querySelector('mainScents')
    console.log ("Core Scent Profile: " + ${mainScents})
    //e.target.mainScents.value??
}

hover.addEventListener('mouseover', hoverImg)*/