let img1, img2, img3, img4, img5;
let myButton;
function preload() {
  img1 = loadImage('xingshu.jpeg');
  img2 = loadImage('caoshu.jpeg');
  img3 = loadImage('zhuanti.jpeg');
  img4 = loadImage('lishu.jpg');
  img5 = loadImage('kaishu.jpeg');
  
}

function setup() {
  createCanvas(600, 600);
  background(0)
  // 显示第一张图片
  image(img1, 0, 0, 200, 200);
  
  // 显示第二张图片
  image(img2, width/2, 0, 300, 300);
  
  // 显示第三张图片
  image(img3, 0, 400,200, 200);
  
  // 显示第四张图片
  image(img4, 450, 400, 150, 200);
  
  // 显示第五张图片
  image(img5, 0, 230, 250, 150);
  myButton = createButton('clik me');
  myButton.position(330, 380);
  myButton.mousePressed(goToAnotherPage);
}

  function draw() {
        ellipse(width/2, height/2, 100, 100);
  }

function draw(){
  fill(255);
  textSize(20)
  text("Click the button \nto experience calligraphy",270,330)
 
}



function mouseClicked() {
  // 如果点击第一张图片，则打开链接 https://example.com/image1
  if (mouseX < 200 && mouseY < 200) {
    window.open("https://www.flickr.com/photos/198303167@N02/with/52895797188/");
  }
  
  // 如果点击第二张图片，则打开链接 https://example.com/image2
  if (mouseX > 400 && mouseY < 300) {
    window.open("https://www.flickr.com/photos/198303167@N02/with/52895797188/");
  }
  
  // 如果点击第三张图片，则打开链接 https://example.com/image3
  if (mouseX < 200 && mouseY > 400) {
    window.open("https://www.flickr.com/photos/198303167@N02/with/52895797188/");
  }
  
  // 如果点击第四张图片，则打开链接 https://example.com/image4
  if (mouseX > 450 && mouseY > 400) {
    window.open("https://www.flickr.com/photos/198303167@N02/with/52895797188/");
  } 
    // 如果点击第五张图片，则打开链接 https://example.com/image4
  if ( mouseX < 350 && 370 > mouseY > 220) {
    window.open("https://www.flickr.com/photos/198303167@N02/with/52895797188/");
  }
}
function goToAnotherPage() {
  window.location.href ="https://editor.p5js.org/Bjsuse/full/uTm0zbAnP";
}