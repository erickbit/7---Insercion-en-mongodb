var mongoose = require('mongoose');

var schema = require('./squema');

mongoose.connect('mongodb://localhost:27017/insercion_mongo');

var Book = mongoose.model('Book',schema,'books');

var book = new Book({
    title: 'Los 4 Acuerdos',
    author: 'Erick Godinez',
    body: 'Auto Ayuda',
    comments: [{
        body:'Excelente libro',
        date:'2021/05/03'
    }],
    hidden: true,
    meta: {votes:100, favs:100}
});

book.save(function(error) {
    if(error){
        console.log(error);
        process.exit(1);
    } 
    console.log("Guardado con exitosamente");
    //process.exit(0);
 });

 Book.update({_id:'60d1df4096cf4b1114419cbc'}, {$set:{hidden: true}},
function (error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
    //process.exit(0);
});

Book.findOneAndRemove({_id:'60d1df4096cf4b1114419cbc'}, function(error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Se eliminó exitosamente");
    console.log(docs);
    process.exit(0);
});

Book.find({author: "Erick Godinez"}, 
function (error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
console.log("Consulta");
console.log(docs);
process.exit(0);
});