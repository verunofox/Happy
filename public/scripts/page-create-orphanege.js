//create map
const map = L.map("mapid").setView([-23.5124543, -47.4713949], 16);

//create and  add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});
let marker;
//create and add marker
map.on("click", (event) => {
  /* console.log(event)*/
  const lat = event.latlng.lat;
  const lng = event.latlng.lng; /*Estrategia Linear*/

  //submit nos valores
  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  //remove icon
  marker && map.removeLayer(marker); /* se existir apague*/

  // add icon  layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});


//adicionar o campo de fotos

function addPhotoField(){
    //pegar o conteiner de fotos #images
    const conteiner = document.querySelector('#images')

    //pegar c conteiner para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada
    const newFieldContainer=fieldsContainer[fieldsContainer.length -1].cloneNode(true)  /*ultima position -1*/ 

    //verificar se o campo esta vazio se sim nao  adicionar ao container de imagem
    const input = newFieldContainer.children[0]

    if(input.value==""){

        return
    }/* se nao retornar um false ele nao vai executar oque esta abaixo*/

    //limpar conteudo da caixa antes de add no container
   newFieldContainer.children[0].value=""



    //adicionar o clone ao container  de #images
    conteiner.appendChild( newFieldContainer)
}

//deletando conteiner <img 

function deleteField(event){
     const span= event.currentTarget;

     const fieldsContainer = document.querySelectorAll('.new-upload')

     if(fieldsContainer.length<=1){
         //limpar o valor do campo
         span.parentNode.children[0].value=""

         return
     }
    //deletar o campo
    span.parentNode.remove();
   
}


//troca do sim e nao




function toggleSelect(event){
   //pegar o botao clicado
   document.querySelectorAll('.button-select button')

    //retirar a classe active
.forEach((button) =>  button.classList.remove('active'))
   
 //colocar a classe active
 const button = event.currentTarget
 button.classList.add('active')

  

   //atualizao o input com valor selecionado
   const input= document.querySelector('[name="open_on_weekends"]')

  
 //verificar se é sim ou nao
 input.value = button.dataset.value
  
}

/*function validate(event){
  const needsLat = document.querySelector('[name="lat]')
  const needsLng = document.querySelector('[name="lng]')

  if ( (needsLat && needsLng) == "") {
      event.preventDefault()
      alert('Selecione um ponto no mapa')
  }
    
  
}*/
