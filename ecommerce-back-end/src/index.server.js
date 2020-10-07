const express= require('express');
const env=require('dotenv');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app=express();

const userRoutes= require('./routes/user')
env.config();

//mongodb+srv://root:<password>@cluster0.i98tq.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.i98tq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
},
    ).then(()=>{
    console.log('Database Connected')
})

    
app.use(bodyParser());

app.use('/api',userRoutes)
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})