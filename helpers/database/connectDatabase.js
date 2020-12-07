const mongoose = require('mongoose');


const connectDatabase = () => {

    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useFindandModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
     })
    .then(() => {
        console.log("MongoDB connection Successfull");
    })
    .catch(err => {

    console.error(err);
    })
};

module.exports =connectDatabase;

