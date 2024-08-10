import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from "./socket/socket.js"
import path from "path"
const PORT = process.env.PORT || 5123

const __dirname = path.resolve()

dotenv.config()

//MIDDLEWAREMAKE SURE TO HAVE THIS FIRSTTTT
app.use(express.json()) //extracts fields from request body(req.body)  
app.use(cookieParser())

app.use("/api/auth", authRoutes) //auth routes
app.use("/api/messages", messageRoutes) //message routes
app.use("/api/users", userRoutes) //user routes

app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


server.listen(PORT, () => {
    connectToMongoDB()
    console.log("Server running on port 5123")
})

