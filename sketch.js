let bg,RR;
let y = 0;

var face0=new Image()
face0.src="photo/d1.gif"
var face1=new Image()
face1.src="photo/d2.gif"
var face2=new Image()
face2.src="photo/d3.gif"
var face3=new Image()
face3.src="photo/d4.gif"
var face4=new Image()
face4.src="photo/d5.gif"
var face5=new Image()
face5.src="photo/d6.gif"


function setup() {
  bg = loadImage('photo/monopoly%20map%20design-01.png');
  RR= loadImage('UTSA roadrunner.jpg'); 
  let canvas = createCanvas(850, 800);
  canvas.parent('sketch-container');

  let jumpspace = createA("https://forms.gle/FhkfNdjAGfZp8pkD8",
                       "JumpSpace", "_blank");
  jumpspace.style('font-size', '14px');
  jumpspace.position(460, 30);
  jumpspace.style('font-family', 'Helvetica');
    
  let neoport = createA("https://forms.gle/e4uACpjmgdTbswgc9",
                       "Neoport", "_blank");
  neoport.style('font-size', '14px');
  neoport.position(642, 30);
  neoport.style('font-family', 'Helvetica');  
    
  let novametropolis = createA("https://forms.gle/sDNkPkkZdvWwvAD37",
                       "Nova Metropolis", "_blank");
  novametropolis.style('font-size', '14px');
  novametropolis.position(783, 30);
  novametropolis.style('font-family', 'Helvetica');
    
  let solaria = createA("https://forms.gle/oC8q1zHg5zdMqX1S6",
                       "Solaria", "_blank");
  solaria.style('font-size', '14px');
  solaria.position(978, 30);
  solaria.style('font-family', 'Helvetica');
    
  let virtzone = createA("https://forms.gle/Kxc6WkpFKSuXi1gLA",
                       "VIRTZONE", "_blank");
  virtzone.style('font-size', '14px');
  virtzone.position(1133, 30);
  virtzone.style('font-family', 'Helvetica');
        
  let hyperion = createA("https://forms.gle/13JP7BKmPYGpc1568",
                       "Hyperion", "_blank");
  hyperion.style('font-size', '14px');
  hyperion.position(470, 185);
  hyperion.style('font-family', 'Helvetica');
    
  let aquaflux = createA("https://forms.gle/A79Y6yVTjxJApVCM8",
                       "Aquaflux", "_blank");
  aquaflux.style('font-size', '14px');
  aquaflux.position(1140, 185);
  aquaflux.style('font-family', 'Helvetica');

  let zenithia = createA("https://forms.gle/jPaoQ7VCXfEhnRGw7",
                       "Zenithia", "_blank");
  zenithia.style('font-size', '14px');
  zenithia.position(473, 340);
  zenithia.style('font-family', 'Helvetica');
    
  let biohaven = createA("https://forms.gle/DXmJgiUTdCDjWUEU6",
                       "Biohaven", "_blank");
  biohaven.style('font-size', '14px');
  biohaven.position(1140, 340);
  biohaven.style('font-family', 'Helvetica');
      
  let celestia = createA("https://forms.gle/7sf7AccaoSuv3Hvp8",
                       "Celestia", "_blank");
  celestia.style('font-size', '14px');
  celestia.position(473, 495);
  celestia.style('font-family', 'Helvetica');
    
  let polaris = createA("https://forms.gle/qGtMQ55GYt1sMg7U6",
                       "Polaris", "_blank");
  polaris.style('font-size', '14px');
  polaris.position(1150, 495);
  polaris.style('font-family', 'Helvetica');
    
  let enigmarooms = createA("https://forms.gle/7ERaqe99en7Rqans5",
                       "ENIGMA ROOMS", "_blank");
  enigmarooms.style('font-size', '14px');
  enigmarooms.position(443, 652);
  enigmarooms.style('font-family', 'Helvetica');
    
  let oceania = createA("https://forms.gle/w6VRuYfMNvfLULgg6",
                       "Oceania", "_blank");
  oceania.style('font-size', '14px');
  oceania.position(640, 652);
  oceania.style('font-family', 'Helvetica');  
    
  let synthetica = createA("https://forms.gle/Jim9jWZfhbi9TXhMA",
                       "Synthetica", "_blank");
  synthetica.style('font-size', '14px');
  synthetica.position(800, 652);
  synthetica.style('font-family', 'Helvetica');
    
  let aethervale = createA("https://forms.gle/JaYLvMPbYHt9iAK66",
                       "Aethervale", "_blank");
  aethervale.style('font-size', '14px');
  aethervale.position(964, 652);
  aethervale.style('font-family', 'Helvetica');

}


c=720
d=680

a=780
b=670

function draw(){ 
  background(bg, 500, 500); 
  
  fill(100,200,100);
  circle(c,d,20);
  
  fill(200,50,100);
  square(a,b,20);
 
}


function keyTyped() {
  if (key === 'd' ) {
    c = c + 100;
      clear();
  }
  else if (key === 'a') {
   c = c - 100;
      clear();
  }
  if (key === 'w' ) {
    d= d - 100;
      clear();
  } 
    else if (key === 's') {
    d= d + 100;
      clear();
  }
  if (key === 'i') {
    b = b - 100;
      clear();
  } else if (key === 'k') {
   b = b + 100;
      clear();
  }
  if (key === 'j') {
    a = a - 100;
      clear();
  } else if (key === 'l') {
    a = a + 100;
      clear();
  }

}

