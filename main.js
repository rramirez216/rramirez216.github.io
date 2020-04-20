var bombLocation = Math.ceil(Math.random() * 25);
var treasureLocation = Math.ceil(Math.random() * 25);

var reloadPage = () => {
    location.reload()
}

var table = document.getElementById("table");
var counter = document.getElementById("clickme");
  var count = 10;
table.onclick = function() {
  count -= 1;
  counter.innerHTML = "number of clicks: " + count;
  
  if (count === 0) {
      alert("you lose")
     reloadPage()
  }
  
};



var changeChar = (loc) => {
    if (loc === bombLocation) {
         document.getElementById(loc).innerHTML = "👻";
         alert("you lose! Click restart to play again.")
         
     }
     else if (loc === treasureLocation) {
        document.getElementById(loc).innerHTML = "💎";
        alert("you win")
        reloadPage()
     }
    else {
        document.getElementById(loc).innerHTML = "🏚";
    }
}


