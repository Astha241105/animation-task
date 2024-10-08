let speed=2;
function getRandom(){
   return Math.floor(Math.random()*8)}
chooseBlock=getRandom();
const canvas=getElementById('canvas');
let ctx=canvas.getContext('2d');
const canvas.width=600;
const images=['cat/Jump1.png','cat/Jump2.png','cat/Jump3.png','cat/Jump4.png','cat/Jump5.png','cat/Jump6.png','cat/Jump7.png','cat/Jump8.png']
let curFrame=0;
function main(){
    ctx.clearRect(0,0,600,600);
    ctx.fillRect(50,50,50,50);
    ctx.drawImage(images[curFrame],0,0,canvas.height,canvas.width);
    curFrame=curFrame+1;
    requestAnimationFrame(main);

}
windows.requestAnimationFrame(main);
