src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"

function generateQRCode(){
            const text = document.getElementById("text").value;
            const qrCodeGenerate= document.getElementById("qrcode");

            qrCodeGenerate.innerHTML ="";
            if(text.trim() !=""){
                new QRCode(qrCodeGenerate, {
                    text:text,
                    width:150,
                    height:150
                });
            }
        }    