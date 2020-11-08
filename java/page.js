function ToggleCat() {
  var ct = document.getElementById("sidebar");
    if (ct.className === "navi") {
    ct.className += " responsive";
  } else {
    ct.className = "navi";
  }
}

function collapse() {
  var ct = document.getElementById("sidebar");
    if (ct.className === "navi") {
    ct.className -= " responsive";
  } else {
    ct.className = "navi";
  }
}

function fam() {
  var j;
  var z = document.getElementById("selection");
  var f = document.getElementsByClassName("family");
  var s = document.getElementsByClassName("strategy");
  var g = document.getElementsByClassName("gb");
  if (z.classname === "family"){
    z[5].style.display = "block";
    z[6].style.display = "block";
  }
  else {
    z[1].style.display = "none";
    z[2].style.display = "none";
    z[3].style.display = "none";
    z[4].style.display = "none";
  }
  }
