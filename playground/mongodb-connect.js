const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
       return console.log('unable to connect to mongodb server')
    }
    console.log('connected to mongo db server')
    const db=client.db('TodoApp');
    
// db.collection('Todos').insertOne({
//     text:'something to do',
//     completed:false
// },(err,result)=>{
//     if(err){
//         return console.log('insertion to Todos failed',err)
//     }

//     console.log('successfully inserted',JSON.stringify(result.ops,undefined,2));
// });
db.collection('Users').insertOne({
    name:'abhi',
    age:'27',
    location:'univers'
},(err,result)=>{
    if(err){
        return('failed',err);
    }
    console.log('inserted',result);
})


    client.close();
})