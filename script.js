let speed=2;
function getRandom(){
   return Math.floor(Math.random()*8)}
chooseBlock=getRandom();
const canvas1=document.getElementById('canvas');
const ctx=canvas1.getContext('2d');
const images=['cat/Jump1.png','cat/Jump2.png','cat/Jump3.png','cat/Jump4.png','cat/Jump5.png','cat/Jump6.png','cat/Jump7.png','cat/Jump8.png'];
const imageloaded=[];
let curFrame=0;
function preloading(images,callback){
    let loadcount=0;
    images.forEach((loc,i) =>{
        const img=new Image();
        img.src=loc;
        img.onload=function(){
            imageloaded[i]=img;
            loadcount++;
            if(loadcount===images.length){
                callback();
            }
        }
    });
}
function newframe(){
    ctx.clearRect(0,0,canvas1.width,canvas1.height);
    ctx.drawImage(imageloaded[curFrame],0,0,canvas1.height,canvas1.width);
    curFrame=(curFrame+1)%images.length;
    requestAnimationFrame(newframe);
}
preloading(images,function(){
    requestAnimationFrame(newframe);   
});
