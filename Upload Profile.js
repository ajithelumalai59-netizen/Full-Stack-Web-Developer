 function sumit(){
        let Name = document.getElementById("n1").value;
        document.getElementById("n2").innerHTML=Name;
        let src = document.getElementById("s1").value;
        document.getElementById("s2").src= src;
        let About = document.getElementById("b1").value;
        document.getElementById("b2").innerHTML=About;
    }
    function sumitb1(){
        document.getElementById("profile").style.backgroundColor='white';
        document.getElementById("profile").style.color='black';
        document.getElementById("profile").style.border='5px black solid';
    }
    function sumitb2(){
        document.getElementById("profile").style.backgroundColor='black';
        document.getElementById("profile").style.color='white';
       
    }