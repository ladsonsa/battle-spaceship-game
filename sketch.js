var tela, time, temSeg, temMin, timeDan, timeBon;
var posPerX, posPerY, perDan;
var posObsX=[], posObsY=[], velObs=[], quantObs, contObs;
var vidas, score, powerUp, nivel, proteção, tempo;
var posBonX=[], posBonY=[], velBon=[], tamBon=[], quantBon, contBon, contBonTem;
var estX=[], estY=[], estVel=[], estTam=[], quantEst, contEstr;
var ship=[], posShip, naveDan, planeta=[],contPlanet;
var protecao=[], ativPro, ativBotPro, repetPro;
var tiroX=[], tiroY=[], tiro,temTiro, ativTiro;
var kill=[];
var pause, temPause;
var backG=[], contBackG, ativBackG;
var ativText, exibText, contText;
var ImagInicio, inicioX, inicioY, contInicio, start;
var shield=[], contShield;
var rodBon, ativBon, contBon; 
var life=[], contLife;
var ativaTiroDual, tiroDualX=[], tiroDualY=[];
var explosao=[], idExplosao=[], exploX, exploY, contExplo;
var credito, contCredi, creditoL;
var posBombX,posBombY,bombVel,rodBomb, bombAtiv;
var power=[], contPower=0;
var contTela;
var timetest, temCont, temCont2
var somLaser, somExplod, somIntro, somCredito, semEnter, somEspecial, somPowerup;
var somOver, somVida, somProteção, somGame=[], contSom, somBomba;
var controlVol
var piscEstr;
var pontosXP; 
var contBomb, tamBomb;
var inimigo, boss;
var inimigo0;
var especial;
var dificul, contDificul;

function preload(){
  ImagInicio=loadImage('imagens/inicio.png');
  inimigo=loadImage('imagens/inimigo1.png');
  inimigo0=loadImage('imagens/inimigo0.png');
  boss=loadImage('imagens/boss.png');
  naveDan=loadImage('imagens/shipT01.png');
  for(i=0;i<5;i++){
    planeta[i]=loadImage('imagens/planeta/planet-'+i+'.png');
  }
  for(i=0;i<10;i++){
    protecao[i]=loadImage('imagens/protecao/protecao'+i+'.png') 
  }
  for(i=0;i<10;i++){
    shield[i]=loadImage('imagens/shield/protecao'+i+'.png') 
  }
  for(i=-5;i<6;i++){
    ship[i]=loadImage('imagens/ship/ship'+i+'.png');
  }
  for(i=0;i<15;i++){
    explosao[i]=loadImage('imagens/explosao/explosao'+i+'.png');
  }
  for(i=0;i<4;i++){
    backG[i]=loadImage('imagens/background/backG'+i+'.jpg')
  }
  for(i=0;i<9;i++){
    life[i]=loadImage('imagens/life1/life'+i+'.png')
  }
  for(i=0;i<7;i++){
    power[i]=loadImage('imagens/power/power'+i+'.png')
  }
 
  soundFormats('mp3', 'ogg', 'wav');
  somLaser=loadSound('sons/laser9.mp3')
  somExplod=loadSound('sons/explodemini.wav')
  somIntro=loadSound('sons/introduçãotest.mp3')
  somCredito=loadSound('sons/credito.ogg')
  somEnter=loadSound('sons/enter.mp3')
  somOver=loadSound('sons/gameover.mp3')
  somEspecial=loadSound('sons/especial.ogg')
  somPowerup=loadSound('sons/powerUp.mp3')
  somVida=loadSound('sons/vida.ogg')
  somProteção=loadSound('sons/proteção.ogg')
  somBomba=loadSound('sons/bomba.ogg')
  for(i=0;i<4;i++){
    somGame[i]=loadSound('sons/gamesom/game'+i+'.mp3')
  }  
}

