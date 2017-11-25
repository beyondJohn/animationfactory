(function(){
    function trackdiv(){
        
        const mydiv = document.getElementsByClassName("ball-animation")[0];
        setTimeout(() => {
            
        }, 200);
        setInterval(() => {
            console.log(getPos(mydiv).x+","+getPos(mydiv).y);    
        }, 50)
        
        
    }
    trackdiv();
    function getPos(el) {
        // yay readability
        for (var lx=0, ly=0;
             el != null;
             lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        return {x: lx,y: ly};
    }
})()
var scale;
//12% {top: 250em;left: 235em;-webkit-transform: rotate(-20deg) scaleY(1.2);}
function keyframes(top,left,transform,rotate,scale,percentincrement){



}
function animation(sStart,linear,sStop,normal,forwards,infinite,rotatingball){
    
}