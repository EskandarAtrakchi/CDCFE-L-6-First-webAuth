//function number 1
//start function for browser dectection

function browserDetection() {

  if (navigator.userAgent.indexOf("Chrome") != -1) {
      document.getElementById("browser").innerHTML = "Chrome";
  } else if (navigator.userAgent.indexOf("Opera") != -1) {
      document.getElementById("browser").innerHTML = "OPERA";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      document.getElementById("browser").innerHTML = " FIREFOX";
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
      document.getElementById("browser").innerHTML = "Internet";
  } else {
      document.getElementById("browser").innerHTML = "Unknown";
  }

}

// end function browserDetection

//===================================

//function number 2
//date and time function

function startDate() {

  document.getElementById("date").innerHTML = Date();
  setTimeout(startDate, 1000);
}

//end date and time function

//===================================

//function number 3
//hitCount

function hitCount() {

  if (localStorage.pagecount) {
      localStorage.pagecount = Number(localStorage.pagecount) + 1;
  } else {
      localStorage.pagecount = 1;
  }
  document.getElementById("hits").innerHTML = localStorage.pagecount;

} //end hitCount

//===================================

//function number 4
//function scrollBox

var message = "earn & Build";
i = 0;
direction = 1;
isTyping = true;

function scrollBox() {

  if (isTyping) { //when the condition is true 

      document.getElementById("DynamicText").innerHTML = message.substring(0, i) + "_";

  } else { //otherwise 

      document.getElementById("DynamicText").innerHTML = message.substring(0, i);

  }

  i += direction; //increment 

  if (i > message.length || i < 0) {

      direction *= -1;
      i += direction;
      if (direction == 1) {
          setTimeout("scrollBox()", 2000); //pause time in msI choose 2 seconds 
          return document.getElementById("DynamicText").innerHTML = "_";

      }

  }

  isTyping = !isTyping;
  setTimeout("scrollBox()", 300);

}

//end function scrollBox

//===================================

//function number 5
//function to do nothing to call when we want to stop a specific event listener 

function DoNothing() {}

//===================================

//function number 6
//start function for email validation 

function validateEmail(emailFieldBTN) {

  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(emailFieldBTN.value) == false) {
      alert('Invalid Email Address');
      return false;
  } else {
      alert('Make sure to cover your password');
      return true;
  }
}

//end function emailVerification */ 

//===================================

//function number 7
//function for pop up of the sign up function when the user creates an account

function pasuser(form) {
  if (form.id.value == "Eskandar@gmail.com") {
      if (form.pass.value == "1234") {
          //location="logincorrect.html"
          alert("You have logged in successfully!");
          document.getElementById('id01').style.display = 'none';
          document.getElementById('disableloginbtn').style.display = 'none';
      } else {
          alert("Invalid Password");
      }
  } else {
      alert("Invalid UserID")
  }
}
// end function

//===================================

//function number 8
//start dark mode function

function swapStylesheet(sheet) {
  document.getElementById('swap').setAttribute('href', sheet)
}

//end dark mode function

//===================================

//function number 9
//dynamicFrame function

function dynamicFrame() {

  var frames = window.frames;
  frames[5].location = "https://www.programiz.com/html/online-compiler/";

}

//===================================

//function number 10
//start change buttons name from Full-DEV to refresh

function changeButtonText() {

  document.getElementById('changeName').innerHTML = 'Refresh?';

  document.getElementById("changeName").addEventListener('click', changeButtonText);

}


//end change buttons name

//===================================

// end dynamicFrame

//===================================

//function number 11
//copy-right swap function in the footer html page 

function mouseOver() {

  document.getElementById("myTextCopyright").style.color = "red";

}

// end function

//===================================

//start functions for mouse out 
//function number 12

function mouseOut() {

  document.getElementById("myTextCopyright").style.color = "green";

}

// end function
//end the two functions that related to the copy-right in the footer 

//===================================

//function number 13
//function for canvas been updated 12 times V.12.0 

var img = new Image();
img.src = 'https://cdn.vox-cdn.com/thumbor/MF3OGE87i3w84zd8uixF8XA6_bc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18365342/dnb_land_ocean_ice.2012.3600x1800.0.jpg';
var CanvasXSize = 900;
var CanvasYSize = 900;
var speed = 15; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
  imgW = img.width * scale;
  imgH = img.height * scale;
  if (imgW > CanvasXSize) {
      x = CanvasXSize - imgW;
  } // image larger than canvas
  if (imgW > CanvasXSize) {
      clearX = imgW;
  } // image larger than canvas
  else {
      clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
      clearY = imgH;
  } // image larger than canvas
  else {
      clearY = CanvasYSize;
  }
  //Get Canvas Element
  ctx = document.getElementById('canvas').getContext('2d');
  //Set Refresh Rate
  return setInterval(draw, speed);
}

