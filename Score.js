        let r1=0;
        let r2=0;
        let ba1="Rohit";
        let ba2="Virat";
        document.getElementById("b11").onclick=function(){
            r1=r1+1;
            document.getElementById("p1").innerHTML=r1;
            updateScore();
        }
        document.getElementById("b12").onclick=function(){
            r1=r1+4;
            document.getElementById("p1").innerHTML=r1;
            updateScore();
        }
        document.getElementById("b13").onclick=function(){
            r1=r1+6;
            document.getElementById("p1").innerHTML=r1;
            updateScore();
        }
        document.getElementById("b21").onclick=function(){
            r2=r2+1;
            document.getElementById("p2").innerHTML=r2;
            updateScore();
        }
        document.getElementById("b22").onclick=function(){
            r2=r2+4;
            document.getElementById("p2").innerHTML=r2;
            updateScore();
        }
        document.getElementById("b23").onclick=function(){
            r2=r2+6;
            document.getElementById("p2").innerHTML=r2;
            updateScore();
        }
        function updateScore(){
        if(r2>r1){
        document.getElementById("h1").innerHTML=ba2;
        document.getElementById("p1").innerHTML=r2;
        document.getElementById("h2").innerHTML=ba1;
        document.getElementById("p2").innerHTML=r1;
        }
        }
    