function submitForm(){
                    let Name = document.getElementById("na").value;
                    let Number = document.getElementById("nu").value;
                    let Email = document.getElementById("ma").value;

                    if(Name==""){
                        document.getElementById("s1").innerHTML="Please Enter Name"
                        return false;
                    }
                    else{
                        document.getElementById("s1").innerHTML=""
                    }
                    if(Number==""){
                        document.getElementById("s2").innerHTML="Please Enter Number"
                        return false;
                    }
                    else if(Number==isNaN) {
                        document.getElementById('a2').innerHTML="Kindly Enter Number Type"
                        return false;
                    }
                    else{
                        document.getElementById("s2").innerHTML=""
                    }
                    if(Email==""){
                        document.getElementById("s3").innerHTML="Please Enter Email"
                        return false;
                    }
                    else{
                        document.getElementById("s3").innerHTML=""
                    }
                    return true;
                

                }