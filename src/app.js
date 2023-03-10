/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-03-09
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
var baseInput=document.querySelector("#base");
var heightInput=document.querySelector("#height");
var areaInput=document.querySelector("#area");
var calcButton=document.querySelector("#calcButton");

calcButton.addEventListener("click",()=>{
    workInput();
})
function workInput() {
    //console.log(typeof baseInput.value)
    let base=Number(baseInput.value);
    let height=Number(heightInput.value);
    let area=calcTriangleArea(base,height);
    areaInput.value=area+" cm2";
}

function calcTriangleArea(base,height) {
    return base*height/2;
}