console.log("Hello");
const hamIcon = document.querySelector(".drop-down");
const hamBar = document.querySelector(".nav-ham");
const cross = document.querySelector(".ham-cross");

/*
hamIcon.onclick = function(){
  // hamIcon.style.display = "none";
  hamBar.style.display = "block";
}
cross.onclick = function(){
  hamBar.style.display = "none";
  // hamIcon.style.display = "inline-block";
}*/
hamIcon.onclick =  function(){
  document.querySelector('.nav-ham').style.width="45.5vw";
}

cross.onclick = function(){
  document.querySelector('.nav-ham').style.width="0";
}
console.log("above");
