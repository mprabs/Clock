
let w=500;
let h=500;

function setup()
{
	createCanvas(700, 700);
	textFont('arial');
  	textSize(14);
  	angleMode(DEGREES);
}

function hand(s1,s2,l0,l1,rr,ang)
{
	push();
	rotate(ang-90);
	quad(-l0,-s1,l1,-s2,l1,s2,-l0,s1);
	ellipse(0,0,rr+20,rr+20);
	pop();
}

function draw()
{
	background(155);
	let sw=w/40;
	translate(w/1.5,h/1.5);
	let r=w-sw;
	fill(255);
	stroke(0);
	strokeWeight(15);
	ellipse(0,0,r+10,r+10);
	textAlign(CENTER, CENTER);
	textSize(w/24);
  	noStroke();
  	fill(0);
	text('PRABIN',0,-sw*9);
	textSize(w/26); 
	text('Graphics',0, sw*9);
	text('Miniproject',0, sw*10.5); 	 	
	noFill();
	stroke(0);
	strokeCap(SQUARE);
	for (i=0;i<60;i++)
	{
		var x1=cos(i*6-90)*(w/2-sw*1.5);
		var y1=sin(i*6-90)*(w/2-sw*1.5);
		var x2=cos(i*6-90)*(w/2-sw*2.0);
		var y2=sin(i*6-90)*(w/2-sw*2.0);
		if(i%5==0) 
			strokeWeight(sw/2);
		else strokeWeight(sw/6);
		line(x1,y1,x2,y2);
	}
	fill(0);
	noStroke();
	textSize(w/16);
	for (i=0;i<12;i++)
	{
		var x=cos(i*30-60)*(w/2-sw*3.75);
		var y=sin(i*30-60)*(w/2-sw*3.75);
  		text(i+1,x,y);
	}
	var DT = new Date();
    var H = DT.getHours();
    var M = DT.getMinutes();
    var S = DT.getSeconds();
    var Z = DT.getMilliseconds();
    var session = "AM";
    if(H>12) session = "PM";
    H=H%12;
    if(H<10){
    	H="0" + H;
    }
    if(M<10){
    	M="0" + M;
    }
    if(S<10){
    	S="0" + S;
    }
	document.getElementById('time').innerHTML = H+":"+ M +":"+ S + " " + session;
	document.getElementById('day').innerHTML = DT;
	fill(0);
	stroke(50);
	fill(120);
	hand(sw*1,sw*0.5,sw*4,sw*11,sw*1,H*30+M*0.5+S*0.1);
	fill(172);
	hand(sw*1,sw*0.5,sw*4,sw*13.5,sw*1,M*6+S*0.1);
	fill(255);
	stroke(150);
	var tr=map(Z,0,100,0,360);
	var ay=sin(tr)*2/(Z/7);
	hand(sw*0.25,sw*0.1,sw*6,sw*17.5,sw*1,S*6+ay);
}

