const inp= document.getElementById('user');
const qrimage= document.getElementById('image');
const qrbutton = document.getElementById('buttn');
console.log(inp,qrimage,qrbutton);
qrbutton.addEventListener('click',()=>{
    const inputValue= inp.value;
    console.log(inputValue);
    if(!inputValue){
        alert("enter the valid URL");
        return;
    }
    else{
        qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimage.alt=`${inputValue}`;
    }
});