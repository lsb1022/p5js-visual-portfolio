let shirtColor;
let eyeFollowMode = false;
let smileMode = false;
let hatMode = false;
let timeOfDay = 0; 
let venomMode = false;
let venomProgress = 0; 
function setup() {
  createCanvas(600, 400);
  shirtColor = color(35, 45, 63);
}
function draw() {
  if (timeOfDay === 0) background('#a8c0c5');
  else if (timeOfDay === 1) background('#f08030');
  else background('#102040');
  translate(300, 200); 
  scale(0.55); 
  translate(-384, -380); 
  let showCharacter = (!venomMode || venomProgress <= 95);
  if (showCharacter) {
    strokeWeight(5);
    fill(shirtColor); stroke(0); strokeWeight(2);
    beginShape(); vertex(317, 585); bezierVertex(257, 595, 197, 625, 167, 675);
    vertex(127, 768); vertex(641, 768); vertex(601, 675);
    bezierVertex(571, 625, 511, 595, 451, 585); endShape(CLOSE);
    line(167, 675, 187, 785); line(601, 675, 581, 785);
    fill('#f5c896'); rect(330, 500, 108, 80); arc(384, 585, 135, 90, 0, PI);
    noStroke(); fill('#f5c896'); rect(332, 520, 105, 20);
    drawCurved([[320,520],[320,520],[344,549],[359,561],[389,572],[407,575],[426,575],[436,574],[435,538],[435,538]], false);
    fill('#f5c896'); quad(330, 575, 438, 575, 453, 585, 314, 585);
    stroke(0); strokeWeight(5); line(317, 585, 330, 573); line(451, 585, 438, 573);
    fill(255, 219, 172);
    drawCurved([[280,320],[260,400],[295,500],[384,540],[473,500],[508,400],[488,320],[460,280],[384,260],[308,280],[280,320]], true);
    if (!venomMode || venomProgress < 40) {
      if (smileMode) {
        stroke(0); strokeWeight(5.5); noFill();
        beginShape(); vertex(354, 470); bezierVertex(369, 495, 399, 495, 414, 470); endShape();
      } else {
        stroke(0); strokeWeight(5.5); line(354, 480, 414, 480);
      }
      noFill(); stroke(0); strokeWeight(5);
      beginShape(); vertex(379, 412); bezierVertex(379, 430, 359, 447, 389, 447); endShape();
    }
    if (!venomMode || venomProgress < 30) {
      let lx = 329, rx = 439, ey = 399;
      fill(255); noStroke(); ellipse(lx, ey, 25, 30); ellipse(rx, ey, 25, 30);
      fill(0);
      if (eyeFollowMode) {
        let dx = constrain((mouseX - width/2) / 15, -8, 8);
        let dy = constrain((mouseY - height/2) / 15, -8, 8);
        ellipse(lx + dx, ey + dy, 17, 20); ellipse(rx + dx, ey + dy, 17, 20);
      } else {
        ellipse(lx, ey, 17, 20); ellipse(rx, ey, 17, 20);
      }
      stroke(0); noFill(); strokeWeight(5);
      beginShape(); vertex(310, 395); bezierVertex(317, 380, 339, 375, 346, 395); endShape();
      beginShape(); vertex(422, 395); bezierVertex(429, 375, 451, 380, 458, 395); endShape();
      fill(30, 20, 10); noStroke();
      beginShape(); vertex(296, 362); bezierVertex(299, 345, 329, 347, 359, 357); vertex(354, 356); bezierVertex(344, 369, 319, 356, 299, 363); endShape(CLOSE);
      beginShape(); vertex(472, 362); bezierVertex(469, 345, 439, 347, 409, 357); vertex(414, 356); bezierVertex(424, 369, 449, 356, 469, 363); endShape(CLOSE);
    }
    fill(255, 219, 172); stroke(0); strokeWeight(5);
    beginShape(); vertex(260, 400); bezierVertex(251, 330, 197, 433, 273, 457); endShape(CLOSE);
    beginShape(); vertex(508, 400); bezierVertex(516, 330, 571, 433, 495, 457); endShape(CLOSE);
    strokeWeight(7); stroke(255, 219, 172); line(261, 404, 267, 427); line(507, 404, 501, 427);
    strokeWeight(5); noStroke(); fill(0);
    drawCurved([[244,390],[241,396],[244,421],[258,433]], true);
    drawCurved([[524,390],[527,396],[524,421],[510,433]], true);
    if (!venomMode || venomProgress < 60) {
      strokeWeight(7); stroke(0); noFill();
      ellipse(325, 406, 80, 75); ellipse(444, 406, 80, 75);
      drawCurved([[361,396],[376,385],[388,384],[403,393],[380,385]], true);
      fill(0); noStroke();
      triangle(300,375,274,383,285,386); stroke(0); line(299, 377, 270, 382);
      noStroke(); triangle(467, 375, 498, 383, 481, 386); stroke(0); line(466, 374, 502, 380);
    }
    if (!venomMode || venomProgress < 70) {
      strokeWeight(5); fill('#473b2e'); stroke(0);
      drawCurved([[410,227],[409,225],[380,213],[353,213],[324,220],[288,235],[259,254],[242,282],[267,269],[266,271]], false);
      drawCurved([[408,225],[409,225],[433,220],[479,234],[513,266],[532,305],[536,332],[526,320],[526,320],[526,320],[526,320],[528,348],[524,365],[518,354],[518,354],[513,379],[518,354],[512,379],[509,387],[501,352],[494,349],[488,342],[473,326],[469,319],[457,303],[457,303],[457,318],[457,323],[460,333],[461,344],[450,337],[441,326],[435,317],[431,308],[425,285],[420,303],[412,319],[404,330],[392,342],[396,327],[398,317],[399,305],[393,318],[384,331],[375,341],[367,346],[370,331],[370,319],[373,303],[367,318],[363,328],[347,345],[349,331],[349,316],[350,296],[342,313],[335,327],[316,346],[321,323],[325,304],[317,318],[304,337],[288,353],[291,341],[292,326],[279,353],[285,343],[270,361],[260,389],[253,377],[253,381],[250,370],[250,362],[246,369],[244,376],[238,364],[236,351],[236,338],[239,326],[241,323],[232,334],[226,341],[226,325],[231,310],[237,294],[245,281],[266,268],[266,268]], false);
      fill('#5f4d3c'); stroke('#5f4d3c');
      drawCurved([[290,266],[290,266],[273,289],[289,286],[297,277],[292,290],[313,282],[313,282],[298,282],[299,274],[286,287],[291,263],[291,263]], false);
      fill('#393125'); stroke('#393125');
      drawCurved([[490,247],[490,247],[514,279],[530,317],[485,265],[514,279],[523,312],[519,349],[485,292],[500,285],[500,285],[514,345],[510,368],[502,344],[495,344],[483,320],[498,328],[498,328]], false);
    }
    if ((!venomMode || venomProgress < 20) && hatMode) {
      fill(50); stroke(0); strokeWeight(5);
      ellipse(384, 250, 280, 60);
      arc(384, 250, 200, 150, PI, TWO_PI);
      stroke(200, 0, 0); strokeWeight(15); noFill();
      arc(384, 250, 180, 130, PI+0.2, TWO_PI-0.2);
    }
  }
  if (venomMode) { if (venomProgress < 100) venomProgress += 1.5; } 
  else { if (venomProgress > 0) venomProgress -= 5; }
  if (venomProgress > 0) {
    let alpha = map(venomProgress, 0, 100, 50, 255);
    if (!venomMode) alpha = map(venomProgress, 0, 100, 50, 230);
    noStroke(); fill(10, 10, 10, alpha);
    drawCurved([[383,541],[434,528],[466,512],[485,489],[500,447],[515,389],[522,353],[520,323],[510,293],[489,259],[459,234],[429,219],[405,212],[385,210],[351,214],[317,226],[291,243],[267,267],[251,296],[240,326],[240,348],[245,377],[253,414],[267,461],[277,488],[280,497],[295,511],[323,526],[352,536],[381,541]], true);
    if (venomProgress > 85 && venomMode) {
      let bodyAlpha = map(venomProgress, 85, 100, 0, 255);
      fill(20, 20, 25, bodyAlpha);
      drawCurved([[331,528],[195,525],[114,548],[64,591],[24,730],[100,780],[383,800],[666,780],[742,730],[702,591],[630,548],[540,525],[470,528],[435,528],[383,510],[331,528],[331,528]], true);
    }
    if (venomProgress > 50 && venomMode) {
      if (venomProgress < 90) {
        push(); blendMode(OVERLAY);
        let faceOpacity = map(venomProgress, 50, 90, 255, 0);
        fill(255, 219, 172, faceOpacity * 0.3);
        drawCurved([[331,528],[195,525],[114,548],[64,591],[38,669],[24,681],[40,750],[60,800],[180,850],[383,870],[586,850],[706,800],[726,750],[742,681],[728,669],[702,591],[652,548],[571,525],[435,528],[435,528],[383,510],[331,528],[331,528]], true);
        pop();
      }
      fill(255); strokeWeight(3); stroke(60);
      drawCurved([[367,387],[362,379],[353,372],[346,363],[341,349],[332,341],[323,336],[316,338],[306,334],[295,322],[293,320],[282,331],[271,320],[267,307],[267,285],[259,294],[254,308],[254,330],[249,335],[254,349],[253,370],[259,379],[260,390],[272,399],[281,407],[281,418],[286,421],[296,416],[304,414],[314,418],[321,421],[337,415],[350,415],[361,394],[367,387]], false);
      drawCurved([[395,387],[400,379],[409,372],[416,363],[421,349],[430,341],[439,336],[446,338],[456,334],[467,322],[469,320],[480,331],[491,320],[495,307],[495,285],[503,294],[508,308],[508,330],[513,335],[508,349],[509,370],[503,379],[502,390],[490,399],[481,407],[481,418],[476,421],[466,416],[458,414],[448,418],[441,421],[425,415],[412,415],[401,394],[395,387]], false);
    }
    if (venomProgress > 70 && venomMode) {
      fill('#6d3038'); noStroke();
      drawCurved([[284,433],[305,446],[321,451],[338,452],[361,449],[378,448],[397,449],[424,453],[446,449],[463,441],[476,432],[479,441],[479,452],[476,467],[467,484],[460,495],[446,507],[429,519],[412,526],[396,530],[385,533],[365,530],[346,525],[327,517],[315,508],[302,497],[293,485],[287,470],[283,459],[283,441],[285,433],[286,432],[297,441],[313,448]], false);
      strokeWeight(3); stroke('#2e2e2e'); fill('#2e2e2e');
      line(345,339,371,361); line(371,361,372,350); line(390,352, 389,361); line(389, 361, 416,339);
    }
  }
}
function drawCurved(pts, isClosed) {
  beginShape();
  for (let p of pts) curveVertex(p[0], p[1]);
  isClosed ? endShape(CLOSE) : endShape();
}
function mousePressed() {
  if (venomMode && venomProgress >= 30) return;
  let mapX = (mouseX - width / 2) / 0.55 + 384;
  let mapY = (mouseY - height / 2) / 0.55 + 380;
  let dLeft = dist(mapX, mapY, 329, 399);
  let dRight = dist(mapX, mapY, 439, 399);
  if (dLeft < 20 || dRight < 20) { eyeFollowMode = !eyeFollowMode; }
}
function keyPressed() {
  if (key === 'r' || key === 'R') shirtColor = color(220, 30, 30);
  else if (key === 'g' || key === 'G') shirtColor = color(30, 180, 30);
  else if (key === 'b' || key === 'B') shirtColor = color(30, 30, 220);
  else if (key === 's' || key === 'S') smileMode = !smileMode;
  else if (key === 'h' || key === 'H') hatMode = !hatMode;
  else if (key === 't' || key === 'T') timeOfDay = (timeOfDay + 1) % 3;
  else if (key === 'v' || key === 'V') { venomMode = !venomMode; if (venomMode) venomProgress = 0; }
  else if (key === 'l' || key === 'L') saveGif('ANTASS3', 10);
  else if (key === 'd' || key === 'D') shirtColor = color(35, 45, 63);
}
