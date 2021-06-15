import Furikake from './furikake.js';

let stage;
let ctx;
let dpr;
let furikakeNum = 15;
let furikakeArr = [];
let objW = 65;
let images = ['../img/bird.png','../img/dog.png'];
let imgArr = [];

export default class Motion {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(){
    this.initCanvas();
  }

  ///////////////////////////
  ////////////////////////////
  initCanvas(){

    stage = document.getElementById('stage');
    if(!stage || !stage.getContext ) return false;
    ctx = stage.getContext('2d');
    dpr = window.devicePixelRatio || 1;
    stage.width = window.innerWidth * dpr;
    stage.height = window.innerHeight * dpr;
    ctx.scale(dpr,dpr);
    stage.style.width = window.innerWidth + 'px';
    stage.style.height = window.innerHeight + 'px';
    let num = 0;

    for(let i=0; i<images.length; i++){
      let img = new Image();
      img.src = images[i];
      imgArr.push(img);
    }

    for(let i=0; i<furikakeNum; i++){
      num++;
      if(num >= images.length) num = 0;
      let degree = Math.floor(Math.random() * 360);
      let x = Math.floor(stage.width / furikakeNum) * i + (objW / 2) + 20;
      let furikake = new Furikake(x,degree,imgArr[num]);
      furikakeArr.push(furikake);
    }

    setTimeout(function(){
      for(let i=0; i<furikakeNum; i++){
        num++;
        if(num >= images.length) num = 0;
        let degree = Math.floor(Math.random() * 360);
        let x = Math.floor(stage.width / furikakeNum) * i + (objW / 2) + 20;
        let furikake = new Furikake(x,degree,imgArr[num]);
        furikakeArr.push(furikake);
      }
    },10000);

    this.renderFurikake();

  }

  ///////////////////////////
  /// renderFurikake
  ////////////////////////////
  renderFurikake(){

    window.requestAnimationFrame(this.renderFurikake.bind(this));

    ctx.clearRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = 'rgba(125,201,239,1)';

    for(let i=0,len=furikakeArr.length; i<len; i++){
      let furikake = furikakeArr[i];
      if(furikake.dir == 1){
        furikake.dy = Math.floor(Math.cos(furikake.radius) * 30);
      }else if(furikake.dir == 2){
        furikake.dy = Math.floor(Math.sin(furikake.radius) * 30);
      }else{
        furikake.dy = Math.floor(Math.cos(furikake.radius) * 30);
      }
      furikake.radius += furikake.speedX;
      let x = furikake.x + furikake.dy;
      furikake.y  = furikake.y + furikake.speedY;
      let y = furikake.y;
      if(furikake.y > (stage.height + objW)){
        furikake.y = -objW;
      }

      ctx.drawImage(furikakeArr[i].img,x,y);

    }

  }

}
