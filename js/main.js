const bgArray = ["/media/cardbg/redblack.jpg", "/media/cardbg/blueblack.jpg", "/media/cardbg/green.jpg", "/media/cardbg/yellowblack.jpg"]

let bgSelect1 = document.getElementById('bgSelect1');
let bgSelect2 = document.getElementById('bgSelect2');
let bgSelect3 = document.getElementById('bgSelect3');
let bgSelect4 = document.getElementById('bgSelect4');

bgSelect1.style.background = `url(${bgArray[0]})`;
bgSelect2.style.background = `url(${bgArray[1]})`;
bgSelect3.style.background = `url(${bgArray[2]})`;
bgSelect4.style.background = `url(${bgArray[3]})`;


// functions

bgSelect1.onclick = () => {

    bgSelect2.style.visibility = "hidden";
    bgSelect3.style.visibility = "hidden";
    bgSelect4.style.visibility = "hidden";

}

bgSelect2.onclick = () => {
    
    bgSelect1.style.visibility = "hidden";
    bgSelect3.style.visibility = "hidden";
    bgSelect4.style.visibility = "hidden";

}

bgSelect3.onclick = () => {
    
    bgSelect1.style.visibility = "hidden";
    bgSelect2.style.visibility = "hidden";
    bgSelect4.style.visibility = "hidden";

}

bgSelect4.onclick = () => {
  
    bgSelect1.style.visibility = "hidden";
    bgSelect2.style.visibility = "hidden";
    bgSelect3.style.visibility = "hidden";

}