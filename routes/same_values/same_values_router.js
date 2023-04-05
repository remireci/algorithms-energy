import express from "express";

import {
    clickedArray,
    postSameValues,
    getSameValues
} from "./same_values_controller.js";

const sameValuesRouter = express.Router();


//paths relative to the router ("same_values")!
sameValuesRouter.post("/clicked", clickedArray);
sameValuesRouter.post("/", postSameValues);
sameValuesRouter.get("/", getSameValues);

export default sameValuesRouter; //import in app.js