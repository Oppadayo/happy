const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-lat').dataset.lat
const lon = document.querySelector('span[data-lon]').dataset.lon

const map = L.map('mapid', options).setView([lat,lon], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



L.marker([lat,lon], { icon }).addTo(map)


/* IMAGE GALLERY */

function selectImage(event){
    const button = event.currentTarget

    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    imageContainer.src = image.src

    button.classList.add('active')
}