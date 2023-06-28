let value = 2;
let size = 50;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let rectangle = [];
var currentList = new Set();
var frontierList=[];
var visitedList = new Set();
const solution = new Map();
var prevousIndex;
var prevousColor;
var prevousRowIndex;
var prevousColIndex ;
var col;
var row;
var indexRow;
var indexCol;
 let interval =0;
 let check = 0;
 let minutesInterval =0;
 let hourInterval =0;
var TableData = new Array();
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
 let copyRectangle;


function shaffleOnet(){

  let random ;
   var temp;
   let tempXPoint;
   let tempYPoint;
   let tempColor;
   let tempX;
   let tempY;
   let randomXPoint;
   let randomYPoint;
   let randomColor;
   let randomX;
   let randomY;

  for (let index = rectangle.length-1; index > 0; index--) {
    let random = Math.floor(Math.random() * (index + 1) );
     temp = rectangle[index];
     tempXPoint = rectangle[index].xPoint;
     tempYPoint = rectangle[index].yPoint;
     tempColor = rectangle[index].color;
     tempX = rectangle[index].x;
     tempY = rectangle[index].y;

     rectangle[index] = rectangle[random];


     randomXPoint = rectangle[random].xPoint;
     randomYPoint = rectangle[random].yPoint;
     randomColor = rectangle[random].color;
     randomX = rectangle[random].x;
     randomY = rectangle[random].y;
    rectangle[random] = temp;



    rectangle[index] =  new Rectangle(randomXPoint, randomYPoint , rectangle[random].width, rectangle[random].height, tempColor,-999,-1,randomX,randomY);
    rectangle[random] =  new Rectangle(tempXPoint, tempYPoint, rectangle[random].width, rectangle[random].height, randomColor,-999,-1,tempX,tempY);

       if(rectangle[index]!=0){
        rectangle[index].drawRectangle(ctx);
       }
      if(rectangle[index]==0){
        rectangle[index].updateDrawRectangle(ctx);
       }

       if(rectangle[random]!=0){
        rectangle[random].drawRectangle(ctx);
       }
      if(rectangle[random]==0){
        rectangle[random].updateDrawRectangle(ctx);
       }

    }


}
function partern(value){

  for(let index=0; ;index++){
    if(rectangle.length==0){
      break;
    }
    rectangle.pop();
  }
  if(value==="one"){
//
const  rectangleNeutral00 = new Rectangle(0,0, size,size,"#f0f0f0",1,-1,0,0);
rectangleNeutral00.updateDrawRectangle(ctx);

const  rectangleNeutral01 = new Rectangle(50,0,size,size, "red",1,-1,0,1);
rectangleNeutral01.drawRectangle(ctx);

const  rectangleNeutral02 = new Rectangle(100,0,size,size,"yellow",1,-1,0,2);
rectangleNeutral02.drawRectangle(ctx);

const  rectangleNeutral03 = new Rectangle(150,0,size,size,"yellow",1,-1,0,3);
rectangleNeutral03.drawRectangle(ctx);

const  rectangleNeutral04 = new Rectangle(200,0,size,size,"#f0f0f0",1,-1,0,4);
rectangleNeutral04.updateDrawRectangle(ctx);

const  rectangleNeutral05 = new Rectangle(250,0,size,size,'#f0f0f0',1,-1,0,5);
rectangleNeutral05.updateDrawRectangle(ctx);

const  rectangleNeutral06 = new Rectangle(300,0,size,size,"#800000",1,-1,0,6);
rectangleNeutral06.drawRectangle(ctx);

const  rectangleNeutral07 = new Rectangle(350,0,size,size,"#800000",1,-1,0,7);
rectangleNeutral07.drawRectangle(ctx);



const  rectangleNeutral10 = new Rectangle(0,50,size,size,'#f0f0f0',2,-1,1,0);
rectangleNeutral10.updateDrawRectangle(ctx);

const  rectangleNeutral11 = new Rectangle(50,50,size,size,"#00cc00",2,-1,1,1);
rectangleNeutral11.drawRectangle(ctx);

const  rectangleNeutral12 = new Rectangle(100,50,size,size,"blue",2,-1,1,2);
 rectangleNeutral12.drawRectangle(ctx);

const  rectangleNeutral13 = new Rectangle(150,50,size,size,"blue",2,-1,1,3);
 rectangleNeutral13.drawRectangle(ctx);

const  rectangleNeutral14 = new Rectangle(200,50,size,size,'#33ffff',2,-1,1,4);
rectangleNeutral14.drawRectangle(ctx);

const  rectangleNeutral15 = new Rectangle(250,50,size,size,'#800000',2,-1,1,5);
rectangleNeutral15.drawRectangle(ctx);

const  rectangleNeutral16 = new Rectangle(300,50,size,size,"#f0f0f0",2,-1,1,6);
rectangleNeutral16.updateDrawRectangle(ctx);

const  rectangleNeutral17 = new Rectangle(350,50,size,size,'#f0f0f0',2,-1,1,7);
rectangleNeutral17.updateDrawRectangle(ctx);





const  rectangleNeutral20 = new Rectangle(0,100,size,size, "red",3,-1,2,0);
rectangleNeutral20.drawRectangle(ctx);

const  rectangleNeutral21 = new Rectangle(50,100,size,size,"yellow",3,-1,2,1);
rectangleNeutral21.drawRectangle(ctx);

const  rectangleNeutral22 = new Rectangle(100,100,size,size,'red',3,-1,2,2);
rectangleNeutral22.drawRectangle(ctx);

const  rectangleNeutral23 = new Rectangle(150,100,size,size,"#FFC0CB",3,-1,2,3);
rectangleNeutral23.drawRectangle(ctx);

const  rectangleNeutral24 = new Rectangle(200,100,size,size,"#FFC0CB",3,-1,2,4);
 rectangleNeutral24.drawRectangle(ctx);

const  rectangleNeutral25 = new Rectangle(250,100,size,size,"#33ffff",3,-1,2,5);
 rectangleNeutral25.drawRectangle(ctx);

const  rectangleNeutral26 = new Rectangle(300,100,size,size,"#00cc00",3,-1,2,6);
rectangleNeutral26.drawRectangle(ctx);

const  rectangleNeutral27 = new Rectangle(350,100,size,size,'#f0f0f0',3,-1,2,7);
rectangleNeutral27.updateDrawRectangle(ctx);




const  rectangleNeutral30 = new Rectangle(0,150,size,size,"red",4,-1,3,0);
rectangleNeutral30.drawRectangle(ctx);

const  rectangleNeutral31 = new Rectangle(50,150,size,size,"black",4,-1,3,1);
rectangleNeutral31.drawRectangle(ctx);

const  rectangleNeutral32 = new Rectangle(100,150,size,size,"yellow",4,-1,3,2);
rectangleNeutral32.drawRectangle(ctx);

const  rectangleNeutral33 = new Rectangle(150,150,size,size,'yellow',4,-1,3,3);
rectangleNeutral33.drawRectangle(ctx);

const  rectangleNeutral34 = new Rectangle(200,150,size,size,"#FFC0CB",4,-1,3,4);
 rectangleNeutral34.drawRectangle(ctx);

const  rectangleNeutral35 = new Rectangle(250,150,size,size,"#FFC0CB",4,-1,3,5);
 rectangleNeutral35.drawRectangle(ctx);

const  rectangleNeutral36 = new Rectangle(300,150,size,size,'red',4,-1,3,6);
rectangleNeutral36.drawRectangle(ctx);

const  rectangleNeutral37 = new Rectangle(350,150,size,size,"#800000",4,-1,3,7);
rectangleNeutral37.updateDrawRectangle(ctx);






const  rectangleNeutral40 = new Rectangle(0,200,size,size, "red",5,-1,4,0);
rectangleNeutral40.drawRectangle(ctx);

const  rectangleNeutral41 = new Rectangle(50,200,size,size,"black",5,-1,4,1);
rectangleNeutral41.drawRectangle(ctx);

const  rectangleNeutral42 = new Rectangle(100,200,size,size,'#00cc00',5,-1,4,2);
rectangleNeutral42.drawRectangle(ctx);

const  rectangleNeutral43 = new Rectangle(150,200,size,size,"#FFC0CB",5,-1,4,3);
rectangleNeutral43.drawRectangle(ctx);

const  rectangleNeutral44 = new Rectangle(200,200,size,size,"#00cc00",5,-1,4,4);
 rectangleNeutral44.drawRectangle(ctx);

const  rectangleNeutral45 = new Rectangle(250,200,size,size,"#33ffff",5,-1,4,5);
 rectangleNeutral45.drawRectangle(ctx);

const  rectangleNeutral46 = new Rectangle(300,200,size,size, "#00cc00",5,-1,4,6);
rectangleNeutral46.drawRectangle(ctx);

const  rectangleNeutral47 = new Rectangle(350,200,size,size,"#f0f0f0",5,-1,4,7);
rectangleNeutral47.updateDrawRectangle(ctx);




const  rectangleNeutral50 = new Rectangle(0,250,size,size, "red",6,-1,5,0);
rectangleNeutral50.drawRectangle(ctx);

const  rectangleNeutral51 = new Rectangle(50,250,size,size,"black",6,-1,5,1);
rectangleNeutral51.drawRectangle(ctx);

const  rectangleNeutral52 = new Rectangle(100,250,size,size,"yellow",6,-1,5,2);
rectangleNeutral52.drawRectangle(ctx);

const  rectangleNeutral53 = new Rectangle(150,250,size,size,"#33ffff",6,-1,5,3);
rectangleNeutral53.drawRectangle(ctx);

const  rectangleNeutral54 = new Rectangle(200,250,size,size,"#00cc00",6,-1,5,4);
 rectangleNeutral54.drawRectangle(ctx);

const  rectangleNeutral55 = new Rectangle(250,250,size,size,"blue",6,-1,5,5);
 rectangleNeutral55.drawRectangle(ctx);

const  rectangleNeutral56 = new Rectangle(300,250,size,size,'blue',6,-1,5,6);
rectangleNeutral56.drawRectangle(ctx);

const  rectangleNeutral57 = new Rectangle(350,250,size,size,'#f0f0f0',6,-1,5,7);
rectangleNeutral57.updateDrawRectangle(ctx);






const  rectangleNeutral60 = new Rectangle(0,300,size,size, "#800000",7,-1,6,0);
rectangleNeutral60.updateDrawRectangle(ctx);

const  rectangleNeutral61 = new Rectangle(50,300,size,size,'#800000',7,-1,6,1);
rectangleNeutral61.drawRectangle(ctx);

const  rectangleNeutral62 = new Rectangle(100,300,size,size,"#00cc00",7,-1,6,2);
rectangleNeutral62.drawRectangle(ctx);

const  rectangleNeutral63 = new Rectangle(150,300,size,size,'#FFC0CB',7,-1,6,3);
rectangleNeutral63.drawRectangle(ctx);

const  rectangleNeutral64 = new Rectangle(200,300,size,size,"#f0f0f0",7,-1,6,4);
 rectangleNeutral64.updateDrawRectangle(ctx);

const  rectangleNeutral65 = new Rectangle(250,300,size,size,"#33ffff",7,-1,6,5);
 rectangleNeutral65.drawRectangle(ctx);

const  rectangleNeutral66 = new Rectangle(300,300,size,size,"black",7,-1,6,6);
rectangleNeutral66.drawRectangle(ctx);

const  rectangleNeutral67 = new Rectangle(350,300,size,size,'#f0f0f0',7,-1,6,7);
rectangleNeutral67.updateDrawRectangle(ctx);



const  rectangleNeutral70 = new Rectangle(0,350,size,size,'#f0f0f0',8,-1,7,0);
rectangleNeutral70.updateDrawRectangle(ctx);

const  rectangleNeutral71 = new Rectangle(50,350,size,size,'#00cc00',8,-1,7,1);
rectangleNeutral71.drawRectangle(ctx);

const  rectangleNeutral72 = new Rectangle(100,350,size,size,'#33ffff',8,-1,7,2);
rectangleNeutral72.drawRectangle(ctx);

const  rectangleNeutral73 = new Rectangle(150,350,size,size,'#FFC0CB',8,-1,7,3);
rectangleNeutral73.drawRectangle(ctx);

const  rectangleNeutral74 = new Rectangle(200,350,size,size,"#FFC0CB",8,-1,7,4);
 rectangleNeutral74.drawRectangle(ctx);

const  rectangleNeutral75 = new Rectangle(250,350,size,size,"blue",8,-1,7,5);
 rectangleNeutral75.drawRectangle(ctx);

const  rectangleNeutral76 = new Rectangle(300,350,size,size,'yellow',8,-1,7,6);
rectangleNeutral76.drawRectangle(ctx);

const  rectangleNeutral77 = new Rectangle(350,350,size,size,'#f0f0f0',8,-1,7,7);
rectangleNeutral77.updateDrawRectangle(ctx);




const  rectangleNeutral80 = new Rectangle(0,400,size,size,"red",9,-1,8,0);
rectangleNeutral80.drawRectangle(ctx);

const  rectangleNeutral81 = new Rectangle(50,400,size,size,'yellow',9,-1,8,1);
rectangleNeutral81.drawRectangle(ctx);

const  rectangleNeutral82 = new Rectangle(100,400,size,size,"blue",9,-1,8,2);
rectangleNeutral82.drawRectangle(ctx);

const  rectangleNeutral83 = new Rectangle(150,400,size,size,'#f0f0f0',9,-1,8,3);
rectangleNeutral83.updateDrawRectangle(ctx);

const  rectangleNeutral84 = new Rectangle(200,400,size,size,"#FFC0CB",9,-1,8,4);
rectangleNeutral84.drawRectangle(ctx);

const  rectangleNeutral85 = new Rectangle(250,400,size,size,'#FFC0CB',9,-1,8,5);
rectangleNeutral85.drawRectangle(ctx);

const  rectangleNeutral86 = new Rectangle(300,400,size,size,'#f0f0f0',9,-1,8,6);
rectangleNeutral86.updateDrawRectangle(ctx);

const  rectangleNeutral87 = new Rectangle(350,400,size,size,'#f0f0f0',9,-1,8,7);
rectangleNeutral87.updateDrawRectangle(ctx);

rectangle.push(rectangleNeutral00,rectangleNeutral01,rectangleNeutral02,rectangleNeutral03,rectangleNeutral04,rectangleNeutral05,rectangleNeutral06,rectangleNeutral07,
  rectangleNeutral10,rectangleNeutral11,rectangleNeutral12,rectangleNeutral13,rectangleNeutral14,rectangleNeutral15,rectangleNeutral16,rectangleNeutral17,
  rectangleNeutral20,rectangleNeutral21,rectangleNeutral22,rectangleNeutral23,rectangleNeutral24,rectangleNeutral25,rectangleNeutral26,rectangleNeutral27,
  rectangleNeutral30,rectangleNeutral31,rectangleNeutral32,rectangleNeutral33,rectangleNeutral34,rectangleNeutral35,rectangleNeutral36,rectangleNeutral37,
  rectangleNeutral40,rectangleNeutral41,rectangleNeutral42,rectangleNeutral43,rectangleNeutral44,rectangleNeutral45,rectangleNeutral46,rectangleNeutral47,
  rectangleNeutral50,rectangleNeutral51,rectangleNeutral52,rectangleNeutral53,rectangleNeutral54,rectangleNeutral55,rectangleNeutral56,rectangleNeutral57,
    rectangleNeutral60,rectangleNeutral61,rectangleNeutral62,rectangleNeutral63,rectangleNeutral64,rectangleNeutral65,rectangleNeutral66,rectangleNeutral67,
   rectangleNeutral70,rectangleNeutral71,rectangleNeutral72,rectangleNeutral73,rectangleNeutral74,rectangleNeutral75,rectangleNeutral76,rectangleNeutral77,
  rectangleNeutral80,rectangleNeutral81,rectangleNeutral82,rectangleNeutral83,rectangleNeutral84,rectangleNeutral85,rectangleNeutral86,rectangleNeutral87);

// "red", "black","yellow","#FFC0CB","#33ffff", "#00cc00","blue", "#800000","#f0f0f0"
$('#myMatrix tr').each(function(row, tr){
    TableData[row]={
        "0" : $(tr).find('td:eq(1)').text()
        , "1" :$(tr).find('td:eq(2)').text()
        , "2" : $(tr).find('td:eq(3)').text()
        , "3" : $(tr).find('td:eq(4)').text()
        ,"4" : $(tr).find('td:eq(5)').text()
        , "5" :$(tr).find('td:eq(6)').text()
        , "6" : $(tr).find('td:eq(7)').text()
        , "7" : $(tr).find('td:eq(8)').text()
    }
});

TableData.shift();
console.log(TableData);
console.log(rectangle.length);
console.log(rectangle);
}
if(value=="two"){


const  rectangleNeutral00 = new Rectangle(0,0, size,size,"yellow",1,-1,0,0);
rectangleNeutral00.updateDrawRectangle(ctx);

const  rectangleNeutral01 = new Rectangle(50,0,size,size,'#00cc00',1,-1,0,1);
rectangleNeutral01.updateDrawRectangle(ctx);

const  rectangleNeutral02 = new Rectangle(100,0,size,size,"#33ffff",1,-1,0,2);
rectangleNeutral02.updateDrawRectangle(ctx);

const  rectangleNeutral03 = new Rectangle(150,0,size,size,'#f0f0f0',1,-1,0,3);
rectangleNeutral03.updateDrawRectangle(ctx);

const  rectangleNeutral04 = new Rectangle(200,0,size,size,"#800000",1,-1,0,4);
rectangleNeutral04.updateDrawRectangle(ctx);

const  rectangleNeutral05 = new Rectangle(250,0,size,size,'#f0f0f0',1,-1,0,5);
rectangleNeutral05.updateDrawRectangle(ctx);

const  rectangleNeutral06 = new Rectangle(300,0,size,size,'red',1,-1,0,6);
rectangleNeutral06.updateDrawRectangle(ctx);

const  rectangleNeutral07 = new Rectangle(350,0,size,size,'#f0f0f0',1,-1,0,7);
rectangleNeutral07.updateDrawRectangle(ctx);






const  rectangleNeutral10 = new Rectangle(0,50,size,size,'red',2,-1,1,0);
rectangleNeutral10.updateDrawRectangle(ctx);

const  rectangleNeutral11 = new Rectangle(50,50,size,size,'blue',2,-1,1,1);
rectangleNeutral11.drawRectangle(ctx);

const  rectangleNeutral12 = new Rectangle(100,50,size,size,"red",2,-1,1,2);
 rectangleNeutral12.drawRectangle(ctx);

const  rectangleNeutral13 = new Rectangle(150,50,size,size,"blue",2,-1,1,3);
 rectangleNeutral13.drawRectangle(ctx);

const  rectangleNeutral14 = new Rectangle(200,50,size,size,'#33ffff',2,-1,1,4);
rectangleNeutral14.drawRectangle(ctx);

const  rectangleNeutral15 = new Rectangle(250,50,size,size,'#800000',2,-1,1,5);
rectangleNeutral15.drawRectangle(ctx);

const  rectangleNeutral16 = new Rectangle(300,50,size,size,'#00cc00',2,-1,1,6);
rectangleNeutral16.drawRectangle(ctx);

const  rectangleNeutral17 = new Rectangle(350,50,size,size,'yellow',2,-1,1,7);
rectangleNeutral17.updateDrawRectangle(ctx);




const  rectangleNeutral20 = new Rectangle(0,100,size,size,"blue",3,-1,2,0);
rectangleNeutral20.updateDrawRectangle(ctx);

const  rectangleNeutral21 = new Rectangle(50,100,size,size,"#00cc00",3,-1,2,1);
rectangleNeutral21.drawRectangle(ctx);

const  rectangleNeutral22 = new Rectangle(100,100,size,size,"#33ffff",3,-1,2,2);
rectangleNeutral22.drawRectangle(ctx);

const  rectangleNeutral23 = new Rectangle(150,100,size,size,"#FFC0CB",3,-1,2,3);
rectangleNeutral23.drawRectangle(ctx);

const  rectangleNeutral24 = new Rectangle(200,100,size,size,"black",3,-1,2,4);
 rectangleNeutral24.drawRectangle(ctx);

const  rectangleNeutral25 = new Rectangle(250,100,size,size,"#f0f0f0",3,-1,2,5);
 rectangleNeutral25.drawRectangle(ctx);

const  rectangleNeutral26 = new Rectangle(300,100,size,size,"yellow",3,-1,2,6);
rectangleNeutral26.drawRectangle(ctx);

const  rectangleNeutral27 = new Rectangle(350,100,size,size,"#800000",3,-1,2,7);
rectangleNeutral27.updateDrawRectangle(ctx);




const  rectangleNeutral30 = new Rectangle(0,150,size,size,'#f0f0f0',4,-1,3,0);
rectangleNeutral30.updateDrawRectangle(ctx);

const  rectangleNeutral31 = new Rectangle(50,150,size,size,'#f0f0f0',4,-1,3,1);
rectangleNeutral31.drawRectangle(ctx);

const  rectangleNeutral32 = new Rectangle(100,150,size,size,'#f0f0f0',4,-1,3,2);
rectangleNeutral32.drawRectangle(ctx);

const  rectangleNeutral33 = new Rectangle(150,150,size,size,'yellow',4,-1,3,3);
rectangleNeutral33.drawRectangle(ctx);

const  rectangleNeutral34 = new Rectangle(200,150,size,size,"#00cc00",4,-1,3,4);
 rectangleNeutral34.drawRectangle(ctx);

const  rectangleNeutral35 = new Rectangle(250,150,size,size,"black",4,-1,3,5);
 rectangleNeutral35.drawRectangle(ctx);

const  rectangleNeutral36 = new Rectangle(300,150,size,size,"#FFC0CB",4,-1,3,6);
rectangleNeutral36.drawRectangle(ctx);

const  rectangleNeutral37 = new Rectangle(350,150,size,size,'#f0f0f0',4,-1,3,7);
rectangleNeutral37.updateDrawRectangle(ctx);





const  rectangleNeutral40 = new Rectangle(0,200,size,size,"red",5,-1,4,0);
rectangleNeutral40.updateDrawRectangle(ctx);

const  rectangleNeutral41 = new Rectangle(50,200,size,size,"#800000",5,-1,4,1);
rectangleNeutral41.drawRectangle(ctx);

const  rectangleNeutral42 = new Rectangle(100,200,size,size,'blue',5,-1,4,2);
rectangleNeutral42.drawRectangle(ctx);

const  rectangleNeutral43 = new Rectangle(150,200,size,size,"#FFC0CB",5,-1,4,3);
rectangleNeutral43.drawRectangle(ctx);

const  rectangleNeutral44 = new Rectangle(200,200,size,size,"#800000",5,-1,4,4);
 rectangleNeutral44.drawRectangle(ctx);

const  rectangleNeutral45 = new Rectangle(250,200,size,size,"yellow",5,-1,4,5);
 rectangleNeutral45.drawRectangle(ctx);

const  rectangleNeutral46 = new Rectangle(300,200,size,size,"#f0f0f0",5,-1,4,6);
rectangleNeutral46.drawRectangle(ctx);

const  rectangleNeutral47 = new Rectangle(350,200,size,size,'#f0f0f0',5,-1,4,7);
rectangleNeutral47.updateDrawRectangle(ctx);



const  rectangleNeutral50 = new Rectangle(0,250,size,size,"red",6,-1,5,0);
rectangleNeutral50.updateDrawRectangle(ctx);

const  rectangleNeutral51 = new Rectangle(50,250,size,size,"black",6,-1,5,1);
rectangleNeutral51.drawRectangle(ctx);

const  rectangleNeutral52 = new Rectangle(100,250,size,size,'#33ffff',6,-1,5,2);
rectangleNeutral52.drawRectangle(ctx);

const  rectangleNeutral53 = new Rectangle(150,250,size,size,'red',6,-1,5,3);
rectangleNeutral53.drawRectangle(ctx);

const  rectangleNeutral54 = new Rectangle(200,250,size,size,"black",6,-1,5,4);
 rectangleNeutral54.drawRectangle(ctx);

const  rectangleNeutral55 = new Rectangle(250,250,size,size,"yellow",6,-1,5,5);
 rectangleNeutral55.drawRectangle(ctx);

const  rectangleNeutral56 = new Rectangle(300,250,size,size,"yellow",6,-1,5,6);
rectangleNeutral56.drawRectangle(ctx);

const  rectangleNeutral57 = new Rectangle(350,250,size,size,'#f0f0f0',6,-1,5,7);
rectangleNeutral57.updateDrawRectangle(ctx);




const  rectangleNeutral60 = new Rectangle(0,300,size,size, "red",7,-1,6,0);
rectangleNeutral60.updateDrawRectangle(ctx);

const  rectangleNeutral61 = new Rectangle(50,300,size,size,'#800000',7,-1,6,1);
rectangleNeutral61.drawRectangle(ctx);

const  rectangleNeutral62 = new Rectangle(100,300,size,size,"#FFC0CB",7,-1,6,2);
rectangleNeutral62.drawRectangle(ctx);

const  rectangleNeutral63 = new Rectangle(150,300,size,size,'#FFC0CB',7,-1,6,3);
rectangleNeutral63.drawRectangle(ctx);

const  rectangleNeutral64 = new Rectangle(200,300,size,size,"#f0f0f0",7,-1,6,4);
 rectangleNeutral64.drawRectangle(ctx);

const  rectangleNeutral65 = new Rectangle(250,300,size,size,"#f0f0f0",7,-1,6,5);
 rectangleNeutral65.drawRectangle(ctx);

const  rectangleNeutral66 = new Rectangle(300,300,size,size,"#f0f0f0",7,-1,6,6);
rectangleNeutral66.drawRectangle(ctx);

const  rectangleNeutral67 = new Rectangle(350,300,size,size,"black",7,-1,6,7);
rectangleNeutral67.updateDrawRectangle(ctx);





const  rectangleNeutral70 = new Rectangle(0,350,size,size,"#00cc00",8,-1,7,0);
rectangleNeutral70.updateDrawRectangle(ctx);

const  rectangleNeutral71 = new Rectangle(50,350,size,size,'#00cc00',8,-1,7,1);
rectangleNeutral71.drawRectangle(ctx);

const  rectangleNeutral72 = new Rectangle(100,350,size,size,"#f0f0f0",8,-1,7,2);
rectangleNeutral72.drawRectangle(ctx);

const  rectangleNeutral73 = new Rectangle(150,350,size,size,"#f0f0f0",8,-1,7,3);
rectangleNeutral73.drawRectangle(ctx);

const  rectangleNeutral74 = new Rectangle(200,350,size,size,"#f0f0f0",8,-1,7,4);
 rectangleNeutral74.drawRectangle(ctx);

const  rectangleNeutral75 = new Rectangle(250,350,size,size,"blue",8,-1,7,5);
 rectangleNeutral75.drawRectangle(ctx);

const  rectangleNeutral76 = new Rectangle(300,350,size,size,"blue",8,-1,7,6);
rectangleNeutral76.drawRectangle(ctx);

const  rectangleNeutral77 = new Rectangle(350,350,size,size,'#f0f0f0',8,-1,7,7);
rectangleNeutral77.updateDrawRectangle(ctx);




const  rectangleNeutral80 = new Rectangle(0,400,size,size,"#33ffff",9,-1,8,0);
rectangleNeutral80.updateDrawRectangle(ctx);

const  rectangleNeutral81 = new Rectangle(50,400,size,size,"#33ffff",9,-1,8,1);
rectangleNeutral81.updateDrawRectangle(ctx);

const  rectangleNeutral82 = new Rectangle(100,400,size,size,"blue",9,-1,8,2);
rectangleNeutral82.updateDrawRectangle(ctx);

const  rectangleNeutral83 = new Rectangle(150,400,size,size,"blue",9,-1,8,3);
rectangleNeutral83.updateDrawRectangle(ctx);

const  rectangleNeutral84 = new Rectangle(200,400,size,size,"#800000",9,-1,8,4);
rectangleNeutral84.updateDrawRectangle(ctx);

const  rectangleNeutral85 = new Rectangle(250,400,size,size,"#800000",9,-1,8,5);
rectangleNeutral85.updateDrawRectangle(ctx);

const  rectangleNeutral86 = new Rectangle(300,400,size,size,'#f0f0f0',9,-1,8,6);
rectangleNeutral86.updateDrawRectangle(ctx);

const  rectangleNeutral87 = new Rectangle(350,400,size,size,'#f0f0f0',9,-1,8,7);
rectangleNeutral87.updateDrawRectangle(ctx);



rectangle.push(rectangleNeutral00,rectangleNeutral01,rectangleNeutral02,rectangleNeutral03,rectangleNeutral04,rectangleNeutral05,rectangleNeutral06,rectangleNeutral07,
  rectangleNeutral10,rectangleNeutral11,rectangleNeutral12,rectangleNeutral13,rectangleNeutral14,rectangleNeutral15,rectangleNeutral16,rectangleNeutral17,
  rectangleNeutral20,rectangleNeutral21,rectangleNeutral22,rectangleNeutral23,rectangleNeutral24,rectangleNeutral25,rectangleNeutral26,rectangleNeutral27,
  rectangleNeutral30,rectangleNeutral31,rectangleNeutral32,rectangleNeutral33,rectangleNeutral34,rectangleNeutral35,rectangleNeutral36,rectangleNeutral37,
  rectangleNeutral40,rectangleNeutral41,rectangleNeutral42,rectangleNeutral43,rectangleNeutral44,rectangleNeutral45,rectangleNeutral46,rectangleNeutral47,
  rectangleNeutral50,rectangleNeutral51,rectangleNeutral52,rectangleNeutral53,rectangleNeutral54,rectangleNeutral55,rectangleNeutral56,rectangleNeutral57,
    rectangleNeutral60,rectangleNeutral61,rectangleNeutral62,rectangleNeutral63,rectangleNeutral64,rectangleNeutral65,rectangleNeutral66,rectangleNeutral67,
   rectangleNeutral70,rectangleNeutral71,rectangleNeutral72,rectangleNeutral73,rectangleNeutral74,rectangleNeutral75,rectangleNeutral76,rectangleNeutral77,
  rectangleNeutral80,rectangleNeutral81,rectangleNeutral82,rectangleNeutral83,rectangleNeutral84,rectangleNeutral85,rectangleNeutral86,rectangleNeutral87);


$('#myMatrix tr').each(function(row, tr){
    TableData[row]={
        "0" : $(tr).find('td:eq(1)').text()
        , "1" :$(tr).find('td:eq(2)').text()
        , "2" : $(tr).find('td:eq(3)').text()
        , "3" : $(tr).find('td:eq(4)').text()
        ,"4" : $(tr).find('td:eq(5)').text()
        , "5" :$(tr).find('td:eq(6)').text()
        , "6" : $(tr).find('td:eq(7)').text()
        , "7" : $(tr).find('td:eq(8)').text()
    }
});

TableData.shift();
}
if(value=="three"){

   const  rectangleNeutral00 = new Rectangle(0,0, size,size,"#f0f0f0",1,-1,0,0);
rectangleNeutral00.updateDrawRectangle(ctx);

const  rectangleNeutral01 = new Rectangle(50,0,size,size,"#f0f0f0",1,-1,0,1);
rectangleNeutral01.updateDrawRectangle(ctx);

const  rectangleNeutral02 = new Rectangle(100,0,size,size,"#33ffff",1,-1,0,2);
rectangleNeutral02.updateDrawRectangle(ctx);

const  rectangleNeutral03 = new Rectangle(150,0,size,size,"#33ffff",1,-1,0,3);
rectangleNeutral03.updateDrawRectangle(ctx);

const  rectangleNeutral04 = new Rectangle(200,0,size,size,"yellow",1,-1,0,4);
rectangleNeutral04.updateDrawRectangle(ctx);

const  rectangleNeutral05 = new Rectangle(250,0,size,size, "red",1,-1,0,5);
rectangleNeutral05.updateDrawRectangle(ctx);

const  rectangleNeutral06 = new Rectangle(300,0,size,size, "red",1,-1,0,6);
rectangleNeutral06.updateDrawRectangle(ctx);

const  rectangleNeutral07 = new Rectangle(350,0,size,size,"#800000",1,-1,0,7);
rectangleNeutral07.updateDrawRectangle(ctx);





const  rectangleNeutral10 = new Rectangle(0,50,size,size,"#f0f0f0",2,-1,1,0);
rectangleNeutral10.updateDrawRectangle(ctx);

const  rectangleNeutral11 = new Rectangle(50,50,size,size,"#FFC0CB",2,-1,1,1);
rectangleNeutral11.drawRectangle(ctx);

const  rectangleNeutral12 = new Rectangle(100,50,size,size,"#FFC0CB",2,-1,1,2);
 rectangleNeutral12.drawRectangle(ctx);

const  rectangleNeutral13 = new Rectangle(150,50,size,size,"#33ffff",2,-1,1,3);
 rectangleNeutral13.drawRectangle(ctx);

const  rectangleNeutral14 = new Rectangle(200,50,size,size,"#00cc00",2,-1,1,4);
rectangleNeutral14.drawRectangle(ctx);

const  rectangleNeutral15 = new Rectangle(250,50,size,size,"#00cc00",2,-1,1,5);
rectangleNeutral15.drawRectangle(ctx);

const  rectangleNeutral16 = new Rectangle(300,50,size,size,'black',2,-1,1,6);
rectangleNeutral16.drawRectangle(ctx);

const  rectangleNeutral17 = new Rectangle(350,50,size,size,'#f0f0f0',2,-1,1,7);
rectangleNeutral17.updateDrawRectangle(ctx);






const  rectangleNeutral20 = new Rectangle(0,100,size,size,"#FFC0CB",3,-1,2,0);
rectangleNeutral20.updateDrawRectangle(ctx);

const  rectangleNeutral21 = new Rectangle(50,100,size,size,"blue",3,-1,2,1);
rectangleNeutral21.drawRectangle(ctx);

const  rectangleNeutral22 = new Rectangle(100,100,size,size,"#800000",3,-1,2,2);
rectangleNeutral22.drawRectangle(ctx);

const  rectangleNeutral23 = new Rectangle(150,100,size,size,"#FFC0CB",3,-1,2,3);
rectangleNeutral23.drawRectangle(ctx);

const  rectangleNeutral24 = new Rectangle(200,100,size,size,"#33ffff",3,-1,2,4);
 rectangleNeutral24.drawRectangle(ctx);

const  rectangleNeutral25 = new Rectangle(250,100,size,size,"black",3,-1,2,5);
 rectangleNeutral25.drawRectangle(ctx);

const  rectangleNeutral26 = new Rectangle(300,100,size,size,"blue",3,-1,2,6);
rectangleNeutral26.drawRectangle(ctx);

const  rectangleNeutral27 = new Rectangle(350,100,size,size,"blue",3,-1,2,7);
rectangleNeutral27.updateDrawRectangle(ctx);





const  rectangleNeutral30 = new Rectangle(0,150,size,size,'#f0f0f0',4,-1,3,0);
rectangleNeutral30.updateDrawRectangle(ctx);

const  rectangleNeutral31 = new Rectangle(50,150,size,size,"#f0f0f0",4,-1,3,1);
rectangleNeutral31.drawRectangle(ctx);

const  rectangleNeutral32 = new Rectangle(100,150,size,size,'#800000',4,-1,3,2);
rectangleNeutral32.drawRectangle(ctx);

const  rectangleNeutral33 = new Rectangle(150,150,size,size,'yellow',4,-1,3,3);
rectangleNeutral33.drawRectangle(ctx);

const  rectangleNeutral34 = new Rectangle(200,150,size,size,"red",4,-1,3,4);
 rectangleNeutral34.drawRectangle(ctx);

const  rectangleNeutral35 = new Rectangle(250,150,size,size,"#f0f0f0",4,-1,3,5);
 rectangleNeutral35.drawRectangle(ctx);

const  rectangleNeutral36 = new Rectangle(300,150,size,size,"#f0f0f0",4,-1,3,6);
rectangleNeutral36.drawRectangle(ctx);

const  rectangleNeutral37 = new Rectangle(350,150,size,size,'#f0f0f0',4,-1,3,7);
rectangleNeutral37.updateDrawRectangle(ctx);








const  rectangleNeutral40 = new Rectangle(0,200,size,size,"red",5,-1,4,0);
rectangleNeutral40.updateDrawRectangle(ctx);

const  rectangleNeutral41 = new Rectangle(50,200,size,size,"red",5,-1,4,1);
rectangleNeutral41.drawRectangle(ctx);

const  rectangleNeutral42 = new Rectangle(100,200,size,size,"yellow",5,-1,4,2);
rectangleNeutral42.drawRectangle(ctx);

const  rectangleNeutral43 = new Rectangle(150,200,size,size,"yellow",5,-1,4,3);
rectangleNeutral43.drawRectangle(ctx);

const  rectangleNeutral44 = new Rectangle(200,200,size,size,"#00cc00",5,-1,4,4);
rectangleNeutral44.drawRectangle(ctx);

const  rectangleNeutral45 = new Rectangle(250,200,size,size,"yellow",5,-1,4,5);
 rectangleNeutral45.drawRectangle(ctx);

const  rectangleNeutral46 = new Rectangle(300,200,size,size,"#33ffff",5,-1,4,6);
rectangleNeutral46.drawRectangle(ctx);

const  rectangleNeutral47 = new Rectangle(350,200,size,size,"#33ffff",5,-1,4,7);
rectangleNeutral47.updateDrawRectangle(ctx);




const  rectangleNeutral50 = new Rectangle(0,250,size,size,'#f0f0f0',6,-1,5,0);
rectangleNeutral50.updateDrawRectangle(ctx);

const  rectangleNeutral51 = new Rectangle(50,250,size,size,'#FFC0CB',6,-1,5,1);
rectangleNeutral51.drawRectangle(ctx);

const  rectangleNeutral52 = new Rectangle(100,250,size,size, "black",6,-1,5,2);
rectangleNeutral52.drawRectangle(ctx);

const  rectangleNeutral53 = new Rectangle(150,250,size,size,"#800000",6,-1,5,3);
rectangleNeutral53.drawRectangle(ctx);

const  rectangleNeutral54 = new Rectangle(200,250,size,size,"black",6,-1,5,4);
 rectangleNeutral54.drawRectangle(ctx);

const  rectangleNeutral55 = new Rectangle(250,250,size,size,"#800000",6,-1,5,5);
 rectangleNeutral55.drawRectangle(ctx);

const  rectangleNeutral56 = new Rectangle(300,250,size,size, "red",6,-1,5,6);
rectangleNeutral56.drawRectangle(ctx);

const  rectangleNeutral57 = new Rectangle(350,250,size,size,'#f0f0f0',6,-1,5,7);
rectangleNeutral57.updateDrawRectangle(ctx);




const  rectangleNeutral60 = new Rectangle(0,300,size,size,'#f0f0f0',7,-1,6,0);
rectangleNeutral60.updateDrawRectangle(ctx);

const  rectangleNeutral61 = new Rectangle(50,300,size,size,"#f0f0f0",7,-1,6,1);
rectangleNeutral61.drawRectangle(ctx);

const  rectangleNeutral62 = new Rectangle(100,300,size,size,"#f0f0f0",7,-1,6,2);
rectangleNeutral62.drawRectangle(ctx);

const  rectangleNeutral63 = new Rectangle(150,300,size,size,'#FFC0CB',7,-1,6,3);
rectangleNeutral63.drawRectangle(ctx);

const  rectangleNeutral64 = new Rectangle(200,300,size,size,"#00cc00",7,-1,6,4);
 rectangleNeutral64.drawRectangle(ctx);

const  rectangleNeutral65 = new Rectangle(250,300,size,size,"yellow",7,-1,6,5);
 rectangleNeutral65.drawRectangle(ctx);

const  rectangleNeutral66 = new Rectangle(300,300,size,size,"yellow",7,-1,6,6);
rectangleNeutral66.drawRectangle(ctx);

const  rectangleNeutral67 = new Rectangle(350,300,size,size,"#FFC0CB",7,-1,6,7);
rectangleNeutral67.updateDrawRectangle(ctx);




const  rectangleNeutral70 = new Rectangle(0,350,size,size,"red",8,-1,7,0);
rectangleNeutral70.updateDrawRectangle(ctx);

const  rectangleNeutral71 = new Rectangle(50,350,size,size,"yellow",8,-1,7,1);
rectangleNeutral71.drawRectangle(ctx);

const  rectangleNeutral72 = new Rectangle(100,350,size,size,'#33ffff',8,-1,7,2);
rectangleNeutral72.drawRectangle(ctx);

const  rectangleNeutral73 = new Rectangle(150,350,size,size,'#FFC0CB',8,-1,7,3);
rectangleNeutral73.drawRectangle(ctx);

const  rectangleNeutral74 = new Rectangle(200,350,size,size,"#FFC0CB",8,-1,7,4);
 rectangleNeutral74.drawRectangle(ctx);

const  rectangleNeutral75 = new Rectangle(250,350,size,size,"blue",8,-1,7,5);
 rectangleNeutral75.drawRectangle(ctx);

const  rectangleNeutral76 = new Rectangle(300,350,size,size,'yellow',8,-1,7,6);
rectangleNeutral76.drawRectangle(ctx);

const  rectangleNeutral77 = new Rectangle(350,350,size,size,'#f0f0f0',8,-1,7,7);
rectangleNeutral77.updateDrawRectangle(ctx);



  // "red", "black","yellow","#FFC0CB","#33ffff", "#00cc00","blue", "#800000","#f0f0f0"

const  rectangleNeutral80 = new Rectangle(0,400,size,size, "black",9,-1,8,0);
rectangleNeutral80.updateDrawRectangle(ctx);

const  rectangleNeutral81 = new Rectangle(50,400,size,size,"#800000",9,-1,8,1);
rectangleNeutral81.updateDrawRectangle(ctx);

const  rectangleNeutral82 = new Rectangle(100,400,size,size,"#f0f0f0",9,-1,8,2);
rectangleNeutral82.updateDrawRectangle(ctx);

const  rectangleNeutral83 = new Rectangle(150,400,size,size,"yellow",9,-1,8,3);
rectangleNeutral83.updateDrawRectangle(ctx);

const  rectangleNeutral84 = new Rectangle(200,400,size,size,"#f0f0f0",9,-1,8,4);
rectangleNeutral84.updateDrawRectangle(ctx);

const  rectangleNeutral85 = new Rectangle(250,400,size,size,"#00cc00",9,-1,8,5);
rectangleNeutral85.updateDrawRectangle(ctx);

const  rectangleNeutral86 = new Rectangle(300,400,size,size,"#FFC0CB",9,-1,8,6);
rectangleNeutral86.updateDrawRectangle(ctx);

const  rectangleNeutral87 = new Rectangle(350,400,size,size,"#FFC0CB",9,-1,8,7);
rectangleNeutral87.updateDrawRectangle(ctx);



rectangle.push(rectangleNeutral00,rectangleNeutral01,rectangleNeutral02,rectangleNeutral03,rectangleNeutral04,rectangleNeutral05,rectangleNeutral06,rectangleNeutral07,
  rectangleNeutral10,rectangleNeutral11,rectangleNeutral12,rectangleNeutral13,rectangleNeutral14,rectangleNeutral15,rectangleNeutral16,rectangleNeutral17,
  rectangleNeutral20,rectangleNeutral21,rectangleNeutral22,rectangleNeutral23,rectangleNeutral24,rectangleNeutral25,rectangleNeutral26,rectangleNeutral27,
  rectangleNeutral30,rectangleNeutral31,rectangleNeutral32,rectangleNeutral33,rectangleNeutral34,rectangleNeutral35,rectangleNeutral36,rectangleNeutral37,
  rectangleNeutral40,rectangleNeutral41,rectangleNeutral42,rectangleNeutral43,rectangleNeutral44,rectangleNeutral45,rectangleNeutral46,rectangleNeutral47,
  rectangleNeutral50,rectangleNeutral51,rectangleNeutral52,rectangleNeutral53,rectangleNeutral54,rectangleNeutral55,rectangleNeutral56,rectangleNeutral57,
    rectangleNeutral60,rectangleNeutral61,rectangleNeutral62,rectangleNeutral63,rectangleNeutral64,rectangleNeutral65,rectangleNeutral66,rectangleNeutral67,
   rectangleNeutral70,rectangleNeutral71,rectangleNeutral72,rectangleNeutral73,rectangleNeutral74,rectangleNeutral75,rectangleNeutral76,rectangleNeutral77,
  rectangleNeutral80,rectangleNeutral81,rectangleNeutral82,rectangleNeutral83,rectangleNeutral84,rectangleNeutral85,rectangleNeutral86,rectangleNeutral87);


$('#myMatrix tr').each(function(row, tr){
    TableData[row]={
        "0" : $(tr).find('td:eq(1)').text()
        , "1" :$(tr).find('td:eq(2)').text()
        , "2" : $(tr).find('td:eq(3)').text()
        , "3" : $(tr).find('td:eq(4)').text()
        ,"4" : $(tr).find('td:eq(5)').text()
        , "5" :$(tr).find('td:eq(6)').text()
        , "6" : $(tr).find('td:eq(7)').text()
        , "7" : $(tr).find('td:eq(8)').text()
    }
});

TableData.shift();
}
}
function increaseOjectSize(val){
if(val === "one"){
     value =1;


    var i = 0, j =0;
    canvas.width = 200;
    canvas.height = 225;
    for(var index =0; index< 9; index++ ){

       j=0;
          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;

               rectangle[initial] = new Rectangle( j , i , 25 , 25 , rectangle[initial].color ,rectangle[initial].row, -1 ,rectangle[initial].x, rectangle[initial].y );

              if( rectangle[initial].image instanceof Object ){
                 rectangle[initial].drawImageInRectangle(ctx,rectangle[initial].colorValue);
                 continue;
              }


              if(rectangle[initial].colorValue==0){
                    rectangle[initial].updateDrawRectangle(ctx);
              } else{
                    rectangle[initial].drawRectangle(ctx);
              }

              j= j + 25;
           }

            i = i + 25;
    }

  }
  if(val === "two"){
    value = 2;
      var i = 0, j =0;
    canvas.width = 400;
    canvas.height = 450;
           for(var index =0; index< 9; index++ ){

       j=0;
          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;

               rectangle[initial] = new Rectangle( j , i , 50 , 50 , rectangle[initial].color ,rectangle[initial].row, -1 ,rectangle[initial].x, rectangle[initial].y );
              if(rectangle[initial].colorValue==0){
                    rectangle[initial].updateDrawRectangle(ctx);
              } else{
                    rectangle[initial].drawRectangle(ctx);
              }

              j= j + 50;
           }

            i = i + 50;
    }
  }
  if(val === "three"){
    value = 3;

      var i = 0, j =0;
    canvas.width = 600;
    canvas.height = 675;
            for(var index =0; index< 9; index++ ){

       j=0;
          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;

               rectangle[initial] = new Rectangle( j , i , 75 , 75 , rectangle[initial].color ,rectangle[initial].row, -1 ,rectangle[initial].x, rectangle[initial].y );
              if(rectangle[initial].colorValue==0){
                    rectangle[initial].updateDrawRectangle(ctx);
              } else{
                    rectangle[initial].drawRectangle(ctx);
              }

              j= j + 75;
           }

            i = i + 75;
    }
  }
  if(val === "four"){
     value = 4;

      var i = 0, j =0;
     canvas.width = 800;
     canvas.height = 900;
               for(var index =0; index< 9; index++ ){

       j=0;
          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;

               rectangle[initial] = new Rectangle( j , i , 100 , 100 , rectangle[initial].color ,rectangle[initial].row, -1 ,rectangle[initial].x, rectangle[initial].y );
              if(rectangle[initial].colorValue==0){
                    rectangle[initial].updateDrawRectangle(ctx);
              } else{
                    rectangle[initial].drawRectangle(ctx);
              }

              j= j + 100;
           }

            i = i + 100;
    }

  }

}



