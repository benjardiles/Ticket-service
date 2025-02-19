import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./api/routes/routes";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);


app.listen("7001", () => {
    console.log(`Server running on port 7001`);
})

export default app;