const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log('failed to connect',err)
    }
    const db=client.db('TodoApp');
    db.collection('Users').find({
        location:'univers'
    }).toArray().then((docs)=>{
        console.log('docs:',JSON.stringify(docs,undefined,2))
    })
})