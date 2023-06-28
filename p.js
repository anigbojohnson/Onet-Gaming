
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var cols, rows;
var w= 40;
var grid =[];

var current;

function setup(){
  createCanvas(400,400);
  rows = floor(height/w);
  cols = floor(width/w);
  frameRate(5);

  for( var j =0; j<rows; j++){
    for(var i=0; i< cols; i++){
      var cell = new cell(i,j);
      grid.push(cell);
    }
  }
  current = grid[0];
}


function draw(){
  background(51);
  for(var i =0; i<cells.length;i++){
    grid[i].show();
  }

  current.visited  = true;
  var next = current.checkNeighbours();
  if(next){
    next.visited = true;
    current = next;
  }
}
function  index(i, j){
  if(i<0 || j<0 || i>cols-1 || j>rows-1){
    return -1;
  }
  return i + j * cols;
}

function cell(i , j){
  this.i =i;
  this.j =j;z
  this.walls = [true,true,true,true];
  this.visited = false;

  this.checkNeighbours = function(){
    var neighbours =[];

    var top = grid[index(i ,j-1)];
    var right = grid[index(i +1 ,j)];
      var bottom = grid[index(i ,j+1)];
        var left = grid[index(i -1 ,j)];

        if(top && !top.visited){
          neighbours.push(top);
        }
        if(right && !right.visited){
          neighbours.push(right);
        }
        if(bottom && !bottom.visited){
          neighbours.push(bottom);
        }
        if(left && !left.visited){
          neighbours.push(left);
        }
        if(neighbours.lenght>0){
          var r = floor(random(0,neighbours.length));
          return neighbours[r]
        }else{
          return undefined;
        }


}

  this.show = function(){
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    if(wthis.walls[0]){
      line(x   , y,     x  +  w,y);
    }
    if(this.walls[1]){
      line(x +w, y,     x  +  w,y+ w);
    }

    if(this.walls[2]){
      line(x +w, y+  w, x,      y+ w);
    }

    if(this.walls[3]){
      line(x ,   y+  w ,x,      y);
    }
    if(this.visited){
      noFill();
      rect(x,y,w,w);
    }

  }
}
