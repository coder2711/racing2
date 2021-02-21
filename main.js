car1_x= 50;
car1_y= 50;

car2_x= 50;
car2_y= 120;

car_height= 50;
car_width= 100;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_img = "car 1.png";
car2_img = "car 2.png";
background_img = "background.jpg";

function add(){
    car1_imgTag= new Image();
    car1_imgTag.onload= upload_car1;
    car1_imgTag.src= car1_img;

    car2_imgTag= new Image();
    car2_imgTag.onload= upload_car2;
    car2_imgTag.src= car2_img;

    background_imgTag= new Image();
    background_imgTag.onload= upload_background;
    background_imgTag.src= background_img;
}

function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car_width, car_height);
 }
 function upload_car2(){
     ctx.drawImage(car2_imgTag, car2_x, car2_y, car_width, car_height);}

 window.addEventListener("keydown", my_keydown);
function my_keydown(e){
   keypressed= e.keyCode;
    console.log(keypressed);
    if(keypressed== '38' ){
      up1();
       console.log("up")
    }
    if(keypressed== '40' ){
       down1();
        console.log("down");
      }
      if(keypressed== '37' ){
        left1();
        console.log("left");
      }
      if(keypressed== '39' ){
        right1();
        console.log("right");
      }

      if(keypressed== '87' ){
        up2();
         console.log("up")
      }
      if(keypressed== '83' ){
          down2();
          console.log("down");
        }
        if(keypressed== '65' ){
          left2();
          console.log("left");
        }
        if(keypressed== '68' ){
          right2();
          console.log("right");
        }
}

function up1(){
    if(car1_y> 0){
      car1_y = car1_y- 10;
      console.log("when up arrow pressed = "+ car1_x + " - " + car1_y)
      upload_background();
      upload_car1();
      upload_car2();
    }
  }
  
  function down1(){
    if(car1_y < 550){
      car1_y= car1_y+ 10;
      console.log("when down arrow pressed = "+ car1_x + " - " + car1_y)
      upload_background();
      upload_car1();
      upload_car2();
    }
  }
  function left1(){
    if( car1_x> 0){
      car1_x = car1_x- 10;
      console.log("when left arrow pressed = "+ car1_x + " - " + car1_y)
      upload_background();
      upload_car1();
      upload_car2();
    }
  }
  
  function right1(){
    if( car1_x< 700){
      car1_x = car1_x+ 10;
      console.log("when right arrow pressed = "+ car1_x + " - " + car1_y)
      upload_background();
      upload_car1();
      upload_car2();
    }
  }

  function up2(){
    if(car2_y> 0){
      car2_y = car2_y- 10;
      console.log("when w pressed = "+ car2_x + " - " + car2_y)
      upload_background();
      upload_car2();
      upload_car1();
    }
  }
  
  function down2(){
    if(car2_y < 550){
      car2_y= car2_y+ 10;
      console.log("when s pressed = "+ car2_x + " - " + car2_y)
      upload_background();
      upload_car2();
      upload_car1();
    }
  }
  function left2(){
    if( car2_x> 0){
      car2_x = car2_x- 10;
      console.log("when a pressed = "+ car2_x + " - " + car2_y)
      upload_background();
      upload_car2();
      upload_car1();
    }
  }
  
  function right2(){
    if( car2_x< 700){
      car2_x = car2_x+ 10;
      console.log("when d pressed = "+ car2_x + " - " + car2_y)
      upload_background();
      upload_car2();
      upload_car1();
    }
  }