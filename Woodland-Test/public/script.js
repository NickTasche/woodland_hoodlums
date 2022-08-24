const pics = {
 1: "/images/BagBro.jpg",
 2: "/images/FishGuy.jpg",
 3: "/images/PotFoot.jpg",
 4: "/images/HornNose.jpg",
 5: "/images/HalberdGuy.jpg",
 6: "/images/RadishGuy.jpg",
 7:"/images/Elephant.jpg",
 8:"/images/BarrelLady.jpg"
};

const names = {
 1: "Padliest",
 2: "Brontus",
 3: "Gopfrey",
 4: "Leobold",
 5: "Dunstan",
 6: "Severun",
 7: "Bastavius",
 8: "Nosewise",
 9: "Crinklemeyer",
10: "Lopstavian",
11: "Hestivul",
12: "Viola",
13: "Meliora",
14: "Clement",
15: "Gonkust",
16: "Fleabody",
17: "Francois"
};

var picNum = Math.floor(Math.random() * 7) + 1;
var picNum2 = Math.floor(Math.random() * 7) + 1;

var nameNum = Math.floor(Math.random() * 16) + 1;
var nameNum2 = Math.floor(Math.random() * 16) + 1;

const fighter = {
  name: " ",
  roll: 0,
  place: 0,
  pic: pics[picNum],
  hp: 15,
  speed: 15,
  attack: 15
};

const fighter2 = {
  name: names[nameNum2],
  speedRoll: 0,
  place: 0,
  pic: pics[picNum2],
  hp: 15,
  speed: 15,
  attack: 15,
  ac: 15,
  state: 0,
  pname:"#oppName",
  php:"#oppHP",
  pspeed:"#oppSP",
  pattack:"#oppATK",
  pac:"#oppAC",
  img:"box2",
  player: 2
};

const fighter3 = {
  name: names[nameNum],
  speedRoll: 0,
  place: 0,
  pic: pics[picNum],
  hp: 15,
  speed: 15,
  attack: 15,
  ac: 15,
  state: 0,
  pname:"#charName",
  php:"#charHP",
  pspeed:"#charSP",
  pattack:"#charATK",
  pac:"#charAC",
  img:"box",
  player: 1
};


const changeHBtn = document.getElementById(
'changeH').addEventListener("click", function(){
  console.log("Got the button");
  changePic("box",fighter3);

}, false);

const changeCBtn = document.getElementById(
'changeC').addEventListener("click", function(){
  console.log("Got the button");
  changePic("box2",fighter2);

}, false);


const attackBtn = document.getElementById(
'attack').addEventListener("click", function(){
  console.log("Attack Button");
  attack(fighter3,fighter2);
}, false);


const defendBtn = document.getElementById('defend').addEventListener("click", function(){
  console.log("Defend button");
  defend(fighter3,fighter2);
}, false);

var speedRollBtn = document.getElementById('speed').addEventListener("click", aFunction, false);


function changePic(img,char)
{

  picNum2 = Math.floor(Math.random() * 7) + 1;
  char.pic = pics[picNum2];

  document.getElementById(img).style.backgroundImage = 'url('+char.pic+')';
};

function charRoll(char)
{
  console.log("You are CharRolling WHy??");
  char.hp = Math.floor(Math.random() * 12) + 9;
  char.speed = Math.floor(Math.random() * 6) + 9;
  char.attack = Math.floor(Math.random() * 8) + 13;
  char.ac = Math.floor(Math.random() * 9) + 1;

  document.querySelector(char.pname).innerHTML = char.name;
  document.querySelector(char.php).innerHTML = "Health Points: "+ char.hp;
  document.querySelector(char.pspeed).innerHTML = "Speed: "+ char.speed;
  document.querySelector(char.pattack).innerHTML = "Attack: "+ char.attack;
  document.querySelector(char.pac).innerHTML = "Armor Class: "+ char.ac;
  clearBoard();
  speedButnEnable ();
  speedRollButnSet();
  changePic(char.img,char);
  document.querySelector("#prompt").innerHTML = "Click To Roll For Speed Check";
}

function initCharRoll(char,char2)
{
  console.log("You are INYT CharRolling WHy??");
  char.hp = Math.floor(Math.random() * 12) + 9;
  char.speed = Math.floor(Math.random() * 6) + 9;
  char.attack = Math.floor(Math.random() * 8) + 13;
  char.ac = Math.floor(Math.random() * 9) + 1;

  document.querySelector(char.pname).innerHTML = char.name;
  document.querySelector(char.php).innerHTML = "Health Points: "+ char.hp;
  document.querySelector(char.pspeed).innerHTML = "Speed: "+ char.speed;
  document.querySelector(char.pattack).innerHTML = "Attack: "+ char.attack;
  document.querySelector(char.pac).innerHTML = "Armor Class: "+ char.ac;

  char2.hp = Math.floor(Math.random() * 12) + 9;
  char2.speed = Math.floor(Math.random() * 6) + 9;
  char2.attack = Math.floor(Math.random() * 8) + 13;
  char2.ac = Math.floor(Math.random() * 9) + 1;

  document.querySelector(char2.pname).innerHTML = char2.name;
  document.querySelector(char2.php).innerHTML = "Health Points: "+ char2.hp;
  document.querySelector(char2.pspeed).innerHTML = "Speed: "+ char2.speed;
  document.querySelector(char2.pattack).innerHTML = "Attack: "+ char2.attack;
  document.querySelector(char2.pac).innerHTML = "Armor Class: "+ char2.ac;

  changePic(char.img,char);
  changePic(char2.img,char2);
  speedButnEnable ();
  speedRollButnSet();
  clearBoard();
  document.querySelector("#prompt").innerHTML = "Click To Roll For Speed Check";
}

