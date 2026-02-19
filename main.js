const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port  = 3000;
const machineIP = ""; // inter ip address

const storage = multer.diskStorage({
    destination: "/uploads",
    filename:(req,file, cb) => {
        cb(null, file.originalname);
    }
})
const uploads = multer({storage});
app.use("/files",express.static("uploads"));

app.post("/upload", uploads.single("file",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","upload.html"))
}))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
})
app.listen(port,"0.0.0.0",()=>{
    console.log(`server start on http://${machineIP}:${port}`)
})