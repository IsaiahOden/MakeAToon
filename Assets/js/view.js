import { Character } from "./configure.js";

console.log("view.js run\n")
const stored = localStorage.getItem("Main");
const parsed = JSON.parse(stored);
const uChar = Object.assign(new Character(), parsed);
console.log(uChar);

const namePHTML = document.getElementById("nameHere");
const racePHTML = document.getElementById("raceHere");
const classPHTML = document.getElementById("classHere");
const specPHTML = document.getElementById("specHere");
const regionPHTML = document.getElementById("regionHere");
const charImageHTML = document.getElementById("char-image");

namePHTML.innerHTML = "<h3>Your Name Is: </h3>" + uChar.charName;
racePHTML.innerHTML = "<h3>Your Race Is: </h3>" + uChar.race;
classPHTML.innerHTML = "<h3>Your Class Is: </h3>" + uChar.cclass;
specPHTML.innerHTML = "<h3>Your Specialization Is: </h3>" + uChar.spec;
regionPHTML.innerHTML = "<h3>Your Region Is: </h3>" + uChar.region;
let randomPic = ["Assets/img/BabyKia.jpg", "Assets/img/Frank.webp", "Assets/img/GenWow1.png", "Assets/img/LepDaHood.jpg", "Assets/img/Yuno.jpeg", "Assets/img/Teejayx6.jpg", "Assets/img/Thrall.webp"];


let i = getRandomInt(0, randomPic.length);
console.log(i);
charImageHTML.src = randomPic[i];
console.log(randomPic[i]);

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }


const viewBtnHTML = document.getElementById("viewBTN");
viewBtnHTML.addEventListener("click", () => {
  charImageHTML.style.visibility = "visible";
})