function setup()
{
  createCanvas(640, 480);
  frameRate(24);
  credito=createVideo(['video/arnold.mp4','video/arnold.ogv', 'video/arnold.webm']);
  credito.hide();
  credito.volume(0.6);
  frameRate();
  somLaser.setVolume(0.5);
  somExplod.setVolume(0.4);
  somIntro.setVolume(1);
  somCredito.setVolume(1);
  somEnter.setVolume(0.8)
  somOver.setVolume(1);
  somEspecial.setVolume(0.5);
  somPowerup.setVolume(0.5);
  somVida.setVolume(0.5);
  somProteção.setVolume(0.5);
  somBomba.setVolume(0.5);
  for(i=0;i<4;i++)
  {
    somGame[i].setVolume(0.8);
  } 
  reset();
  tela=1;
  somGame[contSom].stop();
}

function reset()
{
  tela=3; time=0; temSeg=0; temMin=0; timeDan=0; timeBon=0;
  pause=true; temPause=false; contBackG=255; ativBackG=true;
  ativText=false; exibText=false; contText=0;
  posPerX=width/2; posPerY=height;
  posShip=0; repetPro=0;
  vidas=3; score=0; powerUp=0;
  nivel=1; proteção=1; tempo=0;
  ativBotPro=true; ativPro=true;
  inicioX=0.1; inicioY=0.1; contInicio=0;
  start=false; contShield=0; contLife=0;
  ativaTiroDual=false; exploX=0; exploY=0;
  contExplo=0; contCredi=0;
  creditoL=false; contPower=0;
  contPlanet=0; contTela=0;
  timetest=0; temCont=false; temCont2=true;
  contSom=0; controlVol=0; piscEstr=0;
  pontosXP=500;
  contBomb=0; tamBomb=25; boss=0;
  especial=1;
  dificul=0; contDificul=0;
  quantObs=20;
  for(i=0;i<quantObs;i++)
  {
    posObsX[i]=random(30,width-30);
    posObsY[i]=random(-height*2,-height*3);
    velObs[i]=random(3,6);
  }
  contObs=4; contObsTem=0 
  quantBon=4;
  for(i=0;i<quantBon;i++)
  {
    posBonX[i]=random(20, width-20);
    posBonY[i]=-height;
    velBon[i]=random(2,4);
    tamBon[i]=70;
  }
  ativBon=true; rodBon=false; perDan=true; perBon=0; contBon=0;
  contEstr=0
  quantEst=50;
  for(i=0;i<quantEst;i++){        //posição inicial das estrelas
    estX[i]=random(width-3);
    estY[i]=random(height,-height/2);
    estVel[i]=random(1,4);
    estTam[i]=random(0.1,4);
    if(i==39){                    //planeta
      estY[39]=-height*3;
      estX[39]=random(80,width-80);
    }
  } 
  
  for(i=0;i<15;i++){
    tiroX[i]=0
    tiroY[i]=-height
    tiroDualX[i]=0
    tiroDualY[i]=-height    
  }
  ativTiro=true; temTiro=0; tiro=0; 
  posBombX=0; posBombY=0; bombVel=0; 
  rodBomb=false; bombAtiv=true; 
  
  for(i=0;i<20;i++){
    kill[i]=0
  }

  for(i=0;i<20;i++){
    idExplosao[i]=0
  }
  contSom=int(random(0,4))
  somGame[contSom].play()
}

