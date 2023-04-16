import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileUrlToPath } from "url";

//Configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
//Envoke express application to use middleware
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}))
app.use(morgan("common"));
//Sets the maximum body request size to 30mb
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));


//File Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Save user uploaded files to this directory
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        //Store each uploaded file as its original name
        cb(null, file.originalname);
    }
});
const upload = multer({storage});


//Database Setup
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`));