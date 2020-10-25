//====Importando banco de dados sqlite-async===
/*OBS: nao esquecer de baixar a dependencia "npm install sqlite-async"*/
const Database= require('sqlite-async');

// function execute 

function execute(db){
    //criando tabelas se elas nao existirem !
  //  console.log('entrei nessa função')/*Use para testar a função antes de add o bd*/
  return  db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );


    `)
}


//promesa  de abrir o bd + exportação do banco de dados e suas tabelas
module.exports = Database.open(__dirname+'/database.sqlite').then(execute)//=db
