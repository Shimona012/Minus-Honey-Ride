function level5(){
    console.log("Level 5");
background(mhi);
Minu.setCollider("point",0,0);
strokeWeight(0.9);
stroke("blue");
    fill("blue");
    textSize(20);
    text("Take Minu to his mom!",40,200)
text("Wohoo! Minu did it!,thanks for helping him now lets get him home",40,300);
mm.visible=true;
bbees.visible=false;
bb2.visible=false;
bb3.visible=false;
Minu.scale=0.25;
//bbs honey jar wana put in level 5 so like one corner full flwoer basket other honey and the custom image i made with honey..
bbs.visible=true;
//combG.destroyEach();
bb.x=50;
bb.addAnimation("full",bbb)
bb.changeAnimation("full",bbb)

Minu.addAnimation("athome",minu_home);
Minu.changeAnimation("athome",minu_home);

if(keyDown("RIGHT_ARROW")){
    Minu.x=Minu.x+5;
  }

  if(keyDown("LEFT_ARROW")){
    Minu.x=Minu.x-5;
  }

  if(keyDown("UP_ARROW")){
    Minu.y=Minu.y-5;
  }

  if(keyDown("DOWN_ARROW")){
    Minu.y=Minu.y+5;
  }
if(Minu.isTouching(mm)){
    gameState="level6";
}
//text(mouseX+" "+mouseY,mouseX,mouseY);

}