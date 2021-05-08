var dog, happyDog,database, foodS, foodStock, database
function preload()
{
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250);
  dog.scale=0.5;
dog.addImage(dogImage);

foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  //dog.changeImage(happyDogImage);
  dog.addImage(happyDogImage);
}
  drawSprites();
  //add styles here
textSize(10);
fill("red");
stroke("black");
text("Note:UP_ARROW Key To Feed The Dog",240,100);
text("food:"+foodS,300,150);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0; 
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