function fulScreen(size){

  //var fullSize = document.getElementsByClassName("onFull");
  if(size === "on"){

    var onetGrid = document.getElementById("onet-grid");
    onetGrid.style.display = "grid";
    onetGrid.style.gridTemplateColumns = "100%";
    var tableOne = document.getElementsByClassName("tableOne");
    tableOne[0].style.display="none";
    var tableTwo = document.getElementsByClassName("tableTwo");
    tableTwo[0].style.display = "block";



  }
  if(size === "collapse"){
    var onetGrid = document.getElementById("onet-grid");
    onetGrid.classList.remove("onet-grid");



    var attr = document.createAttribute("class");
    attr.value = "grid-contain";
    onetGrid.setAttributeNode(attr);
    onetGrid.style.display = "grid";
    onetGrid.style.gridTemplateColumns = "30% 70%";
  onetGrid.style.height ="1000px";
  onetGrid.style.gap ="20px";



    var tableOne = document.getElementsByClassName("tableOne");
    tableOne[0].style.display = "block";
      tableOne[0].style.border = "1px solid black";
    tableOne[0].style.paddingLeft = "20px";
tableOne[0].style.paddingRight = "20px";


    var tableTwo = document.getElementById("tableTwo");
    tableTwo.style.border = "1px solid black";
    tableTwo.style.padding = "20px";

  }
}
function axisGraph(){

  const ctx = document.getElementById('chart');
  ctx.style.display = "block";

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


function partternImage(pattern){

if(canvas.width == 200 && canvas.height == 225){

    for(var index =0; index< 9; index++ ){


          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;
                if(rectangle[initial].colorValue!=0 && pattern=='color'){
                    rectangle[initial]. drawRectangle(ctx);
              }

              if(rectangle[initial].colorValue!=0 && pattern=='animal'){
                    rectangle[initial].drawImageInRectangle(ctx, rectangle[initial].colorValue);

              }
               if(rectangle[initial].colorValue==0){
                    rectangle[initial]. updateDrawRectangle(ctx);
              }

           }

    }

  }
  if( canvas.width == 400 &&  canvas.height == 450){
      for(var index =0; index< 9; index++ ){

          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;

               if(rectangle[initial].colorValue!=0 && pattern=='color'){
                    rectangle[initial]. drawRectangle(ctx);
              }

              if(rectangle[initial].colorValue!=0 && pattern=='animal'){
                    rectangle[initial].drawImageInRectangle(ctx, rectangle[initial].colorValue);

              }
               if(rectangle[initial].colorValue==0){
                    rectangle[initial]. updateDrawRectangle(ctx);
              }

           }

    }
}
 if( canvas.width == 600 &&  canvas.height == 675){
      for(var index =0; index< 9; index++ ){

          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;

                       if(rectangle[initial].colorValue!=0 && pattern=='color'){
                    rectangle[initial]. drawRectangle(ctx);
              }

              if(rectangle[initial].colorValue!=0 && pattern=='animal'){
                    rectangle[initial].drawImageInRectangle(ctx, rectangle[initial].colorValue);

              }
               if(rectangle[initial].colorValue==0){
                    rectangle[initial]. updateDrawRectangle(ctx);
              }

           }

    }
  }

   if( canvas.width == 800 &&  canvas.height == 900){
      for(var index =0; index< 9; index++ ){

          for ( var count= 0; count < 8 ; count++) {

               var initial= ( 7*index)+count+index;

                     if(rectangle[initial].colorValue!=0 && pattern=='color'){
                    rectangle[initial]. drawRectangle(ctx);
              }

              if(rectangle[initial].colorValue!=0 && pattern=='animal'){
                    rectangle[initial].drawImageInRectangle(ctx, rectangle[initial].colorValue);

              }
               if(rectangle[initial].colorValue==0){
                    rectangle[initial]. updateDrawRectangle(ctx);
              }

           }

    }
  }
}

