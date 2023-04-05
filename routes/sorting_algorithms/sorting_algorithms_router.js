import express from "express";

const sortingAlgorithmsRouter = express.Router();

import {
    postBubbleSort,
    getBubbleSort,
    clickedUnsortedArray,
    clickedSortArray,
} from "./sorting_algorithms_controller.js";

sortingAlgorithmsRouter.post("/clicked_sort_array", clickedSortArray);
sortingAlgorithmsRouter.post("/clicked_unsorted_array", clickedUnsortedArray);
sortingAlgorithmsRouter.post("/", postBubbleSort);
sortingAlgorithmsRouter.get("/", getBubbleSort);

export default sortingAlgorithmsRouter; //import in app.js