//start the draw function

function draw() {
  //Clear Canvas
  ctx.clearRect(0, 0, clearX, clearY);
  //If image is <= Canvas Size
  if (imgW <= CanvasXSize) {
      //reset, start from beginning
      if (x > (CanvasXSize)) {
          x = 0;
      }
      //draw aditional image
      if (x > (CanvasXSize - imgW)) {
          ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
      }
  }

  //If image is > Canvas Size
  else {
      //reset, start from beginning
      if (x > (CanvasXSize)) {
          x = CanvasXSize - imgW;
      }
      //draw aditional image
      if (x > (CanvasXSize - imgW)) {
          ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
      }
  }

  //draw image
  ctx.drawImage(img, x, y, imgW, imgH);
  //amount to move
  x += dx;

}

// end function draw
//this function is modified to set the image in the contact us page 

//===================================

//function number 14
//start slidshow function 

function slideShow() {
  var imgs = document.getElementById('slideshow').children;
  interval = 5000;
  currentPic = 0;
  imgs[currentPic].style.webkitAnimation = 'fade ' + interval + 'ms';
  imgs[currentPic].style.animation = 'fade ' + interval + 'ms';
  var infiniteLoop = setInterval(function() {
      imgs[currentPic].removeAttribute('style');
      if (currentPic == imgs.length - 1) {
          currentPic = 0;
      } else {
          currentPic++;
      }
      imgs[currentPic].style.webkitAnimation = 'fade ' + interval + 'ms';
      imgs[currentPic].style.animation = 'fade ' + interval + 'ms';
  }, interval);
}

// end function slideShow
//this function been modified 

//===================================

//function number 15
// this function works in the contact us page when click on the button 

function statusBar() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
      elem.style.display = 'block';
      elem.textContent = width + '%'; // display the current percentage on the progress bar
      if (width >= 101) {
          clearInterval(id);
          elem.style.display = 'none';
          alert('Yay! we recieved your message successfully! we will contact you soon!');
      } else {
          width++;
          elem.style.width = width + '%';
      }
  }
}

//end function 
//this function been modified 

//===================================

//function number 16
//setting and getting cookies all are in contact us page

function writeCookie() {
  if (document.myform.customer.value == "") {
      alert("Enter some value!");
      return;
  }
  cookievalue = escape(document.myform.customer.value) + "";
  document.cookie = "name=" + cookievalue;
  alert("Setting Cookies : " + "name=" + cookievalue);
}

//end function write cookie 

//===================================

//start function get cookie 
//function number 17

function readCookie() {

  document.getElementById("cookie").innerHTML = "Your cookie is " + cookievalue;

}

//end cookie function
//all the cookie functions end here 

//===================================

//function number 18
//script for hiding the header on small devices

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

//end function for hiding the header on small devices

//===================================

//function number 19
//two functions for sticky signup button

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

//function number 20

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//end functions
//two functions for sticky signup button end here 

//===================================

//function number 21
//start API programming languages demand 
//Draw the chart and set the chart values

function drawChart() {
  var data = google.visualization.arrayToDataTable([
      ['Programming Language', 'Demand'],
      ['Java', 8],
      ['Python', 6],
      ['C++', 4],
      ['C#', 3],
      ['JavaScript', 7],
      ['Solidity', 3]
  ]);

  var options = {
      'title': 'Programming Languages Demand Index (2020)',
      'titleTextStyle': {
          'color': '#FF5555'
      },
      'width': 500,
      'height': 500,
      'backgroundColor': 'transparent',
      'legend': {
          'textStyle': {
              'color': '#FF5555'
          }
      }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);

}

//end function for piechart in news page

//===================================

//function number 22
//start function for crypto prices 

/*
function r() {
var e = crCryptocoinPriceWidget.init({
base: "USD,EUR",
items: "GLQ,BTC,ETH,XRP",
backgroundColor: "E0E0D9",
streaming: "1",
rounded: "1",
boxShadow: "9",
border: "5"
});
t.parentNode.insertBefore(e, t)
}
*/

//This function is in the news page between <script> tags to target the r and n elements in the page 

//===================================

//function number 23
//function for drop down for the coding in multiple programming languges 

function FAQ() {

  this.classList.toggle('active');
}

// end function for drop down for the coding in multiple programming languges 

//===================================

