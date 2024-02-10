const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/Fees";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connection Successful");
  }).catch((error)=>{
    console.log(error);
  })
