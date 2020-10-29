navigator.geolocation.getCurrentPosition((position =>{
    const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }

const map = L.map('mapid').setView([pos.lat, pos.lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lon}){

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)

    L.marker([lat, lon], { icon }).addTo(map)
        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span =>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lon: span.dataset.lon
    }

    addMarker(orphanage)
})
}))