const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var bird, slingShot;
var score = 0;
var backgroundIMG;
var bg = "sprites/bg1.png";


function preload(){
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stand1 = new Ground(550,350,280,20);
    stand2 = new Ground(900,220,220,20);

    box1 = new Box1(450,330,30,40);
    box2 = new Box1(480,330,30,40);
    box3 = new Box1(510,330,30,40);
    box4 = new Box1(540,330,30,40);
    box5 = new Box1(570,330,30,40);
    box6 = new Box1(600,330,30,40);
    box7 = new Box1(630,330,30,40);
    box8 = new Box1(660,330,30,40);
    box9 = new Box2(480,290,30,40);
    box10 = new Box2(510,290,30,40);
    box11 = new Box2(540,290,30,40);
    box12 = new Box2(570,290,30,40);
    box13 = new Box2(600,290,30,40);
    box14 = new Box2(630,290,30,40);
    box15 = new Box(510,250,30,40);
    box16 = new Box(540,250,30,40);
    box17 = new Box(570,250,30,40);
    box18 = new Box(600,250,30,40);
    box19 = new Box3(540,210,30,40);
    box20 = new Box3(570,210,30,40);
    box21 = new Box4(555,170,30,40);


    box22 = new Box1(820,200,30,40);
    box23 = new Box1(850,200,30,40);
    box24 = new Box1(880,200,30,40);
    box25 = new Box1(910,200,30,40);
    box26 = new Box1(940,200,30,40);
    box27 = new Box1(970,200,30,40);
    box28 = new Box2(850,160,30,40);
    box29 = new Box2(880,160,30,40);
    box30 = new Box2(910,160,30,40);
    box31 = new Box2(940,160,30,40);
    box32 = new Box(880,120,30,40);
    box33 = new Box(910,120,30,40);
    box34 = new Box3(895,80,30,40);


    
    bird = new Bird(200,150);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:200, y:150});
}

function draw(){
    if(backgroundIMG)
    background(backgroundIMG);

    noStroke();
        textSize(35)
        fill("red")
        text("Score  " + score, width-300, 50)

    Engine.update(engine);
    strokeWeight(4);
    stand1.display();
    stand2.display(); 
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display(); 
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display(); 
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display(); 
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score(); 
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score(); 
    box14.score();
    box15.display();
    box16.display();
    box17.display();
    box18.display(); 
    box15.score();
    box16.score();
    box17.score();
    box18.score(); 
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display(); 
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box19.display();
    box20.score();
    box21.score();
    box22.score();
    box23.score(); 
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.display();
    box33.display();
    box32.score();
    box33.score();
    box34.display();
    box34.score();


    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
  }

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.datetime);
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)

    if(hour>=06 && hour<=19){
        bg = "sprites/day.jpg";
    }
    else{
        bg = "sprites/night.jpg";
    }

    backgroundIMG = loadImage(bg);
    //console.log(backgroundImg);
}
