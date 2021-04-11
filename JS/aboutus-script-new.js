// console.log("Hello");
const hamIcon = document.querySelector(".drop-down");
const hamBar = document.querySelector(".nav-ham");
const cross = document.querySelector(".ham-cross");

/*
hamIcon.onclick = function(){
  hamBar.style.display = "block";
}
cross.onclick = function(){
  hamBar.style.display = "none";
}
*/
hamIcon.onclick =  function(){
  document.querySelector('.nav-ham').style.width="45.5vw";
}

cross.onclick = function(){
  document.querySelector('.nav-ham').style.width="0";
}
/*Carousel*/
var carousel1 = document.getElementById('newFtrbtn');
var firstVal1 = 0;
document.getElementById('newFtrbtn1').classList.add("over");
carousel1.addEventListener("click", function(){
  document.getElementById('newFtrbtn1').classList.remove("over");
  if (firstVal1 < 600)
  {
  	firstVal1 +=300;
  	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal1;
    console.log("entered on right click: "+firstVal1);
    // setting about body
    if(firstVal1==0){
      document.getElementById('center-text-h1').innerHTML="ABOUT US";
      document.getElementById('center-text-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also instantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Shoot!";
      // document.getElementById('newFtrbtn').src="./images/Icon awesome-arrow-right-1.png";
    }else if(firstVal1==300){
      document.getElementById('center-text-h1').innerHTML="What you have to do?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
      // document.getElementById('newFtrbtn').src="./images/Icon awesome-arrow-right-1.png";
    }else if(firstVal1==600){
      document.getElementById('center-text-h1').innerHTML="How to Withdraw Your Winnings?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";
      // document.getElementById('newFtrbtn').src="./images/Icon awesome-arrow-right-light.png";
      document.getElementById('newFtrbtn').classList.add("over");
    }

    //setting about body ends
	}
  else {
    // document.getElementById('newFtrbtn').src="./images/Icon awesome-arrow-right-light.png";
	// document.getElementsByClassName('image-center-section ')[0].scrollLeft = 0;
	// firstVal1 = 0;
  // document.getElementById('center-text-h1').innerHTML="ABOUT US";
  // document.getElementById('center-text-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also instantly transfer your winnings to the PayTM Wallet. Get,Set and Shoot!";
  }

});

var carousel1 = document.getElementById('newFtrbtn1');
var firstVal1 = 0;
carousel1.addEventListener("click", function(){
  document.getElementById('newFtrbtn').classList.remove("over");
  if (firstVal1 < 600)
  {
    console.log("entered on left click: "+firstVal1);
  	firstVal1 -=300;//260

  	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal1;
    // setting body starts
    if(firstVal1==0){
      document.getElementById('newFtrbtn1').classList.add("over");
      document.getElementById('center-text-h1').innerHTML="ABOUT US";
      document.getElementById('center-text-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also instantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Shoot!";
    }else if(firstVal1==300){
      document.getElementById('center-text-h1').innerHTML="What you have to do?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
    }else if(firstVal1==600){
      document.getElementById('center-text-h1').innerHTML="How to Withdraw Your Winnings?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";

    }
    // setting body ends
	}
  else{
    console.log("firstVal1: "+firstVal1);
    firstVal1 -=300;
	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal1;//0;
  document.getElementById('center-text-h1').innerHTML="What you have to do?";
  document.getElementById('center-text-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";

	// firstVal1 =0;
  // document.getElementById('center-text-h1').innerHTML="ABOUT US";
  // document.getElementById('center-text-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also instantly transfer your winnings to the PayTM Wallet.Get,Set and Shoot!";
  }

});


// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 760px)');
 
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  console.log('Media Query Matched!,Mobile view entered');
  /*Carousel*/
  var carousel2= document.getElementById('newFtrbtn');
  var firstVal2 = 0;
  document.getElementById('newFtrbtn1').classList.add("over");
  carousel2.addEventListener("click", function(){
  document.getElementById('newFtrbtn1').classList.remove("over");
    if (firstVal2 < 600)
    {
    	firstVal2 +=300;//260
    	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal2;
      console.log("entered on mobile view right click: "+firstVal2);
      // setting about body
      if(firstVal2==0){
        console.log("inside if(firstVal2==0)");
        document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
        document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Shoot!";
      }else if(firstVal2==300){
        console.log("inside if(firstVal2==304)");
        // document.getElementById('center-text-mobile').getElementsByTagName('img')[0].src=img1[1];
        document.getElementById('center-text-mobile-h1').innerHTML="What you have to do?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
      }else if(firstVal2==600){
        console.log("inside if(firstVal2==608)");
        // document.getElementById('center-text-mobile').getElementsByTagName('img')[0].src=img1[2];
        document.getElementById('center-text-mobile-h1').innerHTML="How to Withdraw Your Winnings?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";
        document.getElementById('newFtrbtn').classList.add("over");
      }

      //setting about body ends
  	}
    else {
  	// document.getElementsByClassName('image-center-section ')[0].scrollLeft = 0;
  	// firstVal2 = 0;
    // document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
    // document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.Get,Set and Shoot!";
    }

  });

  var carousel2 = document.getElementById('newFtrbtn1');
  var firstVal2 = 0;
  carousel2.addEventListener("click", function(){
    document.getElementById('newFtrbtn').classList.remove("over");
    if (firstVal2 < 600)
    {

      console.log("entered on left click mobile view: "+firstVal2);
    	firstVal2 -=300;//260
    	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal2;
      // setting body starts
      if(firstVal2==0){
        document.getElementById('newFtrbtn1').classList.add("over");
        document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
        document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Shoot!";
      }else if(firstVal2==300){
        // document.getElementById('center-text-mobile').getElementsByTagName('img')[0].src=img1[1];
        document.getElementById('center-text-mobile-h1').innerHTML="What you have to do?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
      }else if(firstVal2==600){
        // document.getElementById('center-text-mobile').getElementsByTagName('img')[0].src=img1[2];
        document.getElementById('center-text-mobile-h1').innerHTML="How to Withdraw Your Winnings?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";
      }
      // setting body ends
  	}
    else{
    firstVal2 -=300;
  	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal2;//0;
    document.getElementById('center-text-mobile-h1').innerHTML="What you have to do?";
    document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
  	// document.getElementsByClassName('image-center-section ')[0].scrollLeft = 0;
  	// firstVal2 = 0;
    // document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
    // document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.Get,Set and Shoot!";
    }

  });

  /*Caraousel ends*/

}



/*reduce image size in carousel below 415 px*/
// Create a media condition that targets viewports at least 415px wide
const mediaQuery1 = window.matchMedia('(max-width: 415px)');
if (mediaQuery1.matches) {
  console.log('Media Query Matched:415px!,Mobile view entered');
  /*Carousel*/
  document.getElementById('image-center').style.width="223px";
  for(var i=1;i<=3;i++){
    var element="img-feature"+i;
    document.getElementById(element).style.width="218px";/*218*/
    document.getElementById(element).style.height="233px";
  }
  var carousel3= document.getElementById('newFtrbtn');
  var firstVal3 = 0;
  document.getElementById('newFtrbtn1').classList.add("over");
  carousel3.addEventListener("click", function(){
  document.getElementById('newFtrbtn1').classList.remove("over");
    if (firstVal3 < 444)//440
    {
    	firstVal3 +=222;//220
    	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal3;
      console.log("entered on mobile view right click: "+firstVal2);
      // setting about body
      if(firstVal3==0){
        // console.log("inside if(firstVal3==0)");
        document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
        document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Shoot!";
      }else if(firstVal3==222){
        // console.log("inside if(firstVal3==230)");
        document.getElementById('center-text-mobile-h1').innerHTML="What you have to do?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
      }else if(firstVal3==444){
        // console.log("inside if(firstVal3==460)");
        document.getElementById('center-text-mobile-h1').innerHTML="How to Withdraw Your Winnings?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";
        document.getElementById('newFtrbtn').classList.add("over");

      }

      //setting about body ends
  	}
    else {
  	// document.getElementsByClassName('image-center-section ')[0].scrollLeft = 0;
  	// firstVal3 = 0;
    // document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
    // document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.Get,Set and Shoot!";
    }

  });

  var carousel3 = document.getElementById('newFtrbtn1');
  var firstVal3 = 0;
  carousel3.addEventListener("click", function(){
    document.getElementById('newFtrbtn').classList.remove("over");
    if (firstVal3 < 444)
    {
      console.log("entered on left click mobile view: "+firstVal2);
    	firstVal3 -=222;//260
    	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal3;
      // setting body starts
      if(firstVal3==0){
        document.getElementById('newFtrbtn1').classList.add("over");
        document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
        document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Shoot!";
      }else if(firstVal3==222){
        document.getElementById('center-text-mobile-h1').innerHTML="What you have to do?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
      }else if(firstVal3==444){
        document.getElementById('center-text-mobile-h1').innerHTML="How to Withdraw Your Winnings?";
        document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";
      }
      // setting body ends
  	}
    else{
      firstVal3 -=222;
    	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal3;//0;
      document.getElementById('center-text-mobile-h1').innerHTML="What you have to do?";
      document.getElementById('center-text-mobile-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
  	// document.getElementsByClassName('image-center-section ')[0].scrollLeft = 0;
  	// firstVal3 = 0;
    // document.getElementById('center-text-mobile-h1').innerHTML="ABOUT US";
    // document.getElementById('center-text-mobile-body').innerHTML="Aim and shoot objects to collect the points.Get more points than your opponent to win big cash rewards.You can also intsantly transfer your winnings to the PayTM Wallet.Get,Set and Shoot!";
    }

  });

  /*Caraousel ends*/

}