class Rectangle{
  constructor(xPoint, yPoint, width , height,color,posRow,posCol,x,y){

      this.setColor(color);
    this.width = width ;
    this.height = height ;
    this.xPoint = xPoint;
    this.yPoint = yPoint;



     this.x =x;
      this.y =y;
      var xy= x+''+y;



     document.getElementById(xy).innerHTML = this.colorValue;



  }

  drawImageInRectangle(ctx,value){


    switch(value){

    case  1:
      this.image =document.getElementById("cat");
      break;

     case 2:
      this.image =document.getElementById("dog");
      break;

      case 3:
      this.image =document.getElementById("hen");
      break;

      case 4:
      this.image =document.getElementById("lion");
      break;

      case 5:
      this.image =document.getElementById("monkey");
      break;

      case 6:
      this.image =document.getElementById("bird");
      break;

      case 7:
      this.image =document.getElementById("peagon");
      break;

      case 8:
      this.image =document.getElementById("goat");
      break;

      case 9:
      this.image =document.getElementById("fish");
      break;
    }
    ctx.drawImage(this.image,this.xPoint,this.yPoint,this.width,this.height);
    ctx.lineWidth=2;
    ctx.strokeStyle = 'black';
    ctx.strokeRect(this.xPoint,this.yPoint,this.width,this.height);
  }
  drawRectangle(context){
    context.fillStyle=this.color;
    context.fillRect(this.xPoint,this.yPoint,this.width,this.height);
    context.lineWidth=2;
    context.strokeStyle = 'black';
    context.strokeRect(this.xPoint,this.yPoint,this.width,this.height);
  }