function healthCheck(char,char2)
{
  if (char.hp <= 0 || char2.hp <= 0)
  {
    butnDisable ();
    speedButnEnable ();
    console.log(char.player + " " +char2.player);

    if (char.player === 1 && char.hp <=0){
      speedRollButnChange2();
      document.querySelector("#winResult").innerHTML = char2.name + " Is The Winner!";
      document.querySelector("#prompt").innerHTML = "Click this button to reset";
    }

    else if(char2.player === 1 && char2.hp <=0){
      speedRollButnChange2();
      document.querySelector("#winResult").innerHTML = char.name + " Is The Winner!";
      document.querySelector("#prompt").innerHTML = "Click this button to reset";
    }

    else {
      speedRollButnChange();
      document.querySelector("#winResult").innerHTML = fighter3.name + " Is The Winner!";
      document.querySelector("#prompt").innerHTML = "Click This Button To Move On To Your Next Challenger!";
    }

    return 0;
    }

  else
  {
    speedButnEnable ();
    return 1;
  }

}

function speedRoll (char,char2)
{
  clearBoard();
  var state = healthCheck(fighter3,fighter2);
  var speedRollResult = 0;
  speedButnDisable();
  butnEnable();

  switch (state)
  {
    case 0:

      break;

    case 1:

      char.speedRoll = Math.floor(Math.random() * char.speed) + 1;
      char2.speedRoll = Math.floor(Math.random() * char2.speed) + 1;

      document.querySelector("#speedRoll").innerHTML = "Your Speed This Turn Is: "+ char.speedRoll;
      //document.querySelector("#oppSpeed").innerHTML = "Opp Speed This Turn Is: "+ char2.speedRoll;

      if (char.speedRoll === char2.speedRoll ) {

        speedRollResult = char.speedRoll - char2.speedRoll;
        document.querySelector("#speedDifference").innerHTML = "Speed Difference: "+ speedRollResult

        setAiState (char2.speedRoll,char2,char);

      }

      else if (char.speedRoll < char2.speedRoll) {

        speedRollResult = char2.speedRoll - char.speedRoll;
        document.querySelector("#speedDifference").innerHTML = "Speed Difference: "+ speedRollResult

        setAiState (char2.speedRoll,char2,char);

      }

      else {
        speedRollResult = char.speedRoll - char2.speedRoll;
        document.querySelector("#speedDifference").innerHTML = "Speed Difference: "+ speedRollResult;

        setAiState (char2.speedRoll, char2, char);


      }


      break;

  }

  document.querySelector("#prompt").innerHTML = "Select Attack By Clicking 'A' Or Defend By Clicking 'D'  ";

}

function setAiState (spdRoll,opObj,playObj)
{
  var spdPerc = spdRoll/opObj.speed;
  spdPerc = spdPerc.toFixed(2);

  if (spdPerc <= .33){
  opObj.state = 1;
  }

  else if (spdPerc > .33 && spdPerc <= .66)
  {
    if (opObj.speed < playObj.speed){
    opObj.state = 1;
    }

    else{
    opObj.state = 2;
  }


  }

  else{
  opObj.state = 2;
  }

}


function attack (char,char2){

  butnDisable();
  char.state = 2;

  if (char.speedRoll < char2.speedRoll && char2.state == 2){

  acCheck(char2,char);
  }

  else if (char.speedRoll === char2.speedRoll && char2.state == 2){

  document.querySelector("#prompt").innerHTML = "Your Weapons Clang Off Of Eachother. Click Here To Roll Again.";
  speedButnEnable();
  }

  else {
  acCheck(char,char2);
  }
}

