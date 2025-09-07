const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');


let size = parseInt(sizes.value, 10);

// Events
generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (qrText.value.trim().length === 0){
        alert("Enter the text or URL to generate your QR Code");
    }
    renderQRCode();
});


sizes.addEventListener('change', (e)=>{
    size = parseInt(e.target.value, 10);
    if (qrText.value.trim()) renderQRCode();
});


downloadBtn.addEventListener('click', (e)=>{
    const img = document.querySelector('.qr-body img');
    const canvas = qrContainer.querySelector('canvas');

    if (img){
        downloadBtn.href = img.src;
    }
    else if (canvas){
        downloadBtn.href = canvas.toDataURL('image/png');
    } else {
        e.preventDefault();
        alert('Please generate a QR code first.');
    }
});


// rendering the QR Code
function renderQRCode(){
    qrContainer.innerHTML = ""; // clear previous
    new QRCode(qrContainer, {
        text:qrText.value.trim(),
        height:size,
        width:size,
        colorLight:"#ffffff",
        colorDark: "#000000",
        correctLevel: QRCode.CorrectLevel.H
    });
}