const { default: mongoose, Schema } = require("mongoose")


const userDetailsSchema = new Schema(
    {
        fname: String,
        lname: String,
        email: {type:String, unique:true},
        password: String,
        // cpassword: String
    },
    {
        collection:"UserInfo",
    }
);

mongoose.model("UserInfo", userDetailsSchema);