//function number 24
//start function to check if the browser is online or offline 

function internetChecker() {

  var x = "Is the browser online? " + navigator.onLine;

  if (navigator.onLine == true) {

      alert('No problem has been detected! refreshing the page might fix the issue!');
  } else {

      alert('You may need internet connection!');

  }
}

//end function to check if the browser is online or offline 

//===================================

//pop-ups functions for iframes used in programming, index, and news pages 

//start solidity pop-up 
//function number 25

function soildityPopup() {

  window.open("https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.8+commit.dddeac2f.js", "Pop-up", "width=1200,height=1000");

}

//end solidity pop-up

//===================================

//start java pop-up fnction
//function number 26

function javaPopup() {

  window.open("https://www.programiz.com/java-programming/online-compiler/", "Pop-up", "width=1200,height=1000");

}

//end java pop-up 

//===================================

//start python pop-up
//function number 27

function pythonPopup() {

  window.open("https://www.programiz.com/python-programming/online-compiler/", "Pop-up", "width=1200,height=1000");

}

//end python pop-up

//===================================

//start C# pop-up
//function number 28

function CsharpPopup() {

  window.open("https://www.programiz.com/csharp-programming/online-compiler/", "Pop-up", "width=1200,height=1000");

}

//end C# pop-up

//===================================

//start SQL function for pop-up
//function number 29

function SQLPopup() {

  window.open("https://www.programiz.com/sql/online-compiler/", "Pop-up", "width=1200,height=1000");

}

//end SQL function for pop-up

//===================================

//start piechart pp-up
//function number 30

function pieChart() {

  window.open("piechart.html", "Pop-up", "width=1200,height=1000");

}

//end piechart pop-up

//===================================

//start live prices function for pop-up
//function number 31

function liveprices() {

  window.open("liveprices.html", "Pop-up", "width=1200,height=1000");

}

//end live prices function for pop-up

//===================================

//start html, css, and javascript compiler online function 
//function number 32

function livecompiler() {

  window.open("live-compiler.html", "Pop-up", "width=1200,height=1000");

}

//end html, css, and javascript compiler online function 

//===================================

//end all pop-up functions here 

//===================================

//start animation for BTNs in the programming class for 3 seconds to check for the internet connection
//function number 33

function animateProgress() {
  messageBTNscheckers.innerHTML = 'We are checking the problem, please wait!';
  // select the progress bar element
  var progressBar = document.querySelector(".progress-bar-Programming");

  // show the progress bar
  progressBar.style.display = "block";
  messageBTNscheckers.style.display = "block";

  // select the progress element
  var progress = document.getElementById("progressProgramming");

  // set the initial percentage
  var percentage = 0;

  // update the percentage and progress bar every 10 milliseconds
  var interval = setInterval(function() {
      percentage += 0.09;
      progress.style.width = percentage + "%";
      messageBTNscheckers.innerHTML = percentage + "% finding solution";

      // stop the interval and call the internetChecker function when the percentage hits 100
      if (percentage >= 50) {
          hidePrograsbar.style.display = "none";
          messageBTNscheckers.style.display = "none";
          clearInterval(interval);
          internetChecker();
      }
  }, 10);

}

//end animation for BTNs in the programming class for 3 seconds to check for the internet connection

//===================================

//start close window function for LiveCompiler
//function number 34

function CloseLiveCompiler() {

  window.close("live-compiler.html");

}

//end close window function for LiveCompiler

//===================================

//function number 35
//start function for live prices 

function CloseLivePrices() {

  window.close("liveprices.html");

}

//end function for live prices

//===================================

//start function for piechart 
//function number 36

function PieChart() {

  window.close("piechart.html");

}

//end function for piechart 

//===================================

//end all closing windows functions here 

//===================================

////function number 37
//start fuction for crypto wallets

function walletGenerator() {
  let Random = Math.floor(Math.random() * qoutes.length);

  qoute.innerText = qoutes[Random].qoute;
  person.innerText = qoutes[Random].person;

}

//This function targets the scripts in the wallet-Generator page to generate wallets
//The completion of the function is in the wallet-Generator page as script tag
//end fuction for crypto wallets

//===================================

//function number 38 
//start function to check forms before any submission

var form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting if any errors
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var errors = [];
  if (!name) {
      errors.push("Name is required");
  }
  if (!email) {
      errors.push("Email is required");
  }
  if (errors.length > 0) {
      alert(errors.join("\n")); // display errors
  } else {
      form.submit(); // submit form if no errors
  }
});

//end function for forms before any submission

//===================================

//end all functions here
