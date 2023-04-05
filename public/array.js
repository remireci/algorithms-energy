let viewArray = document.getElementById("view-array");
if (viewArray !== null) {
  let value = viewArray.getAttribute("value");

  if (value === "false") {
    document.getElementById("view-array").hidden = true;

  } else {
    document.getElementById("view-array").hidden = false;
  }
}


function copyArray(id) {
  const array = id.getAttribute("value");
  navigator.clipboard.writeText(array);
}