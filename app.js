import path from "path";
import express from "express";
const app = express();
import ejs from "ejs";
import bodyParser from "body-parser";

import sameValuesRouter from "./routes/same_values/same_values_router.js";
import sortingAlgorithmsRouter from "./routes/sorting_algorithms/sorting_algorithms_router.js";
//TODO const sortingRouter = require("./routes/sorting/...");

// TODO app.use(express) etc?

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("calc"));


app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
}));
app.use(bodyParser.json({ limit: "50mb" }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://localhost:9000');
    next();
});

app.get("/", function (req, res) {

    let d = new Date();
    let yearNow = d.getFullYear();

    res.render("index", {
        year: yearNow
    });
});

app.get("/about", function(req, res) {
    res.render("about")
})

app.use(express.json());

app.use("/same_values", sameValuesRouter);

app.use("/sorting_algorithms", sortingAlgorithmsRouter);



// TO DO:
// app.post('/clicked_unsorted_array', bubbleSortController.clickedUnsortedArray);

// app.post('/clicked_sort_array', bubbleSortController.clickedSortArray);

// app.post("/bubble_sort", bubbleSortController.postBubbleSort);

// app.get("/bubble_sort/", bubbleSortController.getBubbleSort);



export default app;