   updateDrawRectangle(context){
    context.fillStyle=this.color;
    context.fillRect(this.xPoint,this.yPoint,this.width,this.height);
    context.lineWidth=0;
    context.strokeStyle = 'white';
    context.strokeRect(this.xPoint,this.yPoint,this.width,this.height);
  }

  setColor(color){
     this.color=color;
      switch(this.color){
      case "red":
          this.colorValue  =1;
          break;
      case "black":
          this.colorValue  =2;
          break;
      case "yellow":
          this.colorValue  =3;
          break;
      case "#FFC0CB":
          this.colorValue  =4;
          break;
      case "#33ffff":
          this.colorValue  =5;
          break;
      case "#00cc00":
          this.colorValue  =6;
          break;
      case "blue":
          this.colorValue=7;
          break;
      case "#800000":
         this.colorValue  =8;
         break
      case "#f0f0f0":
        this.colorValue=0;
        break;
       }

  }

}
initializeOnet();

function initializeOnet(){
  const  rectangleNeutral00 = new Rectangle(0,0, size,size,"#f0f0f0",1,-1,0,0);
rectangleNeutral00.updateDrawRectangle(ctx);

const  rectangleNeutral01 = new Rectangle(50,0,size,size,'#f0f0f0',1,-1,0,1);
rectangleNeutral01.updateDrawRectangle(ctx);

const  rectangleNeutral02 = new Rectangle(100,0,size,size,"#f0f0f0",1,-1,0,2);
rectangleNeutral02.updateDrawRectangle(ctx);

const  rectangleNeutral03 = new Rectangle(150,0,size,size,'#f0f0f0',1,-1,0,3);
rectangleNeutral03.updateDrawRectangle(ctx);

const  rectangleNeutral04 = new Rectangle(200,0,size,size,"#f0f0f0",1,-1,0,4);
rectangleNeutral04.updateDrawRectangle(ctx);

const  rectangleNeutral05 = new Rectangle(250,0,size,size,'#f0f0f0',1,-1,0,5);
rectangleNeutral05.updateDrawRectangle(ctx);

const  rectangleNeutral06 = new Rectangle(300,0,size,size,'#f0f0f0',1,-1,0,6);
rectangleNeutral06.updateDrawRectangle(ctx);

const  rectangleNeutral07 = new Rectangle(350,0,size,size,'#f0f0f0',1,-1,0,7);
rectangleNeutral07.updateDrawRectangle(ctx);




const  rectangleNeutral10 = new Rectangle(0,50,size,size,'#f0f0f0',2,-1,1,0);
rectangleNeutral10.updateDrawRectangle(ctx);

const  rectangleNeutral11 = new Rectangle(50,50,size,size,'#00cc00',2,-1,1,1);
rectangleNeutral11.drawRectangle(ctx);

const  rectangleNeutral12 = new Rectangle(100,50,size,size,"red",2,-1,1,2);
 rectangleNeutral12.drawRectangle(ctx);

const  rectangleNeutral13 = new Rectangle(150,50,size,size,"blue",2,-1,1,3);
 rectangleNeutral13.drawRectangle(ctx);

const  rectangleNeutral14 = new Rectangle(200,50,size,size,'#33ffff',2,-1,1,4);
rectangleNeutral14.drawRectangle(ctx);

const  rectangleNeutral15 = new Rectangle(250,50,size,size,'#800000',2,-1,1,5);
rectangleNeutral15.drawRectangle(ctx);

const  rectangleNeutral16 = new Rectangle(300,50,size,size,'black',2,-1,1,6);
rectangleNeutral16.drawRectangle(ctx);

const  rectangleNeutral17 = new Rectangle(350,50,size,size,'#f0f0f0',2,-1,1,7);
rectangleNeutral17.updateDrawRectangle(ctx);



const  rectangleNeutral20 = new Rectangle(0,100,size,size,'#f0f0f0',3,-1,2,0);
rectangleNeutral20.updateDrawRectangle(ctx);

const  rectangleNeutral21 = new Rectangle(50,100,size,size,'black',3,-1,2,1);
rectangleNeutral21.drawRectangle(ctx);

const  rectangleNeutral22 = new Rectangle(100,100,size,size,'red',3,-1,2,2);
rectangleNeutral22.drawRectangle(ctx);

const  rectangleNeutral23 = new Rectangle(150,100,size,size,'blue',3,-1,2,3);
rectangleNeutral23.drawRectangle(ctx);

const  rectangleNeutral24 = new Rectangle(200,100,size,size,"#33ffff",3,-1,2,4);
 rectangleNeutral24.drawRectangle(ctx);

const  rectangleNeutral25 = new Rectangle(250,100,size,size,"red",3,-1,2,5);
 rectangleNeutral25.drawRectangle(ctx);

const  rectangleNeutral26 = new Rectangle(300,100,size,size,'#FFC0CB',3,-1,2,6);
rectangleNeutral26.drawRectangle(ctx);

const  rectangleNeutral27 = new Rectangle(350,100,size,size,'#f0f0f0',3,-1,2,7);
rectangleNeutral27.updateDrawRectangle(ctx);



const  rectangleNeutral30 = new Rectangle(0,150,size,size,'#f0f0f0',4,-1,3,0);
rectangleNeutral30.updateDrawRectangle(ctx);

const  rectangleNeutral31 = new Rectangle(50,150,size,size,'#33ffff',4,-1,3,1);
rectangleNeutral31.drawRectangle(ctx);

const  rectangleNeutral32 = new Rectangle(100,150,size,size,'#800000',4,-1,3,2);
rectangleNeutral32.drawRectangle(ctx);

const  rectangleNeutral33 = new Rectangle(150,150,size,size,'yellow',4,-1,3,3);
rectangleNeutral33.drawRectangle(ctx);

const  rectangleNeutral34 = new Rectangle(200,150,size,size,"red",4,-1,3,4);
 rectangleNeutral34.drawRectangle(ctx);

const  rectangleNeutral35 = new Rectangle(250,150,size,size,"#FFC0CB",4,-1,3,5);
 rectangleNeutral35.drawRectangle(ctx);

const  rectangleNeutral36 = new Rectangle(300,150,size,size,'red',4,-1,3,6);
rectangleNeutral36.drawRectangle(ctx);

const  rectangleNeutral37 = new Rectangle(350,150,size,size,'#f0f0f0',4,-1,3,7);
rectangleNeutral37.updateDrawRectangle(ctx);




const  rectangleNeutral40 = new Rectangle(0,200,size,size,'#f0f0f0',5,-1,4,0);
rectangleNeutral40.updateDrawRectangle(ctx);

const  rectangleNeutral41 = new Rectangle(50,200,size,size,'#00cc00',5,-1,4,1);
rectangleNeutral41.drawRectangle(ctx);

const  rectangleNeutral42 = new Rectangle(100,200,size,size,'blue',5,-1,4,2);
rectangleNeutral42.drawRectangle(ctx);

const  rectangleNeutral43 = new Rectangle(150,200,size,size,'black',5,-1,4,3);
rectangleNeutral43.drawRectangle(ctx);

const  rectangleNeutral44 = new Rectangle(200,200,size,size,"#00cc00",5,-1,4,4);
 rectangleNeutral44.drawRectangle(ctx);

const  rectangleNeutral45 = new Rectangle(250,200,size,size,"yellow",5,-1,4,5);
 rectangleNeutral45.drawRectangle(ctx);

const  rectangleNeutral46 = new Rectangle(300,200,size,size,'#00cc00',5,-1,4,6);
rectangleNeutral46.drawRectangle(ctx);

const  rectangleNeutral47 = new Rectangle(350,200,size,size,'#f0f0f0',5,-1,4,7);
rectangleNeutral47.updateDrawRectangle(ctx);



const  rectangleNeutral50 = new Rectangle(0,250,size,size,'#f0f0f0',6,-1,5,0);
rectangleNeutral50.updateDrawRectangle(ctx);

const  rectangleNeutral51 = new Rectangle(50,250,size,size,'#FFC0CB',6,-1,5,1);
rectangleNeutral51.drawRectangle(ctx);

const  rectangleNeutral52 = new Rectangle(100,250,size,size,'#33ffff',6,-1,5,2);
rectangleNeutral52.drawRectangle(ctx);

const  rectangleNeutral53 = new Rectangle(150,250,size,size,'red',6,-1,5,3);
rectangleNeutral53.drawRectangle(ctx);

const  rectangleNeutral54 = new Rectangle(200,250,size,size,"black",6,-1,5,4);
 rectangleNeutral54.drawRectangle(ctx);

const  rectangleNeutral55 = new Rectangle(250,250,size,size,"#800000",6,-1,5,5);
 rectangleNeutral55.drawRectangle(ctx);

const  rectangleNeutral56 = new Rectangle(300,250,size,size,'blue',6,-1,5,6);
rectangleNeutral56.drawRectangle(ctx);

const  rectangleNeutral57 = new Rectangle(350,250,size,size,'#f0f0f0',6,-1,5,7);
rectangleNeutral57.updateDrawRectangle(ctx);



const  rectangleNeutral60 = new Rectangle(0,300,size,size,'#f0f0f0',7,-1,6,0);
rectangleNeutral60.updateDrawRectangle(ctx);

const  rectangleNeutral61 = new Rectangle(50,300,size,size,'#800000',7,-1,6,1);
rectangleNeutral61.drawRectangle(ctx);

const  rectangleNeutral62 = new Rectangle(100,300,size,size,'yellow',7,-1,6,2);
rectangleNeutral62.drawRectangle(ctx);

const  rectangleNeutral63 = new Rectangle(150,300,size,size,'#FFC0CB',7,-1,6,3);
rectangleNeutral63.drawRectangle(ctx);

const  rectangleNeutral64 = new Rectangle(200,300,size,size,"#00cc00",7,-1,6,4);
 rectangleNeutral64.drawRectangle(ctx);

const  rectangleNeutral65 = new Rectangle(250,300,size,size,"#33ffff",7,-1,6,5);
 rectangleNeutral65.drawRectangle(ctx);

const  rectangleNeutral66 = new Rectangle(300,300,size,size,'blue',7,-1,6,6);
rectangleNeutral66.drawRectangle(ctx);

const  rectangleNeutral67 = new Rectangle(350,300,size,size,'#f0f0f0',7,-1,6,7);
rectangleNeutral67.updateDrawRectangle(ctx);



const  rectangleNeutral70 = new Rectangle(0,350,size,size,'#f0f0f0',8,-1,7,0);
rectangleNeutral70.updateDrawRectangle(ctx);

const  rectangleNeutral71 = new Rectangle(50,350,size,size,'#00cc00',8,-1,7,1);
rectangleNeutral71.drawRectangle(ctx);

const  rectangleNeutral72 = new Rectangle(100,350,size,size,'#33ffff',8,-1,7,2);
rectangleNeutral72.drawRectangle(ctx);

const  rectangleNeutral73 = new Rectangle(150,350,size,size,'#FFC0CB',8,-1,7,3);
rectangleNeutral73.drawRectangle(ctx);

const  rectangleNeutral74 = new Rectangle(200,350,size,size,"#FFC0CB",8,-1,7,4);
 rectangleNeutral74.drawRectangle(ctx);

const  rectangleNeutral75 = new Rectangle(250,350,size,size,"blue",8,-1,7,5);
 rectangleNeutral75.drawRectangle(ctx);

const  rectangleNeutral76 = new Rectangle(300,350,size,size,'yellow',8,-1,7,6);
rectangleNeutral76.drawRectangle(ctx);

const  rectangleNeutral77 = new Rectangle(350,350,size,size,'#f0f0f0',8,-1,7,7);
rectangleNeutral77.updateDrawRectangle(ctx);




const  rectangleNeutral80 = new Rectangle(0,400,size,size,"#f0f0f0",9,-1,8,0);
rectangleNeutral80.updateDrawRectangle(ctx);

const  rectangleNeutral81 = new Rectangle(50,400,size,size,'#f0f0f0',9,-1,8,1);
rectangleNeutral81.updateDrawRectangle(ctx);

const  rectangleNeutral82 = new Rectangle(100,400,size,size,"#f0f0f0",9,-1,8,2);
rectangleNeutral82.updateDrawRectangle(ctx);

const  rectangleNeutral83 = new Rectangle(150,400,size,size,'#f0f0f0',9,-1,8,3);
rectangleNeutral83.updateDrawRectangle(ctx);

const  rectangleNeutral84 = new Rectangle(200,400,size,size,"#f0f0f0",9,-1,8,4);
rectangleNeutral84.updateDrawRectangle(ctx);

const  rectangleNeutral85 = new Rectangle(250,400,size,size,'#f0f0f0',9,-1,8,5);
rectangleNeutral85.updateDrawRectangle(ctx);

const  rectangleNeutral86 = new Rectangle(300,400,size,size,'#f0f0f0',9,-1,8,6);
rectangleNeutral86.updateDrawRectangle(ctx);

const  rectangleNeutral87 = new Rectangle(350,400,size,size,'#f0f0f0',9,-1,8,7);
rectangleNeutral87.updateDrawRectangle(ctx);



rectangle.push(rectangleNeutral00,rectangleNeutral01,rectangleNeutral02,rectangleNeutral03,rectangleNeutral04,rectangleNeutral05,rectangleNeutral06,rectangleNeutral07,
  rectangleNeutral10,rectangleNeutral11,rectangleNeutral12,rectangleNeutral13,rectangleNeutral14,rectangleNeutral15,rectangleNeutral16,rectangleNeutral17,
  rectangleNeutral20,rectangleNeutral21,rectangleNeutral22,rectangleNeutral23,rectangleNeutral24,rectangleNeutral25,rectangleNeutral26,rectangleNeutral27,
  rectangleNeutral30,rectangleNeutral31,rectangleNeutral32,rectangleNeutral33,rectangleNeutral34,rectangleNeutral35,rectangleNeutral36,rectangleNeutral37,
  rectangleNeutral40,rectangleNeutral41,rectangleNeutral42,rectangleNeutral43,rectangleNeutral44,rectangleNeutral45,rectangleNeutral46,rectangleNeutral47,
  rectangleNeutral50,rectangleNeutral51,rectangleNeutral52,rectangleNeutral53,rectangleNeutral54,rectangleNeutral55,rectangleNeutral56,rectangleNeutral57,
    rectangleNeutral60,rectangleNeutral61,rectangleNeutral62,rectangleNeutral63,rectangleNeutral64,rectangleNeutral65,rectangleNeutral66,rectangleNeutral67,
   rectangleNeutral70,rectangleNeutral71,rectangleNeutral72,rectangleNeutral73,rectangleNeutral74,rectangleNeutral75,rectangleNeutral76,rectangleNeutral77,
  rectangleNeutral80,rectangleNeutral81,rectangleNeutral82,rectangleNeutral83,rectangleNeutral84,rectangleNeutral85,rectangleNeutral86,rectangleNeutral87);


$('#myMatrix tr').each(function(row, tr){
    TableData[row]={
        "0" : $(tr).find('td:eq(1)').text()
        , "1" :$(tr).find('td:eq(2)').text()
        , "2" : $(tr).find('td:eq(3)').text()
        , "3" : $(tr).find('td:eq(4)').text()
        ,"4" : $(tr).find('td:eq(5)').text()
        , "5" :$(tr).find('td:eq(6)').text()
        , "6" : $(tr).find('td:eq(7)').text()
        , "7" : $(tr).find('td:eq(8)').text()
    }
});
console.log('rectangle');
console.log(rectangle);
TableData.shift();
}

