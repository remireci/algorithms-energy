const string_with_commas = require(__dirname + "/calc/string_with_commas.js");
// const two_strings_with_commas = require(__dirname + "/calc/two_strings_with_commas.js");
const insertion_sort = require(__dirname + "/calc/insertion_sort.js");
const unique_values_naive = require(__dirname + "/calc/unique_values_naive.js");
const unique_values_fast = require(__dirname + "/calc/unique_values_fast.js");
// const same_values_naive = require(__dirname + "/calc/same_values_naive.js");
// const same_values_fast = require(__dirname + "/calc/same_values_fast.js");
const anagram = require(__dirname + "/calc/anagram.js");
const sum_zero = require(__dirname + "/calc/sum_zero.js");



const sameValuesController = require("./controllers/same_values_controller.js");

const bubbleSortController = require("./controllers/bubble_sort_controller.js");

// let result2;
// let result3;
// let arrSame1;
// let arrSame2;
// let timeNaive2;
// let timeFast2;
// let sameLength1;
// let sameLength2;
// let timeFastPerc2;
// let timeNaivePerc2;
// let a;
// let calculated = false;
// let clicked = false;
// let test = false;
// let number;



// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// app.use(express.json());

// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));





let resultUVN;
let resultUVF;

let arr1;

let timeNaive;
let timeFast;


let uniqueLength;






// app.get("/partials", function(req, res) {



//   });

// app.get("/footer", function(req, res) {

//   var a = "hello"

//   res.render("footer", 
//     {

//     }
//   );
//  });




app.get("/unique_values", function (req, res) {

  if (test === false) {

    calculated = false;
    res.render("unique_values",
      {
        resulta: "",
        resultb: "",
        arrayA: [],
        length: "0",
        time1: "undefined",
        time2: "undefined",
        html: calculated
      }
    );
  } else {
    test = false;
    res.render("unique_values",


      {
        resulta: resultUVN,
        resultb: resultUVF,
        arrayA: arr1,
        length: uniqueLength,
        time1: timeNaive,
        time2: timeFast,
        html: calculated
      }

    );
  }



});


// bublleSortController.postSameValues 














app.get("/sum_zero", function (req, res) {
  res.sendFile(__dirname + "/sum_zero.html");
});


app.get("/anagram", function (req, res) {
  res.sendFile(__dirname + "/anagram.html");
});


app.post("/unique_values", function (req, res) {


  arr1 = [];

  app.post('/clicked', (req, res) => {
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
  })


  // if (newNumber) {
  //   clicked = true;
  //   number = newNumber;

  // }

  console.log(clicked);

  if (clicked) {
    let stringComma = string_with_commas(number);
    let arrUnsortedA = stringComma.split(",").map(Number);
    arr1 = insertion_sort(arrUnsortedA);
    calculated = true;
    test = true;
    clicked = false;
    number = "";
  } else if (!req.body.array1) {
    console.log("no array");
    arr1 = [];
    calculated = false;
    test = false;
  } else {
    let string1 = (req.body.array1);
    let arrUnsortedB = string1.split(",").map(Number);
    arr1 = insertion_sort(arrUnsortedB);
    calculated = true;
    test = true;
  }

  if (calculated === true) {
    let resultObjectUVN = unique_values_naive(arr1);
    resultUVN = resultObjectUVN.result;
    timeNaive = resultObjectUVN.time;


    let resultObjectUVF = unique_values_fast(arr1);
    resultUVF = resultObjectUVF.result;
    timeFast = resultObjectUVF.time;


  }
  uniqueLength = arr1.length;

  res.redirect("/unique_values/#results")

})






// app.post('/test', (req, res) => {
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


// });



// app.get("/unique_values_result", function(req, res) {
//   res.render("/partials/unique_values_result", 
//     {
//       result: result1,
//       array: arr1,
//       time1: timeNaive,
//       time2: timeFast
//     }
//   );
//  });






// app.get("/unique_values", function(req, res) {
//   res.render("unique_values", {
//     arr: algo1.array,
//     concl: algo1.result
//   })
//  });


//     if (req.body.array2 && req.body.array2) {
//         let string2 = (req.body.array2);
//         let string3 = (req.body.array3);

//         let arr2 = string2.split(" ").map(Number);
//         let arr3 = string3.split(" ").map(Number);

//         let result2 = same_values(arr2, arr3);

//         res.send("These are your arrays ["+ arr2 + "], [" + arr3 + "]. The result of the calculation is " + result2);
//     };    

//     if (req.body.array4 && req.body.array5) {
//         let string4 = (req.body.array4);
//         let string5 = (req.body.array5);

//         let result3 = anagram(string4, string5);

//         res.send(" The result of the calculation is " + result3);
//     };

//     if (req.body.array6) {
//         let string6 = (req.body.array6);
//         let arr6 = string6.split(" ").map(Number);

//         let result4 = sum_zero(arr6);

//         res.send("This is your array ["+ string6 + "]. The result of the calculation is [" + result4 + "]");
//     };

// })
// app.get("/", (req,res) => {

//     let result = algoritm([1, 2, 3, 45, 1, 6])
//     res.render("calculation", {
//         listTitle: result

//     })
//     //res.send("Abhinav")
//     console.log(result);
// })

app.listen(9000, (req, res) => {
  console.log("Server is running on port 9000")
})

