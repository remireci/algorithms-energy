// same values page

async function arrayUV(num) {
  const o = { value: num };
  await fetch('/clicked', {
    method: 'POST',
    body: JSON.stringify(o),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      if (response.ok) {

      }
      throw new Error('Request failed.');
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function arraySV(num) {
  const o = { value: num };
  await fetch('/same_values/clicked', {
    method: 'POST',
    body: JSON.stringify(o),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      if (response.ok) {

      }
      throw new Error('Request failed.');
    })
    .catch(function (error) {
      console.log(error);
    });
}


// sorting page

// client puts in own array:

async function getArray() {
  const stringInput = document.getElementById("arrayInput").value;
  const arrInput = JSON.parse(stringInput);
  localStorage.setItem("array", JSON.stringify(arrInput));
  const inputArray = await import('/sorting/arrayToSort.js')
  inputArray.constructArray(0);
}

async function arraySorting(num) {
  const o = { value: num };
  await fetch('/sorting_algorithms/clicked_sort_array', {
    method: 'POST',
    body: JSON.stringify(o),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      if (response.ok) {
      }
      throw new Error('Request failed.');
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function arrayUnsorted(num) {
  const o = { value: num };
  await fetch('/clicked_unsorted_array', {
    method: 'POST',
    body: JSON.stringify(o),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      if (response.ok) {
      }
      throw new Error('Request failed.');
    })
    .catch(function (error) {
      console.log(error);
    });
}


// click the thumbnail to show the algorithm in a pop up

function large(obj) {
  var thumb = document.getElementsByClassName("thumb");
  for (let i = 0; i < thumb.length; i++) {
    thumb[i].removeAttribute("onclick");
  }
  var imgbox = document.getElementById("imgbox");
  imgbox.style.visibility = 'visible';
  var img = document.createElement("img");
  img.setAttribute("id", "example");
  img.src = obj.src;
  imgbox.appendChild(img);
}

//click the pop up to close it

function hide() {
  imgbox.style.visibility = 'hidden';
  document.getElementById("example").remove();
  var thumb = document.getElementsByClassName("thumb");
  for (let i = 0; i < thumb.length; i++) {
    thumb[i].setAttribute("onclick", "large(this)");
  }
};


// index page select right div

function showDiv(id1, id2) {
  const indexDivs = document.getElementsByClassName("index");
  for (let i = 0; i < indexDivs.length; i++) {
    indexDivs[i].style.display = "none";
  }
  const indexMenus = document.getElementsByClassName("menu-item");
  for (let i = 0; i < indexMenus.length; i++) {
    indexMenus[i].style.textDecoration = "none";
  }
  // show corresponding div
  const divToShow = document.getElementById(id1);
  if (divToShow) {
    divToShow.style.display = "block";
  }
  // underline item link
    const menuItem = document.getElementById(id2);
  if (menuItem) {
    menuItem.style.textDecoration = "underline";
  }
}
window.onload = function () {
  showDiv("intro", "menu-intro");
};