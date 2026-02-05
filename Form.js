function sumbit(){
            var a = document.getElementById("d1").value;
            var b = document.getElementById("d2").value;
            var c = document.getElementById("d3").value;
            var d = document.getElementById("d4").value;
            var e = document.getElementById("d5").value;

            localStorage.setItem("First Name", a);
            localStorage.setItem("Second Name", b);
            localStorage.setItem("Email", c);
            localStorage.setItem("Password", d);
            localStorage.setItem("Date of Birth", e);
            console.log("sucess");

            alert("This page is store the data");

        }

        