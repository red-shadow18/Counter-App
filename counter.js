let count=0
let counter= document.getElementById("counter")
let para= document.getElementById("para")
function increase() {
  count +=1
  counter.innerText=count
}

function reset() {
  para.innerText =para.innerText+  count+ " - "
  counter.innerText=0
  count=0
}
