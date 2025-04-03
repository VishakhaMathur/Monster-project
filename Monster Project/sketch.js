let wingsUp = 140;    // wings of the monster
let flyDirection = 1;
 
let rightLeg = 460;           // right leg of the monster
let walkDirection = 2;

let boatX = 500;   // X-coordinate of the boat
let boatDirection = 1

let waterBalls = [];   // waterballs emitted by the monster

let distance = 250;
let time = 100;



function setup() {
  // create the canvas (800px wide, 800px high)
  createCanvas(windowWidth, windowHeight);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  // strokeWeight(3);
  // rect(0, 0, width, height);
  
  
}

function draw() {
  // your cool monster code goes in this draw function
  
  background(12, 9, 42);
  
  fill(80,140,155);
  
  quad(0, 600, 800, 600, 800, 705, 0, 705);

  // ships
  fill(66,20,20);
  
  quad(boatX, 615, boatX+200, 615, boatX+135, 660, boatX+50, 660);

 

  // Using frameCount for the movement of pebbles.
  let stoneX = 10*sin(frameCount*0.05);

  // Using frameCount for the movement of body of the monster.
  let monsterX = 300*sin(frameCount*0.05);
 

  let legX = 50*sin(frameCount*0.05);



  fill(219,84,10);
  triangle(boatX+140, 615, boatX+60, 615, boatX+70, 550);


  // stones on the sea
  fill(77, 24, 5);
  ellipse(stoneX+50, 650, 40, 20);
  ellipse(stoneX+70, 620, 40, 20);
  ellipse(stoneX+80, 670, 40, 20);
  ellipse(stoneX+100, 640, 40, 20);
  ellipse(stoneX+130, 670, 40, 20);


  // stars
  fill(255,255,255);
  circle(300,50,4);
  circle(700,100,4);
  circle(500,50,4);
  circle(30,300,4);
  circle(220,200,4);
  circle(650,300,4);
  circle(450,400,4);
  circle(150,360,4);
  circle(700,400,4);

  // moon
  fill(246,243,240);
  circle(100,125,130);
  
  // top of the code
  quad(monsterX+365, stoneX+140,monsterX+382,188,monsterX+380,190,monsterX+363,stoneX+142);
  quad(monsterX+433,190,monsterX+458,stoneX+140,monsterX+460,stoneX+142,monsterX+436,190);
  fill(194, 10, 40);
  ellipse(monsterX+365, stoneX+140, 15, 15);
  ellipse(monsterX+458, stoneX+140, 15, 15);
  fill(0);
  ellipse(monsterX+365, stoneX+140, 8, 8);
  ellipse(monsterX+458, stoneX+140, 8, 8);
  
  // head of the monster
  fill(194, 10, 40);
  quad(monsterX+380, 190, monsterX+435, 190, monsterX+440, 220, monsterX+375, 220);
  quad(monsterX+375, 218, monsterX+440, 218, monsterX+435, 248, monsterX+380, 248);
 

  // eyes
  fill(255,255,255);
  ellipse(monsterX+393, 205, 15, 20);
  ellipse(monsterX+420, 205, 15, 20);

  // eyeballs
  fill(0);
  ellipse(monsterX+393, 205, 8, 12);
  ellipse(monsterX+420, 205, 8, 12);

  // mouth
  line(monsterX+385, 232, monsterX+395, 235);
  line(monsterX+395, 235, monsterX+420, 235);
  line(monsterX+420, 235, monsterX+430, 232);

  //teeth
  fill(255);
  triangle(monsterX+395, 235, monsterX+405, 235, monsterX+400, 240);
  
  triangle(monsterX+410, 235, monsterX+420, 235, monsterX+415, 240);

  // middle body
  fill(194, 10, 40);
  quad(monsterX+380, 248, monsterX+435, 248, monsterX+452, 278, monsterX+365, 278);
  rect(monsterX+365, 278, 86, 65);
  // lower body
  quad(monsterX+365, 342, monsterX+451, 342, monsterX+435, 380, monsterX+380, 380);
  quad(monsterX+433, 380, monsterX+438, 380, monsterX+460, stoneX+410, monsterX+455, stoneX+410);
  quad(monsterX+375, 380, monsterX+380, 380, monsterX+358, stoneX+410, monsterX+355, stoneX+410);

  // feet
  fill(172,200,229);
  

  triangle(monsterX+356, stoneX+410, monsterX+355, stoneX+425, monsterX+365, stoneX+425);
  triangle(monsterX+356, stoneX+410, monsterX+350, stoneX+425, monsterX+340, stoneX+425);
  triangle(monsterX+457,stoneX+410, monsterX+449, stoneX+425, monsterX+440, stoneX+425);
  triangle(monsterX+457,stoneX+410, monsterX+452, stoneX+425, monsterX+467, stoneX+425);

// Create circles of water

if (frameCount%10  == 0) {
  releaseWaterBalls(monsterX+365, 342);
  releaseWaterBalls(monsterX+451, 342);
}

// Creating the water circles
for (let i = waterBalls.length -1; i >= 0; i--) {
  waterBalls[i].y += 2;
  fill(80,140,155);
  ellipse(waterBalls[i].x, waterBalls[i].y, 10, 10);
  if (waterBalls[i].y > height) {
    waterBalls.splice(i,1);
  }
}

// Functions that releases water balls
function releaseWaterBalls(x,y) {
  waterBalls.push({x: x, y: y})
}
  

// hands
fill(194, 10, 40);
quad(monsterX+451, 294, monsterX+500, stoneX+274, monsterX+500, stoneX+340, monsterX+451, 320);
quad(monsterX+365, 294, monsterX+314, stoneX+274, monsterX+314, stoneX+340, monsterX+365, 320);





  // boat movement
  boatX += boatDirection;
  if (boatX > 600 || boatX < 300) {
    boatDirection *= -1;
  }


}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "monster.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("monster.png");
  }
}
