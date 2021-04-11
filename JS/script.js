const smallerImgPaytm = document.querySelector(".paytm-change");
const smallerImgMinimum= document.querySelector(".minimum-change");
const biggerImg = document.querySelector("#big-img");
const changeImg = document.querySelector("#text-double");
const changeImgMobile = document.querySelector("#mobile-text-double");
const hamIcon = document.querySelector(".drop-down");
const hamBar = document.querySelector(".nav-ham");
const cross = document.querySelector(".ham-cross");


biggerImg.dataset.change = "./images/double money_text.png";
smallerImgPaytm.dataset.change = "./images/instant paytm_text.png";
smallerImgMinimum.dataset.change = "./images/minimum 10 rs_text.png";


smallerImgPaytm.onclick = function(){
  //change Img
  var mySrc =  biggerImg.src;
  biggerImg.src= smallerImgPaytm.src;
  smallerImgPaytm.src = mySrc;

  //change text on side div
  var temp = smallerImgPaytm.dataset.change;
  changeImg.src = smallerImgPaytm.dataset.change;
  changeImgMobile.src = smallerImgPaytm.dataset.change;
  smallerImgPaytm.dataset.change = biggerImg.dataset.change;
  biggerImg.dataset.change = temp;

  // var tempMob =

}

smallerImgMinimum.onclick = function(){
  //change Img
  var mySrc =  biggerImg.src;
  biggerImg.src= smallerImgMinimum.src;
  smallerImgMinimum.src = mySrc;

  //change text on side div
  var temp = smallerImgMinimum.dataset.change;
  changeImg.src = smallerImgMinimum.dataset.change;
  changeImgMobile.src = smallerImgMinimum.dataset.change;
  smallerImgMinimum.dataset.change = biggerImg.dataset.change;
  biggerImg.dataset.change = temp;

}



var imgs = ['./images/1 image carousel.png', './images/2 image carousel.png', './images/1 image carousel.png'];
var container = document.getElementById('div-img');
console.log("container", container.childNodes);

for (var i = 0, j = imgs.length; i < j; i++) {
   var img = document.createElement('img');
   img.src = imgs[i];
   container.appendChild(img);
}

var container = document.getElementById('div-img');
function scrollWin(x, y) {
  container.scrollBy(x, y);
}

function myFunctionNext() {
  document.querySelector(".icons-prev-next").getElementsByTagName("img")[0].src = "./images/left_dark.png";
  // var container = document.getElementById('div-img');
  // var next=container.firstElementChild;
  // container.appendChild(next);
  scrollWin(360,0);
}


function myFunctionPrev() {
 // var container = document.getElementById('div-img');
 // var prev=container.lastElementChild;
 // container.prepend(prev);
 scrollWin(-360,0);

}
 // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
hamIcon.onclick =  function(){
  // hamBar.style.display = "block";
  document.querySelector('.nav-ham').style.width="45.5vw";
}

cross.onclick = function(){
  // hamBar.style.display = "none";
  document.querySelector('.nav-ham').style.width="0";
}


// Conatct us //
function send_msg() {
  var Name = document.getElementById("user_name").value;
  var Number = document.getElementById("user_num").value;
  var Message = document.getElementById("user_msg").value;
  var Email = document.getElementById("user_email").value;


  var proceed = true;
  if(Name == ""){
    proceed = false;
  }

  if(Number == ""){
    proceed = false;
  }

  if(Message == ""){
    proceed = false;
  }

  if(Email == ""){
    proceed = false;
  }

  if(proceed){

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "https://www.funnearn.com/api/contact-raven", true);

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhttp.send('&type=993&name='+Name+'&message='+Message+'&phone='+Number+ '&email='+Email);


    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 3 && xhttp.status == 200) {

      }
      else if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("send_btn").style.opacity = "50%";
        document.getElementById("user_name").value = "";
        document.getElementById("user_num").value = "";
        document.getElementById("user_msg").value = "";
        document.getElementById("user_email").value = "";
      }

    }
    var x = document.getElementById("snackbar1");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }else{
    var x = document.getElementById("snackbar");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  // alert("check fields");
  }
}
// Contact us //



//Get app link

function getLink() {
var phone = document.getElementById("input_num").value;
console.log(phone);

if (phone) {

var xhttp = new XMLHttpRequest();

xhttp.open("POST", "https://www.funnearn.com/api/lagos/send-downloadable-links", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
xhttp.send("type=993&&phone="+phone);
xhttp.onreadystatechange = function() {
if (xhttp.readyState == 3 && xhttp.status == 200) {}
else if (xhttp.readyState == 4 && xhttp.status == 200) {
document.getElementById("link_btn").style.opacity = "50%";

    }
  }
document.getElementById("input_num").value = "";
  }
  else{
    var x = document.getElementById("snackbar");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}


// Get app link  ends//
// =======
// // Contact us //
//
//
// //Get app link
// function getLink() {
//   var phone = document.getElementById("input_num").value;
//   console.log(phone);
//   if (phone) {
//     var xhttp = new XMLHttpRequest();
//
//     xhttp.open("POST", "https://www.funnearn.com/api/lagos/send-downloadable-links", true);
//
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
//     xhttp.send("type=993&&phone="+phone);
//
//     xhttp.onreadystatechange = function() {
//       if (xhttp.readyState == 3 && xhttp.status == 200) {}
//       else if (xhttp.readyState == 4 && xhttp.status == 200) {
//         document.getElementById("link_btn").style.opacity = "50%";
//       }
//     }
//
//     document.getElementById("input-num").value = "";
//   }
// }
//
// // Get app link //
