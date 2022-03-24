import express from "express";
import bodyParser from "body-parser";
import myRouters from "./routes/routes"


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', myRouters)


app.listen(3000);
