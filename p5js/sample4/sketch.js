function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(244, 240, 232);
  stroke(18);
  strokeWeight(2);
  let t = frameCount * 0.02;
  let slowT = frameCount * 0.01;
  let cBlue = color(32, 48, 92);
  let cYellow = color(248, 198, 88);
  let cOrange = color(232, 118, 92);
  let cTeal = color(124, 196, 182);
  let cPink = color(232, 170, 214);
  let cOffWhite = color(244, 240, 232);
  let rectPulse = map(noise(t), 0, 1, 0.98, 1.02);
  push();
  translate(155, 155);
  scale(rectPulse);
  translate(-155, -155);
  fill(cBlue);
  rect(70, 70, 170, 170);
  fill(lerpColor(cYellow, cOrange, map(sin(t), -1, 1, 0, 0.5)));
  rect(70, 70, 85, 85);
  fill(lerpColor(cOrange, cPink, map(cos(t), -1, 1, 0, 0.8)));
  triangle(155, 70, 240, 70, 240, 155);
  fill(cTeal);
  triangle(70, 155, 70, 240, 155, 240);
  let circlePulse = map(noise(t + 50), 0, 1, 0.8, 1.2);
  fill(cOffWhite);
  circle(155, 155, 96 * circlePulse);
  fill(18);
  circle(155, 155, 54 * circlePulse);
  fill(cOffWhite);
  circle(155, 155, 20 * circlePulse);
  pop();
  let blueMove = sin(t * 0.5) * 5;
  fill(96, 150, 230);
  rect(240 + blueMove, 70, 120, 120);
  fill(cOffWhite);
  rect(270 + blueMove, 100, 60, 60);
  let eyeColor = lerpColor(cPink, cOrange, map(sin(t * 2), -1, 1, 0, 1));
  fill(eyeColor);
  circle(300 + blueMove, 130, 24);
  fill(18);
  circle(300 + blueMove, 130, 6);
  let triOffset = cos(t) * 10;
  fill(cOrange);
  rect(360, 70, 90, 120);
  fill(cYellow);
  triangle(450, 70, 450, 190, 510 + triOffset, 130);
  let mintPulse = map(noise(t + 200), 0, 1, 0.7, 1.1);
  fill(cTeal);
  rect(450, 70, 80 * mintPulse, 80 * mintPulse);
  fill(18);
  rect(70, 240, 290, 26);
  fill(96, 150, 230);
  let lowRectW = map(sin(t * 0.7), -1, 1, 80, 140);
  rect(70, 266, lowRectW, 64);
  fill(cOffWhite);
  circle(70 + lowRectW/2, 298, 40);
  fill(lerpColor(cPink, cTeal, map(noise(t), 0, 1, 0, 1)));
  rect(180, 266, 90, 64);
  fill(cYellow);
  let triPointY = map(sin(t * 1.5), -1, 1, 310, 350);
  triangle(270, 266, 360, 266, 315, triPointY);
  fill(cTeal);
  rect(360, 210, 150, 120);
  let circlePulse2 = map(noise(t + 1000), 0, 1, 0.7, 1.3);
  fill(cOffWhite);
  circle(435, 270, 86 * circlePulse2);
  fill(18);
  circle(435, 270, 48 * circlePulse2);
  fill(cOrange);
  circle(435, 270, 18 * circlePulse2);
  fill(cBlue);
  rect(510, 210, 40, 120);
  for(let i = 0; i < 3; i++) {
    let floatY = sin(t * 2 + i) * 15;
    let dotColors = [cYellow, cPink, cOffWhite];
    fill(dotColors[i]);
    circle(530, 230 + (i * 40) + floatY, 22);
    fill(18);
    circle(530, 230 + (i * 40) + floatY, 6);
  }
  fill(cTeal);
  arc(70, 70, 70, 70, 0, HALF_PI);
  fill(cOrange);
  arc(600, 400, 90, 90, PI, PI + HALF_PI);
  fill(cYellow);
  arc(0, 400, 80, 80, PI + HALF_PI, TWO_PI);
  fill(cBlue);
  arc(600, 0, 60, 60, HALF_PI, PI);
  strokeWeight(map(sin(t), -1, 1, 1, 3));
  line(240, 130, 270, 130);
  line(330, 130, 360, 130);
  line(155, 240, 155, 300);
  line(300, 190, 300, 240);
}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('abstract_symphony', 10);
  }
}