function draw()
{
  if(tela==1)
  {
    if(contBackG==255)
    {
      somIntro.play()
    }
    imageMode(CENTER)
    image(backG[0],width/2,height/2,width,height)
    background(0,contBackG);
    if(ativText)
    {
      textStyle(BOLD)
      strokeWeight(5)
      stroke(123,40,222);
      fill('#FFFFFF');
      textSize(38);
      textAlign(CENTER)
      textFont('dyuthi')
      text("Battle Spaceship da (De)PrEsSãO", width/2,height/2.2);
      noStroke()
      textSize(12);
      text('Creditos ("C")',width/1.1,height-20)
      textStyle(NORMAL)
      if(exibText)
      {
        textStyle(ITALIC)
        textSize(25);
        fill(255,255,255);
        stroke('#4179E8');
        text("Pressione ENTER para iniciar a bagaça", width/2,height/1.8);
        textStyle(NORMAL)
      }
      contText++
      if(contText>18)
      {
        contText=0
        if(!exibText)
        {
          exibText=true;
        }
        else
        {
          exibText=false
        }
      }
      if(keyIsDown(ENTER))
      { 
        somEnter.play()
        contTela=1
        ativText=false
      }
      if(keyIsDown(67) && tela==1)
      {
        tela=1.1
        contText=0
        contBackG=255
        somEnter.play()
      }
    }
    if(contBackG<120 && contTela!=1)
    {
      contBackG=120
      ativText=true     
    }
    if(contTela==1)
    {
      contBackG+=5
      if(contBackG>254)
      {
        tela=2
      }
    }
    else
    {
      contBackG-=3
    }
  }
  if(tela==1.1)
  {
    imageMode(CENTER)
    image(backG[1],width/2,height/2,width,height)
    image(credito,width/2,height/2,width/1.3,height/1.3)
    background(0,contBackG)
    contBackG-=12
    contCredi++
    if(contCredi==25)
    {
      somIntro.stop();
      credito.play();
    }
    if(contCredi==230)
    {
      credito.stop();
      somCredito.loop()
      tela=1.2
    }
  }
  if(tela==1.2)
  {
    background(0)
    image(backG[1],width/2,height/2,width,height)
    textAlign(CENTER)
    strokeWeight(3)
    fill(0)
    stroke(0)
    rectMode(CENTER)
    rect(width/2,height/2,width/1.3,height/1.3)
    fill(255,255,255)
    textSize(35)
    textFont('dyuthi')
    textStyle(BOLD)
    text('Agradecimento especial:',width/2,height/3.2)
    textStyle(NORMAL) 
    textSize(21)
    text('Gabriel Felipe Brandão',width/2,height/2.7)
    text('Adrian Gabriel Freire',width/2,height/2.35)
    text('Ariane de Paula Freire',width/2,height/2.1)
    textSize(15)
    text('Precione para retornar',width/2,height/1.2)
    if(keyIsDown(ENTER))
    {
      somCredito.stop()
      somEnter.play()
      tela=1
      contBackG=255
      contCredi=0
      ativText=false
    }  
  }
 
  if(tela==2)
  {
    imageMode(CENTER)
    image(backG[3],width/2,height/2,width,height)
    textStyle(BOLDITALIC)
    strokeWeight(1)
    stroke(255)
    textSize(25);
    text("ENTER novamente", width/2,height/1.05);
    textStyle(NORMAL)
    background(0,contBackG)
    if(contTela==0)
    {
      contBackG+=10
      if(contBackG>254)
      {
        tela=3;
        controlVol=0.6
      }
    }
    else
    {
      contBackG-=8
      contTela++
    }
    if(keyIsDown(ENTER) && contTela>10)
    {
      somEnter.play()
      contTela=0
    }
  }

  if(tela==3 || tela==4)
  {
    background(0);   
    for(i=0;i<quantEst;i++)
    {
      strokeWeight(1);
      fill(255,255,255);
      stroke(255,255,255);
      rect(estX[i],estY[i],estTam[i]+piscEstr,estTam[i]+piscEstr,estTam[i]);
      if(i==39)
      {
        imageMode(CENTER)
        image(planeta[contPlanet],estX[i],estY[i],500,500);
      }
    }
    contEstr++
    if(contEstr>99)
    {
      for(i=0;i<quantEst;i++)
      {       
        estY[i]=estY[i]+estVel[i];
        if(i!==39 && estY[i]>height+40)
        {
          estX[i]=random(width-4);
          estY[i]=-random(height/3);
          estVel[i]=random(1+nivel/3,4+nivel/3);
        }
        if(estY[39]>height*2+300)
        {
          estY[39]=-height*3+300;
          estX[39]=random(80,width-80);
          contPlanet++
          if(contPlanet>4)
          {
            contPlanet=0
          }
        }        
        if(i==39)
        {
          estVel[39]=0.3+nivel/50
          estY[39]+=estVel[39]
        }
      }
      contEstr=99
    }
    if(contEstr%5==0)
    {
      if(piscEstr==0.7){
        piscEstr=0
      }
      else
      {
        piscEstr=0.7
      }
    }
  }
 
  if(tela==3)
  {
    somIntro.setVolume(controlVol)
    imageMode(CENTER)
    image(ImagInicio,width/2,(height/2)+contInicio,width,height)
    image(ship[0],posPerX,posPerY,inicioX,inicioY);
    background(0,contBackG);
    if(start)
    {
      inicioX+=1.1
      inicioY+=1.54      
      posPerY-=2.1
    }
    if(inicioX>40)
    {
      start=false
      contInicio+=1.6 
      if(posPerY>height/1.8)
      {
        posPerY-=1.1
      }
    }
    if(contInicio>236)
    {
      tela=4
    }
    contBackG-=4
    if(contBackG<1)
    {
      if(inicioX<40)
      {
        start=true
      }
      contBackg=0
    }
    controlVol-=0.0036
    if(controlVol<0.01 && controlVol>0.009)
    {
      somIntro.stop()
      contSom=int(random(0,4))
      somGame[contSom].play()
    }
  }

  if(tela==4)
  {
    if(keyIsDown(65) && posPerX>20)
    {
      posPerX-=7+powerUp;
      frameRate(35);
      if(posShip>-5){
        posShip--
        frameRate();
      }
    }
    if(posPerX<20)
    {
      posPerX=20
    }
    if(keyIsDown(68) && posPerX<width-20)
    {
      posPerX+=7+powerUp;
      frameRate(35);
      if(posShip<5)
      {
        posShip++
        frameRate();
      }
    }
    if(posPerX>width-20)
    {
      posPerX=width-20
    }
    if(keyIsDown(87) && posPerY>30)
    {
      posPerY-=5+powerUp;
    }
    if(posPerY<30)
    {
      posPerY=30
    }
    if(keyIsDown(83) && posPerY<height-30)
    {
      posPerY+=int(6+powerUp);
    }
    if(posPerY>height-30)
    {
      posPerY=height-30
    } 
    if(!keyIsDown(68) && !keyIsDown(65))
    {
      frameRate(35);
      if(posShip>-1)
      {
        posShip--
      }
      if(posShip<1)
      {
        posShip++
      }
      frameRate();
    }
    if(keyIsDown(40) && proteção>0 && ativBotPro)
    {
      ativBotPro=false
      ativPro=false;
      timeDan=time+500;
      proteção-=1;
    }
    
/*------------------------------------------------------------------------*/   
    
    if(keyIsDown(38) && ativTiro)
    {
      somLaser.playMode('sustain')
      somLaser.play()
      ativTiro=false
      if(ativaTiroDual)
      {
        tiroX[tiro]=posPerX-15
        tiroY[tiro]=posPerY-15
        tiroDualX[tiro]=posPerX+15
        tiroDualY[tiro]=posPerY-15
        somLaser.play(0.2)
      }
      else
      {
        tiroX[tiro]=posPerX
        tiroY[tiro]=posPerY-30
      }
      tiro++
      if(tiro>15)
      {        
        tiro=0
      }
    }
    for(i=0;i<15;i++)
    {
      if(tiroY[i]==-height && tiroDualY[i]==-height)
      {
        //faz nada
      }
      else
      {
        tiroY[i]-=6+(powerUp/4)
        tiroDualY[i]-=6+(powerUp/4)        
      }
      if(tiroY[i]<0)
      {
        tiroX[i]=0
        tiroY[i]=-height       
      }
      if(tiroDualY[i]<0)
      {
        tiroDualX[i]=0
        tiroDualY[i]=-height
      }
    }
    for(i=0;i<15;i++)
    {
      fill(255,255,255)
      noStroke()
      imageMode(CENTER)
      ellipse(tiroX[i],tiroY[i],5,13);
      ellipse(tiroDualX[i],tiroDualY[i],5,13)
      stroke(255)
    }
    temTiro++
    if(temTiro>7-(powerUp/5))
    {
      ativTiro=true
      temTiro=0
    }
  
    if(keyIsDown(32) && especial>0 && bombAtiv)
    {
      bombAtiv=false
      posBombX=posPerX
      posBombY=posPerY
      rodBomb=true
      especial--
      somBomba.play()
    }
    if(rodBomb)
    {
      bombVel+=10
      strokeWeight(5)
      noFill()
      stroke(255,255,255)
      ellipseMode(CENTER)
      ellipse(posBombX,posBombY,bombVel,bombVel);
      strokeWeight(1)
      fill(255)
      if(bombVel>width+height+300)
      {
        rodBomb=false
        bombAtiv=true
        bombVel=0
        posBombX=width+200
        posBombY=height+200
      }
    }
  
    quantObs=nivel+2+dificul/2;
    if(quantObs==contObs)
    {
      for(i=quantObs;i<quantObs+1;i++)
      {
        posObsX[i]=random(30,width-30);
        posObsY[i]=random(-height,-height*2);
        velObs[i]=random(2+nivel,6+nivel);
        contObs++
      }
    }
    for(i=0;i<quantObs;i++)
    {
      imageMode(CENTER);
      if(i%10==0 && i!==0)
      {
        image(boss,posObsX[i],posObsY[i],57,77)
      }
      else
      {
        if(i%3==0 && i!==0 || i%5==0 && i!==0)
        {
          image(inimigo0,posObsX[i],posObsY[i],40,40)
        }
        else
        {
          image(inimigo,posObsX[i],posObsY[i],40,60)
        }  
      }
      for(ii=0;ii<quantObs;ii++)
      {
        if(rodBomb && posObsX[ii]>0 && posObsX[ii]<width && posObsY[ii]>0 && posObsY[ii]<height)
        {
          if(int(dist(posBombX,posBombY,posObsX[i],posObsY[i]))<bombVel-150)
          {
            score+=11
            idExplosao[i]=1
            kill[i]=0
            exploX=posObsX[i]+8
            exploY=posObsY[i]+30
            posObsX[i]=width+500
            posObsY[i]=height+500
            somExplod.rate(0.8)
            somExplod.playMode('sustain')
            somExplod.play()
          }
        }
      } 
      for(ii=0;ii<tiro;ii++)
      {
        if(posObsX[i]>0 && posObsX[i]<width && posObsY[i]>0 && posObsY[i]<height)
        {
          if(int(dist(tiroX[ii],tiroY[ii],posObsX[i],posObsY[i]))<(28))
          {
            if(i%10==0 && i!==0)
            {
              kill[i]+=1+powerUp/6+dificul/3
            }
            else
            {
              if(i%3==0 && i!==0 || i%5==0 && i!==0)
              {
                kill[i]+=3+powerUp/2
              }
              else
              {
                kill[i]+=2+powerUp/3
              }
              tiroY[ii]=-10
            }
          }
          if(int(dist(tiroDualX[ii],tiroDualY[ii],posObsX[i],posObsY[i]))<28)
          {
            if(i%10==0 && i!==0)
            {
              kill[i]+=1+powerUp/6+dificul/3
            }
            else
            {
              if(i%3==0 && i!==0 || i%5==0 && i!==0)
              {
                kill[i]+=3+powerUp/2
              }
              else
              {
                kill[i]+=2+powerUp/3
              }
              tiroDualY[ii]=-5
            }
          }
        }   
      }
      if(kill[i]>8+int(nivel/4)+dificul)
      {
        exploX=posObsX[i]+8
        exploY=posObsY[i]+30
        score+=23
        kill[i]=0
        posObsY[i]=height+50
        contDificul++
        idExplosao[i]=1
        somExplod.rate(0.8)
        somExplod.playMode('sustain')
        somExplod.play()
        somExplod.play(0.1)
      }
      if(idExplosao[i]==1)
      {
        imageMode(CENTER);
        image(explosao[contExplo],exploX,exploY,95,100)
        image(explosao[contExplo],exploX-8,exploY-25,45,50)
        contExplo++
        if(contExplo>14)
        {
          contExplo=0
          idExplosao[i]=0
        }
      }

      if(int(dist(posPerX,posPerY,posObsX[i],posObsY[i]))<(40) && perDan && ativPro)
      {
        perDan=false;
        ativaTiroDual=false
        vidas--
        powerUp=0+int(nivel/4);
        timeDan=time+60;
        if(vidas==0)
        {
          somGame[contSom].stop()
          tela=5;
          contBackG=0
          somOver.loop(0.5)
        }
      }   
    }
    for(i=0;i<quantObs;i++)
    {
      posObsY[i]=posObsY[i]+velObs[i];
      if(posObsY[i]>=height+80)
      {
        posObsX[i]=random(30,width-30);
        posObsY[i]=random(-height*2,-height*3);
        velObs[i]=random(2+nivel/3+dificul,6+nivel/3);
        kill[i]=0
      }
    }
    
/*------------------------------------------------------------------------*/     
    
    if(perDan)
    {
      imageMode(CENTER);
      image(ship[posShip],posPerX, posPerY,40,60);
      if(!ativPro)
      {
        imageMode(CENTER)
        image(protecao[repetPro],posPerX,posPerY,65,90)
        repetPro++
        if(repetPro>9)
        {
          repetPro=0
        }
        if(timeDan==time)
        {
          ativPro=true;
          ativBotPro=true
        }
      }
    }
    else
    {
      imageMode(CENTER);
      image(naveDan,posPerX, posPerY, 40, 60);
      if(timeDan==time)
      {
        perDan=true;
      }
    }

/*------------------------------------------------------------------------*/

    if(time%600==0 && time>10 && ativBon)
    {
      ativBon=false
      rodBon=true
      for(i=0;i<quantBon;i++)
      {          
        posBonX[i]=random(20,width-20);
        posBonY[i]=random(-100,-height*3)
        velBon[i]=random(3,6);
      }   
    }
    if(rodBon)
    {
      for(i=0;i<quantBon;i++)
      {
        imageMode(CENTER)
        image(life[contLife],posBonX[0],posBonY[0],30,40);
        image(power[contPower],posBonX[1],posBonY[1],30,40);
        image(shield[contShield],posBonX[2],posBonY[2],30,40);
        noFill()
        stroke(255);
        strokeWeight(4);
        ellipseMode(CENTER);
        ellipse(posBonX[3],posBonY[3],tamBomb,tamBomb)
        fill(255)
        strokeWeight(2)
        textSize(15)
        textAlign(CENTER)
        text('B',posBonX[3],posBonY[3]+2)
        for(ii=0;ii<quantBon;ii++)
        {
          if(int(dist(posPerX,posPerY,posBonX[ii],posBonY[ii]))<40)
          {      
            if(ii==0 && vidas!=10)
            {
              somVida.play()
              vidas++
            }
            if(ii==1)
            {
              somPowerup.play()
              powerUp++
              if(powerUp>5)
              {
                ativaTiroDual=true
              }
            }
            if(ii==2 && proteção!=3)
            {
              somProteção.play()
              proteção++
            }
            if(ii==3 && especial!=3)
            {
              somEspecial.play()
              especial++
            }
            posBonY[ii]=height+50;            
          }
        }
      }
      for(i=0;i<quantBon;i++)
      {
        if(posBonY[i]<height+50)
        {
          posBonY[i]=posBonY[i] + velBon[i];
        }   
        if(posBonY[i]>=height+50 && posBonY[i]<height+60)
        {
          contBon++
          posBonY[i]=height+70
          if(contBon==4)
          {
            ativBon=true;
            contBon=0;
            rodBon=false;
          }
        } 
      }
      contPower++
      if(contPower==7)
      {
        contPower=0
      }
      contLife++
      if(contLife==9)
      {
        contLife=0
      }
      contShield++
      if(contShield==10)
      {
        contShield=0
      }
      contBomb++
      if(contBomb>10)
      {
        contBomb=0
        if(tamBomb==25)
        {
        tamBomb=40
        }
        else
        {
          tamBomb=25
        }
      }
    }       

    tempo=temMin+":"+temSeg;
    temSeg=int(millis()/1000)-timetest
    if(temSeg>60 && temCont2 && temSeg!=0)
    {
      temCont2=false
      timetest+=60
      temMin++
    }
    if(temSeg>2)
    {
      temCont2=true
    }
    if(contDificul>10)
    {
      dificul+=1
      contDificul=0
    }
    if(pontosXP<time)
    {
      nivel++
      pontosXP+=pontosXP-(50+nivel*2)
    }
    time++
    
/*------------------------------------------------------------------------*/
    
    if(!pause)
    {
      noStroke()
      textSize(40)
      fill(255,255,255)
      textAlign(CENTER,CENTER)
      text("Pausado",width/2,height/2)
    }
    
/*------------------------------------------------------------------------*/
    
    textAlign(LEFT,CENTER)
    strokeWeight(1)
    textSize(16);
    fill('#FF0601');
    stroke('#FF0601');
    text("Vidas: "+vidas, width/42, height/18);
    fill(255,255,255);
    stroke(255,255,255); 
    text("Score: "+score, width/42, height/11);
    text("Nivel: "+nivel, width/1.13, height/1.05);
    text("Tempo", width/1.13, height/18);
    text(tempo, width/1.10, height/11);
    textSize(18); 
    stroke('#28FF81');
    fill('#28FF81');
    text("Power UP: "+powerUp, width/42,  height/1.08);
    text("Proteção: "+proteção, width/42, height/1.04);
    text("Especial: "+especial, width/42, height/1.13);
    fill(255,255,255);
    stroke(100,100,100);
    if(somGame[contSom].isPaused())
    {
      if(tela==4)
      {
        contSom=int(random(0,4))
        somGame[contSom].play()
      }
    }
  }

  if(tela==5)
  {
    background(0);
    image(ship[posShip],posPerX, posPerY,40,60);
    background(255,(contBackG));
    contBackG+=1.3
    if(contBackG>254)
    {
      tela=5.1
      contBackG=255
    }
  }
  if(tela==5.1)
  {
    contBackG-=1
    background(0);
    imageMode(CENTER)
    image(backG[2],width/2,height/2,width,height)    
    background(255,contBackG);
    if(contBackG<50)
    {
      textStyle(BOLD)
      textAlign(CENTER)
      stroke(0);
      fill(255,255,255);
      textSize(55);
      text("PERDEU Mané!", width/2, height/4.5);
    }
    if(contBackG<25)
    {
      textSize(30);
      text("Ate minha avó joga melhor kKkK", width/2, height/1.35);
      fill(255,255,255);
      textSize(25);
      text('SCORE total: '+score, width/2, height/1.2)
      text("Pressione ENTER para tentar novamente",width/2,height/1.05);      
    }
    if(keyIsDown(ENTER))
    {
      somOver.stop()
      reset()
    }
  }
}

function keyPressed()
{ 
  if(keyCode==27 && pause)
  {
    noLoop();
    pause=false
  }
  else
  {
    loop()
    pause=true
  }
}
