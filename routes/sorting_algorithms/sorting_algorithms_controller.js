import bubbleSort from "../../calc/sorting/bubble_sort.js";
import constructArray from "../../calc/sorting/arrayToSort.js";


// const same_values_fast = require("../calc/same_values_fast.js");
// const two_strings_with_commas = require("../calc/two_strings_with_commas.js");

let number;
let test;
let strArray = [];
let timeNaive2;
let timeSorted;
let length;
let calculated;
let clicked = false;
let arraySorted = [];
let arrayUnsorted = []
let string;


export function postBubbleSort(req, res) {
    if (clicked) {

    strArray = arraySort(number);
    
    calculated = true;
    test = true;
    clicked = false;


  } else if (!req.body.array) {
    strArray = [];
    calculated = false;
    test = false;
    clicked = false;

  } else {

    string = (req.body.array);
    strArray = JSON.parse(string);
    calculated = true;
    test = true;
  }
  length = strArray.length;
  //to keep the unsorted version of the array
  arrayUnsorted = JSON.stringify(strArray);
  

  bubbleSort(strArray);

  arrayUnsorted = JSON.parse(arrayUnsorted);
  console.log(arrayUnsorted);
  length = arrayUnsorted.length;


  timeSorted = objectBS.time;
  arraySorted = objectBS.result;
  
  res.redirect("/sorting_algorithms/#array");

}


export function getBubbleSort(req, res) {

  if (test === false) {

    calculated = false;

    res.render("sorting_algorithms",
      {
        resulta: "",
        time: "",
        arraylengthA: "0",
        html: calculated,
        arrayA: [],
        arrayB: [],

      }
    )
  } else {

    test = false;
   
    res.render("sorting_algorithms",
      {
        // resulta: result2,
        // resultb: result3,
        arrayA: arraySorted,
        arrayB: arrayUnsorted,
        time: timeSorted,
        // time4: timeFast2,
        arraylengthA: length,
        // arraylengthB: sameLength2,
        // timePerc3: timeNaivePerc2,
        // timePerc4: timeFastPerc2,
        html: calculated
      });
  }
}

export function clickedUnsortedArray(req, res) {
  
  try {
    number = req.body.value;
    clicked = true;
  }
  catch (err) {
  
    return res.status(500).json({
      success: false,
      error: "we can't upload the number"
    })
  }
  
}

export function clickedSortArray(req, res) {
  try {
    number = req.body.value;
    clicked = true;
  }
  catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      error: "we can't upload the number"
    })
  }
}


export default {
  postBubbleSort,
  getBubbleSort,
  clickedUnsortedArray,
  clickedSortArray
};