let intervalId;

canvas.addEventListener('click',(event)=>{
  let   BBoffsetX,BBoffsetY,response;
  response=canvas.getBoundingClientRect();
event.preventDefault();
event.stopPropagation();
  BBoffsetX=event.clientX -response.left;
  BBoffsetY=event.clientY-response.top;
check = check + 1 ;

  if(check==1){
   intervalId = setInterval(function(){
   interval = interval + 1;
    seconds.innerHTML = interval;
    if(interval == 59){
      seconds.innerHTML =0;
      interval =0;
      minutesInterval = minutesInterval + 1;
      minutes.innerHTML= minutesInterval
    }
    if(minutesInterval==59 && interval==59){
      minutes.innerHTML =0;
      minutesInterval =0;
      hourInterval= hourInterval+1;
      hours.innerHTML =hourInterval;
    }
  },1000);

}
for(let index=0; index<rectangle.length; index++){

   if(BBoffsetX>= rectangle[index].xPoint && BBoffsetX<=rectangle[index].xPoint+ rectangle[index].width && BBoffsetY>= rectangle[index].yPoint && BBoffsetY<= rectangle[index].yPoint+ rectangle[index].height){
       frontierList.push( rectangle[index].x+''+ rectangle[index].y);
       TableData[ rectangle[index].x][ rectangle[index].y] ='0';
       makeMatch( rectangle[index].color, rectangle[index].x, rectangle[index].y, rectangle[index].colorValue, rectangle[index],rectangle);
  }
}

let timerStatus = true;
for(let index=0; index < rectangle.length; index++){
  if(rectangle[index].colorValue!=0)
    timerStatus = false
}
if(timerStatus === true){
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
 ctx.textAlign = "center";
  ctx.fillText("Congratulations", canvas.width/2, canvas.height/2);
  clearInterval(intervalId);
}
    solution.clear();
    currentList.clear();
    visitedList.clear();


});

