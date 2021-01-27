const bgArray = ["/media/cardbg/redblack.jpg", "/media/cardbg/blueblack.jpg", "/media/cardbg/green.jpg", "/media/cardbg/yellowblack.jpg"];
const NameArrayMale = ["John","Adam","Mike","Bryon","Josh","Bryce","Jake","Zack","Tim"];
const NameArrayFemale = ["Abby","Makenna","Gizelle","Sarah","Kimm","Tetra"];
const LastArrayMale = ["Johnson","Smith","Ryder"];
const GenderArray = ["Human - Male","Human - Female","other"];
const ImgArray = ["/media/userImg/furry.jpg","/media/userImg/reptileman.jpg"];

const otherArray = NameArrayMale.concat(NameArrayFemale);

let genderInput = document.getElementById("gender").value;
let otherInput = document.getElementById("otherDiv").value;

if(genderInput == "other") {

    otherDiv.style.visibility = visible;

}

let bgSelect1 = document.getElementById('bgSelect1');
let bgSelect2 = document.getElementById('bgSelect2');
let bgSelect3 = document.getElementById('bgSelect3');
let bgSelect4 = document.getElementById('bgSelect4');

let otherDiv = document.getElementById("otherDiv");

let subBtn = document.querySelector("#btn");

let ranBtn = document.querySelector("#randomBtn");



let bgMain = document.getElementById('mainImg');


bgSelect1.style.background = `url(${bgArray[0]})`;
bgSelect2.style.background = `url(${bgArray[1]})`;
bgSelect3.style.background = `url(${bgArray[2]})`;
bgSelect4.style.background = `url(${bgArray[3]})`;

otherDiv.style.visibility = "hidden";


// functions

bgSelect1.onclick = () => {

    bgMain.style.background = `url(${bgArray[0]})`;

}

bgSelect2.onclick = () => {
    
    bgMain.style.background = `url(${bgArray[1]})`;

}

bgSelect3.onclick = () => {
    
    bgMain.style.background = `url(${bgArray[2]})`;

}

bgSelect4.onclick = () => {
  
    bgMain.style.background = `url(${bgArray[3]})`;

}

subBtn.onclick = () => {

    let nameInput = document.getElementById("name").value;

    let genderInput = document.getElementById("gender").value;

    let ageInput = document.getElementById("age").value;

    let otherInput = document.getElementById("otherDiv").value;

    let abilInput = document.getElementById("abilDiv").value;

    let abilArray = abilInput.split("; ");

    let nameDiv = document.createElement("p");

    let abilDiv = document.createElement("p");

    let genderDiv = document.createElement("p");

    let ageDiv = document.createElement("p");

    let CharImg = document.createElement("img");

    nameDiv.className = "nameClass";
    genderDiv.className = "nameClass";
    ageDiv.className = "nameClass";
    CharImg.className = "imgClass";
    abilDiv.className = "nameClass";

    const listTrees = () => {
        let treeList = "";
    
        abilArray.forEach(tree => {
            treeList += `${tree} <br>`
        })
    
        abilDiv.innerHTML = `${nameInput}'s abilities: <br>${treeList}`;
    
    };

    nameDiv.textContent = nameInput;
    genderDiv.textContent = `Gender: ${genderInput}`;
    ageDiv.textContent = `Age: ${ageInput}`;
    
    switch(otherInput) {

        case 'Furry' :
        case 'furry' :
        case 'furrie' :
        case 'Furrie' :
            CharImg.src = ImgArray[0];
        break;
        case 'reptile' :
        case 'Reptile' :
        case 'Lizard' :
        case 'lizard' :
        case 'lizardfolk' :
        case 'Lizardfolk' :
            CharImg.src = ImgArray[1];
        break;

    }

    // function showImage(src,CharImg) {
    //     var fr=new FileReader();
    //     // when image is loaded, set the src of the image where you want to display it
    //     fr.onload = function(e) { CharImg.src = this.result; };
    //     src.addEventListener("change",function() {
    //       // fill fr with image data    
    //       fr.readAsDataURL(src.files[0]);
    //     });
    //   }
      
    //   var src = document.getElementById("userImg");
    //   let realImg = showImage(src,CharImg);

    // abilDiv.innerHTML = `${nameInput}'s abilities: ${abilArray}<br>.`
    listTrees();

    if (genderInput == "other") {


        genderDiv.textContent = `Gender: ${otherInput}`;

    }


    bgMain.appendChild(nameDiv);
    bgMain.appendChild(CharImg);
    bgMain.appendChild(genderDiv);
    bgMain.appendChild(ageDiv);
    bgMain.appendChild(abilDiv);

    console.log(nameDiv);

    nameInput = document.getElementById("name").value = "";
    genderInput = document.getElementById("gender").value = "";
    ageInput = document.getElementById("age").value = "";
    abilInput = document.getElementById("abilDiv").value = "";


}

ranBtn.onclick = () => {

    let ranNameMale = Math.floor(Math.random() * NameArrayMale.length);
    let ranLastMale = Math.floor(Math.random() * LastArrayMale.length);
    let ranOther = Math.floor(Math.random() * otherArray.length);
    
    let ranAge = Math.floor(Math.random() * 100);

    let ranGender = Math.floor(Math.random() * GenderArray.length);

    let ranNameFemale = Math.floor(Math.random() * NameArrayFemale.length);

    let genderInput = document.getElementById("gender").value = GenderArray[ranGender];

    let AgeInput = document.getElementById("age").value = ranAge;

    if(genderInput == "Male") {
    let nameInput = document.getElementById("name").value = `${NameArrayMale[ranNameMale]} ${LastArrayMale[ranLastMale]}`;
    }

    if(genderInput == "Female") {
        let nameInput = document.getElementById("name").value = `${NameArrayFemale[ranNameFemale]} ${LastArrayMale[ranLastMale]}`;
    }

    if (genderInput == "other") {

        let otherInput = document.getElementById("otherDiv").value;

        let nameInput = document.getElementById("name").value = `${otherArray[ranOther]} ${LastArrayMale[ranLastMale]}`;

        otherDiv.style.visibility = "visible";
        genderDiv.textContent = otherInput;

    }

}