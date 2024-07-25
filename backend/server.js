import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from "./socket/socket.js"
const PORT = process.env.PORT || 5123

dotenv.config()

//MIDDLEWAREMAKE SURE TO HAVE THIS FIRSTTTT
app.use(express.json()) //extracts fields from request body(req.body)  
app.use(cookieParser())

app.use("/api/auth", authRoutes) //auth routes
app.use("/api/messages", messageRoutes) //message routes
app.use("/api/users", userRoutes) //user routes


server.listen(PORT, () => {
    connectToMongoDB()
    console.log("Server running on port 5123")
})

/*
app.get("/", (request, response)=>{
    response.send("hello world")
})
*/