function  acCheck(atkChar,defChar){

  clearSpeedDiff();
  var atkScore = 0;

  atkScore = Math.floor(Math.random() * atkChar.attack) + 1;

  if(defChar.state == 1){

    defChar.ac = defChar.ac + 2;

    if (atkScore <= defChar.ac){
      document.querySelector("#speedRoll").innerHTML = atkChar.name + " Attacks, But Their Attack Is Blocked";

      document.querySelector("#atkResult").innerHTML = atkChar.name +" attacks with "+ atkScore + " ATK vs " + defChar.name + " defending with " + defChar.ac + " AC.";

      document.querySelector("#dmgResult").innerHTML = " ";
    }

    else {
      document.querySelector("#speedRoll").innerHTML = atkChar.name + " Attacks And Their Attack Hits";
      var dmgTotal = atkScore - defChar.ac;

      document.querySelector("#atkResult").innerHTML = atkChar.name +" attacks with "+ atkScore + " ATK vs " + defChar.name + " defending with " + defChar.ac + " AC.\n";

      document.querySelector("#dmgResult").innerHTML = atkChar.name + " does " + dmgTotal + " damage.";

      defChar.hp = defChar.hp - dmgTotal;

      document.querySelector(atkChar.php).innerHTML = atkChar.name + " HP: " + atkChar.hp;
      document.querySelector(defChar.php).innerHTML = defChar.name + " HP: "+ defChar.hp;

    }
    defChar.ac = defChar.ac - 2;
  }


  else{

    if (atkScore <= defChar.ac){
      document.querySelector("#speedRoll").innerHTML = atkChar.name + " Is Faster But Their Attack Misses";

      document.querySelector("#atkResult").innerHTML = atkChar.name +" attacks with "+ atkScore + " ATK vs " + defChar.name + " defending with " + defChar.ac + " AC.";

      document.querySelector("#dmgResult").innerHTML = " ";
    }

    else {
      document.querySelector("#speedRoll").innerHTML = atkChar.name + " Is Faster And Their Attack Hits";

      var dmgTotal = atkScore - defChar.ac;

      document.querySelector("#atkResult").innerHTML = atkChar.name +" attacks with "+ atkScore + " ATK vs " + defChar.name + " defending with " + defChar.ac + " AC.\n";

      document.querySelector("#dmgResult").innerHTML = atkChar.name + " does " + dmgTotal + " damage.";

      defChar.hp = defChar.hp - dmgTotal;

      document.querySelector(atkChar.php).innerHTML = atkChar.name + " HP: " + atkChar.hp;
      document.querySelector(defChar.php).innerHTML = defChar.name + " HP: "+ defChar.hp;

    }

  }
  document.querySelector("#prompt").innerHTML = "Click Here To Roll For Speed Again!";
  healthCheck(atkChar,defChar);

}

function defend(char, char2){

  butnDisable();
  char.state = 1;

  if (char2.state == 2){
      acCheck(char2,char);
  }

  else {
    document.querySelector("#speedRoll").innerHTML = "Both Players Block";
    document.querySelector("#prompt").innerHTML = "Click Here To Roll For Speed Again!";
    speedButnEnable();
    clearSpeedDiff();
  }

}

function clearBoard(){
  document.querySelector("#atkResult").innerHTML = " ";
  document.querySelector("#dmgResult").innerHTML = " ";
  document.querySelector("#prompt").innerHTML = " ";
  document.querySelector("#speedDifference").innerHTML = " ";
  document.querySelector("#speedRoll").innerHTML = " ";
  document.querySelector("#oppSpeed").innerHTML = " ";
  document.querySelector("#winResult").innerHTML = " ";
}

function clearSpeedDiff()
{
  document.querySelector("#speedDifference").innerHTML = " ";

}

function butnDisable ()
{
  document.getElementById("attack").disabled = true;
  //document.getElementById("attack").style.background='#232931';

  document.getElementById("defend").disabled = true;
  //document.getElementById("defend").style.background='#232931';

}

function butnEnable ()
{
  document.getElementById("attack").disabled = false;
  //document.getElementById("attack").style.background='';

  document.getElementById("defend").disabled = false;
  //document.getElementById("defend").style.background='';

}


function speedButnEnable ()
{
  document.getElementById("speed").disabled = false;

}

function speedButnDisable ()
{
  document.getElementById("speed").disabled = true;

}

function aFunction(){

  speedRoll(fighter3,fighter2);
}

function bFunction(){
  charRoll(fighter2);
}

function cFunction(){
  initCharRoll(fighter3,fighter2);
}


function speedRollButnSet()
{
  document.getElementById('speed').removeEventListener("click",bFunction,false);
  document.getElementById('speed').removeEventListener("click",cFunction,false);

  document.getElementById('speed').addEventListener("click", aFunction, false);
  console.log("Got the button Set");
}

function speedRollButnChange()
{
  document.getElementById('speed').removeEventListener("click",aFunction,false);
  document.getElementById('speed').removeEventListener("click",cFunction,false);

  document.getElementById('speed').addEventListener("click",bFunction, false);
  console.log("Got the button Change");
}


  function speedRollButnChange2()
  {
    document.getElementById('speed').removeEventListener("click",aFunction,false);
    document.getElementById('speed').removeEventListener("click",bFunction,false);
    document.getElementById('speed').removeEventListener("click",cFunction,false);

    document.getElementById('speed').addEventListener("click",cFunction, false);
    console.log("Got the button Change 2");
}
