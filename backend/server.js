import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const PORT = process.env.PORT || 5123
const app = express();
dotenv.config()

//MIDDLEWARE
app.use(express.json()) //extracts fields from request body(req.body)  MAKE SURE TO HAVE THIS FIRSTTTT
app.use("/api/auth", authRoutes) //auth routes


app.listen(PORT, () => {
    connectToMongoDB()
    console.log("Server running on port 5123")
})

/*
app.get("/", (request, response)=>{
    response.send("hello world")
})
*/
