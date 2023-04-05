import sameValuesNaive from "../../calc/same_values_naive.js";
import sameValuesFast from "../../calc/same_values_fast.js";
import constructTwoStringsWithCommas from "../../calc/two_strings_with_commas.js";


let calculated = false;
let clicked = false;
let test = false;
let number;

let result2;
let result3;
let arrSame1;
let arrSame2;
let timeNaive2;
let timeFast2;
let sameLength1;
let sameLength2;
let timeFastPerc2;
let timeNaivePerc2;
let a;
// let newNumber;





export function postSameValues(req, res, next) {


  arrSame1 = [];
  arrSame2 = [];
  // app.post('/same_values', (req, res) => {
  //   arrSame1 = [];
  //   arrSame2 = [];
  //   calculated = false;
  //   console.log("tested")
  // })
  // clicked = true;


  // app.post('/clicked1', (req, res) => {
  //   //const click = {clickTime: new Date()};
  //   console.log("click1");
  //   clicked = true;
  //   number = 10;

  //   try{
  //     const newNumber = req.body;
  //     console.log(newNumber);
  //   }
  //   catch(err) {
  //     console.log(err)
  //     res.status(500).json({
  //       success: false,
  //       error: "we can't upload the number"
  //     })
  //   }

  // console.log(db);

  // db.collection('clicks').save(click, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log('click added to db');
  //   res.sendStatus(201);
  // });
  // });
  // app.post('/clicked2', (req, res) => {
  //   console.log("click2");
  //   clicked = true;
  //   number = 50000;
  // });

  // app.post('/clicked3', (req, res) => {
  //   console.log("click3");
  //   clicked = true;
  //   number = 1000000;

  // });

  // if (!req.body.array2 && !req.body.array3) {
  //   arrSame1 = null;
  //   arrSame2 = null;
  // }
  // if(req.body.array2) {
  //   clicked = false;
  // }

  // if (newNumber) {
  //   clicked = true;
  //   number = newNumber;
  // }

  console.log("these are the " + req.headers.accept);

  if (clicked) {
    // number = newNumber;
    console.log(number);
    let strArray =  constructTwoStringsWithCommas(number);
    arrSame1 = JSON.parse(strArray[0]);
    arrSame2 = JSON.parse(strArray[1]);
    calculated = true;
    test = true;
    clicked = false;
    //   newNumber = "";


  } else if (!req.body.array1 && !req.body.array2) {
    arrSame1 = [];
    arrSame2 = [];

    calculated = false;
    test = false;
    clicked = false;

    res.status(404).json( {
      error: "Didn't find two valid arrays"
    })

  } else {

    let string2 = (req.body.array1);
    let string3 = (req.body.array2);
     
    if(string2[0] !== "[" || string3[0] !== "[" || string2[string2.length - 1] !== "]" || string3[string3.length - 1] !== "]") {
      
      res.status(404).json( {
        error: "Didn't find two valid arrays."
      })
    };

    arrSame1 = JSON.parse(string2);
    arrSame2 = JSON.parse(string3);
    
    calculated = true;
    test = true;
  }


  sameLength1 = arrSame1.length;
  sameLength2 = arrSame2.length;


  const resultSameVN = sameValuesNaive(arrSame1, arrSame2);

  timeNaive2 = resultSameVN.time;
  result2 = resultSameVN.result;


  const resultSameV = sameValuesFast(arrSame1, arrSame2);

  timeFast2 = resultSameV.time;
  result3 = resultSameV.result;

  // Easiest way to represent the difference in speed?

  if (timeNaive2 < 1 && timeFast2 > 1) timeNaive2 = 1;
  if (timeNaive2 > 1 && timeFast2 < 1) timeFast2 = 1;

  if (timeNaive2 <= 1 && timeFast2 <= 1) {
    timeNaivePerc2 = 100;
    timeFastPerc2 = 100;
    console.log(timeFastPerc2, timeNaivePerc2);
  } else {
    a = timeFast2 + timeNaive2;


    timeNaivePerc2 = (100 - timeNaive2 / a * 100);;
    timeFastPerc2 = (100 - timeFast2 / a * 100);
  }






  // clicked = false;


  // Is there a better way to represent the difference in speed?:

  // let timeSum = timeFast2 + timeNaive2;

  // if (timeSum <= 1000) {
  //   a = timeSum;
  // } else if (timeSum < 5000) {
  //   a = 100;
  // } else if (timeSum < 10000) {
  //   a = 1000;
  // }
  // else {
  //   a = 60000;
  // }

res.redirect("/same_values/#results");


  // const algo1 = {
  //   array: arr1,
  //   result: result1
  // }       
  //  res.send("This is your array ["+ arr1 + "]. The result of the calculation is " + result1);
}





export function getSameValues(req, res) {

  if (test === false) {

    calculated = false;

    res.render("same_values",
      {
        resulta: "",
        time3: "",
        timePerc3: "undefined",
        resultb: "",
        time4: "",
        timePerc4: "undefined",
        arraylengthA: "0",
        arraylengthB: "0",
        html: calculated,
        arrayA: [],
        arrayB: [],
      }
    )
  } else {

    test = false;
    // console.log(newNumber);
    res.render("same_values",
      {
        resulta: result2,
        resultb: result3,
        arrayA: arrSame1,
        arrayB: arrSame2,
        time3: timeNaive2,
        time4: timeFast2,
        arraylengthA: sameLength1,
        arraylengthB: sameLength2,
        timePerc3: timeNaivePerc2,
        timePerc4: timeFastPerc2,
        html: calculated
      });
  }
}


export function clickedArray(req, res) {
  console.log("click00000");
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