function makeMatch(color,indexRow,indexCol,colourValue,rect,rectangleArray){

  function getVisited(p, t){
    let joinRowCol= p+''+t;
    let status=false;
    visitedList.forEach (function(value) {
      if(value==joinRowCol)
        status = true;
      })
      return status;
  }

function  index(i, j){

  if(i<0 || j<0 || i>8 || j>7){
    return -1;
  }else{
      return 0;
    }

}

  function   validate(p,t,position){

    switch(position){

      case 'TOP':
      var rowVisited = p-1;
      if(index(rowVisited ,t)==0 && TableData[p-1][t]=='0'){

        if( getVisited(rowVisited ,t)==false){

          frontierList.push(rowVisited +''+t);
          solution.set(rowVisited+''+t,indexRow +''+indexCol);
          return 0;
        } else{
          return -1;
        }
      } else{
        return -1;
      }
      break;
      case 'RIGHT':
      var rowVisited = p;
        var colVisited = t+1;
      if(index(rowVisited ,colVisited)==0 && TableData?.[p]?.[t+1]=='0'){

        if(getVisited(rowVisited ,colVisited)==false){
          frontierList.push(rowVisited +''+colVisited);
          solution.set(rowVisited+''+colVisited,indexRow +''+indexCol);
          return 0;
        }else{
          return -1;
        }
      } else{
        return -1;
      }
      break;

      case 'BOTTOM':
      var rowVisited = p+1;
      var colVisited = t;
      if(index(rowVisited ,colVisited)==0 && TableData[p+1]?.[t]=='0'){

        if(getVisited(rowVisited ,colVisited)==false){
          frontierList.push(rowVisited +''+colVisited);
          solution.set(rowVisited+''+colVisited,indexRow +''+indexCol);
          return 0;
        }else{
          return -1;
        }
      } else{
        return -1;
      }
      break;

      case 'LEFT':
      var rowVisited = p;
      var colVisited = t-1;
      if(index(rowVisited ,colVisited)==0 && TableData?.[p]?.[t-1]=='0'){

        if(getVisited(rowVisited ,colVisited)==false){
          frontierList.push(rowVisited +''+colVisited);
          solution.set(rowVisited+''+colVisited,indexRow +''+indexCol);

          return 0;
        } else{
          return -1;
        }
      } else{
        return -1;
      }
      break;
    }
  }

    if(color === prevousColor){
      var keyValFrontier = frontierList.shift();

        currentList.forEach((point) => {
                                            if (point == pp) {
                                              currentList.delete(point);
                                          }
                                          });

      indexRow =parseInt(keyValFrontier.charAt(0), 10);
      indexCol =parseInt(keyValFrontier.charAt(1),10);
      currentList.add(indexRow +''+indexCol);
       var pp=indexRow +''+indexCol;
       currentList.add(pp);
       visitedList.add(pp);

         if(validate(indexRow,indexCol,'TOP')==0 ){
         }
         if(validate(indexRow,indexCol,'RIGHT')==0){
         }
         if(validate(indexRow,indexCol,'BOTTOM')==0 ){
         }
         if(validate(indexRow,indexCol,'LEFT' )==0 ){
         }

      if(frontierList.length==0){
        return 0;
      }


      if( makeMatch(color,indexRow,indexCol,colourValue,rect,rectangleArray)==0){
         let processedResult = processSolutionArray(solution,rect, prevousIndex,rectangleArray);
      }

} else{
               prevousColor = color;
               prevousIndex = indexRow+''+indexCol;
               frontierList.pop(prevousIndex);
        }
}

 function processSolutionArray(processedArray ,rect,valueIndex ,rectangleArray){

   let indexR;
  let indexC;
  var indexRR;
  var indexCC;
  let counting=0;
  let solutionArray =[];
  let copySolutionArray=[];
  let RR,CC;
  let i,j;
  var keys;

  var rectangleCordinate = rect.x+''+rect.y;
  while (valueIndex != rectangleCordinate) {
    keys = valueIndex;
    if(valueIndex = processedArray.get(keys)){
      solutionArray.push(keys);
      solutionArray.push(valueIndex);
    }
}

for(let index =0; index < solutionArray.length ; index++){
  if(copySolutionArray.indexOf(solutionArray[index])==-1){
    copySolutionArray.push(solutionArray[index]);
  }
}

for(i=0, j=2  ; j<copySolutionArray.length; i++,j++ ){
    indexRR =parseInt(copySolutionArray[i].charAt(0), 10);
    indexCC =parseInt(copySolutionArray[i].charAt(1),10);

    RR= parseInt(copySolutionArray[j].charAt(0), 10);
    CC= parseInt(copySolutionArray[j].charAt(1), 10);
    if(indexRR != RR && indexCC!=CC){
      counting = counting + 1;
      if(counting>2)
        return -1;
    }
}

for(var index=0; index<copySolutionArray.length;index++){
    indexR =parseInt(copySolutionArray[index].charAt(0), 10);
    indexC =parseInt(copySolutionArray[index].charAt(1),10);


for(var counter = 0; counter < rectangleArray.length;counter++){



    if(rectangleArray[counter].x == indexR && rectangleArray[counter].y==indexC){
        if(rectangleArray[counter].width==25){
          locateMatrixOnet(25);
        }
        if(rectangleArray[counter].width==50){

          locateMatrixOnet(50);
        }
        if(rectangleArray[counter].width==75){
          locateMatrixOnet(75);
        }
        if(rectangleArray[counter].width==100){
          locateMatrixOnet(100);
        }

    }

  }
}


function locateMatrixOnet(locate){
   var joinRC = indexR+""+indexC;
      let updateTableValue = document.getElementById(joinRC);

       updateTableValue.innerText = "0";
        ctx.fillStyle="red";
       ctx.fillRect(rectangleArray[counter].xPoint, rectangleArray[counter].yPoint, locate, locate);
       ctx.lineWidth=2;
       ctx.strokeStyle = 'white';
       ctx.strokeRect(rectangleArray[counter].xPoint, rectangleArray[counter].yPoint, locate, locate);
       rectangleArray[counter].setColor("#f0f0f0",ctx);
       TableData[indexR][indexC] ='0';
}

function clear(){
  for(var index=0; index<copySolutionArray.length;index++){
    indexR =parseInt(copySolutionArray[index].charAt(0), 10);
    indexC =parseInt(copySolutionArray[index].charAt(1),10);

for(var counter = 0; counter < rectangleArray.length;counter++){

    if(rectangleArray[counter].x == indexR && rectangleArray[counter].y==indexC){
      if(rectangleArray[counter].width==25)
        ctx.clearRect(rectangleArray[counter].xPoint, rectangleArray[counter].yPoint, 25, 25);
     if(rectangleArray[counter].width==50)
        ctx.clearRect(rectangleArray[counter].xPoint, rectangleArray[counter].yPoint, 50, 50);
     if(rectangleArray[counter].width==75)
        ctx.clearRect(rectangleArray[counter].xPoint, rectangleArray[counter].yPoint, 75, 75);
     if(rectangleArray[counter].width==100)
        ctx.clearRect(rectangleArray[counter].xPoint, rectangleArray[counter].yPoint, 100, 100);
     }

   }
 }
}


 setTimeout(clear, 3000);
prevousIndex =-999;
prevousColor =-999;
prevousRowIndex =-999;
prevousColIndex =-999;
}
