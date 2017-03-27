import * as express from "express";
import {
    FoodResource
} from "./controller/food";


const app: express.Application = express();
const port: number = process.env.PORT || 3000;

app.use("/api", FoodResource);

app.listen(port, () => {
    console.log("Running at " + port);
});
