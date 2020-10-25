//importando db 
const Database =require('./db');
const saveOrphanage=require('./saveOrphanage');

    Database.then(async db => {
        
        //incerir dados na tabela
     /*  await saveOrphanage(db,{
            lat:"-23.510545",
            lng: "-47.4735776",
            name: "casa das meninas",
            about:"Presta assistência a crinaças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
            whatsapp: "5515212265",
            images:[
                
             "https://scontent.fsod3-1.fna.fbcdn.net/v/t1.0-9/36925720_2277911479015887_5608425727419482112_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=m1qk7wjaJzEAX9txlWA&_nc_ht=scontent.fsod3-1.fna&oh=8b8837495ff96a597e4ecd18df3eab93&oe=5FB0610E",
              
              "https://scontent.fsod3-1.fna.fbcdn.net/v/t1.0-9/51902598_2440620366078330_1481375018284744704_o.jpg?_nc_cat=103&_nc_sid=cdbe9c&_nc_ohc=NHj9xlCwWYQAX-QZVxc&_nc_ht=scontent.fsod3-1.fna&oh=7663f8249d579b1fbe02573314ee8242&oe=5FB133C3"
     
            ].toString(),
     
            instructions : "Venha quando sentir vontade e traga muito amor e paciência para dar",
            opening_hours: "Horário de visita Das 18h até 8h",
            open_on_weekends:"1"
     
           
        })*/
        
    


        //consultando dados na tabela all
     const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
       console.log(selectedOrphanages)
     //consulta via ID
    // const orphanage= await db.all('SELECT * FROM orphanages WHERE id= "3"')
    // console.log(orphanage)
     

     //deletando dados da tabela
      //console.log( await db.run('DELETE FROM orphanages WHERE id="6"'))
    })


    