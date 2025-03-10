//iportação
const orphanages=require('./database/fakedata.js')
const Database=require('./database/db');
const saveOrphanage=require('./database/saveOrphanage');
//exportção
module.exports ={


    index(req,res){
        
        
         return res.render('index')

    },
   async orphanage(req,res){

       const id =req.query.id
       try {
        const db= await Database;
        const results= await db.all(`SELECT * FROM orphanages WHERE id= "${id}"`)
        const orphanage=results[0]

        orphanage.images= orphanage.images.split(",")
        orphanage.firstImage=orphanage.images[0]
        orphanage.open_on_weekends=="0"?orphanage.open_on_weekends=false :orphanage.open_on_weekends=true;
         

       // console.log(results[0])/*teste de objeto*/ 
       
        return res.render('orphanage',{orphanage})
           
       } catch (error) {
        console.log(error)

        return res.send('Erro no banco de dados')
       }

    },

    async orphanages(req,res){
        //colocar o orphanage pelo banco de dados
        try{
          const db= await Database;
          const orphanages =  await db.all("SELECT * FROM orphanages")
          return res.render('orphanages',{orphanages})

        }catch(error){

            console.log(error)

            return res.send('Erro no banco de dados')
        }
        
    },
    createOrphanage(req,res){
        return res.render('create-orphanage')

    },

   async saveOrphanage(req, res){
        const fields = req.body
        console.log(req.body)

       
        //validar se todos os campos estão vailidados

       // console.log(Object.values(fields).includes('')) /*maneira de descubrir se ha algo no valor que eu nao queira*/

        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos principalmente o mapa')

        }

        try {
        const db= await Database
        await saveOrphanage(db,{
            lat:fields.lat,
            lng:fields.lng,
            name:fields.name,
            about:fields.about,
            whatsapp:fields.whatsapp,
            images:fields.images.toString(),
            instructions:fields.instructions,
            opening_hours:fields.opening_hours,
            open_on_weekends:fields.open_on_weekends,
        })
        // redirecionamento
        return res.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return res.send('Erro NO BANCO DE DADOS')
        }

        //salvar um orfanato
        
    }
}