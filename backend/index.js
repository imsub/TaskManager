const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
let server;

mongoose.connect(config.mongoose.url,config.mongoose.options).then(()=>{
    console.log("MongoDB connected");
    server = app.listen(config.port,()=>{
        console.log("App is up and running",config.port);
        //console.log(server);
    })
}).catch(error => {
    console.log("Failed to connect to DB",error);
    process.exit(1); // Exit if DB connection fails
});