navigator.geolocation.getCurrentPosition((position =>{
    const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }


const map = L.map('mapid').setView([pos.lat, pos.lng], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})


let marker;


map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lon = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lon]').value = lon;

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lon], { icon })
    .addTo(map)
})
}))
function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    input.value = ""

    container.appendChild(newFieldContainer)
} 

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();

}


function toggleSelect(event) {

    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active') 
    })
    
    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event) {

    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}

