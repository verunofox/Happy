const options={
    dragging:false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map('mapid',options).setView([lat,lng], 16);

//create and  add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ).addTo(map);

//create icon
const icon= L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2],

})

//create and add marker

L
.marker([lat,lng],{icon})
.addTo(map)

/*image gallery*/
function selecteImage(event){
   const button = event.currentTarget

   //remover todas as classes .active
   const buttons = document.querySelectorAll(".images button")
   //console.log(buttons)
   buttons.forEach(removeActiveClass)

   function removeActiveClass(button){
       button.classList.remove("active")

       
   }


    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer=document.querySelector(".orphanege-details > img")



    // atualizar o conteiner de imagem
    imageContainer.src=image.src

    // adicionar a classe . active para este botao
    button.classList.add('active')
}

