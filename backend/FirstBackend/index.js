import dotenv from "dotenv";
dotenv.config();


import express from "express";
import authRouter from "./src/routers/auth.route.js";
import publicRouter from "./src/routers/public.route.js";



const app = express();
app.use (express.json())


app.use("//auth", authRouter);
app.use("//public", publicRouter);



// default api

app.use((err, req,res,next) =>{
    const ErrMessage = err.message ||" Internal server Error";
    const ErrstatusCode = err. ErrMessage
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {

    console.log("Dafault Get API Hit")
    res.json({ message: "welcome to my first backend project" })

});

// default error handler
app.use((err, req, res, next) => {
    const ErrMessage = err.message || "Internal Server Error"
    const ErrorStatusCode = err.status

});



app.post("/login", (req, res) => {
res.json({ message: "Login successful" })
})


app.get("/Logout", (req, res) => {
res.json({ message: "Logout successful" })
})


app.post("/Register", (req, res) => {
res.json({ message: "Register successful" })

})


app.put("/Update", (req, res) => {
res.json({ message: "Update successful" })
})



app.delete("/login", (req, res) => {
res.json({ message: "Delete successful" })
})








const Port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server started on port:", port);
});