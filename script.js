function getRandom(){
    return Math.floor(Math.random()*9);}
 let canvas=document.getElementById('canvas1');
 let ctx=canvas.getContext('2d');
 const images=['cat/Jump1.png','cat/Jump2.png','cat/Jump3.png','cat/Jump4.png','cat/Jump5.png','cat/Jump6.png','cat/Jump7.png','cat/Jump8.png'];
 const imageloaded=[];
 let lasttime=0;
 const frameduration=300;
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
 function newframe(timetaken){
     ctx.clearRect(0,0,canvas.width,canvas.height);
     ctx.drawImage(imageloaded[curFrame],0,0,canvas.width,canvas.height);
 
     const elapsedtime=timetaken-lasttime;
 
     if(elapsedtime>frameduration){
     curFrame=(curFrame+1)%images.length;
       lasttime=timetaken;}
       requestAnimationFrame(newframe);
 }
 preloading(images,function(){
     requestAnimationFrame(newframe);   
 });