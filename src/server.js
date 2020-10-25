//=====importaçoes=========
const express= require('express');
const path=  require('path');
const pages=  require('./pages.js');

//iniciando bliblioteca express
const server= express()

//=====Servidor=========
server
//=====utilizar body do req
.use(express.urlencoded({extended:true}))

//=====config engine template====
.set('views',path.join(__dirname,"views"))
.set('view engine','hbs')

//=====Usando os arquivos estaticos====
.use(express.static('public'))

//=====Rotas=========
.get('/',pages.index)
.get('/orphanage',pages.orphanage)
.get('/orphanages',pages.orphanages)
.get('/create-orphanage',pages.createOrphanage)

//rota post
.post('/save-orphanage',pages.saveOrphanage)

   



//ligando server
server.listen(5500)
