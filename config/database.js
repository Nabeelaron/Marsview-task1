const mongoose = require("mongoose");

let url = `mongodb://nabeel:nabeel@localhost:27017/marsview`;
const dbOptions = {
    useNewUrlParser: true,
};

let connect = () => {
    mongoose
        .connect(url, dbOptions)
        .then()
        .catch((err) => {
            console.log("Mongo Error : ", err.name);
        });
};

connect();

mongoose.connection.on("error", (error) => {
    console.log("Connection Error : ", error);
});
mongoose.connection.on("connected", () => {
    console.log("Connected !");
});

mongoose.connection.on("disconnected", () => {
    console.log("Connection disconnected");
    setTimeout(connect, 10000);
});