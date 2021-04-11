// image
var img=['./images/about us.png','./images/what u have to do.png','./images/how to withdraw.png']
// image ends
var carousel1 = document.getElementById('newFtrbtn');
// console.log(carousel1);
var firstVal1 = 0;
var i=1;//image
carousel1.addEventListener("click", function(){
  // document.getElementById('newFtrbtn1').style.pointerEvents="auto";

  if (firstVal1 < 2200)
  {
	// console.log("in function");
	//firstVal1 +=300;
	if(i==img.length){
  	document.getElementById('center-text-img').src=img[i-1];
  	i=0;
  	document.getElementById('newFtrbtn').style.pointerEvents="none";
	}else{
  	firstVal1 +=260;
  	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal1;
  	document.getElementById('center-text-img').src=img[i];
  	i++;

	}

  }

  else{
	document.getElementsByClassName('image-center-section ')[0].scrollLeft = 0;
	firstVal1 = 0;
	document.getElementById('center-text-img').src=img[i];
	i=0;
  }

});

var img1=['./images/how to withdraw.png','./images/what u have to do.png','./images/about us.png']
var carousel1 = document.getElementById('newFtrbtn1');
// console.log(carousel1);
var firstVal1 = 0;var j=1;
carousel1.addEventListener("click", function(){
  // document.getElementById('newFtrbtn').style.pointerEvents="auto";

  if (firstVal1 < 2200)
  {
	// console.log("in function");
	//firstVal1 +=300;
	if(j==img1.length){
  	document.getElementById('center-text-img').src=img1[j-1];
  	i=0;
  	document.getElementById('newFtrbtn1').style.pointerEvents="none";
	}else{
  	firstVal1 -=260;
  	document.getElementsByClassName('image-center-section ')[0].scrollLeft = firstVal1;
  	document.getElementById('center-text-img').src=img1[j];
  	j++;

	}

  }

  else{
	document.getElementsByClassName('image-center-section ')[0].scrollLeft = 0;
	firstVal1 = 0;
	document.getElementById('center-text-img').src=img[j];
	j=0;
  }

});
