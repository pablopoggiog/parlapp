const mongoose = require('mongoose');
const URI = 'mongodb://pablopoggiog:merecago@pp-shard-00-00-dkxhb.gcp.mongodb.net:27017,pp-shard-00-01-dkxhb.gcp.mongodb.net:27017,pp-shard-00-02-dkxhb.gcp.mongodb.net:27017/parlapp?ssl=true&replicaSet=pp-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(URI, 
    {useUnifiedTopology: true,
     useNewUrlParser: true, 
    useCreateIndex: true });
    
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})
